<template>
  <div>
    <label for="tag-1">
      <input id="tag-1" type="checkbox" value="第一" v-model="tags" />第一
    </label>
    <label for="tag-2">
      <input id="tag-2" type="checkbox" value="第二" v-model="tags" />第二
    </label>
    <label for="tag-3">
      <input id="tag-3" type="checkbox" value="第三" v-model="tags" />第三
    </label>
    <div>{{ tags }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const tags = ref<Array<string>>([]);
</script>

<script lang="ts">
export default {
  name: 'Hot',
};
</script>
