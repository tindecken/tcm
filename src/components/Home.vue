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
      <span>Hi, {{ currentUser.name }}</span>
      <!-- <v-toolbar-title>Settings</v-toolbar-title> -->
      
      <v-toolbar-side-icon @click.stop="drawer = !drawer"><v-icon>settings</v-icon></v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <Split :gutterSize="2">
        <SplitArea :size="25">
          <div>
            <v-tabs
              slot="extension" v-model="tabSelected" grow>
              <v-tabs-slider></v-tabs-slider>
              <v-tab>Test Plan</v-tab>
              <v-tab>Test Lab</v-tab>
            </v-tabs>
          </div>
          <v-tabs-items v-model="tabSelected">
            <v-tab-item>
              <test-plan-tree></test-plan-tree>
            </v-tab-item>
            <v-tab-item>
              Test Lab Tree
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
import { mapGetters } from 'vuex'
import AppFooter from './Footer/AppFooter'
import NavDrawer from './NavigationDrawer/NavigationDrawer'
import TestPlanTree from './TestPlan/TestPlanTree'
export default {
  components: { AppFooter, NavDrawer, TestPlanTree },
  data: () => ({
    drawer: null,
    tabSelected: 0,
    items: ["test plan", "test lab"],
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }),
  props: {
    source: String
  },
  methods: {
    open (link) {
      this.$electron.shell.openExternal(link)
    }
  },
  computed: {
			...mapGetters({ currentUser: 'currentUser' })
		}
};
</script>

<style>
</style>
