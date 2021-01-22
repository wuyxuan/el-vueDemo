// 头部导航
<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
     background-color="#5DACB6"
    text-color="#fff"
    active-text-color="#FFCC00"
  >
    <el-menu-item index="0">
      <!-- 图标 -->
      <div class="demo-basic--circle">
        <div class="block">
          <el-avatar :size="50" :src="circleUrl"></el-avatar>
        </div></div
    ></el-menu-item>
    <!-- 导航 -->
    <el-menu-item index="1">歌起梦升</el-menu-item>
    <el-menu-item index="2">门派简介</el-menu-item>
    <el-menu-item index="3">莫问相知</el-menu-item>
    <el-menu-item index="4">高山流水</el-menu-item>
    <el-menu-item index="5">歌尽影生</el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name: 'navHeader',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      circleUrl: 'http://192.168.1.155:3000/images/demo1/head.jpg',
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu{
  width: 600px;
  margin: 0 auto;
}
.el-avatar{
  box-shadow: 0 0 2px 0px;
}
</style>
