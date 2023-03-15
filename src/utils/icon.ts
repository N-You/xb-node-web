import GIcon from '@/components/global/icon.vue'
import { App } from 'vue'

export default {
  install(app:App){
    app.component('GIcon',GIcon)
  }
}