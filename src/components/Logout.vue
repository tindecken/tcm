<template>
</template>
<script>
	import { mapGetters } from 'vuex'
  export default {
    name: 'logout',
		created () {
			delete localStorage.token
			this.$store.dispatch('logout')
			this.$router.push('/')
		}
  }
</script>

<style scoped>

</style>