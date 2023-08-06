<script setup>
defineProps({
  title: String,
  img: String
})
</script>

<template>
  <article class="post">
    <div class="post__image">
      <img :src="img" class="post__img" alt="">
    </div>
    <h2 class="post__title">{{ title }}</h2>
  </article>
</template>

<style lang="scss">
.post__image {
  overflow: hidden;
  margin-bottom: 10px;
  background-color: $white;
  border-radius: 8px;
  aspect-ratio: 1 / .63;
}

.post__img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: .3s transform ease;
}

.post__image:hover .post__img {
  transform: scale(1.1);
}

.post__title {
  transition: .3s color ease;

  &:hover {
    color: $green;
  }
}
</style>