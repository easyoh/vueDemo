<template>
    <div class="home">
        <span>响应式布局</span>
        <el-row :gutter="10">
            <el-col :xs='24' :sm='12' :md='6' :lg='3' v-for="(o) in 6" :key="o" :offset="0" style="margin:5px 0">
              <el-card :body-style="{ padding: '0px' }">
                <div style="padding: 14px;">
                  <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
    </div>
</template>
<style>
    .time {
      font-size: 13px;
      color: #999;
    }
    
    .bottom {
      margin-top: 13px;
      line-height: 12px;
    }
  
    .button {
      padding: 0;
      float: right;
    }
  
    .image {
      width: 100%;
      display: block;
    }
  
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    
    .clearfix:after {
        clear: both
    }
  </style>
  
  <script>
  export default {
    name:'homepage',
    data() {
      return {
        currentDate: new Date()
      };
    },
    created () {
      console.log("homepage创建");
    }
  }
  </script>