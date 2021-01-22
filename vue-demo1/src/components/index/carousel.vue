// 轮播图
<template>
  <el-carousel :interval="4000" type="card" height="400px">
    <el-carousel-item v-for="item in imgList" :key="item">
      <h3 class="medium">
        <el-image :src="item"></el-image>
      </h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name:'carouselTemp',
  data() {
    return {
      imgList:["http://192.168.1.155:3000/images/demo1/c1.jpg", "http://192.168.1.155:3000/images/demo1/c2.jpg", "http://192.168.1.155:3000/images/demo1/c3.jpg",
      "http://192.168.1.155:3000/images/demo1/c4.jpg", "http://192.168.1.155:3000/images/demo1/c5.jpg"]
    }
  },
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>