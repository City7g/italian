<script setup>
const socials = ['google', 'facebook', 'vk']
</script>

<template>
  <div class="popup-socials">
    <p class="text-p1 popup-socials__title">Регистрация через:</p>

    <div class="popup-socials__socials">
      <NuxtLink
        to="#"
        v-for="social in socials"
        :key="social"
        class="popup-socials__social"
      >
        <img :src="`/icon/${social}-color.svg`" alt="" />
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss">
.popup-socials {
  text-align: center;
}

.popup-socials__title {
  margin-bottom: 10px;
}

.popup-socials__social {
  & + & {
    margin-left: 12px;
  }
}
</style>
