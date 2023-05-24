<template>
    <div class="postShowAction">
        <!-- 点赞 -->
        <div class="action">
            <div class="icon">
                <g-icon className="icon-dianzan" :styleSheet="{fontSize:'14rem'}"></g-icon>
            </div>
            <div class="text">
                {{ post?.totalLikes }}
            </div>
        </div>

        <!-- 评论 -->
        <div class="action">
            <div class="icon">
                <g-icon className="icon-mingpian" :styleSheet="{fontSize:'14rem'}"></g-icon>
            </div>
            <div class="text">
                {{ post?.totalComments }}
            </div>
        </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  const props = defineProps<{ post: any }>();
  </script>
  
  <style lang="sass" scoped>
  .postShowAction
    display: flex
    align-items: flex-start
    justify-content: flex-end
    .action
        display: flex
        align-items: center
        color: var(--secondary-text-color)
        margin-left: 8rem
        .icon
            cursor: pointer
            height: 24rem
        .text
            font-size: 14rem
            margin-left: 4rem
  </style>
  