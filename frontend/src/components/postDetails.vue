<template>
  <v-container fluid  class="mt-15" >   
    <div v-if ="currentPost.fk_user == currentUser" class="edit-form py-3">
      <v-card>
        <v-card-title>   
          <p class="headline">Modifier votre publication</p>
        </v-card-title>

        <v-card-text>
          <p> Publié par {{user.username}}</p>
          <v-form
          ref="form"
          v-model="valid"
          lazy-validation>

          <v-text-field
          v-model="currentPost.title"
          :rules="[(v) => !!v || 'Titre est obligatoire.']"
          required
          ></v-text-field>

          <v-textarea
          v-model="currentPost.content"
          :rules="[(v) => !!v || 'content est obligatoire']"
          required
          ></v-textarea>
        </v-form>
      </v-card-text>


      <v-card-actions >
       <v-spacer></v-spacer>
       <v-btn color="error" small class="mr-2" @click="deletePost">
        Supprimer
      </v-btn>
      <v-btn :disabled="!valid" 
      color="success"   
      small 
      @click="updatePost">
      Modifier
    </v-btn>
    <v-btn to="/posts" small
    color="indigo" dark>
    Annuler
  </v-btn>
</v-card-actions>
</v-card>

<p class="mt-3">{{ message }}</p>  
</div>
<div v-else class="edit-form py-3" >

  <v-card>
    <v-card-title>   
      <p class="headline">La publication</p>
    </v-card-title>
    <v-card-text>
      <p>Publié par {{user.username}}</p>
      <p>{{currentPost.title}}</p>
      <p> {{currentPost.content}}</p>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn to="/posts" small
      color="indigo" dark>
      Annuler
    </v-btn>
  </v-card-actions>



</v-card>
</div>
</v-container>
</template>
<script>
export default {
  name: 'postDetails',
  props:["token"],
  data() {
    return {
      currentPost:{
         fk_user: localStorage.getItem("userId"),

      },
      user :{},
      postUser :{},
      message: "",
    
    }
  }, 

  computed :{
    currentUser(){
      return +(localStorage.getItem("userId"))
    },
  },

  created() {


    this.$http.get(`http://localhost:3000/profile/`+this.currentPost.fk_user,
    {
      headers:{
        Authorization: "Bearer "+ localStorage.getItem("userId")
      }, 
    })
    .then((response) => {
      this.user= response.data;
    })
    .catch((e) => {
      console.log(e);
    })
    

  },
  mounted() {  
    let  id = this.$route.params.id;

    this.$http.get(`http://localhost:3000/posts/`+id,
    {
      headers:{
        Authorization: "Bearer "+ this.token
      }, 
    })
    .then((response) => { 
      this.currentPost= response.data;
      console.log(response.data);
    })
    .catch((e) => {
      console.log(e);
    });

  },
  methods:{
    updatePost() {
     if (this.$refs.form.validate()) {
      let  id = this.$route.params.id;
      this.$http.put(`http://localhost:3000/posts/`+id, this.currentPost, {
        headers:{
          Authorization: "Bearer "+ this.token
        }
      })
      .then(response=> {
        console.log("response")
        this.currentPost = response.data
        this.message ="le Post est modifié"
        this.$router.push({path: "/Posts"})
      })
      .catch()
      console.log("error")

    }
  },
  deletePost() {
    let  id = this.$route.params.id;
    this.$http.delete(`http://localhost:3000/posts/`+id,{


      headers:{
        Authorization: "Bearer "+ this.token
      } 
    }) 
    .then(res => {
      console.log(res)
      this.$router.push({path: "/Posts"})
    });

  }

}
};


</script>