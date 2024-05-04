<script setup>
import Tentang from "@/data/tentang.json";
const isi_tentang = Tentang;
</script>

<template>
  <div class="jancok">
    <div class="flex justify-center tulisan text-8xl pt-10">OUR HISTORY</div>
    <div v-for="item in isi_tentang" :key="item" class="p-12 pl-24 pr-24">
      <p class="text-xl text-justify">{{ item.tentang }}</p>
    </div>
  </div>
</template>

<style scoped>
.tulisan {
  font-style: "poppins", sans-serif;
  font-weight: 700;
  color: var(--color-hitam);
}

.jancok {
  background: rgb(236, 200, 175);
  background: linear-gradient(
      0deg,
      rgba(236, 200, 175, 0.91) 0%,
      rgba(236, 200, 175, 0.91) 100%
    ),
    url("../assets/images/logo-nobg.png");
  background-position: center;
  background-repeat: no-repeat;
}
</style>
