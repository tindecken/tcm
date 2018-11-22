<template>
  <v-list>
    <v-list-tile  @click="switchTheme()">
      <v-list-tile-action>
        <v-icon>compare_arrows</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>Switch Theme</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-divider></v-divider>
    <v-list-tile  @click="logout()">
      <v-list-tile-action>
        <v-icon>mdi-exit-run</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>Logout</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-divider></v-divider>
  </v-list>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'nav-drawer',
		data (){
			return {
			}
		},
    methods: {
      switchTheme () {
          this.$store.dispatch("switchTheme")
      },
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      logout () {
        this.$router.push('/logout')
      }
    }
  }
</script>

<style scoped>
</style>
