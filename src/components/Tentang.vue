<script setup>
import { onMounted } from "vue";
import useAbout from "@/composable/about";

const { abouts, getAbout } = useAbout();

onMounted(() => {
  getAbout();
});
</script>

<template>
  <div class="jancok">
    <div class="flex justify-center tulisan text-8xl pt-10">
      {{ abouts.aboutUs }}
    </div>
    <div class="p-12 pr-24 flex">
      <img
        :src="abouts.aus_image"
        alt=""
        class="min-h-fit max-w-72 object-cover rounded-lg mx-4"
      />
      <p class="text-xl text-justify">{{ abouts.aus_content }}</p>
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
