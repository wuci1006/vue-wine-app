import Vue from 'vue';
import Router from 'vue-router';

// 首页
const Home = r => require.ensure([], () => r(require('../pages/home.vue')), 'home');
// 分类
const Category = r => require.ensure([], () => r(require('../pages/category.vue')), 'cetegory');
// 社区
const Community = r => require.ensure([], () => r(require('../pages/community.vue')), 'community');
// 购物车
const Cart = r => require.ensure([], () => r(require('../pages/cart.vue')), 'cart');
// 我的
const Mine = r => require.ensure([], () => r(require('../pages/mine.vue')), 'mine');

//登录
// const Login = r => require.ensure([], () => r(require('../pages/login.vue')), 'login');


Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        { path: '/',redirect: '/home' },
        { path: '/home',name:'home', component: Home },
        { path: '/category',name:'category', component: Category },
        // { path: '/community',name:'community', component: Community },
        { path: '/cart',name:'cart', component: Cart },
        { path: '/mine',name:'mine', component: Mine }
    ]
})
