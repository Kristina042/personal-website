<script setup lang="ts">
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
      Tech Skills
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
    width: 100%;
    overflow: hidden;
  }

  &__slide {
    display: flex;
    width: 100%;
    max-height: 200px;
  }

  &__skills-wrapper {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(2, 1fr);
    column-gap: 12px;
    row-gap: 8px;
    padding: 30px 0;
  }

  &__title {
    font-size: 32px;
    font-weight: 700;
    font-family: "Roboto Mono";

    margin-bottom: 40px;
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
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    cursor: pointer;

    height: 40px;

    font-size: 16px;
    font-family: "Allerta Stencil";

    opacity: 0.75;

    transition: font-size ease-in-out .1s;
    transform-origin: center;

    &--active {
      font-size: 32px;

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
    width: 200px;
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

}


</style>
