<template>
  <div class="project-container">
    <div class="project">
      <el-collapse accordion>
        <el-divider><span style="color: #7f8c8d">start</span></el-divider>
        <el-collapse-item :title="item.name" v-for="(item,i) in productList" :key="item.id">
          <template slot="title" class="slot-style">
            <p class="slot-collapse" style="margin-right: 10px">
              {{item.name}}
            </p>
            <p class="slot-tags">
              <el-tag v-for="tag in item.productTags" :key="tag.id" style="margin: 10px 5px">
              {{tag.tag}}</el-tag>
            </p>
          </template>
          <el-divider content-position="left">Code By Azhen</el-divider>
          <span class="collapse-title">技术栈: </span>
          <el-tag v-for="tag in item.productTags" :key="tag.id-1" style="margin-right: 10px">{{tag.tag}}</el-tag>
          <p class="collapse-title">作品部分截图：<span>(截图较大，可能加载较慢)</span></p>
          <el-image
            v-for="url in item.productImages" :key="url.url"
            style="width: 250px; height: 250px; padding-right: 10px"
            :src="url.url"
            :preview-src-list="scrList[i]">
          </el-image>
          <p class="collapse-title"><span>相关简介: {{item.about}}</span></p>
          <el-button type="primary" round>
            <a>查看GIT代码</a>
          </el-button>
        </el-collapse-item>
        <el-divider><span style="color: #7f8c8d">end</span> </el-divider>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import {getProductList} from '../../api/myProduct/index'
export default {
  data() {
    return {
      productList: [],
      scrList: [],
    }
  },
  methods: {
    init() {
      getProductList().then( (res) => {
        // console.log(res.data)
        this.productList = res.data.data
        // console.log(res.data.data)
        //对数组进行操作，一步一步过滤出最后需要的scrList数组
        let arr = []
        for(let i=0;i<res.data.data.length;i++) {
          arr.push(res.data.data[i].productImages)
        }
        console.log(arr)
        let arr1 = []
        let empty = []
        for(let j=0;j<arr.length;j++) {
          for(let n=0;n<arr[j].length;n++) {
            empty.push(arr[j][n].url)
            // console.log(empty)
          }
          arr1.push(empty)
          console.log(arr1)
          empty = []
        }
        this.scrList = arr1
        // console.log(this.scrList)
      })
    }
  },
  created() {
    this.init()
  }
}
</script>

<style scoped>
.project-container {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
}
.project {
  width: 90%;
  margin: auto;
}
.slot-collapse {
  font-size: 25px;
}
.collapse-title {
  margin: 10px;
  font-size: 20px;
}
</style>