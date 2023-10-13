<template>
  <div class="popup">
    <div class="popup__wrap">
      <div class="popup__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.popup {
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  bottom: 0;
  z-index: 100;
  background-color: white;
  padding: 40px 60px;
  
  @media (min-width: 1200px) {
    padding: 40px 95px;
  }
}

.popup__wrap {
  max-width: 310px;
}
</style>