<template>
    <div style="width: 100%">
        <el-tabs type="border-card">
            <el-tab-pane label="账号信息">
                <div class="levelTips noselect">
                    你现在是
                    <span style="color: #151515;">管理员</span>
                    账号，还可创建2个子账号！
                    <el-button type="text" style="margin-left: 20px">创建子账号</el-button>
                </div>
                <div class="received">
                    <el-table
                        :select-on-indeterminate="false"
                        ref="accountTable"
                        :data="accountData"
                        tooltip-effect="light"
                        style="width: 100%"
                        @selection-change="handleSelectionChange">
                        <el-table-column
                            show-overflow-tooltip
                            prop="accountNum"
                            label="登录账号"
                            align="left"
                            min-width="200"
                        >
                        </el-table-column>
                        <el-table-column
                            show-overflow-tooltip
                            prop="level"
                            label="类型"
                            align="left"
                            min-width="90"
                        >
                        </el-table-column>
                        <el-table-column
                            show-overflow-tooltip
                            label="招聘负责人"
                            min-width="140"
                        >
                            <template slot-scope="scope">
                                <div class="tableNameBox">
                                    <img class="tableAvatar" src="../assets/img/img_boy3001@2x.png" alt=""> <span>{{scope.row.person}}</span>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column
                            label="部门"
                            min-width="280"
                            prop="department"
                            show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                            prop="phone"
                            label="手机号码"
                            min-width="165"
                        >
                        </el-table-column>
                        <el-table-column
                            label="微信绑定"
                            min-width="140"
                        >
                            <template slot-scope="scope">
                                <el-button type="text">{{scope.row.binding==0?'点击绑定':'取消绑定'}}</el-button>
                            </template>
                        </el-table-column>
                        <el-table-column
                            fixed="right"
                            label="操作"
                            width="280">
                            <template slot-scope="scope">
                                <el-button
                                    type="text"
                                    size="small">
                                    编辑
                                </el-button>
                                <span class="v-line"></span>
                                <el-button
                                    type="text"
                                    size="small">
                                    重置密码
                                </el-button>
                                <span class="v-line"></span>
                                <el-button
                                    type="text"
                                    size="small">
                                    修改手机号
                                </el-button>
                                <span class="v-line"></span>
                                <el-button
                                    type="text"
                                    size="small">
                                    删除
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-tab-pane>
            <el-tab-pane label="企业资料">
                <div class="enterprise noselect">
                    <el-form label-position="right" label-width="100px" :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm">
                        <el-form-item label="企业logo：" prop="logo">
                            <el-upload
                                class="logo-uploader"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :show-file-list="false"
                                :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload">
                                <img class="logoIcon" src="../assets/img/btn_edit@2x.png" alt="" style="position:absolute;right: 0;bottom: 0">
                                <img v-if="ruleForm.logo" :src="ruleForm.logo" class="logo">
                                <img class="logo" src="../assets/img/img_logo1@2x.png"  v-else >
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="企业名称：" prop="name">
                            义乌市恒信人才开发股份有限公司
                        </el-form-item>
                        <el-form-item label="企业简称：" prop="shortName">
                            <el-input v-model="ruleForm.shortName"></el-input>
                        </el-form-item>
                        <el-form-item label="成立时间：" prop="startTime">
                        <el-date-picker
                            :editable="false"
                            v-model="ruleForm.startTime"
                            type="date"
                            placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                        <el-form-item label="企业规模：" prop="scale">
                            <el-select
                                :editable="false"
                                v-model="ruleForm.startTime"
                                placeholder="请选择">
                            </el-select>
                        </el-form-item>
                        <el-form-item label="企业性质：" prop="nature">
                            <el-select
                                :editable="false"
                                v-model="ruleForm.nature"
                                placeholder="请选择">
                            </el-select>
                        </el-form-item>
                        <el-form-item label="所属行业：">
                            <el-select
                                :editable="false"
                                v-model="ruleForm.industry"
                                placeholder="请选择所属行业">
                            </el-select>
                        </el-form-item>
                        <el-form-item label="企业网址：">
                            <el-input v-model="ruleForm.website"  placeholder="请输入企业网址"></el-input>
                        </el-form-item>
                        <el-form-item label="所在地区：" prop="region">

                            <el-cascader
                                placeholder="请选择省/市/区"
                                :options="options"
                                v-model="ruleForm.region"
                                filterable
                            ></el-cascader>
                        </el-form-item>
                        <el-form-item label=' '>
                            <el-input v-model="ruleForm.dRegion"  placeholder="请填写街道、楼宇等详细地址"></el-input>
                        </el-form-item>
                        <el-form-item label='地图标记：'>
                            <div>未标记</div>
                        </el-form-item>
                        <el-form-item label='企业亮点：'>
                            <div>增加企业亮点可以吸引求职者应聘岗位，<el-button type="text">立即增加</el-button>企业亮点</div>
                        </el-form-item>
                        <el-form-item label='企业简介：'>
                            <el-input type="textarea" placeholder="请介绍下您的企业（企业介绍中请避免填写不符合《广告法》要求内容，例如：第一、世界领先、最佳等）" :autosize="{ minRows: 4,maxRows:8}"
                                      v-model="ruleForm.desc">

                            </el-input>
                        </el-form-item>
                        <el-form-item label='企业风采：' id="qyfc">
                            <el-upload
                                action="https://jsonplaceholder.typicode.com/posts/"
                                list-type="picture-card"
                                :on-preview="handlePictureCardPreview"
                                :on-remove="handleRemove"
                                :on-progress="progress"
                                :limit="3"
                                :on-success="success"
                                :file-list="ruleForm.qyfcList">
                                <el-button  style="height: 35px;line-height: 35px;padding: 0 20px;background:#4C8DEB;color: #fff  ">上传</el-button>
                            </el-upload>
                            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                            <el-dialog :visible.sync="ruleForm.dialogVisible">
                                <img width="100%" :src="ruleForm.dialogImageUrl" alt="">
                            </el-dialog>
                        </el-form-item>
                        <el-form-item label=" ">
                            <el-button type="primary" style="height: 35px;line-height: 35px;padding: 0 10px;">保存并预览</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-tab-pane>
            <el-tab-pane label="积分任务">积分任务</el-tab-pane>
            <el-tab-pane label="认证管理">认证管理</el-tab-pane>

        </el-tabs>
    </div>
