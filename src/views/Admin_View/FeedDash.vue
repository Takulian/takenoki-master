<script setup>
import SideBar from "@/components/Admin/SideBar.vue";
import Header from "@/components/Admin/Header.vue";
import TableFeedback from "@/components/Admin/TableFeedback.vue";
</script>

<template>
  <div class="h-full w-full flex">
    <SideBar />
    <div class="w-full bg-[var(--color-merah)]">
      <Header />
      <div class="w-full h-[calc(100vh-100px)] bg-[var(--color-merah)]">
        <TableFeedback />
      </div>
    </div>
  </div>
</template>
