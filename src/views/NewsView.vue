<script setup>
import NavBar from "@/components/NavBar.vue";
import News from "@/components/News.vue";
import Berita from "@/components/Berita.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <main>
    <NavBar />
    <News />
    <Berita />
    <Footer class="mundur" />
  </main>
</template>

<style scoped>
.mundur {
  margin: -1rem;
}
</style>
