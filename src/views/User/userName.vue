<template>
<div :class="['userName',props.size]">
    <div class="userName-text">
    <RouterLink  :to="userNameLinkTo" class="link">
        {{ props.user.name }}
    </RouterLink>
    </div>
</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router'

const props = defineProps<{
    user:{id:number,name:string,avatar:number},
    size:String
}>()

const userNameLinkTo = computed(()=>{
    return {
        name:'userPosts',
        params:{userId:props.user.id}                                                                       
    }
})
</script>

<style lang="sass" scoped>
.userName.large
    font-size: 22rem
    font-weight: bold
    .userName-text
        margin-top: 10rem
        .link
            margin-top: 2rem
            color: var(--primary-text-color)
</style>