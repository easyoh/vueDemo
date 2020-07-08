<template>
    <div class="app-content">
        <div class="table_expand_item">
            <b>element-ui table只展开一行demo</b>
            <el-table v-loading="loading" :data="newData" :row-key="getRowKeys" @row-click="rowClick" :expand-row-keys="expands" border
                style="width:750px; margin-top:20px;" @expand-change="expandSelect">
                <el-table-column type="expand" label="展开" width="60px">
                    <template slot-scope="scope">
                        住址：{{ scope.row.address}}
                    </template>
                </el-table-column>
                <el-table-column prop="date" label="日期" align="center" />
                <el-table-column prop="name" label="姓名" align="center" />
                <el-table-column prop="address" label="地址" align="center" />
                <el-table-column label="操作" align="center" min-width="100">
                    <template>
                        <el-button type="primary" @click="editName">修改</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class='pagination'>
            <span class="pagination">当前共 {{sumCount}} 条信息，当前
                {{currPage}}/{{(Math.ceil(sumCount/pageSize)==0?1:Math.ceil(sumCount/pageSize))}}页</span>
            <div>
                <page :pageSize="pageSize" :sumCount="sumCount" :currPage="currPage"
            @handleSizeChange="handleSizeChange"></page>
            </div>
        </div>
        <div>
            <Tdialog ref='edit'>
                <el-form>
                    <el-label>
                        编辑姓名
                    </el-label>
                    <el-input></el-input>
                </el-form>
            </Tdialog>
        </div>
    </div>
</template>

<style>
    .pagination{
        margin-top: 20px;
    }
</style>

<script>
    import Tdialog from '@/components/dialog.vue'
    import page from '@/components/pagination.vue'
    export default {
        components: {
            Tdialog,
            page
        },
        data() {
            return {
                loading:true,
                newData:[],
                tableData: [{
                    id: 'a',
                    date: '2020-05-02',
                    name: 'cqq',
                    address: '合肥'
                }, {
                    id: 'b',
                    date: '2020-05-04',
                    name: 'cqq',
                    address: '合肥'
                }, {
                    id: 'c',
                    date: '2020-05-01',
                    name: 'cqq',
                    address: '蚌埠'
                }, {
                    id: 'd',
                    date: '2020-05-03',
                    name: 'cqq',
                    address: '蚌埠'
                }],
                sumCount:0,
                currPage:1,
                pageSize:2,
                getRowKeys(row) { // 行数据的Key
                    return row.id
                },
                expands: [] // 通过该属性设置Table目前的展开行，需要设置row-key属性才能使用，该属性为展开行的keys数组
            }
        },
        mounted () {
            this.loading = false;
            this.sumCount = this.tableData.length;
            this.newData = this.tableData.slice(0, 2);
        },
        methods: {
            handleSelectionChange(val){
                console.log(val);
            },
            handleSizeChange(val) {
                console.log(val);
                this.currPage = val.currPage;
                this.pageSize = val.pageSize;
                let start = (this.currPage-1)*this.pageSize;
                let end = this.currPage*this.pageSize;
                this.newData = this.tableData.slice(start, end);
            },
            // table每次只能展开一行
            expandSelect(row, expandedRows) {
                this.expands = []
                if (expandedRows.length > 0) {
                    row ? this.expands.push(row.id) : ''
                }
            },
            editName(){
                this.$refs.edit.isShow = true; 
                this.$refs.edit.title = '编辑';
            },
            rowClick(row, event, column) { //控制展开行
               
                var NoIndex = column.type.indexOf("expand");
                if (NoIndex == 0) {
                    this.expands = [];
                    return;
                }
                if (event.label == "日期") {

                    Array.prototype.remove = function (val) {
                        let index = this.indexOf(val);
                        if (index > -1) {
                            this.splice(index, 1);
                        }
                    };
                    if (this.expands.indexOf(row.id) < 0) { //确保只展开一行
                        this.expands.shift();
                        this.expands.push(row.id);
                    } else {
                        this.expands.remove(row.id);
                    }
                }
            },
        }
    }
</script>
