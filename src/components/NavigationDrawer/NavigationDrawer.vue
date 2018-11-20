<template>
  <v-list>
        <v-list-tile  @click="switchTheme()">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
            <!-- <v-list-tile-content>Switch theme</v-list-tile-content> -->
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Switch Theme
            </v-list-tile-title>
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
      }
    }
  }
</script>

<style scoped>
</style>
