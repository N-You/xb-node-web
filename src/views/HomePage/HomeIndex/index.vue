<template>
  <div style="margin-bottom: 50rem;">欢迎来到个人博客网站</div>
  <PostIndex></PostIndex>
</template>

<script lang="ts" setup>
import {notificatonStore} from '@/store/notificationStore'
import PostIndex from '@/views/Post/postIndex.vue';

const useNotificationStore = notificatonStore()

function onClickPushMessage(){
  useNotificationStore.addMessage({
    content:'空山新雨后，天气晚来秋',
    iconClass:'icon-ai250'
  })
}
</script>