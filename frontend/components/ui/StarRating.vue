<template>
  <div class="star-rating">
    <span v-for="index in starLimit" :key="index" class="star star--outlined"></span>
    <div class="star-rating__fullfilled" :style="`width: ${retingWidth};`">
      <span v-for="index in starLimit" :key="index" class="star star--coloerd"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StarRating',
  props: {
    rating: {
      type: Number,
      default: 4
    },
    starLimit: {
      type: Number,
      default: 5
    }
  },
  computed: {
    retingWidth () {
      return this.rating / this.starLimit * 100 + '%'
    }
  }
}
</script>

<style lang="scss" scoped>
  .star {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 2px;
    flex-shrink: 0;

    &-rating {
      position: relative;
      display: inline-flex;

      &__fullfilled {
        display: inline-flex;
        position: absolute;
        width: 0;
        height: 100%;
        top: 0;
        left: 0;
        overflow: hidden;
      }
    }

    // &--coloerd {
    //   background: url('@/assets/img/black-star.svg') center no-repeat;
    // }

    // &--outlined {
    //   background: url('@/assets/img/empty-star.svg') center no-repeat;
    // }
  }
</style>
