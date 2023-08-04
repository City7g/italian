<script setup>
const { data: posts, pending, error } = await useFetch('http://localhost:1337/api/blogs?populate=deep,4', {
  server: false
})
</script>

<template>
  <section class="test">
    <div class="container">
      <div v-if="pending">Loading...</div>
      <div v-else-if="error">Error</div>
      <div v-else class="test__wrap">
        <CardPost v-for="item in posts.data" :key="item.id" :post="item.attributes" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.test {
  padding: 60px 0;
}

.test__wrap {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}
</style>