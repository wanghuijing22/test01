import Vue from 'vue'
// 注意！！！！！！！！！引入的是小写不是大写
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/home/Home.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Category = () => import('../views/category/Category.vue')

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        // 注意！！！！！！！！！这里path要加/
        path: '/home',
        component: Home
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/category',
        component: Category
    },
]
const router = new VueRouter({
    routes,
    mode: 'history',
})
export default router