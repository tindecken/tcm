<template>
	<v-container>
		<v-layout>
			<v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
        <v-text-field
          type="password"
          v-model="password"
          :rules="passwordRules"
          label="Password"
          required
        ></v-text-field>
        <v-btn
          :disabled="!valid"
          @click="login"
        >
          Login
        </v-btn>
        <v-btn @click="clear">clear</v-btn>
      </v-form>
		</v-layout>
	</v-container>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { authen } from '../backend/services'
import { constants } from 'http2';

  export default {
    name: 'login',
		data: () => ({
      valid: true,
      password: 'rivaldo',
      passwordRules: [
        v => !!v || 'Password is required',
      ],
      email: 'thaihoang.nguyen@acomsolutions.com',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
    }),
		updated () {
			this.checkCurrentLogin()
		},
		created () {
      this.checkCurrentLogin()
		},
    methods: {
      clear () {
        this.$refs.form.reset()
      },
			login() {
				authen(this.email, this.password).then((result)=> {
					if(result) this.loginSuccessful(result.token)
					else this.loginFailed()
				}).catch((err) => {
          console.log('err', err)
        })
			},
			loginSuccessful (token) {
				if (!token) {
					this.loginFailed()
					return
				}

				localStorage.token = token
				this.$store.dispatch('login')
				this.$router.replace(this.$route.query.redirect || '/home')
			},
			loginFailed () {
				this.form.error = 'Login failed!'
				this.$store.dispatch('logout')
				delete localStorage.token
			},
			checkCurrentLogin () {
				if (this.currentUser) this.$router.replace(this.$route.query.redirect || '/home')
			},
		},
		computed: {
			...mapGetters({ currentUser: 'currentUser'})
		}
  }
</script>

<style scoped>

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
</style>
