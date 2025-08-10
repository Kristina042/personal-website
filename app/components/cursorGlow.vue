<script setup lang="ts">
    import { ref, onMounted, onUnmounted } from 'vue'

    const x = ref(0)
    const y = ref(0)

    function updatePosition(e: MouseEvent) {
        x.value = e.clientX
        y.value = e.clientY
    }

    onMounted(() => {
        window.addEventListener('mousemove', updatePosition);
    })

    onUnmounted(() => {
        window.removeEventListener('mousemove', updatePosition);
    })
</script>


<template>
  <div
    class="cursor-glow"
    :style="{ left: x + 'px', top: y + 'px' }"
  />
</template>

<style lang="scss">
    .cursor-glow {
        position: fixed;
        width: 50px;
        height: 50px;
        border-radius: 100%;
        background: radial-gradient(circle, rgba(110, 53, 216, 0.3) 0%, transparent 80%);
        pointer-events: none;
        transform: translate(-50%, -50%);
        z-index: 1;
        transition: top 0.05s, left 0.05s;
    }
</style>