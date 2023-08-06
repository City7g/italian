<script setup>
const config = useRuntimeConfig()

const page = ref(1)
const loadingPostButton = ref(false)

const { data: posts, pending, error } = await useFetch('/api/posts?pagination[page]=1&pagination[pageSize]=2&populate=*', {
  baseURL: config.public.strapiApi
})

const loadMore = async () => {
  const { data, pending } = await $fetch(`/api/posts?pagination[page]=${page.value + 1}&pagination[pageSize]=2&populate=*`, {
    baseURL: config.public.strapiApi,
    onRequest: () => { loadingPostButton.value = true },
    onResponse: () => {
      page.value += 1
      loadingPostButton.value = false
    }
  })

  data.forEach(post => {
    posts.value.data.push(post)
  })
}
</script>

<template>
  <section class="test">
    <div class="container">
      <div v-if="pending">Loading...</div>
      <div v-else-if="error">Error</div>
      <div v-else-if="posts?.data?.length" class="test__wrap">
        <CardPost
          v-for="post in posts.data"
          :key="post.id"
          :title="post.attributes.title"
          :img="config.public.strapiApi + post.attributes.image.data.attributes.url"
        />
        <button :disabled="loadingPostButton" @click="loadMore" v-if="page < posts.meta.pagination.pageCount" class="btn-main test__more">Load more</button>
        <pre>{{ loadPosts }}</pre>
      </div>
      <div v-else>Posts not</div>
    </div>
  </section>
</template>

<style lang="scss">
.test {
  padding: 60px 0;
}

.test__wrap {
  display: grid;
  gap: 20px;
  
  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
}

.test__more {
  grid-column: 1 / -1;
  justify-self: center;
}
</style>