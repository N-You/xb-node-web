<template>
    <div class="userAccount">
        <UserAccountUpdate></UserAccountUpdate>
        <UserAccountChangeName></UserAccountChangeName>
        <UserAccountChangePassWord></UserAccountChangePassWord>
    </div>
</template>

<script lang="ts" setup>
import UserAccountChangeName from './pages/userAccountChangeName.vue';
import UserAccountChangePassWord from './pages/userAccountChangePassWord.vue';
import UserAccountUpdate from './pages/userAccountUpdate.vue';

function title(){
    return '用户账户'
}

const props = defineProps<{
    user:Object
}>()
</script>

<style lang="sass" scoped>
.userAccount
    max-width: 520rem
    margin: 0 auto
</style>