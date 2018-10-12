<template>
    <div style="width: 100%">
        <div class="screenBox">
            <el-form label-position="right" label-width="100px">
                <el-form-item label="筛选条件：">
                    <el-tag
                        :key="tag"
                        v-for="tag in 5"
                        closable>
                        标签
                    </el-tag>
                    <div class="searchShowBtn" @click="searchFormShow = !searchFormShow">
                        {{searchFormShow?'收起':'展开'}}</div>
                </el-form-item>
                <el-collapse-transition>
               <div v-show="searchFormShow" >
                   <el-form-item label="工作地点：">
                       <div>
                           <el-checkbox-group v-model="place">
                               <el-checkbox-button v-for="city in cityOptions" :label="city"  :key="city">{{city}}</el-checkbox-button>
                           </el-checkbox-group>
                       </div>
                   </el-form-item>
                   <el-form-item label="行政区：">
                       <div>
                           <el-checkbox-group v-model="area">
                               <el-checkbox-button v-for="area in areaOptions" :label="area"  :key="area">{{area}}</el-checkbox-button>
                           </el-checkbox-group>
                       </div>
                   </el-form-item>
                   <el-form-item label="学历：">
                       <div style="display:flex">
                           <el-checkbox-button  label="不限" v-model="unlimitedEdu" >
                               不限
                           </el-checkbox-button>
                           <el-checkbox-group  @change="changeEdu" v-model="education">

                               <el-checkbox-button  v-for="education in educationOptions" :label="education"  :key="education">{{education}}</el-checkbox-button>
                           </el-checkbox-group>
                       </div>
                   </el-form-item>
                   <el-form-item label="行业：">
                       <div style="display:flex;align-items: self-start">
                           <el-checkbox-button  label="不限" v-model="unlimitedIndustry" >
                               不限
                           </el-checkbox-button>
                           <el-checkbox-group :class="moreIndShow?'':'oneLine'"  @change="changeEdu" v-model="industry">

                               <el-checkbox-button  v-for="education in industryOptions" :label="education"  :key="education">{{education}}</el-checkbox-button>
                           </el-checkbox-group>
                           <el-button  type="text" @click="moreIndShow = !moreIndShow">{{moreIndShow?'收起':'更多'}}</el-button>
                       </div>
                   </el-form-item>
               </div>
                </el-collapse-transition>
            </el-form>
            <div class="searchOther">
                <el-form label-width="100px"  >
                    <el-form-item label="其他：">
                        <el-form label-width="100px" inline>
                            <el-form-item label="工作经验：">
                                <el-select style="width:140px "></el-select>
                            </el-form-item>
                            <el-form-item label="期望薪资：">
                                <el-select style="width:180px "></el-select>
                            </el-form-item>
                            <el-form-item label="当前状态：">
                                <el-select style="width:180px "></el-select>
                            </el-form-item>
                        </el-form>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="tableSort">
            <span style="color: #999999;margin-right: 10px;font-size: 14px">共2400条索索结果 </span>
            <el-radio-group v-model="sortRule">
                <el-radio :label="1">稳定性高</el-radio>
                <el-radio :label="2">下载数高</el-radio>
            </el-radio-group>
        </div>
        <div class="viewMode">
            查看方式：
            <img class="modeIcon" @click="swichTableMode('card')" :src="listTableShow?require('../assets/img/btn_card@2x.png'):require('../assets/img/btn_card2@2x.png')" alt="">
            <img class="modeIcon" @click="swichTableMode('list')" :src="!listTableShow?require('../assets/img/btn_list2@2x.png'):require('../assets/img/btn_list@2x.png')" alt="">

        </div>
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
                    label="意向岗位"
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
                    label="期望月薪"
                    min-width="150"
                >
                </el-table-column>
                <el-table-column
                    prop="time"
                    label="更新时间"
                    min-width="150"
                >
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "search",
        data(){
            return{
                place:[],
                area:[],
                education:[],
                cityOptions : ['不限','上海', '北京', '广州', '深圳'],
                areaOptions:['不限','稠城','稠江','城西','江东','北苑','福田','苏溪','大陈','甘三里','后宅','佛堂'],
                educationOptions:['本科 ','带专','研究生','大学','高中','小学'],
                industryOptions:['IT','医疗','金融','文化娱乐','生活服务','IT','医疗','金融','文化娱乐','生活服务','IT','医疗','金融','文化娱乐','生活服务','IT','医疗','金融','文化娱乐','生活服务'],
                unlimitedEdu:true,
                unlimitedIndustry:true,
                searchFormShow:true,
                industry:'',
                moreIndShow:false,
                sortRule:'',
                listTableShow:false,
            }
        },
        watch:{
            unlimitedEdu(e){
                if(e)this.education = []
            }
        },
        methods:{
            changeEdu(e){
               e.length>0?this.unlimitedEdu = false: this.unlimitedEdu = true
            },
            //切换搜索结果显示模式
            swichTableMode(mode){
                if(mode == 'card'){
                    this.listTableShow = false
                }else{
                    this.listTableShow = true
                }
            },
        }
    }
</script>

<style lang="less">
    .screenBox{
        background: #FFFFFF;
        box-shadow: 0 2px 8px 0 rgba(0,0,0,0.06);
        border-radius: 2px;
        padding: 16px 24px;
        margin-bottom: 20px;
        .el-tag{
            margin: 0 5px;
            background-color: #FF844C;
            color: #fff;
            border: none;
            height:22px;
            line-height: 22px;
            font-size: 14px;
        }
        .el-tag .el-icon-close{
            color: #fff;
        }
        .el-checkbox-button__inner{
            border: none;
            padding: 5px 10px;
            font-size: 14px;
        }
        .el-checkbox-button:first-child .el-checkbox-button__inner{
            border: none;
        }
        .el-tag .el-icon-close:hover{
            background: #FF845C;
        }
        .el-checkbox-button.is-checked .el-checkbox-button__inner{
            font-size: 14px;
            color: #FFFFFF;
            background: #FF844C;
            border-radius: 4px;
            border:none;
            box-shadow: none;
        }
        .el-checkbox-button{
            margin: 0 5px;
        }
        .el-checkbox-button__inner:hover{
            color: #000;
        }
        .searchOther{
            padding-top: 15px;
            margin-top: 15px;
            border-top: 1px #D5D5D5 dashed;
            .el-form-item__label
            {
                color: #999;
            }
        }
        .searchShowBtn{
            float: right;
            cursor: pointer;
        }
        .oneLine{
            overflow: hidden;
            max-height: 40px
        }
        .el-form-item__content{
            color: #333;
        }


    }
    .tableSort{
            font-size: 14px;
            display: inline-block;
            margin-bottom: 8px;
        .el-radio__input.is-checked .el-radio__inner{
            border-color: #FF844C;
            background: #FF844C;
        }
        .el-radio__input.is-checked+.el-radio__label{
            color: #FF844C;
        }
        .el-form-item__label{
            color: #999;
        }
    }
    .viewMode{
        font-size: 14px;
        color: #999999;
        letter-spacing: 0;
        display: flex;
        align-items: center;
        float: right;
        margin-right: 20px;
        .modeIcon{
            width: 16px;
            height: 16px;
            margin: 0 5px;
            cursor: pointer;
        }
    }
</style>
