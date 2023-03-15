import {defineStore} from 'pinia'
import {ref, watch} from 'vue'
import { LogError } from '@/utils/LogError';
import ApiService from '@/netWork/request';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
const router = useRouter()

export const userStore = defineStore('userStore',()=>{

  const isLogin = ref<boolean>(false)
  const Login = async (data:{name:string,password:string})=>{
    try{
      const res = await ApiService.post('login',data)
      localStorage.setItem('token',res.data.token as string)
      ElMessage({
        showClose: true,
        message: `登录成功`,
        type: 'success',
      })
    }catch(error:any){
      const { response:res } = error
      LogError(res.data.message)
    }
    }

watch(()=>JSON.stringify(localStorage.getItem('token')),(value:any)=>{
  value?isLogin.value = true : isLogin.value = false
},{
  immediate:true
})

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
      getPosts
    }
})