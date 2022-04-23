<template>
<!-- 个人学习记录的组件 -->
  <div class="learning-container">
    <div class="block" style="margin-top: 10px; height: 850px">
      <div class="radio">
        排序：
        <el-radio-group v-model="reverse">
          <el-radio :label="true">倒序</el-radio>
          <el-radio :label="false">正序</el-radio>
        </el-radio-group>
      </div>

    <el-timeline :reverse="reverse">
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :timestamp="activity.timestamp">
        <p>{{activity.content}}</p> 
      </el-timeline-item>
    </el-timeline>
  </div>
</div>
</template>

<script>
import { getLearningList } from '../../api/learningRecord/index'
  export default {
    data() {
      return {
        reverse: true,
        activities: [
          //   {
          //   content: '活动按期开始',
          //   timestamp: '2018-04-15'
          // },
        ]
      };
    },
    methods: {
      init() {
        getLearningList().then((res) => {
          // console.log(res.data)
          this.activities = res.data.data
        })
      }
    },
    created() {
      this.init()
    }
  };
</script>

<style scoped>
.block {
  background: rgba(241, 237, 237, 0.7);
  box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, .3);
  border-radius: 6px;
  font-size: 20px;
}
.radio {
  width: 100%;
  padding: 30px 0;
  margin-left: 30px;
}
.el-timeline-item p {
  font-size: 17px;
}
</style>