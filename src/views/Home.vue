<template>
  <div class="home">
    <el-container>
      <!-- 头部 -->
      <el-header class="qq-header">
        <Vheader></Vheader>
      </el-header>
      <el-container>
        <!-- 侧边栏 -->
        <el-aside :width="isCollapse?'bigWidth':'smallWidth'">
          <Vaside></Vaside>
        </el-aside>
        <!-- 主体 -->
        <el-main style="margin: 0;height: 100%;">
          <div class="content-box">
              <tags></tags>
              <div class="content">
                  <transition name="move" mode="out-in">
                      <keep-alive :include="tagsList">
                          <router-view></router-view>
                      </keep-alive>
                  </transition>
              </div>
          </div>
      </el-main>
      </el-container>
    </el-container>
  </div>
</template>



<script>
  import Vaside from './aside.vue'
  import Vheader from './header.vue'
  import bus from "@/components/bus.js"
  import tags from "@/components/tags.vue"
  export default {
    data() {
      return {
        isCollapse:false,
        tagsList:[],
        smallWidth:'64px',
        bigWidth:'210px'
      }
    },
    components: {
      Vaside,
      Vheader,
      tags
    },
    created() {
        // this.sessionData = JSON.parse(sessionStorage.getItem("loginMsg"));
        bus.$on('collpseChange', msg => {
            this.isCollapse = msg;
        })
       
        // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
        bus.$on('tags', msg => {
            let arr = [];
            for (let i = 0, len = msg.length; i < len; i++) {
                msg[i].name && arr.push(msg[i].name);
            }
            this.tagsList = arr;
        })
    },activated: function () {
      console.log(3)
    },
    deactivated: function () {
      console.log(4)
    }
  }
</script>


<style>
  .qq-header {
    width: 100vw;
    height: 60px;
    line-height: 60px;
    background-color: aliceblue;
  }
  .content-collapse {
    width: 64px;
  }
  .el-main{
    /* padding: 2px; */
    height: 100vh;
  }

  @media only screen and (max-width: 600px) {
    .el-aside{
      position: absolute;
      z-index: 999;
    }
    .el-menu{
      background-color: rgba(255, 255, 255, 0.611764705882353);
    }
    .el-menu--collapse{
      margin-left: -64px;
    }
  }

</style>
