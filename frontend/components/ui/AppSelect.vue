<template>
<div class="select">
  <select class="select__select" v-model="selectedSize">
    <option :value="selectedSize" selected>{{selectedSize}}</option>
    <option :value="size.size" v-for="size in sizes" :key="size.size+1">
      {{size.size}}
    </option>
  </select>
  <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L9 8L1 14.5" stroke="#333333"/>
  </svg>
</div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const selectedSize = ref('выберите свой размер')
    const sizes = ref([
      { size: 'XS' }, { size: 'S' }, { size: 'M' }, { size: 'L' }, { size: 'XL' }
    ])
    return {
      selectedSize,
      sizes
    }
  }
}
</script>

<style lang="scss" scoped>
.select {
  position: relative;
  border: 1px solid #333333;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: right;
  cursor: pointer;

  svg {
    margin-right: 10px;
  }

  &__select {
    padding: 0 13px;
    background: none;
    appearance: none;
    width: 100%;
    height: 100%;
    border: none;
    position: absolute;
    z-index: 1;
    font-weight: 400;
    font-size: 14px;
  }

}
</style>
