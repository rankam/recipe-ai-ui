<template>
<div>
  <el-row type="flex" class="row-bg">
      <el-col :span="12"><div class="grid-content"><h2 style="text-align: left">Ingredients</h2></div></el-col>
      <el-col :span="1"><div class="grid-content"></div></el-col>
      <el-col :span="12"><div class="grid-content" style="text-align: right;margin-top: 2.83em;">{{this.$store.state.allCommonIngredients.count}} Ingredients</div></el-col>
      </el-row>  
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