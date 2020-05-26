<template>
  <div class="table-container" style="border: 1px solid #eee; border-radius:2px">
  <el-table
    size="mini"
    :data="this.$store.getters.search(this, search, 'name', 'userSelectedRecipe.ingredients')"
    :highlight-current-row=true  
    @row-click="handleEdit">
    <el-table-column
      label="Name"
      prop="name"
      :sortable=true
      >
    </el-table-column>
    <el-table-column
      label="Available"
      prop="is_available"
      :sortable=true
      >
    </el-table-column> 
    <el-table-column
      label="Units"
      prop="units"
      :sortable=true>
    </el-table-column> 
    <el-table-column
      label="Type"
      prop="unit_type"
      width="90px"
      :sortable=true>
    </el-table-column>
    <el-table-column
    > 
    <!-- eslint-disable -->
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="Type to search"/>
      </template>
      <template slot-scope="scope"> 
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope)">Delete</el-button>
      </template>
          <!--eslint-enable-->
    </el-table-column>
  </el-table> 
</div>
</template>


<script>

  export default {
    props: {
      edit: Boolean
    },
    data() {
      return {
        search: '',
        editProp: this.edit,
      }
    },
    mounted: function() {     
    },
    methods: {
      handleEdit(row) {
        const ingredient = row;
        if (this.editProp === true) {
            this.$store.commit('setUserSelectedIngredient', ingredient)  
        } else {
            this.$store.commit('setUserNewIngredient', ingredient)  
        }
        
      },
      handleDelete(scope) {
        this.$store.dispatch('removeIngredientRecipe', {
          vm: this, 
          recipe_id: this.$store.state.userSelectedRecipe.id, 
          ingredient_id: scope.row.id
        })
      }
    },
  }
</script>