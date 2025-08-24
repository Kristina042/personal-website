<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
useHead({
  title: 'Christine Miaekivi',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'description', content: 'Default site description here.' },
  ],
  link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
})
</script>

<style lang="scss"></style>
