import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const Login = () => import('@/views/Login/index.vue');

const Home = () => import('@/views/Home/Home.vue');
const HomeIndex = () => import('@/views/HomePage/HomeIndex/index.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Home',
    children: [
      { path: '/login', name: 'Login', component: Login },
      { path: '/home', name: 'Home', component: Home,children:[
        { path: '/home/index', name: 'HomeIndex', component: HomeIndex },
      ] },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
