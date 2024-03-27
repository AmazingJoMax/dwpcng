<template>
  <Preloader :class="{ vanish: !isLoading }" />
  <Navbar @toggle="handleToggle" :menu-change="cross" />
  <Menu :show="show" />
  <router-view />
</template>

<script setup>
  import { useRoute } from "vue-router"
  import { ref, watch, onMounted, onUnmounted } from "vue"
  import Menu from "./components/Menu.vue"
  import Navbar from "./components/Navbar.vue"
  import Preloader from "./components/Preloader.vue"

  const show = ref(false)
  const cross = ref(false)
  const isLoading = ref(true)

  const handleToggle = () => {
    show.value = !show.value
    cross.value = !cross.value
  }

  const route = useRoute()
  watch(route, () => {
    show.value = false
    cross.value = false
  })

  onMounted(() => {
    window.onload = () => {
      isLoading.value = false
    }
  })

  onUnmounted(() => {
    window.onload = null
  })
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /* color: #2c3e50; */
  }

  nav {
    padding-right: 30px;
  }

  nav a {
    font-weight: bold;
    /* color: #2c3e50; */
  }

  nav a.router-link-exact-active {
    color: var(--secondary);
  }
</style>
