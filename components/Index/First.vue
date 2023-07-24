<template>
  <section class="first">
    <div class="container">
      <div class="first__wrap">
        <div class="first__content">
          <h1 class="title-h1 first__title">Начни учить итальянский прямо сейчас!</h1>
          <p class="text-p1 first__text">Studia.it предлагает новый подход к изучению итальянского языка!Мы раскладываем язык по
            полочкам, проникаем в самую его суть и вытаскиваем из недр самое нужное.</p>
          <button class="btn-main first__button">Начать обучение</button>
        </div>

        <div class="first__image">
          <img src="/img/first.svg" alt="" class="first__img">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.first {
  background-color: #fff;
  padding: 90px 0;
}

.first__wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
}

.first__title {
  margin-bottom: 20px;
}

.first__text {
  margin-bottom: 60px;
}
</style>