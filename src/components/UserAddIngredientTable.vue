<template>
  <div>
<div class="table-container" style="padding-top: 20px; border: 1px solid #eee; border-radius:2px">    
  <el-row type="flex" class="row-bg">
    <el-col :span="1"><div class="grid-content"></div></el-col>
    <el-col :span="11"><div class="grid-content">
      </div>
      <el-form label-position="left" label-width="130px" :model="recipe">
        <el-form-item label="Recipe Name">
          <el-input v-model="recipe.name" @input="handleChange"></el-input>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="12"><div class="grid-content"></div></el-col>
  </el-row>

  <el-row type="flex" class="row-bg">
    <el-col :span="1"><div class="grid-content"></div></el-col>
    <el-col :span="11"><div class="grid-content">
    </div>
      <el-form label-position="left" label-width="130px" :model="recipe">
        <el-form-item label="Add Ingredient">
          <el-input v-model="ingredient.name" @input="handleSearch"></el-input>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col  :span="12"><div class="grid-content"></div></el-col>
  </el-row>
  <el-row type="flex" class="row-bg" :gutter=40 style="padding-bottom: 20px">
    <el-col :span="1"><div class="grid-content"> </div></el-col> 
    <el-col :span="12">
      <div class="grid-content">  
        <IngredientDisplayTable />
      </div>
    </el-col>
    <el-col :span="10">
      <div class="grid-content">  
      </div>
    </el-col>    
  <el-col :span="1"><div class="grid-content">  </div></el-col>
</el-row>
</div>
</div>
</template>

<style>

</style>
<script>
import IngredientDisplayTable from '@/components/IngredientDisplayTable'

  export default {
    components: {
      IngredientDisplayTable
    },
    data() {
      return {
        search: '',
        recipe: {
          name: ''
        },
        ingredient: {
          name: this.$store.state.userNewIngredient.name,
        }
      }
    },
    mounted: function() {
    },

    methods: {
      handleNextClick: function() {
        this.$store.dispatch('fetchNextAllCommonIngredients', this)
      },
      handlePreviousClick: function() {
        console.log('previous')        
        this.$store.dispatch('fetchPreviousAllCommonIngredients', this)
      },
      handleSearch: function(val) {
        this.$store.commit('setUserNewIngredientName', val);
        if (this.$store.state.userNewIngredient.name.length > 2) {
          this.$store.dispatch('classifyIngredient', {
            vm: this, 
            ingredient_name: this.$store.state.userNewIngredient.name.toLowerCase()
          })          
        }
        // this.$store.dispatch('searchAndFetchAllCommonIngredients', {vm: this, searchTerm: this.search})
      },
      handleChange: function(val) {
        this.recipe.name = val;
        if (this.recipe.name == '') {
          this.$store.commit('setUserNewRecipeName', 'Add New Recipe')
        } else {
          this.$store.commit('setUserNewRecipeName', this.recipe.name)
        }
        
      }      
    },
  }
</script>