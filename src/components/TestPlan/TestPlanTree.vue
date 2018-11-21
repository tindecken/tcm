<template>
  <div>
    {{tree}}
  <v-treeview v-model="tree" :items="tlTreeViewData" item-key="_id"
    selectable transition open-all activatable
  >
    <template slot="prepend" slot-scope="{ item, open, leaf}">
      <v-icon v-if="item.type === 'category'">
        mdi-folder
      </v-icon>
      <v-icon v-else>
        <!-- {{ files[item.file] }} -->
      </v-icon>
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
      tree: []
    }
  },
  created () {
    getTestPlanTree().then((result) => {
      this.tlTreeViewData = result
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