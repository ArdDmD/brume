<template>
  <div class="cell text-column">
    <span class="text-column__content">
      {{item[field] || empty }}
    </span>

  </div>
</template>
<script>
export default {
  name: 'TextColumn',
  props: {
    item: {
      type: Object,
      require: true,
    },
    field: {
      type:String,
      require: true,
    },
    empty: {
      type: String,
      default: '-'
    },
  },
}
</script>
<style lang="scss" scoped>
.text {
  &-column {
    &__content {
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
</style>
