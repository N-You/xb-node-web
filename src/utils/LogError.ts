import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'
export function LogError(message:string){
  ElMessage({
    showClose: true,
    message: message,
    type: 'error',
  })
}