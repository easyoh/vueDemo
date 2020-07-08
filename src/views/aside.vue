<template>
    <div class="aside">
        <el-menu class="el-menu-vertical-demo" :default-active="onRouter" :collapse="collapse" router collapse-transition>
            <template v-for="items in menus">
                <template v-if="items.submenus">
                        <el-submenu :index="items.index" :key="items.index">
                            <template slot="title">
                                <i :class="items.icon"></i>
                                <span slot="title">
                                    {{items.title}}
                                </span>
                            </template>
                            <el-menu-item v-for="item in items.submenus"
                                :index="item.index" :key="item.index">
                                    <template slot="title">
                                        <i :class="item.icon"></i>
                                        <span slot="title">
                                            {{item.title}}
                                        </span>
                                    </template>
                            </el-menu-item>
                        </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="items.index" :key="items.index">
                        <template slot="title">
                            <i :class="items.icon"></i>
                            <span slot="title">
                                {{items.title}}
                            </span>
                        </template>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<style>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
    }
    
    .el-menu-vertical-demo {
        height: calc(100vh - 60px);
    }
</style>

<script>
    import bus from "@/components/bus.js"
    export default {
        data() {
            return {
                collapse: false,
                menus: [
                    {
                        icon: "el-icon-location",
                        index: "homepage",
                        title: "首页"
                    },
                    {
                        icon: "el-icon-location",
                        index: "/button",
                        title: "按钮",
                        submenus:[
                            {
                                icon: "el-icon-location",
                                index: "button",
                                title: "基本按钮"
                            }
                        ]
                    },
                    {
                        icon: "el-icon-location",
                        index: "/echart",
                        title: "图表",
                    },
                    {
                        icon: "el-icon-location",
                        index: "/attr",
                        title: "传值",
                    },
                    {
                        icon: "el-icon-location",
                        index: "/table",
                        title: "表格",
                    }
                ]
            }
        },
        computed: {
            onRouter() {
                //当前激活菜单的 index
                return this.$route.path.replace('/', '');
            }
        },
        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collpseChange', msg => {
                this.collapse = msg;
            })
        }
    }
</script>