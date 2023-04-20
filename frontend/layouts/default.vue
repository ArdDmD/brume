<template>
  <div>
    <app-header/>
    <slot />
    <app-footer/>
  </div>
</template>

<script>
import AppFooter from '@/components/Footer/AppFooter.vue'
import AppHeader from '~/components/Header/AppHeader.vue'
export default {
  components: {
    AppFooter,
    AppHeader
  },
}
</script>