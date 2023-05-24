<template>
  <div class="listing-bottom">
    <div class="listing-bottom__row">
      <span class="listing-bottom__counter">
        1-{{current}} из {{counter}}
      </span>
      <slot/>
    </div>
  </div>
</template>
<script>
import {useRoute} from "nuxt/app";
import {computed} from "vue";

export default {
  name:'ListingBottom',
  props:{
    counter:{
      type: Number,
      default:0
    },
  },
  setup(props) {
    const route = useRoute()
    const getQuery = () => {
      return route.query
    }

    const current = computed(() => {
      const {length} = getQuery()
      return  length > props.counter ? props.counter : length
    })
    return {current}
  }
}
</script>
<style lang="scss" scoped>
.listing {
  &-bottom {
    background: $white;
    border: $border;
    border-top: none;

    &__row {
      padding: 0 8px;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__counter {
      font-size: 12px;
      color: $grey-text;
    }
  }
}
</style>
