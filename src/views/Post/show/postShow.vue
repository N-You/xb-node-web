<template>
    <div style="width: 100%;padding: 0 450rem;box-sizing: border-box;">
        <PostShowMedia :post="usePostShowStore.postitem"></PostShowMedia>
        <div class="section meta actions">
            <div>file Meta</div>
            <PostShowAction :post="usePostShowStore.postitem"></PostShowAction>
        </div>
        <PostShowHeader :post="usePostShowStore.postitem"></PostShowHeader>
        <PostShowContent :post="usePostShowStore.postitem"></PostShowContent>

    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted } from 'vue';
import PostShowMedia from './postShowMedia.vue';
import {postShowStore} from '@/store/postShowStore'
import PostShowHeader from './postShowHeader.vue';
import PostShowContent from './postShowContent.vue';
import PostShowAction from './postShowAction.vue';
const usePostShowStore = postShowStore()

const props = defineProps<{
    postId:number
}>()

onMounted(()=>{
    usePostShowStore.getPostById(props.postId)
})
</script>

<style lang="sass" scoped>
.section.meta.actions
    display: flex
    justify-content: space-around
    margin-bottom: 32rem
</style>