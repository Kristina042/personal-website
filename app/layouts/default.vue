<template>
  <div >
    <Background class="l-default__background"/>
    <Background2 class="l-default__background l-default__background--second"/>
  </div>
  <div class="l-default__glow"
    :style="`--x: ${x}px; --y: ${y}px`"
  />
  <slot />
</template>

<script lang="ts" setup>
import Background from '@/assets/svg/grid-background.svg'
import Background2 from '@/assets/svg/grid-background2.svg'


const x = ref()
const y = ref()

const onMove = (props: MouseEvent) => {
  x.value = props.clientX
  y.value = props.clientY
}


onMounted(() => {
  window.addEventListener('mousemove', onMove, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMove as any)
})

</script>

<style lang="scss">
.l-default {
  &__background {
    width: 100%;
    height: 100%;

    position: fixed;

    z-index: -1;

    &--second {
      z-index: -2;
    }

  }

  &__glow {
    height: 200px;
    width: 200px;

    position: absolute;
    left: var(--x);
    top: var(--y);

    border-radius: 100%;
    background-color: rgb(255, 255, 255);
    transform: translate(-50%, -50%);


    filter: blur(25px);

    z-index: -4;
  }

  @media (max-width: 64rem) {
    &__glow {
      display:none;
    }

  }
}

</style>
