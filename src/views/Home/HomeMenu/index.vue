<template>
  <div class="page-menu">
    <div class="logo">
      <img src="@/assets/img/logo3.jpg" />
    </div>
    <main-menu></main-menu>
  </div>
</template>

<script lang="ts" setup>
import MainMenu from '@/components/Menu/MainMenu.vue';
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
