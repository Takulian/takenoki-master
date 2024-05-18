<script setup>
import useNews from "@/composable/news";
import { onMounted } from "vue";
import dayjs from "dayjs";

const { newss, getNews } = useNews();

onMounted(() => {
  getNews();
  console.log(newss.length);
});
</script>

<template>
  <div
    class="pl-14 tulisan text-5xl pt-10 pb-5 bg-[var(--color-sand)] flex items-center"
    style="color: var(--color-hitam)"
  >
    <div class="w-[50%]">What's Happening</div>
    <div class="w-full rounded-lg bg-[var(--color-merah)] h-3 ml-3 mr-3"></div>
  </div>
  <div class="reverse">
    <div
      v-for="(item, index) in newss"
      :key="item._id"
      class="bg-[var(--color-sand)]"
    >
      <div class="pl-14 flex pt-8 pb-8">
        <img
          class="rounded-md min-h-52 max-h-52 object-cover min-w-52 max-w-52"
          :src="item.image"
        />
        <div class="p-7 w-full">
          <p class="text-5xl tulisan" style="color: var(--color-merah)">
            {{ item.title }}
          </p>
          <p>{{ dayjs(item.date).format("DD/MM/YYYY") }}</p>
          <p class="text-xl pt-4 text-justify">{{ item.content }}</p>
        </div>
      </div>
      <div v-if="index != 0">
        <div class="rounded-lg bg-[var(--color-merah)] h-3 ml-10 mr-10"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tulisan {
  font-style: "poppins", sans-serif;
  font-weight: 700;
}
.reverse {
  display: flex;
  flex-direction: column-reverse;
}
</style>
