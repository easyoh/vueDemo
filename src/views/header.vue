<template>
    <div class="header">
        <el-row :gutter="10">
            <el-col :xs="18" :sm="18" :md="18" :lg="18" style="text-align: left;">
            <el-button type="primary" circle  :icon="collapse?'el-icon-arrow-left':'el-icon-arrow-right'" @click="collpseChange"></el-button>
            <span style="margin-left: 10px;">学习积累</span>
            </el-col>
            <el-col :xs="6" :sm="6" :md="6" :lg="6" style="text-align: right;">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <el-button type="default" round icon="el-icon-user" size="small">
                        cqq<i class="el-icon-arrow-down el-icon--right"></i></el-button>
                </span>
                <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-plus">修改</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus">注销</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            </el-col>
        </el-row>
    </div>
    
</template>

<style scoped>
    .el-row{
      height: 100%;
    }
</style>

  <script>
    import bus from "@/components/bus.js"
    export default {
        data(){
            return{
                collapse: false,
            }
        },
        created () {
        },
        methods: {
            collpseChange(){
                this.collapse = !this.collapse;
                bus.$emit('collpseChange', this.collapse);
            }
        }
          
      }
  </script>