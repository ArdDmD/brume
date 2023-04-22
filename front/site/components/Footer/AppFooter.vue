<template>
  <footer class="footer">
    <section class="footer__inner container">
      <div class="footer__info">
      <h2 class="footer__title">
        <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 96 960 960" width="28">
          <path d="M453 776h60V536h-60v240Zm26.982-314q14.018 0 23.518-9.2T513 430q0-14.45-9.482-24.225-9.483-9.775-23.5-9.775-14.018 0-23.518 9.775T447 430q0 13.6 9.482 22.8 9.483 9.2 23.5 9.2Zm.284 514q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Zm.234-60Q622 916 721 816.5t99-241Q820 434 721.188 335 622.375 236 480 236q-141 0-240.5 98.812Q140 433.625 140 576q0 141 99.5 240.5t241 99.5Zm-.5-340Z"/>
        </svg>
        Информация
      </h2>
      <ul class="footer__list">
      <li class="footer__item">
        <router-link class="footer__link" to="/about">
          О&nbsp;магазине
        </router-link>
      </li>
      <li class="footer__item">
        <router-link class="footer__link" to="/">
          Доставка и&nbsp;оплата
        </router-link>
      </li>
      <li class="footer__item">
        <router-link class="footer__link" to="/">
          Каталог товаров
        </router-link>
      </li>
      <li class="footer__item">
        <router-link class="footer__link" to="/">
          Контакты
        </router-link>
      </li>
    </ul>
    </div>
    <div class="footer__info">
      <h2 class="footer__title">
        <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 96 960 960" width="28">
          <path d="M222 801q63-44 125-67.5T480 710q71 0 133.5 23.5T739 801q44-54 62.5-109T820 576q0-145-97.5-242.5T480 236q-145 0-242.5 97.5T140 576q0 61 19 116t63 109Zm257.814-195Q422 606 382.5 566.314q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314 566.5q-39.686 39.5-97.5 39.5Zm.654 370Q398 976 325 944.5q-73-31.5-127.5-86t-86-127.266Q80 658.468 80 575.734T111.5 420.5q31.5-72.5 86-127t127.266-86q72.766-31.5 155.5-31.5T635.5 207.5q72.5 31.5 127 86t86 127.032q31.5 72.532 31.5 155T848.5 731q-31.5 73-86 127.5t-127.032 86q-72.532 31.5-155 31.5ZM480 916q55 0 107.5-16T691 844q-51-36-104-55t-107-19q-54 0-107 19t-104 55q51 40 103.5 56T480 916Zm0-370q34 0 55.5-21.5T557 469q0-34-21.5-55.5T480 392q-34 0-55.5 21.5T403 469q0 34 21.5 55.5T480 546Zm0-77Zm0 374Z"/>
        </svg>
        Личный кабинет
      </h2>
      <ul class="footer__list">
      <li class="footer__item">
        <router-link class="footer__link" to="/">
          Вход
        </router-link>
      </li>
      <li class="footer__item">
        <router-link class="footer__link" to="/">
          Регистрация
        </router-link>
      </li>
      <li class="footer__item">
        <router-link class="footer__link" to="/">
          Забыли пароль
        </router-link>
      </li>
    </ul>
    </div>
    <form class="footer__callback" @submit.prevent>
      <h2 class="footer__title">
      <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 96 960 960" width="28">
        <path d="M165 936q-19.286 0-32.143-12.857T120 891V756q0-16 10-28t25-15l119-26q13-3 26 1.5t23 15.5l95 98q88-48 157.5-117T701 523L601 422q-8-8-10.5-19.5T590 377l27-126q3-16 13.694-25.5Q641.389 216 655 216h140q19.286 0 32.143 12.857T840 261q0 122-60 242.5T624 720q-96 96-216.5 156T165 936Zm566-468q25-60 37-106.5t12-85.5H673l-23 110 81 82ZM362 831l-79-83-103 21v107q45-2 93-14t89-31Zm369-363ZM362 831Z"/>
      </svg>
        Заказать обраный звонок
      </h2>
      <input type="phone" class="footer__input" placeholder="Введите номер телефона">
      <button class="footer__button">Отпарвить</button>
    </form>
    </section>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  margin-top: 60px;
  padding: 40px 0;
  background: #f3f3f3;

  &__inner {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 0 25px;
  }

  &__info {
    flex-basis: calc(100% /3 - 20px);
  }

  &__callback {
    flex-basis: calc(100% /3 - 20px);
    display: flex;
    flex-direction: column;
  }

  &__input {
    margin: 20px 0;
    border-bottom: $black-color 1px solid;
    padding: 10px 5px;
    max-width: 80%;
  }

  &__button {
    background: $black-color;
    color: $white-color;
    padding: 10px;
  }

  &__title {
    padding: 5px 10px;
    border-bottom: 1px solid;
    fill: $black-color;
    display: flex;
    align-items: center;
    white-space: nowrap;

    svg {
      margin-right: 10px;
    }
  }

  &__item {
    margin: 20px 0 0 5px;
    height: 20px;
  }

  &__link {
    color: $black-color;

    &:hover {
      border-bottom: 1px solid;
    }
  }
}
</style>
