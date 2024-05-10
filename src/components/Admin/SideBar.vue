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
      <div class="flex items-end h-max">
        <button>Logout</button>
      </div>
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
</style>
