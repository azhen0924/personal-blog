<template>
  <div>
    <router-view></router-view>
    <!-- 背景图片 -->
    <div class="bgc">
      <img :src="bgimg.url">
      <!-- <img src="~@/assets/image/2.png" alt=""> -->
    </div>
  </div>
</template>

<script>
import {getBgimg} from '../src/api/bgimg/'
export default {
  data() {
    return {
      bgimg: {}
    }
  },
  methods:{
    init() {
      let id = JSON.stringify(Math.ceil((Math.random()*8))) 
      // console.log(id)
      getBgimg(id).then((res) => {
        // console.log(res.data)
        this.bgimg = res.data.data[0]
      })
    }
  },
  created() {
    this.init()
  }
}
</script>

<style>
body {
  width: 1920px;
  height: 100%;
  margin: 0;
  padding: 0;
}
.bgc {
  position: fixed; 
  right: 0; 
  bottom: 0; 
  width: 100%;
  height: 100%; 
  z-index: -100; 
  background-size: cover;
}
.bgc img {
  width: 100%;
  height: 100%;
}
/* 隐藏页面右侧滚动条 */
::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;height: 0;
}
</style>