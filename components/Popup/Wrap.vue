<script setup>
const { closePopup } = inject('popup')
</script>

<template>
  <div @click.self="closePopup" class="popup">
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
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, .2);
}

.popup__wrap {
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;
  margin-left: auto;
  padding: 40px 60px;
  background-color: white;
  
  @media (min-width: 1200px) {
    padding: 40px 95px;
  }
}

.popup__content {
  max-width: 310px;
  margin-bottom: 80px;
}

.popup__socials {
  margin-top: 40px;
}
</style>