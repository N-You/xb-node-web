<template>
    <div class="userAccount">
        <UserAccountUpdate></UserAccountUpdate>
    </div>
</template>

<script lang="ts" setup>
import UserAccountUpdate from './pages/userAccountUpdate.vue';

const props = defineProps<{
    user:Object
}>()

function handle(){
    console.log(333);
    
}
</script>

<style lang="sass" scoped>
.userAccount
    max-width: 520rem
    margin: 0 auto
    padding: 32rem
</style>