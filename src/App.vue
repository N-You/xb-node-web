<template>
  <h1>{{ name }}</h1>
  <div class="menu">
    <div
      :class="{ active: currentItem === item.index }"
      @click="jump(item)"
      v-for="(item, index) in menuItems"
      :key="index"
    >
    {{item.name}}
    </div>
  </div>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeMount, ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const name = ref<string>('Nyou');
const processStatus = computed(() =>
  name.value === 'Nyou' ? '初始化....' : '数据设置成功',
);

type MenuItem = {
  name:string,
  index:string
}
const menuItems = ref<Array<MenuItem>>([{
  name:'首页',
  index:'Home'
}, {
  name:'热门',
  index:'Hot'
}, {
  name:'发布',
  index:'Publish'
}]);
const currentItem = ref<string>();


function setName() {
  setTimeout(() => {
    name.value = '麻了';
  }, 1000);
}

function jump(item:MenuItem){
  currentItem.value = item.index
  router.push({name:item.index})
}

function resetName() {
  name.value = 'Nyou';
}
onBeforeMount(() => {
  console.log('启动成功');

  setName();
});

watch(name, (value, preValue) => {
  console.log(`name发生了变化${preValue}-> ${value}`);
});
</script>

<style lang="sass">
@import "./style/app.sass"
</style>
