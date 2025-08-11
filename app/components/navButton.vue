<template>
    <div class="nav-button">{{ text }}</div>
</template>



<script lang="ts" setup>
defineProps<{
  text: string
}>()

</script>


<style lang="scss">

.nav-button {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 137px;
  padding: 8px 12px;

  font-size: 10px;
  font-weight: 400;
  line-height: 100%;

  font-family: 'Roboto Condensed';
  color: white;

  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow:
  0 10px 20px rgba(0, 0, 0, 0.5),
  inset 0 1px 0 rgba(255, 255, 255, 0.7),
  inset 0 -1px 0 rgba(255, 255, 255, 0.1);

  &:hover{
    cursor: pointer;
  }

  &:active{
    box-shadow:
    0 10px 10px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.7),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1);
  }
}

</style>