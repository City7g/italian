<script setup>
const isMenuOpen = ref(false)

const { openPopup } = inject('popup')

watch(isMenuOpen, (newX) => {
  if (newX) {
    document.body.style.overflow = "hidden"
    document.querySelector(".bg").classList.add("active")
  } else {
    document.body.style.overflow = ""
    document.querySelector(".bg").classList.remove("active")
  }
})
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__wrap">
        <NuxtLink to="/" class="header__logo">
          <!-- <img src="/icon/logo.png" alt=""> -->
          <Logo />
        </NuxtLink> 

        <nav class="header__nav" :class="{ 'active': isMenuOpen }">
          <NuxtLink to="/" class="link header__link" :class="{ 'active': isMenuOpen }">Обучение</NuxtLink>
          <NuxtLink to="/" class="link header__link" :class="{ 'active': isMenuOpen }">Материалы</NuxtLink>
          <NuxtLink to="/" class="link header__link" :class="{ 'active': isMenuOpen }">Грамматика </NuxtLink>
          <NuxtLink to="/" class="link header__link" :class="{ 'active': isMenuOpen }">Медиатека</NuxtLink>
          <NuxtLink to="/" class="link header__link" :class="{ 'active': isMenuOpen }">Презентации</NuxtLink>
          <NuxtLink to="/" class="link header__link" :class="{ 'active': isMenuOpen }">Блог</NuxtLink>
          <NuxtLink to="/" class="link header__link" :class="{ 'active': isMenuOpen }">О нас</NuxtLink>
        </nav> 

        <Socials />

        <div class="header__btns">
          <button @click="openPopup('login')" class="btn-transparent header__btn">Войти</button>
          <button @click="openPopup('register')" class="btn-secondary header__btn">Регистрация</button>
        </div>

        <div class="header__burger" :class="{ 'active': isMenuOpen }" @click="isMenuOpen = !isMenuOpen">
          <span></span>
        </div>
      </div>
    </div>
  </header>

  <!-- <div class="mobile-menu" :class="{ 'active': isMenuOpen }">
    <button class="btn-transparent mobile-menu__btn">Войти</button>
    <nav class="mobile-menu__nav" :class="{ 'active': isMenuOpen }">
      <NuxtLink to="/" class="link header__link" :class="{ 'active': isMenuOpen }">Обучение</NuxtLink>
      <NuxtLink to="/" class="link header__link" :class="{ 'active': isMenuOpen }">Материалы</NuxtLink>
      <NuxtLink to="/" class="link header__link" :class="{ 'active': isMenuOpen }">Грамматика </NuxtLink>
      <NuxtLink to="/" class="link header__link" :class="{ 'active': isMenuOpen }">Медиатека</NuxtLink>
      <NuxtLink to="/" class="link header__link" :class="{ 'active': isMenuOpen }">Презентации</NuxtLink>
      <NuxtLink to="/" class="link header__link" :class="{ 'active': isMenuOpen }">Блог</NuxtLink>
      <NuxtLink to="/" class="link header__link" :class="{ 'active': isMenuOpen }">О нас</NuxtLink>
    </nav>
    <Socials />
  </div> -->

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

.header__link.active {
  font-size: 20px;
}

.header__btn:not(:last-child) {
  margin-right: 8px;
}

@media (max-width: 1199px) {
  .header__logo {
    flex: 1 1 auto;
  }

  .header__nav {
    position: fixed;
    top: -100%;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    transition: all 0.3s ease 0s;
  }

  .header__nav.active {
    top: 0;
    right: 0;
    background-color: $white;
    display: flex;
    max-width: 375px;
    // flex: 0 1 375px; Почему не работает ?
    flex-direction: column;
    gap: 30px;
    padding: 75px 0px 0px 60px;
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

    .header__burger.active span {
    transform: scale(0);
    }

    .header__burger.active:before {
    transform: rotate(45deg);
    top: 9px;
    }
    .header__burger.active:after {
    transform: rotate(-45deg);
    bottom: 9px;
    }
}


@media (max-width: 585px) {
  .header__nav.active {
    gap: 20px;
    padding: 55px 0px 0px 40px;
  }

  .header__link.active {
  font-size: 16px;
  }

  .btn-transparent {
    display: none;
  }
}

</style>
