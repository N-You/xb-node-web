<template>
  <div class="MenuStyle" v-for="item of menuList" :key="item.info" @click="handleRouter(item.link)">
    <MenuItem :iconClass="item.iconClass" styleSheet="font-size:25rem" :info="item.info"></MenuItem>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import MenuItem from './menuItem/index.vue'
import { MenuItemType } from '@/type/index';
import router from '@/router';
import { getStorage } from '@/utils/setStorage';

const menuList =  ref<Array<MenuItemType>>([
  {
    info:'首页',
    iconClass:'icon-sousuo',
    link:'/'
  },
  {
    info:'用户',
    iconClass:'icon-ren',
    link:`/home/users/${getStorage('uid')}/account`
  },
  {
    info:'首页',
    iconClass:'icon-dianzan',
    link:'/'
  }
])

function handleRouter(data:string){
  router.push(data)
}
</script>

<style lang="sass" scoped>
.MenuStyle
  display: flex
  flex-flow: nowrap column
  text-align: center
  border-radius: 5rem
  box-sizing: border-box
  color:var(--secondary-text-color)
  padding: 16rem 24rem
  background: var(--light-background)
</style>















