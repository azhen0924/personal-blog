<template>
  <div class="swiper-container">
    <div class="swiper">
      <swiper ref="mySwiper" :options="swiperOptions" v-if="swiperList.length > 0">
        <swiper-slide v-for="(item,i) in swiperList" :key="i">
          <div class="swiper-item">
            <img :src="item.url" @click="goToPic(item.url)">
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <div class="text" style="width: 100%">
      <p>轮播图和背景图片随机显示，纯粹为了好看~~~</p>
    </div>
  </div>
</template>

<script>
import { getSwiperList } from '../../api/swiper/index'
export default {
  data() {
    return {
      swiperOptions: {
        // 分页器配置
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // 过渡时间
        speed: 750,
        // 初始化索引
        initialSlide: 0,
        // 自动切换图配置
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
          },
        effect: "coverflow",
        // 箭头配置
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        // 环状轮播
        loop: true,
        slidesPerView: 1,
        loopedSlides: 1,
        loopAdditionalSlides: 1,
      },
      swiperList: [],
    }
  },
  methods: {
    goToPic(url) {
      window.open(url)
    },
    init() {
      let ids = []
      for(let i=0;i<4;i++) {
        let num = Math.ceil((Math.random())*8)
        if(ids.indexOf(num)==-1) {
          ids.push(num)
        }else{
          i--
        }
      }
      // console.log(JSON.stringify(ids) )
      if(ids.length == 4) {
        getSwiperList(JSON.stringify(ids)).then((res) => {
          // console.log(res.data)
            this.swiperList = res.data.data
        })
      }
    }
  },
  created() {
    this.init()
  }
}
</script>

<style scoped>
  .swiper {
    height: 100%;
}
  .swiper-item {
    height: 300px;
  }
  .swiper-item img{
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }
  .text {
    background: rgba(255, 255, 255, .6);
    height: 50px;
    border-radius: 10px;
    line-height: 50px;
    margin-top: 10px;
    font-size: 20px;
    text-align: center;
    color: #7f8c8d;
  }

</style>