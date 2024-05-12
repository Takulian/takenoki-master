<script lang="ts" setup>
import { ref, reactive } from "vue";
import useAuth from "@/composable/auth.js";
import type { FormProps, FormInstance } from "element-plus";

const { login: handleLogin } = useAuth();
const labelPosition = ref<FormProps["labelPosition"]>("top");
const loginForm = reactive({
  username: "",
  password: "",
});
const loginFormRef = ref<FormInstance>();
const onSubmit = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      handleLogin(loginForm);
    } else {
      console.log("error submit!");
      return false;
    }
  });
};
</script>

<template>
  <div
    class="h-screen w-screen bg-[var(--color-merah)] items-center flex justify-center overflow-hidden"
  >
    <div>
      <div class="flex justify-center pb-5">
        <img src="@/assets/images/logo-nobg.png" alt="" class="w-[27vh]" />
      </div>
      <div class="w-[370px] bg-[var(--color-sand)] rounded-xl pt-4 shadow">
        <div class="flex justify-center pt-3 text-2xl tulisan">Admin Login</div>
        <div class="p-6" id="label">
          <el-form
            id="login"
            size="large"
            ref="loginFormRef"
            :model="loginForm"
            :label-position="labelPosition"
            @keyup.enter="onSubmit(loginFormRef)"
          >
            <el-form-item label="Username">
              <el-input v-model="loginForm.username" />
            </el-form-item>
            <el-form-item label="Password">
              <el-input
                v-model="loginForm.password"
                type="password"
                show-password
              />
            </el-form-item>
            <div class="flex justify-center">
              <el-button @click="onSubmit(loginFormRef)">Login</el-button>
            </div>
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

.shadow {
  box-shadow: 8px 8px 7px rgba(0, 0, 0, 0.2);
}
</style>
