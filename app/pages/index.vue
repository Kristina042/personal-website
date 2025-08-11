<script setup lang="ts">
  import AboutMe from '~/components/sections/aboutMe.vue';
  import Projects from '~/components/sections/projects.vue';
  import techSkills from '~/components/sections/techSkills.vue';
</script>

<template>
  <div class="home">

    <div>
      <AboutMe/>
    </div>

    <div class="home__tech-skills">
      <techSkills/>
    </div>

    <div>
      <Projects/>
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