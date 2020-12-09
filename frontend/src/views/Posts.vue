<template>
  <v-container>
   <v-card class="mt-0">
    <v-toolbar  fluid color ="#f73b3b"  dark class="my-4 mt-0">
     <v-img
     :src="require('../assets/icon.svg')"
     class="my-4"
     contain
     height="65"
     />

     <v-toolbar-title>Groupomania</v-toolbar-title>

     <v-spacer></v-spacer>

     <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn  @click="$router.push({path:'/profile/'+fk_user})" icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>

    <v-btn @click="$router.push({path: '/logout'})" icon>
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-toolbar>
</v-card>

<v-main >  
  <router-link to ="/addPost"><v-text-field label="Partager votre publication"></v-text-field></router-link>   
  <div class="post" v-for="(post, index) in posts" :key="index" >
    <Post :post="post"/>
</div>
</v-main>
</v-container>
</template>
<script>
import Post from '../components/Post.vue'

export default {
  name: 'posts',
  components: {
    Post,
  },  
  props:["token"],


  data () {
    return{
      posts : {
       type: Object,
       require: true
     },
     fk_user: localStorage.getItem("userId"),



   }
 },
 mounted (){
  this.$http.get(`http://localhost:3000/posts`,{
    headers:{
      Authorization: "Bearer "+ this.token
    }
  })
  .then(response=> {
    this.posts=  response.data})



  .catch((e) => {
    console.log(e);
  });



},  

methods:{






}   

};

</script>