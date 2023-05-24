<template>
  <div class="filter-select pl-1">
    <AppChip :id="`filters-list-${index}`" @close="$emit('removeFilter')">
      {{title}}: {{select[itemText]}}
    </AppChip>
    <teleport to="body">
      <v-menu
        v-model="isModalOpen"
        offset="3"
        min-width="max-content"
        :activator="`#filters-list-${index}`"
      >
        <v-list class="pt-0 pb-0">
          <FilterItemWrapper
            v-for="(item) in itemsList"
            :key="item.id"
            @click="selectHandler(item)">
            {{item[itemText]}}
          </FilterItemWrapper>
        </v-list>
      </v-menu>
    </teleport>
  </div>
</template>
<script>
import {AppChip} from "~/shared";
import {ref} from "vue";
import {useNuxtApp} from "nuxt/app";
import {FilterItemWrapper} from "~/shared";
export default {
  name:'HeaderFilter',
  components: {FilterItemWrapper, AppChip},
  props:{
    itemText:{
      type:String,
      default:'name'
    },
    query: {
      type:String,
      default: ''
    },
    title: {
      type:String,
      default: 'Фильтр',
    },
    index:{
      type: Number,
      default: null,
    }
  },
  emits:['removeFilter'],
  async setup(props) {
    const {$api} = useNuxtApp()

    const isModalOpen = ref(true)

    const loadItems = async () => {
      const data = await $api(props.query)
      return data
    }

    const itemsList = ref([])
    if (itemsList.value.length <= 0) {
      itemsList.value = await loadItems()
    }

    const select = ref({})
    const selectHandler = (item) => {
      select.value = item
    }
    return {
      isModalOpen,
      itemsList,
      select,
      selectHandler
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
    &__item {}
  }
}
</style>
