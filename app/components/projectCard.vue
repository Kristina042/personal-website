//TODO pass images as props
<script lang="ts" setup>
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <div class="project-card">

    <div class="project-card__content">
      <div class="project-card__content__title">{{ title }}</div>
      <div class="project-card__images">
        <img class="project-card__laptop" src="/assets/laptop.png"/>
        <img class="project-card__phone" src="/assets/phone.png"/>
      </div>
      <div class="project-card__content__description">{{ description }}</div>
    </div>

    <div class="project-card__buttons">
      <div class="project-card__source-and-tech">
        <div class="project-card__button">Source Code</div>
        <div class="project-card__button">Tech Details</div>
      </div>
      <div class="project-card__demo">Live Demo App</div>
    </div>
  </div>
</template>

<style lang="scss">
.project-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 420px;
  height: 460px;
  border-radius: 12px;

  padding-bottom: 16px;
  padding-left: 29px;
  padding-right: 29px;
  padding-top: 24px;

  font-weight: 600;
  line-height: 100%;
  font-family: 'Inter';
  color: white;

  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.7),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1);

  &__images {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 240px;
    height: 120px;
  }

  &__laptop {
    position: absolute;
    width: 230px;
    height: 130px;
    right: -50px;

  }

  &__phone {
    position: absolute;
    width: 150px;
    height: 140px;
    right: -120px;
    top: 10px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-bottom: 20px;

    &__title {
      font-size: 22px;
      align-self: center;
    }

    &__description {
      font-weight: 400;
      font-size: 15px;
      line-height: 22px;
    }
  }

  &__buttons {
    font-size: 12px;
    width: 100%;
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 30px;
    border-radius: 10px;
    background-color: rgba($color: #000000, $alpha: 0.5);
  }

  &__source-and-tech {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  &__demo {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba($color: #41f21e80, $alpha: 0.5);
    width: 100%;
    border-radius: 8px;
    height: 30px;
  }
}
</style>
