<template>
  <div class="media">
    <div class="container">
      <div class="media__contents">
        <div class="media__fonts">
          <div class="title-h1 media__title">Медиатека</div>
          <div class="text-p1 media__text">Наша подборка полезных видео для обучения</div>
        </div>
        <div class="slider__nav"></div>
      </div>
      <div class="media__card">
        <CardVideo 
          img="/img/video-card1.png"
        />
        <CardVideo
          img="/img/video-card2.png"
        />
        <CardVideo
          img="/img/video-card2.png"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.media__card {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
</style>