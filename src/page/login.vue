<template>
    <div class="login_page fillcontain">
        <div class="loginTop">
            <div style="display: flex;justify-content: center;align-items: center">
                <div class="loginTopLogo" :style="{backgroundImage: bLogoPath}">

                </div>
                <el-button v-show="forgetPassShow" style="font-size: 16px;" @click="goQiYelogin" type="text">企业登录</el-button>
            </div>
            <div class="loginTopRight">
                <a v-show="forgetPassShow" class="rightItem">恒信首页</a>
                <a v-show="forgetPassShow" class="rightItem">找工作</a>
                <a v-show="forgetPassShow" class="rightItem" href="">职场资讯</a>
                <a v-show="!forgetPassShow" class="rightItem">个人登录</a>
                <el-popover
                    placement="bottom"
                    width="180"
                    trigger="hover">
                    <img src="../assets/img/img_QRcode03@2x.png" alt="">
                    <div style="text-align: center">扫码下载APP</div>
                <a slot="reference"  class="rightItem">手机招聘</a>
                </el-popover>

            </div>
        </div>
        <div v-show="!forgetPassShow " class="loginBody  noselect">
            <!--登录-->
            <div class="loginFormBox" v-show="loginPageShow">
                <div class="switchTop">
                    <span @click="switchLoginType(1)" :style="{color:(loginType==1?'#FF844C':'')}">账号登录</span>
                    /
                    <span @click="switchLoginType(2)" :style="{color:(loginType==2?'#FF844C':'')}">验证码登录</span>
                </div>
                <div class="formTitle">
                    {{vCode?'验证码登录':'账号登录'}}
                </div>
                <div class="formBody">

                    <div class="formItem">
                        <div class="showTitle"
                             :style="{visibility:(userName.length>0||uInputFocus?'visible':'hidden'),color:(uInputFocus?'#FF844C':'#999')}">
                            {{vCode?'手机号码':'用户名'}}
                        </div>
                        <el-input

                            @focus="inputFocus(1)"
                            @blur="blurFocus(1)"
                            :type="vCode?'number':''"
                            :placeholder="uInputFocus?'':vCode?'手机号码':'用户名'"
                            v-model="userName">
                            <img class="inputIcon" slot="suffix" src="../assets/img/icon_succeed@2x.png">
                        </el-input>
                    </div>
                    <div class="formItem">
                        <div class="showTitle"
                             :style="{visibility:(passWord.length>0||pInputFocus?'visible':'hidden'),color:(pInputFocus?'#FF844C':'#999')}">
                            {{vCode?'验证码':'登录密码'}}
                        </div>
                        <el-input
                            v-if="!vCode"
                            @focus="inputFocus(2)"
                            @blur="blurFocus(2)"
                            type="'password"
                            autocomplete="off"
                            :placeholder="pInputFocus?'':vCode?'验证码':'登录密码'"
                            v-model="passWord">
                        </el-input>
                        <el-input
                            v-if="vCode"
                            type="number"
                            @focus="inputFocus(2)"
                            @blur="blurFocus(2)"
                            autocomplete="off"
                            :maxlength="6"
                            :placeholder="pInputFocus?'':vCode?'验证码':'登录密码'"
                            v-model="passWord">
                            <div  slot="suffix" class="getCodeBtn"
                                 :style="{color:(count>0?'#ccc':'#FF844C')}" @click="getLoginCode">
                                {{count<=0?'发送验证码':count+'秒后重发'}}
                            </div>
                        </el-input>
                    </div>
                    <div class="form_3">
                        <div>
                            <el-checkbox v-model="remeber">自动登录</el-checkbox>
                        </div>
                        <div style="cursor: pointer" @click="forgetPass">忘记密码</div>
                    </div>
                    <div class="formBtn login">登录</div>
                    <div class="formBtn register" @click="goRegisterPage">没有账号？免费注册</div>

                </div>

            </div>



            <!--注册-->
            <div class="loginFormBox" v-show="!loginPageShow">

                    <div class="formTitle">
                        手机注册
                    </div>
                <div class="formBody regerist">
                    <div class="formItem">
                        <div class="showTitle"
                             :style="{visibility:(companyName.length>0||cInputFocus?'visible':'hidden'),color:(cInputFocus?'#FF844C':'#999')}">
                            公司名称
                        </div>
                        <el-input
                            @focus="inputFocus(3)"
                            @blur="blurFocus(3)"
                            :placeholder="cInputFocus?'':'公司名称'"
                            v-model="companyName">
                        </el-input>
                    </div>
                    <div class="formItem">
                        <div class="showTitle"
                             :style="{visibility:(phoneNum.length>0||mInputFocus?'visible':'hidden'),color:(mInputFocus?'#FF844C':'#999')}">
                            手机号码
                        </div>
                        <el-input
                            @focus="inputFocus(4)"
                            @blur="blurFocus(4)"
                            type="number"
                            autocomplete="off"
                            :placeholder="mInputFocus?'':'手机号码'"
                            v-model="phoneNum">
                        </el-input>
                    </div>
                    <div class="formItem">
                        <div class="showTitle"
                             :style="{visibility:(rVcode.length>0||rInputFocus?'visible':'hidden'),color:(rInputFocus?'#FF844C':'#999')}">
                            验证码
                        </div>
                        <el-input
                            @focus="inputFocus(5)"
                            @blur="blurFocus(5)"
                            autocomplete="off"
                            type="number"

                            :placeholder="rInputFocus?'':'验证码'"
                            v-model="rVcode">
                            <div  slot="suffix" class="getCodeBtn"
                                 :style="{color:(rcount>0?'#ccc':'#FF844C')}" @click="getReCode">
                                {{rcount<=0?'发送验证码':rcount+'秒后重发'}}
                            </div>
                        </el-input>
                    </div>
                    <div class="form_3" style="display: flex;justify-content: center;margin-top: 15px">
                        <el-checkbox v-model="checked">我已阅读并同意 <a href="#" style="color: #FF844C ;font-weight: lighter">「恒信人才用户协议」</a></el-checkbox>
                    </div>
                    <div class="formBtn login" style="margin-bottom: 10px;">立即注册</div>
                    <div style="text-align: center;font-size: 14px;color: #666666;">已有账号，
                        <el-button @click="goLoginPage" style="font-size: 14px;" type="text">立即登录</el-button>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="!forgetPassShow" class="foterBox">
            <div style="width: 100%;display: flex;">
                <div class="foterImg" :style="{backgroundImage:bottomBanner1 }"></div>
                <div class="foterImg" :style="{backgroundImage:bottomBanner2 }"></div>
                <div class="foterImg" :style="{backgroundImage:bottomBanner3 }"></div>
            </div>

        </div>
        <div class="forgetPassBox" v-show="forgetPassShow">
            <div class="forgetBody">
                <p style="font-size: 24px;color: #333333;text-align: left;margin-bottom: 30px">找回密码</p>
                <div style="font-size: 14px;color: #666666;text-align: left;line-height: 24px;margin-bottom: 30px">
                    <p style="">亲爱的朋友：</p>
                    <p>您好！忘记密码，不要着急！</p>
                </div>
                <div style="display: flex;align-items:center;margin-bottom: 30px;">
                    <img style="width: 41px;height: 41px;margin-right: 10px;" src="../assets/img/img_contact@2x.png" alt="">
                    <div>
                        <p style="font-size: 14px;color: #666666;text-align: left;">请拨打客服电话：</p>
                        <p style="font-size: 18px;color: #FF844C;text-align: left;">0579-85129191</p>
                    </div>
                </div>
                <p style="font-size: 14px;color: #666666;text-align: left;line-height: 24px;">我们的客服会核实如下信息：</p>
                <p style="font-size: 14px;
