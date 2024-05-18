<script setup>
import SideBar from "@/components/Admin/SideBar.vue";
import Header from "@/components/Admin/Header.vue";
import MenuLanding from "@/components/Admin/Landing/MenuLanding.vue";
import FeedbackLanding from "@/components/Admin/Landing/FeedbackLanding.vue";
import AboutUsLanding from "@/components/Admin/Landing/AboutUsLanding.vue";
</script>

<template>
  <div class="h-full w-full flex">
    <SideBar />
    <div class="w-full bg-[var(--color-merah)]">
      <Header />
      <div
        class="w-full h-[calc(100vh-100px)] bg-[var(--color-merah)] text-white pl-1 grid grid-rows-3 gap-3 pb-5 pr-2"
      >
        <div class="grid grid-cols-3 gap-5 h-full">
          <MenuLanding class="col-span-2" />
          <FeedbackLanding />
        </div>
        <div class="h-full row-span-2">
          <AboutUsLanding />
        </div>
      </div>
    </div>
  </div>
</template>
