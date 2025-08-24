<template>
  <div
    class="nav-button"
    @click="scrollToSection"
  >
    {{ text }}
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  text: string,
  target?: string,
  targetBlock?: ScrollLogicalPosition
}>()

const emit = defineEmits(["download-cv"])

const scrollToSection = () => {

  if (props.text == 'CV') {
    emit("download-cv")
    return
  }

  if (!props.target) return

  const el = document.getElementById(props.target)
  if (!el) return
  el.scrollIntoView({ behavior: "smooth", block: props.targetBlock || 'start' })
}
</script>

<style scoped lang="scss">
.nav-button {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 90px;
  padding: 12px 14px;

  font-size: 14px;
  font-weight: 400;
  line-height: 100%;

  font-family: 'Roboto Condensed';
  color: $white;

  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.7),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1);

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  &:active {
    box-shadow:
      0 10px 10px rgba(0, 0, 0, 0.5),
      inset 0 1px 0 rgba(255, 255, 255, 0.7),
      inset 0 -1px 0 rgba(255, 255, 255, 0.1);
  }

  /* Large Mobile */
  @media (min-width: 30rem) {
    min-width: 120px;
  }

  /* Tablet */
  @media (min-width: 48rem) {
    min-width: 150px;
    padding: 12px 16px;

    font-size: 16px;
  }

  /* Laptop */
  @media (min-width: 64rem) {
    min-width: 180px;
  }

  //~3840px
  @media (min-width: 240rem) {
    min-width:280px;
    font-size: 28px;
    border-radius: 32px;
    padding: 16px 16px;
  }
}


</style>
