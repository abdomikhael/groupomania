<template>
	<v-app name="app">
		<components :is ="layout">
			<router-view :layout.sync="layout" :token="token" @login="loggedIn" @signup="loggedIn" @logout="loggedOut"/>
		</components>
	</v-app>
</template>
<script>
export default {
	name: 'app',
	components: {
	},
	data() {
		return {
			layout:`div`,  
			token: ""  
		}
	},
	created() {
		this.token =localStorage.getItem("token") || "";
	},
	methods:{
		loggedIn(data){
			console.log(data)
			this.token = data.token
			localStorage.setItem("token", data.token);
			localStorage.setItem("userId", data.userId)
		},
		loggedOut(){
			this.token = ''
			localStorage.setItem("token", "");
			localStorage.setItem("userId","")
		}
	}
};
</script>