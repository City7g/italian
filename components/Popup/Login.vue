<script setup>
const login = ref(null)
const password = ref(null)

const hadlerSubmit = () => {
  console.log(login.value, password.value)
}
</script>

<template>
  <PopupWrap>
    <h4 class="title-h2 form__title">Быстрая регистрация</h4>
    <p class="text-p2 form__text">
      Для доступа к функциям личного кабинета необходимо зарегистрироваться.
    </p>

    <form class="form" @submit.prevent="hadlerSubmit">
      <input
        class="form__input input--user"
        type="text"
        placeholder="Вашe имя"
        v-model="login"
      />
      <input
        class="form__input input--mail"
        type="text"
        placeholder="Ваша почта"
        v-model="password"
      />
      <input
        class="form__input input--lock"
        type="text"
        placeholder="Придумайте пароль"
      />
      <BaseButton class="form__btn" text="Green" color="green" />
    </form>

    <PopupSocials class="popup__socials" />
  </PopupWrap>
</template>

<style lang="scss">
.form {
  display: flex;
  flex-direction: column;
}

.form__input {
  & + & {
    margin-top: 12px;
  }
}

.form__btn {
  margin-top: 32px;
}

.form__title {
  margin-bottom: 6px;
}

.form__text {
  margin-bottom: 32px;
  color: #4b4b4b;
}
</style>
