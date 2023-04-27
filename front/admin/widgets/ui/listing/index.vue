<template>
  <div class="listing pa-4">
    <ListingHeader>
      <slot name="actions" />
    </ListingHeader>

    <ListingContent
      :columns="columns"
      :list="list"
    >
      <template #default="{item}">
        <slot
            name="cols"
            :item="item"
        />
      </template>
    </ListingContent>

    <ListingBottom/>
  </div>
</template>
<script>
import ListingHeader from "./ListingHeader";
import ListingContent from "./ListingContent";
import ListingBottom from "./ListingBottom";
export default {
  name: 'ListingComponent',
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
  components: {
    ListingContent,
    ListingHeader,
    ListingBottom
  },

}
</script>
<style lang="scss" scoped>
.listing {
  height: 100%;
  width: 100%;
  background: #f1f2f5;

  display: grid;
  grid-template-rows: 44px 1fr 44px;
}
</style>
