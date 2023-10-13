<template>
  <div>
    <Header />
    <NuxtPage />
    <Footer />
    <div class="bg"></div>
    <!-- <PopupLogin /> -->
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