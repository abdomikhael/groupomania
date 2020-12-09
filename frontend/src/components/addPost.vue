<template>
  <v-container fluid  class="mt-15" >
    <v-card color="#F3E5F5">
      <v-card-title>
       <p class="headline">Ajouter votre publication</p>
     </v-card-title>
     <v-card-text>
      <v-form
      ref="form"
      v-model="valid"
      lazy-validation>
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
      ></v-textarea>
    </v-form>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn to="/posts" 
      color="indigo" dark>
      Annuler
    </v-btn>
    <v-btn :disabled="!valid" 
    color="success"
    @click="sendPost">
    Publier
  </v-btn>
</v-card-actions>
</v-card-text>
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
      title : null,
      content :null,
      fk_user: localStorage.getItem("userId"),
    },
    message: "",
  }
},
methods:{ 
  sendPost () {
    if (this.$refs.form.validate()) {
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
    }
  }
}
};
</script>