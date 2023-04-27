<template>
  <div class="chip">
    <v-row
        no-gutters
        align="center"
        justify="space-between"
        class="flex-nowrap"
    >
      <slot/>
      <v-btn
          class="rounded-circle ml-2"
          density="compact"
          variant="flat"
          color="primary"
          size="14">
        <v-icon
          size="12"
          @click="$emit('close')"
        >mdi-close</v-icon>
      </v-btn>
    </v-row>
  </div>
</template>
<script>
export default {
  name: 'AppChip',
  emits:['close'],
}
</script>
<style lang="scss" scoped>
.chip {
  white-space: nowrap;

  background: $grey-color;
  border-radius: 20px;
  padding: 8px 12px;

  font-size: 14px;
  line-height: 18px;
  color: $primary;
}
</style>
