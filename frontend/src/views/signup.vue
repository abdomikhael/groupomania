<template>
	<v-flex xs12 sm8 md4>
		<v-col cols="12">
			<router-link to="/">
				<v-img
				:src="require('../assets/icon.svg')"
				class="my-3"
				contain
				height="75"
				/>
			</router-link>
		</v-col>
		<v-card class="elevation-12">
			<v-toolbar dark color="#f73b3b">
				<v-toolbar-title>Créer un compte Groupomania</v-toolbar-title>
			</v-toolbar>
			<v-progress-linear v-if ="apiRequest" :indeterminate="true"></v-progress-linear>

			<v-card-text>
				<v-form>
					<v-text-field  v-model ="users.username" name="username" label="Nom d'utilisateur" type="text"></v-text-field>
					<v-text-field  v-model ="users.email" name="login" label="Email" type="email"></v-text-field>
					<v-text-field v-model ="users.password" id="password" name="password" label="Mot de passe" type="password"></v-text-field>
					<v-text-field v-model="users.bio" name="bio" label="Bio" type="text"></v-text-field>
					<v-checkbox
					v-model="checkbox"
					:rules="[v => !!v || 'il faut accepter pour continuer!']"
					label="j'accepte les régles"
					required
					></v-checkbox>
				</v-form>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="#f73b3b" dark large @click="createAccount">s'inscrire</v-btn>
					<v-spacer></v-spacer>
				</v-card-actions>
			</v-card-text>	
		</v-card><br>
		<p align="center" >Vous avez un compte? <a href="/login#/login">SE CONNECTER </a></p>
	</v-flex>
</template>
<script>
import LoginOrSignupLayout from '../Layouts/LoginOrSignupLayout.vue'
export default {
	data() {
		return{
			users :{
				username : null,
				email: null,
				bio : null,
				password : null,
			},
			
			checkbox : true,
			apiRequest:false,
		}
	},
	created() {
		this.$emit(`update:layout`, LoginOrSignupLayout)
	},
	methods:{
		

		async createAccount() {
			this.apiRequest=true;

			this.$http.post(`http://localhost:3000/users/signup/`,  this.users)
			.then(response => {
				this.apiRequest=false;
				console.log('response')
				this.users = response.data
				this.$router.push({path: "/login", query: this.email})

				
			})
			.catch(e => {
				this.errors.push(e)
			})



		},
	}
};
</script>
