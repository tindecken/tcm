<template>
  <v-app id="app" dark >
    <router-view></router-view>
  </v-app>
</template>

<script>
import * as Database from './backend/Database'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'app',
    updated () {
      this.checkCurrentLogin()
    },
    async created () {
      await Database.get().then(() => {
      })  
      this.checkCurrentLogin()
    },
    methods: {
      checkCurrentLogin(){
        if(!this.currentUser && this.$router.path !== '/'){
          this.$router.push('/login')
        }
      }
    },
    computed: {
      ...mapGetters({ currentUser: 'currentUser'})
    }
  }
</script>

<style>
#app { height: 100% }
</style>

