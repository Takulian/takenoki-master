<script setup>
import Makanan from "@/data/dmenu.json";

const list_makanan = Makanan;
</script>

<template>
  <div class="judul tulisan bg text-5xl pt-10 pb-5">Ramen</div>
  <div class="bg flex flex-wrap justify-center">
    <span v-for="item in list_makanan" :key="item" class="my-2">
      <el-card
        shadow="never"
        class="el-card h-full mx-2 mt-2 inline-block"
        v-if="item.category === 'Ramen'"
      >
        <div class="flex justify-center">
          <img
            class="rounded-md"
            src="../../assets/images/Menu/Ramen/Curry Ramen.jpg"
            alt="Gatau"
          />
        </div>
        <p class="text-center tulisan pt-4">{{ item.nama_menu }}</p>
        <p class="text-center tulisan-kecil">Harga: {{ item.harga }}</p>
        <template #footer>
          <p class="text-center tulisan">Deskripsi</p>
          <p class="tulisan-kecil text-base whitespace-normal text-center">
            {{ item.short_desc }}
          </p>
        </template>
      </el-card>
    </span>
  </div>
  <div class="bg pb-10"></div>
</template>

<style scoped>
.el-card {
  width: 17vw;
  min-height: 30vw;
  background-color: var(--color-persian);
}

.tulisan-kecil {
  font-style: "poppins", sans-serif;
  font-weight: 300;
  color: white;
  font-size: 14px;
}

.tulisan {
  font-style: "poppins", sans-serif;
  font-weight: 700;
  color: white;
}

.judul {
  padding-left: 10vh;
  color: var(--color-hitam);
}

::-webkit-scrollbar {
  height: 5px !important;
}

::-webkit-scrollbar-thumb {
  background-image: var(--color-hitam);
  border-radius: 10px;
}

.bg {
  background-color: var(--color-sand);
}
</style>
