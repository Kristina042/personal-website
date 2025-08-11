<script setup lang="ts">
import OpenTag from '~/assets/svg/OpenTag.svg'
import Endtag from '~/assets/svg/EndTag.svg'
import ProjectCard from '../projectCard.vue'

const description =
  'A real-time, browser-based TicTacToe game where players can create or join matches, play against friends or random opponents, and see instant updates using WebSocket-powered communication. Designed with a clean UI and responsive gameplay for both desktop and mobile.'
</script>

<template>
  <div class="section">
    <div class="section__title">
      <OpenTag />
      <div>Projects</div>
      <Endtag />
    </div>

    <div class="section__cards">
      <ProjectCard title="Multiplayer TicTacToe" :description="description" />
      <ProjectCard title="Multiplayer TicTacToe" :description="description" />
      <ProjectCard title="Multiplayer TicTacToe" :description="description" />
      <ProjectCard title="Multiplayer TicTacToe" :description="description" />
      <ProjectCard title="Multiplayer TicTacToe" :description="description" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section {
  position: relative;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding-bottom: 100px;
  width: 100%;

  &__title {
    padding-top: 30px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: white;
    font-family: 'Roboto Mono';
    font-weight: 700;
    font-size: 32px;
  }

  &__cards {
    max-width: 1024px;
    display: flex;
    flex-wrap: wrap;
    gap: 44px;
  }

  &__line1 {
    position: absolute;
    top: 0px;
    width: 100%;
  }

  &__line2 {
    position: absolute;
    top: 80px;
    width: 100%;
  }
}
</style>
