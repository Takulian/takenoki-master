<script lang="ts" setup>
import { reactive, ref } from "vue";
import useMenu from "@/composable/menu";
import Swal from "sweetalert2";
import type { FormInstance } from "element-plus";

const open = ref(false);
const menu = defineProps(["data"]);
const { updMenu } = useMenu();

const updateMenuref = ref<FormInstance>();
const updateMenu = reactive({
  nama: menu.data.nama,
  short_desc: menu.data.short_desc,
  harga: menu.data.harga,
  category: menu.data.category,
  gambar: menu.data.gambar,
});

const onReset = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

const convert = (file) => {
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file.target.files[0]);
    reader.onload = () => (updateMenu.gambar = reader.result);
  } else return;
};

const resetImage = () => {
  updateMenu.gambar = menu.data.gambar;
};

const checkAngka = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error("Tolong masukkan harga"));
  } else if (!Number.isInteger(value)) {
    callback(new Error("Harga hanya berisikan angka"));
  } else {
    callback();
  }
};

const onSubmit = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      if (updateMenu.gambar === "") {
        Swal.fire({
          toast: true,
          icon: "error",
          title: "Gambar belum diisi",
          color: "#fff",
          iconColor: "#FF5050",
          timer: 3000,
          showConfirmButton: false,
          position: "top-end",
          background: "var(--color-persian)",
        });
      } else {
        updMenu(menu.data.uuid, updateMenu);
      }
    } else {
      console.log("error submit!");
      return false;
    }
  });
};
</script>

<template>
  <el-button size="default" @click="open = true"> Edit </el-button>

  <Teleport to="body">
    <div v-if="open" class="modal">
      <div class="bg-[var(--color-sand)] p-10 rounded-md w-[50%]">
        <div class="text-4xl text-center cw font-bold pb-5">Edit Menu</div>
        <el-form
          size="large"
          ref="updateMenuref"
          label-position="top"
          :model="updateMenu"
          label-width="auto"
          require-asterisk-position="right"
        >
          <div class="grid grid-cols-2 gap-6">
            <div class="flex flex-col">
              <div class="text-[var(--color-hitam)]">Foto</div>
              <div class="m-3 mb-5 rounded-md h-full">
                <label
                  for="file"
                  class="flex justify-center h-full cursor-pointer items-center"
                >
                  <div v-if="updateMenu.gambar">
                    <img
                      :src="updateMenu.gambar"
                      alt=""
                      class="rounded-md object-cover max-h-56"
                    />
                  </div>
                  <div
                    v-else
                    class="bg-[var(--color-persian)] h-full w-full flex justify-center items-center rounded-lg"
                  >
                    Upload Gambar
                  </div>
                  <input
                    id="file"
                    type="file"
                    accept="image/*"
                    @change="convert"
                    style="display: none"
                  />
                </label>
              </div>
            </div>
            <div>
              <el-form-item
                label="Nama"
                prop="nama"
                :rules="[
                  {
                    required: true,
                    message: 'Tolong masukkan nama menu',
                    trigger: 'blur',
                  },
                ]"
              >
                <el-input v-model="updateMenu.nama" placeholder="Nama menu" />
              </el-form-item>
              <el-form-item
                label="Kategori"
                prop="category"
                :rules="[
                  {
                    required: true,
                    message: 'Tolong pilih kategori',
                    trigger: 'change',
                  },
                ]"
              >
                <el-select
                  v-model="updateMenu.category"
                  placeholder="Pilih kategori"
                >
                  <el-option label="AlaCarte" value="AlaCarte" />
                  <el-option label="Apetizer" value="Apetizer" />
                  <el-option label="Donburi" value="Donburi" />
                  <el-option label="Gohan" value="Gohan" />
                  <el-option label="Minuman" value="Minuman" />
                  <el-option label="Ramen" value="Ramen" />
                  <el-option label="Special Agemono" value="Special Agemono" />
                  <el-option label="Special Donburi" value="Special Donburi" />
                  <el-option label="Special Ramen" value="Special Ramen" />
                  <el-option label="Special Udon" value="Special Udon" />
                  <el-option label="Topping" value="Topping" />
                  <el-option label="Udon" value="Udon" />
                </el-select>
              </el-form-item>
              <el-form-item
                label="Harga"
                prop="harga"
                :rules="[
                  {
                    required: true,
                    validator: checkAngka,
                    trigger: 'blur',
                  },
                ]"
              >
                <el-input
                  v-model.number="updateMenu.harga"
                  placeholder="Harga menu"
                />
              </el-form-item>
            </div>
          </div>
          <el-form-item
            label="Deskripsi"
            prop="short_desc"
            :rules="[
              {
                required: true,
                message: 'Tolong masukan deskripsi menu',
                trigger: 'blur',
              },
            ]"
          >
            <el-input
              v-model="updateMenu.short_desc"
              :rows="3"
              type="textarea"
              placeholder="Deskripsi tentang menu"
            />
          </el-form-item>
          <el-form-item>
            <el-button @click="onSubmit(updateMenuref)" type="primary"
              >Submit</el-button
            >
            <el-button @click="onReset(updateMenuref), resetImage()"
              >Reset</el-button
            >
          </el-form-item>
          <div class="flex justify-end">
            <el-button
              @click="(open = false), onReset(updateMenuref), resetImage()"
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
