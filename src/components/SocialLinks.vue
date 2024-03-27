<template>
  <div
    class="social my-4 flex text-white text-2xl self-center justify-center items-center space-x-6 w-full z-20 bottom-10"
    :class="{ fixed : fixedBottom === true }"
  >
    <a href="https://web.facebook.com/DWPCNG" target="_blank"><i class="fab fa-facebook-f"></i></a>
    <a href="https://twitter.com/DWPCNG" target="_blank"><i class="fab fa-twitter"></i></a>
    <a href="https://www.youtube.com/@dwpcng4789" target="_blank"><i class="fab fa-youtube"></i></a>
    <a href="https://www.instagram.com/dwpcng/" target="_blank"><i class="fab fa-instagram"></i></a>
  </div>
</template>

<script setup>
  defineProps({
    fixedBottom: {
      type: Boolean,
      default: false,
    },
  })
</script>

<style></style>
