<template>
  <div>

  <div class="table-container" style="border: 1px solid #eee; border-radius:2px">

  <el-table
    :data="this.$store.getters.search(this, search, 'name', 'userAvailableRecipes.results').slice(this.one, this.two)"
    style="width: 100%"
    @cell-click="handleCellClick"
    v-loading="this.$store.state.userAvailableRecipeTableLoading">
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
      label="Protein"
      prop="protein"
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
      :total="this.$store.state.userAvailableRecipes.count"
      :page-size="10"
      @next-click="handleNextClick"
      @prev-click="handlePreviousClick"
      >
    </el-pagination>
  </div>   
  </div>   
  </div>   
</template>


<script>
// import debounce from 'debounce';

  export default {
    created: function() {
      // this.handleSearch = debounce(this.handleSearch, 100)
    },
    data() {
      return {
        search: '',
        page: 0,
        one: 0,
        two: 10,
      }
    },
    methods: {
      /* eslint-disable */      
      handleCellClick(row, column, cell, event) {
        this.$router.push(`/recipe/${row.id}`)
      },
      /* eslint-enable */
      handleEdit(scope) {
        console.log(scope.$index, scope.row.common_ingredient);
      },      
      handleDelete(scope) {
        console.log(scope.$index, scope.row);
      },
      handleNextClick: function() {
          // this.$store.dispatch('fetchNextUserAvailableRecipes', this)
        this.page = this.page + 1
        this.one = this.page * 10
        this.two = (this.page * 10) + 10
      },
      handlePreviousClick: function() {
          this.page = this.page - 1
          this.one = this.page * 10
          this.two = (this.page * 10) + 10
          // this.$store.dispatch('fetchPreviousUserAvailableRecipes', this)
      },
      handleSearch: function() {
        // this.$store.dispatch('searchAndFetchUserAvailableRecipes', {vm: this, searchTerm: this.search})

      }    
    },
  }
</script>
<style>
.cell {
  cursor: pointer ;
}
</style>


