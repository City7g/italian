<script setup>
defineProps({
  img: String,
  title: String,
  text: String
})
</script>


<template>
  <div class="card-grammar">
    <img :src="img" alt="">
    <div class="item__content">
      <h2 class="title-h2 item__title">{{ title }}</h2>
      <p class="text-p1 card-grammar__text">{{ text }}</p>
      <p class="text-p1 card-grammar__link">
        Смотреть материалы
        <svg class="card-grammar__icon" width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L7.5 7.5L1 14" stroke="#EF4036" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </p>
      <div class="block__next">
        <img class="next__image" src="/img/block-next.svg" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card-grammar {
  position: relative;
  border-radius: 2px;
  border: 1px solid $black;
  display: flex;
  align-items: center;
  gap: 80px;
  padding: 55px 60px;

  &:hover {
    .card-grammar__text {
      color: $black;
    }
    .card-grammar__link {
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

.card-grammar__text {
  margin-bottom: 35px;
}

.card-grammar__link {
  transition: opacity 0.4s ease;
  opacity: 0;
  color: $red;
}

.card-grammar__icon {
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