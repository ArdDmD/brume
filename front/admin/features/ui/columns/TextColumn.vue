<template>
  <div class="cell text-column">
    <span class="text-column__content">
      {{
        getField(field, item) || empty
      }}
    </span>

  </div>
</template>
<script>
import {getField} from "@/shared";

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
  setup() {
    return {
      getField
    }
  }
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
