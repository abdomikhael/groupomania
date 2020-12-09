import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/user/Home.vue'
import signup from '../components/user/signup.vue'
import login from '../components/user/login.vue'
import posts from '../views/Posts.vue'
import Logout from '../components//user/logOut.vue'
import postDetails from '../components/postDetails.vue'
import addPost from '../components/addPost.vue'
import profile from '../components/profile.vue'



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
  path: '/posts',
  name: 'posts',
  component: posts,
  props : true,

},
{
  path: '/addpost',
  name: 'addPost',
  component :addPost
},
{
  path: '/logout',
  name: 'logout',
  component: Logout,

},
{ 
  
  path: '/post/:id',
  name: 'postDetails',
  component :postDetails
   
},
{
  path: '/profile/:id',
  name: 'profile',
  component :profile
},


]







const router = new VueRouter({
  routes,
  mode :'history',


})

export default router
