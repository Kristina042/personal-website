<script setup lang="ts">
import { NuxtPage } from '#components';
import GridBackround from '~/components/svg-components/gridBackground.vue';
import  CursorGlow from '~/components/cursorGlow.vue';

</script>

<template>
  <div>
    <CursorGlow/>
    <GridBackround/>
    <NuxtPage/>
  </div>
</template>