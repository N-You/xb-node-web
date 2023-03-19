<template>
  <div>首页</div>
  <button class="button" @click="onClickPushMessage">提示消息</button>
</template>

<script lang="ts" setup>
import {notificatonStore} from '@/store/notificationStore'

const useNotificationStore = notificatonStore()

function onClickPushMessage(){
  useNotificationStore.addMessage({
    content:'空山新雨后，天气晚来秋',
    iconClass:'icon-ai250'
  })
}
</script>