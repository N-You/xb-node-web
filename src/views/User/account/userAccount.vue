<template>
    <div class="userAccount">
        <UserAccountUpdate></UserAccountUpdate>
        <UserAccountChangeName></UserAccountChangeName>
    </div>
</template>

<script lang="ts" setup>
import UserAccountChangeName from './pages/userAccountChangeName.vue';
import UserAccountUpdate from './pages/userAccountUpdate.vue';

const props = defineProps<{
    user:Object
}>()
</script>

<style lang="sass" scoped>
.userAccount
    max-width: 520rem
    margin: 0 auto
</style>