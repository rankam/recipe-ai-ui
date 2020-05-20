<template>
  <el-aside style="height:100VH; width: 220px">
    <el-row class="tac" style="text-align: left; ">
    <el-col>
    <el-menu
      class="el-menu-vertical-demo"
      style="height: 100VH; ">

      <router-link to="/">
        <el-menu-item 
          index="1"
          class="sidenav-item">
          <span><h3>The Chef Bot</h3></span>
        </el-menu-item>
    </router-link>

    <router-link to="/recipes">
      <el-menu-item 
      index="2"
      class="sidenav-item">
        <i class="el-icon-knife-fork"></i>
        <span>Recipes</span>
      </el-menu-item>
    </router-link>
    
    <router-link to="/ingredients"> 
      <el-menu-item 
      index="3"
      class="sidenav-item">
        <i class="el-icon-refrigerator"></i>
        <span>My Ingredients</span>
      </el-menu-item>
    </router-link>

    <router-link to="/nutrition">
      <el-menu-item 
      index="4"
      class="sidenav-item">
        <i class="el-icon-s-data"></i>
        <span>Nutrition</span>
      </el-menu-item>   
    </router-link>

    <router-link to="/meal-planner">   
      <el-menu-item 
      index="5"
      class="sidenav-item">
        <i class="el-icon-date"></i>
        <span>Meal Planner</span>
      </el-menu-item>
    </router-link>

    <router-link to="/common-ingredients">   
      <el-menu-item 
      index="6"
      class="sidenav-item">
        <i class="el-icon-shopping-cart-full"></i>
        <span>Add Ingredients</span>
      </el-menu-item>
    </router-link>

    </el-menu>
  </el-col>
</el-row>
  </el-aside>
</template>

<script>
export default {
  name: 'Sidenav',
  // props: {
  //   msg: String
  // }
}
</script>

<style>
.sidenav-item {
  padding-left:40px!important;
}

a {
  text-decoration:none;
}
</style>
