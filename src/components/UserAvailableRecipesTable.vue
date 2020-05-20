<template>
  <div>
    <div>
      <el-input-number 
        :value="this.$store.state.allowedMissingIngredients" 
        @change="handleNumberInputChange" 
        :min="0" 
        :max="5"
        size="mini"></el-input-number>
    </div>
  <el-table
    :data="this.$store.getters.search(this, search, 'name', 'userAvailableRecipes.results')"
    style="width: 100%"
    @cell-click="handleCellClick">
    <el-table-column
      label="Name"
      prop="name"
      >
    </el-table-column>
    <el-table-column
      label="Missing Ingredients"
      prop="num_missing_ingredients"
      >
    </el-table-column>
    <el-table-column
      label="Calories"
      prop="calories"
      >
    </el-table-column>        
    <el-table-column
      align="right"> 
    <!-- eslint-disable -->
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="Type to search"
          @input="handleSearch" />
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
  <div class="block">
    <el-pagination
      layout="prev, next"
      :total="66"
      :page-size="10"
      @next-click="handleNextClick"
      @prev-click="handlePreviousClick"
      >
    </el-pagination>
  </div>   
  </div>   
</template>


<script>

  export default {
    data() {
      return {
        search: '',
      }
    },
    methods: {
      /* eslint-disable */      
      handleCellClick(row, column, cell, event) {
        this.$router.push(`/recipe/${row.id}`)
      },
      /* eslint-enable */
      handleNumberInputChange(val) {
          this.$store.commit('setAllowedMissingIngredient', val)
          this.$store.dispatch('fetchUserAvailableRecipes', this)

      },
      handleEdit(scope) {
        console.log(scope.$index, scope.row.common_ingredient);
      },      
      handleDelete(scope) {
        console.log(scope.$index, scope.row);
      },
      handleNextClick: function() {
          this.$store.dispatch('fetchNextUserAvailableRecipes', this)
      },
      handlePreviousClick: function() {
          this.$store.dispatch('fetchPreviousUserAvailableRecipes', this)
      },
      handleSearch: function() {
        this.$store.dispatch('searchAndFetchUserAvailableRecipes', {vm: this, searchTerm: this.search})        
      }    
    },
  }
</script>
<style>
.cell {
  cursor: pointer ;
}
</style>


