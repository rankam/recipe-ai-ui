<template>
  <div class="ingredients">
    <h1>My Ingredients ({{this.$store.state.userCommonIngredients.count}})</h1>      
    <UserIngredientTable />
  </div>
</template>

<script>
import UserIngredientTable from '@/components/UserIngredientTable'

export default {
  name: '',
  components: {
    UserIngredientTable
  },
  mounted: function() {
    let obj = {vm: this, url: this.$store.state.baseUserIngredientURL}
    this.$store.dispatch('fetchUserCommonIngredients', obj)
  },
  methods: {  
  }
}
</script>
    
