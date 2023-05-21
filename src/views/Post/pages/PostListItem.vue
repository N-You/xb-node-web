<template>
        <div class="postListItem">
            <PostListItemMedia :item="item"></PostListItemMedia>
            <PostListItemContent :item="item"></PostListItemContent>
        </div>
</template>

<script lang="ts" setup>
import PostListItemContent from './PostListItemContent.vue';
import PostListItemMedia from './PostListItemMedia.vue';

const porps = defineProps<{
    item:any
}>()
</script>

<style lang="sass" scoped>
</style>