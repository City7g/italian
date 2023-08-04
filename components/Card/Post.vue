<script setup>
defineProps({
  post: Object
})
</script>

<template>
  <article class="post">
    <div class="post__image">
      <img :src="'http://localhost:1337' + post.image.data.attributes.url" class="post__img" alt="">
    </div>
    <h2 class="post__title">{{ post.title }}</h2>
  </article>
</template>

<style lang="scss">
.post__image {
  overflow: hidden;
  margin-bottom: 10px;
}

.post__img {
  display: block;
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