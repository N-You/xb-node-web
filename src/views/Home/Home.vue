<template>
  <input v-model="intValue">
  <span>{{intValue}}</span>
  <textarea placeholder="请输入内容" v-model="content"></textarea>
  <span>{{content}}</span>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const intValue = ref<any>('请输入内容')
const content = ref<string>('')
</script>