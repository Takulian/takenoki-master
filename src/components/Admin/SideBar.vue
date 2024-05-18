<script lang="ts" setup>
import { onMounted } from "vue";
import useAuth from "@/composable/auth";

const { logout, checkDashboard } = useAuth();

const onLogout = () => {
  logout();
};

onMounted(() => {
  checkDashboard();
});
</script>

<template>
  <div class="bg-[var(--color-merah)] h-screen w-[350px]">
    <div
      class="bg-[var(--color-sand)] m-4 h-[calc(100vh-2rem)] rounded-md overflow-y-auto"
    >
      <div class="p-5">
        <img src="../../assets/images/logo-nobg.png" class="h-20" />
      </div>
      <nav class="p-6 tulisan">
        <div class="py-2">
          <RouterLink
            class="li py-2 pl-3 flex rounded-md"
            :to="{ name: 'dashboard' }"
          >
            <i class="fa-solid fa-desktop pl-2 pr-2 flex items-center"></i>
            Dashboard</RouterLink
          >
        </div>
        <div class="py-2">
          <RouterLink
            class="li py-2 pl-3 flex rounded-md"
            :to="{ name: 'menuDash' }"
          >
            <i class="fa-solid fa-shop pl-2 pr-2 flex items-center"></i>
            Menu</RouterLink
          >
        </div>
        <div class="py-2">
          <RouterLink
            class="li py-2 pl-3 flex rounded-md"
            :to="{ name: 'newsDash' }"
          >
            <i class="fa-solid fa-newspaper pr-2 pl-2 flex items-center"></i>
            News</RouterLink
          >
        </div>
        <div class="py-2">
          <RouterLink
            class="li py-2 pl-3 flex rounded-md"
            :to="{ name: 'feedDash' }"
          >
            <i class="fa-solid fa-comments pr-2 flex items-center pl-2"></i>
            Feedback</RouterLink
          >
        </div>
      </nav>
      <nav class="p-6 tulisan">
        Account Center
        <button
          @click="onLogout"
          class="tombol px-3 py-2 mt-2 flex rounded-md bg-[var(--color-hitam)] text-white items-center w-full"
        >
          <i class="fa-solid fa-right-from-bracket px-2"></i>
          Logout
        </button>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.active {
  background-color: var(--color-persian);
  font-weight: 600;
  color: white;
  transition: all 0.4s;
}
.li:hover {
  background-color: rgba(193, 140, 93, 0.7);
  transition: all 0.4s;
}
.li {
  transition: all 0.4s;
}
.tulisan {
  color: var(--color-hitam);
}
.tombol {
  transition: all 0.2s;
}
.tombol:hover {
  scale: 1.02;
  transition: all 0.2s;
}
</style>
