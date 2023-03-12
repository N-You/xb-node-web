<template>
  <div class="page">
    <home-menu></home-menu>
    <home-header></home-header>
    <div class="pageMain">
      <slot></slot>
    </div>
  </div>
</template>

<script> 
import {defineComponent} from 'vue'
export default defineComponent({
  name:'HomePage'
})
</script>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

import GIcon from '@/components/global/icon.vue'
import HomeHeader from './HomeHeader/index.vue'
import HomeMenu from './HomeMenu/index.vue'

import {userStore} from '@/store/userStore'

const useUserStore = userStore()

const postList = ref<Array<any>>([])

onMounted(async ()=>{
 let res = await useUserStore.getPosts()
 postList.value = res as any
})
</script>
