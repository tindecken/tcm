<template>
  <div>
    {{tree}}
    {{active}}
  <v-treeview 
    :active.sync="active"
    v-model="tree" 
    :items="tlTreeViewData" 
    item-key="_id"
    item-name="name"
    transition
    selectable
    activatable
  >
    <template slot="prepend" slot-scope="{ item, open, leaf }">
      <v-icon>mdi-folder</v-icon>
    </template>
  </v-treeview>
  
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState  } from "vuex";
import { getTestPlanTree, createCategory } from "../../backend/testplan.js";
export default {
  name: 'test-plan-tree',
  data (){
    return {
      tree: [],
      active: []
    }
  },
  created () {
    getTestPlanTree().then((result) => {
      this.tlTreeViewData = result
      console.log('result',result)
    })
  },
  computed: {
    tlTreeViewData:{
      get () {
        return this.$store.state.testplan.treeViewData
      },
      set(value) {
        this.$store.dispatch("testplan/changeTreeViewData", value);
      }
    },
  }
}
</script>

<style scoped>

</style>