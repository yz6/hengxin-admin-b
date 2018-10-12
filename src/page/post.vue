<template>
    <div style="width: 100%">
        <div v-show="!releasePageShow" style="width:100%">
            <div class="bannerBox" v-show="bannerShow">
                <i class="closeBannerBtn el-icon-close" @click="hiddenBanner"></i>
                <el-carousel :autoplay="false" arrow="never" trigger="click" height="100px">
                    <el-carousel-item v-for="item in dataImg" :key="item">
                        <div style="height: 100%" :style="{backgroundImage:'url('+item+')'}"></div>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="greet"><img src="../assets/img/img_morning@2x.png" alt="">晚上好，亲爱的恒信人才HR，快乐舒畅地迎接明天的工作～</div>

            <div class="postList">
                <div class="releaseBtn noselect" @click="goReleasePage">
                    <i class="el-icon-circle-plus-outline" style="margin-right: 5px"></i>
                    发布岗位
                </div>
                <el-tabs type="border-card">

                    <el-tab-pane label="岗位管理">
                        <div v-for="item in postListData">
                            <div class="publisher">
                                以下是
                                <span style="color: #000">
                            {{item.belongTo}}</span>
                                发布的简历
                            </div>
                            <ul>
                                <li v-for="i in  item.data"  :class="'postItem '+(i.close?'close':'open')">
                                    <div class="leftTip" v-if="i.close">{{i.xtsd?'系统锁定':'已关闭'}}</div>
                                    <div class="postName">
                                        <div class="top noselect">
                                            <div class="name" :title="i.postName">{{i.postName}}</div>

                                            <el-popover
                                                placement="bottom-start"
                                                width="150"
                                                :disabled="i.close"
                                                trigger="click">
                                                <div class="qrCodeImg"></div>
                                                <div style="text-align: center;margin-top: -10px;font-size: 14px;
