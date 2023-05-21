import { defineStore } from 'pinia';
import { ref } from 'vue';
import ApiService from '@/netWork/request';
import { userStore } from './userStore';
export interface userAccountStoreState {
  loading: boolean;
}

export const userAcountStore = defineStore('userAcountStore', () => {
  let loading = ref<boolean>(false);
  const useUserStroe = userStore()

  function setLoading(data: boolean) {
    loading.value = data;
  }

  function setAvatarPreviewImage(data:string){
    useUserStroe.avatarPreviewImage = data
  }

  /* 上传用户头像 */
  async function ctreateAvatar(file: any) {
    setLoading(true);
    const formData = new FormData();
    formData.append('avatar', file);

    try {
      const res = await ApiService.post('/avatar',formData);
      setLoading(false)

      return res
    } catch (error: any) {
      setLoading(false);
      throw error.response;
    }
  }

/* 修改用户名称 */
async function updateUserAccount(data:{body:any,userId:number}){
  setLoading(true)
  try{
    const res = await ApiService.patch('/users',data.body)
    setLoading(false)
    useUserStroe.getUserById(data.userId)
    return res
  }catch(error:any){
    setLoading(false)
    throw error.response
  }
}

  return {
    loading,

    setLoading,
    setAvatarPreviewImage,
    ctreateAvatar,
    updateUserAccount
  };
});
