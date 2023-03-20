import { getStorage } from '@/utils/setStorage';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const Login = () => import('@/views/Login/index.vue');

const Home = () => import('@/views/Home/Home.vue');
const HomeIndex = () => import('@/views/HomePage/HomeIndex/index.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',
    children: [
      { path: '/login', name: 'Login', component: Login },
      { path: '/home', name: 'Home', component: Home,redirect:'/home/index',children:[
        { path: '/home/index', name: 'HomeIndex', component: HomeIndex },
      ] },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !getStorage('token')) next({ name: 'Login' })
  else next()
})

export default router;
