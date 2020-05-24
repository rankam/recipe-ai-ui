<template>
  <div>
  <div class="table-container" style="border: 1px solid #eee; border-radius:2px">
  <el-table
    :data="this.$store.getters.search(this, search, 'display_name', 'userCommonIngredients.results')"
    style="width: 100%"
    >
    <el-table-column
      label="Name"
      prop="display_name"
      width="300px"
      >
    </el-table-column>
    <el-table-column
      align="right"
      > 
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
          type="danger"
          @click="handleDelete(scope)">Delete</el-button>
      </template>
          <!--eslint-enable-->
    </el-table-column>
  </el-table> 
  <div class="block">
  <el-pagination
    layout="prev, next"
    :total="this.$store.state.userCommonIngredients.count"
    :page-size="10"
    @next-click="handleNextClick"
    @prev-click="handlePreviousClick">
  </el-pagination> 
</div>
</div>
</div>
</template>

<style>

</style>
<script>

  export default {
    data() {
      return {
        search: ''
      }
    },
    methods: {
      handleDelete(scope) {
        const userCommonIngredientId = scope.row.id;
        const obj = {vm: this, userCommonIngredientId}
        this.$store.dispatch('removeUserCommonIngredient', obj)
      },
      handleNextClick: function() {
        this.$store.dispatch('fetchNextUserCommonIngredients', this)
      },
      handlePreviousClick: function() {
        this.$store.dispatch('fetchPreviousUserCommonIngredients', this)
      },
      handleSearch: function() {
        this.$store.dispatch('searchAndFetchUserCommonIngredients', {vm: this, searchTerm: this.search})
      }             
    },
  }
</script>