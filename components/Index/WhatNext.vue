<template>
  <section class="what-next">
    <div class="container">
      <div class="what-next__wrap">
        <div class="what-next__content">
          <h1 class="title-h1 what-next__title">Что дальше?</h1>
          <p class="text-p1 what-next__text">Exercitation enim non Lorem nostrud nisi commodo aliqua dolor eu tempor veniam non nisi do. Cillum sunt aliquip eu proident excepteur aute nostrud eiusmod dolore non voluptate laborum. !
          </p>
          <button class="btn-main what-next__button">Начать</button>
          <!-- <img class="what-next__ball" src="/img/what-next.svg" alt=""> -->
        </div>
        <div class="what-next__image">
          <img class="what-next__img" src="/img/what-next.svg" alt="">
        </div>
          <img class="what-next__cat-foot" src="/img/WhatNext__cat_foot.svg" alt="">
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.what-next {
  position: relative;
  background-color: $bc-grey;
  padding: 140px 0px;
  margin-top: 80px;

  @media (max-width: 1199px) {
    padding: 75px 0;
    margin-top: 60px;
  }
}

.what-next__wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 40px;

  @media (max-width: 568px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
}

.what-next__content {
  position: relative;
}

.what-next__title {
  margin-bottom: 20px;
}

.what-next__text {
  margin-bottom: 50px;

  @media (max-width: 1199px) {
    margin-bottom: 30px;
  }
}

.what-next__ball {
  position: absolute;
  right: -30px;
  bottom: -115px;
}

.what-next__cat-foot {
  position: absolute;
  top: 38%;
  left: 25%;

  @media (max-width: 1199px) {
    display: none;
  }
}
</style>