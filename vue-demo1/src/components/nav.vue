<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#87CAE4"
    text-color="#fff"
    active-text-color="#CCCCFF"
  >
    <el-menu-item index="0"
      ><!-- 图标 -->
      <div class="demo-basic--circle">
        <div class="block">
          <el-avatar :size="50" :src="circleUrl"></el-avatar>
        </div></div
    ></el-menu-item>
    <!-- 导航 -->
    <el-menu-item index="1">处理中心</el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3" >消息中心</el-menu-item>
    <el-menu-item index="4"
      >订单管理</el-menu-item
    >
  </el-menu>
</template>
<script>
export default {
  name: 'navHeader',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      circleUrl:
        'http://192.168.1.155:3000/images/demo1/head.jpg',
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
<style scoped></style>
