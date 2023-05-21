<template>
  <div class="userAccountUpdate" style="margin-top: 80rem;">
    <div class="form">
      <div class="header">设置头像</div>
      <div class="field" v-if="avatarFile">
    <img class="image" :src="useUserStore.avatarPreviewImage"/>
    </div>
    <div style="display: flex;align-items: center;margin: 20rem 0;column-gap: 20rem;">
        <FileField
        :text="avatarFiledText"
        size="large"
        name="avatar"
        fileType="image/*"
        @change="onChangeAvatarFileField"
      ></FileField>
      <button size="large" @click="handleSubmit">提交</button>
      <button v-if="useUserStore.avatarPreviewImage" size="large" @click="handleCancel">取消</button>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FileField from '@/components/File/fileField.vue';
import { computed, ref } from 'vue';
import {userAcountStore} from '@/store/userAcountStore'
import {notificatonStore} from '@/store/notificationStore'
import {userStore} from '@/store/userStore'

const useNotificationStore = notificatonStore()

const useUserAccountStore = userAcountStore()

const useUserStore = userStore()

let avatarFile = ref<any>()

let avatarFiledText = computed(()=>{
  return avatarFile.value ? '重新选择' : '选择头像'
})

async function handleSubmit() {
  if(!avatarFile.value){
    useNotificationStore.addMessage({
    content:'请选择上传图片!',
  })
  return 
  }
  try{
    await useUserAccountStore.ctreateAvatar(avatarFile.value)
    useNotificationStore.addMessage({
    content:'设置头像成功!',
  })
  avatarFile.value = null
  location.reload()
  }catch(err:any){
    useNotificationStore.addMessage({
    content:'设置头像失败!',
  })
  }
}

function handleCancel(){
  useUserAccountStore.setAvatarPreviewImage('')
  avatarFile.value = null
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
   useUserAccountStore.setAvatarPreviewImage(event.target?.result)

  };
}
</script>

<style scoped lang="sass">
.header
    font-size: 30rem
.image
    width: 128rem
    height: 128rem
</style>
