<template>
  <div>
    <div>
      <div>上传图片</div>
    </div>
    <div v-for="item of postList" :key="item.id">
      <span>{{item.title}}</span>
      <button>删除</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import {userStore} from '@/store/userStore'
const useUserStore = userStore()

const postList = ref<Array<any>>([])

onMounted(async ()=>{
 let res = await useUserStore.getPosts()
 postList.value = res as any
})
</script>
