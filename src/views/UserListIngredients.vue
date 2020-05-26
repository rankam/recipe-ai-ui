<template>
  <div class="ingredients">
    <el-row type="flex" class="row-bg">
      <el-col :span="12"
        ><div class="grid-content">
          <h2 style="text-align: left">My Ingredients</h2>
        </div></el-col
      >
      <el-col :span="1"><div class="grid-content"></div></el-col>
      <el-col :span="12"
        ><div
          class="grid-content"
          style="text-align: right;margin-top: 2.83em;"
        >
          {{ this.$store.state.userCommonIngredients.count }} Ingredients
          Available
        </div></el-col
      >
    </el-row>
    <UserIngredientTable />
  </div>
</template>

<script>
import UserIngredientTable from "@/components/UserIngredientTable";

export default {
  name: "",
  components: {
    UserIngredientTable,
  },
  mounted: function() {
    let obj = { vm: this, url: this.$store.state.baseUserIngredientURL };
    this.$store.dispatch("fetchUserCommonIngredients", obj);
  },
  methods: {},
};
</script>
