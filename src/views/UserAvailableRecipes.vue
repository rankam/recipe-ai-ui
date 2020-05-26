<template>
  <div class="recipe-content">
    <el-row type="flex" class="row-bg">
      <el-col :span="12"
        ><div class="grid-content">
          <h2 style="text-align: left">
            {{ this.$store.state.userAvailableRecipes.count }} Available Recipes
          </h2>
        </div></el-col
      >
      <el-col :span="1">
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="12"
        ><div
          class="grid-content"
          style="text-align: right;margin-top: 1.83em;"
        >
          <AllowedMissingIngredientsNumberInput /></div
      ></el-col>
    </el-row>
    <UserAvailableRecipesTable />
  </div>
</template>

<script>
import UserAvailableRecipesTable from "@/components/UserAvailableRecipesTable";
import AllowedMissingIngredientsNumberInput from "@/components/AllowedMissingIngredientsNumberInput";

export default {
  name: "UserAvailableRecipes",
  components: {
    AllowedMissingIngredientsNumberInput,
    UserAvailableRecipesTable,
  },
  mounted: function() {
    if (this.$store.state.userAvailableRecipes.results.length === 0) {
      this.$store.dispatch("fetchUserAvailableRecipes", this);
    }
  },
  data: function() {
    return {
      ready: false,
    };
  },
  methods: {},
};
</script>
