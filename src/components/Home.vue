<template>
  <v-app app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      right
      app
      stateless
    >
      <nav-drawer></nav-drawer>
      
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
import NavDrawer from './NavigationDrawer/NavigationDrawer'
export default {
  components: { AppFooter, NavDrawer },
  data: () => ({
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
