import { NotificationMessage } from '@/type'
import {defineStore} from 'pinia'
import { ref } from 'vue'

export const notificatonStore = defineStore('notificatonStore',()=>{
const messages = ref<Array<NotificationMessage>>([])

function addMessage(data:any){
  const id = Date.now()
  const message = {
    id,
    ...data
  }
  messages.value = [message,...messages.value]

  deleteMessage(message)
}

function deleteMessage(data:any){
  const timeout = data.duration ? data.duration : 3000
  setTimeout(()=>{
    messages.value = messages.value.filter((message:any) => message.id !== data.id)
  },timeout)
}

return {
messages,

addMessage
}
})