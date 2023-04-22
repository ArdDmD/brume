<template>
<section class="home-parallax">
  <div class="home-parallax__parallax">
    <h2 class="home-parallax__info">
      Стиль - это ваша
      <br/>
      внутренняя уверенность.
    </h2>
  </div>
</section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.home-parallax {
    background: #000;
    perspective: 1px;
    height: 100%;
    cursor: pointer;

    @media screen and (max-width:768px) {
    margin-top: 20px;
}

&__parallax{
    background-image: url("@/static/imgs/parallax.webp");
    opacity: 0.75;
    height: 100%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

}
&__info{
    padding: 193px 0 215px;
    text-align: center;
    font-size: 40px;
    color: #fff;
}
}
</style>
