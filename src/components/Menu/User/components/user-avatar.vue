<template>
  <div :class="['user-avatar',size]">
    <img class="image" :src="avatarSrc"/>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import minePng from '@/assets/img/mine.png'

withDefaults(defineProps<{
  avatarSrc:string,
  size:string,
}>(),  {
    avatarSrc:minePng,
    size:'small'
})

</script>

<style scoped lang="sass">
.user-avatar
  .image
    border-radius: 50%
    cursor: pointer
    width: 100%

.user-avatar.small
  width: 64rem
  height: 64rem
.user-avatar.medium
  width:128rem
  height:128rem
.user-avatar.large
  width:180rem
  height:180rem
</style>