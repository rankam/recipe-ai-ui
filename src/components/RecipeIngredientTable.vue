<template>
  <div class="table-container" style="border: 1px solid #eee; border-radius:2px">
  <el-table
    :data="this.$store.getters.search(this, search, 'name', 'userSelectedRecipe.ingredients')"
    style="width: 100%">
    <el-table-column
      label="Name"
      prop="display_name"
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
      align="right"> 
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
<!--         <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope)">Delete</el-button> -->
      </template>
          <!--eslint-enable-->
    </el-table-column>
  </el-table> 
</div>
</template>


<script>

  export default {
    data() {
      return {
        search: ''
      }
    },
    mounted: function() {     
    },
    methods: {
      handleEdit(scope) {
        console.log(scope.$index, scope.row.common_ingredient);
      },
      handleDelete(scope) {
        console.log(scope.$index, scope.row);
      }
    },
  }
</script>