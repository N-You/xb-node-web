<template>
  <div class="field">
    <label :for="name" :class="['button','outline',size]">{{text}}</label>
    <input type="file" :name="name" :id="name" :accept="fileType" class="input file hide" @change="$emit('change',$event.target)">
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  text: string;
  size: string;
  name: string;
  fileType: string;
}>();

let emits = ref<Array<string>>(['change']);
</script>

<style scoped lang="sass"></style>
