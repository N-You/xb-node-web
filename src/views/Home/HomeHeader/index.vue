<template>
  <div class="page-header">
    <div class="container">
      <g-icon className="icon-sousuo" styleSheet="font-size: 25rem"></g-icon>
      <g-icon :className="themeIcon" styleSheet="margin-left:20rem;font-size: 25rem" @click="changeTheme"></g-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref, watch} from 'vue'
import { homeStore } from '@/store/homeStore'

const useHomeStore = homeStore()

const themeIcon = ref<string>('icon-moon-fill')

watch(()=>useHomeStore.theme,(value:boolean)=>{
  value? themeIcon.value = 'icon-moon-fill' : themeIcon.value = 'icon-ai250'
},{
  immediate:true
})
function changeTheme(){
  useHomeStore.changeTheme()
}
</script>

<style lang="sass" scoped>
.container
  position: relative
  display: flex
  width: 100%
  justify-content: flex-end
  align-items: center
</style>