<template>
  <div class="page-main">
  <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import {userStore} from '@/store/userStore'

const useUserStore = userStore()
</script>

<style lang="sass" scoped>
.page-main
  padding: 20rem
  box-sizing: border-box
</style>