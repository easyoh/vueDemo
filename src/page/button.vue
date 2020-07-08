<template>
    <div style="padding: 20px;">
        <el-row :gutter='20'>
            <el-col :xs='24' :sm='24' :md='24' :lg='12'>
                <el-button icon="el-icon-circle-plus" type="primary">添加</el-button>
                <el-button round icon="el-icon-edit" type="warning">编辑</el-button>
                <el-button plain icon="el-icon-delete" type="danger">删除</el-button>
                <el-button plain round icon="el-icon-view" type="view">查看</el-button>
                <el-button circle icon="el-icon-share" type="success"></el-button>
            </el-col>
            <el-col :xs='24' :sm='24' :md='24' :lg='12'>
                <el-button-group>
                    <el-button type="primary" icon="el-icon-d-arrow-left">快退</el-button>
                    <el-button type="primary" icon="el-icon-caret-right">播放</el-button>
                    <el-button type="primary" icon="el-icon-d-arrow-right">快进</el-button>
                    <el-button type="primary" icon="el-icon-bell">音量</el-button>
                    <el-button type="primary" icon="el-icon-menu">菜单</el-button>
                </el-button-group>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    // import "../plugins/element.js"
    export default {
        name: 'button',
        data() {
            return {

            }
        }
    }
</script>
<style scoped>
    .el-col{
        margin-bottom: 20px;
    }
</style>