<template>
  <div class="userShowMenu">
    <div class="userShowMenu-item" v-for="(item,index) of menuItems" :key="index">
        <RouterLink class="link" :to="item.linkTo">{{ item.text }}</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { RouterLink } from 'vue-router'

let menuItems = reactive<
  Array<{
    linkTo: {
      name: string;
    };
    text: string;
  }>
>([
  {
    linkTo: { name: 'userPosts' },
    text: '作品',
  },
  {
    linkTo: { name: 'userLiked' },
    text: '喜欢',
  },
  {
    linkTo: { name: 'userComments' },
    text: '评论',
  },
  {
    linkTo: { name: 'userReplies' },
    text: '回复',
  },
]);
</script>

<style lang="sass" scoped>
.userShowMenu
    display: flex
    align-items: center
    justify-content: center
    margin-bottom: 40rem
    &-item
        font-size: 18rem
        margin: 16rem
        white-space: nowrap
        .link
            display: block
            color: var(--secondary-text-color)
            padding: 16rem
        .link::after
            display: block
            content: ' '
            width: 0
            border-bottom: 3rem solid rgba(0, 0, 0, 0)
            margin: 0 auto
            margin-top: 16rem
            transition: 0.1s

        .router-link-exact-active
            color: var(--primary-text-color)
        
        .router-link-exact-active::after
            border-bottom-color: var(--primary-text-color)
            width: 20rem
</style>
