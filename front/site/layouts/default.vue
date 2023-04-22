<template>
  <div>
    asdas
    <img src="a8350277-6f80-4eb1-8aa1-47f03e4c4d19.jpg">
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
