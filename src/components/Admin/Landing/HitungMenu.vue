<script lang="ts" setup>
import useMenu from "@/composable/menu";
import { onMounted } from "vue";

const category = defineProps(["type"]);
const { menus, getMenuc } = useMenu();

onMounted(() => {
  getMenuc(category.type);
});
</script>

<template>
  <div
    class="flex items-center h-full bg-[var(--color-persian)] rounded-full justify-between"
  >
    <div class="font-bold px-2 text-sm">
      {{ category.type }}
    </div>
    <div
      class="bg-[var(--color-hitam)] px-3 rounded-full font-bold h-full flex items-center"
    >
      {{ menus.length }}
    </div>
  </div>
</template>
