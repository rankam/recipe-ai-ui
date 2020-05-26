<template>
  <div>
    <div
      class="table-container"
      style="border: 1px solid #eee; border-radius:2px"
    >
      <el-table
        :data="
          this.$store.getters
            .search(this, search, 'name', 'userAvailableRecipes.results')
            .slice(this.one, this.two)
        "
        style="width: 100%"
        @cell-click="handleCellClick"
        v-loading="this.$store.state.userAvailableRecipeTableLoading"
        size="mini"
      >
        <el-table-column label="Name" prop="name" :sortable="true">
        </el-table-column>
        <el-table-column
          label="Missing Ingredients"
          prop="num_missing_ingredients"
          :sortable="true"
        >
        </el-table-column>
        <el-table-column label="Calories" prop="calories" :sortable="true">
        </el-table-column>
        <el-table-column label="Protein" prop="protein" :sortable="true">
        </el-table-column>
        <el-table-column align="right">
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

export default {
  created: function() {
  },
  data() {
    return {
      search: "",
      page: 0,
      one: 0,
      two: 10,
    };
  },
  methods: {
    /* eslint-disable */
    handleCellClick(row, column, cell, event) {
      this.$router.push(`/recipe/${row.id}`);
    },
    /* eslint-enable */
    handleDelete(scope) {
      console.log(scope.$index, scope.row);
    },
    handleNextClick: function() {
      // this.$store.dispatch('fetchNextUserAvailableRecipes', this)
      this.page = this.page + 1;
      this.one = this.page * 10;
      this.two = this.page * 10 + 10;
    },
    handlePreviousClick: function() {
      this.page = this.page - 1;
      this.one = this.page * 10;
      this.two = this.page * 10 + 10;
    },
    handleSearch: function() {
      // this.$store.dispatch('searchAndFetchUserAvailableRecipes', {vm: this, searchTerm: this.search})
    },
  },
};
</script>
<style>
.cell {
  cursor: pointer;
}
</style>
