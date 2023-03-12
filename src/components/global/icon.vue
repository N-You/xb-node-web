<template>
  <div class="iconfont" :class="[className]" :style="styleSheet"></div>
</template>

<script lang="ts" setup>
import { defineProps,CSSProperties } from 'vue';

defineProps<{
  className?:string,
  styleSheet?:CSSProperties
}>()
</script>