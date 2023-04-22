<template>
  <div class="catalog container">
      <h2 class="catalog__title">Каталог</h2>
    <div class="catalog__content">
      <!-- фильтр -->
      <section class="catalog__main">
        <ul class="catalog__list">
           <app-card v-for="item in products" :product="item" :key="item"/>
        </ul>
      </section>
    </div>
  </div>
  </template>
  
  <script>
  import AppCard from '../components/ui/AppCard.vue'
  import { useProductsStore } from '@/stores/ProductsStore'

  export default {
    components: { AppCard },
    setup () {
      const productsStore = useProductsStore()
      return {
        products: productsStore.PRODUCTS
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .catalog {
    margin-top: 200px;
  
    &__title {
      margin: 20px 0;
      font-size: 35px;
      font-weight: 500;
    }
  
    &__list {
      display: flex;
      gap: 60px 30px;
      flex-wrap: wrap;
    }
  }
  </style>
  