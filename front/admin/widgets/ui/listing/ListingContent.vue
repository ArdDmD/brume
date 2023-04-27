<template>
  <div class="listing-content">
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
        v-for="(item,i) in list"
        :key="`${item.id}-id`"
    >
      <slot :item="item"/>
    </div>
  </div>
</template>
<script>
import {computed, ref} from 'vue'
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
  setup(props) {
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


    return {
      gridTemplateCols,
    }
  },
}
</script>
<style lang="scss" scoped>
.listing{
  &-content {
    margin-top: 2px;
    width: 100%;
    height: 100%;
    border: $border;
    overflow: scroll;
    @include reset-scroll;

    &__header,&__row {
      display: grid;
      border-bottom: 1px solid $border-color;
      background: $white;
      width: fit-content;
      min-width: 100%;
    }
    &__row {
      cursor: pointer;
      &:hover {
        background-color: rgba(0, 0, 0, 0.01);
      }
    }
  }
}
</style>
