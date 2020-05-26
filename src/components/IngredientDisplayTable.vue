<template>
  <div>
    <div style="text-align: left">
      <h3>
        {{ this.$store.state.userNewIngredient.common_ingredient.display_name }}
      </h3>
      <div style="padding-bottom: 20px">
        <div>
          Quantity:
          <el-input-number
            v-model="units"
            size="mini"
            :min="0"
          ></el-input-number>
        </div>
        <br />
        <div>
          Measurement:
          <el-select v-model="measurement" placeholder="Select" size="mini">
            <el-option
              v-for="measurement in this.$store.state
                .ingredientMeasurementTypes"
              :key="measurement"
              :value="measurement"
            >
            </el-option>
          </el-select>
        </div>
      </div>
    </div>
    <div class="table-container">
      <el-table
        :data="this.$store.state.userNewIngredient.common_ingredient.nutrients"
        style="width: 100%"
        v-loading="this.loading"
        size="mini"
      >
        <el-table-column
          label="Nutritional Information (100 grams)"
          prop="name"
        >
          <!-- eslint-disable -->
        </el-table-column>
        <el-table-column align="right" prop="amount">
          <template slot="header" slot-scope="scope">
            <el-button size="mini" @click="handleAddIngredient"
              >Add to Recipe</el-button
            >
          </template>
        </el-table-column>
        <!-- eslint-enable -->
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "IngredientDisplayTable",
  components: {},
  data: function() {
    return {
      units: 1,
      measurement: "cup",
      loading: false,
    };
  },
  methods: {
    resetLocalIngredientData: function() {
      this.data;
    },
    handleAdd: function(index, row) {
      console.log(this.ingredientName);
      console.log("handling add. index is ", index, "row is ", row);
    },
    handleAddIngredient() {
      this.loading = true;
      const recipe = this.$store.state.userNewRecipe;
      const vm = this;
      if (recipe.id == null) {
        this.$store
          .dispatch("userCreateRecipe", { vm, name: recipe.name })
          .then(function(rsp) {
            console.log(rsp);
            const newRecipe = (({
              common_ingredients,
              id,
              ingredients,
              name,
              created_at,
            }) => ({ common_ingredients, id, ingredients, name, created_at }))(
              rsp
            );
            vm.$store
              .dispatch("createIngredient", {
                vm,
                recipe: newRecipe,
                ingredientName: vm.$store.state.userNewIngredient.name,
                ingredientUnits: vm.units,
                ingredientUnitType: vm.measurement,
              })
              .then(function(rsp) {
                console.log(rsp);
                const obj = {
                  vm,
                  recipe_id: newRecipe.id,
                  ingredient_id: vm.$store.state.userNewIngredient.id,
                };
                vm.$store.dispatch("addIngredientRecipe", obj).then(() => {
                  vm.loading = false;
                  console.log("resetting ingredient");
                  vm.$store.commit("resetUserNewIngredient");
                  vm.$store.commit("setUserNewIngredientName", "");
                });
              });
          });
      } else {
        vm.$store
          .dispatch("createIngredient", {
            vm,
            recipe: vm.$store.state.userSelectedRecipe,
            ingredientName: vm.$store.state.userNewIngredient.name,
            ingredientUnits: vm.units,
            ingredientUnitType: vm.measurement,
          })
          .then(function(rsp) {
            console.log(rsp);
            const obj = {
              vm,
              recipe_id: vm.$store.state.userSelectedRecipe.id,
              ingredient_id: vm.$store.state.userNewIngredient.id,
            };
            vm.$store.dispatch("addIngredientRecipe", obj).then(function() {
              vm.loading = false;
              vm.$store.commit("resetUserNewIngredient");
              vm.$store.commit("setUserNewIngredientName", "");
            });
          });
      }
    },
  },
};
</script>
