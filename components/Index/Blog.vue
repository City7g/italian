<template>
  <div class="blog">
    <div class="container">
        <h2 class="title-h1 blog__title"> 
          Блог 
          <svg class="grammar__title-icon" width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L13 12.5L2 23" stroke="#251C1C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </h2>

        
        <div class="blog__category">
          <!-- <CardBlog v-for="category in 3" :key="category" /> -->

          <CardBlog
            title="Text"
            img="/img/blog-category-1.svg"
          />
          <CardBlog
            title="Text2"
            img="/img/blog-category-1.svg"
          />
          <CardBlog
            title="Text3"
            img="/img/blog-category-1.svg"
          />
        </div>


    </div>
  </div>
</template>

<style lang="scss">
.blog {
  padding: 90px 0;
}

.blog__category {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}
</style>