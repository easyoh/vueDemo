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
                        title: this.$t('aside.home')
                    },
                    {
                        icon: "el-icon-location",
                        index: "/button",
                        title: this.$t('aside.button'),
                        submenus:[
                            {
                                icon: "el-icon-location",
                                index: "button",
                                title: this.$t('aside.commonButton')
                            }
                        ]
                    },
                    {
                        icon: "el-icon-location",
                        index: "/echart",
                        title: this.$t('aside.echarts'),
                    },
                    {
                        icon: "el-icon-location",
                        index: "/attr",
                        title: this.$t('aside.transform'),
                    },
                    {
                        icon: "el-icon-location",
                        index: "/table",
                        title: this.$t('aside.table'),
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