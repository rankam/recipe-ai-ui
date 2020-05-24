<template><div>
    <span>Missing Ingredients Allowed 
      <el-input-number 
        :value="this.$store.state.allowedMissingIngredients" 
        @change="handleNumberInputChange" 
        :min="0" 
        :max="5"
        size="mini"
        class="missing-ingredients"
        :disabled="this.$store.state.userAvailableRecipeTableLoading">
        </el-input-number></span>
    </div>
</template>

<script>

export default {
  name: 'AllowedMissingIngredientsNumberInput',
  components: {
  },
  methods: {
      handleNumberInputChange(val) {
          this.$store.commit('setAllowedMissingIngredient', val)
          this.$store.dispatch('fetchUserAvailableRecipes', this)

      },
  }
}
</script>
 
<style scoped>
.el-input-number--mini {
    width: 90px;
}
</style>