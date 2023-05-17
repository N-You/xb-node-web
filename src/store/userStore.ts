import {defineStore} from 'pinia'
import {ref, watch} from 'vue'
import { LogError } from '@/utils/LogError';
import ApiService from '@/netWork/request';
import { ElMessage } from 'element-plus';
import {setStorage,getStorage} from '@/utils/setStorage'
import router from '@/router';

export interface User{
  id:number,
  name:string,
  avatar:number | null
}

export const userStore = defineStore('userStore',()=>{

  let isLogin = ref<boolean>(false)
  const Login = async (data:{name:string,password:string})=>{
    try{
      const res:any = await ApiService.post('login',data)
      getUserById(res.data.id)
      setStorage('uid',res.data.id)
      setStorage('token',res.data.token as string)
      ElMessage({
        showClose: true,
        message: `登录成功`,
        type: 'success',
      })
      router.push({path:'/home'})
    }catch(error:any){  
      const { response:res } = error
      LogError(res)
    }
    }


watch(()=>getStorage('token'),(value:any)=>{
  value?isLogin.value = true : isLogin.value = false
},{
  immediate:true
})

const getUserById = async (userId:number)=>{
  try{
    const res = await ApiService.get(`/users/${userId}`)
    setStorage('user',res.data)
  }catch(error:any){
    const { response:res } = error
    LogError(res.data.message)
  }
}

const getUserAvatarById = async(userId:number,size?:string) =>{
  try{
    const res = await ApiService.get(`users/${userId}/avatar?size=${size}`)
    
    return window.URL.createObjectURL(res?.data as any)
  }catch(error:any){
    const { response:res } = error
    LogError(res)
  }
}

const getPosts = async () =>{
    try{
      const res = await ApiService.get('posts')
      return res.data
    }catch(error:any){
      LogError(error)
    }
  }

  return {
      isLogin,

      Login,
      getPosts,
      getUserAvatarById,
      getUserById
    }
})