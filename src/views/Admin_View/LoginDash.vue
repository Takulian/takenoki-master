<script lang="ts" setup>
import { ref, reactive } from "vue";
import type { FormProps } from "element-plus";

const labelPosition = ref<FormProps["labelPosition"]>("top");
const loginForm = reactive({
  user: "",
  password: "",
});
</script>

<template>
  <div
    class="h-screen w-screen bg-[var(--color-merah)] items-center flex justify-center"
  >
    <div>
      <div class="flex justify-center">
        <img src="@/assets/images/logo-nobg.png" alt="" class="w-[27vh]" />
      </div>
      <div
        class="w-[50vh] bg-[var(--color-sand)] rounded-xl tulisan pt-4 text-2xl"
      >
        <div class="flex justify-center pt-3">Admin Login</div>
        <div class="p-6" id="label">
          <el-form
            size="large"
            ref="loginFormRef"
            :model="loginForm"
            :label-position="labelPosition"
          >
            <el-form-item label="Username">
              <el-input v-model="loginForm.user" />
            </el-form-item>
            <el-form-item label="Password">
              <el-input v-model="loginForm.password" />
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tulisan {
  font-family: "poppins", sans-serif;
  font-weight: 700;
  color: var(--color-hitam);
}
</style>
