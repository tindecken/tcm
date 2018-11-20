<template>
  <v-app app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      right
      app
      stateless
    >
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
    </v-navigation-drawer>
    <v-toolbar fixed app>
      <v-spacer></v-spacer>
      <v-toolbar-title>Settings</v-toolbar-title>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <Split :gutterSize="2">
        <SplitArea :size="25">
          <div>
            <v-tabs
              slot="extension" v-model="tab" grow>
              <v-tabs-slider></v-tabs-slider>
              <v-tab v-for="item in items" :key="item">
                {{ item }}
              </v-tab>
            </v-tabs>
          </div>
          <v-tabs-items v-model="tab">
            <v-tab-item v-for="item in items" :key="item">
              <v-card flat>
                <v-card-text>{{ text }}</v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </SplitArea>
        <SplitArea :size="75">
          
        </SplitArea>
      </Split>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppFooter from './Footer/AppFooter'
export default {
  components: { AppFooter },
  data: () => ({
    theme: "dark",
    drawer: null,
    tab: null,
    items: ["test plan", "test lab"],
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }),
  props: {
    source: String
  }
};
</script>

<style>
</style>
