<template>
  <div id="app">
    <el-container>
      <Sidenav />
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Sidenav from '@/components/Sidenav'
export default {
  name: 'app',
  components: {
    Sidenav,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.table-container {
  box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: .2s;  
}

body {
  margin: 0px;
}
</style>
