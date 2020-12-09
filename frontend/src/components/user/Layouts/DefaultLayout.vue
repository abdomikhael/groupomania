<template>
	<div>
		<v-toolbar  fluid color ="#f73b3b"  dark class="my-4 mt-0">
			
				<v-img
				:src="require('../../../assets/icon.svg')"
				class="my-4"
				contain
				height="65"
				/>

				<v-toolbar-title>Groupomania</v-toolbar-title>

				<v-spacer></v-spacer>
				<v-btn text to ="/" dark>Groupomania</v-btn>
				<v-btn text to ="/login" dark>SE CONNECTER</v-btn>
				<v-btn text to ="/signup"  dark>S'INSCRIRE</v-btn>
		
		</v-toolbar>
		<v-main>
			<slot/>
		</v-main>
		<v-footer class="pa-3" color ="#f73b3b" dark fixed>
			<v-spacer></v-spacer>
			<div>Groupomania &copy; {{ new Date().getFullYear() }}</div>
			<v-spacer></v-spacer>
		</v-footer>
	</div>
</template>
<script>

export default {
	name: 'DefaultLayout',
	
};
</script>