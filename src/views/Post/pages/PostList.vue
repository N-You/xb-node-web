<template>
    <div class="postList">
        <PostListItem v-for="post in usePostStore.postList" :key="post.id" :item="post"></PostListItem>
    </div>
</template>

<script lang="ts" setup>
import {postStore} from '@/store/postStore'
import { onMounted, ref } from 'vue';
import PostListItem from './PostListItem.vue';

const usePostStore = postStore()
onMounted(async ()=>{
    console.log(111);
    
   await usePostStore.getPosts()
})

</script>

<style lang="sass" scoped>
.postList
    display: grid
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr
    gap: 32rem 32rem
</style>