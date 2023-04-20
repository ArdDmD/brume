<template>
  <div class="counter">
    <div class="counter__count">
      <button class="counter__btn" @click="count++">+</button>
      <span class="counter__numb">{{ count }}</span>
      <button class="counter__btn" @click="count--">-</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const count = ref(1)
    return {
      count
    }
  }
}
</script>

<style lang="scss" scoped>
.counter {
    margin-bottom: 12px;
    display: flex;
    align-items: center;

    @media (max-width: 480px) {
      display: block;
    }

    &__count {
      width: 145px;
      height: 44px;
      background: #F2F2F2;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__btn {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.04em;
      color: #333333;
      width: 100%;
      height: 100%;

      &:hover {
        background: #dadada;
      }
    }

    &__numb {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.04em;
      margin: 0 40px;
    }
  }
</style>
