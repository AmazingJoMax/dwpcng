<template>
  <footer class="flex flex-col relative w-full text-white p-8 space-y-6">
    <div class="font-semibold">DOMINION WORD AND PRAYER CHAPEL</div>
    <SocialLinks :fixedBottom="false" />
  </footer>
</template>

<script setup>
  import SocialLinks from "./SocialLinks.vue"
</script>

<style lang="scss" scoped></style>
