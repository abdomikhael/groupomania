<template>
	<div>
		<helloWorld/>
	</div>
</template>

<script>
// @ is an alias to /src

import DefaultLayout from '../Layouts/DefaultLayout.vue'
import HelloWorld from '../components/HelloWorld.vue'

export default {
	name: 'Home',
	components: {
		HelloWorld

	},
	created(){
		this.$emit(`update:layout`, DefaultLayout)
	}
};
</script>
