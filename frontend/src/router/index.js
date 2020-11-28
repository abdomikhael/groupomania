import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import signup from '../views/signup.vue'
import login from '../views/login.vue'
import Posts from '../views/Posts.vue'
import Logout from '../views/logOut.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'signup',
  component: signup
  },
    {
    path: '/login',
    name: 'login',
    component: login
  },
 {
    path: '/Posts',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  },

]

const router = new VueRouter({
  routes,
  mode :'history'

})

export default router
