<template>
    <div class="postTag">
        <div class="text">
            <router-link class="link" :to="tagNameLinkTo">
            {{ tag?.name }}</router-link>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
    tag:any
}>()

const tagNameLinkTo = computed(()=>{
    return {name:'postIndexPopular',params:{tag:props.tag?.name}}
})
</script>

<style lang="sass" scoped>
.postTag
    margin-right: 8rem
    .text
        .link
            display: inline-block
            font-size: 14rem
            color: var(--light-text-color)
            padding: 4rem 8rem
            background: var(--light-background)
            border-radius: 3rem
.postTag:last-child
    margin-right: 0
</style>