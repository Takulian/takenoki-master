<template>
  <div class="bg-[var(--color-merah)] h-screen w-[350px]">
    <div class="bg-[var(--color-sand)] m-4 h-[calc(100vh-2rem)] rounded-md">
      <div class="p-5">
        <img src="../../assets/images/logo-nobg.png" class="h-20" />
      </div>
      <nav>
        <ul>
          <RouterLink class="li" :to="{ name: 'menuDash' }">MENU</RouterLink>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.active {
  background-color: aqua;
}
</style>
