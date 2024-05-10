<script setup>
import SideBar from "@/components/Admin/SideBar.vue";
import Header from "@/components/Admin/Header.vue";
import TableMenu from "@/components/Admin/TableMenu.vue";
import TambahMenu from "@/components/Admin/TambahMenu.vue";
import coba from "@/components/Admin/coba.vue";
</script>

<template>
  <div class="h-full w-full flex">
    <SideBar />
    <div class="w-full bg-[var(--color-merah)]">
      <Header />
      <div class="pb-8">
        <TambahMenu />
      </div>
      <div
        class="w-full h-[calc(100vh-180px)] bg-[var(--color-merah)] text-white pl-1"
      >
        <div class="flex justify-center pb-6 h-full">
          <TableMenu />
        </div>
      </div>
    </div>
  </div>
</template>
