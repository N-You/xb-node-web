<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import NProgress from 'nprogress';
import router from './router';
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});
router.afterEach(() => {
  NProgress.done();
});
</script>

<style scoped lang="sass">
@import 'nprogress/nprogress.css'
@import './styles/appBase.sass'
.fade-enter-from
  opacity:0
.fade-enter-active
  transition: all 1s ease
.fade-enter-to
  opacity:1
</style>
