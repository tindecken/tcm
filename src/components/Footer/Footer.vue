<template>
	<v-container>
		footer
	</v-container>
</template>

<script>
  export default {
    name: 'footer',
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
