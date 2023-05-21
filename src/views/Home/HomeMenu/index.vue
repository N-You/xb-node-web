<template>
  <div class="page-menu">
    <div class="logo">
      <img :src="themeLogo" />
    </div>
    <el-popconfirm
      confirm-button-text="确认"
      cancel-button-text="取消"
      icon-color="#626AEF"
      :title="uid ? '确认退出登录吗?' : '要去登录账号吗'"
      @confirm="confirmEvent"
    >
      <template #reference>
        <div class="userInfo">
          <user-avatar :avatarSrc="userAvatearImage"></user-avatar>
        </div>
      </template>
    </el-popconfirm>
    <main-menu></main-menu>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import MainMenu from '@/components/Menu/MainMenu.vue';
import { homeStore } from '@/store/homeStore';
import lightLogo from '@/assets/img/logo3.jpg';
import darkLogo from '@/assets/img/logo3.png';
import userAvatar from '@/components/Menu/User/components/user-avatar.vue';
import { getStorage } from '@/utils/setStorage';
import router from '@/router';

const themeLogo = ref<any>();

const useHomeStore = homeStore();
// const useUserStore = userStore()

const uid = ref<Number>()

watch(
  () => useHomeStore.theme,
  (value: boolean) => {
    value ? (themeLogo.value = lightLogo) : (themeLogo.value = darkLogo);
  },
  {
    immediate: true,
  },
);

const userAvatearImage = ref<string>();

onMounted(async () => {
  let uid = getStorage('uid');
  if (!uid) return;
  // userAvatearImage.value = await useUserStore.getUserAvatarById(userInfo.id,'small')
  userAvatearImage.value = `http://localhost:3000/users/${uid}/avatar?size=small`;
});

function confirmEvent() {
  if (uid) {
    localStorage.clear()
  } 
  router.push({ name: 'Login' });
}
</script>

<style scoped lang="sass">
.logo
  width: 100%
  margin-bottom:20rem
  img
    width: 80rem
    height: 80rem
    margin-left: 50%
    transform: translateX(-50%)
.userInfo
  margin: 20rem 0
</style>
