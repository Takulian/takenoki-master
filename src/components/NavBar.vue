<script setup>
import Feedback from "@/components/Feedback.vue";
</script>

<template>
  <nav
    class="grid grid-cols-2 bg-[var(--color-persian)] drop-shadow-[0_10px_20px_rgba(0,0,0,1)] w-screen terbang"
  >
    <div>
      <nav class="p-4 flex justify-normal">
        <RouterLink to="/">
          <img src="../assets/images/take no ki.png" class="h-20" alt="" />
        </RouterLink>
        <ul class="flex ml-4 text-xl items-center">
          <RouterLink class="li" :to="{ name: 'home' }">Home</RouterLink>
          <RouterLink class="li" :to="{ name: 'menu' }">Menu</RouterLink>
          <RouterLink class="li" :to="{ name: 'news' }">News</RouterLink>
          <RouterLink class="li" :to="{ name: 'about' }">About Us</RouterLink>
        </ul>
      </nav>
    </div>
    <div>
      <div class="pr-10 flex justify-end items-center h-full">
        <Feedback />
      </div>
    </div>
  </nav>
</template>

<style scoped>
.li {
  margin-left: 20px;
  color: white;
  transition: all 0.4s;
}
.li:hover {
  color: var(--color-merah);
  transition: all 0.5s;
}
.active {
  color: var(--color-merah);
}

img {
  border-radius: 10px;
}

div {
  font-weight: 700;
}

.terbang {
  z-index: 97;
  position: fixed;
}
</style>
