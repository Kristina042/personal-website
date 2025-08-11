<script setup lang="ts">
import AboutMe from '~/components/sections/aboutMe.vue'
import Projects from '~/components/sections/projects.vue'
import TechSkills from '~/components/sections/techSkills.vue'
import NavBar from '~/components/navBar.vue'
</script>

<template>
  <div class="home">
    <div>
      <NavBar />
    </div>

    <div>
      <AboutMe />
    </div>

    <div class="home__tech-skills">
      <TechSkills />
    </div>

    <div>
      <Projects />
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__tech-skills {
    width: 100%;
  }
}

.skills-wrapper {
  display: flex;
  gap: 12px;
}
</style>
