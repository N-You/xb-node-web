<template>
  <div :class="['user-avatar',size]">
    <img class="image" :src="avatarSrc"/>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import minePng from '@/assets/img/mine.png'
const size = ref<string>('small')

withDefaults(defineProps<{
  avatarSrc:any
}>(),  {
    avatarSrc:minePng
})

</script>

<style scoped lang="sass">
.user-avatar
  .image
    border-radius: 50%
    cursor: pointer
    width: 100%

.user-avatar.small
  width: 16rem
  height: 16rem
.user-avatar.medium
  width:32rem
  height:32rem
.user-avatar.small
  width:64rem
  height:64rem
</style>