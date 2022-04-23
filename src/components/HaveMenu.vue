<template>
  <div class="menu-container" style="width: 100%">
    <!-- 导航条 -->
    <div class="wrapper" style="width: 100%;background-color: #34495e;">
      <Header></Header>
    </div>
    <!-- 中心 -->
    <section>
      <div class="warpper" style="width:1200px; margin:0 auto">
        <el-row :gutter="10" class="head" type="flex" justify="end">
          <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
            <div class="grid-content bg-purple slideshowBox">
              <!-- 视图切换 -->
              <keep-alive include="timeLocus">
                <router-view></router-view>
              </keep-alive>
                    
            </div>
          </el-col>
          <el-col :lg="6" :xl="6">
            <div>
              <!-- 侧边栏 -->
              <aside>
                <div class="personal">
                  <PersonalProfile></PersonalProfile>
                </div>
                <div class="quotes">
                  <Quotes></Quotes>
                </div>
                <div class="player">
                  <MusicPlayer></MusicPlayer>
                </div>
              </aside>
            </div>
          </el-col>
        </el-row>
      </div>
    </section>
    
    
  </div>
</template>

<script>
import Header from './layout/Header.vue'
import PersonalProfile from './sidebar/PersonalProfile.vue'
import Quotes from './sidebar/Quotes.vue'
import MusicPlayer from './sidebar/MusicPlayer.vue'
export default {
  components: {Header,PersonalProfile,Quotes,MusicPlayer}
}
</script>

<style scoped>
.personal {
  margin-top: 10px;
}
.quotes {
  margin-top: 10px;
}
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>