<template>
  <div class="table-container" style="border: 1px solid #eee; border-radius:2px">
  <el-table
    :data="this.$store.getters.search(this, search, 'name', 'userSelectedRecipe.ingredients')"
    style="width: 100%"
    :highlight-current-row=true  >
    <el-table-column
      label="Name"
      prop="name"
      width="250px"
      >
    </el-table-column>
    <el-table-column
      label="Available"
      prop="is_available"
      >
    </el-table-column> 
    <el-table-column
      label="Units"
      prop="units">
    </el-table-column> 
    <el-table-column
      label="Type"
      prop="unit_type">
    </el-table-column>
<!--     <el-table-column
      label="Calories"
      prop="nuts.calories"> 
    </el-table-column>  -->    
<!--     <el-table-column
      label="Protein"
      prop="nuts.protein">
    </el-table-column>   -->             
<!--     <el-table-column
      label="Confidence"
      prop="confidence">
    </el-table-column>  -->      
    <el-table-column
      align="right"
      width="180"
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
          @click="handleEdit(scope)">Edit</el-button>
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
      handleEdit(scope) {
        // console.log(scope.$index, scope.row.common_ingredient);
        console.log(scope.row)
        const ing = this.$store.getters.ingredientRecipe(scope.row.id)
        console.log('ing is', ing)
        if (this.editProp === true) {
            this.$store.commit('setUserSelectedIngredient', ing)  
        } else {
            this.$store.commit('setUserNewIngredient', ing)  
        }
        
        // this.$store.commit('setUserNewIngredientName', ing.name)

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