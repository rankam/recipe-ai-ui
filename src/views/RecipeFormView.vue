<template>
  <div>
  <el-row type="flex" class="row-bg" :gutter=40>
  <el-col :span="12"><div class="grid-content" style="text-align: left"><h2>New Recipe</h2></div></el-col> 
  <el-col :span="12"><div class="grid-content" style="text-align: left"><h2>{{this.$store.state.userSelectedRecipe.name}} Ingredients</h2></div></el-col> 
  </el-row>    
  <el-row type="flex" :gutter=40 class="row-bg">
  <el-col :span="12"><div class="grid-content"><RecipeForm /></div></el-col> 
  <el-col :span="12"><div class="grid-content"><RecipeIngredientTable /></div></el-col>
  </el-row>
  </div>
</template>

<script>
import RecipeForm from '@/components/RecipeForm'
import RecipeIngredientTable from '@/components/RecipeIngredientTable'

export default {
  name: 'RecipeFormView',
  components: {
    RecipeForm,
    RecipeIngredientTable
  },
  mounted: function() {
    this.$store.commit('resetUserSelectedRecipe')
    this.$store.commit('resetUserNewIngredient')
  },
  methods: {  
  }
}
</script>
    
