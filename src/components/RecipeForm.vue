<!-- TODO -->

<!-- indicate that the right hand table is the ingredients for the recipe -->
<template>
  <div>
<el-row>
<div class="table-container" style="padding-top: 20px; border: 1px solid #eee; border-radius:2px; padding-bottom: 10px">    
  <el-row type="flex" class="row-bg">
    <el-col :span="1"><div class="grid-content"></div></el-col>
    <el-col :span="15"><div class="grid-content">
      </div>
      <el-form label-position="left" label-width="130px" :model="recipe">
        <el-form-item label="Recipe Name">
          <el-input v-model="recipe.name" @input="handleChange" size="mini"></el-input>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="8"><div class="grid-content"></div></el-col>
  </el-row>

  <el-row type="flex" class="row-bg">
    <el-col :span="1"><div class="grid-content"></div></el-col>
    <el-col :span="15"><div class="grid-content">
    </div>
      <el-form label-position="left" label-width="130px" :model="recipe">
        <el-form-item label="Add Ingredient">
          <el-input :disabled="this.recipe.name.length == 0" v-model="ingredient.name" @input="handleSearch" size="mini"></el-input>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col  :span="8"><div class="grid-content"></div></el-col>
  </el-row>
  <el-row type="flex" class="row-bg">
    <el-col :span="1"><div class="grid-content"> </div></el-col> 
    <el-col :span="24">
      <div class="grid-content">  
  <div style="text-align: left">
    
    <div><div>
      <el-form label-position="left" label-width="130px">
        
        <el-form-item label="Quantity:">

    <el-input-number :disabled="this.recipe.name.length == 0" v-model="units" size="mini" :min="0" ></el-input-number>
</el-form-item>
</el-form>
  </div><div>

      <el-form label-position="left" label-width="130px">
        
        <el-form-item label="Measure Unit:">
    <el-select :disabled="this.recipe.name.length == 0" v-model="measurement" placeholder="Select" size="mini">
        <el-option
          v-for="measurement in this.$store.state.ingredientMeasurementTypes"
          :key="measurement"
          :value="measurement">
        </el-option>
      </el-select>
</el-form-item>
</el-form>
    </div>
    </div>
</div>
  <div class="table-container">
    <el-table
      :data="this.$store.state.userNewIngredient.common_ingredient.nutrients"
      v-loading="this.loading"
      :class="this.nutrientTableStyle">

      <el-table-column
        prop="name"
        :label="this.ingredient.common_ingredient.display_name"
        width="300px"
        >
        <!-- eslint-disable -->
      </el-table-column>

      <el-table-column
        align="right"
        prop="amount">
        <template slot="header" slot-scope="scope">
          <el-button
            :disabled="recipe.name.length == 0"
            size="mini"
            @click="handleAddIngredient">Add to Recipe</el-button>
        </template>
      </el-table-column>
        <!-- eslint-enable -->
    </el-table>   
  </div>
      </div>
    </el-col>
    <el-col :span="1">
      <div class="grid-content">  
      </div>
    </el-col>    
</el-row>
</div>
</el-row>
</div>

