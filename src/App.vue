<template>
  <div class="w-screen h-screen overflow-x-hidden overflow-y-auto bg-gray-950">
    <NavBar/>
    <router-view/>
    <footerBar/>
  </div>
</template>

<script setup>
  import NavBar from '@/components/NavBar.vue'
  import FooterBar from '@/components/FooterBar.vue'
</script>
<style>

</style>
