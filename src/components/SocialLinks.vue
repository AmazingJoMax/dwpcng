<template>
  <div
    class="social my-4 flex text-white text-2xl self-center justify-center items-center space-x-6 w-full z-20 bottom-10"
    :class="{ fixed : fixedBottom === true }"
  >
    <a href=""><i class="fab fa-facebook-f"></i></a>
    <a href=""><i class="fab fa-twitter"></i></a>
    <a href=""><i class="fab fa-youtube"></i></a>
    <a href=""><i class="fab fa-instagram"></i></a>
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
