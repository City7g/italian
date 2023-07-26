<template>
  <Swiper
    :modules="[SwiperAutoplay, SwiperNavigation]"
    :slides-per-view="1"
    :loop="true"
    class="slider"
    :autoplay="{
      delay: 4000
    }"
  >
    <SwiperSlide v-for="slide in 10" :key="slide" class="slider__item">
      <img src="/img/slider-cat.svg" class="slider__img" alt="">
    </SwiperSlide>
  </Swiper>
</template>

<style lang="scss">
.slider {
  // outline: 1px solid red;
}

.slider__item {
  text-align: center;
  padding: 60px;
  background-color: $white;

  &:nth-child(odd) {
    background-color: $green;
  }
}
</style>