color: #333333;
text-align: left;
line-height: 24px;font-weight: bold;margin: 5px 0">
                    1、账号    2、最近登录时间    3、最近发布的岗位或者操作记录
                </p>
                <p style="font-size: 14px;
color: #666666;
text-align: left;
line-height: 24px;">
                    您的信任是对我们最大的支持,我们将竭诚为您服务！
                </p>
            </div>
        </div>
        <div class="bottomBox">
            <div class="bottomBar">
                © 2002-2018 恒信人才网(WWW.91JOB.COM) All Rights 人才中介服务许可证号 330782000001 浙ICP备05042308号 ICP证号 浙B2-20130121
            </div>
        </div>
    </div>
</template>

<script>
    import {login, getAdminInfo} from '@/api/getData'
    import {mapActions, mapState,mapMutations} from 'vuex'
    import {setCookie} from "../api/cookie";
    import md5 from 'js-md5';

    export default {
        data() {
            return {
                userName: '',
                passWord: '',
                vCode: false,
                rVcode:'',
                companyName: "",
                phoneNum: '',
                vcodemax:6,
                uInputFocus: false,
                pInputFocus: false,
                cInputFocus:false,
                mInputFocus:false,
                rInputFocus:false,
                passType: false,
                loginType: 1,
                forgetPassShow:false,
                loginPageShow: true,
                emojiList:[{outerHTML:"<span>123</span>"}],
                //倒计时
                count: '',
                rcount:'',
                rtimer:null,
                timer: null,
                loginForm: {
                    username: '',
                    password: '',
                    random10: '',
                },
                bLogoPath: 'url(' + require('../assets/img/img_logo@2x.png') + ')',
                bottomBanner1: 'url(' + require('../assets/img/banner01@2x.png') + ')',
                bottomBanner2: 'url(' + require('../assets/img/banner02@2x.png') + ')',
                bottomBanner3: 'url(' + require('../assets/img/banner03@2x.png') + ')',
                rules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'}
                    ],
                },
                showLogin: false,
                instance: null,

                targetId: '小伟的father'
            }
        },

        mounted() {

        },
        created() {
            console.log(this.userName.length)
            this.randomWord(false, 10)

            console.log(this.$store.state.adminInfo.count)


        },
        methods: {
            //切换登录方式
            switchLoginType(type) {
                this.loginType = type
                this.passWord = ''
                this.passType = false
                console.log(this.passType)
                if (type == 1) {
                    //账号登录
                    this.vCode = false

                } else if (type == 2) {
                    //验证码登录
                    this.vCode = true
                }
                console.log(this.vCode)
            },
            //输入框
            inputFocus(flag) {
                if (flag == 1) {
                    this.uInputFocus = true
                } else if (flag == 2) {
                    this.pInputFocus = true
                    if (this.loginType == 1) {
                        this.passType = true
                    } else {
                        this.passType = false
                    }

                }else if(flag == 3){
                    this.cInputFocus = true
                }else if(flag == 4){
                    this.mInputFocus = true
                }else if(flag == 5){
                    this.rInputFocus = true
                }
            },
            blurFocus(flag) {

                if (flag == 1) {
                    this.uInputFocus = false
                } else if (flag == 2) {

                    this.pInputFocus = false
                    console.log(this.pInputFocus)
                }else if (flag == 3) {
                    this.cInputFocus = false
                }else if (flag == 4) {
                    this.mInputFocus = false
                }else if (flag == 5) {
                    this.rInputFocus = false
                }
            },
            //获取登录验证码
            getLoginCode() {
                const TIME_COUNT = 60;
                if (!this.timer) {
                    this.count = TIME_COUNT;
                    this.timer = setInterval(() => {
                        if (this.count > 0 && this.count <= TIME_COUNT) {
                            this.count--;
                        } else {
                            this.show = true;
                            clearInterval(this.timer);
                            this.timer = null;
                        }
                    }, 1000)
                }
            },
            //获取注册验证码
            getReCode(){
                const TIME_COUNT = 60;
                if (!this.rtimer) {
                    this.rcount = TIME_COUNT;
                    this.rtimer = setInterval(() => {
                        if (this.rcount > 0 && this.rcount <= TIME_COUNT) {
                            this.rcount--;
                        } else {
                            clearInterval(this.rtimer);
                            this.rtimer = null;
                        }
                    }, 1000)
                }
            },
            //切换为注册页
            goRegisterPage() {
                this.loginPageShow = false
            },
            //切换为登录页
            goLoginPage(){
                this.loginPageShow = true
            },
            //忘记密码页
            forgetPass(){
                this.forgetPassShow = true
            },
            //首页
            goQiYelogin(){
                this.forgetPassShow = false
            },

            async submitForm(formName) {

                console.log(this.$store.state.adminInfo.count)
                console.log(this.loginForm.username, "账号")
                console.log(this.loginForm.password)
                this.$refs[formName].validate(async (valid) => {
                    if (valid) {
                        console.log(valid)
                        const res = await login({
                            account: this.loginForm.username,
                            password: this.random10 + md5(this.loginForm.password)
                        })
                        console.log(res)
                        if (res.result) {
                            this.$message({
                                type: 'success',
                                message: '登录成功'
                            });
                            setCookie("token", res.result.token, 86400)
                            this.$router.push('post')
                            setCookie("nickName", res.result.nickName, 86400)
                        } else {
                            this.$message({
                                type: 'error',
                                message: '账号密码错误',
                            });
                            // this.$router.push('vueEdit')
                        }
                    } else {
                        console.log(2134)
                        this.$notify.error({
                            title: '错误',
                            message: '请输入正确的用户名密码',
                            offset: 100
                        });
                        return false;
                    }
                });
            },

            //生成10位随机数

            randomWord(randomFlag, min, max) {
                var str = "",
                    range = min,
                    arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
                    pos = "";
                // 随机产生
                if (randomFlag) {
                    range = Math.round(Math.random() * (max - min)) + min;
                }
                for (var i = 0; i < range; i++) {
                    pos = Math.round(Math.random() * (arr.length - 1));
                    str += arr[pos];
                }
                this.random10 = str

            }
        },
        watch: {
            adminInfo: function (newValue) {
                if (newValue.id) {
                    this.$message({
                        type: 'success',
                        message: '检测到您之前登录过，将自动登录'
                    });
                    this.$router.push('manage')
                }
            }
        }
    }
