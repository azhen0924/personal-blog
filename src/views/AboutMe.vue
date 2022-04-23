<template>
  <div class="about-me-container">
    <div class="about">
      <div class="img">
        <img src="~@/assets/image/touxiang.jpg">
      </div>
      <p class="txt"><span>Azhen</span></p>
      <p class="txt"><span>男，计科学生，即将毕业</span></p>
      <p class="txt"><span>虽然大学比较混，但还是写下这个博客对大学的学习进行回顾</span></p>
      <p class="txt"><span>平常也可以在这个网站速查自己所学的知识</span></p>
      <p class="txt"><span>常用技术栈：HTML，CSS，JavaScript，Es6，Vue2（正在学习vue3），微信小程序，NodeJS</span></p>
      <p class="txt"><span>了解以及正在学习：TypeScript，Egg.js，Koa2，MySQL</span></p>
      <p class="txt"><span>常用工具：Element UI，Echarts</span></p>
      <p class="txt"><span>短期目标：成为一名前端开发工程师</span></p>
      <p class="txt"><span>长期目标：成为一名全栈工程师</span></p>
      <p class="txt"><span>个人邮箱：2319969434@qq.com</span></p>
      <p class="txt"><span>个人Git：https://gitee.com/Azhen</span></p>
      <p class="txt" style="margin-top: 90px; color: #f5f6fa"><span>——————————————你所热爱的，就是你的生活——————————————</span></p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.about-me-container {
  margin-top: 10px;
  height: 900px;
}
.about {
  width: 100%;
  height: 100%;
  background: rgba(198, 195, 195, 0.6);
  border-radius: 5px;
  padding: 20px 0;
}
.img {
  display: flex;
  justify-content: center;
}
.img img{
  border-radius: 50%;
  height: 100px;
}
.txt {
  text-align: center;
  font-size: 19px;
  font-weight: large;
  color: #151617;
}
p span {
  line-height: 40px;
}
.divider {
  background: rgba(198, 195, 195, 0.6);
}
</style>