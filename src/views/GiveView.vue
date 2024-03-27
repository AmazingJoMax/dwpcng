<template>
  <div>
    <div
      id="transfer"
      class="absolute flex justify-center items-center h-screen z-30 w-full mx-auto p-8"
      v-show="showModal"
      @click.self="toggleModal()"
    >
      <div
        class="flex flex-col space-y-4 bg-white rounded-lg shadow-lg p-6 text-center"
      >
        <div class="self-start mb-4" @click="toggleModal()">
          <i class="fa fa-close fa-2x"></i>
        </div>
        <div class="flex flex-col">
          <span class="font-bold">ACCOUNT NAME</span>
          <span class="text-xl">Dominion Word And Prayer Chapel</span>
        </div>
        <div class="flex flex-col">
          <span class="font-bold">ACCOUNT NUMBER</span>
          <span class="text-xl">1015761979</span>
        </div>
        <div class="flex flex-col">
          <span class="font-bold">BANK NAME</span>
          <span class="text-xl">ZENITH BANK</span>
        </div>
      </div>
    </div>
    <div id="give_content" class="flex items-center justify-center h-screen">
      <div
        class="container absolute z-20 flex flex-col items-center justify-center h-3/4"
      >
        <!-- <div class="flex flex-col items-center mb-8">
          <div class="p-2 bg-white rounded-md w-fit">
            <img src="../assets/images/dc_logo.png" alt="" width="50" />
          </div>
          <span class="text-white text-center"
            >DOMINION WORD AND PRAYER CHAPEL</span
          >
        </div> -->
        <div class="flex flex-col space-y-4 w-3/4 max-w-xl md:justify-center">
          <h2 class="text-2xl text-secondary font-semibold text-center">
            DOMINION ONLINE GIVING PLATFORM
          </h2>
          <!-- <div
            for="card_toggle"
            
            class="border-solid border-2 border-white rounded-lg py-2 w-full text-center text-xl text-white font-semibold hover:bg-white hover:text-black"
          >
            CARD PAYMENT
          </div> -->
          <!-- <div class="border-solid border-2 border-white rounded-lg py-2 w-full text-center text-xl text-white font-semibold hover:bg-white hover:text-black">
                    USSD
                </div> -->
          <div
            class="flex flex-col gap-6 border-solid border-2 border-secondary rounded-lg p-4 w-full text-center text-xl text-white font-semibold"
          >
            <!-- <span class="card_title text-2xl">BANK TRANSFER</span> -->
            <div class="flex flex-col">
              <span class="font-bold text-secondary">ACCOUNT NAME</span>
              <span class="text-xl">Dominion Word And Prayer Chapel</span>
            </div>
            <div class="flex flex-col">
              <span class="font-bold text-secondary">ACCOUNT NUMBER</span>
              <span class="text-xl flex gap-2 items-center justify-center">
                <span>1015761979</span>
                <i
                  id="copy_acc"
                  class="fa-regular fa-copy"
                  @click="handleCopy(1015761979)"
                ></i>
              </span>
              <!-- <span class="text-xl flex gap-2 items-center justify-center">
                <span>1234567895</span>
                <i
                  id="copy_acc"
                  class="fa-regular fa-copy"
                  @click="handleCopy(1234567895)"
                ></i>
              </span> -->
            </div>
            <div class="flex flex-col">
              <span class="font-bold text-secondary">BANK NAME</span>
              <span class="text-xl">ZENITH BANK</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue"

  const showModal = ref(false)
  function toggleModal() {
    showModal.value = !showModal.value
  }
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    document.getElementById("copy_acc").classList.remove("fa-copy")
    document.getElementById("copy_acc").classList.add("fa-check")
    setTimeout(() => {
      document.getElementById("copy_acc").classList.remove("fa-check")
      document.getElementById("copy_acc").classList.add("fa-copy")
    }, 2500)
  }
</script>

<style>
  #give_content {
    height: 100vh;
    width: 100%;
    background-image: url(../assets/images/give_page.jpg);
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
  }

  #give_content::after {
    position: absolute;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    content: "";
  }

  #card_payment,
  #transfer {
    background: rgba(0, 0, 0, 0.7);
  }
</style>