</script>

<style lang="less">
    @import '../style/mixin';

    .login_page {
        background-color: #F5F5F5;

        .loginTop {
            height: 60px;
            background: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 16px;
            color: #333333;
            min-width: 1000px;
        }
        .loginTopLogo {
            width: 200px;
            height: 60px;
            background-size: 150px;
            background-position: center center;
            background-repeat: no-repeat;
        }
        .loginTopRight {
            display: inline-block;
            margin-right: 5.6%;
            a{
                font-family: PingFangSC-Medium;
                font-size: 16px;
                color: #333333;
                font-weight: lighter;
            }
            .rightItem {
                padding: 0 10px;
                position: relative;
                cursor: pointer;
            }
            .rightItem:after {
                content: '';
                position: absolute;
                right: -4px;
                top: 5px;
                width: 2px;
                height: 14px;
                background: #D5D5D5;
            }
            .rightItem:last-child:after {
                display: none;
            }
        }
        .loginBody {
            width: 100%;
            min-width: 1000px;
            height: 60.1%;
            min-height: 512px;
            background-image: url("../assets/img/img_login_bg@2x.png");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            position: relative;
            .loginFormBox {
                position: absolute;
                right: 5.6%;
                width: 340px;
                height: 456px;
                top: 5%;
                background: #FFFFFF;
                box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.25);
                border-radius: 2px;
                .switchTop {
                    text-align: right;
                    padding-top: 5px;
                    height: 40px;
                    line-height: 40px;
                    font-size: 14px;
                    padding-right: 20px;
                    font-family: PingFangSC-Medium;
                    color: #666666;
                    letter-spacing: 1px;
                    span {
                        cursor: pointer;
                    }
                }
                .formTitle {
                    margin-top: 5px;
                    font-size: 30px;
                    color: #333333;
                    height: 60px;
                    line-height: 60px;
                    width: 100%;
                    padding-left: 30px;
                }
                .formBody.regerist{
                    .el-input {
                        margin-bottom: 15px;
                    }
                }
                .formBody {
                    padding: 0 30px;
                    .el-input {
                        margin-bottom: 20px;
                    }
                    .el-input__inner {
                        border: none;
                        border-bottom: 2px solid #d5d5d5;
                        border-radius: 0;
                        padding: 0;
                        font-size: 16px;
                    }
                    .el-input__inner:focus {
                        border-bottom: 2px solid #FF844C;
                    }
                    .inputIcon {
                        width: 14px;
                        height: 14px;
                        margin-top: 12px;
                    }
                    .showTitle {
                        font-size: 12px;
                        visibility: visible;
                        color: #999;
                        padding-bottom: 5px;
                    }
                    .form_3 {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        height: 40px;
                        font-family: PingFangSC-Regular;
                        font-size: 14px;
                        color: #666666;
                        .el-checkbox__label {
                            color: #666;
                        }
                        .el-checkbox__inner:hover {
                            border-color: #FF844C;
                        }
                        .el-checkbox__input.is-focus {
                            .el-checkbox__inner {
                                border-color: #dcdfe6;
                            }
                        }
                        .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
                            background-color: #FF844C;
                            border-color: #FF844C;
                        }
                    }
                    input::-webkit-outer-spin-button,
                    input::-webkit-inner-spin-button {
                        -webkit-appearance: none;
                    }

                    input[type="number"] {
                        -moz-appearance: textfield;
                    }
                }
                .formBtn {
                    width: 260px;
                    height: 40px;
                    border-radius: 4px;
                    margin: 15px auto;
                    cursor: pointer;
                    text-align: center;
                    line-height: 40px;
                }
                .formBtn.login {
                    background: #FF844C;
                    color: #fff;
                }
                .formBtn.register {
                    background: #fff;
                    border: 1px solid #FF844C;
                    color: #FF844C
                }

            }
            .getCodeBtn {
                margin-top: 10px;
                cursor: pointer;
                font-size: 14px;
                color: #FF844C;
                text-align: right;
            }
        }
        .foterBox {
            width: 88.8%;
            min-width: 1000px;
            margin: 0 auto;
            display: flex;
            height: calc(~' 39.9% - 120px');
            min-height: 160px;
            padding: 10px 0;
            .foterImg {
                width: 100%;
                margin: 0 8px;
                height: 100%;
                background-position: center center;
                background-size: contain;
                background-repeat: no-repeat;
                border-radius: 5px;
                cursor: pointer;
            }
            .foterImg:first-child {
                margin-left: 0;
            }
            .foterImg:last-child {
                margin-right: 0;
            }

        }
        .bottomBox{
            width: 100%;
            position: relative;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: flex-end;
        }
        .bottomBar{
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #EEEEEE;
            font-size: 12px;
            color: #666666;
            text-align: center;
        }
        .forgetPassBox{
            width: 100%;
            min-width: 1000px;
            height: calc(~'100% - 150px ');
            background:#F5F5F5 ;
            .forgetBody{
                background: #FFFFFF;
                border: 1px solid #D5D5D5;
                width: 1026px;
                margin: 0 auto;
                margin-top: 50px;
                padding:40px;
                padding-left: 125px;

            }
        }

    }

</style>
