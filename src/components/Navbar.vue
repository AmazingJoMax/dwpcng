<template>
  <div>
    <nav
      id="nav_mobile"
      class="fixed top-0 md:py-0 py-2 md:pt-0 flex justify-between w-full z-20"
      :class="{ 'bg-solid': isScrolled }"
    >
      <div class="left flex w-3/4 space-x-2 md:w-1/4">
        <div
          class="hidden md:block px-2 py-3 bg-white rounded-br-md w-fit h-fit"
        >
          <img src="../assets/images/dc_logo.png" alt="" width="50" />
        </div>
        <span class="name text-left self-center text-white font-bold">
          DOMINION WORD <br />
          AND PRAYER CHAPEL
        </span>
      </div>
      <div class="right flex items-center justify-center md:hidden">
        <label
          @click="$emit('toggle')"
          for="toggle"
          id="menu-btn"
          :class="{ 'bars-rot': menuChange === true }"
          class="bars"
        >
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </label>
      </div>
      <div
        class="links hidden md:flex space-x-6 text-white w-3/4 justify-end items-center text-center ml-4"
      >
        <div>
          <RouterLink :to="{ name: 'home' }">HOME</RouterLink>
          <span class="nav-underline"></span>
        </div>
        <div>
          <RouterLink :to="{ name: 'about' }">ABOUT US</RouterLink>
          <span class="nav-underline"></span>
        </div>
        <div>
          <RouterLink :to="{ name: 'watch' }">LIVE</RouterLink>
          <span class="nav-underline"></span>
        </div>
        <!-- <div>
          <RouterLink :to="{ name: 'downloads' }">DOWNLOADS</RouterLink>
          <span class="nav-underline"></span>
        </div> -->
        <div>
          <RouterLink :to="{ name: 'contact' }">CONTACT US</RouterLink>
          <span class="nav-underline"></span>
        </div>
        <div>
          <RouterLink :to="{ name: 'give' }">GIVE</RouterLink>
          <span class="nav-underline"></span>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
  import { ref, onMounted, onUnmounted, watch } from "vue"
  import { useRoute } from "vue-router"
  const emit = defineEmits(["toggle", "update:show"])
  defineProps({
    menuChange: {
      type: Boolean,
    },
  })

  const route = useRoute()

  watch(route, () => {
    emit("update:show", false)
  })

  const isScrolled = ref(false)

  onMounted(() => {
    window.addEventListener("scroll", handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll)
  })

  function handleScroll() {
    isScrolled.value = window.scrollY > 0
  }
</script>

<style>
  nav {
    transition: background-color 0.3s;
    font-family: openSansCondensedBold;
    z-index: 99999;
  }

  .nav-underline {
    display: block;
    width: 0%;
    height: 2px;
    background-color: var(--secondary);
    transition: width 0.3s;
  }

  nav a:hover + .nav-underline {
    width: 100%;
  }
  .bg-solid {
    background-color: var(--primary); /* Change this to the color you want */
    box-shadow: 0px 0px 8px 2px #000000;
  }

  .bg-solid a {
    color: #fff;
  }
</style>
