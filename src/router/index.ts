import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const Login = () => import('@/views/Login/index.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Login',
    children: [{ path: '/Login', name: 'Login', component: Login }],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
