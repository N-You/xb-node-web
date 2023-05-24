import {acceptHMRUpdate, defineStore} from 'pinia'
import {computed, ref, watch} from 'vue'
import { LogError } from '@/utils/LogError';
import ApiService from '@/netWork/request';
import { ElMessage } from 'element-plus';
import {setStorage,getStorage} from '@/utils/setStorage'
import router from '@/router';
import { User } from './userStore';
import { postFileProcess } from '@/views/Post/post.service';

export interface PostImte{
  id:number,
  title:string,
  content:string,
  user:User,
  totalComments:string,
  totalLikes:number,
  file:{
    id:number,
    width:number,
    height:number,
    orientation:string
  },
  tags:[
    {
        id:number,
        name:string
    }
  ]
}

export const postStore = defineStore('postStore',()=>{
let load = ref<Boolean>(false)
let posts = ref<any>([])

const loading = computed(()=>{
    return load.value ? true : false
})
const postList = computed(()=>{
    if(posts.value){
        return posts.value.map((post:any)=>postFileProcess(post))
    }
})

    async function getPosts(){
    try{
        const res = await ApiService.get(`/posts`)
        posts.value = res.data
      }catch(error:any){
        const { response:res } = error
        LogError(res.data.message)
      }
}

return {
loading,
postList,

getPosts
}
})
