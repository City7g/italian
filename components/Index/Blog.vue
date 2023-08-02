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
            title="Италия"
            img="/img/blog-category-1.svg"
            img_2="/img/block-next.svg"
          />
          <CardBlog
            title="Язык"
            img="/img/blog-category-2.svg"
            img_2="/img/block-next.svg"
          />
          <CardBlog
            title="Обучение"
            img="/img/blog-category-3.svg"
            img_2="/img/block-next.svg"
          />
        </div>


    </div>
  </div>
</template>

<style lang="scss">
.blog {
  padding: 90px 0;

  @media (max-width: 680px) {
    padding: 70px 0;
  }
}

.blog__title {
  margin-left: 30px;
  transition: 0.3s color ease;

  &:hover {
    color: $red;
  }

  @media (max-width: 1199px) {
    margin-left: 0;
  }
}

.grammar__title-icon {
    & path {
    transition: 0.3s stroke ease;
  }
}

.blog__title:hover .grammar__title-icon path {
  stroke: $red;
}

.blog__category {
  margin-top: 70px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;

  @media (max-width: 1199px) {
    margin-top: 30px;
    gap: 10px;
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
}
</style>