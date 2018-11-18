import * as MutationTypes from '@/store/mutation_types.js'


const state = {
  selectedTab: 'testPlan',
  tlTreeLoaded: true
}

const mutations = {
  [MutationTypes.CHANGETAB] (state, payload){
    state.selectedTab = payload
  },
  [MutationTypes.CHANGETLTREELOADED] (state, payload){
    state.tlTreeLoaded = payload
  }
}

const actions = {
  changeTab ({commit}, payload){
    commit(MutationTypes.CHANGETAB, payload)
  },
  changeTLTreeLoaded ({commit}, payload){
    commit(MutationTypes.CHANGETLTREELOADED, payload)
  },
}

const getters = {
  selectedTab(state){
    return state.selectedTab
  },
  tlTreeLoaded(state){
    return state.tlTreeLoaded
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
