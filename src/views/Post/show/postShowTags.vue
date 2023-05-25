<template>
  <div class="postShowTags">
    <PostTag v-for="tag in tags" :key="tag?.id" :tag="tag"></PostTag>
  </div>
</template>

<script lang="ts" setup>
import PostTag from '../pages/postTag.vue';
const props = defineProps<{
    tags:any
}>()
</script>

<style lang="sass" scoped>
.postShowTags
    display: flex
</style>
