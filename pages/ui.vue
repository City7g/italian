<template>
  <div class="ui">
    <div class="container">
      <div class="ui__wrap">
        <h4 class="ui__caption">Button</h4>
        <BaseButton text="Green" color="green" />
        <BaseButton text="Red" color="red" />
        <BaseButton text="Primary" color="primary" />
        <BaseButton text="Success" color="success" />
        <BaseButton text="Danger" color="danger" />
        <BaseButton text="Warning" color="warning" />
        <BaseButton text="Info" color="info" />
        <BaseButton text="Light" color="light" />
        <BaseButton text="Dark" color="dark" />
      </div>

      <div class="ui__wrap">
        <h4 class="ui__caption">Button outline</h4>
        <BaseButton text="Green" color="green" :outline="true" />
        <BaseButton text="Red" color="red" :outline="true" />
        <BaseButton text="Primary" color="primary" :outline="true" />
        <BaseButton text="Success" color="success" :outline="true" />
        <BaseButton text="Danger" color="danger" :outline="true" />
        <BaseButton text="Warning" color="warning" :outline="true" />
        <BaseButton text="Info" color="info" :outline="true" />
        <BaseButton text="Light" color="light" :outline="true" />
        <BaseButton text="Dark" color="dark" :outline="true" />
      </div>

      <div class="ui__wrap ui__wrap--column">
        <h4 class="ui__caption">Input</h4>
        <input type="text" placeholder="Введите текст">
        <input type="text" placeholder="Введите имя" class="input--user">
        <input type="email" placeholder="Введите почту" class="input--mail">
        <input type="password" placeholder="Введите пароль" class="input--lock">
        <input type="text" placeholder="Ошибка" class="input--error">
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.ui {
  padding: 20px;
}

.ui__wrap {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 24px;
  border: 1px solid #dee2e6;
  border-radius: 8px;

  &--column {
    flex-direction: column;
  }

  & + & {
    margin-top: 30px;
  }
}

.ui__caption {
  position: absolute;
  left: 20px;
  top: 0;
  padding: 0 4px;
  transform: translateY(-50%);
  background-color: #fff;
}
</style>