<template>
  <div class="userShow" v-if="userInfo">
    <div class="userShow-header">
      <UserAvatar :avatarSrc="userAvatearImage" size="large" />
      <userName :user="userInfo" :size="'large'"></userName>
    </div>
    <UserShowMenu :user="userInfo"></UserShowMenu>
    <div class="userShow-body">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserAvatar from '@/components/Menu/User/components/user-avatar.vue';
import userName from './userName.vue';
import UserShowMenu from './show/userShowMenu.vue';
import { getStorage } from '@/utils/setStorage';
import { onMounted, ref, watch } from 'vue';
import { RouterView } from 'vue-router';
import { userStore } from '@/store/userStore';
const useUserStore = userStore();

let userAvatearImage = ref<string>('');

const props = defineProps<{
  userId: number;
}>();

let userInfo = ref<any>();

onMounted(() => {
  getUserInfo(props.userId);
});

function getUserInfo(id:number) {
  userInfo.value = getStorage('user');
  if(!userInfo.value.avatar){
    userAvatearImage.value = ``;
    return
  }
  userAvatearImage.value = `http://localhost:3000/users/${id}/avatar?size=large`;
}

watch(
  () => props.userId,
  async (value) => {
    await useUserStore.getUserById(value);
    getUserInfo(value);
  },
  {
    immediate: true,
  },
);
</script>

<style lang="sass" scoped>
.userShow
    &-header
        display: flex
        flex-direction: column
        align-items: center
        padding-bottom: 32rem
        border-bottom: 1rem solid var(--line-color)
        box-sizing: border-box
    .user-avater
        margin-bottom: 16rem
</style>
