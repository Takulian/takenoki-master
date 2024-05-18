<script lang="ts" setup>
import HitungMenu from "./HitungMenu.vue";
</script>

<template>
  <div class="bg-[var(--color-sand)] rounded-lg h-full">
    <div class="font-bold text-black text-xl pt-2 pl-2">Menu</div>
    <div class="grid grid-cols-3 p-3 gap-2 h-[calc(100%-36px)]">
      <div>
        <HitungMenu type="AlaCarte" />
      </div>
      <div>
        <HitungMenu type="Apetizer" />
      </div>
      <div>
        <HitungMenu type="Donburi" />
      </div>
      <div>
        <HitungMenu type="Gohan" />
      </div>
      <div>
        <HitungMenu type="Minuman" />
      </div>
      <div>
        <HitungMenu type="Ramen" />
      </div>
      <div>
        <HitungMenu type="Special Agemono" />
      </div>
      <div>
        <HitungMenu type="Special Donburi" />
      </div>
      <div>
        <HitungMenu type="Special Ramen" />
      </div>
      <div>
        <HitungMenu type="Special Udon" />
      </div>
      <div>
        <HitungMenu type="Topping" />
      </div>
      <div>
        <HitungMenu type="Udon" />
      </div>
    </div>
  </div>
</template>
