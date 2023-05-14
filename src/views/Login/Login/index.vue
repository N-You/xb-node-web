<template>
  <div>
    <login-components title="登录" explin="登录模块">
      <template #img>
        <img src="../../../assets/img/Login/undraw_login.png" alt="加载失败" />
      </template>
      <template #form>
        <el-form :model="formData" ref="formRef" :rules="rules">
          <el-form-item label="名称" prop="name">
            <el-input @keyup.prevent v-model="formData.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              @keyup.enter="Login(formRef)"
              type="password"
              v-model="formData.password"
            ></el-input>
          </el-form-item>
        </el-form>
      </template>
      <template #footer>
        <el-button type="primary" @click="Login(formRef)">登陆</el-button>
      </template>
    </login-components>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import loginComponents from '@/components/loginComponents/index.vue';
import { userStore } from '@/store/userStore';
import { FormRules, FormInstance } from 'element-plus/es/components/form';

const useUserStore = userStore();

const formData = reactive<{ name: string; password: string }>({
  name: '',
  password: '',
});

let formRef = ref<FormInstance>();

const validateName = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入用户名'));
  } else {
    if (formData.name !== '') {
      if (!formRef.value) return;
    }
    callback();
  }
};

const validatePassWord = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码'));
  } else {
    if (formData.password !== '') {
      if (!formRef.value) return;
    }
    callback();
  }
};

const rules = reactive<FormRules>({
  name: [{ validator: validateName, trigger: 'blur' }],
  password: [{ validator: validatePassWord, trigger: 'blur' }],
});

function Login(formEl: FormInstance | undefined) {
  if (!formEl) return; 
  formEl.validate(async (valid) => {
    if (valid) {
      await useUserStore.Login(formData);
    } else {
      console.log('登录失败');
      return false;
    }
  });
}
</script>

<style scoped lang="sass">
img
  width: 567rem
  height: 339rem
</style>
