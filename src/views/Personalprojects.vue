<template>
<!-- 个人作品页面，对应路由 /home -->
  <div>
    <div class="swiper" style="border-radius: 10px;">
      <MySwiper></MySwiper>
    </div>
    <div class="projects">
      <PersonalProjects></PersonalProjects>
    </div>
  </div>
</template>

<script>
import MySwiper from '../components/swiper/MySwiper.vue'
import PersonalProjects from '../components/personalProjects/PersonalProjects.vue'
export default {
  components: {MySwiper,PersonalProjects}
}
</script>

<style>
.swiper {
  height: 100%;
  margin-top: 5px;
}
.MySwiper img{
  border-radius: 10px;
  width: 100%;
  height: 100%;
}
.projects {
  margin-top: 20px;
  border-radius: 10px;
}
.project {
  border-radius: 10px;
}
</style>>