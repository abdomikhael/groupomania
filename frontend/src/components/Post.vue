<template>
	<v-card @click="$router.push({ path: '/post/'+post.id})"

	class=" mt-3" >
	<v-card-text >
		<p>	Publié par {{user.username}}</p>
		<h3 class=" font-weight-light"> 

		{{post.title}}</h3>


		<p  class="font-weight-regular">   
		{{post.content}}</p>

	</v-card-text>
</v-card>

</template>
<script>
export default {
	name: 'Post',
	props:["post"], 
	data() {
		return{
			user :{}
		}
	},
	created() {
		this.$http.get(`http://localhost:3000/profile/`+this.post.fk_user,
    {
      headers:{
        Authorization: "Bearer "+ localStorage.getItem("token")
      }, 
    })
    .then((response) => {
      this.user= response.data;
     })
    .catch((e) => {
      console.log(e);
    });

	
	}

};

</script>