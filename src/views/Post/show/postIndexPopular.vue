<template>
    <div class="PostIndex">
        <PostList :sort="'most_comments'"></PostList>
    </div>
</template>

<script lang="ts" setup>
import { onUnmounted } from 'vue';
import PostList from '../pages/PostList.vue';

onUnmounted(()=>{
    location.reload()
})
</script>

<style lang="sass" scoped></style>