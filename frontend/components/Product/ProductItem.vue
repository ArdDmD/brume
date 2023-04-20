<template>
  <div class="product container">
      <div class="product-gallery">
        сюда фотку хуйнуть
      </div>
      <div class="product-description">
        <h3 class="product__title">
          Тяги
        </h3>
        <span class="product__article">
          Арт. 02765/46
        </span>
        <div class="product-comments">
          <star-rating
          :rating="4"
          />
        </div>
        <div class="product-price">
          <div class="product-price__price">
            800р
          </div>
          <div class="product-price__price_old">
            1 500р
          </div>
          <a href="#" class="product-arrow__link">
          <!-- <img src="@/assets/img/arrow.svg" alt="awrrow" class="product-arrow"> -->
          </a>
        </div>
        <div class="product-sales">
          <button class="product-sales__sale">
            скидка -36%
          </button>
          <button class="product-sales__sale">
            акция -20%
          </button>
        </div>
        <div class="product__select">
          <app-select/>
        </div>
        <div class="product-counter">
          <app-button :text="'Добавить в корзину'"/>
          <app-counter/>
        </div>
      </div>
  </div>
</template>

<script>
import StarRating from '@/components/ui/StarRating.vue'
import AppSelect from '../ui/AppSelect.vue'
import AppCounter from '../ui/AppCounter.vue'
import AppButton from '../ui/AppButton.vue'

export default {
  components: {
    StarRating,
    AppSelect,
    AppCounter,
    AppButton
  }
}
</script>

<style lang="scss" scoped>
.product {
  margin-top: 200px;
  display: flex;
  justify-content: center;
  gap: 0 40px;

  @media (max-width: 940px) {
    display: block;
  }

  &-btns {
    display: flex;
    margin-left: 12px;
    @media (max-width: 480px) {
      margin-left: 0;
      margin-top: 15px;
    }
  }

  &__select {
    max-width: 300px;
  }

  &-gallery {
    position: relative;
    width: 100%;
    height: 700px;
    max-width: 650px;
    border: 1px solid;

    @media (max-width: 940px) {
      width: 100%;
    }

    @media (max-width: 480px) {
        width: 100%;
        display: block;
        padding: 0;
        min-width: 0;
      }
  }

  &__title {
    margin: 24px 0 8px 0;
    font-family: 'Open Sans';
    font-weight: 600;
    font-size: 25px;
    line-height: 24px;
    color: #333333;
  }

  &__article {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.04em;
    color: #828282;
  }

  &-price {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    &__price {
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 24px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: #333333;
      margin-right: 12px;

      &_old {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.04em;
        text-decoration-line: line-through;
        color: #828282;
        margin-right: 12px;
      }
    }
  }

  &-sales {
    display: flex;
    margin-bottom: 30px;

    &__sale {
      border: solid 1px #000;
      padding: 3px 8px;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.04em;
      color: #333333;

      &:hover {
        background: #333333;
        color: #fff;
      }

      &:not(:last-child) {
        margin-right: 9px;
      }
    }
  }

  &-counter {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px 0;

    @media (max-width: 480px) {
      display: block;
    }
  }
}
</style>
