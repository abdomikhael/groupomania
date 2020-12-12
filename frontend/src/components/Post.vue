<template>
	<v-card  color="#F3E5F5" @click="$router.push({ path: '/post/'+post.id})" 
	class=" mt-3" >
	<v-card-text>
		<p>	Publié par {{(user) ? user.username : ''}}</p>
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
			user :{
				username :"",
			},
		}
	},
	mounted() {
		if(!this.post){
			return
		}
		this.$http.get(`http://localhost:3000/profile/`+this.post.fk_user,
		{
			headers:{
				Authorization: "Bearer "+ localStorage.getItem("token")
			}, 
		})
		.then((response) => {
			this.user= response.data;
			console.log(this.user);
		})
		.catch((e) => {
			console.log(e);
		});
	}

};
</script>