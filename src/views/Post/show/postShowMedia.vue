<template>
  <div class="postShowMedia">
    <div class="image">
        <img src="../../../assets/img/logo3.jpg"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ post: any }>();
</script>

<style lang="sass" scoped>
.postShowMedia
    cursor: pointer
    width: 100%
    margin-bottom: 16rem 
    .image
        width: 650rem
        overflow: hidden
        margin-bottom: 16rem
        margin: 0 auto
        height: 300rem
        img
            width: 100%
</style>
