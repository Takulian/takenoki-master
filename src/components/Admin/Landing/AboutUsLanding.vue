<script lang="ts" setup>
import { onMounted } from "vue";
import useAbout from "@/composable/about";
import UpdateAbout from "../UpdateAbout.vue";

const { abouts, getAbout } = useAbout();

onMounted(() => {
  getAbout();
});
</script>

<template>
  <div class="h-full bg-[var(--color-sand)] rounded-lg">
    <div class="flex h-full">
      <div class="p-2">
        <img
          :src="abouts.aus_image"
          alt=""
          class="rounded-lg min-h-full max-h-full object-cover"
        />
      </div>

      <div class="w-full h-full pr-2 pl-5">
        <div class="font-bold text-4xl text-[var(--color-hitam)]">
          {{ abouts.aboutUs }}
        </div>
        <div class="text-justify overflow-y-auto pr-2 h-[calc(100%-88px)]">
          {{ abouts.aus_content }}
        </div>
        <div class="py-2">
          <UpdateAbout :data="abouts" />
        </div>
      </div>
    </div>
  </div>
</template>