</template>
<script>

  export default {
    name: 'RecipeForm',
    components: {
    },    
    data() {
      return {
        form: {
          name: ''
        },
        searchTerm: '',
        recipe: {
          name: ''
        },
        ingredient: {
          name: '',
          common_ingredient: {
            display_name: this.$store.state.userNewIngredient.common_ingredient.display_name
          }
        },
        units: 1,
        measurement: 'cup',
        loading: false,           
        nutrientTableStyle: 'table-disabled',
      }
    },
    computed: {
    },
    created: function() {
      // this.$store.dispatch('fetchAllCommonIngredients', this)  
      this.ingredient.common_ingredient.display_name = '';  
    },
    methods: {      
      onSubmit() {
        console.log('submit!');
      },
      handleSelect() {
        console.log('select')
      },
      querySearch(searchTerm, cb) {
        this.$store.dispatch('searchAndFetchAllCommonIngredients', {vm: this, searchTerm})
        return cb(this.$store.getters.search(this, searchTerm, 'display_name','allCommonIngredients.results'))
      },

      // USER-ADD-INGREDIENT-TABLE
      handleNextClick: function() {
        this.$store.dispatch('fetchNextAllCommonIngredients', this)
      },
      handlePreviousClick: function() {
        console.log('previous')        
        this.$store.dispatch('fetchPreviousAllCommonIngredients', this)
      },
      handleSearch: function(val) {
        console.log(val)
        const vm = this
        if (this.ingredient.name.length > 2) {
          this.$store.dispatch('classifyIngredient', {
            vm: this, 
            ingredient_name: this.ingredient.name.toLowerCase()
          })
          .then(function()  {
             vm.ingredient.common_ingredient.display_name = vm.$store.state.userNewIngredient.common_ingredient.display_name

          })        
        }

      },
      handleChange: function(val) {
        this.recipe.name = val;
        if (this.recipe.name.length > 0 && this.nutrientTableStyle == 'table-disabled') {
          this.nutrientTableStyle = 'table'
        } else if (this.recipe.name.length == 0 && this.nutrientTableStyle == 'table') {
          this.nutrientTableStyle = 'table-disabled'
        }
        if (this.recipe.name == '') {
          this.$store.commit('setUserNewRecipeName', 'Add New Recipe')
        } else {
          this.$store.commit('setUserNewRecipeName', this.recipe.name)
        }
        
      },

      // INGREDIENT-DISPLAY-TABLE  

    handleAdd: function(index, row) {
      console.log(this.ingredientName)
      console.log('handling add. index is ', index, 'row is ', row)
    },
    handleAddIngredient() {
      this.loading = true
      const recipe = this.$store.state.userNewRecipe;
      const vm = this;
      if (recipe.id == null) {
        this.$store.dispatch('userCreateRecipe', {vm, name: recipe.name})
        .then(function(rsp) {
          console.log(rsp)
          let newRecipe = {
            common_ingredients: rsp.common_ingredients,
            id: rsp.id,
            ingredients: rsp.ingredients,
            name: rsp.name,
            created_at: rsp.created_at,
          };
          // const newRecipe = (({ common_ingredients, id, ingredients, name, created_at }) => ({ common_ingredients, id, ingredients, name, created_at}))(rsp); 
            vm.$store.dispatch('createIngredient', {
              vm, 
              recipe: newRecipe, 
              ingredientName: vm.$store.state.userNewIngredient.name,
              ingredientUnits: vm.units,
              ingredientUnitType: vm.measurement
            })
            .then(function(rsp) {
              console.log(rsp)
              const obj = {vm, recipe_id: newRecipe.id, ingredient_id: vm.$store.state.userNewIngredient.id};
              vm.$store.dispatch('addIngredientRecipe', obj)
              .then(function() {
                vm.loading = false;
                console.log('resetting ingredient')
                vm.$store.commit('resetUserNewIngredient');
                vm.$store.commit('setUserNewIngredientName', '');
                vm.ingredient.name = '';
                vm.ingredient.common_ingredient.display_name = ''


              }) 
            })
        })
      } else {
          vm.$store.dispatch('createIngredient', {
            vm, 
            recipe: vm.$store.state.userSelectedRecipe, 
            ingredientName: vm.$store.state.userNewIngredient.name,
            ingredientUnits: vm.units,
            ingredientUnitType: vm.measurement
          })
          .then(function(rsp) {
            console.log(rsp)
            const obj = {
              vm, 
              recipe_id: vm.$store.state.userSelectedRecipe.id, 
              ingredient_id: vm.$store.state.userNewIngredient.id
            };
            vm.$store.dispatch('addIngredientRecipe', obj)
              .then(function() {
                vm.loading = false;
                vm.$store.commit('resetUserNewIngredient');
                vm.$store.commit('setUserNewIngredientName', '');
                vm.ingredient.name = '';
                vm.ingredient.common_ingredient.display_name = ''

              }) 
          })       
      }
    },    

    }
  }
</script>

<style>
.float-left {
  float: left;
}

.table-disabled {
  padding-bottom: 0px; 
  width: 100%; 
  opacity: .6
}

.table {
  padding-bottom: 0px; 
  width: 100%; 
}
</style>