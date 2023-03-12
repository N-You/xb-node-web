import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const Login = () => import('@/views/Login/index.vue');
const Home = () => import('@/views/Home/Home.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Home',
    children: [
      { path: '/Login', name: 'Login', component: Login },
      { path: '/Home', name: 'Home', component: Home },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
