<script setup lang="ts">
import OpenTag from '~/assets/svg/OpenTag.svg'
import Endtag from '~/assets/svg/EndTag.svg'
import { IconNames } from '~/enums/IconNames'
import { iconsNameSvgMap } from '~/assets/svg/index'
import SkillComponent from '../skillComponent.vue'
import 'vue3-carousel/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

import PaintBrush from '~/assets/paint-brush.png'

const iconNames = Object.values(IconNames)

const backendSkills = [
  { text: 'Node.js', icon: iconsNameSvgMap[IconNames.ANGULAR] },
  { text: 'Express', icon: iconsNameSvgMap[IconNames.GRAPHQL] }
]

const frontendSkills = [
  { text: 'Vue.js', icon: iconsNameSvgMap[IconNames.ANGULAR]},
  { text: 'frontend', icon: iconsNameSvgMap[IconNames.NUXT] },
  { text: 'TypeScript', icon: iconsNameSvgMap[IconNames.RXJS] },
  { text: 'TypeScript', icon: iconsNameSvgMap[IconNames.ANGULAR] },
  { text: 'Vue.js', icon: iconsNameSvgMap[IconNames.ANGULAR]},
  { text: 'frontend', icon: iconsNameSvgMap[IconNames.NUXT] },
  { text: 'TypeScript', icon: iconsNameSvgMap[IconNames.RXJS] },
  { text: 'TypeScript', icon: iconsNameSvgMap[IconNames.ANGULAR] },
  { text: 'Vue.js', icon: iconsNameSvgMap[IconNames.ANGULAR]},
  { text: 'frontend', icon: iconsNameSvgMap[IconNames.NUXT] },
  { text: 'TypeScript', icon: iconsNameSvgMap[IconNames.RXJS] },
  { text: 'TypeScript', icon: iconsNameSvgMap[IconNames.ANGULAR] },
  { text: 'Vue.js', icon: iconsNameSvgMap[IconNames.ANGULAR]},
  { text: 'frontend', icon: iconsNameSvgMap[IconNames.NUXT] }
]

const managementSkills = [
  { text: 'Jira', icon: iconsNameSvgMap[IconNames.JAVASCRIPT] },
  { text: 'Agile', icon: iconsNameSvgMap[IconNames.ANGULAR] }
]

const slides = ref([
  backendSkills,
  frontendSkills,
  managementSkills
])

const titles = ref([
  { icon: PaintBrush, text: 'Back-End' },
  { icon: PaintBrush, text: 'Front-End' },
  { icon: PaintBrush, text: 'Management' },
])

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: false,
}

const currentSlide = ref<number>(1)

let intervalId: number | undefined
const counter = ref(0)
const isPaused = ref(false)


const changeSlide = (index?: number) => {
  if (index) {
    currentSlide.value = index
    return
  }

  if (currentSlide.value >= 2) {
    currentSlide.value = 0
    return
  }
  currentSlide.value += 1
}

watch(() => currentSlide.value, () => {
  counter.value = 0
})

onMounted(() => {
  intervalId = window.setInterval(() => {
    if (isPaused.value) return
    counter.value += 2

    if (counter.value >= 100) {
     changeSlide()
    }
  }, 250)
})

onUnmounted(() => clearInterval(intervalId))
</script>

<template>
  <div
    class="tech-skills"
    @mouseleave="isPaused = false"
    @mouseenter="isPaused = true"
  >

    <div class="tech-skills__title">
      <OpenTag />
      <div>Tech Skills</div>
      <Endtag />
    </div>

    <div class="tech-skills__nav">
      <div class="tech-skills__nav-titles">
        <div
          v-for="(title, index) in titles"
          :key="title.text"
          :class="[{
            'tech-skills__nav-button--active': currentSlide === index},
            'tech-skills__nav-button'
          ]"
          @click="changeSlide(index)"
        >
          <img :src="title.icon" class="tech-skills__nav-img" />
          {{ title.text }}
        </div>
      </div>

      <div class="tech-skills__nav-progress-wrapper">
        <div class="tech-skills__nav-progress-bar" :style="`--progress: ${counter}%`"/>
      </div>
    </div>

    <Carousel v-bind="carouselConfig" v-model="currentSlide">
      <Slide v-for="(slide, index) in slides" :key="index">
        <div class="tech-skills__skills-wrapper">
          <SkillComponent
            v-for="(skill, idx) in slide"
            :key="idx"
            :icon="skill.icon"
            :text="skill.text"
          />
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<style scoped lang="scss">
.tech-skills {
  background-color: rgba($white, 0.01);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 56px 0;


  &__carousel {
    max-width: 370px;
    overflow: hidden;
  }

  &__slide {
    max-width: 370px;
    display: flex;
  }

  &__skills-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    column-gap: 8px;
    row-gap: 10px;
    padding: 30px 0;
  }

  &__title {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 28px;
    font-weight: 700;
    font-family: "Roboto Mono";

    margin-bottom: 20px;
  }

  &__nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 8px;

    margin-bottom: 24px;
  }

  &__nav-titles {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
  }

  &__nav-button {
    font-family: "Allerta Stencil";

    opacity: 0.75;

    transition: font-size ease-in-out .1s;
    transform-origin: center;

    display: none;

    &--active {
      display: block;
      font-size: 28px;

      opacity: unset;

      .tech-skills__nav-img {
        width: 32px;
        height: 32px;
      }
    }
  }

  &__nav-img {
    width: 16px;
    height: 16px;
  }

  &__nav-progress-wrapper {
    background-color: rgba($white, 0.5);
    width: 150px;
    height: 6px;
    border-radius: 24px;
  }

  &__nav-progress-bar {
    background-color: $purple;

    width: var(--progress);
    height: 6px;
    border-radius: 24px;

    transition: width ease 0.5s;
  }

    /* Large Mobile */
  @media (min-width: 30rem) {
    &__skills-wrapper {
      column-gap: 14px;
      row-gap:14px;
      padding: 30px 0;
    }
  }

  /* Tablet */
  @media (min-width: 48rem) {
    &__skills-wrapper {
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(3, 1fr);
    }

    &__nav-button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      cursor: pointer;

      &--active {
        font-size: 32px;

        opacity: unset;

        .tech-skills__nav-img {
          width: 32px;
          height: 32px;
        }
      }
    }
  }

  /* Laptop */
  @media (min-width: 64rem) {

    &__skills-wrapper {
      grid-template-columns: repeat(7, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }

    &__title {
      font-size: 32px;
      margin-bottom: 40px;
    }

  }

  /* Large Desktop */
  @media (min-width: 90rem) {
    &__skills-wrapper {
      grid-template-columns: repeat(9, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }
  }
}


</style>
