<template>
    <div class="recipe-content">
        <h2>Available Recipes ({{this.$store.state.userAvailableRecipes.count}})</h2>
        <UserAvailableRecipesTable />
    </div>
</template>

<script>
import UserAvailableRecipesTable from '@/components/UserAvailableRecipesTable'

export default {
  name: 'UserAvailableRecipes',
  components: {
    UserAvailableRecipesTable
  },
  created: function() {
    this.$store.dispatch('fetchUserAvailableRecipes', this)
  },
  data: function() {
    return {
        ready: false
    }
  },
  methods: {


  }
}
</script>
 
<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>