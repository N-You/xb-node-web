<template>
    <div class="PostListContent">
        <div class="thumbnail">
            <userAvatar :avatarSrc="userAvatearImage" size="small" />
        </div>
        <div class="header">
            <div class="text">
                <RouterLink class="link" :to="itemLinkTo">{{ item.title }}</RouterLink>
            </div>
            <div class="meta">
                {{ item.user.name }}
            </div>
        </div>
        <div class="actions">
            <div class="action">
                <div class="icon">
                    <g-icon className="icon-dianzan" :styleSheet="{fontSize:'25rem'}"></g-icon>
                </div>
                <div class="text">
                    {{ item.totalLikes }}
                </div>
            </div>
            <div class="action">
                <div class="icon">
                    <g-icon className="icon-mingpian" :styleSheet="{fontSize:'25rem'}"></g-icon>
                </div>
                <div class="text">
                    {{ item.totalComments }}
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import userAvatar from '@/components/Menu/User/components/user-avatar.vue';
import { computed, onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { userAcountStore } from '@/store/userAcountStore';
import { userStore } from '@/store/userStore';

const useUserAccountStore = userAcountStore()
const useUserStore = userStore();

const porps = defineProps<{
    item:any
}>()

let userAvatearImage = ref<string>('');

let itemLinkTo = computed(()=>{
    return {name:'postShow',params:{postId:porps.item.id}}
})

onMounted(()=>{
    getUserInfo(porps.item.user.id)
})

function getUserInfo(id:number) {
  if(!porps.item.user.avatar){
    userAvatearImage.value = ``;
    return
  }
  useUserAccountStore.setAvatarPreviewImage(`http://localhost:3000/users/${id}/avatar?size=large`)
  userAvatearImage.value = useUserStore.avatarPreviewImage;
}
</script>

<style lang="sass" scoped>
.PostListContent
    color: var(--primary-text-color)
    display: grid
    grid-template-columns: 32rem 2fr 1fr
    gap: 16rem
    padding: 8rem 0
    .header
        overflow: hidden
        .text
            font-size: 16rem
            font-weight: bold
            margin-bottom: 4rem
            white-space: nowrap
            overflow: hidden
            text-overflow: ellipsis
        .link
            color: var(--primary-text-color)
        .meta .link
            font-size: 14rem
            color: var(--secondary-text-color)
    .actions
        display: flex
        align-items: center
        column-gap: 10rem
        color: var(--secondary-text-color)
        margin-left: 8rem
        .icon
            cursor: pointer
            height: 24rem
        .text
            font-size: 14rem
</style>