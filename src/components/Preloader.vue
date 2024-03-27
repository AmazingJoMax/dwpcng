<template>
    <div class="loader">
        <img src="../assets/images/dc_logo.png" alt="">
    </div>
</template>

<script setup>

</script>

<style>
.loader {
    position: fixed;
    background: #fff;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999999999;
}

.loader img {
    width: 100px;
    animation: loader 1.2s infinite;
}
</style>