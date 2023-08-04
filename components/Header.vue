<template>
  <header class="header" >
    <div class="container">
      <div class="header__wrap">
        <NuxtLink to="/" class="header__logo">
          <img src="/icon/logo.png" alt="">
        </NuxtLink> 

        <nav class="header__nav">
          <NuxtLink to="/" class="header__link">Обучение</NuxtLink>
          <NuxtLink to="/" class="header__link">Материалы</NuxtLink>
          <NuxtLink to="/" class="header__link">Грамматика </NuxtLink>
          <NuxtLink to="/" class="header__link">Медиатека</NuxtLink>
          <NuxtLink to="/" class="header__link">Презентации</NuxtLink>
          <NuxtLink to="/" class="header__link">Блог</NuxtLink>
          <NuxtLink to="/" class="header__link">О нас</NuxtLink>
          <NuxtLink to="/test" class="header__link">Тест</NuxtLink>
        </nav>

        <div class="social__media"></div>

        <div class="header__btns">
          <button class="btn-transparent header__btn">Войти</button>
          <button class="btn-secondary header__btn">Регистрация</button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header__wrap {
  display: flex;
  align-items: center;
  gap: 28px;
  height: 80px;
}

.header__nav{
  margin: 0 auto;
}

.header__link:not(:last-child) {
  margin-right: 24px;
}

.header__link{
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.42px;
  color: $black;
  transition: 0.3s color ease;

  &:hover {
    color: $green;
  }
}

.header__btn:not(:last-child) {
  margin-right: 8px;
}
</style>