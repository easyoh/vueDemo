<template>
    <div class="header">
        <el-row :gutter="10">
            <el-col :xs="12" :sm="18" :md="18" :lg="20" style="text-align: left;">
                <el-button type="primary" circle :icon="collapse?'el-icon-arrow-left':'el-icon-arrow-right'"
                    @click="collpseChange"></el-button>
                <span style="margin-left: 10px;">{{$t('message.text')}}</span>
            </el-col>
            <el-col :xs="6" :sm="3" :md="3" :lg="2">
                <el-select v-model="selectValue" @change="langChange" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :xs="6" :sm="3" :md="3" :lg="2" style="text-align: right;">
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
    .el-row {
        height: 100%;
    }
</style>

<script>
    import bus from "@/components/bus.js"
    export default {
        data() {
            return {
                collapse: false,
                selectValue: '',
                options: [{
                    value: 'cn',
                    label: '中文'
                }, {
                    value: 'en',
                    label: 'English'
                }]
            }
        },
        created() {
            let that = this;
            console.log(localStorage.lang)
            that.selectValue = localStorage.lang == undefined ? 'cn' : localStorage.lang
        },
        methods: {
            collpseChange() {
                this.collapse = !this.collapse;
                bus.$emit('collpseChange', this.collapse);
            },
            langChange(e) {
                // console.log(e)
                localStorage.setItem('lang', e);
                this.$i18n.locale = e;
                // 只会去服务器获取最新的数据，只刷新数据不刷新页面
                //window.location.reload() 重载页面
                window.history.go(0);
            }

        }

    }
</script>