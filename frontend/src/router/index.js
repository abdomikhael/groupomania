import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import signup from '../views/signup.vue'
import login from '../views/login.vue'
import posts from '../views/Posts.vue'
import Logout from '../views/logOut.vue'
import postDetails from '../components/postDetails.vue'
import addPost from '../components/addPost.vue'


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


]







const router = new VueRouter({
  routes,
  mode :'history',


})

export default router
