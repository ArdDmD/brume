<template>
  <v-btn
      density="compact"
      variant="flat"
      icon="mdi-plus"
      color="primary"
      @click="$emit('click')"
  ></v-btn>
</template>
<script>
export default {
  name:'AddButton',
  emits:['click']
}
</script>
