<script setup>
import { onMounted } from "vue";
import useMenu from "@/composable/menu";

const { menus, getMenuc } = useMenu();
const menu = defineProps(["type"]);

onMounted(() => {
  getMenuc(menu.type);
});
</script>

<template>
  <div
    class="pl-14 tulisan text-5xl pt-10 pb-5 bg-[var(--color-sand)] flex items-center text-nowrap"
    style="color: var(--color-hitam)"
  >
    <div>{{ menu.type }}</div>
    <div class="w-full rounded-lg bg-[var(--color-merah)] h-3 ml-10 mr-3"></div>
  </div>
  <div class="bg-[var(--color-sand)] flex flex-wrap justify-center">
    <el-card
      shadow="never"
      class="el-card h-full mx-2 mt-4 inline-block"
      v-for="item in menus"
      :key="item.id"
    >
      <div class="flex justify-center">
        <img
          class="rounded-md min-h-52 max-h-52 object-cover min-w-52 max-w-52"
          :src="item.gambar"
          alt="Gambar Menu"
        />
      </div>
      <p class="text-center tulisan pt-4">{{ item.nama }}</p>
      <p class="text-center tulisan-kecil">Harga: Rp {{ item.harga }}</p>
      <template #footer>
        <p class="tulisan-kecil text-base whitespace-normal text-center">
          {{ item.short_desc }}
        </p>
      </template>
    </el-card>
  </div>
  <div class="bg-[var(--color-sand)] pb-10"></div>
</template>

<style scoped>
.el-card {
  width: 17rem;
  min-height: 30rem;
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
</style>
