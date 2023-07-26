<script setup>
defineProps({
  title: String,
  img: String,
  img_2: String
})
</script>

<template>
  <div class="card-blog">
    <img class="card-blog__img" :src="img" alt="">
    <p class="card-blog__title" >#{{ title }}</p>
    <div class="block__next">
      <img class="next__image" :src="img_2" alt="">
    </div>
  </div>
</template>

<style lang="scss">
.card-blog{
  position: relative;
  border-radius: $radius;
  border: 1px solid $black;
  text-align: center;

  &:hover {
    .card-blog__title {
      color: $red;
    }
    .block__next {
      opacity: 1;
    }
  }
}

.card-blog__title {
  font-size: 30px;
  font-weight: 400;
  line-height: 112.9%;
  letter-spacing: 0.9px;
}

.card-blog__img {
  padding: 75px 0px;
}

.block__next {
  transition: opacity 0.4s ease;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0;
}
</style>