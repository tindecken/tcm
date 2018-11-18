import * as MutationTypes from '@/store/mutation_types.js'
import { stat } from 'fs';

const state = {
  openedCases: ['1', '2', '3', '4'],
  selectedCase: '3',
  treeViewData:[],
  newCategoryDialog: false,
  removeCategoryDialog: false,
  editCategoryDialog: false,
  propertyCategoryDialog: false,
  selectedNode: ''
}

const mutations = {
  [MutationTypes.CHANGETAB] (state, payload){
    state.selectedCase = payload
  },
  [MutationTypes.CHAGNEOPENEDCASES] (state, payload){
    state.openedCases = payload
  },
  [MutationTypes.CHANGETREEVIEWDATA] (state, payload){
    state.treeViewData = payload
  },
  [MutationTypes.TOGGLENEWCATEGORYDIALOG] (state, payload){
    state.newCategoryDialog = !state.newCategoryDialog
  },
  [MutationTypes.TOGGLEDREMOVECATEGORYDIALOG] (state, payload){
    state.removeCategoryDialog = !state.removeCategoryDialog
  },
  [MutationTypes.TOGGLEDEDITCATEGORYDIALOG] (state, payload){
    state.editCategoryDialog = !state.editCategoryDialog
  },
  [MutationTypes.TOGGLEDPROPERTYCATEGORYDIALOG] (state, payload){
    state.propertyCategoryDialog = !state.propertyCategoryDialog
  },
  [MutationTypes.CHANGESELECTEDNODE] (state, payload){
    state.selectedNode = payload
  }
}

const actions = {
  changeTab ({commit}, payload){
    commit(MutationTypes.CHANGETAB, payload)
  },
  changeOpenedCases ({commit}, payload){
    commit(MutationTypes.CHAGNEOPENEDCASES, payload)
  },
  changeTreeViewData({commit}, payload){
    commit(MutationTypes.CHANGETREEVIEWDATA, payload)
  },
  toggleNewCategoryDialog({commit}, payload){
    commit(MutationTypes.TOGGLENEWCATEGORYDIALOG, payload)
  },
  toggleRemoveCategoryDialog({commit}, payload){
    commit(MutationTypes.TOGGLEDREMOVECATEGORYDIALOG, payload)
  },
  toggleEditCategoryDialog({commit}, payload){
    commit(MutationTypes.TOGGLEDEDITCATEGORYDIALOG, payload)
  },
  togglePropertyCategoryDialog({commit}, payload){
    commit(MutationTypes.TOGGLEDPROPERTYCATEGORYDIALOG, payload)
  },
  changeSelectedNode({commit}, payload){
    commit(MutationTypes.CHANGESELECTEDNODE, payload)
  }    
}

const getters = {
  openedCases (state) {
    return state.openedCases
  },
  selectedCase (state) {
    return state.selectedCase
  },
  newCategoryDialog(state){
    return state.newCategoryDialog
  },
  deleteCategoryDialog(state){
    return state.deleteCategoryDialog
  },
  editCategoryDialog(state){
    return state.editCategoryDialog
  },
  propertyCategoryDialog(state){
    return state.propertyCategoryDialog
  },
  selectedNode(state){
    return state.selectedNode
  },
  tlTreeViewData(state){
    return state.treeViewData
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
