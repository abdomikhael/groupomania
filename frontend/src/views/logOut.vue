<script>
export default {
	created(){

		this.$emit("logout")
		this.$router.push({path : "/"})
	}
}
</script>