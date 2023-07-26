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
    <h4 class="title-h2 card-blog__title">#{{ title }}</h4>
    <div class="block__next">
      <img class="next__image" :src="img_2" alt="">
    </div>
  </div>
</template>

<style lang="scss">
.card-blog {
  padding: 75px 25px;
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

.card-blog__img {
  margin-bottom: 75px;
  height: 220px;
}

.block__next {
  transition: opacity 0.4s ease;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0;
}
</style>