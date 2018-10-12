<template>
    <div style="width: 100%;" class="resumeBox">
        <div class="searchBtn noselect" v-show="tabsIndex!='3'" @click="searchShow = !searchShow">
            {{searchShow?'收起':'展开'}}
        </div>
        <el-tabs @tab-click="tabSwitch" type="border-card">
               <div>
                   <el-collapse-transition name="el-zoom-in-top">
                       <div class="searchBox" v-show="searchShow &&tabsIndex!='3'">
                           <el-form :inline="true" :model="searchCondition" class="demo-form-inline">
                               <el-form-item label="招聘负责人">
                                   <el-select style="width:120px" v-model="searchCondition.time" placeholder="请选择">
                                       <el-option label="区域一" value="shanghai"></el-option>
                                       <el-option label="区域二" value="beijing"></el-option>
                                   </el-select>
                               </el-form-item>
                               <el-form-item label="">
                                   <el-select style="width:120px" v-model="searchCondition.time" placeholder="请选择">
                                       <el-option label="区域一" value="shanghai"></el-option>
                                       <el-option label="区域二" value="beijing"></el-option>
                                   </el-select>
                               </el-form-item>
                               <el-form-item :label="tabsIndex=='0'?'应聘时间:':tabsIndex=='1'?'下载时间:':tabsIndex=='2'?'收藏时间:':''">
                                   <el-select style="width:120px" v-model="searchCondition.time" placeholder="请选择">
                                       <el-option label="区域一" value="shanghai"></el-option>
                                       <el-option label="区域二" value="beijing"></el-option>
                                   </el-select>
                               </el-form-item>
                               <el-form-item label="学历:" >
                                   <el-select style="width: 120px" v-model="searchCondition.education" placeholder="请选择">
                                       <el-option label="区域一" value="shanghai"></el-option>
                                       <el-option label="区域二" value="beijing"></el-option>
                                   </el-select>
                               </el-form-item>
                               <el-form-item label="工作经验:">
                                   <el-select style="width:122px" v-model="searchCondition.experience" placeholder="请选择">
                                       <el-option label="区域一" value="shanghai"></el-option>
                                       <el-option label="区域二" value="beijing"></el-option>
                                   </el-select>
                               </el-form-item>
                               <el-form-item v-show="tabsIndex=='2'" label="分组:">
                                   <el-select style="width:100px" v-model="searchCondition.experience" placeholder="请选择">
                                       <el-option label="区域一" value="shanghai"></el-option>
                                       <el-option label="区域二" value="beijing"></el-option>
                                   </el-select>
                               </el-form-item>
                           </el-form>
                           <div style="margin: 0px 33px; margin-bottom: 10px">
                               <el-input placeholder="以关键字搜索如：姓名" v-model="input4">
                                   <template slot="prepend"><i class="el-icon-search"></i></template>
                               </el-input>
                           </div>
                       </div>

                   </el-collapse-transition>
               </div>

            <el-tab-pane>
                <span slot="label">收到的简历 <span class="paneNum">15</span></span>
                <div class="received">
                    <div :class="'showPostBtn '+(canShowBtn?'showPostAct':'')"> 查看</div>
                    <div :class="'delPostBtn '+(canShowBtn?'showPostAct':'')"> 删除</div>
                    <el-table
                        :select-on-indeterminate="false"
                        ref="receivedTable"
                        :data="receivedData"
                        tooltip-effect="light"
                        style="width: 100%"
                        @selection-change="handleSelectionChange">
                        <el-table-column
                            type="selection"
                            min-width="34">
                        </el-table-column>
                        <el-table-column
                            fixed
                            show-overflow-tooltip
                            label="全部姓名"
                            min-width="170"
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
                            label="应聘岗位"
                            align="left"
                            min-width="220"
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
                            min-width="150"
                            >
                        </el-table-column>
                        <el-table-column
                            prop="time"
                            label="应聘时间"
                            min-width="150"
                            >
                        </el-table-column>
                        <el-table-column
                            fixed="right"
                            label="操作"
                            width="140">
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
                                    拒绝
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-tab-pane>
            <el-tab-pane>
                <span slot="label">下载的简历 <span class="paneNum">20</span></span>
                <div class="received">
                    <div :class="'showPostBtn '+(canShowBtn?'showPostAct':'')"> 查看</div>
                    <div :class="'delPostBtn '+(canShowBtn?'showPostAct':'')"> 删除</div>
                    <el-table
                        :select-on-indeterminate="false"
                        ref="downloadTable"
                        :data="downloadData"
                        tooltip-effect="light"
                        style="width: 100%"
                        @selection-change="handleSelectionChange">
                        <el-table-column
                            type="selection"
                            min-width="34">
                        </el-table-column>
                        <el-table-column
                            fixed
                            show-overflow-tooltip
                            label="全部姓名"
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
                            label="应聘岗位"
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
                            label="联系方式"
                            prop="phoneNum"
                            min-width="180"
                            show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                            prop="year"
                            label="工作经验"
                            min-width="140"
                        >
                        </el-table-column>
                        <el-table-column
                            prop="time"
                            label="下载时间"
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
                            </template>
                        </el-table-column>
                    </el-table>
                </div>3
            </el-tab-pane>
            <el-tab-pane>
                <span slot="label">收藏的简历 <span class="paneNum">40</span></span>
                <div class="received">
                    <div :class="'showPostBtn '+(canShowBtn?'showPostAct':'')"> 查看</div>
                    <div :class="'delPostBtn '+(canShowBtn?'showPostAct':'')"> 取消收藏</div>

                    <el-table
                        :select-on-indeterminate="false"
                        ref="collectorsTable"
                        :data="collectorsData"
                        tooltip-effect="light"
                        style="width: 100%"
                        @selection-change="handleSelectionChange">
                        <el-table-column
                            type="selection"
                            min-width="34">
                        </el-table-column>
                        <el-table-column
                            fixed
                            show-overflow-tooltip
                            label="全部姓名"
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
                            label="应聘岗位"
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
                            label="下载时间"
                            min-width="150"
                        >
                        </el-table-column>
                        <el-table-column
                            label="分组"
                            prop="group"
                            min-width="150"
                            show-overflow-tooltip>
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
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-tab-pane>
            <el-tab-pane>
                <span slot="label">举报的简历 <span class="paneNum">0</span></span>
                <div class="received">
                    <div :class="'showPostBtn '+(canShowBtn?'showPostAct':'')"> 查看</div>
                    <div :class="'delPostBtn '+(canShowBtn?'showPostAct':'')"> 删除</div>
                        <el-table
                            :select-on-indeterminate="false"
                            ref="reportTable"
                            :data="reportData"
                            tooltip-effect="light"
                            style="width: 100%"
                            @selection-change="handleSelectionChange">
                            <el-table-column
                                type="selection"
                                min-width="34">
                            </el-table-column>
                            <el-table-column
                                fixed
                                show-overflow-tooltip
                                label="全部姓名"
                                min-width="180">
                                <template slot-scope="scope">
                                    <div class="tableNameBox">
                                        <img class="tableAvatar" src="../assets/img/img_boy3001@2x.png" alt=""> <span>{{scope.row.name}}</span>
                                    </div>
                                </template>
                            </el-table-column>

                        <el-table-column
                            show-overflow-tooltip
                            class-name="reason"
                            prop="reason"
                            label="举报原因"
                            min-width="250">
                        </el-table-column>
                            <el-table-column
                                label="审核状态"
                                min-width="150">
                                <template slot-scope="scope">
                                    <span :style="{backgroundColor:(scope.row.state==0?'#ED4014':'#19BE6B')}" class="postState"></span>
                                    <span>{{scope.row.state==0?'未审核':'已审核'}}</span>
                                </template>
                            </el-table-column>
                        <el-table-column
                            show-overflow-tooltip
                            prop="feedback"
                            label="审核反馈"
                            min-width="340">
                        </el-table-column>
                        <el-table-column
                            prop="time"
                            label="举报时间"
                            min-width="150">
                        </el-table-column>
                        <el-table-column
                            fixed="right"
                            label="操作"
                            min-width="100">
                            <template slot-scope="scope">
                                <el-button  type="text" size="small">撤销举报</el-button>
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
        name: "resume",
        data(){
            return{
                searchShow:true,
                //当前tab
                tabsIndex:'0',
                //筛选条件
                searchCondition:{
                    time:'',
                    education:'',
                    experience:'',
                },
                downloadData:[
                    {
                    name:'giao哥',
                    post:'销售经理',
                    sex:'女',
                    age:25,
                    education:'高中',
                    year:'十五年',
                    time:'刚刚',
                    phoneNum:18017265821,
                },{
                    name:'贺兰娜拉拉拉拉',
                    post:'人力资源管理人力资源管理',
                    sex:'女',
                    age:28,
                    education:'本科',
                    year:'两年',
                    time:'30分钟前',
                    phoneNum:18837453671,
                },{
                    name:'小giao',
                    post:'电子商务运营',
                    sex:'男',
                    age:25,
                    education:'硕士',
                    year:'一年',
                    time:'1天前',
                    phoneNum:17567891387,
                },{
                    name:'苏小伟',
                    post:'web前端开发',
                    sex:'男',
                    age:25,
                    education:'专科',
                    year:'两年',
                    time:'2018-9-17',
                    phoneNum:18567891387,
                },{
                    name:'刘玉丹',
                    post:'设计总监',
                    sex:'女',
                    age:25,
                    education:'本科',
                    year:'应届毕业生',
                    time:'2天前',
                    phoneNum:18567891387,
                }],
                receivedData:[
                    {
                    name:'张茹',
                    post:'销售经理',
                    sex:'女',
                    age:25,
                    education:'高中',
                    year:'十五年',
                    time:'刚刚',
                    phoneNum:18567891387,
                },{
                    name:'贺兰娜拉拉拉拉',
                    post:'人力资源管理人力资源管理',
                    sex:'女',
                    age:28,
                    education:'本科',
                    year:'两年',
                    time:'30分钟前'
                },{
                    name:'程先生',
                    post:'电子商务运营',
                    sex:'男',
                    age:25,
                    education:'硕士',
                    year:'一年',
                    time:'1天前'
                },{
                    name:'刘玉丹',
                    post:'设计总监',
                    sex:'女',
                    age:25,
                    education:'本科',
                    year:'应届毕业生',
                    time:'2天前'
                },{
                    name:'苏小伟',
                    post:'web前端开发',
                    sex:'男',
                    age:25,
                    education:'专科',
                    year:'两年',
                    time:'2018-9-17'
                }],
                collectorsData:[
                    {
                        name:'小伟',
                        post:'产品经理',
                        sex:'女',
                        age:25,
                        education:'高中',
                        year:'十五年',
                        time:'刚刚',
                        phoneNum:18567891387,
                        group:"待考虑"
                    },{
                        name:'贺兰娜拉拉拉拉',
                        post:'UI设计',
                        sex:'女',
                        age:28,
                        education:'本科',
                        year:'两年',
                        time:'30分钟前',
                        group:"还不错"
                    },{
                        name:'程先生',
                        post:'电子商务运营',
                        sex:'男',
                        age:25,
                        education:'硕士',
                        year:'一年',
                        time:'1天前',
                        group:"默认分组"
                    },{
                        name:'张丹',
                        post:'设计总监',
                        sex:'女',
                        age:25,
                        education:'本科',
                        year:'应届毕业生',
                        time:'2天前',
                        group:"默认分组"
                    },{
                        name:'苏大伟',
                        post:'java后台',
                        sex:'男',
                        age:25,
                        education:'专科',
                        year:'两年',
                        time:'2018-9-17',
                        group:"默认分组"
                    }
                ],
                reportData:[{
                    name:"小伟",
                    state:0,
                    reason:'小伟怎么这么能叫啊是啊asd安抚安抚安抚',
                    feedback:"已于求职者沟通，确认求职者已找到工作，目前不再考虑换工作。已建议求职者更改求职状态。已于求职者沟通，确认求职者已找到工作，目前不再考虑换工作。已建议求职者更改求职状态。",
                    time:'刚刚'
                },{
                    name:"giao哥",
                    state:0,
                    reason:'不接电话',
                    feedback:"已于求职者沟通，确认求职者已找到工作，目前不再考虑换工作。已建议求职者更改求职状态。已于求职者沟通，确认求职者已找到工作，目前不再考虑换工作。已建议求职者更改求职状态。",
                    time:'1天前'
                },{
                    name:"灵堂自",
                    state:1,
                    reason:'不接电话',
                    feedback:"-",
                    time:'2018-06-22'
                }],
                canShowBtn:false
            }
        },
        methods:{
            tabSwitch(e){
                console.log(e.index)
                this.tabsIndex = e.index
                this.initTable()
                // console.log(this.$refs.multipleTable.clearSelection)
            },
            handleSelectionChange(val) {
                this.canShowBtn = val.length>0
            },
            //切换tab重置选择信息
            initTable(){
                this.$refs.downloadTable.clearSelection();
                this.$refs.receivedTable.clearSelection();
                this.$refs.collectorsTable.clearSelection();
                this.$refs.reportTable.clearSelection();

            }
        }

    }
</script>

<style lang="less">


    .searchBox:after{


    }
    .paneNum{
        margin-right: 10px;
    }
    .resumeBox{
        position: relative;
    }
    .searchBtn{
        position: absolute;
        z-index: 100;
        top: 15px;
        right: 40px;
        cursor: pointer;
    }
    .received{
        .el-table-column--selection{
           overflow: hidden;
        }



    }
    .postState{
        width: 6px;
        height: 6px;
        border-radius: 50%;
        margin-right: 5px;
        display: inline-block;
        vertical-align: middle;
    }

</style>
