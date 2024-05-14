<script lang="ts" setup>
import { ref } from "vue";
import NavBar from "@/components/NavBar.vue";
import Menu from "@/components/Menu.vue";
import CardMenu from "@/components/CardMenu.vue";
import Footer from "@/components/Footer.vue";

const category = ref<
  | "AlaCarte"
  | "Apetizer"
  | "Donburi"
  | "Gohan"
  | "Minuman"
  | "Ramen"
  | "Special Agemono"
  | "Special Donburi"
  | "Special Ramen"
  | "Special Udon"
  | "Topping"
  | "Udon"
>("Ramen");
</script>

<template>
  <main>
    <NavBar />
    <Menu />
    <div class="bg-[var(--color-sand)] pt-10">
      <div
        class="flex justify-center font-bold text-[var(--color-hitam)] text-4xl"
      >
        Click to see menu
      </div>
      <div class="flex justify-center mt-6">
        <el-radio-group
          id="menuRadio"
          fill="var(--color-persian)"
          v-model="category"
          aria-label="category control"
          size="large"
        >
          <el-radio-button value="AlaCarte">AlaCarte</el-radio-button>
          <el-radio-button value="Apetizer">Apetizer</el-radio-button>
          <el-radio-button value="Donburi">Donburi</el-radio-button>
          <el-radio-button value="Gohan">Gohan</el-radio-button>
          <el-radio-button value="Minuman">Minuman</el-radio-button>
          <el-radio-button value="Ramen">Ramen</el-radio-button>
          <el-radio-button value="Special Agemono"
            >Special Agemono</el-radio-button
          >
          <el-radio-button value="Special Donburi"
            >Special Donburi</el-radio-button
          >
          <el-radio-button value="Special Ramen">Special Ramen</el-radio-button>
          <el-radio-button value="Special Udon">Special Udon</el-radio-button>
          <el-radio-button value="Topping">Topping</el-radio-button>
          <el-radio-button value="Udon">Udon</el-radio-button>
        </el-radio-group>
      </div>
    </div>
    <div v-if="category === 'Ramen'">
      <CardMenu type="Ramen" />
    </div>
    <div v-else-if="category === 'Udon'">
      <CardMenu type="Udon" />
    </div>
    <div v-else-if="category === 'AlaCarte'">
      <CardMenu type="AlaCarte" />
    </div>
    <div v-else-if="category === 'Apetizer'">
      <CardMenu type="Apetizer" />
    </div>
    <div v-else-if="category === 'Donburi'">
      <CardMenu type="Donburi" />
    </div>
    <div v-else-if="category === 'Gohan'">
      <CardMenu type="Gohan" />
    </div>
    <div v-else-if="category === 'Minuman'">
      <CardMenu type="Minuman" />
    </div>
    <div v-else-if="category === 'Special Agemono'">
      <CardMenu type="Special Agemono" />
    </div>
    <div v-else-if="category === 'Special Donburi'">
      <CardMenu type="Special Donburi" />
    </div>
    <div v-else-if="category === 'Special Ramen'">
      <CardMenu type="Special Ramen" />
    </div>
    <div v-else-if="category === 'Special Udon'">
      <CardMenu type="Special Udon" />
    </div>
    <div v-else-if="category === 'Topping'">
      <CardMenu type="Topping" />
    </div>
    <Footer />
  </main>
</template>
