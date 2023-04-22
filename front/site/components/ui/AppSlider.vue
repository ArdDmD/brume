<template>
<div class="home-slider">
  <div class="home-slider__wapper">
  </div>
  <swiper
    :spaceBetween="30"
    :loop="true"
    :autoplay="{delay:5000}"
    class="mySwiper"
  >
    <swiper-slide
      ><img
        src="@/assets/imgs/slide1.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="@/assets/imgs/slide2.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="@/assets/imgs/slide3.jpg" /></swiper-slide
    >
  </swiper>
</div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css'
import SwiperCore, { EffectFade, Navigation, Pagination, Autoplay } from 'swiper'
SwiperCore.use([Autoplay])

export default {
  name: 'AppSlider',
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [EffectFade, Navigation, Pagination]
    }
  }
}
</script>

<style lang="scss">
.home-slider {
  position: relative;
  &__wapper {
    position: absolute;
    z-index: 20;
    background: #0000002e;
    width: 100%;
    height: 100%;
}
}

.swiper {
  width: 100%;
  height: 100%;
  max-height: 794px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
</style>
