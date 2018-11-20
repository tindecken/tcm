<template>
  <v-list subheader two-line>
        <v-subheader>Theme</v-subheader>
        <v-list-tile>
          <v-list-tile-action>
            <v-radio-group v-model="theme" row>
              <v-radio label="Dark" value="dark" mr-5></v-radio>
              <v-radio label="Light" value="light"></v-radio>
            </v-radio-group>
          </v-list-tile-action>
        </v-list-tile>
            <!-- <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>
            Theme
          </v-list-tile-title>
          <v-radio-group v-model="theme" row>
                <v-radio label="Dark" value="dark"></v-radio>
                <v-radio label="Light" value="light"></v-radio>
              </v-radio-group>
          </v-list-tile>  -->
        <!-- <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Theme</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-radio-group v-model="theme" row>
              <v-radio label="Dark" value="dark"></v-radio>
              <v-radio label="Light" value="light"></v-radio>
            </v-radio-group>
          </v-list-tile-action>
        </v-list-tile> -->
      </v-list>
</template>

<script>
  export default {
    name: 'nav-drawer',
		data (){
			return {
        theme: "dark",
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
