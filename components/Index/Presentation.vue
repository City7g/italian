<template>
  <div class="presentation">
    <div class="container">
      <div class="presentation__wrap">
        <div class="presentation__image">
          <img class="presentation__img" src="/img/presentation__img.svg" alt="">
        </div>
        <div class="presentation__content">
          <h2 class="title-h1 presentation__title">
            Презентации
            <svg class="presentation__title-icon" width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L13 12.5L2 23" stroke="#251C1C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </h2>
          <div class="presentation__slider">
            <Slider />
          </div>
          <p class="title-h2 presentation__text">
            Итальянская грамматика наглядно и доступно
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.presentation {
  padding: 80px 0;

  @media (max-width: 1199px) {
    padding: 60px 0;
  }
}

.presentation__title {
  transition: 0.3s color ease;
  margin-bottom: 30px;
  &:hover {
    color: $red;
  }
}

// .presentation__title-icon {
//   & path {
//     transition: 0.3s stroke ease;
//   }
// }

// .presentation__title:hover .presentation__title-icon path {
//   stroke: $red;
// }

.presentation__title-icon path {
  transition: 0.3s stroke ease;

  .presentation__title:hover & {
    stroke: $red;
  }
}

.presentation__text {
  margin-top: 25px;
}

.presentation__wrap {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, minmax(100px, calc(50% - 20px)));
  gap: 20px 40px;

  @media (max-width: 680px) {
  grid-template-columns: repeat(1, 1fr);
  }
}
//  Ламается Слайдер
// 。゜゜(´Ｏ`) ゜゜ (ну почемуууу "presentation__wrap" не работал как надо)
</style>