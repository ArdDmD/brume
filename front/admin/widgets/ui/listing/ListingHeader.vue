<template>
  <div>
    <div
      class="listing-header"
      id="filters-list"
    >
      <div class="listing-header__control">
        <HeaderSearch
          @search="searchHandler"
          @searchReset="$emit('resetSearch')"
          @openModal="openFiltersSelect"
        />
      </div>
      <div class="listing-header__actions pl-2 pr-2">
        <slot name="actions"/>
      </div>
    </div>

    <div class="listing-header__select" v-if="filters.length > 0">
<!--      TODO отдельный компонент -->
      <teleport to="body">
        <v-menu
          activator="#filters-list"
          width="max-content"
          :min-width="0"
          :offset="3"
          :open-on-click="false"
          v-model="isFiltersSelectOpen"
        >
          <v-list class="pt-0 pb-0" >
            <v-list-item
              v-for="item in notSelectedFilters"
              :key="item.keyWord"
              class="listing-header__filter"
              @click="selectFilter(item)"
            >
              {{item.title}}
            </v-list-item>
          </v-list>
        </v-menu>
      </teleport>
    </div>
  </div>
</template>
<script>
import {computed, ref} from 'vue'
import {HeaderSearch} from "~/features";
export default {
  name:'ListingHeader',
  components: {HeaderSearch},
  props:{
    searchFields:{
      type: Array,
      default:() => ([])
    },
    filters:{
      type:Array,
      default:() =>([])
    }
  },
  emits:['search', 'resetSearch'],
  setup(props, {emit}) {
    const searchValue = ref('')
    const constructSearchFields = (val) => {
      return props.searchFields.reduce((acc, field) => {
        acc[field] = val
        return acc
      },{})
    }

    const searchHandler = async (val) => {
      const searchQuery = constructSearchFields(val)
      emit('search', searchQuery)
    }


    const selectedFilters = ref([])
    const selectFilter = (obj) => {
      selectedFilters.value.push(obj)
    }

    const isFiltersSelectOpen = ref(false)
    const openFiltersSelect = () => {
      isFiltersSelectOpen.value = true
    }

    const notSelectedFilters = computed(() => {
      const dictionary = selectedFilters.value.map(e => e.filterBy)
      return props.filters.filter(e => {
        return !dictionary.includes(e.filterBy)
      })
    })

    return {
      searchValue,
      searchHandler,
      selectFilter,
      selectedFilters,
      isFiltersSelectOpen,
      openFiltersSelect,
      notSelectedFilters
    }
  },
}
</script>
<style lang="scss" scoped>
$row-height: 44px;
.listing {
  &-header {
    height: $row-height;
    background: $white;
    border: $border;
    display: grid;
    grid-template-columns: 1fr minmax($row-height,max-content);
    box-shadow: $shadow;
    margin-bottom: 2px;

    &__actions {
      display: flex;
      align-items: center;
      height: 100%;
    }
    &__control {
      box-shadow: 1px 0px 0px 0px rgba(218, 218, 218, 1);
      display: grid;
      grid-template-columns: 1fr;
    }

    &__filter {
      cursor: pointer;
      transition: background-color $transition;
      &:hover {
        background-color: rgba(0,0,0,0.05);
      }
    }
  }
}
</style>
