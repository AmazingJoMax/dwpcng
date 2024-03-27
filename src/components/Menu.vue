<template>
  <div
    id="menu"
    :class="{ hide_menu: show === false }"
    class="absolute flex flex-col z-20 bg-white h-fit font-bold justify-center space-y-6 px-2 py-6 md:hidden"
  >
    <RouterLink :to="{ name: 'home' }">HOME</RouterLink>
    <RouterLink :to="{ name: 'about' }">ABOUT US</RouterLink>
    <RouterLink :to="{ name: 'live' }">LIVE</RouterLink>
    <!-- <RouterLink :to="{ name: 'home' }">HOME</RouterLink> -->
    <!-- <RouterLink :to="{ name: 'downloads' }">DOWNLOADS</RouterLink> -->
    <RouterLink :to="{ name: 'contact' }">CONTACT US</RouterLink>
    <RouterLink :to="{ name: 'give' }">GIVE</RouterLink>
  </div>
</template>

<script setup>
  defineProps({
    show: {
      type: Boolean,
      default: false,
    },
  })
</script>

<style></style>
