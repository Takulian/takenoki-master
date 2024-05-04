<script lang="ts" setup>
import { ref, reactive } from "vue";
import type { FormProps } from "element-plus";

const labelPosition = ref<FormProps["labelPosition"]>("top");
const loginForm = reactive({
  user: "",
  password: "",
});
const onSubmit = () => {
  console.log("submit");
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
      <div class="w-[370px] bg-[var(--color-sand)] rounded-xl pt-4">
        <div class="flex justify-center pt-3 text-2xl tulisan">Admin Login</div>
        <div class="p-6" id="label">
          <el-form
            id="login"
            size="large"
            ref="loginFormRef"
            :model="loginForm"
            :label-position="labelPosition"
          >
            <el-form-item label="Username">
              <el-input v-model="loginForm.user" />
            </el-form-item>
            <el-form-item label="Password">
              <el-input
                v-model="loginForm.password"
                type="password"
                show-password
              />
            </el-form-item>
            <div class="flex justify-center">
              <el-button @click="onSubmit">Login</el-button>
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
</style>
