<template>
	<div>
		<helloWorld/>
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import DashboardLayout from '../Layouts/DashboardLayout.vue'

export default {
	name: 'Home',
	components: {
		HelloWorld,

	},
	created(){
		this.$emit(`update:layout`, DashboardLayout)
	}
};
</script>
