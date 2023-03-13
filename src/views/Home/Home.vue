<template>
  <div class="page">
    <home-menu></home-menu>
    <home-header></home-header>
    <home-main></home-main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import HomeHeader from './HomeHeader/index.vue'
import HomeMenu from './HomeMenu/index.vue'
import HomeMain from './HomeMain/index.vue'

import {userStore} from '@/store/userStore'

const useUserStore = userStore()

const postList = ref<Array<any>>([])

onMounted(async ()=>{
 let res = await useUserStore.getPosts()
 postList.value = res as any
})
</script>

<style lang="sass" scoped>
@import './styles/Home.sass'
</style>
