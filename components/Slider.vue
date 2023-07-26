<template>
  <Swiper
    :modules="[SwiperAutoplay, SwiperNavigation]"
    :slides-per-view="1"
    :loop="true"
    class="slider"
    :autoplay="{
      delay: 4000,
      disableOnInteraction: true
    }"
    :navigation="{
      nextEl: '.slider__next',
      prevEl: '.slider__prev'
    }"
  >
    <SwiperSlide v-for="slide in 10" :key="slide" class="slider__item">
      <img src="/img/slider-cat.svg" class="slider__img" alt="">
    </SwiperSlide>

    <div class="slider__navigation">
      <div class="slider__prev">
        <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22L1 11.5L12 1" stroke="#251C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>

      <div class="slider__next">
        <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L12 11.5L1 22" stroke="#251C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  </Swiper>
</template>

<style lang="scss">
.slider {
  position: relative;
}

.slider__item {
  text-align: center;
  padding: 60px;
  background-color: $white;

  &:nth-child(even) {
    background-color: $green;
  }
}

.slider__navigation{
   display: flex;
   position: absolute;
   bottom: 0;
   right: 0;
   z-index: 1;
}

.slider__next,
.slider__prev {
  padding: 25px;
  background-color: $white;
  border: 1px solid $black;

  &:hover {
    background-color: $green;
  }
}

path {
 transition: 0.3s stroke ease;
.slider__prev:hover & {
   stroke: $white;
   }
.slider__next:hover & {
   stroke: $white;
   }
 }

.slider__next {
  margin-left: -1px;
}


</style>