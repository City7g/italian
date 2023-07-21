<template>
  <section class="first">
    <div class="container">
      <div class="first__wrap">
        <div class="first__content">
          <h1 class="first__title">Начни учить итальянский прямо сейчас!</h1>
          <p class="first__text">Studia.it предлагает новый подход к изучению итальянского языка!Мы раскладываем язык по полочкам, проникаем в самую его суть и вытаскиваем из недр самое нужное.</p>
          <button class="main-btn first__button">Начать обучение</button>
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
}

.first__wrap {
  display: flex;
}

.first__content {

}

.first__title {
  font-size: 40px;
  font-weight: 700;
  line-height: 101.4%; 
  letter-spacing: 1.2px;
}

.first__text{
  color: $grey;
  font-size: 16px;
  font-weight: 400;
  line-height: 170%; 
}
</style>