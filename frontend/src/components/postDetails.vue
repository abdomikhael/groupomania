<template>
  <div v-if="currentPost" class="edit-form py-3" >
    <p class="headline">Modifier votre publication</p>
    <v-form ref="form" lazy-validation>
      <v-text-field
      v-model="currentPost.title"
      :rules="[(v) => !!v || 'Titre est obligatoire.']"
      label="Titre"
      required
      >{{id}}</v-text-field>

      <v-text-field
      v-model="currentPost.content"
      :rules="[(v) => !!v || 'content est obligatoire']"
      label="Description"
      required
      ></v-text-field>


      <v-btn color="error" small class="mr-2" @click="deletePost">
        Supprimer
      </v-btn>

      <v-btn color="success" small @click="updatePost">
        Modifier
      </v-btn>
    </v-form>

    <p class="mt-3">{{ message }}</p>
  </div>

  <div v-else>
    <p>Veuiller choisir un post...</p>
  </div>
</template>
<script>
export default {
  name: 'postDetails',
  props:["token"],



  data() {
    return {
      currentPost:{
        type: Boolean,
        required: true,
      },
       id:this.$route.params.id,

      message: "",
      fk_user: localStorage.getItem("userId"),



    }

  },
  mounted() {  

    this.$http.get(`http://localhost:3000/posts/:id`,
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
    })
  },



};

</script>