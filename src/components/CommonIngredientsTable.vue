<template>
  
    <div class="table-container" style="border: 1px solid #eee; border-radius:2px">
  <el-table
    :data="this.$store.getters.search(this, search, 'display_name', 'allCommonIngredients.results')"
    style="width: 100%">
    <el-table-column
      label="Name"
      prop="display_name"
      width="300px"
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
          @input="handleSearch"
          />
      </template>
      <template slot-scope="scope"> 
        <el-button
          size="mini"
          type="primary"
          @click="handleAdd(scope)">Add</el-button>
      </template>
          <!--eslint-enable-->
    </el-table-column>
  </el-table> 
  <div class="block">
  <el-pagination
    layout="prev,next"
    :total="this.$store.state.allCommonIngredients.count"
    :page-size="10"
    @next-click="handleNextClick"
    @prev-click="handlePreviousClick">
  </el-pagination>
</div>
</div>
</template>

<style>

</style>
<script>
    // this.$store.state.allCommonIngredients.results.filter(data => !search || data.label.toLowerCase().includes(search.toLowerCase()))

  export default {
    data() {
      return {
        search: '',
      }
    },
    mounted: function() {
      console.log(this.tableData)
    },
    computed: {

    },
    methods: {
      handleAdd(scope) {
        const commonIngredientId = scope.row.label;
        console.log(scope)
        const obj = {vm: this, commonIngredientId}        
        this.$store.dispatch('addUserCommonIngredient', obj)
      },
      handleNextClick: function() {
        this.$store.dispatch('fetchNextAllCommonIngredients', this)
      },
      handlePreviousClick: function() {
        console.log('previous')        
        this.$store.dispatch('fetchPreviousAllCommonIngredients', this)
      },
      handleSearch: function() {
        this.$store.dispatch('searchAndFetchAllCommonIngredients', {vm: this, searchTerm: this.search})
      }       
    },
  }
</script>