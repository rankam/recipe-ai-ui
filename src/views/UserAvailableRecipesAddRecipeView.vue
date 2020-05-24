<template>
  <div class="split-view">
  <el-row type="flex" class="row-bg" :gutter="40">
  <el-col :span="6"><div class="grid-content"><h2 style="text-align: left">Available Recipes</h2></div></el-col>
  <el-col :span="6"><div class="grid-content" style="text-align: right;margin-top: 2.03em;"><AllowedMissingIngredientsNumberInput /></div></el-col>  
  <el-col :span="6"><div class="grid-content"><h2 style="text-align: left">Create Recipe</h2></div></el-col>
   <el-col :span="6"><div class="grid-content" style="text-align: right;margin-top: 2.83em;"></div></el-col> 
</el-row>

  <el-row type="flex" class="row-bg" :gutter="40">
  <el-col :span="12" class="list-view"><div class="grid-content"><UserAvailableRecipesTable /></div></el-col>
  <el-col :span="12" class="list-view"><div class="grid-content"><RecipeForm /></div></el-col>


</el-row>
</div>
</template>
<script>
import RecipeForm from '@/components/RecipeForm'
import UserAvailableRecipesTable from '@/components/UserAvailableRecipesTable'
import AllowedMissingIngredientsNumberInput from '@/components/AllowedMissingIngredientsNumberInput'

export default {
  name: 'UserAvailableRecipesAddRecipeView',
  components: {
    RecipeForm,
    UserAvailableRecipesTable,
    AllowedMissingIngredientsNumberInput
  },
  mounted: function() {
    if (this.$store.state.userAvailableRecipes.results.length === 0) {
      this.$store.dispatch('fetchUserAvailableRecipes', this)  
    }    
    // let obj = {vm: this, url: this.$store.state.baseUserIngredientURL}
    // this.$store.dispatch('fetchUserCommonIngredients', obj)
    // this.$store.dispatch('fetchAllCommonIngredients', this)
  },
  methods: {  
  }
}
</script>

    
