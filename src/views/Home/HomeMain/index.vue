<template>
  <div class="page-main">
    {{useUserStore.isLogin}}
  <router-view></router-view></div>
</template>

<script lang="ts" setup>
import {userStore} from '@/store/userStore'

const useUserStore = userStore()
</script>