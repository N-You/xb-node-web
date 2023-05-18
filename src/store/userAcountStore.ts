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
  return {
    loading,

    setLoading,
    setAvatarPreviewImage,
    ctreateAvatar
  };
});
