import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/home.vue'
import Category from '../pages/category.vue'
import Community from '../pages/community.vue'
import Cart from '../pages/cart.vue'
import Mine from '../pages/mine.vue'

import First from '../pages/category/first.vue'
import White from '../pages/category/white.vue'
import Grape from '../pages/category/grape.vue'
import Foreign from '../pages/category/foreign.vue'
import Yellow from '../pages/category/yellow.vue'
import Food from '../pages/category/food.vue'
import Rim from '../pages/category/rim.vue'

import Run from '../pages/community/run.vue'
import Sift from '../pages/community/sift.vue'
import Friend from '../pages/community/friend.vue'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/home', component: Home },
        {
            path: '/category', component: Category, children: [
                { path: '', component: First },
                { path: 'first', component: First },
                { path: 'white', component: White },
                { path: 'grape', component: Grape },
                { path: 'foreign', component: Foreign },
                { path: 'yellow', component: Yellow },
                { path: 'food', component: Food },
                { path: 'rim', component: Rim }
            ]
        },
        {
            path: '/community', component: Community, children: [
                { path: '', component: Run },
                { path: 'run', component: Run },
                { path: 'sift', component: Sift },
                { path: 'friend', component: Friend }
            ]
        },
        { path: '/cart', component: Cart },
        { path: '/mine', component: Mine }
    ]
})
