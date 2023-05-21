<template>
<div class="postListItem">
    <RouterLink class="link" :to="itemLinkTo">
        <img class="image" src="../../../assets/img/logo3.jpg"/>
    </RouterLink>
</div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const porps = defineProps<{
    item:any
}>()

let itemLinkTo = computed(()=>{
    return {name:'postShow',params:{postId:porps.item.id}}
})
</script>

<style lang="sass" scoped>
.postListItem > .link >.image
    color: var(--primary-text-color)
    width: 100%
    height: 100%
    object-fit: cover
</style>