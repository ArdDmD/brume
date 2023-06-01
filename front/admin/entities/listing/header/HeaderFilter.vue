<template>
  <div class="filter-select pl-1">
    <AppChip
      @close="$emit('removeFilter')"
      @click="toggleModal"
    >
      {{title}}: {{select[itemText]}}
    </AppChip>
    <div class="filter-select__drop">
      <v-menu
        v-model="isModalOpen"
        offset="3"
        min-width="max-content"
        attach
      >
        <v-list class="pt-0 pb-0">
          <HeaderFilterWrapper
            v-for="(item) in itemsList"
            :key="item.id"
            @click="selectHandler(item)">
            {{item[itemText]}}
          </HeaderFilterWrapper>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>
<script>
import {AppChip} from "~/shared";
import {ref} from "vue";
import {useNuxtApp} from "nuxt/app";
import HeaderFilterWrapper from "./HeaderFilterWrapper";
export default {
  name:'HeaderFilter',
  components: {HeaderFilterWrapper, AppChip},
  props:{
    itemText:{
      type:String,
      default:'name'
    },
    filterBy: {
      type:String,
      default:'id',
    },
    query: {
      type:String,
      default: ''
    },
    title: {
      type:String,
      default: 'Фильтр',
    },
  },
  emits:['removeFilter', 'selectFilter', 'changeFilter'],
  async setup(props, {emit}) {
    const {$api} = useNuxtApp()

    const isModalOpen = ref(true)
    const toggleModal = () => {
      isModalOpen.value = !isModalOpen.value
    }

    const loadItems = async () => {
      try {
        const data = await $api(props.query)
        return data
      } catch (e) {
        console.error(e)
        return []
      }
    }

    const itemsList = ref([])
    if (itemsList.value.length <= 0) {
      itemsList.value = await loadItems()
    }

    const select = ref({})
    const selectHandler = (item) => {
      emit(  Object. keys(select.value).length > 0
        ? 'changeFilter'
        : 'selectFilter',
        {
          value:getFilterValue(item),
          filterBy: props.filterBy
        }
      )
      select.value = item
    }
    const getFilterValue = (item) => {
      const field = props.filterBy.split('.').pop()
      return item[field]
    }
    return {
      isModalOpen,
      itemsList,
      select,
      selectHandler,
      toggleModal
    }
  }
}
</script>
<style lang="scss" scoped>
.filter {
  &-select{
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;
    &__drop {
      position: absolute;
      top: 62px;
    }
  }
}
</style>
