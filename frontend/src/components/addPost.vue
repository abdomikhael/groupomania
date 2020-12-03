<template>
  <v-container fluid  class="mt-15" >
    <v-card>

      <v-form ref="form" lazy-validation>
        <v-card-title>
       <p class="headline">Ajouter votre publication</p>
     </v-card-title>
       <v-card-text>

        <v-text-field
        placeholder="Le titre"
        v-model ="postsCard.title"
        :rules="[(v) => !!v || 'Titre est obligatoire.']"
        required
        ></v-text-field>
        <v-textarea
        color ="#f73b3b" 
        placeholder="La publication"
        v-model ="postsCard.content"
        :rules="[(v) => !!v || 'content est obligatoire']"
        required
        ></v-textarea>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn to="/posts" 
        color="error">
        Annuler
      </v-btn>
        <v-btn
        color="success"
        @click="sendPost">
        Publier
      </v-btn>
    </v-card-actions>
  </v-form>
  <p class="mt-3">{{ message }}</p>
</v-card>
</v-container>
</template>
<script>
export default {
  name:'addPost',
  props:["token"],
  data() {
    return{

     postsCard:{
      fk_user: localStorage.getItem("userId"),
      title : null,
      content :null
    },
    message: "",

  }
},
methods:{
  sendPost () {

    console.log(this.posts)
    this.$http.post(`http://localhost:3000/posts`, this.postsCard, {
      headers:{
        Authorization: "Bearer "+ this.token
      }
    })
    .then(response=> {
      console.log("response")
      this.postsCard = response.data
      this.$router.push({path: "/Posts"})
    })
    .catch(
      console.log("error")
      )
  },
}
};

</script>