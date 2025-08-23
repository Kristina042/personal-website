<script setup lang="ts">
import NavButton from './navButton.vue'

const navigateToCv = ()  => {
  window.open("/CV - Christine Miaekivi.pdf", "_blank")
}
</script>

<template>
  <div class="nav-bar">
    <NavButton class="nav-bar__item" text="About Me" target="about"/>
    <NavButton class="nav-bar__item" text="Skills" target="skills" target-block="center"/>
    <NavButton class="nav-bar__item" text="Projects" target="projects"/>
    <NavButton  class="nav-bar__CV" text="CV" target="cv" @download-cv="navigateToCv"/>
  </div>
</template>

<style scoped lang="scss">
.nav-bar {
  position: fixed;
  top: 0;
  z-index: 100;
  background-color: rgba($black, 25%);
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-left: 50px;
  padding-top: 15px;
  padding-bottom: 15px;

  &__item {
    display: none;
  }

  @media (min-width: 48rem) { // ~768px
    padding: 25px;
    gap: 32px;

    display: flex;
    justify-content: center;
    align-items: center;

    &__item {
      display:flex;
    }
  }
}
</style>
