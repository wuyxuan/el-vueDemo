<template>
<div class="topic">
    <el-container>
    <el-aside width='250px'>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>故人可识归雁来</span>
        </div>
        <ul v-for="o in ulList" :key="o" class="text item">
          <li>{{ o }}</li>
        </ul>
      </el-card>
    </el-aside>
    <el-main>
      <div>
        <div>
           <el-image :src="src"></el-image>
        </div>
        <div></div>
      </div>
    </el-main>
  </el-container>
</div>
</template>

<script>
export default {
  name: 'talk',
  data() {
    return {
      ulList:['人生若只如初见','何事秋风悲画扇','等闲变却故人心','却道故人心易变','骊山语罢清宵半','泪雨霖铃终不怨','何如薄幸锦衣郎','比翼连枝当日愿']
    }
  },
}
</script>
<style>
.topic{
  /* background-color: #ffffff; */
}
.topic > .el-container > .el-main{
  margin-left:20px;
  background-color: #ffffff;
}
.el-aside {
  color: #333;
  text-align: center;
  /* line-height: 200px; */
}
 .text {
    font-size: 14px;
  }

  .item{
    margin-bottom: 18px;
  }

  .item:last-child{
    margin-bottom: 0;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    /* width: 480px; */
  }
</style>
