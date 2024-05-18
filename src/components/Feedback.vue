<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormProps, FormInstance } from "element-plus";
import useFeedback from "@/composable/feedback";

const open = ref(false);

const { postFeedback } = useFeedback();
const labelPosition = ref<FormProps["labelPosition"]>("top");
const addFeedbackref = ref<FormInstance>();
const addFeedback = reactive({
  email: "",
  message: "",
  date: new Date(),
});

const onSubmit = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      postFeedback(addFeedback);
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const onReset = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<template>
  <button @click="open = true" class="rounded-full p-5 text-xl tombol">
    <i class="fa-solid fa-headphones-simple mr-1"></i>
    Need Help?
  </button>

  <Teleport to="body">
    <div v-if="open" class="modal">
      <div class="modal-inner bg-[var(--color-sand)] p-10 rounded-md w-[100vh]">
        <div
          class="flex justify-center cw text-7xl font-bold"
          style="text-shadow: 0px 5px 7px rgb(0, 0, 0, 0.4)"
        >
          Contact Us
        </div>
        <div class="text-center cw pt-4 text-lg pb-4">
          Have feedback about yout recent experience? Something else? Send us a
          message and we'll get back to you as soon as possible. Looking forward
          to hearing from you.
        </div>
        <el-form
          id="feedback"
          size="large"
          ref="addFeedbackref"
          :label-position="labelPosition"
          :model="addFeedback"
          :require-asterisk-position="'right'"
          label-width="auto"
          style="max-width: auto"
        >
          <el-form-item
            label="Email"
            prop="email"
            :rules="[
              {
                required: true,
                message: 'Masukkan email address',
                trigger: 'blur',
              },
              {
                type: 'email',
                message: 'Tolong masukan email address yang benar',
                trigger: ['blur'],
              },
            ]"
          >
            <el-input v-model="addFeedback.email" />
          </el-form-item>
          <el-form-item
            label="Pesan"
            prop="message"
            :rules="[
              {
                required: true,
                message: 'Masukkan pesan yang ingin anda sampaikan',
                trigger: 'blur',
              },
            ]"
          >
            <el-input
              v-model="addFeedback.message"
              type="textarea"
              :autosize="{ minRows: 4, maxRows: 4 }"
            />
          </el-form-item>
          <el-form-item>
            <el-button @click="onSubmit(addFeedbackref)" type="primary"
              >Submit</el-button
            >
            <el-button @click="onReset(addFeedbackref)">Reset</el-button>
          </el-form-item>
          <div class="flex justify-end">
            <el-button
              @click="(open = false), onReset(addFeedbackref)"
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
  scale: 1.1;
  transition: all 0.2s;
}

.cw {
  color: var(--color-hitam);
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
