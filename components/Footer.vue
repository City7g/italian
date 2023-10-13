<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrap">
        <div class="footer__left">
          <NuxtLink to="/" class="footer__logo">
            <!-- <img src="/icon/logo.png" alt=""> -->
            <Logo />
          </NuxtLink>
          
          <Socials />
        </div>
        <nav class="footer__nav">
          <NuxtLink to="/" class="link footer__link">Обучение</NuxtLink>
          <NuxtLink to="/" class="link footer__link">О школе</NuxtLink>
          <NuxtLink to="/" class="link footer__link">Личный кабинет</NuxtLink>
          <NuxtLink to="/" class="link footer__link">Блог</NuxtLink>
          <NuxtLink to="/" class="link footer__link">Подход к обучению</NuxtLink>
          <NuxtLink to="/" class="link footer__link">Вход / Регистрация</NuxtLink>
          <NuxtLink to="/" class="link footer__link">Материалы</NuxtLink>
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

  @media (max-width: 567px) {
    padding: 32px 0 30px;
  }
}

.footer__wrap {
  display: flex;
  justify-content: space-between;
  gap: 25px;
  align-items: flex-start;

  @media (max-width: 567px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px 0px;
  }
}

.footer__left {
  flex-shrink: 0;
}

.footer__logo {
  display: block;
  margin-bottom: 25px;
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

  @media (max-width: 1199px) {
    gap: 0 30px;
      &>* {
        flex: 0 0 calc(50% - 40px);
        margin-bottom: 15px;
      }
  }

  @media (max-width: 567px) {
    order: 1;
    grid-column: 1 / -1;
  }
}

.footer__link {
  color: $black;
  font-size: 16px;
  line-height: 170.9%;
  letter-spacing: 0.8px;
}

.footer__btn {

  @media (max-width: 567px) {
    display: block;
    justify-self: flex-start;
    align-self: center;
  }
}

.footer__botton {
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  gap: 120px;

  @media (max-width: 567px) {
    gap: 60px;
  }

  @media (max-width: 410px) {
    gap: 30px;
  }
}

.footer__botton span {
  font-weight: 700;
}
</style>

