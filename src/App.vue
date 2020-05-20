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
body {
  margin: 0px;
}
</style>
