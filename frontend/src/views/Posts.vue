<template>
  <v-container background-color="#f73b3b">

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

      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn @click  ="logout" icon>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>


  <v-main background-color ="#f73b3b">     
    <v-card >

      <v-card-text  >
        <v-text-field
       
        placeholder="Le titre"
        v-model ="posts.title"
        ></v-text-field>
        <v-textarea
        color ="#f73b3b" 
        placeholder="La publication"
        v-model ="posts.content"
        ></v-textarea>
      </v-card-text>
      <v-card-actions color ="#f73b3b" >
        <v-spacer></v-spacer>
        <v-btn
        color="success"
        @click="sendPost">
        Publier
      </v-btn>
    </v-card-actions>
  </v-card>
  <v-divider class="my-2"></v-divider>
  <v-card
  class="mx-auto"
  >
  <v-card-text>
    <v-text-field
    filled
    value="My new post"
    ></v-text-field>
    <v-textarea
    filled
    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"
    ></v-textarea>
  </v-card-text>
  <v-card-actions>
    <v-list-item class="grow">
      <v-list-item-content>
        <v-list-item-title>Evan You</v-list-item-title>
      </v-list-item-content>
      <v-row
      align="center"
      justify="end">
    </v-row>
  </v-list-item>
</v-card-actions>
</v-card>

</v-main>
</v-container>
</template>
<script>

export default {
  name: 'wall',


  data() {
    return{
      posts:{
        title : null,
        content :null
      },
      user :"",

    }
  },                                 
  methods:{
    sendPost () {


     this.$http.post(`http://localhost:3000/auth/createPost/`, this.posts)
     .then(response=> {
      console.log("response")
      this.posts = response.data
      .catch(
        console.log("error")
        )

    })
   }
 },
 async logout (){
        await this.$store.dispatch('LogOut')
        this.$router.push('/login')
      }
};

</script>