</template>

<script>
    export default {
        name: "information",
        data() {
            return {
                accountData: [{
                    accountNum: '91job-it',
                    level: '管理员',
                    person: '张茹',
                    department: '义乌市恒信人才开发股份有限公司',
                    phone: '13100678853',
                    binding: 0,
                }],
                ruleForm:{
                    logo:'',
                    name:'',
                    shortName:'恒信人才',
                    startTime:'',
                    scale:'',
                    nature:'',
                    industry:'',
                    website:'',
                    dRegion:'',
                    dialogImageUrl:'',
                    dialogVisible:false,
                    qyfcList:[]
                },
                rules: {
                    logo: [
                        { required: true, },
                    ],
                    shortName:[{
                        required: true, message: '输入企业简称', trigger: 'blur'
                    }],
                    scale:[{
                        required: true, message: '选择企业规模', trigger: 'blur'
                    }],
                    nature:[{
                        required: true,message: '选择企业性质', trigger: 'blur'
                    }],
                    region:[{
                        required:true,message: '请选择省/市/区',trigger: 'blur'
                    }],
                    dRegion:[{
                        required:true,message: '请填写详细地址',trigger: 'blur'
                    }],
                }
            }
        },
        computed: {

        },
        watch:{
            'ruleForm.qyfcList':function(value){
                console.log(this.ruleForm.qyfcList)
            }
        },
        methods:{
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                console.log(file)
                this.ruleForm.dialogImageUrl = file.url;
                this.ruleForm.dialogVisible = true;
            },
            success(response, file, fileList){
                console.log(response)
                console.log(file)
                console.log(fileList)

            },
        }
    }
</script>

<style lang="less">
    .levelTips {
        margin-bottom: 15px;
        font-size: 14px;
        color: #999999;
        text-align: left;
    }

    .enterprise {
        padding: 50px 70px;
        background: #FFFFFF;
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.06);
        .el-form-item {
            margin-bottom: 20px!important;
            display: flex;
            align-items: center;

        }
        .el-form-item__content{
            margin-left:40px!important;

        }
        .el-form-item__label{
            font-size: 14px;
            color: #3F3F3F;
        }
        .el-input,.el-textarea{
            width: 468px;
        }
    }
    .logo-uploader{
        width: 72px;
        height: 72px;
        position: relative;
        .logo{
            width: 100%;
            border-radius: 50%;
            border: 1px solid #ccc;
        }
        .logoIcon{
            width: 20px;
            height: 20px;
        }

    }
    #qyfc{
        align-items: flex-start;
        .el-upload--picture-card{
            border:none;
            background: #fff;
        }
        .el-upload-list__item:first-child{
            margin: 0;
        }
        .el-upload-list--picture-card .el-upload-list__item:first-child{
            margin-left: 0;
        }
        .el-upload-list--picture-card .el-upload-list__item{
            margin: 0 10px;
            width: 90px;
            height: 90px;
        }
        .el-upload--picture-card{
            width: 0;
            height: 0;
            position: relative;
            top: -52px;
            left: 0;
        }
        .el-input{
            margin-bottom: 20px;
        }
    }
</style>
