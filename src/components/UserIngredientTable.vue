<template>
  <div>
  <el-table
    :data="this.$store.getters.search(this, search, 'common_ingredient', 'userCommonIngredients.results')"
    style="width: 100%">
    <el-table-column
      label="Name"
      prop="common_ingredient"
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
    :total="66"
    :page-size="8"
    @next-click="handleNextClick"
    @prev-click="handlePreviousClick">
  </el-pagination>
</div>
</div>
</template>


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