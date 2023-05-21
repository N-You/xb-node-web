import { defineStore } from 'pinia'
import {ref} from 'vue'

export const homeStore = defineStore('homeStore',()=>{
const theme = ref<boolean>(false)

function changeTheme(){
  theme.value = !theme.value
}

return {
  theme,

  changeTheme
}
})