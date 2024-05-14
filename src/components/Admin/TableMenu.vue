<script lang="ts" setup>
import { computed, ref, onMounted } from "vue";
import useMenu from "@/composable/menu";
import Menu from "../Menu.vue";
import GambarMenu from "./GambarMenu.vue";
import UpdateMenu from "./UpdateMenu.vue";
import Swal from "sweetalert2";

const { menus, getMenu, delMenu } = useMenu();

const open = ref(false);

const list_makanan: Menu[] = menus.value;

interface Menu {
  uuid: String;
  nama: String;
  category: String;
  harga: String;
  short_desc: String;
  gambar: String;
}

const search = ref("");
const filter_list_makanan = computed(() =>
  menus.value.filter(
    (data) =>
      !search.value ||
      data.nama.toLowerCase().includes(search.value.toLowerCase())
  )
);

const handleDelete = (row: Menu) => {
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
      delMenu(row.uuid);
    }
  });
};

onMounted(() => {
  getMenu();
});
</script>

<template>
  <el-table
    :data="filter_list_makanan"
    style="width: 95%; border-radius: 10px; height: 100%"
    height="100%"
  >
    <el-table-column prop="nama" label="Nama" width="200" />
    <el-table-column prop="category" label="Kategori" width="100" />
    <el-table-column prop="harga" label="Harga" width="100" />
    <el-table-column prop="short_desc" label="Deskripsi" width="250" />
    <el-table-column label="Gambar">
      <template #default="scope">
        <GambarMenu :gambar="scope.row" />
      </template>
    </el-table-column>
    <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="large" placeholder="Type to search" />
      </template>
      <template #default="scope">
        <UpdateMenu :data="scope.row" />
        <el-button
          size="default"
          type="danger"
          @click="handleDelete(scope.row)"
        >
          Delete
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
