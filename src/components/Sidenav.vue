<template> 
  <el-aside style="height:100VH; width: 220px">
    <el-row class="tac" style="text-align: left; ">
    <el-col>
    <el-menu
      class="el-menu-vertical-demo"
      style="height: 100VH; ">


      <router-link to="/user-availabe-add-recipe">
        <el-menu-item 
          index="1"
          class="sidenav-item">
          <span><h3>The Chef Bot</h3></span>
        </el-menu-item>
    </router-link>
     <el-submenu index="2" class="sidenav-sub-menu">
        <template slot="title">
          <router-link to="/recipes" style="width:100%">
          <i class="el-icon-knife-fork"></i>
          <span>Recipes</span>
        </router-link>
        </template>
        <el-menu-item-group>
          <router-link to="/recipe-form">
            <el-menu-item index="2-1">
            <span style="font-size: 10pt"><i class="sub-icon el-icon-notebook-2"></i>
            <span> Add Recipe</span></span>
            </el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>         
    
    <router-link to="/"> 
      <el-menu-item 
      index="3"
      class="sidenav-item">
        <i class="el-icon-refrigerator"></i>
        <span>Ingredients</span>
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

<style scoped>
.sidenav-item {
  padding-left:40px!important;
}

.sidenav-sub-menu {
  padding-left:20px!important;
}

a {
  text-decoration:none;
}

.sub-icon {
  font-size: 12pt;
}
</style>
