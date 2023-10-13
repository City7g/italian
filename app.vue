<script setup>
const { isPopipShow, openPopup, closePopup } = usePopup()

provide('popup', { openPopup, closePopup })
</script>

<template>
  <div>
    <Header />
    <NuxtPage />
    <Footer />
    <div class="bg"></div>
    <PopupLogin v-if="isPopipShow === 'login'" />
  </div>
</template>

<style lang="scss">
.bg {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: $black;
  opacity: 0;
  pointer-events: none;
}

.bg.active {
  opacity: 0.2;
}
</style>
