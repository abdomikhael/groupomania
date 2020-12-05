<template>
  <v-container fluid  class="mt-15" >
   <div class="edit-form py-3" >
    <v-card>
      <v-card-title>
        <p class="headline">MON PROFILE</p>
      </v-card-title>
      <v-form ref="form">
       <v-card-text>
        <v-label="Nom d'utilisateur"       
        ></v-label>
        
        <v-model="currentUser.username"></v-model="currentUser.username">

        <v-text-field
        v-model="currentUser.email"
        label="E-mail"
        ></v-text-field>
        <v-text-field
        v-model="currentUser.bio"
        label="Bio"      
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
       <v-spacer></v-spacer>
       <v-btn color="error" small class="mr-2" @click="deletePost">
        Supprimer votre compte
      </v-btn>
    </v-card-actions>
  </v-form>
</v-card>
</div>
</v-container>
</template>
<script>
export default {
  name: 'profile',
  props:["token"],
  data() {
    return {
      currentUser:{

      },
      fk_user: localStorage.getItem("userId"),

    }

  },
  mounted() {  
    let  id= localStorage.getItem("userId")
    this.$http.get(`http://localhost:3000/profile/`+id,
    {
      headers:{
        Authorization: "Bearer "+ this.token
      }, 
    })
    .then((response) => {
      this.currentUser= response.data;
      console.log(response.data);
    })
    .catch((e) => {
      console.log(e);
    })
  },
};
</script>