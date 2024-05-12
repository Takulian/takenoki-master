<script lang="ts" setup>
import { computed, ref, onMounted } from "vue";
import useMenu from "@/composable/menu";
import Menu from "../Menu.vue";

const { menus, getMenu } = useMenu();

const open = ref(false);

const list_makanan: Menu[] = menus.value;

interface Menu {
  nama_menu: String;
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
      data.nama_menu.toLowerCase().includes(search.value.toLowerCase())
  )
);

const handleEdit = (index: number, row: Menu) => {
  console.log(index, row);
};
const handleDelete = (index: number, row: Menu) => {
  console.log(index, row);
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
    <el-table-column prop="nama_menu" label="Nama" width="200" />
    <el-table-column prop="category" label="Kategori" width="100" />
    <el-table-column prop="harga" label="Harga" width="100" />
    <el-table-column prop="short_desc" label="Deskripsi" width="250" />
    <el-table-column label="Gambar">
      <template #default="scope">
        <img :src="scope.row.gambar" />
        <!-- <el-button size="default" @click="open = true">
          Lihat Gambar
        </el-button>
        <Teleport to="body">
          <div v-if="open" class="modal">
            <div class="bg-[var(--color-sand)] p-3 rounded-md w-[70vh]">
              <div class="flex justify-between pb-3">
                <div>{{ scope.row.nama_menu }} Preview</div>
                <el-button @click="open = false" type="danger">X</el-button>
              </div>
              <div class="flex justify-center">
                <img :src="scope.row.gambar" alt="" />
              </div>
            </div>
          </div>
        </Teleport> -->
      </template>
    </el-table-column>
    <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="large" placeholder="Type to search" />
      </template>
      <template #default="scope">
        <el-button size="default" @click="handleEdit(scope.$index, scope.row)">
          Edit
        </el-button>
        <el-button
          size="default"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
        >
          Delete
        </el-button>
      </template>
    </el-table-column>
  </el-table>
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
