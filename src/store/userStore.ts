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

  const isLogin = ref<boolean>(false)
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
      LogError(res.data.message)
    }
    }

    /* 根据本地存储的token信息来更新登录状态 */
watch(()=>getStorage('token'),(value:any)=>{
  value ? isLogin.value = true : isLogin.value = false
},{
  immediate:true
})

/* 请求获取用户信息 */
const getUserById = async (userId:number)=>{
  try{
    const res = await ApiService.get(`/users/${userId}`)
    setStorage('user',res.data)
  }catch(error:any){
    const { response:res } = error
    LogError(res.data.message)
  }
}

/* 获取用户头像 */
const getUserAvatarById = async(userId:number,size = 'small') =>{
  try{
    const res = await ApiService.get(`users/${userId}/avatar?size=${size}`)
    return res
  }catch(error:any){
    const { response:res } = error
    LogError('获取图片失败')
  }
}

// const getPosts = async () =>{
//     try{
//       const res = await ApiService.get('posts')
//       return res.data
//     }catch(error:any){
//       LogError(error)
//     }
//   }

  return {
      isLogin,

      Login,
      // getPosts,
      getUserAvatarById
    }
})