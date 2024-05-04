<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView></RouterView>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

:root {
  --color-persian: #c18c5d;
  --color-sand: #ecc8af;
  --color-hitam: #343d42;
  --color-merah: #952210;
}
::-webkit-scrollbar {
  width: 5px !important;
}

::-webkit-scrollbar-thumb {
  background-color: var(--color-hitam);
  border-radius: 10px;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "poppins", sans-serif;
  overflow-x: hidden;
}
</style>
