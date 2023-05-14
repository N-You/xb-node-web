<template>
  <div class="userShow" v-if="userInfo">
    <div class="userShow-header">
      <UserAvatar :avatarSrc="userAvatearImage" size="large" />
      <userName :user="userInfo" :size="'large'"></userName>
    </div>
    <UserShowMenu></UserShowMenu>
    <div class="userShow-body">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserAvatar from '@/components/Menu/User/components/user-avatar.vue';
import userName from './userName.vue';
import UserShowMenu from './pages/userShowMenu.vue'
import { getStorage } from '@/utils/setStorage';
import { onMounted, ref } from 'vue';
import { RouterView } from 'vue-router';

let userAvatearImage = ref<string>('');

const props = defineProps<{
  userId: number;
}>();

let userInfo = ref<any>();

onMounted(async () => {
  userInfo.value = getStorage('user');
  if (userInfo.value.avatar == null) {
    userAvatearImage.value = '';
  } else {
    userAvatearImage.value = `http://localhost:3000/users/${props.userId}/avatar?size=large`;
  }
});
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
