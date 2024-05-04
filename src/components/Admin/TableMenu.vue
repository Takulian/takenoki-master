<script setup>
import Makanan from "@/data/dmenu.json";

const list_makanan = Makanan;
</script>

<template>
  <el-table
    :data="list_makanan"
    style="width: 95%; border-radius: 10px"
    height="590"
  >
    <el-table-column prop="id" label="Nomor" width="100" />
    <el-table-column prop="nama_menu" label="Nama" width="250" />
    <el-table-column prop="category" label="Kategori" width="100" />
    <el-table-column prop="harga" label="Harga" width="100" />
    <el-table-column prop="short_desc" label="Deskripsi" />
    <el-table-column prop="gambar" label="Gambar" />
  </el-table>
</template>
