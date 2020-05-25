<!-- TODO -->

<!-- all remvoal of ingredients -->
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
          <el-input :disabled="disabled" v-model="ingredientName" size="mini"></el-input>
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

    <el-input-number :disabled="disabled" v-model="units" size="mini" :min="0" ></el-input-number>
</el-form-item>
</el-form>
  </div><div>

      <el-form label-position="left" label-width="130px">
        
        <el-form-item label="Measure Unit:">
    <el-select :disabled="disabled" v-model="measurement" placeholder="Select" size="mini">
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
      :data="ingredient.common_ingredient.nutrients"
      v-loading="this.loading"
      :class="this.nutrientTableStyle">

      <el-table-column
        prop="name"
        :label="ingredient.common_ingredient.display_name"
        width="450px"
        >
        <!-- eslint-disable -->
      </el-table-column>

      <el-table-column
        align="right"
        prop="amount">
        <template slot="header" slot-scope="scope">
          <el-button
            :disabled="disabled"
            size="mini"
            @click="handleAddIngredient">{{addToRecipeOrUpdateIngredientButtonLabel}}</el-button>
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
    props: {
      edit: Boolean
    },
    components: {
    }, 
    mounted: function() {
      console.log('mounted', this.ingredient)

    },  
    data: function() {
      return {
        userIngredient: this.edit === true ? 'userSelectedIngredient' : 'userNewIngredient',
        userRecipe: this.edit === true ? 'userSelectedRecipe' : 'userNewRecipe',
        units: 1,
        measurement: 'cup',
        loading: false,           
        // nutrientTableStyle: 'table-disabled',
      }
    },
    computed: {
      disabled: function() {
        return this.recipe.name.length == 0 && this.ingredient.id == null
      },

      addToRecipeOrUpdateIngredientButtonLabel: function() {
        const label = this.ingredient.id === null ? 'Add to Recipe' : 'Update Ingredient';
        return label
      },
      recipe: {
        get: function() {
          return  this.$store.state[this.userRecipe]          
        },
        set: function(val) {
          console.log(val)
        }
      },
      ingredient: {
        get: function() {
          return this.$store.state[this.userIngredient]          
        },
        set: function(val) {
          console.log('setting', val)
        }
      },            
      ingredientName: {
        get: function() {
          return this.$store.state[this.userIngredient].name
        },
        set: function(val) {
          this.handleSearch(val)
        }
      },
      nutrientTableStyle: function() {
        // console.log('recipe name len is ', this.recipe.name.length)
        // console.log('recipe name ', this.recipe.name)
        // console.log('ingredient is', this.ingredient)
        if (this.recipe.name.length > 0 && this.ingredient.id === null) {
            console.log('if')
            return 'table'
          } else if (this.recipe.name.length == 0 && this.ingredient.id === null) {
            console.log('fist else if')
             return 'table-disabled'
          } else if (this.recipe.name.length > 0 && this.ingredient.id !== null) {
            console.log('should be here')
            return 'table'
          } else {
            console.log('else')
            return 'table-disabled'
          }
      }       
    },
    created: function() {
      // this.ingredient.common_ingredient.display_name = '';  
    },
    methods: {      
      onSubmit() {
        console.log('submit!');
      },
      handleSelect() {
        console.log('select')
      },

      handleSearch: function(val) {
        console.log('handling search')
        const vm = this
        this.$store.commit('setUserNewIngredientName', val)
        if (this.ingredientName.length > 2) {
          this.$store.dispatch('classifyIngredient', {
            vm: this, 
            ingredient_name: this.ingredientName.toLowerCase()
          })
          .then(function()  {
             vm.ingredient.common_ingredient.display_name = vm.$store.state.userNewIngredient.common_ingredient.display_name

          })        
        } else if (this.ingredientName == '' && this.$store.state.userNewIngredient.name != '') {
          // this.$store.commit('resetUserNewIngredient')
          console.log(this.ingredientName)
          // this.ingredient.common_ingredient.display_name = ''
        }

      },
      handleChange: function(val) {
        this.updateNutrientTableStyle()
        if (this.recipe.name == '') {
          this.$store.commit('setUserNewRecipeName', 'Add New Recipe')
        } else {
          this.$store.commit('setUserNewRecipeName', val)
        }
        
      },

      updateNutrientTableStyle: function() {
        if (this.recipe.name.length > 2 && this.nutrientTableStyle == 'table-disabled') {
          this.nutrientTableStyle = 'table'
        } else if (this.recipe.name.length == 0 && this.nutrientTableStyle == 'table') {
           this.nutrientTableStyle = 'table-disabled'
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
      if (this.ingredient.id === null) {
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

                }) 
            })       
        }        
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