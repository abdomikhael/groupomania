<template>
  <v-container fluid  class="mt-15" >
   <div v-if="currentPost" class="edit-form py-3" >
    <v-card>
      <v-card-title>
        <p class="headline">Modifier votre publication</p>
      </v-card-title>
      <v-form ref="form" lazy-validation>
       <v-card-text>
        <v-text-field
        v-model="currentPost.title"
        :rules="[(v) => !!v || 'Titre est obligatoire.']"
        label="Titre"
        required
        ></v-text-field>

        <v-textarea
        v-model="currentPost.content"
        :rules="[(v) => !!v || 'content est obligatoire']"
        label="Description"
        required
        ></v-textarea>
      </v-card-text>
      <v-card-actions>
       <v-spacer></v-spacer>
       <v-btn color="error" small class="mr-2" @click="deletePost">
        Supprimer
      </v-btn>
      <v-btn color="success" small @click="updatePost">
        Modifier
      </v-btn>
    </v-card-actions>
  </v-form>
  <p class="mt-3">{{ message }}</p>  
</v-card>
</div>
<div v-else>
  <v-card>
    <p>Veuiller choisir un post...</p>
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
        type: Boolean,
        required: true,
        fk_user: localStorage.getItem("userId"),
      },

      message: "",




    }

  },
  mounted() {  
    let  id= this.$route.params.id;
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
    })
  },
  methods:{
    updatePost() {
      let  id = this.$route.params.id;
      this.$http.put(`http://localhost:3000/posts/`+id, this.currentPost, {
        headers:{
          Authorization: "Bearer "+ this.token
        }
      })
      .then(response=> {
        console.log("response")
        this.currentPostCard = response.data
        this.message ="le Post est modifié"
       // this.$router.push({path: "/Posts"})
     })
      .catch(
        console.log("error")
        )
    },


    deletePost() {

      let  id = this.$route.params.id;
      this.$http.delete('http://localhost:3000/posts/'+id, {
        headers:{
          Authorization: "Bearer "+ this.token
        }
      })
      .then((response) => {
        console.log(response.data)
        this.$router.push({path: "/Posts"})


      })
      .catch(error => {
        console.log(error)
      })

    }
  },
};

</script>