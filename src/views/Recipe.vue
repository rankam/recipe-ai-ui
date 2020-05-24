<template>
  <div class="recipe">
  <el-row type="flex" class="row-bg">
  <el-col :span="12"><div class="grid-content"><h2 style="text-align: left">{{ this.$store.state.userSelectedRecipe.name }}</h2></div></el-col>
  <el-col :span="1"><div class="grid-content"></div></el-col>
  <el-col :span="12">
    <div class="grid-content" style="text-align: right;margin-top: 2.83em;">

      {{this.$store.state.userSelectedRecipe.calories}} Calories
    </div>
  </el-col>
</el-row>     
    
    <RecipeIngredientTable />     
  </div>
</template>

<script>
import RecipeIngredientTable from '@/components/RecipeIngredientTable'

export default {
  name: 'Recipe',
  components: {
    RecipeIngredientTable
  },
  data() {
    return {
      
    }
  },
  mounted: function() {    
      const recipeId = this.$router.history.current.params.id;
      let recipe = this.$store.getters.recipe(recipeId);
      if (recipe != null) {
        this.$store.commit('setUserSelectedRecipe', recipe)
      } else {
        this.$store.dispatch('fetchUserSelectedRecipe', {vm: this, recipeId})
      } 
  },
  methods: {
   
  }
}
</script>