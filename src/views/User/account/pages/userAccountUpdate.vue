<template>
  <div class="userAccountUpdate">
    <div class="form">
      <div class="header">设置头像</div>
      <div class="field" v-if="avatarPreViewImage">
    <img class="image" :src="avatarPreViewImage"/>
    </div>
    <div style="display: flex;align-items: center;margin: 20rem 0;">
        <FileField
        text="选择文件"
        size="large"
        name="avatar"
        fileType="image/*"
        @change="onChangeAvatarFileField"
      ></FileField>
      <button size="large" @click="handleSubmit">提交</button>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FileField from '@/components/File/fileField.vue';
import { ref } from 'vue';
import {userAcountStore} from '@/store/userAcountStore'
import {notificatonStore} from '@/store/notificationStore'

const useNotificationStore = notificatonStore()

const useUserAccountStore = userAcountStore()

let avatarPreViewImage = ref<string>('');
let avatarFile = ref<any>()

async function handleSubmit() {
  try{
    await useUserAccountStore.ctreateAvatar(avatarFile.value)
    useNotificationStore.addMessage({
    content:'设置头像成功!',
  })
  }catch(err:any){
    useNotificationStore.addMessage({
    content:'设置头像失败!',
  })
  }
}

function onChangeAvatarFileField(target: any) {
  if (target.files) {
    avatarFile.value = target.files[0]
    createAvatarPreviewImage(target.files[0]);
  }
}

function createAvatarPreviewImage(file: any) {
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.onload = (event: any) => {
    avatarPreViewImage.value = event.target?.result;

  };
}
</script>

<style scoped lang="sass">
.header
    font-size: 30rem
    margin: 10rem 0
.image
    width: 128rem
    height: 128rem
</style>
