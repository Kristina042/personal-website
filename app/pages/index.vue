<script setup lang="ts">
import AboutMe from '~/components/sections/aboutMe.vue'
import Projects from '~/components/sections/projects.vue'
import TechSkills from '~/components/sections/techSkills.vue'
import NavBar from '~/components/navBar.vue'
import Footer from '~/components/footer.vue'
</script>

<template>
  <div class="home">
    <NavBar/>
    <AboutMe id="about"/>
    <div class="home__glow home__glow--about-me-1" />
    <div class="home__glow home__glow--about-me-2" />

    <TechSkills id="skills"/>
    <div class="home__glow home__glow--skills-1" />
    <div class="home__glow home__glow--skills-2" />


    <div id="projects">
      <Projects/>
    </div>

    <div class="home__glow home__glow--footer-1" />
    <div class="home__glow home__glow--footer-2" />
    <Footer/>
    <div class="home__glow"/>
  </div>
</template>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  &__glow {
    width: 200px;
    height: 200px;
    position: absolute;
    overflow: hidden;
    border-radius: 100%;
    filter: blur(100px);
    z-index: -1;

    &--about-me-1 {
      background-color: $purple;
      left: -50px;
      top: -50px;
    }

    &--about-me-2 {
      background-color: $purple;
      right: -75px;
      top: 650px;
    }

    &--skills-1 {
      background-color: #8B7DF9;
      left: -150px;
      top: 1100px;
    }

    &--skills-2 {
      background-color: $yellow;
      right: 0;
      top: 1200px;
    }

    &--footer-1 {
      background-color: $green;
      height: 150px;
      width: 300px;

      left: -100px;
      bottom: 0;
    }
  }

}
</style>
