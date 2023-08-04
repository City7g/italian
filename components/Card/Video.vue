<script setup>
defineProps({
  img: String
})
</script>


<template>
  <NuxtLink to="/" class="card-video">
    <img class="card-video__img" :src="img" alt="">
    <img class="card-play__img" src="/img/play-video.svg" alt="">
  </NuxtLink>
</template>

<style lang="scss">
.card-video {
  position: relative;
  border-radius: 5px;
  overflow: hidden;

  &:hover .card-video__img {
    transform: scale(1.15);
  }

  @media (max-width: 1199px) {
    &:nth-child(3) {
      display: none;
    }
  }

  @media (max-width: 567px) {
    &:nth-child(2) {
      display: none;
    }
  }
}

.card-video__img {
  display: block;
  transition: 0.3s transform ease;
  width: 100%;
}

.card-play__img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

</style>