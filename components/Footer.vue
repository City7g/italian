<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrap">
        <div class="footer__left">
          <NuxtLink to="/" class="footer__logo">
            <img src="/icon/logo.png" alt="">
          </NuxtLink> 
        </div>
        <nav class="footer__nav">
          <NuxtLink to="/" class="footer__link">Обучение</NuxtLink>
          <NuxtLink to="/" class="footer__link">О школе</NuxtLink>
          <NuxtLink to="/" class="footer__link">Личный кабинет</NuxtLink>
          <NuxtLink to="/" class="footer__link">Блог</NuxtLink>
          <NuxtLink to="/" class="footer__link">Подход к обучению</NuxtLink>
          <NuxtLink to="/" class="footer__link">Вход / Регистрация</NuxtLink>
          <NuxtLink to="/" class="footer__link">Материалы</NuxtLink>
        </nav>
        <button class="btn-main footer__btn">Написать нам</button>
      </div>
      <div class="footer__botton">
        <p>Designed by <span>Id.</span> and <span>GroupTechno</span></p>
        <p>© Studia.it 2019</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  background-color: $bc-grey;
  padding: 32px 0 60px;
}

.footer__wrap {
  display: flex;
  justify-content: space-between;
}

.footer__left {

}

.footer__nav {
  max-width: 600px;
  display: flex;
  flex-wrap: wrap;
  gap: 0 60px;

  &>* {
    flex: 0 0 calc(33% - 40px);
    margin-bottom: 15px;
  }
}

.footer__link {
  color: $black;
  font-size: 16px;
  line-height: 170.9%;
  letter-spacing: 0.8px;
}

.footer__btn {
  height: 100%;
}

.footer__botton {
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  gap: 120px;
}

.footer__botton span {
  font-weight: 700;
}
</style>

