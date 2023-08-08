<template>
  <header class="header" >
    <div class="container">
      <div class="header__wrap">
        <NuxtLink to="/" class="header__logo">
          <img src="/icon/logo.png" alt="">
        </NuxtLink> 

        <nav class="header__nav">
          <NuxtLink to="/" class="link header__link">Обучение</NuxtLink>
          <NuxtLink to="/" class="link header__link">Материалы</NuxtLink>
          <NuxtLink to="/" class="link header__link">Грамматика </NuxtLink>
          <NuxtLink to="/" class="link header__link">Медиатека</NuxtLink>
          <NuxtLink to="/" class="link header__link">Презентации</NuxtLink>
          <NuxtLink to="/" class="link header__link">Блог</NuxtLink>
          <NuxtLink to="/" class="link header__link">О нас</NuxtLink>
        </nav> 

        <Socials />

        <div class="header__btns">
          <button class="btn-transparent header__btn">Войти</button>
          <button class="btn-secondary header__btn">Регистрация</button>
        </div>

        <div class="header__burger">
          <span></span>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  position: sticky;
  top: 0;
  background-color: $white;
  z-index: 50;
}

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

@media (max-width: 1199px) {
  .header__logo {
    flex: 1 1 auto;
  }

  .header__nav {
    display: none;
  }

  .header__burger {
    display: block;
    position: relative;
    width: 30px;
    height: 20px;
    position: relative;
    z-index: 3;
    }
  .header__burger span {
    position: absolute;
    background-color: $grey;
    left: 0;
    width: 100%;
    height: 2px;
    top: 9px;
    transition: all 0.3s ease 0s;
    }
  .header__burger:before,
  .header__burger:after {
    content: '';
    background-color: $grey;
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    transition: all 0.3s ease 0s;
    }
    .header__burger:before {
      top: 0;
    }
    .header__burger:after {
      bottom: 0;
    }
}
</style>

<script src="https://code.jquery.com/jquery-3.6.0.min.js">
  $(document).ready(function () {
    $('.header__burger').click(function (event) {
      $('.header__burger, .header__nav').toggleClass('active');
      $('body').toggleClass('lock');
    });
  });
</script>
