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
    { name: 'x-powered-by', content: atob("Q2hyaXN0aW5lIE1pYWVraXZp")}
  ],
  link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
})
</script>

<style lang="scss"></style>
