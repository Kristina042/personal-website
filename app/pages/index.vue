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
    <AboutMe/>
    <TechSkills/>
    <div>
      <Projects/>
    </div>
    <Footer/>
  </div>
</template>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
