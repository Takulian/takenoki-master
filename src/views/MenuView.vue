<script setup>
import NavBar from "@/components/NavBar.vue";
import Menu from "@/components/Menu.vue";
import Ramen from "@/components/DisplayMenu/Ramen.vue";
import Udon from "@/components/DisplayMenu/Udon.vue";
import Donburi from "@/components/DisplayMenu/Donburi.vue";
import AlaCarte from "@/components/DisplayMenu/AlaCarte.vue";
import SpecialRamen from "@/components/DisplayMenu/SpecialRamen.vue";
import SpecialUdon from "@/components/DisplayMenu/SpecialUdon.vue";
import SpecialAgemono from "@/components/DisplayMenu/SpecialAgemono.vue";
import Apetizer from "@/components/DisplayMenu/Apetizer.vue";
import Topping from "@/components/DisplayMenu/Topping.vue";
import Gohan from "@/components/DisplayMenu/Gohan.vue";
import Minuman from "@/components/DisplayMenu/Minuman.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <main>
    <NavBar />
    <Menu />
    <Ramen />
    <Udon />
    <Donburi />
    <AlaCarte />
    <SpecialRamen />
    <SpecialUdon />
    <SpecialAgemono />
    <Apetizer />
    <Topping />
    <Gohan />
    <Minuman />
    <Footer />
  </main>
</template>
