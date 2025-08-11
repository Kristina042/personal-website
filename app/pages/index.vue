<script setup lang="ts">
  import NavButton from '~/components/navButton.vue'
  import SkillComponent from '~/components/skillComponent.vue';
  import AngularIcon from '~/assets/svg/angular.svg';
  import javascriptIcon from '~/assets/svg/javascript.svg';
  import ProjectCard from '~/components/projectCard.vue'
  import AboutMe from '~/components/sections/aboutMe.vue';
  import techSkills from '~/components/sections/techSkills.vue';

  const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas, massa at imperdiet convallis, libero lorem luctus et at nibh. Donec libero leo, posuere vel mi in, tincidunt iaculis lorem. Sed et pharetra diam. Proin eget quam viverra turpis convallis elementum. Nullam a libero sit amet purus pulvinar gravida in ut ligula. Ut aliquet tincidunt feugiat.'
</script>

<template>
  <div class="home">

    <div>
      <AboutMe/>
    </div>

    <div class="home__tech-skills">
      <techSkills/>
    </div>

    <!-- <div class="project-card-wrapper">
      <ProjectCard title="Multiplayer TicTacToe" :description="description"></ProjectCard>
    </div> -->
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