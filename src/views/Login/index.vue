<template>
  <div>
    <login-components title="登录" explin="登录模块">
      <template #img>
        <img src="../../assets/img/Login/undraw_login.png" alt="加载失败">
      </template>
      <template #form>
        <el-form ref="ruleFormRef" :rules="rules" :model="formData">
        <el-form-item label="名称">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="formData.password"></el-input>
        </el-form-item>
      </el-form>
      </template>
      <template #footer>
        <el-button type="primary" @click="Login">登陆</el-button>
      </template>
    </login-components>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import loginComponents from '@/components/loginComponents/index.vue'
import {userStore} from '@/store/userStore'
import { FormInstance } from 'element-plus/es/components/form';

const ruleFormRef = ref<FormInstance>()

const useUserStore = userStore()

const formData = reactive<{name:string,password:string}>({name:'',password:''})

async function Login(){
  useUserStore.Login(formData)
}
</script>

<style scoped lang="sass">
img
  width: 567rem
  height: 339rem
</style>
