<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormProps, FormInstance } from "element-plus";

const open = ref(false);

const labelPosition = ref<FormProps["labelPosition"]>("top");
const addMenuref = ref<FormInstance>();
const addMenu = reactive({
  nama: "",
  desc: "",
  harga: "",
  category: "",
});

const onSubmit = () => {
  console.log("submit");
};
const onReset = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<template>
  <button @click="open = true" class="rounded-md p-2 pr-8 pl-8 text-xl tombol">
    +Add
  </button>

  <Teleport to="body">
    <div v-if="open" class="modal">
      <div class="modal-inner bg-[var(--color-sand)] p-10 rounded-md w-[70vh]">
        <div class="text-4xl text-center cw font-bold pb-5">Tambahkan Menu</div>
        <el-form
          size="large"
          ref="addMenuref"
          :label-position="labelPosition"
          :model="addMenu"
          label-width="auto"
          style="max-width: 600px"
        >
          <el-form-item label="Nama" prop="nama">
            <el-input v-model="addMenu.nama" />
          </el-form-item>
          <el-form-item label="Kategori" prop="category">
            <el-select v-model="addMenu.category" placeholder="Pilih kategori">
              <el-option label="test1" value="t1" />
              <el-option label="test2" value="t2" />
              <el-option label="test3" value="t3" />
              <el-option label="test4" value="t4" />
              <el-option label="test5" value="t5" />
              <el-option label="test6" value="t6" />
              <el-option label="test7" value="t7" />
              <el-option label="test8" value="t8" />
            </el-select>
          </el-form-item>
          <el-form-item label="Harga" prop="harga">
            <el-input v-model="addMenu.harga" />
          </el-form-item>
          <el-form-item label="Deskripsi" prop="desc">
            <el-input v-model="addMenu.desc" :rows="3" type="textarea" />
          </el-form-item>
          <el-form-item>
            <el-button @click="onSubmit" type="primary">Submit</el-button>
            <el-button @click="onReset(addMenuref)">Reset</el-button>
          </el-form-item>
          <div class="flex justify-end">
            <el-button
              @click="(open = false), onReset(addMenuref)"
              type="danger"
              >Close</el-button
            >
          </div>
        </el-form>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.tombol {
  background-color: var(--color-hitam);
  font-family: "poppins", sans-serif;
  font-weight: 700;
  color: white;
  box-shadow: 0px 5px 4px black;
}

.tombol:hover {
  scale: 1.04;
}

.cw {
  color: var(--color-hitam);
  text-shadow: 0px 5px 7px rgba(0, 0, 0, 0.3);
}

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
