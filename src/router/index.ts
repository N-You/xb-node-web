import { getStorage } from '@/utils/setStorage';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const Login = () => import('@/views/Login/Login/index.vue');

const Home = () => import('@/views/Home/Home.vue');
const HomeIndex = () => import('@/views/HomePage/HomeIndex/index.vue')
const UserShow = () => import('@/views/User/userShow.vue')
const UserPost = () => import('@/views/User/show/userPost.vue')
const UserLiked = () => import('@/views/User/show/userLiked.vue')
const UserComments = () => import('@/views/User/show/userComments.vue')
const UserReplies = ()=>import('@/views/User/show/userReplies.vue')
const UserAccount = ()=>import('@/views/User/account/userAccount.vue')

const Posts = () => import('@/views/Post/postIndex.vue');
const postShow = () => import('@/views/Post/show/postShow.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',
    children: [
      { path: '/login', name: 'Login', component: Login },
      { path: '/home', name: 'Home', component: Home,redirect:'/home/index',children:[
        { path: '/home/index', name: 'HomeIndex', component: HomeIndex },
        { path: '/home/users/:userId', name: 'UserShow', component: UserShow,props:true,children:[
          {path:'',name:'userPosts',component:UserPost},
          {path:'liked',name:'userLiked',component:UserLiked},
          {path:'comments',name:'userComments',component:UserComments},
          {path:'replies',name:'userReplies',component:UserReplies},
          {path:'account',name:'userAccount',component:UserAccount}
        ] },
        { path: '/posts', name: 'Posts', component: Posts},
        { path: '/postShow/:postId', name: 'postShow', component: postShow,props:true},
      ] },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && !getStorage('token')) next({ name: 'Login' })
//   else next()
// })

export default router;
