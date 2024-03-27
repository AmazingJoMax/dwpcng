<template>
  <div class="home h-screen">
    <div
      id="carousel"
      class="carousel carousel_1 relative flex h-full overflow-hidden"
    >
      <transition name="slide-fade">
        <div v-if="slides.length > 0" :key="currentSlide" class="h-screen flex">
          <div
            v-for="(slide, index) in slides"
            :key="index"
            class="slide w-screen flex items-center justify-center align-baseline"
            v-show="currentSlide === index"
          >
            <img :src="slide" alt="" class="rounded-xl md:w-1/3" />
          </div>
        </div>
      </transition>
      <div
        id="btns"
        class="hidden absolute md:flex gap-16 w-full md:justify-between z-10 self-center"
      >
        <div
          id="prev"
          class="bg-red-600 hover:bg-red-500 px-2"
          @click="prevSlide"
        >
          <i class="fa fa-angle-left text-white"></i>
        </div>
        <div
          id="next"
          class="bg-red-600 hover:bg-red-500 px-2"
          @click="nextSlide"
        >
          <i class="fa fa-angle-right text-white"></i>
        </div>
      </div>
    </div>
    <SocialLinks :fixedBottom="true" />
  </div>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from "vue"
  import SocialLinks from "../components/SocialLinks.vue"

  const currentSlide = ref(0)
  const slides = ref([
    require("../assets/images/monthly.jpg"),
    require("../assets/images/specials.jpg"),
    require("../assets/images/uyf_monthly.jpg"),
    require("../assets/images/homepage_3.jpg"),
    // Add more slides here...
  ])

  const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % slides.value.length
  }

  const prevSlide = () => {
    currentSlide.value =
      (currentSlide.value + slides.value.length - 1) % slides.value.length
  }

  let intervalId

  onMounted(() => {
    intervalId = setInterval(nextSlide, 4000) // Change slides every 3 seconds
  })

  onUnmounted(() => {
    clearInterval(intervalId) // Clear the interval when the component is unmounted
  })
</script>

<style scoped>
  .carousel {
    position: relative;
    height: 100vh;
    width: 100%;
    overflow-x: hidden;
    background-image: url(../assets/images/yearly_mobile.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .carousel::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    );
    z-index: 1;
  }

  .slide {
    padding: 0 2rem;
    position: relative;
    z-index: 2;
  }

  .slider img {
    /* width: 300px; */
    z-index: 99999;
  }

  #btns {
    font-size: 24px;
  }

  .carousel {
    transition: all 0.5s ease-in-out;
  }

  /* Add these lines for the slide-in animation */
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: opacity 0.5s, transform 0.5s;
  }

  .slide-fade-enter,
  .slide-fade-leave-to {
    opacity: 0;
    transform: translateX(-50%);
  }

  .slide-fade-enter-from {
    opacity: 0;
    transform: translateX(50%);
  }

  .slide-fade-leave,
  .slide-fade-enter-to {
    opacity: 1;
    transform: translateX(0);
  }

  @media screen and (min-width: 800px) {
  .carousel {
    background-image: url(../assets/images/yearly.jpg);
  }
}
</style>
