<script setup>
import isiBerita from "@/data/berita.json";
const list_berita = isiBerita;
</script>

<template>
  <div
    class="pl-[10vh] tulisan text-5xl pt-10 pb-5 bg-[var(--color-sand)] flex items-center"
    style="color: var(--color-hitam)"
  >
    <div class="w-[50%]">What's Happening</div>
    <div class="w-full rounded-lg bg-[var(--color-merah)] h-3 ml-3 mr-3"></div>
  </div>
  <div v-for="item in list_berita" :key="item" class="bg-[var(--color-sand)]">
    <div class="pl-[10vh] flex pt-8 pb-8">
      <img
        src="@/assets/images/background/About.jpeg"
        alt=""
        class="rounded-lg w-[40vh]"
        style="max-height: 40vh"
      />
      <div class="p-7">
        <p class="text-5xl tulisan" style="color: var(--color-merah)">
          {{ item.judul }}
        </p>
        <p class="text-xl w-[100vh] pt-4 text-justify">{{ item.isiberita }}</p>
      </div>
    </div>
    <div class="rounded-lg bg-[var(--color-merah)] h-3 ml-10 mr-10"></div>
  </div>
</template>

<style scoped>
.tulisan {
  font-style: "poppins", sans-serif;
  font-weight: 700;
}
</style>
