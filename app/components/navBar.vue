<script setup lang="ts">
import NavButton from './navButton.vue'
</script>

<template>
  <div class="nav-bar">
    <NavButton text="About Me" />
    <NavButton text="Skills" />
    <NavButton text="Projects" />
    <NavButton text="CV" />
  </div>
</template>

<style scoped lang="scss">
.nav-bar {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgba($black, 25%);
  backdrop-filter: blur(2px);
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  width: 100%;
}
</style>
