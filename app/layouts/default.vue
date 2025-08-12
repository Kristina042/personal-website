<script setup lang="ts">
import { NuxtPage } from '#components'
import GridBackround from '~/assets/svg/grid-background.svg'
import CursorGlow from '~/components/cursorGlow.vue'
</script>

<template>
  <div>
    <GridBackround class="grid" />
    <!-- <CursorGlow /> -->
    <NuxtPage/>
  </div>
</template>

<style scoped>
.grid {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: -1;
  width: 100vw;
  height: 100vh;
}
</style>
