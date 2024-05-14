<script lang="ts" setup>
import { Ref, ref } from "vue";

const open = ref(false);
const item = defineProps(["gambar"]);
</script>

<template>
  <el-button size="default" @click="open = true"> Lihat Gambar </el-button>
  <Teleport to="body">
    <div v-if="open" class="modal">
      <div class="bg-[var(--color-sand)] p-3 rounded-md">
        <div class="flex justify-between pb-3">
          <div class="flex items-center text-[--color-hitam]">
            <span class="font-bold">{{ item.gambar.nama }}</span
            >&nbsp;Preview
          </div>
          <el-button @click="open = false" type="danger">X</el-button>
        </div>
        <div class="flex justify-center">
          <img
            :src="item.gambar.gambar"
            alt=""
            class="rounded-lg"
            width="320px"
          />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
