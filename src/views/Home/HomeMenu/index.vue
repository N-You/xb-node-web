<template>
  <div class="page-menu">
    <div class="logo">
      <img :src="themeLogo"/>
    </div>
    <main-menu></main-menu>
  </div>
</template>

<script lang="ts" setup>
import {ref, watch} from 'vue'
import MainMenu from '@/components/Menu/MainMenu.vue';
import { homeStore } from '@/store/homeStore';
import lightLogo from '@/assets/img/logo3.jpg'
import darkLogo from '@/assets/img/logo3.png'

const themeLogo = ref<any>(lightLogo)

const useHomeStore = homeStore()

watch(()=>useHomeStore.theme,(value:boolean)=>{
  value ? themeLogo.value = lightLogo : themeLogo.value = darkLogo
},{
  immediate:true
})

</script>

<style scoped lang="sass">
.logo
  width: 100%
  padding:0 50%
  img
    width: 64rem
    height: 64rem
    transform: translateX(-50%)
</style>
