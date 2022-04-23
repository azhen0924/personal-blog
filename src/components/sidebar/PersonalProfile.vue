<template>
<!-- 这是个人简介的组件 固定在页面的右侧 -->
  <div class="app-container">
    <div class="personal block">
      <h2>个人简介</h2>
      <div>
        <p>计算机科学与技术大四党一只</p>
        <p>湖北省十堰市</p>
        <p>2319969434@qq.com</p>
      </div>
      <div class="personal-about">
        <div class="item">
          <el-tooltip class="item" effect="dark" content="扫一扫添加我的微信" placement="top">
            <a class="item-wx item-a" href="javascript:"></a>
          </el-tooltip>
        </div>
        <div class="item">
          <el-tooltip class="item" effect="dark" content="2319969434@qq.com" placement="top">
            <a class="item-email item-a" href="javascript:"></a>
          </el-tooltip>
        </div>
        <div class="item">
          <el-tooltip class="item" effect="dark" content="点击跳转我的gitee仓库" placement="top">
            <a class="item-gitee item-a" href='https://gitee.com/Azhen0924/projects' target="_blank"></a>
          </el-tooltip>
        </div>
        <div class="item">
          <el-tooltip class="item" effect="dark" content="个人github(不常用)" placement="top">
            <a class="item-github item-a" href="javascript:"></a>
          </el-tooltip>
        </div>
          
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.personal {
  height: 100%;
}
.block {
  background: rgba(255, 255, 255, .6);
  box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, .3);
  border-radius: 6px;
  padding: 20px;
}
.block h2 {
  padding-bottom: 10px;
  color: rgb(79, 79, 78);
}
.block p {
  margin: 5px 0;
  font-size: 15px;
  color: rgb(59, 59, 55);
}
.personal-about {
  display: flex;
  margin: 15px 0;
  justify-content: space-around;
}
.item-a {
      display: inline-block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: aliceblue;
    }
.item {
  width: 70px;
  height: 70px;
}
.item-wx {
  background: url('~@/assets/image/wximg.jpg') no-repeat;
  background-position: 5px 5px;
  background-size: 85%;
  background-color: #fff;
}
.item-email {
  background: url('~@/assets/image/email.png') no-repeat;
  background-position: 5px 5px;
  background-size: 85%;
  background-color: #fff;
}
.item-gitee {
  background: url('~@/assets/image/gitee.png') no-repeat;
  background-position: 5px 5px;
  background-size: 85%;
  background-color: #fff;
}
.item-github {
  background: url('~@/assets/image/github.png') no-repeat;
  background-position: 5px 5px;
  background-size: 85%;
  background-color: #fff;
}
/* 鼠标悬停时的hover效果 */
.personal-about .item a:hover {
   box-shadow: 0 0 15px rgb(255, 255, 255);
 }
</style>