<template>
  <div class="presentation">
    <div class="container">
      <div class="presentation__wrap">
        <div class="presentation__image">
          <img class="presentation__img" src="/img/presentation__img.svg" alt="">
        </div>
        <div class="presentation__content">
          <div class="presentation__title"></div>
          <div class="presentation__slider">
            <Slider />
          </div>
          <div class="presentation__text"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.presentation {
  padding: 80px 0;
}

.presentation__wrap {
  display: flex;
  flex-direction: column;
  gap: 20px 40px;

  @media (min-width: 1200px) {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, minmax(100px, calc(50% - 20px)));
  }
}
</style>