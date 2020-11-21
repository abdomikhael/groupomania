<template>
	<div>
		<v-toolbar-items class="hidden-sm-and-down">
			<v-spacer></v-spacer>
			<v-btn text to ="/" color ="#f73b3b" dark>Groupomania</v-btn>
			<v-btn text to ="/login" color ="#f73b3b" dark>SE CONNECTER</v-btn>
			<v-btn text to ="/signup" color ="#f73b3b" dark>S'INSCRIRE</v-btn>
		</v-toolbar-items>
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