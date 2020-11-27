<template>
	<v-flex xs12 sm8 md4>
		<v-col cols="12">
			<router-link to ="/">
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
				<v-toolbar-title>Compte Groupomania</v-toolbar-title>
			</v-toolbar>
			<v-progress-linear v-if ="apiRequest" :indeterminate="true"></v-progress-linear>
			<v-card-text>
				<v-form>
					<v-text-field v-model= "user.email" name="login" label="Email" type="text"></v-text-field>
					<v-text-field v-model="user.password" id="password" name="password" label="Mot de passe" type="password"></v-text-field>
				</v-form>
			</v-card-text>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="#f73b3b" dark large @click= "loginUser">se connecter</v-btn>
				<v-spacer></v-spacer>
			</v-card-actions>
		</v-card>
		<br>
		<p align="center">vous n'avez pas un compte? <a href="/signup#/signup">Créer un compte </a></p>
	</v-flex>
</template>
<script>
import LoginOrSignupLayout from '../Layouts/LoginOrSignupLayout.vue'
export default {
	data() {
		return{
			user :{
				email: this.$route.query.email,
				password : '',

			},
			
			apiRequest:false,
		}
	},

	created(){
		this.$emit(`update:layout`, LoginOrSignupLayout)

	},
	methods:{
		loginUser() {

			this.apiRequest=true;
			this.$http.post(`http://localhost:3000/users/login/`,  this.user)
			.then(response => {
				this.apiRequest=false;
				this.user = response.data
				this.$router.push({path :"/Posts"})

				
			})
			.catch(e => {
				this.errors.push(e)
			})

		},
	}
};
</script>
