<template>
    <div class="recommend">
        <el-tabs type="border-card" @tab-click="tabClick" :value="activeTab">
            <el-tab-pane  v-for="item in tabData" :label="item.post" :key="key" :name="item.post"></el-tab-pane>
            <el-tab-pane class="morePane" :disabled='morePanClick' :name="moreCommend"><span slot="label">
       <el-dropdown @command="handleCommand" >
      <span class="moreTabSpan">
        <i class="el-icon-arrow-down el-icon--left"></i>{{!morePanClick?moreCommend:'更多推荐'}}
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="前端开发">前端开发</el-dropdown-item>
        <el-dropdown-item command="java后台">java后台</el-dropdown-item>
        <el-dropdown-item command="安卓开发">安卓开发</el-dropdown-item>
        <el-dropdown-item command="ios开发">ios开发</el-dropdown-item>
        <el-dropdown-item command="自身服务器软甲工程师888888">自身服务器软件工程师</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
            </span></el-tab-pane>
        </el-tabs>
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
        name: "recommend",
        data(){
            return{
                morePanClick:true,
                moreCommend:false,
                tabData:[{
                    post:'视觉设计师'
                },{
                    post:'平拍视觉设计专家'
                },{
                    post:'销售'
                },{
                    post:'财务经理'
                },{
                    post:'自身服务器软件工程设计师adsfsadf'
                },],
                activeTab:'视觉设计师'
            }
        },
        methods: {
            handleCommand(command) {
                this.$message('click on item ' + command);
                this.moreCommend = command
                this.morePanClick=false
                this.activeTab = command
            },
            tabClick(e){
                console.log(e.label)
            }
        }
    }
</script>

<style lang="less">
    .recommend{
        .el-tabs__nav{
            width: 100%;
            position: relative;
        }
      .el-tabs__header .el-tabs__item.is-active{
            .moreTabSpan{
                color: #FF844C;
            }
        }
        .el-tabs__header .el-tabs__item:last-child{
            position: absolute;
            right: 0;
            font-size: 18px;
            max-width: 200px!important;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

    }
</style>
