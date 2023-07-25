<script setup>
defineProps([{
  title: String,
  img: String
}])
</script>

<template>
  <div class="card-blog">
    <img class="card-blog__img" :src="img" alt="">
    <p class="card-blog__title" >#{{ title }}</p>
  </div>
  <div class="block__next">
    <img class="next__image" src="/img/block-next.svg" alt="">
  </div>
</template>

<style lang="scss">

.card-blog{
  border-radius: $radius;
  border: 1px solid $black;

  &:hover {
    .card-blog__title{
      color: $red;
    }
  }
}

.card-blog__img {

}

.card-blog__title {
  font-size: 30px;
  font-weight: 400;
  line-height: 112.9%;
  letter-spacing: 0.9px;
}

.block__next {
  transition: opacity 0.4s ease;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0;
}
</style>