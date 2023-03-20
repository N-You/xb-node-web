<template>
  <div class="menuItem">
    <g-icon :className="iconClass" :styleSheet="styleSheet"></g-icon>
  </div>
</template>

<script setup lang="ts">
import { CSSProperties } from 'vue';
defineProps<{
  info?:string,
  iconClass?:string,
  styleSheet?:string | CSSProperties
}>();
</script>

<style lang="sass" scoped>
.menuItem
  cursor: pointer
</style>
