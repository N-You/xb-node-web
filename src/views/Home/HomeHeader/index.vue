<template>
  <div :class="['page-header', { shadow: shadow }]">
    <div class="container">
      <g-icon className="icon-sousuo" styleSheet="font-size: 25rem"></g-icon>
      <g-icon
        :className="themeIcon"
        styleSheet="margin-left:20rem;font-size: 25rem"
        @click="changeTheme"
      ></g-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { homeStore } from '@/store/homeStore';

const useHomeStore = homeStore();

const themeIcon = ref<string>('icon-ai250');
const shadow = ref<Boolean>(false);

onMounted(() => {
  if (window) {
    window.addEventListener('scroll', onScrollWindow);
  }
});

onUnmounted(() => {
  if (window) {
    window.removeEventListener('scroll', onScrollWindow);
  }
});

function onScrollWindow(){
  if(document){
    const {scrollTop} = document.documentElement
    shadow.value = scrollTop > 120 ? true : false
  }
}

watch(
  () => useHomeStore.theme,
  (value: boolean) => {
    value
      ? (themeIcon.value = 'icon-ai250')
      : (themeIcon.value = 'icon-moon-fill');
  },
  {
    immediate: true,
  },
);
function changeTheme() {
  useHomeStore.changeTheme();
}
</script>

<style lang="sass" scoped>
.container
  position: relative
  display: flex
  width: 100%
  justify-content: flex-end
  align-items: center
.shadow
  box-shadow: 20rem 30rem 30rem rgba(0, 0, 0, 0.5)
</style>
