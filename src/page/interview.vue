<template>
    <div>
        <div class="searchBox">
            <el-form :inline="true" :model="searchCondition" class="demo-form-inline">
                <el-form-item label="岗位名称:">
                    <el-select style="width:122px" v-model="searchCondition.time" placeholder="不限">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="来源渠道:" >
                    <el-select style="width: 158px" v-model="searchCondition.education" placeholder="不限">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="面试状态:">
                    <el-select style="width:122px" v-model="searchCondition.experience" placeholder="不限">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div style="margin:0 33px;margin-bottom: 10px">
                <el-input placeholder="以关键字搜索如：姓名" v-model="searchCondition.name">
                    <template slot="prepend"><i class="el-icon-search"></i></template>
                </el-input>
            </div>
        </div>
        <div class="received" style="margin-top: 20px;">
            <div :class="'showPostBtn '+(canShowBtn?'showPostAct':'')"> 查看</div>
            <div :class="'delPostBtn '+(canShowBtn?'showPostAct':'')"> 删除</div>
            <el-table
                :select-on-indeterminate="false"
                ref="interviewTable"
                :data="interviewData"
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
                    min-width="190">
                    <template slot-scope="scope">
                       <div class="tableNameBox">
                           <img class="tableAvatar" src="../assets/img/img_boy3001@2x.png" alt=""> <span>{{scope.row.name}}</span>
                       </div>
                    </template>
                </el-table-column>
                <el-table-column
                    show-overflow-tooltip
                    class-name="reason"
                    prop="phone"
                    label="联系方式"
                    min-width="160">
                </el-table-column>
                <el-table-column
                    prop="post"
                    label="应聘岗位"
                    min-width="180">

                </el-table-column>
                <el-table-column
                    show-overflow-tooltip
                    label="基本信息"
                    min-width="150">
                    <template slot-scope="scope">{{ scope.row.sex }} {{scope.row.age }}岁 {{scope.row.education}}</template>
                </el-table-column>
                <el-table-column
                    prop="time"
                    label="面试时间"
                    min-width="200">
                </el-table-column>
                <el-table-column
                    label="面试状态"
                    min-width="150">
                    <template slot-scope="scope">
                        <span :style="{backgroundColor:(scope.row.state==1?'#ED4014':scope.row.state==2?'#CCCCCC':'#19BE6B')}" class="postState"></span>
                        <span>{{scope.row.state==0?'已同意':scope.row.state==1?'已拒绝':'待确定'}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                prop="time"
                label="面试标签"
                min-width="190">
                    <template slot-scope="scope">
                        <el-tag
                            v-if="scope.row.source!=''"
                            closable
                            type="info"
                            color="#F5F5F5"
                            style="color:#666666"
                            :disable-transitions="false"
                            @close="handleClose(scope.row.source,scope.$index)">
                            {{scope.row.source}}
                        </el-tag>
                        <el-button v-if="scope.row.source==''"  class="button-new-tag" size="small" @click="showInput(scope.$index)">+</el-button>
                    </template>
            </el-table-column>
                <el-table-column
                    prop="source"
                    label="来源渠道"
                    min-width="150">
                </el-table-column>
                <el-table-column
                    fixed="right"
                    label="操作"
                    min-width="120">
                    <template slot-scope="scope">
                        <el-button  type="text" size="small">修改时间</el-button>
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
        name: "interview",
        data(){
            return{
                inputVisible: false,
                inputValue: '',
                searchCondition:{
                    time:'',
                    education:'',
                    experience:'',
                    group:'',
                    name:''
                },
                interviewData:[{
                    name:'小伟',
                    phone:13100678853,
                    post:'前端开发',
                    sex:'女',
                    age:25,
                    education:'高中',
                    time:'2018-08-10 04:10',
                    state:1,
                    source:'搜索的简历',
                },{
                    name:'贺兰娜拉拉拉拉',
                    phone:13100678853,
                    post:'人力资源管理',
                    sex:'女',
                    age:25,
                    education:'高中',
                    time:'2018-08-10 04:10',
                    state:0,
                    source:'收到的简历',
                },{
                    name:'贺兰娜拉拉拉拉',
                    phone:13100678853,
                    post:'电子商务运营',
                    sex:'男',
                    age:25,
                    education:'本科',
                    time:'2018-08-10 04:10',
                    state:2,
                    source:'',
                }],
                canShowBtn:false
            }
        },
        created(){
          this.interviewData.forEach((v,i)=>{
              this.interviewData[i].inputShow = false
          })

        },
        methods:{
            handleSelectionChange(val) {
                this.canShowBtn = val.length>0
            },
            handleClose(tag,ind) {
                console.log(this.interviewData[ind])
                console.log(tag,ind)
                // console.log(this.interviewData[ind].source)
              this.interviewData[ind].source = '';
                console.log(this.interviewData[ind])
            },

            showInput(ind) {
                this.$prompt('请输入标签', '面试标签', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then(({ value }) => {
                    this.interviewData[ind].source = value
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });
            },
            handleInputConfirm() {
                // let inputValue = this.inputValue;
                // if (inputValue) {
                //     this.dynamicTags.push(inputValue);
                // }
                // this.inputVisible = false;
                this.inputValue = '';
            }

        }
    }
</script>

<style lang="less">
    .el-tag + .el-tag {
        margin-left: 10px;
    }
    .el-tag{
        height: 25px;
        line-height: 25px;
    }
    .button-new-tag {
        padding-top: 0;
        padding-bottom: 0;
        position: absolute;
        width: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 24px;
        border: 1px  #D5D5D5 dotted;
        border-radius: 4px;
        top: 15px;
        left: 33px;
        color: #666666;
    }
    .input-new-tag {
        width: 90px;
        margin-left: 10px;
        vertical-align: bottom;
    }
    .input-new-tag{
        margin-left: 0;
       .el-input__inner{
           height: 22px;
           line-height: 22px;
           padding: 0;
           width: 80px;
       }
    }
</style>
