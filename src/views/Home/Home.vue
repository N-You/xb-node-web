<template>
  <div :class="['page', themeValue]">
    <home-menu></home-menu>
    <home-header></home-header>
    <home-main></home-main>
    <AppNotification></AppNotification>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import HomeHeader from './HomeHeader/index.vue';
import HomeMenu from './HomeMenu/index.vue';
import HomeMain from './HomeMain/index.vue';
import AppNotification from '@/components/notification/index.vue';
import { homeStore } from '@/store/homeStore';
import { userStore } from '@/store/userStore';

const useUserStore = userStore();
const useHomeStore = homeStore();

const themeValue = ref<string>('dark');

watch(
  () => useHomeStore.theme,
  (value: boolean) => {
    value ? themeValue.value = 'light' : themeValue.value = 'dark';
  },
  { immediate: true },
);

const postList = ref<Array<any>>([]);

onMounted(async () => {
  let res = await useUserStore.getPosts();
  postList.value = res as any;
});
</script>

<style lang="sass" scoped>
@import './styles/Home.sass'
@import '@/styles/theme.sass'
</style>
