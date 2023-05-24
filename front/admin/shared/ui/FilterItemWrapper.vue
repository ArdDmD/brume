<template>
  <div
    @click="$emit('click')"
    class="filter-wrapper pl-3 pr-3 pt-2 pb-2">
    <slot/>
  </div>
</template>
<script>
export default {
  name:'FilterItemWrapper',
  emits:['click']
}
</script>
<style lang="scss" scoped>
.filter {
  &-wrapper {
    width: 100%;
    cursor: pointer;
    &:hover {
      background-color: rgba(0,0,0, 0.05);
    }
  }
}
</style>
