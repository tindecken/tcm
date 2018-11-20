import * as MutationTypes from '@/store/mutation_types.js'


const state = {
  selectedTab: 'testPlan',
  tlTreeLoaded: true,
  theme: 'dark'
}

const mutations = {
  [MutationTypes.CHANGETAB] (state, payload){
    state.selectedTab = payload
  },
  [MutationTypes.CHANGETLTREELOADED] (state, payload){
    state.tlTreeLoaded = payload
  },
  [MutationTypes.switchTheme] (state, payload){
    if(state.theme === 'dark'){
      state.theme = 'light'
    }else{
      state.theme = 'dark'
    }
  }
}

const actions = {
  changeTab ({commit}, payload){
    commit(MutationTypes.CHANGETAB, payload)
  },
  changeTLTreeLoaded ({commit}, payload){
    commit(MutationTypes.CHANGETLTREELOADED, payload)
  },
  switchTheme({commit}, payload){
    commit(MutationTypes.switchTheme, payload)
  }
}

const getters = {
  selectedTab(state){
    return state.selectedTab
  },
  tlTreeLoaded(state){
    return state.tlTreeLoaded
  },
  theme(state){
    return state.theme
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
