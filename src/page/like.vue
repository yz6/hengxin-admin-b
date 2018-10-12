<template>
        <div>
            <el-tabs type="border-card">
                <el-tab-pane label="查看过我电话">
                    <div class="received">
                        <el-table
                            :select-on-indeterminate="false"
                            ref="downloadTable"
                            :data="downloadData"
                            tooltip-effect="light"
                            style="width: 100%"
                            @selection-change="handleSelectionChange">

                            <el-table-column
                                fixed
                                show-overflow-tooltip
                                label="姓名"
                                min-width="180"
                            >
                                <template slot-scope="scope">
                                    <div class="tableNameBox">
                                        <img class="tableAvatar" src="../assets/img/img_boy3001@2x.png" alt=""> <span>{{scope.row.name}}</span>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                show-overflow-tooltip
                                prop="post"
                                label="浏览岗位"
                                align="left"
                                min-width="160"
                            >
                            </el-table-column>
                            <el-table-column
                                label="基本信息"
                                min-width="150"
                                show-overflow-tooltip>
                                <template slot-scope="scope">{{ scope.row.sex }} {{scope.row.age }}岁 {{scope.row.education}}</template>
                            </el-table-column>
                            <el-table-column
                                prop="year"
                                label="工作经验"
                                min-width="140"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="time"
                                label="浏览时间"
                                min-width="150"
                            >
                            </el-table-column>
                            <el-table-column
                                fixed="right"
                                label="操作"
                                width="100">
                                <template slot-scope="scope">
                                    <el-button
                                        type="text"
                                        size="small">
                                        邀请
                                    </el-button>
                                    <span class="v-line"></span>
                                    <el-button
                                        type="text"
                                        size="small">
                                        邀请
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="在线沟通过">
                    <div class="received">
                        <el-table
                            :select-on-indeterminate="false"
                            ref="downloadTable"
                            :data="downloadData"
                            tooltip-effect="light"
                            style="width: 100%"
                            @selection-change="handleSelectionChange">

                            <el-table-column
                                fixed
                                show-overflow-tooltip
                                label="姓名"
                                min-width="180"
                            >
                                <template slot-scope="scope">
                                    <div class="tableNameBox">
                                        <img class="tableAvatar" src="../assets/img/img_boy3001@2x.png" alt=""> <span>{{scope.row.name}}</span>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                show-overflow-tooltip
                                prop="post"
                                label="浏览岗位"
                                align="left"
                                min-width="160"
                            >
                            </el-table-column>
                            <el-table-column
                                label="基本信息"
                                min-width="150"
                                show-overflow-tooltip>
                                <template slot-scope="scope">{{ scope.row.sex }} {{scope.row.age }}岁 {{scope.row.education}}</template>
                            </el-table-column>
                            <el-table-column
                                prop="year"
                                label="工作经验"
                                min-width="140"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="time"
                                label="浏览时间"
                                min-width="150"
                            >
                            </el-table-column>
                            <el-table-column
                                fixed="right"
                                label="操作"
                                width="100">
                                <template slot-scope="scope">
                                    <el-button
                                        type="text"
                                        size="small">
                                        邀请
                                    </el-button>
                                    <span class="v-line"></span>
                                    <el-button
                                        type="text"
                                        size="small">
                                        邀请
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="看过我">
                    <div class="received">
                        <el-table
                            :select-on-indeterminate="false"
                            ref="downloadTable"
                            :data="downloadData"
                            tooltip-effect="light"
                            style="width: 100%"
                            @selection-change="handleSelectionChange">

                            <el-table-column
                                fixed
                                show-overflow-tooltip
                                label="姓名"
                                min-width="180"
                            >
                                <template slot-scope="scope">
                                    <div class="tableNameBox">
                                        <img class="tableAvatar" src="../assets/img/img_boy3001@2x.png" alt=""> <span>{{scope.row.name}}</span>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                show-overflow-tooltip
                                prop="post"
                                label="浏览岗位"
                                align="left"
                                min-width="160"
                            >
                            </el-table-column>
                            <el-table-column
                                label="基本信息"
                                min-width="150"
                                show-overflow-tooltip>
                                <template slot-scope="scope">{{ scope.row.sex }} {{scope.row.age }}岁 {{scope.row.education}}</template>
                            </el-table-column>
                            <el-table-column
                                prop="year"
                                label="工作经验"
                                min-width="140"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="time"
                                label="浏览时间"
                                min-width="150"
                            >
                            </el-table-column>
                            <el-table-column
                                fixed="right"
                                label="操作"
                                width="100">
                                <template slot-scope="scope">
                                    <el-button
                                        type="text"
                                        size="small">
                                        邀请
                                    </el-button>
                                    <span class="v-line"></span>
                                    <el-button
                                        type="text"
                                        size="small">
                                        邀请
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </el-tab-pane>
            </el-tabs>
            <div class="paginationBox">
                <el-pagination
                    background
                    layout=" prev, pager, next,sizes, jumper"
                    :total="1000">
                </el-pagination>
            </div>
        </div>
</template>

<script>
    export default {
        name: "like",
        data(){
            return{
                seePhoneData:[{
                    name:'张茹',
                    post:'销售经理',
                    sex:'女',
                    age:45,
                    education:'高中',
                    year:5
                }]
            }
        }
    }
</script>

<style scoped>

</style>
