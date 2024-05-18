<script lang="ts" setup>
import UpdateNews from "./UpdateNews.vue";
import { onMounted } from "vue";
import useNews from "@/composable/news";
import dayjs from "dayjs";
import Swal from "sweetalert2";

const { newss, getNews, delNews } = useNews();

const handleDelete = (_id) => {
  Swal.fire({
    allowEnterKey: false,
    title: "Apakah kamu yakin?",
    text: "Data yang telah dihapus tidak bisa dikembalikan",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Ya, hapus",
    background: "var(--color-persian)",
    color: "#fff",
    iconColor: "#FF5050",
    confirmButtonColor: "#FF5050",
  }).then((hasil) => {
    if (hasil.isConfirmed) {
      delNews(_id);
    }
  });
};

onMounted(() => {
  getNews();
});
</script>

<template>
  <div class="overflow-y-auto h-full">
    <div class="grid grid-cols-2">
      <div
        v-for="item in newss"
        :key="item._id"
        class="bg-[var(--color-sand)] m-2 rounded-md"
      >
        <div class="flex">
          <img
            :src="item.image"
            alt=""
            class="rounded-lg min-h-40 max-h-40 object-cover min-w-40 max-w-40 mt-3 mx-3"
          />
          <div class="mt-3 w-[calc(100%-10rem)]">
            <div class="font-bold text-xl text-black">{{ item.title }}</div>
            <div class="text-sm">
              {{ dayjs(item.date).format("DD/MM/YYYY") }}
            </div>
            <div class="pt-2">{{ item.content }}</div>
          </div>
        </div>
        <div class="flex justify-end mb-2 mr-2">
          <UpdateNews :data="item" />
          <el-button type="danger" @click="handleDelete(item._id)"
            >Delete</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
