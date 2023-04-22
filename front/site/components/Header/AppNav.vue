<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <router-link to="/" class="nav__link">
          Главная
        </router-link>
      </li>
      <li class="nav__item">
        <router-link to="/products" class="nav__link">
          Каталог
        </router-link>
      </li>
      <li class="nav__item">
        <router-link to="/about" class="nav__link">
          О&nbsp;магазине
        </router-link>
      </li>
      <li class="nav__item">
        <router-link to="/delivery" class="nav__link">
          Доставка и&nbsp;оплата
        </router-link>
      </li>
      <li class="nav__item">
        <router-link to="/contacts" class="nav__link">
          Koнтакты
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: center;
  text-align: center;
  max-width: 700px;

  &__item {
    &:hover {
      fill: $red-color;
    }
  }

  &__list {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 0 35px;
  }

  &__link {
    color: $black-color;
    font-weight: 500;
    align-items: center;

    &:hover {
      color: $red-color;
      border-bottom: 1px solid;
    }
  }
}
</style>
