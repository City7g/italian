<script setup>
const isMenuOpen = ref(false)

</script>

<template>
  <div class="socials socials-mobile" :class="{ 'active': isMenuOpen }">
    <div class="socials__wrap">
      <div class="socials__item">
        <NuxtLink to="/"><img src="/icon/youtube_icon.svg" alt="" /></NuxtLink>
      </div>
      <div class="socials__item">
        <NuxtLink to="/"><img src="/icon/facebook_icon.svg" alt="" /></NuxtLink>
      </div>
      <div class="socials__item">
        <NuxtLink to="/">
          <img src="/icon/instagram_icon.svg" alt="" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.socials__wrap {
  display: flex;
  gap: 10px;
}

@media (max-width: 585px) {
  .socials {
    display: none;
  }
}
</style>