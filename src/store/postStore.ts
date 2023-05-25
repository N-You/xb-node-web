import { acceptHMRUpdate, defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';
import { LogError } from '@/utils/LogError';
import ApiService from '@/netWork/request';
import { ElMessage } from 'element-plus';
import { setStorage, getStorage } from '@/utils/setStorage';
import router from '@/router';
import { User } from './userStore';
import { postFileProcess } from '@/views/Post/post.service';

export interface PostImte {
  id: number;
  title: string;
  content: string;
  user: User;
  totalComments: string;
  totalLikes: number;
  file: {
    id: number;
    width: number;
    height: number;
    orientation: string;
  };
  tags: [
    {
      id: number;
      name: string;
    },
  ];
}

export const postStore = defineStore('postStore', () => {
  let load = ref<Boolean>(false);
  let posts = ref<any>([]);

  let nextPage = ref<number>(1);
  let totalPages = ref<number>(1);

  const loading = computed(() => {
    return load.value ? true : false;
  });
  const postList = computed(() => {
    if (posts.value) {
      return posts.value.map((post: any) => postFileProcess(post));
    }
  });

  async function getPosts(options:any) {
    setLoading(true);
    try {
      let str = `/posts?page=${nextPage.value}&sort=${options.sort}`
      if(options.filter){
        str = `/posts?page=${nextPage.value}&sort=${options.sort}&user=${options.filter.user}&action=${options.filter.action}`
      }
      const res = await ApiService.get(str);
      getPostsPostProcess(res);
    } catch (error: any) {
      setLoading(false);
      const { response: res } = error;
      LogError(res.data.message);
    }
  }

  function setLoading(data: Boolean) {
    load.value = data;
  }

  function setPosts(data: any) {
    posts.value = data;
  }


  function getPostsPostProcess(res: any) {
    if (nextPage.value == 1) {
      setPosts(res?.data);
    }else{
      setPosts([...posts.value,...res?.data])
    }
    setLoading(false)

    const total = res.headers['X-Total-Count'] || res.headers['x-total-count']
    const totalPages = Math.ceil(total / 10)
    setTotalPages(totalPages)
    setNextPage()
  }

  function setTotalPages(data: number) {
    totalPages.value = data;
  }

  function setNextPage(data?: number) {
    if (data) {
      nextPage.value = data;
    } else {
      nextPage.value++;
    }
  }

 function hasMore(){
  return totalPages.value - nextPage.value >= 0
  }
  return {
    loading,
    postList,
    totalPages,

    getPosts,
    hasMore
  };
});
