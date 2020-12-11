<template>
	<v-flex xs12 sm8 md4>
		<v-col cols="12">
			<router-link to="/">
				<v-img
				:src="require('../../assets/icon.svg')"
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
				<v-form
				ref="form"
				v-model="valid"
				lazy-validation>
				<v-text-field  
				v-model ="users.username"   
				required
				:rules="nameRules"
				:counter="15"
				label="Nom d'utilisateur*" 
				type="text"
				></v-text-field>
				<v-text-field  
				v-model ="users.email" 
				name="login" 
				label="Email*" 
				type="email"
				required
				:rules="emailRules"
				>
				></v-text-field>
				<v-text-field 
				v-model ="users.password" 
				id="password"
				label="Mot de passe*" 
				type="password"
				required
				:rules="passwordRules"
				></v-text-field>
				<v-text-field 
				v-model="users.bio" 
				name="bio" 
				label="Bio*" 
				type="text"
				required
				:rules="bioRules"
				></v-text-field>
				<v-checkbox
				v-model="userAgreement"
				label="j'accepte les régles"
				required
				:rules="[(v) => !!v || 'La case doit être couchéé']"
				></v-checkbox>
			</v-form>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="#f73b3b" 
				dark large 
				:disabled="!valid" 
				@click="createAccount"
				>s'inscrire</v-btn>
				<v-btn
				color="warning"
				@click="reset"
				large
				>Réinitialiser</v-btn>		
			</v-card-actions>
		</v-card-text>	
	</v-card><br>
	<p align="center" >Vous avez un compte? <a href="/login">SE CONNECTER </a></p>
</v-flex>
</template>
<script>
import LoginOrSignupLayout from '../user/Layouts/LoginOrSignupLayout.vue'
export default {	
	data() {
		return{
			valid: true,
			users :{
				username : null,
				email: null,
				bio : null,
				password : null,
			},
			nameRules: [
			v => !!v || "Nom d'utilisateur est obligatoire",
			v => (v && v.length <= 15) || "Nom d'utilisateur doit avoir maximum de 15 character"
			],
			emailRules: [
			v => !!v || 'E-mail est obligatoire',
			v => /.+@.+/.test(v) || 'E-mail doit être valid'
			],
			passwordRules: [
			v => !!v || 'Mot de passe est obligatoire',
			v => (v && v.length >= 10) || 'Mot de passe doit avoir au minimum 10 character'
			],
			bioRules: [
			v => !!v || 'bio est obligatoire',
			],
			userAgreement : false,
			apiRequest:false,
			errors :"",
		}
	},
	created() {
		this.$emit(`update:layout`, LoginOrSignupLayout)
	},
	methods:{
		reset () {
			this.$refs.form.reset()
		},
		createAccount () {
			if (this.$refs.form.validate()) {
				this.snackbar = true
				this.apiRequest=true
				this.$http.post(`http://localhost:3000/signup/`,  this.users)
				.then(response => {
					this.$emit("login", response.data)
					this.apiRequest=false;
					this.$router.push({path: "/Posts", query: this.email})
				})
			}
		}
	}
};
</script>