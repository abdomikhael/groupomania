<template>
	<v-container fluid  class="mt-15" >
		<div class="edit-form py-3" >
			<v-layout align-center justify-center>
				<v-card color="#F3E5F5">
					<v-card-title>
						<p class="headline">MON PROFILE</p>
					</v-card-title>
					<v-form ref="form">
						<v-card-text>  
							<p >Nom d'utilisateur : {{currentUser.username}}</p>
							<p >E-mail : {{currentUser.email}}</p>
							<p>Bio : {{currentUser.bio}}</p>
						</v-card-text>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn color="error" class="mr-2" @click="deleteUser">
								Supprimer votre compte
							</v-btn>
							<v-btn to="/posts" 
							color="indigo" dark class="mr-2">
							Annuler
						</v-btn>
					</v-card-actions>
				</v-form>
			</v-card>
		</v-layout>
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
	//affichage de profile de l'Utilisateur
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
		})
		.catch((e) => {
			console.log(e);
		})
	},
	//supprimer le profil de l'Utilisateur
	methods:{
		deleteUser() {
			let id= localStorage.getItem("userId")
			this.$http.delete('http://localhost:3000/profile/'+id, {
				headers:{
					Authorization: "Bearer "+ this.token
				}
			})
			.then((response) => {
				console.log(response.data)
				this.$router.push({path: '/logout'})
			})
			.catch(error => {
				console.log(error)
			})
		}
	}
};
</script>