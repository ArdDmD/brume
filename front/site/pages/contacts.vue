<template>
  <div class="contacts container">
    <h2 class="contacts__title">
      Если у вас есть вопросы
    </h2>
    <p class="contacts__text">
      Brume - Интернет-магазин модной одежды Москва, Каширское шоссе, дом 61 к2, ТРЦ "Каширская Плаза"
      <br/>
      Время работы с <strong>10:00</strong> до <strong>18:00</strong> обед с <strong>14:00</strong> до <strong>15:00</strong> воскресенье - выходной
    </p>
    <ul class="contacts__list">
      <li class="contacts__item">
        Позвони нам:
        <a class="contacts__link" href="+79006466554">+7 900 646-65-54</a>
      </li>
      <li class="contacts__item">
        Напишите на E-mail:
        <a class="contacts__link" href="help@brume.ru">help@brume.ru</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.contacts {
  margin-top: 200px;
  height: 100vh;

  &__title {
    width: 100%;
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  &__text {
    font-size: 20px;
    margin: 60px 10px;
    font-size: 500;
  }

  &__list {
    font-size: 20px;
    margin: 15px 0 30px 0;
  }

  &__item {
    font-size: 18px;
    margin: 20px;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  }

  &__link {
    margin-left: 20px;
  }
}
</style>
