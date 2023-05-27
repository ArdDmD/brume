<template>
  <div class="listing pa-4">
    <ListingHeader
      :searchFields="['name','description']"
      :filters="filters"
      @search="searchHandler"
      @resetSearch="searchHandler"
    >
      <template #actions>
        <slot name="actions" />
      </template>

    </ListingHeader>

    <ListingContent
      :columns="columns"
      :list="localList"
      @needLoad="paginationHandler"
      @selectItem="selectItem"
    >
      <template #default="{item}">
        <slot
            name="cols"
            :item="item"
        />
      </template>
    </ListingContent>

    <ListingBottom
      :counter="counter"
    >
      <slot name="bottom-slot"></slot>
    </ListingBottom>
  </div>
</template>
<script>
import ListingHeader from "./ListingHeader";
import ListingContent from "./ListingContent";
import ListingBottom from "./ListingBottom";
import {useNuxtApp, useRoute, useRouter} from "nuxt/app";
import {LIMIT} from "./consts/pagination";
import {ref} from 'vue'
export default {
  name: 'ListingComponent',
  props: {
    columns: {
      type: Array,
      require: true,
    },
    filters: {
      type: Array,
      default: () => ([]),
    },
    query: {
      type:String,
      default: ''
    },
  },
  components: {
    ListingContent,
    ListingHeader,
    ListingBottom
  },
  async setup(props){
    const router = useRouter()
    const route = useRoute()
    const {$api} = useNuxtApp()

    const localList = ref([])
    const offset = ref(0)
    const counter = ref(0)
    const searchValue = ref(null)

    const getQuery = () => {
      return route.query
    }
    const routerQueryReplace = (query) => {
      router.replace({
        query: {
          ...getQuery(),
          ...query
        }
      })
    }
    const loadItems = async (limit, offset, searchValue) => {
      const data = await $api(props.query, {
        query:{
          limit,
          offset,
          searchValue
        }
      })
      return data
    }

    const resetPagination = () => {
      offset.value = 0
      routerQueryReplace({
        length: LIMIT
      })
    }
    const searchHandler = async (value) =>{
      searchValue.value = value
      resetPagination()
      const { rows, count } = await paginationLoadHandler()
      localList.value = rows
      counter.value = count
    }

    const paginationLoadHandler = async (length) => {
      try {
        const data = await loadItems(length || LIMIT, offset.value, searchValue.value)
        offset.value =  length ? length : +offset.value + LIMIT
        routerQueryReplace({
          length: offset.value
        })
        console.log('a tyt')
        return data
      } catch (e) {
        throw Error(e)
      }
    }

    if (props.query) {
      try {
        const {length} = getQuery()
        const {rows, count} = await paginationLoadHandler(length)
        localList.value = [...rows]
        counter.value += count
      } catch (e) {
        console.error(e)
      }
    } else {
      // localList = [...props.list]
    }

    const selectItem = ({item, scroll}) => {
      routerQueryReplace({
        item:item.id,
        scroll,
      })
    }
    const paginationHandler = async () => {
      let {length} = getQuery()
      if (counter.value <= length) return
      const { rows, count } = await paginationLoadHandler()
      localList.value = localList.value.concat(rows)
      counter.value = count
    }
    return {
      paginationHandler,
      selectItem,
      localList,
      counter,
      searchHandler
    }
  },
}
</script>
<style lang="scss" scoped>
.listing {
  height: 100%;
  width: 100%;
  background: #f1f2f5;

  display: grid;
  grid-template-rows: minmax(44px, max-content) 1fr minmax(44px, max-content);
}
</style>
