<template>
  <v-footer app>
    <v-spacer></v-spacer>
    <span class="white--text">Tindecken &copy; 2018</span>
  </v-footer>
</template>

<script>
  export default {
    name: 'app-footer',
		data (){
			return {
			}
		},
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style scoped>
</style>
