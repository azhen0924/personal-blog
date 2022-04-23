<template>
<!-- 这是名人名言的组件 固定在页面的右侧 -->
  <div class="quote-container block">
    <div class="container" v-for="(item ,i) in quoteList" :key="i">
      <div class="quotes">
        <div class="sentence">{{item.text}}</div>
        <div class="name" style="padding-top: 5px">—{{item.author}}</div>
      </div>
    </div>
    <div class="click" @click="init"><span style="margin-top: 30px">点击切换</span></div>
  </div>
  
</template>

<script>
import {getQuoteList} from '../../api/sidebar/quotes.js'
export default {
  data () {
    return {
      quoteList:[
        {
          id: 1,
          text: '骄傲自满是我们的一座可怕的陷阱，而且，这个陷阱是我们自己亲手挖掘的',
          author: '老舍'
        },
        {
          id: 1,
          text: '真正的勇士，敢于直面惨淡的人生，敢于正视淋漓的鲜血这是怎样的哀痛者和幸福者？',
          author: '鲁迅'
        },
        {
          id: 1,
          text: '结婚仿佛金漆的鸟笼，笼子外面的鸟想住进去，笼内的鸟想飞出来；所以结而离，离而结，没有了局',
          author: '钱钟书'
        },
        {
          id: 1,
          text: '看文学书而不懂鉴赏，恰等于黄帝时代，看守后宫、成日在女人堆里厮混的太监，虽有机会，却无能为力。',
          author: '钱钟书'
        },
      ]
    }
  },
  methods: {
    init() {
      let ids = []
      for(let i=0;i<4;i++) {
        let num = Math.ceil((Math.random())*6)
        if(ids.indexOf(num)==-1) {
          ids.push(num)
        }else{
          i--
        }
      }
      console.log(ids)
      getQuoteList(JSON.stringify(ids)).then( (res) => {
        console.log(res.data)
        this.quoteList = res.data.data
      })
    }
  },
}
</script>

<style scoped>
.block {
  background: rgba(255, 255, 255, .6);
  box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, .3);
  border-radius: 6px;
  padding: 5px;
}
.name {
  text-align: right;
  font-family: Helvetica;
}
.quotes {
  padding-top: 5px;
}
.click {
  width: 100%;
  height: 50px;
  text-align: center;
  border-top: 1px solid black;
  line-height: 50px;
}
</style>