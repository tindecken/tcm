import * as MutationTypes from '@/store/mutation_types.js'
import User from '@/models/User'


const state = {
  user: User.from(localStorage.token)
}

const mutations = {
  [MutationTypes.LOGIN] (state){
    state.user = User.from(localStorage.token)
  },
  [MutationTypes.LOGOUT] (state){
    state.user = null
  }
}

const actions = {
  login ({commit}){
    commit(MutationTypes.LOGIN)
  },
  
  logout ({commit}){
    commit(MutationTypes.LOGOUT)
  }
}

const getters = {
  currentUser(state){
    return state.user
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
