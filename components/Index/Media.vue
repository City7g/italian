<template>
  <section class="media">
    <div class="container">
      <div class="media__header">
        <div class="media__texts">
          <h2 class="title-h1 media__title">
            Медиатека
            <svg class="media__title-icon" width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L13 12.5L2 23" stroke="#251C1C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </h2>
          <p class="text-p1 media__text">Наша подборка полезных видео для обучения</p>
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
    <img class="media__pillow" src="/img/pillow.svg" alt="">
  </section>
</template>

<style lang="scss">
.media {
  margin: 80px 0px;
  position: relative;

  @media (max-width: 567px) {
    margin: 60px 0px;
  }
}

.media__header {
  margin-bottom: 50px;

  @media (max-width: 1199px) {
    margin-bottom: 30px;
  }
}

.media__texts {
  margin-left: 20px;

  @media (max-width: 1199px) {
    margin-left: 0;
  }
}

.media__title {
  margin-bottom: 10px;
  transition: 0.3s color ease;

  &:hover {
    color: $red;
  }
}

.media__title-icon {
  margin-left: 10px;

  & path {
    transition: 0.3s stroke ease;
  }
}

.media__title:hover .media__title-icon path {
  stroke: $red;
}

.media__card {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-content: center;

  @media (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 567px) {
    grid-template-columns: repeat(1, 1fr);
  }
}

.media__pillow {
  position: absolute;
  top: -48%;
  right: 10%;

  @media (max-width: 1199px) {
    right: 0;
  }

  @media (max-width: 765px) {
    max-width: 180px;
  }

  @media (max-width: 565px) {
    max-width: 125px;
  }
}
</style>