<script lang="ts" setup>
import { reactive, ref } from "vue";
import useAbout from "@/composable/about";
import Swal from "sweetalert2";
import type { FormInstance } from "element-plus";

const open = ref(false);
const { updAbout } = useAbout();
const about = defineProps(["data"]);

const addAboutref = ref<FormInstance>();
const addAbout = reactive({
  aboutUs: about.data.aboutUs,
  aus_content: about.data.aus_content,
  aus_image: about.data.aus_image,
});

const onReset = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

const convert = (file) => {
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file.target.files[0]);
    reader.onload = () => (addAbout.aus_image = reader.result);
  } else return;
};

const resetImage = () => {
  addAbout.aus_image = about.data.aus_image;
  addAbout.aboutUs = about.data.aboutUs;
  addAbout.aus_content = about.data.aus_content;
};

const onSubmit = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      if (addAbout.aus_image === "") {
        Swal.fire({
          toast: true,
          icon: "error",
          title: "Image belum diisi",
          color: "#fff",
          iconColor: "#FF5050",
          timer: 3000,
          showConfirmButton: false,
          position: "top-end",
          background: "var(--color-persian)",
        });
      } else {
        updAbout(about.data.id_aus, addAbout);
      }
    } else {
      console.log("error submit!");
      return false;
    }
  });
};
</script>

<template>
  <el-button class="w-full" size="default" @click="(open = true), resetImage()">
    Edit
  </el-button>

  <Teleport to="body">
    <div v-if="open" class="modal">
      <div class="bg-[var(--color-sand)] p-10 rounded-md w-[50%]">
        <div class="text-4xl text-center cw font-bold pb-5">Edit about</div>
        <el-form
          size="large"
          ref="addAboutref"
          label-position="top"
          :model="addAbout"
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
                  <div v-if="addAbout.aus_image">
                    <img
                      :src="addAbout.aus_image"
                      alt=""
                      class="rounded-md object-cover max-h-56"
                    />
                  </div>
                  <div
                    v-else
                    class="bg-[var(--color-persian)] h-full w-full flex justify-center items-center rounded-lg"
                  >
                    Upload image
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
                label="aboutUs"
                prop="aboutUs"
                :rules="[
                  {
                    required: true,
                    message: 'Tolong masukkan judul',
                    trigger: 'blur',
                  },
                ]"
              >
                <el-input
                  v-model="addAbout.aboutUs"
                  placeholder="About Us Title"
                />
              </el-form-item>
              <el-form-item
                label="Deskripsi"
                prop="aus_content"
                :rules="[
                  {
                    required: true,
                    message: 'Tolong masukan deskripsi menu',
                    trigger: 'blur',
                  },
                ]"
              >
                <el-input
                  v-model="addAbout.aus_content"
                  :rows="3"
                  type="textarea"
                  placeholder="Deskripsi tentang menu"
                  :autosize="{ minRows: 6, maxRows: 6 }"
                />
              </el-form-item>
            </div>
          </div>
          <el-form-item>
            <el-button @click="onSubmit(addAboutref)" type="primary"
              >Submit</el-button
            >
            <el-button @click="onReset(addAboutref), resetImage()"
              >Reset</el-button
            >
          </el-form-item>
          <div class="flex justify-end">
            <el-button
              @click="(open = false), onReset(addAboutref), resetImage()"
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
  transition: all 0.2s;
}

.tombol:hover {
  scale: 1.04;
  transition: all 0.2s;
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
