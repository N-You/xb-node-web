<template>
  <div class="page-menu">
    <div class="logo">
      <img :src="themeLogo"/>
    </div>
    <div class="userInfo">
      <user-avatar :avatarSrc="userAvatearImage"></user-avatar>
    </div>    ··1·
    <main-menu></main-menu>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref, watch} from 'vue'
import MainMenu from '@/components/Menu/MainMenu.vue';
import { homeStore } from '@/store/homeStore';
import { userStore } from '@/store/userStore';
import lightLogo from '@/assets/img/logo3.jpg'
import darkLogo from '@/assets/img/logo3.png'
import userAvatar from '../../User/components/user-avatar.vue'
import { getStorage } from '@/utils/setStorage';

const themeLogo = ref<any>()

const useHomeStore = homeStore()
// const useUserStore = userStore()

watch(()=>useHomeStore.theme,(value:boolean)=>{
  value ? themeLogo.value = lightLogo : themeLogo.value = darkLogo
},{
  immediate:true
})

const userAvatearImage = ref<string>()

onMounted(async ()=>{
  const userInfo = getStorage('user')
  if(userInfo.avatar == null) return
  // const res = await useUserStore.getUserAvatarById(userInfo.id,'small')
  //   let imageData = res?.data as any
  //   let imageUrl = new Blob([imageData], { type: 'image/jpeg' });
  //   userAvatearImage.value = res && URL.createObjectURL(imageUrl as any).toString()
    userAvatearImage.value = `http://localhost:3000/users/${userInfo.id}/avatar?size=small`
})

</script>

<style scoped lang="sass">
.logo
  width: 100%
  margin-bottom:64rem
  img
    width: 64rem
    height: 64rem
    margin-left: 50% 
    transform: translateX(-50%)
</style>
