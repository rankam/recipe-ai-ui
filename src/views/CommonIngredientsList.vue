<template>
<div>
<h1>All Common Ingredients Page</h1>
<CommonIngredientsTable />
</div>
</template>

<script>
import CommonIngredientsTable from '@/components/CommonIngredientsTable'

export default {
  name: 'CommonIngredientsList',
  components: {
    CommonIngredientsTable
  },
  data() {
    return {
    }
  },
  mounted: function() {
      this.$store.dispatch('fetchAllCommonIngredients', this)    
  },
  methods: {
  }
}
</script>