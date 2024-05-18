<script setup>
import SideBar from "@/components/Admin/SideBar.vue";
import Header from "@/components/Admin/Header.vue";
import TableNews from "@/components/Admin/TableNews.vue";
import TambahNews from "@/components/Admin/TambahNews.vue";
</script>

<template>
  <div class="h-full w-full flex">
    <SideBar />
    <div class="w-full bg-[var(--color-merah)]">
      <Header />
      <div class="pb-8">
        <TambahNews />
      </div>
      <div
        class="w-full h-[calc(100vh-180px)] bg-[var(--color-merah)] text-white pl-1"
      >
        <TableNews />
      </div>
    </div>
  </div>
</template>
