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
          <CardGrammar
          img="/img/grammar1.svg"
          title="А1 - Начало"
          text="Уровень выживания. Необходимый минимум."
          />
          <CardGrammar
          img="/img/grammar2.svg"
          title="А2 - Общение на бытовые темы."
          text="Требуется для получения вида на жительство (permesso di soggiorno)."
          />
          <CardGrammar
          img="/img/grammar3.svg"
          title="B1 - Обсуждение серьёзных тем."
          text="Чтение простых книг. Требуется для получения гражданства."
          />
          <CardGrammar
          img="/img/grammar4.svg"
          title="В2 -  Заковыристая грамматика."
          text="Требуется для  обучения в университетах."
          />
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.grammar{
  margin-top: 150px;
  margin-bottom: 123px;

  @media (max-width: 1199px) {
    margin-top: 96px;
    margin-bottom: 80px;
  }

  @media (max-width: 567px) {
    margin-top: 66px;
    margin-bottom: 50px;
  }
}

.grammar__title {
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

  @media (max-width: 1199px) {
    margin-top: 30px;
    gap: 15px;
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
}
</style>