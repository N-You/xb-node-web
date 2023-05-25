<template>
  <div class="postList">
    <PostListItem
      v-for="post in usePostStore.postList"
      :key="post.id"
      :item="post"
    ></PostListItem>
  </div>
</template>

<script lang="ts" setup>
import { postStore } from '@/store/postStore';
import { onMounted, onUnmounted, ref,watch } from 'vue';
import PostListItem from './PostListItem.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const usePostStore = postStore();

const props = defineProps<{
  sort: string;
  filter?: any;
}>();

/* 触底加载更多数据 */
onMounted(async () => {
  /* 滑动监听事件 */
  if (window) {
    window.addEventListener('scroll', onScrollWindow);
    window.scrollTo({ top: 0 });
  }

  /* 路由监听判断过滤 */
});

watch(()=>props,async (value:any)=>{
    console.log("🚀 ~ file: PostList.vue:39 ~ watch ~ value.filter:", value.filter)
    if (!value.filter) {
    await usePostStore.getPosts({ sort: value.sort });
  } else {
    await usePostStore.getPosts({ sort: value.sort, filter: value.filter });
  }
},{
    deep:true,
    immediate:true
})

onUnmounted(() => {
  if (window) {
    window.removeEventListener('scroll', onScrollWindow);
  }
});

const prevScrollTop = ref<number>(0);
async function onScrollWindow() {
  if (document) {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    const height = clientHeight + scrollTop + 200;
    const touchDown = scrollHeight - height < 0;

    const scrollDown = scrollTop > prevScrollTop.value;

    if (
      touchDown &&
      scrollDown &&
      !usePostStore.loading &&
      usePostStore.hasMore()
    ) {
      if (props.filter) {
        await usePostStore.getPosts({ sort: props.sort });
      } else {
        await usePostStore.getPosts({ sort: props.sort, filter: props.filter });
      }
    }

    prevScrollTop.value = scrollTop;
  }
}

/* 热门列表过滤 */
</script>

<style lang="sass" scoped>
.postList
    display: grid
    grid-template-columns: 1fr 1fr 1fr 1fr
    gap: 32rem 32rem
</style>
