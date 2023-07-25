<template>
  <div class="grammar">
    <div class="container">
      <div class="grammar__wrap">
        <h2 class="title-h1 grammar__title"> 
          Грамматика 
          <svg class="grammar__title-icon" width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L13 12.5L2 23" stroke="#251C1C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </h2>

        <div class="grammar__block">
          <div class="grammar__item">
            <img src="/img/grammar1.svg" alt="">
            <div class="item__content">
              <h2 class="title-h2 item__title">А1 - Начало</h2>
              <p class="text-p1 grammar__text">Уровень выживания. Необходимый минимум.</p>
              <p class="text-p1 grammar__text-hover">
                Смотреть материалы
                <svg class="grammar__item-icon" width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L7.5 7.5L1 14" stroke="#EF4036" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </p>
              <div class="block__next">
                <img class="next__image" src="/img/block-next.svg" alt="">
              </div>
            </div>
          </div>
          <div class="grammar__item">
            <img src="/img/grammar2.svg" alt="">
            <div class="item__content">
              <h2 class="title-h2 item__title">А2 - Общение на бытовые темы.</h2>
              <p class="text-p1 grammar__text">Требуется для получения вида на жительство(permesso di soggiorno).</p>
              <p class="text-p1 grammar__text-hover">
                Смотреть материалы
                <svg class="grammar__item-icon" width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L7.5 7.5L1 14" stroke="#EF4036" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </p>
              <div class="block__next">
                <img class="next__image" src="/img/block-next.svg" alt="">
              </div>
            </div>
          </div>
          <div class="grammar__item">
            <img src="/img/grammar3.svg" alt="">
            <div class="item__content">
              <h2 class="title-h2 item__title">B1 - Обсуждение серьёзных тем.</h2>
              <p class="text-p1 grammar__text">Чтение простых книг. Требуется для получения гражданства.</p>
              <p class="text-p1 grammar__text-hover">
                Смотреть материалы
                <svg class="grammar__item-icon" width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L7.5 7.5L1 14" stroke="#EF4036" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </p>
              <div class="block__next">
                <img class="next__image" src="/img/block-next.svg" alt="">
              </div>
            </div>
          </div>
          <div class="grammar__item">
            <img src="/img/grammar4.svg" alt="">
            <div class="item__content">
              <h2 class="title-h2 item__title">В2 -  Заковыристая грамматика.</h2>
              <p class="text-p1 grammar__text">Требуется для  обучения в университетах.</p>
              <p class="text-p1 grammar__text-hover">
                Смотреть материалы
                <svg class="grammar__item-icon" width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L7.5 7.5L1 14" stroke="#EF4036" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </p>
              <div class="block__next">
                <img class="next__image" src="/img/block-next.svg" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.grammar{
  margin-top: 150px;
  margin-bottom: 123px;
}

.grammar__title {
  margin-left: 30px;
  transition: 0.3s color ease;

  &:hover {
    color: $red;
  }
}

.grammar__title-icon {
  width: 14px;
  height: 24px;

  & path {
    transition: 0.3s stroke ease;
  }
}

.grammar__title:hover .grammar__title-icon path {
  stroke: $red;
}

.grammar__block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
  margin-top: 55px;
}

.grammar__item {
  position: relative;
  border-radius: 2px;
  border: 1px solid $black;
  display: flex;
  align-items: center;
  gap: 80px;
  padding: 55px 60px;

  &:hover {
    .grammar__text {
      color: $black;
    }
    .grammar__text-hover {
      opacity: 1;
    }
    .block__next {
      opacity: 1;
    }
  }
}

.item__title {
  margin-bottom: 15px;
}

.grammar__text {
  margin-bottom: 35px;
}

.grammar__text-hover {
  transition: opacity 0.4s ease;
  opacity: 0;
  color: $red;
}

.grammar__item-icon {
  margin-left: 20px;
  width: 7px;
  height: 13px;
  padding-top: 5px;
}

.block__next {
  transition: opacity 0.4s ease;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0;
}
</style>