import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/PostComponent.vue'
import Profile from '../components/Profile'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import PostComment from '../components/PostComment.vue'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/post/:id',
        name: 'PostComment',
        component: PostComment
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router