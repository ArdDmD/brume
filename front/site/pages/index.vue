<template>
  <div class="home">
    <app-slider class="home__slider"/>
    <section class="home-positions container">
      <promo-card :img="'deal'" :text="'Костюмы'" />
      <div class="home-positions__intro">
        <div class="home-positions__text">
          Доставь себе очевидное удовольствие от качества
        </div>
        <router-link class="home-positions__link" to="/products">В магазин</router-link>
      </div>
      <promo-card :img="'sport'" :text="'Спортивная одежда'" />
    </section>
    <section class="home-about container">
      <h3 class="home-about__title">
        Brume - You are style
      </h3>
      <p class="home-about__text">
        Вы предпочитаете в одежде классический, базовый стиль, или любите всё смешать как вам вздумается? Вероятнее всего по обстоятельствам и настроению... :) Одежда, это лишь продолжение вашей индивидуальности, она должна быть качественной и удобной. Ваш образ может, а иногда и должен соответствовать современным трендам, но в первую очередь он должен нравится и подходить именно вам.
        На сайте интернет-магазина Brume можно выбрать страничку определённого стиля, либо просто поочерёдно зайти в нужные вам товарные разделы и собрать свой образ. Любую из моделей можно также заказать в индивидуальный пошив, с учётом особенностей вашей фигуры, приехав в фирменный шоурум Brume для примерки.
      </p>
    </section>
    <home-parallax/>
    <section class="home-hit container">
      <h2 class="home-hit__title">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#d6928b" height="28" viewBox="0 96 960 960" width="28">
          <path d="M220 656q0 63 28.5 118.5T328 867q-4-12-6-24.5t-2-24.5q0-32 12-60t35-51l113-111 113 111q23 23 35 51t12 60q0 12-2 24.5t-6 24.5q51-37 79.5-92.5T740 656q0-54-23-105.5T651 456q-21 15-44 23.5t-46 8.5q-61 0-101-41.5T420 342v-20q-46 33-83 73t-63 83.5q-26 43.5-40 89T220 656Zm260 24-71 70q-14 14-21.5 31t-7.5 37q0 41 29 69.5t71 28.5q42 0 71-28.5t29-69.5q0-20-7.5-37T551 750l-71-70Zm0-464v132q0 34 23.5 57t57.5 23q18 0 33.5-7.5T622 398l18-22q74 42 117 117t43 163q0 134-93 227t-227 93q-134 0-227-93t-93-227q0-128 86-246.5T480 216Z"/>
        </svg>
        Хиты продаж
      </h2>
      <div class="home-new__list">
        <app-card v-for="item in products" :key="item.id" :product="item" :lable-type="'new'"/>
      </div>
    </section>
    <section class="home-new container">
      <h2 class="home-new__title">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#6eaed4" height="28" viewBox="0 96 960 960" width="28">
          <path d="m393 891 279-335H492l36-286-253 366h154l-36 255Zm-73 85 40-280H160l360-520h80l-40 320h240L400 976h-80Zm153-395Z"/>
        </svg>
        Новинки
      </h2>
      <div class="home-new__list">
        <app-card v-for="item in products" :key="item.id" :product="item" :lable-type="'new'"/>
      </div>
    </section>
    </div>
</template>

<script>
import AppSlider from '@/components/ui/AppSlider.vue'
import AppCard from '@/components/ui/AppCard.vue'
import PromoCard from '../components/ui/PromoCard.vue'
import { useProductsStore } from '@/stores/ProductsStore'
import HomeParallax from '../components/HomePage/HomeParallax.vue'
import _ from 'lodash'

export default {
  name: 'HomeView',
  components: {
    AppSlider,
    AppCard,
    PromoCard,
    HomeParallax
  },
  setup () {
    const productsStore = useProductsStore()
    const products = _.chunk(productsStore.PRODUCTS, 3);
    return {
      productsStore,
      products: products[0]
    }
  }
}
</script>

<style lang="scss" scoped>
.home {

  &-positions {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 70px 0;

    &__intro {
      padding: 0 20px;
    }

    &__text {
      font-size: 30px;
      max-width: 400px;
      padding-bottom: 40px;
    }

    &__link {
      padding-right: 15px;
      font-size: 20px;
      border-bottom: solid 1px;
      color: $black-color;
    }
  }

  &-hit, &-new {
    margin: 0 auto;
    width: 100%;
    &__title {
      font-size: 25px;
      margin-top: 60px;
    }
    &__list {
      margin: 20px 0;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 30px;
    }
  }

  &-about {
    border-top: 1px solid;
    border-bottom: 1px solid;
    padding: 40px 0;
    display: flex;
    gap: 40px;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;

    &__title {
      flex-basis: 33%;
      text-align: start;
      font-size: 50px;
      font-weight: 700;
    }
    &__text {
      flex-basis: calc(100% / 2 - 20px);
      font-size: 20px;
      letter-spacing: 2px;
    }
  }
}
</style>
