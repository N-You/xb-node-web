<template>
  <div :class="['iconfont',className]" :style="styleSheet"></div>
</template>

<script lang="ts" setup>
import type { CSSProperties } from 'vue'

defineProps<{
  className?:string,
  styleSheet?:string | CSSProperties
}>()
</script>

<style scoped lang="sass">
.iconfont:active
  transform: scale(0.95)
</style>