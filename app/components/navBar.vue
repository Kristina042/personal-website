<script setup lang="ts">
import NavButton from './navButton.vue'

const navigateToCv = ()  => {
  window.open("/CV_Christine Miaekivi.pdf", "_blank")
}

const navigateToGithub = () => {
  window.open("https://github.com/Kristina042", "_blank")
}

const navigateToLinkedin = () => {
  window.open("https://www.linkedin.com/in/christine-miaekivi-b17980331/", "_blank")
}
</script>

<template>
  <div class="nav-bar">
    <NavButton class="nav-bar__item" text="About Me" target="about"/>
    <NavButton class="nav-bar__item" text="Skills" target="skills" target-block="center"/>
    <NavButton class="nav-bar__item" text="Projects" target="projects"/>
    <NavButton  class="nav-bar__CV" text="CV" target="cv" @download-cv="navigateToCv"/>
    <ClientOnly>
      <NavButton class="nav-bar__gitHub" text="GitHub" @click="navigateToGithub"/>
      <NavButton class="nav-bar__linkedin" text="LinkedIn" @click="navigateToLinkedin"/>
    </ClientOnly>
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
  justify-content: center;
  gap: 20px;
  align-items: center;
  width: 100%;
  padding: 15px 50px;

  &__item {
    display: none;
  }

  @media (min-width: 30rem) {
    gap: 30px;
  }

  @media (min-width: 48rem) { // ~768px
    padding: 25px;
    gap: 32px;

    display: flex;
    justify-content: center;
    align-items: center;

    &__item {
      display: flex;
    }

      &__gitHub,
      &__linkedin {
        display: none;
      }
  }
}
</style>
