<template>
  <div class="promo">
    <button class="promo__button">
      {{ text }}
    </button>
    <img class="promo__img" :src="`/_nuxt/static/imgs/${img}.webp`" :alt="{img}">
  </div>
</template>

<script>
export default {
  name: 'PromoCard',
  props: {
    img: {
      type: String,
      defaut: '',
      required: false
    },
    text: {
      type: String,
      defaut: '',
      required: false
    },
    link: {
      type: String,
      defaut: '/',
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .promo {
    display: flex;
    justify-content: center;
    gap: 0 40px;
    margin: 30px 0;
    position: relative;

    &__link {
      background: $grey-color;
      position: relative;

      &:hover {
        background: #000;
      }
    }

    &__button {
      position: absolute;
      top:50%;
      left:50%;
      transform:translate(-50%, -50%);
      background: $red-color;
      padding: 10px 20px;
      text-transform: uppercase;
      font-weight: 500;
      color: $white-color;
      white-space: nowrap;
      z-index: 1;
    }

    &__img {
      flex-basis: 80%;
      height: 500px;
    }
  }
</style>
