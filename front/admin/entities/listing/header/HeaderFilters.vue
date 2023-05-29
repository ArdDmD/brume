<template>
  <div class="header__filters">
    <HeaderFilter
      v-for="(item, id) in filters"
      :key="`${item.filterBy}-${item.title}`"
      :query="item.query"
      :filterBy="item.filterBy"
      :itemText="item.itemText"
      :title="item.title"
      @removeFilter="$emit('removeFilter', id)"
      @selectFilter="$emit('selectFilter', $event)"
    />
    <v-btn
      v-if="hasNotSelected"
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
import HeaderFilter from "./HeaderFilter";
export default {
  name: 'HeaderFilters',
  components: {
    HeaderFilter
  },
  props:{
    filters:{
      type:Array,
      default: () => ([])
    },
    hasNotSelected:{
      type:Boolean,
      default: false
    }
  },
  emit:['removeFilter', 'selectFilter', 'openModal']

}
</script>
<style lang="scss" scoped>
.header{
  &__filters{
    display: flex;
    align-items: center;
    overflow: scroll;

    @include reset-scroll
  }
}
</style>
