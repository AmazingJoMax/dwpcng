<template>
  <div
    id="live_page"
    class="z-10 relative h-screen flex flex-col justify-center items-center"
  >
    <div
      class="live_page_main absolute z-20 flex flex-col live_content space-y-4 items-center md:mt-32"
    >
      <!-- <h1 class="3text-white text-2xl font-bold text-white">MEDIA CENTER</h1> -->
      <!-- <div class="av_switch flex font-semibold border-solid border-2 border-white text-white justify-between w-fit">
                <div class="watch py-1 px-4 selected">WATCH</div>
                <div class="listen py-1 px-4">LISTEN</div>
            </div> -->
      <!-- https://www.youtube.com/channel/UC6rleCfhi3wbhHgWkUTZLYQ -->
      <div class="live_iframe max-w-md md:max-w-3xl">
        <iframe
          src="https://youtube.com/embed/live_stream?channel=UC6rleCfhi3wbhHgWkUTZLYQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <div
          id="live_cta"
          class="flex flex-col space-y-4 items-center text-center md:mx-8"
        >
          <p class="text-white">
            If you have been blessed by the message and would like to surrender
            to Christ, please fill out the New Birth form below. We would be in
            touch with you to help you build a more intimate relationship with
            God.
          </p>
          <RouterLink
            to="/nbform"
            class="border-solid border-2 border-white rounded-md text-white px-4 py-2 w-fit hover:bg-white hover:text-black"
          >
            NEW BIRTH FORM
          </RouterLink>
        </div>
      </div>

      <div
        id="download_cta"
        class="flex flex-col gap-2 text-center text-white items-center"
      >
        <p>Visit our youtube chanel for more edifying videos</p>

        <a
          href="https://www.youtube.com/@dwpcng4789"
          class="px-4 py-2 rounded-md border-2 border-white border-solid w-fit hover:bg-white hover:text-black"
          >GO TO YouTube</a
        >
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    setup() {
      return {}
    },
  }
</script>

<style>
  #live_page {
    position: relative;
    /* height: 40vh; */
    width: 100%;
    background: url(../assets/images/live_bg_1_mono.jpg);
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
  }

  #download_cta,
  #live_cta {
    font-size: 0.8rem;
  }
</style>
