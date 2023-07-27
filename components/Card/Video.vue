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
}

.card-video__img {
  object-fit: fill;
}

.card-play__img {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 1;
}

</style>