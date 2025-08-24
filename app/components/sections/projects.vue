<script setup lang="ts">
import OpenTag from '~/assets/svg/OpenTag.svg'
import Endtag from '~/assets/svg/EndTag.svg'
import ProjectCard from '../projectCard.vue'
import LaptopTicTacToe from '~/assets/laptop_tictactoe.png'
import LaptopPersonalWebsite from '~/assets/laptop_personal-website.png'
import MobilePersonalWebsite from '~/assets/mobile_personal-website.png'
import MobileTicTacToe from '~/assets/mobile-tictactoe.png'

const descriptionTicTacToe =
  'A real-time, browser-based TicTacToe game where players can create or join matches, play against friends or random opponents, and see instant updates using WebSocket-powered communication. Designed with a clean UI and responsive gameplay for both desktop and mobile.'

const descriptionPersonalWebsite='I developed my personal website with Nuxt 4 using a static site generation (SSG) strategy, designed to highlight my frontend development skills'

const ticTacToeDemo = () => {
  window.open("https://tictactoe.miaekivi.com/", "_blank")
}

const ticTacToeGithub = () => {
  window.open("https://github.com/Kristina042/TickTackToe", "_blank")
}

const websiteDemo = () => {
  window.open("https://miaekivi.com/", "_blank")
}


const websiteGithub = () => {
  window.open("https://github.com/Kristina042/personal-website", "_blank")
}
</script>

<template>
  <div class="section">
    <div class="section__title">
      <OpenTag />
      <div>Projects</div>
      <Endtag />
    </div>

    <div class="section__cards">
      <ProjectCard
        title="Multiplayer TicTacToe"
        :description="descriptionTicTacToe"
        :laptop-image="LaptopTicTacToe"
        :mobile-image="MobileTicTacToe"
        @go-to-demo="ticTacToeDemo"
        @go-to-source-code="ticTacToeGithub"

      />
      <ProjectCard title="Personal Website"
        :description="descriptionPersonalWebsite"
        :laptop-image="LaptopPersonalWebsite"
        :mobile-image="MobilePersonalWebsite"
        @go-to-demo="websiteDemo"
        @go-to-source-code="websiteGithub"
      />
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
      column-gap: 50px;
    }
  }

  /* Large Desktop */
  @media (min-width: 90rem) {
    padding: 200px;
    gap: 80px;

    &__cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* 4K */
  @media (min-width: 240rem) {}

}
</style>
