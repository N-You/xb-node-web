<template>
  <div class="userAccountChange">
    <div class="form">
      <div style="font-size: 20rem">修改名字</div>
      <el-form :model="formData" label-width="120rem" ref="formRef" status-icon :rules="rules">
        <el-form-item label="名称" prop="name">
          <el-input
            v-model="formData.name"
            placeholder="请输入新的名称"
          ></el-input>
        </el-form-item>
        <el-form-item v-if="formData.name"  label="验证用户密码" prop="passWord">
          <el-input
            v-model="formData.passWord"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <button @click="onClickSubmit(formRef)">提交</button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { FormInstance, FormRules } from 'element-plus/es/components/form';
import { reactive, ref } from 'vue';
import { notificatonStore } from '@/store/notificationStore';
import { userAcountStore } from '@/store/userAcountStore';

const useUserAcountStore = userAcountStore()
const useNotificationStore = notificatonStore();

const formRef = ref<FormInstance>();


let formData = reactive<{
  name: string;
  passWord: string;
}>({
  name: '',
  passWord: '',
});

const validateName = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入名称'));
  } else {
    if (formData.name !== '') {
      if (!formRef.value) return;
    }
    callback();
  }
};
const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码'));
  } else {
    callback();
  }
};

const rules = reactive<FormRules>({
  name: [{ validator: validateName, trigger: 'blur' }],
  passWord: [{ validator: validatePass, trigger: 'blur' }],
});

function onClickSubmit(formEl: FormInstance | undefined) {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      console.log(formData.name,formData.passWord);
      useUserAcountStore.updateUserAccount({
        userId:parseInt(JSON.parse(localStorage.getItem('uid') as string),10),
        body:{
          update:{
            name:formData.name
          },
          validate:{
            password:formData.passWord
          }
        }
      }).then(res=>{
        useNotificationStore.addMessage({
        content: '修改用户名成功!',
      }); 
      }).catch(error=>{
        useNotificationStore.addMessage({
        content: error.data.message,
      }); 
      })
      formData.name = ''
      formData.passWord = ''
      location.reload()
    } else {
      useNotificationStore.addMessage({
        content: '提交失败!',
      });
      return false;
    }
  });
}
</script>

<style lang="sass" scoped></style>
