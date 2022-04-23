<template>
  <div class="app-container">
    <div class="container">
      <el-row>
        <el-col :span="4">
          <div class="logo">
            <img src="~@/assets/image/touxiang.jpg">
            <div class="nickName">AzhenのBlog</div>
          </div>
        </el-col>
        <el-col :span="20">
          <nav>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" text-color="#fffffa" background-color="#34495e" active-text-color = "#95a5a6">
              <el-menu-item index="1">
                <router-link to="/home" >个人作品</router-link>
              </el-menu-item>
              <el-menu-item index="2">
                <router-link to="/conclusion" >个人总结</router-link>
              </el-menu-item>
              <el-menu-item index="3">
                <router-link to="/learning" >学习记录</router-link>
              </el-menu-item>
              <el-menu-item index="4">
                <router-link to="/aboutMe" >关于作者</router-link>
              </el-menu-item>
            </el-menu>
          </nav>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
        activeIndex: '1',
      };
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
  width: 1200px;
  height: 60px;
  margin: 0 auto;
}
.logo {
  font-size: 20px;
  align-items: center;
  line-height: 60px;
  color: aliceblue;
  display: flex;
}
.logo img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.nickName {
  padding-left: 15px;
}
nav {
  float: right;
}
a {
  text-decoration: none;
}
</style>