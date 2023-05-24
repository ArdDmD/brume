<template>
  <div class="listing-header__filters">
    <HeaderFilter
      v-for="(item, id) in filters"
      :key="`${item.title}-${id}`"
      :query="item.query"
      :filterBy="item.filterBy"
      :itemText="item.itemText"
      :title="item.title"
      @removeFilter="$emit('removeFilter', id)"
      :index="id"
    />
    <v-btn
      density="compact"
      icon="mdi-plus"
      variant="text"
      color="primary"
      font-size="20"
      class="ml-1"
      @click="$emit('openModal')"
    >
    </v-btn>
  </div>
</template>
<script>
import {HeaderFilter} from "~/entities";
export default {
  name: 'HeaderFilters',
  components: {
    HeaderFilter
  },
  props:{
    filters:{
      type:Array,
      default: () => ([])
    }
  },
  emit:['removeFilter', 'openModal']
}
</script>
<style lang="scss" scoped>
.listing{
  &-header{
    &__filters{
      display: flex;
      align-items: center;
      overflow: scroll;

      @include reset-scroll
    }
  }
}
</style>
