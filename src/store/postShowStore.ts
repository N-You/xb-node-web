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

export const postShowStore = defineStore('postShowStore',()=>{
let load = ref<Boolean>(false)
let post = ref<any>([])

const loading = computed(()=>{
    return load
})

const postitem = computed(()=>{
    return Object.keys(post.value).length ? postFileProcess(post.value) : null
})

  async function getPostById(postId:number){
  try{
    const res = await ApiService.get(`/posts/${postId}`)
    post.value = res.data
  }catch(error:any){
    const { response:res } = error
    LogError(res.data.message)
  }
}

function setLoding(data:Boolean){
    load.value = data
}

return {
    loading,
    postitem,

    getPostById
}
})
