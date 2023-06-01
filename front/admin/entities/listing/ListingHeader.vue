<template>
  <div>
    <div
      class="listing-header"
    >
      <div class="listing-header__control">
        <HeaderSearch
          @search="searchHandler"
          @searchReset="$emit('resetSearch')"
          @openModal="openFiltersSelect"
          v-if="selectedFiltersList.length === 0"
          @input="closeFiltersSelect"
        />
        <HeaderFilters
          :has-not-selected="notSelectedFiltersList.length > 0"
          :filters="selectedFiltersList"
          @removeFilter="removeFilter"
          @selectFilter="selectFilter"
          @changeFilter="changeFilter"
          @openModal="openFiltersSelect"
          v-else
        />
      </div>

      <div class="listing-header__actions pl-2 pr-2">
        <slot name="actions"/>
      </div>
    </div>

    <div class="listing-header__select" v-if="filters.length > 0">
<!--      TODO отдельный компонент -->
        <v-menu
          width="max-content"
          :min-width="0"
          :open-on-click="false"
          :attach="true"
          v-model="isFiltersSelectOpen"
        >
          <v-list class="pt-0 pb-0" >
            <v-list-item
              v-for="item in notSelectedFiltersList"
              :key="item.keyWord"
              class="listing-header__filter"
              @click="selectFilterList(item)"
            >
              {{item.title}}
            </v-list-item>
          </v-list>
        </v-menu>
    </div>
  </div>
</template>
<script>
import {computed, ref, unref} from 'vue'
import HeaderSearch from "./header/HeaderSearch";
import HeaderFilters from "./header/HeaderFilters";
export default {
  name:'ListingHeader',
  components: {HeaderSearch, HeaderFilters},
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
    const constructRelationFields = (val) => {
      return val.reduce((acc,e) =>{
        const [field, value] = Object.entries(e)[0]
        acc[field] = value
        return acc
      }, {})
    }
    const searchHandler = async (val) => {
      let searchObj = {}
      if (val) {
        searchObj = constructSearchFields(val)
      }
      if (selectedFilters.value.length > 0){
        searchObj = {...searchObj,...constructRelationFields(selectedFilters.value)}
      }

      emit('search', searchObj)
    }

    const selectedFilters = ref([])
    const selectFilter = ({filterBy, value}) => {
      selectedFilters.value.push({
        [filterBy]: value
      })
      searchHandler()
    }

    const selectedFiltersList = ref([])
    const selectFilterList = (obj) => {
      selectedFiltersList.value.push(obj)
    }
    const changeFilter = ({filterBy, value}) => {
      const filterId = selectedFilters.value.findIndex(e => !!e[filterBy])
      if (filterId === -1) return
      selectedFilters.value[filterId] = {
        [filterBy]: value
      }
      searchHandler()
    }

    const isFiltersSelectOpen = ref(false)
    const openFiltersSelect = () => {
      isFiltersSelectOpen.value = true
    }
    const closeFiltersSelect = () => {
      isFiltersSelectOpen.value = false
    }

    const notSelectedFiltersList = computed(() => {
      const dictionary = selectedFiltersList.value.map(e => e.filterBy)
      return props.filters.filter(e => {
        return !dictionary.includes(e.filterBy)
      })
    })

    const removeFilter = (id) => {
      selectedFilters.value.splice(id, 1)
      selectedFiltersList.value.splice(id, 1)
      searchHandler()
    }

    return {
      searchValue,
      searchHandler,
      selectFilterList,
      selectedFiltersList,
      isFiltersSelectOpen,
      openFiltersSelect,
      notSelectedFiltersList,
      removeFilter,
      closeFiltersSelect,
      selectFilter,
      changeFilter
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

    &__select {
      position: relative;
    }

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
