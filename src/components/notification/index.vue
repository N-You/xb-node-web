<template>
  <div class="notification">
    <transition-group name="transition-notification">
      <notification-message
      v-for="item of messages"
      :key="item.id"
      :message="item"
    ></notification-message>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue';
import { notificatonStore } from '@/store/notificationStore';
import notificationMessage from './notificationMessage/index.vue';

const useNotificationStore = notificatonStore();
const messages = ref();

watch(
  () => useNotificationStore.messages,
  (value: any) => {
  messages.value = value
  },
  { immediate: true },
);
</script>

<style scoped lang="sass">
.notification
  position: fixed
  bottom: 64rem
  right:64rem
.transition-notification-enter-active
  transform: translateX(330rem)
  transition: 0.3s
.transition-notification-enter-to
  transform: translateX(0)
.transition-notification-leave-active
  transition: 0.3s
.transition-notification-leave-to
  transform: translateX(330rem)
</style>
