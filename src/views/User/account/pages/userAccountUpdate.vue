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

let avatarPreViewImage = ref<string>('');

function handleSubmit() {
  console.log('123');
}

function onChangeAvatarFileField(target: any) {
  if (target.files) {
    createAvatarPreviewImage(target.files[0]);
  }
}

function createAvatarPreviewImage(file: any) {
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  console.log("🚀 ~ file: userAccountUpdate.vue:42 ~ createAvatarPreviewImage ~ avatarPreViewImage.value:", avatarPreViewImage.value)
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
