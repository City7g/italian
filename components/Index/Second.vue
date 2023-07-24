<template>
  <section class="second">
    <div class="container">
      <div class="second__wrap">
        <div class="second__image">
          <img class="second__img" src="/img/second.svg" alt="">
        </div>
        <div class="second__content">
          <h1 class="title-h1 second__title">Кто мы?</h1>
          <p class="text-p1 second__text">Studia.it предлагает новый подход к изучению итальянского языка! Мы раскладываем язык по полочкам, проникаем в самую его суть и вытаскиваем из недр самое нужное.
          Разрабатываем навыки, избавляемся от барьеров и препятствий, ищем интересное, знакомимся, общаемся и дружим!
          Мы за гибкость и интерактивность. <br> <br>
          Хочешь узнать больше? Жми!
          </p>
          <button class="btn-main second__button">Узнать больше!</button>
          <img class="second__ball" src="/img/second-ball.svg" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.second {
  background-color: $bc-grey;
  padding: 82px 0px;
}

.second__wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}  

.second__content {
  position: relative;
}

.second__title {
  margin-bottom: 20px;
}

.second__text {
  margin-bottom: 50px;
}

.second__ball {
  position: absolute;
  right: -30px;
  bottom: -115px;
}
</style>