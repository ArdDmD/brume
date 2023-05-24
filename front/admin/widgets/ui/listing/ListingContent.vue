<template>
  <div
    class="listing-content"
    ref="listWrapper"
    @scroll="scrollHandler"
  >
    <div
        class="listing-content__header"
        :style="gridTemplateCols"
    >
      <div
          class="cell cell_header"
          v-for="(col, i) in columns"
          :key="`${i}-${col.field}-${col.title}`"
      >
        <span>{{col.title}}</span>
      </div>
    </div>
    <div
      class="listing-content__row"
      :style="gridTemplateCols"
      v-for="(item) in list"
      :key="`${item.id}-id`"
      :class="{'listing-content__row_active': item.id === selectedItemId}"
      @click="clickItem($event, item)"
    >
      <slot :item="item"/>
    </div>
  </div>
</template>
<script>
import {computed, onMounted, ref} from 'vue'
import {useRoute} from "nuxt/app";
export default {
  name:'ListingContent',
  props: {
    columns: {
      type: Array,
      require: true,
    },
    list: {
      type: Array,
      default: () => ([])
    },
  },
  emits:['needLoad', 'selectItem'],
  setup(props, {emit}) {
    const route = useRoute()

    const gridTemplateCols = computed(() => {
      const colsSize = props.columns?.reduce((acc, col) => {
        const size = col.size ? col.size : '1fr'
        acc += col.notGrow
            ? ` ${size}`
            : ` minmax(${size}, 1fr)`
        return acc
      }, '')
      return {'grid-template-columns': colsSize}
    })

    //выбор элемента
    const getQuery = () => {
      return route.query
    }
    const selectedItemId = ref(null)
    const clickItem = (event, item) => {
      selectedItemId.value = item.id
      emit('selectItem', {
        item,
        scroll: listWrapper.value.scrollTop
      })
    }
    const listWrapper = ref(null)
    onMounted(() => {
      const {item, scroll} = getQuery()
      selectedItemId.value = +item
      listWrapper.value.scrollTo({top: scroll, behavior: 'smooth'})
    })

    const scrollHandler = (event) => {
      const maxScrollHeight = listWrapper.value.scrollHeight - listWrapper.value.clientHeight
      if (maxScrollHeight > event.target.scrollTop) return
      emit('needLoad')
    }

    return {
      gridTemplateCols,
      selectedItemId,
      clickItem,
      listWrapper,
      scrollHandler
    }
  },
}
</script>
<style lang="scss" scoped>
.listing{
  &-content {
    position: relative;
    width: 100%;
    height: 100%;
    border: $border;
    overflow: scroll;
    @include reset-scroll;

    &__header,&__row {
      display: grid;
      box-shadow: 0px 1px 0px 0px rgba(211, 212, 219, 1) inset;
      background: $white;
      width: fit-content;
      min-width: 100%;
    }
    &__header {
      position: sticky;
      top: 0px;
    }
    &__row {
      cursor: pointer;
      &_active {
        background: rgba(65, 111, 200, 0.2);
      }
      &:hover {
        background-color: rgba(0, 0, 0, 0.01);
      }
    }
  }
}
</style>
