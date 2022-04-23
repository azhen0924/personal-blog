<template>
  <div class="conclusion-container" v-if="conclusionList" style="margin-top: 10px">
    <div class="container block">
      <div class="item" v-for="(item,i) in conclusionList" :key="i">
        <div class="item-title">{{item.title}}</div>
        <div class="item-content">
          <button v-for="content in item.conclusionContents" :key="content.id"><a :href="content.url" target="_blank">{{content.tag}}</a></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getConclusionList} from '../../api/conclusion/index'
export default {
  data() {
    return {
      conclusionList: []
    }
  },
  methods: {
    init() {
      getConclusionList().then((res) => {
        // console.log(res.data.data)
        this.conclusionList = res.data.data
      }) 
    }
  },
  created() {
    this.init()
  }
}
</script>

<style scoped>
.block {
  background: rgba(255, 255, 255, .6);
  box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, .3);
  border-radius: 6px;
  padding: 20px;
}
.container button {
  height: 40px;
}
.container button a {
  padding: 0 5px;
}
.item {
  margin-bottom: 40px;
}
.item .item-title {
  padding-bottom: 20px;
  font-size: 25px;
}
.item-content button {
  border: none;
  margin-right: 20px;
  background-color: rgba(255, 255, 255, .6);
  border-radius: 5px;
}
.item-content button  a {
  text-decoration: none;
  color: rgba(16, 14, 14, 0.6);
}
.item-content button:hover {
   box-shadow: 0 0 15px rgb(255, 255, 255);
 }
</style>