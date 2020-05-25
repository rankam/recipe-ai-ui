<template>
  <div class="recipe">
  <el-row type="flex" class="row-bg" :gutter=40>
    <el-col :span="12">
        <div class="grid-content" style="text-align: left">
          <h2>{{this.$store.state.userSelectedRecipe.name}}</h2>
        </div>
    </el-col> 
    <el-col :span="12">
      <div class="grid-content" style="text-align: left">
        <h2>Ingredients</h2>
      </div>
    </el-col> 
  </el-row>
  <el-row type="flex" class="row-bg" :gutter=40>
    <el-col :span="12">
      <div class="grid-content">  
        <RecipeForm v-bind:edit=true />
      </div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content">
        <RecipeIngredientTable v-bind:edit=true />
      </div>
    </el-col>
  </el-row>
  </div>
</template>

<script>
import RecipeForm from '@/components/RecipeForm'
import RecipeIngredientTable from '@/components/RecipeIngredientTable'

export default {
  name: 'Recipe',
  components: {
    RecipeIngredientTable,
    RecipeForm
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