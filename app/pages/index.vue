<script setup lang="ts">
  import NavButton from '~/components/navButton.vue'
  import SkillComponent from '~/components/skillComponent.vue';
  import AngularIcon from '~/components/svg-components/angular-icon.vue';
  import JavascriptIcon from '~/components/svg-components/javascript-icon.vue';
  import ProjectCard from '~/components/projectCard.vue'

  const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas, massa at imperdiet convallis, libero lorem luctus et at nibh. Donec libero leo, posuere vel mi in, tincidunt iaculis lorem. Sed et pharetra diam. Proin eget quam viverra turpis convallis elementum. Nullam a libero sit amet purus pulvinar gravida in ut ligula. Ut aliquet tincidunt feugiat.'
</script>

<template>
  <div class="home">
    <NavButton text="About me" />
    <SkillComponent text="Angular"><AngularIcon/></SkillComponent>
    <SkillComponent text="JavaScript"><JavascriptIcon/></SkillComponent>
    <ProjectCard title="Multiplayer TicTacToe" :description="description"></ProjectCard>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 20px;
}
</style>