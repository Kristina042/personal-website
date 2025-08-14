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
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 100px;
  margin-bottom: 200px;
  width: 100%;

  &__title {
    padding-top: 30px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: $white;
    font-family: 'Roboto Mono';
    font-weight: 700;
    font-size: 32px;
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 44px;
    width: 100%;
  }

  /* Large Mobile */
  @media (min-width: 30rem) {}

  /* Tablet */
  @media (min-width: 48rem) {
    &__cards {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 30px;
    }
  }

  /* Laptop */
  @media (min-width: 64rem) {
    padding: 200px;
    gap: 80px;

    &__cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* Large Desktop */
  @media (min-width: 90rem) {
    padding: 200px;
    gap: 80px;

    &__cards {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  /* 4K */
  @media (min-width: 240rem) {}

}
</style>
