<!-- gridBackground.vue -->
<script setup lang="ts">
import GridBackground from '~/assets/svg/grid-background.svg'
</script>

<template>
  <GridBackground class="svg-grid-background" />
</template>

<style scoped>
.svg-grid-background {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: -1;
  width: 100vw;
  height: 100vh;
}
</style>
