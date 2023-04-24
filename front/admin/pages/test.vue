<template>
  <div class="test">
    <ListingComponent>
      <template #actions>
        <AddButton/>
      </template>
    </ListingComponent>
  </div>
</template>
<script>
import {ListingComponent} from '@/widgets'
import {AddButton} from '@/shared'
definePageMeta({ layout: 'default' });
export default {
  components: {ListingComponent, AddButton},
}
</script>
<style lang="scss">
.test {
  height: 100vh;
}
</style>
