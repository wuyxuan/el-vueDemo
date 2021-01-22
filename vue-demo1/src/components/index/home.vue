<template>
  <el-container>
    <!-- 头部与导航 -->
    <el-header>
      <navHeader />
    </el-header>
    <!-- 主体部分 -->
    <el-main>
      <!-- 轮播 -->
      <carouselTemp />
      <!-- 模块 -->
      <div class="mode">
        <modeTemp />
        <el-row :gutter="20">
          <el-col :span="4" v-for="item in imgList" :key="item">
            <div class="grid-content bg-purple">
              <el-image :src="item['src']"></el-image>
            </div>
            <div class="modeTitle">{{ item['title'] }}</div>
          </el-col>
        </el-row>
        <div class="break-line">
          <img src="http://192.168.1.155:3000/images/demo1/break-line2.png" alt="">
          <span>高山流水遇知音</span>  
        </div>
        <talk />
      </div>
    </el-main>
    <!-- 底部版权 -->
    <el-footer>
      <footerText />
    </el-footer>
  </el-container>
</template>

<script>
import navHeader from './nav.vue'
import footerText from './footer.vue'
import carouselTemp from './carousel.vue'
import modeTemp from './mode.vue'
import talk from './talk.vue'

export default {
  name: 'HomeTemp',
  components: {
    // HelloWorld
    navHeader,
    footerText,
    carouselTemp,
    modeTemp,
    talk,
  },
  data() {
    return {
      imgList: [
        { src: 'http://192.168.1.155:3000/images/demo1/mw.png', title: '莫问' },
        {
          src: 'http://192.168.1.155:3000/images/demo1/skill1.png',
          title: '宫',
        },
        {
          src: 'http://192.168.1.155:3000/images/demo1/skill2.png',
          title: '商',
        },
        {
          src: 'http://192.168.1.155:3000/images/demo1/skill3.png',
          title: '角',
        },
        {
          src: 'http://192.168.1.155:3000/images/demo1/skill4.png',
          title: '徵',
        },
        {
          src: 'http://192.168.1.155:3000/images/demo1/skill5.png',
          title: '羽',
        },
        { src: 'http://192.168.1.155:3000/images/demo1/xz.png', title: '相知' },
        {
          src: 'http://192.168.1.155:3000/images/demo1/skill12.png',
          title: '宫',
        },
        {
          src: 'http://192.168.1.155:3000/images/demo1/skill22.png',
          title: '商',
        },
        {
          src: 'http://192.168.1.155:3000/images/demo1/skill32.png',
          title: '角',
        },
        {
          src: 'http://192.168.1.155:3000/images/demo1/skill42.png',
          title: '徵',
        },
        {
          src: 'http://192.168.1.155:3000/images/demo1/skill52.png',
          title: '羽',
        },
      ],
    }
  },
}
</script>

<style>
body{   
  user-select: none;
}
/* 头部样式 */
.el-header {
  padding: 0;
  background-color: #5dacb6;
}
/* 底部样式 */
.el-footer {
  background: #86c9e3;
  height: 50px !important;
}
/* 主体样式 */
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}
/* 模块 */
.mode {
  padding: 0 220px;
}
/* 行样式 */
.el-row {
  margin-bottom: 20px; 
}
/* 列样式 */
.el-col {
  border-radius: 4px;
  margin-bottom: 10px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

/* 图片样式 */
.grid-content {
  padding: 10px 0;
}
.modeTitle {
  padding: 10px 0;
  color: #909399;
}
/* 分割线 */
.break-line{
  position: relative;
}
.break-line > img{
  width: 100%;
  opacity: 0.5;
}
.break-line > span{
  display: block;
  position: absolute;
  font-size: 40px;
  top: 50%;
  left: 50%;
  color: #347571;
  margin: -20px 0 0 -285px;
  letter-spacing: 3rem;
  /* user-select: none; */
}
</style>
