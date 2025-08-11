<script setup lang="ts">
import OpenTag from '~/assets/svg/OpenTag.svg'
import Endtag from '~/assets/svg/EndTag.svg'
import { IconNames } from '~/enums/IconNames'
import { iconsNameSvgMap } from '~/assets/svg/index'
import SkillComponent from '../skillComponent.vue'
import LineSvg from '~/assets/svg/horizontal-line.svg'

const iconNames = Object.values(IconNames)

const skills = iconNames.map(name => ({
  text: name,
  icon: iconsNameSvgMap[name],
}))
</script>

<template>
  <div class="section">
    <div class="section__title">
      <OpenTag />
      <div>Tech Skills</div>
      <Endtag />
    </div>

    <div class="section__carousel-header">
      <div class="section__carousel-titles">
        <div class="section__carousel-title section__carousel-title--small">
          <img class="section__image--small" src="assets/paint-brush.png" />
          <div>Back-End</div>
        </div>
        <div class="section__carousel-title section__carousel-title--big">
          <img class="section__image--big" src="assets/paint-brush.png" />
          <div>Front-End</div>
        </div>
        <div class="section__carousel-title section__carousel-title--small">
          <img class="section__image--small" src="assets/paint-brush.png" />
          <div>Management</div>
        </div>
      </div>
      <div class="section__carousel-bar" />
    </div>

    <LineSvg class="section__line1" />
    <LineSvg class="section__line2" />
    <div class="section__cards">
      <div v-for="skill in [...skills, ...skills, ...skills, ...skills]" :key="skill.text">
        <SkillComponent :text="skill.text" :icon="skill.icon" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.section {
  background-color: rgba($color: #ffffff, $alpha: 0.05);
  margin-top: 68px;
  padding-top: 40px;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

  &__carousel-header {
    padding-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  &__carousel-titles {
    display: flex;
    gap: 27px;
    color: white;
    font-family: 'Allerta Stencil';
    font-weight: 400;
  }

  &__carousel-bar {
    background-color: #673ab7;
    width: 110px;
    height: 4px;
    border-radius: 24px;
  }

  &__carousel-title {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    line-height: 100%;

    &--small {
      font-size: 12px;
    }

    &--big {
      font-size: 24px;
    }
  }

  &__image--small {
    height: 16px;
    width: 16px;
  }

  &__image--big {
    height: 32px;
    width: 32px;
  }

  &__cards {
    position: relative;
    margin-bottom: 100px;
    display: flex;
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    gap: 12px;
    width: 970px;
    height: 207px;
    padding: 31px;
  }

  &__line1 {
    position: absolute;
    width: 100%;
    top: 250px;
    color: #673ab7;
  }

  &__line2 {
    position: absolute;
    width: 100%;
    top: 342px;
    color: #ffffff;
  }
}
</style>
