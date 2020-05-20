<template>
  <div class="split-view">
  <el-row type="flex" class="row-bg">
  <el-col :span="12"><div class="grid-content"><h2 style="text-align: left">All Ingredients</h2></div></el-col>
  <el-col :span="1"><div class="grid-content"></div></el-col>
  <el-col :span="12"><div class="grid-content"><h2 style="text-align: left">My Ingredients</h2></div></el-col>
</el-row>

  <el-row type="flex" class="row-bg">
  <el-col :span="12" class="list-view"><div class="grid-content"><CommonIngredientsTable /></div></el-col>
  <el-col :span="1"><div class="grid-content"></div></el-col>
  <el-col :span="12" class="list-view"><div class="grid-content"><UserIngredientTable /></div></el-col>
</el-row>
</div>
</template>
<script>
import UserIngredientTable from '@/components/UserIngredientTable'
import CommonIngredientsTable from '@/components/CommonIngredientsTable'

export default {
  name: 'CommonIngredientsUserCommonIngredientsListView',
  components: {
    UserIngredientTable,
    CommonIngredientsTable
  },
  mounted: function() {
    let obj = {vm: this, url: this.$store.state.baseUserIngredientURL}
    this.$store.dispatch('fetchUserCommonIngredients', obj)
    this.$store.dispatch('fetchAllCommonIngredients', this)
  },
  methods: {  
  }
}
</script>

<style>
.list-view {
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: .2s;
}
</style>
    