color: #666666;">微信扫一扫分享岗位
                                                </div>
                                                <div class="qrCode" slot="reference"></div>
                                            </el-popover>
                                            <div class="yulan">【预览】</div>
                                        </div>
                                        <div class="bottom">
                                            <div>本科</div>
                                            <div>{{i.year}}年</div>
                                            <div>义乌</div>
                                        </div>
                                    </div>
                                    <div class="postStatistics">
                                        <div class="numBox noselect">
                                            <div>
                                                <div class="num">
                                                    {{i.browse}}
                                                </div>
                                                <div class="words">
                                                    浏览
                                                </div>
                                            </div>
                                            <img class="rightArrow" src="../assets/img/icon_left_post@2x.png" alt="">
                                            <div>
                                                <div class="num">
                                                    {{i.Apply}}
                                                </div>
                                                <div class="words">
                                                    应聘
                                                </div>
                                            </div>
                                            <img class="rightArrow" src="../assets/img/icon_left_post@2x.png" alt="">
                                            <div>
                                                <div class="num">
                                                    {{i.Interview}}
                                                </div>
                                                <div class="words">
                                                    面试
                                                </div>
                                            </div>
                                        </div>
                                        <div class="refresh noselect">
                                            <div>
                                                <el-tooltip :disabled="i.close" class="item" effect="dark"
                                                            :content="i.time+'小时后重置刷新次数：50'" placement="top">
                                                    <div class="refreshWords">
                                                    <span
                                                        style="font-size: 14px;letter-spacing: 0.24px;text-align: left">今日剩余刷新：</span>
                                                        {{i.refresh}}
                                                    </div>

                                                </el-tooltip>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="operation noselect">
                                        <div v-if="!i.close" class="operationBtn">刷新岗位</div>
                                        <div v-if="!i.close" class="operationBtn">匹配人才</div>
                                        <div v-if="i.close && !i.xtsd" class="operationBtn">开启简历</div>
                                        <div v-if="i.close && i.xtsd" class="operationBtn">查看详情</div>
                                        <el-popover

                                            placement="bottom-end"
                                            width="68"
                                            trigger="click">
                                            <ul class="morePopover noselect" style="padding: 0">
                                                <li class="moreItem">编辑</li>
                                                <li class="moreItem">关闭</li>
                                                <li class="moreItem">删除</li>
                                            </ul>
                                            <div class="moreBtn" slot="reference"><img v-if="!i.close"
                                                                                       src="../assets/img/btn_more@2x.png"
                                                                                       alt=""></div>
                                        </el-popover>

                                    </div>
                                </li>
                            </ul>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="被投诉的岗位">
                        <el-table
                            tooltip-effect="light"
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column
                                prop="name"
                                label="岗位名称"
                                min-width="150">
                            </el-table-column>
                            <el-table-column
                                label="岗位状态"
                                min-width="150">
                                <template slot-scope="scope">
                                <span :style="{backgroundColor:(scope.row.state==0?'#ED4014':'#19BE6B')}"
                                      class="postState"></span>
                                    <span>{{scope.row.state==0?'已停招':'在招'}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                show-overflow-tooltip
                                class-name="reason"

                                prop="reason"
                                label="举报原因"

                                min-width="292">
                            </el-table-column>
                            <el-table-column
                                show-overflow-tooltip
                                prop="feedback"
                                label="审核反馈"
                                min-width="292">
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
                                    <el-button type="text" size="small">查看</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                </el-tabs>
            </div>
            <div class="paginationBox">
                <el-pagination
                    background
                    layout=" prev, pager, next,sizes, jumper"
                    :total="1000">
                </el-pagination>
            </div>
        </div>
        <div v-show="releasePageShow" class="releasePage">
            <div class="releaseTitle">发布岗位</div>
            <div class="titleTips">
                <span>你可同时发布100个岗位，当前还可以发布95个岗位，岗位有效期45天。。</span>
                <el-button type="text" @click="cancelRelease()">返回岗位列表</el-button>
            </div>
            <el-form inline-message :model="ruleForm" :rules="rules" ref="ruleForm" label-width="140px" class="demo-ruleForm">
                <el-form-item label="岗位名称：" prop="name">
                    <el-input v-model="ruleForm.name" placeholder="请输入岗位名称"></el-input>
                </el-form-item>
                <div class="postTips">请准确填写岗位名称和岗位类别，岗位发布后将不可编辑，以避免求职者投递前后岗位名不一致</div>
                <el-form-item label="岗位类别：" prop="region">
                    <el-select v-model="ruleForm.postType" placeholder="请选择岗位类别">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>

                    </el-select>
                </el-form-item>
                <el-form-item label="岗位性质：" prop="resource">
                    <el-radio-group v-model="ruleForm.resource">
                        <el-radio label="全职"></el-radio>
                        <el-radio label="兼职"></el-radio>
                    </el-radio-group>

                </el-form-item>
                <el-form-item label="岗位月薪：" prop="salary">
                    <el-radio-group v-model="ruleForm.salary">
                        <el-radio :label="1">固定薪资</el-radio>
                        <el-radio :label="2">底薪 + 提成</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item style="margin-top: -10px ;font-size: 14px;color: #999999;" label="" prop="salary">
                    <div class='range' v-show="ruleForm.salary ==1 ||ruleForm.salary ==2">
                       <div>
                           <p>底薪：</p>
                           <el-input style="width: 100px" type="number" v-model="input">
                               <i slot="suffix" style="margin-right: 5px">
                                   元
                               </i>
                           </el-input>

                           <span style="margin: 0 5px;font-size: 14px;color: #CCCCCC;"> ~ </span>

                           <el-input style="width: 100px"  type="number" v-model="input">
                               <i slot="suffix" style="margin-right: 5px">
                                   元
                               </i>
                           </el-input>
                       </div>
                        <div style="margin-left: 60px" v-show="ruleForm.salary ==2">
                            <p>平均收入（底薪+提成）：</p>
                            <el-input style="width: 100px" type="number" v-model="input">
                                <i slot="suffix" style="margin-right: 5px">
                                    元
                                </i>
                            </el-input>

                            <span style="margin: 0 5px;font-size: 14px;color: #CCCCCC;"> ~ </span>

                            <el-input style="width: 100px"  type="number" v-model="input">
                                <i slot="suffix" style="margin-right: 5px">
                                    元
                                </i>
                            </el-input>
                        </div>

                    </div>
                    <div  v-show="ruleForm.salary ==1 ||ruleForm.salary ==2">最高月薪不能大于最低月薪的两倍，真实的薪资更利于提高招聘效果</div>
                </el-form-item>
                <el-form-item label="工作地址：" prop="region">
                    <el-cascader
                        placeholder="请选择"
                        :options="options"
                        v-model="ruleForm.region"
                        filterable
                    ></el-cascader>
                </el-form-item>
                <el-form-item style="margin-top: -10px" label="" prop="salary"><el-input></el-input></el-form-item>

                <el-form-item label="招聘人数：" prop="peopleNum">
                    <el-input v-model="ruleForm.peopleNum" placeholder="只能输入整数，如“1”，“0”代表若干">
                        <i slot="suffix" style="padding-right: 10px">
                            人
                        </i>
                    </el-input>
                </el-form-item>
                <el-form-item label="工作经验：" prop="type">
                    <el-select v-model="ruleForm.workExp" placeholder="请选择">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="学历要求：" prop="education">
                    <el-select v-model="ruleForm.education" placeholder="请选择">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="工作内容：" prop="desc">
                    <el-input type="textarea" placeholder="请勿填写联系方式，禁止发布“在家兼职、分销”等所谓日结工资的职位，一经发现关闭职位" :autosize="{ minRows: 4,maxRows:8}"
                              v-model="ruleForm.desc">


                    </el-input>
                </el-form-item>
                <el-form-item label="岗位要求：" prop="desc">
                    <el-input type="textarea" placeholder="请勿填写联系方式，禁止发布“在家兼职、分销”等所谓日结工资的职位，一经发现关闭职位" :autosize="{ minRows: 4}" v-model="ruleForm.desc"></el-input>
                </el-form-item>
                <el-form-item label="企业亮点：" prop="heightLight">
                   <div class="heightLight"> <span>增加企业亮点可以吸引求职者应聘岗位，</span>
                       <el-button type="text">立即增加</el-button>企业亮点</div>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">发布岗位</el-button>

                </el-form-item>
            </el-form>
        </div>

    </div>

</template>

<script>

    import {baseUrl, baseImgPath} from '@/config/env'
    import {
        searchAnchor,
        upDateArticle,
        getArticleData,
        addArticle,
        getArticleList,
        searchCategory,
        roomSearch,
        deleteArticle,
        articleSearch
    } from '@/api/getData'
    import {getCookie} from "../api/cookie";

    export default {
        data() {
            return {
                ruleForm: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',
                    salary:'',
                    salaryNum:'',
                    peopleNum:'',
                    workExp:'',
                    education:'',
                    postType:''

                },
                options: [{
                    value: 'zhinan',
                    label: '指南',
                    children: [{
                        value: 'shejiyuanze',
                        label: '设计原则',
                        children: [{
                            value: 'yizhi',
                            label: '一致'
                        }, {
                            value: 'fankui',
                            label: '反馈'
                        }, {
                            value: 'xiaolv',
                            label: '效率'
                        }, {
                            value: 'kekong',
                            label: '可控'
                        }]
                    }, {
                        value: 'daohang',
                        label: '导航',
                        children: [{
                            value: 'cexiangdaohang',
                            label: '侧向导航'
                        }, {
                            value: 'dingbudaohang',
                            label: '顶部导航'
                        }]
                    }]
                }, {
                    value: 'zujian',
                    label: '组件',
                    children: [{
                        value: 'basic',
                        label: 'Basic',
                        children: [{
                            value: 'layout',
                            label: 'Layout 布局'
                        }, {
                            value: 'color',
                            label: 'Color 色彩'
                        }, {
                            value: 'typography',
                            label: 'Typography 字体'
                        }, {
                            value: 'icon',
                            label: 'Icon 图标'
                        }, {
                            value: 'button',
                            label: 'Button 按钮'
                        }]
                    }, {
                        value: 'form',
                        label: 'Form',
                        children: [{
                            value: 'radio',
                            label: 'Radio 单选框'
                        }, {
                            value: 'checkbox',
                            label: 'Checkbox 多选框'
                        }, {
                            value: 'input',
                            label: 'Input 输入框'
                        }, {
                            value: 'input-number',
                            label: 'InputNumber 计数器'
                        }, {
                            value: 'select',
                            label: 'Select 选择器'
                        }, {
                            value: 'cascader',
                            label: 'Cascader 级联选择器'
                        }, {
                            value: 'switch',
                            label: 'Switch 开关'
                        }, {
                            value: 'slider',
                            label: 'Slider 滑块'
                        }, {
                            value: 'time-picker',
                            label: 'TimePicker 时间选择器'
                        }, {
                            value: 'date-picker',
                            label: 'DatePicker 日期选择器'
                        }, {
                            value: 'datetime-picker',
                            label: 'DateTimePicker 日期时间选择器'
                        }, {
                            value: 'upload',
                            label: 'Upload 上传'
                        }, {
                            value: 'rate',
                            label: 'Rate 评分'
                        }, {
                            value: 'form',
                            label: 'Form 表单'
                        }]
                    }, {
                        value: 'data',
                        label: 'Data',
                        children: [{
                            value: 'table',
                            label: 'Table 表格'
                        }, {
                            value: 'tag',
                            label: 'Tag 标签'
                        }, {
                            value: 'progress',
                            label: 'Progress 进度条'
                        }, {
                            value: 'tree',
                            label: 'Tree 树形控件'
                        }, {
                            value: 'pagination',
                            label: 'Pagination 分页'
                        }, {
                            value: 'badge',
                            label: 'Badge 标记'
                        }]
                    }, {
                        value: 'notice',
                        label: 'Notice',
                        children: [{
                            value: 'alert',
                            label: 'Alert 警告'
                        }, {
                            value: 'loading',
                            label: 'Loading 加载'
                        }, {
                            value: 'message',
                            label: 'Message 消息提示'
                        }, {
                            value: 'message-box',
                            label: 'MessageBox 弹框'
                        }, {
                            value: 'notification',
                            label: 'Notification 通知'
                        }]
                    }, {
                        value: 'navigation',
                        label: 'Navigation',
                        children: [{
                            value: 'menu',
                            label: 'NavMenu 导航菜单'
                        }, {
                            value: 'tabs',
                            label: 'Tabs 标签页'
                        }, {
                            value: 'breadcrumb',
                            label: 'Breadcrumb 面包屑'
                        }, {
                            value: 'dropdown',
                            label: 'Dropdown 下拉菜单'
                        }, {
                            value: 'steps',
                            label: 'Steps 步骤条'
                        }]
                    }, {
                        value: 'others',
                        label: 'Others',
                        children: [{
                            value: 'dialog',
                            label: 'Dialog 对话框'
                        }, {
                            value: 'tooltip',
                            label: 'Tooltip 文字提示'
                        }, {
                            value: 'popover',
                            label: 'Popover 弹出框'
                        }, {
                            value: 'card',
                            label: 'Card 卡片'
                        }, {
                            value: 'carousel',
                            label: 'Carousel 走马灯'
                        }, {
                            value: 'collapse',
                            label: 'Collapse 折叠面板'
                        }]
                    }]
                }, {
                    value: 'ziyuan',
                    label: '资源',
                    children: [{
                        value: 'axure',
                        label: 'Axure Components'
                    }, {
                        value: 'sketch',
                        label: 'Sketch Templates'
                    }, {
                        value: 'jiaohu',
                        label: '组件交互文档'
                    }]
                }],
                rules: {
                    name: [
                        { required: true, message: '请输入岗位名称', trigger: 'change' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' }
                    ],
                    region: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    salary:[
                        {required: true, message: '请选择月薪', trigger: 'change'}
                    ],
                    peopleNum:[{
                        required: true, message: '请填写招聘人数', trigger: 'change'
                    }],
                    date1: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    date2: [
                        { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                    ],
                    type: [
                        { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                    ],
                    resource: [
                        { required: true, message: '请选择岗位性质', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请填写活动形式', trigger: 'blur' }
                    ],
                    education:[
                        {required: true, message: '选择学历', trigger: 'blur' }
                    ],
                    heightLight:[{
                        required: true
                    }]
                },
                releasePageShow:false,
                dataImg: ['https://i0.hdslb.com/bfs/sycp/tmaterial/201809/2e562a392a229818d199742d6fa43b5a.jpg',
                    'https://i0.hdslb.com/bfs/sycp/creative_img/201809/0c5add5a7187485342c747631433e634.jpg',
                    'https://i0.hdslb.com/bfs/sycp/tmaterial/201809/2e562a392a229818d199742d6fa43b5a.jpg',
                    'https://i0.hdslb.com/bfs/sycp/tmaterial/201809/2e562a392a229818d199742d6fa43b5a.jpg',],
                bannerShow: true,
                postListData: [{
                    belongTo: '张先生',
                    data: [{
                        postName: "销售总监",
                        browse: 112,
                        Apply: 12,
                        Interview: 10,
                        refresh: 5,
                        time: 12,
                        close: false,
                        year: '3-5',
                    }]

                }, {
                    belongTo: '杨先生',
                    data: [{
                        postName: "视觉设计师",
                        browse: 162,
                        Apply: 88,
                        Interview: 10,
                        refresh: 45,
                        time: 11,
                        close: false,
                        year: '10',
                    }, {
                        postName: "嵌入式开发",
                        browse: 1622,
                        Apply: 833,
                        Interview: 10,
                        refresh: 45,
                        time: 11,
                        close: true,
                        year: '3',
                        xtsd: true
                    }, {
                        postName: "小程序产品经理",
                        browse: 162,
                        Apply: 88,
                        Interview: 102,
                        refresh: 45,
                        time: 11,
                        year: '1',
                    }, {
                        postName: "UI设计师",
                        browse: 364,
                        Apply: 72,
                        Interview: 6,
                        refresh: 45,
                        time: 11,
                        close: true,
                        year: '0',
                    }, {
                        postName: "web前端开发",
                        browse: 162,
                        Apply: 88,
                        Interview: 13,
                        refresh: 45,
                        time: 11,
                        close: false,
                        year: '8',
                    },]

                }],
                tableData: [{
                    name: "销售经理",
                    state: 0,
                    reason: '小伟怎么这么能叫啊是啊asd安抚安抚安抚',
                    feedback: "已于求职者沟通，确认求职者已找到工作，目前不再考虑换工作。已建议求职者更改求职状态。已于求职者沟通，确认求职者已找到工作，目前不再考虑换工作。已建议求职者更改求职状态。",
                    time: '刚刚'
                }, {
                    name: "会计师",
                    state: 0,
                    reason: '不接电话',
                    feedback: "已于求职者沟通，确认求职者已找到工作，目前不再考虑换工作。已建议求职者更改求职状态。已于求职者沟通，确认求职者已找到工作，目前不再考虑换工作。已建议求职者更改求职状态。",
                    time: '1天前'
                }, {
                    name: "会计师",
                    state: 1,
                    reason: '不接电话',
                    feedback: "-",
                    time: '2018-06-22'
                }]
            }

        },
        created() {

        },
        watch: {},
        components: {},
        computed: {
            editor() {

            }
        },
        methods: {
            //隐藏banner
            hiddenBanner() {
                this.bannerShow = false
            },
            //发布岗位
            goReleasePage(){
              this.releasePageShow = true
                this.$refs['ruleForm'].resetFields();
            },
            //取消发布
            cancelRelease(){
                var that = this
                this.$confirm('是否取消发布?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    that.releasePageShow = false
                }).catch(() => {

                });
            }

        },

        mounted() {

        }
    }
</script>

<style lang="less">
    @import '../style/mixin';

    .bannerBox {
        position: relative;
        margin-bottom: 20px;
        .el-carousel__indicator.is-active .el-carousel__button {
            background: #FF844C;
        }
        .el-carousel__indicator {

        }
        .el-carousel__button {
            width: 15px;
        }
        .closeBannerBtn {
            position: absolute;
            color: #f4f4f4;
            right: 10px;
            top: 5px;
            z-index: 100;
            cursor: pointer;
        }
        .closeBannerBtn:hover {
            background: rgba(0, 0, 0, .4);
        }
    }

    .postItem.close .top {
        color: #999;
        .qrCode {
            background-image: url("../assets/img/qrcode.png");
        }
    }

    .postItem.open .top {
        .name:hover {
            color: #4C8DEB;
        }
        .qrCode:focus {
            background-image: url("../assets/img/qrcode_pre.png");
        }
    }

    .postList {
        position: relative;
    }

    .postItem.open .bottom {
        color: #666666;
    }

    .postItem.close .bottom {
        color: #999999;
    }

    .qrCodeImg {
        height: 170px;
        background-image: url("../assets/img/img_QRcode01@2x.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        margin-top: -15px;
    }

    .postItem {
        background: #FFFFFF;
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.06);
        border-radius: 2px;
        height: 52px;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        padding: 20px;
        color: #333333;
        position: relative;
        .leftTip {
            text-align: center;

            background: #999999;
            height: 20px;
            line-height: 20px;
            border-radius: 2px 0 2px 0;
            width: 68px;
            position: absolute;
            top: 0;
            left: 0;
            font-size: 12px;
            color: #FFFFFF;
        }
    }

    .greet {
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        color: #666666;
        font-size: 14px;
        letter-spacing: 0.3px;
        img {
            width: 16px;
            height: 16px;
            margin-right: 10px;
        }
    }

    .postName {
        width: 35%;
        .top {
            display: flex;
            align-items: center;
            .name {
                font-family: PingFangSC-Medium;
                font-size: 18px;
                cursor: pointer;
                max-width: 270px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;

            }
            .qrCode {
                width: 14px;
                height: 14px;
                margin: 0 20px;
                margin-left: 30px;
                background-size: cover;
                background-image: url("../assets/img/qrCode_b.png");
                background-repeat: no-repeat;
                background-position: center center;
                cursor: pointer;
            }
            .yulan {
                min-width: 56px;
                font-size: 14px;
                cursor: pointer;
                position: relative;
                padding-left: 10px;
            }
            .yulan:after {
                content: '';
                position: absolute;
                left: 0;
                top: 3px;
                height: 12px;
                border: 1px solid #D5D5D5;
            }
        }
        .bottom {
            margin-top: 10px;
            display: flex;
            align-items: center;
            font-size: 14px;
        }
        .bottom > div:nth-child(2) {
            margin: 0 10px;
            padding: 0 10px;
            text-align: center;
            position: relative;
        }
        .bottom > div:nth-child(2):before {
            content: '';
            position: absolute;
            left: 0;
            top: 4px;
            width: 2px;
            height: 12px;
            background: #D5D5D5;
        }
        .bottom > div:nth-child(2):after {
            content: '';
            position: absolute;
            right: 0;
            top: 4px;
            width: 2px;
            height: 12px;
            background: #D5D5D5;
        }
    }

    .postItem.close {
        .postStatistics {
            .numBox {
                .num, .words {
                    color: #999999;
                }
            }
            .refresh {
                .refreshWords {
                    color: #999999;
                }
            }
        }
    }

    .postStatistics {
        width: 40%;
        display: flex;
        justify-content: space-around;

        .numBox {
            width: 58%;
            display: flex;
            justify-content: center;
            align-items: center;
            .num {
                ont-family: HelveticaNeue-Medium;
                font-size: 20px;
                color: #4C8DEB;
                letter-spacing: 0.34px;
                text-align: center;
            }
            .words {
                font-family: PingFangSC-Regular;
                font-size: 14px;
                color: #666666;
                letter-spacing: 0.24px;
                text-align: center;
                cursor: pointer;
                margin-top: 5px;
            }
            .words:hover {
                color: #4C8DEB;
            }
            .rightArrow {
                width: 8px;
                height: 14px;
                margin: 0 15px;
            }
            position: relative;
        }
        .numBox:after {
            content: '';
            position: absolute;
            width: 2px;
            height: 42px;
            background: #D5D5D5;
            right: 0;
            top: 8px;
        }
        .refresh {
            width: 42%;
            display: flex;
            align-items: center;
            justify-content: center;
            .el-tooltip {
                text-align: left;
                display: flex;
                justify-content: center;
            }
            .refreshWords {
                font-family: HelveticaNeue-Medium;
                font-size: 20px;
                color: #666666;
                letter-spacing: 0.34px;
                display: flex;
                align-items: center
            }

        }

    }

    .operation {
        width: 25%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .operationBtn {
            width: 89px;
            height: 32px;
            line-height: 32px;
            border: 1px solid #4C8DEB;
            border-radius: 4px;
            font-size: 14px;
            color: #4C8DEB;
            letter-spacing: 0;
            text-align: center;
            margin: 0 10px;
            cursor: pointer;
        }
        .operationBtn:active {
            background: #4c8deb;
            color: #fff;
        }
        .moreBtn {
            display: flex;
            width: 20px;
            height: 50px;
            cursor: pointer;
            justify-content: center;
            align-items: center;
            margin-left: 10px;
        }
        .moreBtn img {
            width: 4px;
            height: 14px;

            cursor: pointer;
        }

    }

    .el-popover {
        min-width: 0;
    }

    .morePopover {
        text-align: center;
        padding: 0;
        .moreItem {
            padding: 5px 0;
            font-size: 14px;
            color: #666666;
            cursor: pointer;
            width: 100%;
        }
        .moreItem:hover {
            color: #4C8DEB;
        }
    }

    .releaseBtn {
        background: #FF844C;
        border-radius: 4px;
        width: 110px;
        height: 32px;
        line-height: 32px;
        font-size: 14px;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: center;
        position: absolute;
        right: 30px;
        top: 10px;
        z-index: 1;
        cursor: pointer;
    }

    .releaseBtn:active {
        background: #ed4014;
    }

    .el-tooltip__popper.is-light {
        padding: 20px;
        background: #FFFFFF;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #333333;
        line-height: 22px;
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.10);
        border: none;
        .popper__arrow {
            border: none;
        }
    }

    .el-table__row .reason .cell {
        text-align: left;
    }
    .publisher{
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #999999;
        letter-spacing: 0;
        margin-bottom: 8px;
    }
    .releasePage{
        padding:32px 68px;
        background: #fff;
        .releaseTitle{
            font-size: 24px;
            color: #333333;
            letter-spacing: 0.41px;
        }
        .range{
            display: flex;
        }
        .titleTips{
            width: 100%;
            margin-bottom:  15px;
            font-size: 14px;
            color: #999999;
            border-bottom: 1px solid #D5D5D5;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .el-form-item__label{
            padding-right: 50px;
            font-size: 14px;
            color: #3F3F3F;
            text-align: right;

        }
        .heightLight{
            font-size: 14px;
            color: #333333;
        }
       .el-input,.el-textarea{
            width: 468px;
        }

        .el-form-item{
            margin-bottom: 20px!important;
        }
        .el-radio__input.is-checked .el-radio__inner{
            border-color: #FF844C;
            background: #FF844C;
        }
        .el-radio__input.is-checked+.el-radio__label{
            color:  #FF844C;
        }
        .postTips{
            font-size: 14px;
            color: #999999;
            line-height: 22px;
            margin: -10px 0 20px 140px;
        }
    }
</style>

