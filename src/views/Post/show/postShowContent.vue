<template>
  <div class="postShowContent">
    {{ post?.content }}
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ post: any }>();
</script>

<style lang="sass" scoped>
.postShowContent
    font-size: 18rem
</style>
