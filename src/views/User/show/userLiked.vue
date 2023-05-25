<template>
  <div class="userLiked">
    <PostList :sort="sort" :filter="{user:user,action:'liked'}"></PostList>
  </div>
</template>

<script setup lang="ts">
import { getStorage } from '@/utils/setStorage';
import PostList from '@/views/Post/pages/PostList.vue';
import { onUnmounted, ref, watch } from 'vue';

const props = defineProps<{
  sort: string;
}>();

let user = ref<number>()

watch(()=>props,(value)=>{
  user.value =  getStorage('user').id
},{
immediate:true,
})
</script>

<style lang="sass" scoped></style>
