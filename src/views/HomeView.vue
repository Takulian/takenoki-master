<script setup>
import NavBar from "@/components/NavBar.vue";
import Home from "@/components/Home.vue";
import Galeri from "@/components/Galeri.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <NavBar class="udin" />
  <Home />
  <Galeri />
  <Footer />
</template>

<style scoped>
.udin {
  z-index: 97;
  position: fixed;
}
</style>
