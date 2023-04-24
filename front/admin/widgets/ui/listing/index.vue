<template>
  <div class="listing">
    <ListingHeader>
      <slot name="actions" />
    </ListingHeader>
  </div>
</template>
<script>
import ListingHeader from "~/widgets/ui/listing/ListingHeader";
export default {
  name: 'ListingComponent',
  components: {
    ListingHeader
  },
  setup() {},
}
</script>
<style lang="scss" scoped>
.listing {
  height: 100%;
  width: 100%;
  background: #e9ebef;
}
</style>
