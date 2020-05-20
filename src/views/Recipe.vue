<template>
  <div class="recipe">
    <h1>{{ this.$store.state.userSelectedRecipe.name }}</h1>  
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

  },
  methods: {
   
  }
}
</script>