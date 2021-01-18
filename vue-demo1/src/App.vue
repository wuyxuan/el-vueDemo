<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <el-container>
      <el-header>
        <navHeader />
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import navHeader from './components/nav.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    navHeader
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.el-header{
  padding: 0;
}
.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>
