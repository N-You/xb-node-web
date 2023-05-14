<template>
  <div :class="['user-avatar',size]">
    <img class="image" :src="avatarSrc ? avatarSrc : minePng"/>
  </div>
</template>

<script setup lang="ts">
import minePng from '@/assets/img/mine.png'

withDefaults(defineProps<{
  avatarSrc:string,
  size:string,
}>(),  {
    avatarSrc:'',
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
  width: 24rem
  height: 24rem
.user-avatar.medium
  width:48rem
  height:48rem
.user-avatar.large
  width:96rem
  height:96rem
</style>