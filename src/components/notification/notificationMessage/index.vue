<template>
  <div class="notification-message">
    <div class="icon">
      <g-icon :className="iconClass" :styleSheet="message.styleSheet"></g-icon>
    </div>
    <div class="content">{{message.content}}</div>
  </div>
</template>

<script lang="ts" setup>
import {ref, watch} from 'vue'
import {NotificationMessage} from '@/type/index'


const props = defineProps<{
  message:NotificationMessage
}>()

const iconClass = ref<string>()
watch(()=>props,(value:any)=>{
  iconClass.value = value.message.iconClass
},{
  deep:true,
  immediate:true
})
</script>

<style scoped lang="sass">
.notification-message
  display: flex
  align-items: center
  font-size:16rem
  font-weight: 200
  color:var(--secondary-text-color)
  padding: 16rem 24rem
  background: var(--light-background)
  min-width: 280rem
  max-width: 280rem
  border-radius: 5rem
  margin-bottom: 24rem
  min-height: 50rem
  box-sizing: border-box
  box-shadow: 0 15rem 30rem rgba(0, 0, 0, 0.1)
  z-index: 9999
  .content
    flex-grow: 2
    min-height: 24rem
  .icon
    margin-right: 8rem
</style>