<script setup>
import SideBar from "@/components/Admin/SideBar.vue";
import Header from "@/components/Admin/Header.vue";
import TableMenu from "@/components/Admin/TableMenu.vue";
import TambahMenu from "@/components/Admin/TambahMenu.vue";
</script>

<template>
  <div class="h-full w-full flex">
    <SideBar />
    <div class="w-full bg-[var(--color-merah)]">
      <Header />
      <div
        class="w-full h-[calc(100vh-130px)] bg-[var(--color-merah)] overflow-y-auto text-white pl-1"
      >
        <TambahMenu />
        <div class="flex justify-center pt-6">
          <TableMenu />
        </div>
      </div>
    </div>
  </div>
</template>
