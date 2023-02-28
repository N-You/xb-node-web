<template>
<div class="page">
  <div class="log">
    <img src="../../assets/img/Login/undraw_login.png" alt="加载失败">
  </div>
  <div class="box">
    <div class="card">
    <div class="card_header">
      <h3 class="card-title">头部</h3>
      <div class="card-subtitle">tranclation</div>
    </div>
    <div class="card_content">
      <el-form :model="formData">
        <el-form-item label="名称">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formData.password"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="card_footer">
      <button @click="Login">登陆</button>
    </div>
  </div>
  </div>
</div>
</template>y

<script setup lang="ts">
import { reactive } from 'vue';
import {userStore} from '@/store/userStore'

const useUserStore = userStore()

const formData = reactive<{name:string,password:string}>({name:'',password:''})

async function Login(){
  useUserStore.Login(formData)
  useUserStore.getPosts()
}
</script>

<style scoped lang="sass">
.page
  height: 100vh
  display: flex
  justify-content: center
  .log
      width:50%
      height: 100%
      background-color: #9A9AEB
      display: flex
      justify-content: center
      align-items: center
      &>img
        width: 567rem
        height: 339rem
  .box
    height: 100%
    padding: 35rem
    box-sizing: border-box
    width: 50%
    display: flex
    justify-content: center
    align-items: center
    .card
      display: flex
      flex-direction: column 
      width: 500rem
      height: 500rem
      box-sizing: border-box
      background: #f8f8f8
      border-radius: 10rem
      align-items: center
      justify-content: center
      &_header
        text-align: center
        margin-bottom: 32rem
        .card-title
          margin-bottom: 8rem
        .card-subtitle
          font-size: 12rem
          color: #989898
      &_content
        display: flex
        justify-content: center
      &_footer>button
        margin: 0 auto
        outline: none
        border: none
        background: none
        border: 2rem solid #000
        padding: 10rem 24rem
        cursor: pointer
      &_footer>button:active
        opacity: 0.8
</style>
