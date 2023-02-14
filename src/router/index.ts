import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
    children: [
      {
        path: '/home',
        name:'Home',
        component: () => import('../views/Home/Home.vue'),
      },
      {
        path: '/hot',
        name:'Hot',
        component: () => import('../views/Hot/Hot.vue'),
      },
      {
        path: '/publish',
        name:'Publish',
        component: () => import('../views/Publish/Publish.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
