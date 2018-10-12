<template>
    <div class="manage_page fillcontain">

        <head-top @collapse="isCollapse"></head-top>

        <div class="menuBox" style="height: calc( 100% - 62px)">
            <div class="leftMenu noselect" :style="{width:(collapse==true?'5%':'15%')}"
                 style="min-height: 100%; background-color:#2B2F3C;">
                <el-menu :default-active="currentTabName"
                         text-color="rgba(255,255,255,.45)"
                         active-text-color="#FFFFFF"
                         router
                         @select="currentTab"
                         :collapse="collapse"
                         :collapse-transition="false">
                    <!--<el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item>-->
                    <div class="menuItemTitle">招聘</div>
                    <el-menu-item index="post" :style="{paddingLeft:(collapse==true?'20px':'25%')}">
                        <img style="margin-right: 5px;" :src="currentTabName=='post'?iconPath.icon1_a:iconPath.icon1"
                             alt="">
                        <span slot="title">岗位</span>
                    </el-menu-item>
                    <el-menu-item index="resume" :style="{paddingLeft:(collapse==true?'20px':'25%')}">
                        <img style="margin-right: 5px;" :src="currentTabName=='resume'?iconPath.icon2_a:iconPath.icon2"
                             alt="">
                        <span slot="title">简历</span>
                    </el-menu-item>
                    <el-menu-item :style="{paddingLeft:(collapse==true?'20px':'25%')}" index="interview">
                        <img style="margin-right: 5px;"
                             :src="currentTabName=='interview'?iconPath.icon3_a:iconPath.icon3" alt="">
                        <span slot="title">面试</span>
                    </el-menu-item>
                    <!--<el-menu-item index="anchors"><i class="el-icon-download"></i>抓取管理</el-menu-item>-->
                    <el-menu-item :style="{paddingLeft:(collapse==true?'20px':'25%')}" index="like">
                        <img style="margin-right: 5px;" :src="currentTabName=='like'?iconPath.icon4_a:iconPath.icon4"
                             alt="">
                        <span slot="title">对我感兴趣</span>
                    </el-menu-item>

                    <!--增值-->

                    <div class="menuItemTitle">增值</div>
                    <el-menu-item index="recommend" :style="{paddingLeft:(collapse==true?'20px':'25%')}">
                        <img style="margin-right: 5px;"
                             :src="currentTabName=='recommend'?iconPath.icon5_a:iconPath.icon5" alt="">
                        <span slot="title">推荐</span>
                    </el-menu-item>
                    <el-menu-item :style="{paddingLeft:(collapse==true?'20px':'25%')}" index="chat">
                        <img style="margin-right: 5px;" :src="currentTabName=='chat'?iconPath.icon6_a:iconPath.icon6"
                             alt="">
                        <span slot="title">沟通</span>
                    </el-menu-item>
                    <!--<el-menu-item index="anchors"><i class="el-icon-download"></i>抓取管理</el-menu-item>-->
                    <el-menu-item :style="{paddingLeft:(collapse==true?'20px':'25%')}" index="overview">
                        <img style="margin-right: 5px;"
                             :src="currentTabName=='overview'?iconPath.icon7_a:iconPath.icon7" alt="">
                        <span slot="title">招聘报告</span>
                    </el-menu-item>

                    <!--我的-->

                    <div class="menuItemTitle">我的</div>
                    <el-menu-item :style="{paddingLeft:(collapse==true?'20px':'25%')}" index="information">
                        <img style="margin-right: 5px;"
                             :src="currentTabName=='information'?iconPath.icon8_a:iconPath.icon8" alt="">
                        <span slot="title">企业信息</span>
                    </el-menu-item>

                    <!--<el-menu-item index="anchors"><i class="el-icon-download"></i>抓取管理</el-menu-item>-->
                    <el-menu-item :style="{paddingLeft:(collapse==true?'20px':'25%')}" index="member">
                        <img style="margin-right: 5px;" :src="currentTabName=='member'?iconPath.icon9_a:iconPath.icon9"
                             alt="">
                        <span slot="title">会员服务</span>
                    </el-menu-item>
                    <el-menu-item index="search" style="display:none">

                    </el-menu-item>

                </el-menu>
                <div @click="sendTextMessage">12312312</div>
                <div @click="getConversationList">获取回话列表</div>
                <div @click="getHistory">拉取历史消息</div>
                <div @click="getEmoji">表情</div>
                <span  v-for="item in emojiList" v-html="item.outerHTML"></span>
            </div>
            <div class="rightContent" style="overflow: auto;" :style="{width:(collapse?'95%':'calc(85% - 40px)')}">
                <keep-alive>

                    <router-view></router-view>
                </keep-alive>
                <div class="footer">
                    <div class="container">
                        <div class="mainBox">
                            <div class="footer-main">
                                <div class="tit">
                                    服务与支持
                                </div>
                                <a>恒信动态</a>
                                <a>关于我们</a>
                                <a>加入恒信</a>
                            </div>
                            <div class="footer-main">
                                <div class="tit">
                                </div>
                                <a>帮助</a>
                                <a>提交反馈</a>
                                <a>在线客服</a>
                            </div>
                            <div class="footer-main">
                                <div class="tit">
                                    我的客服
                                </div>
                                <a>销售经理：董经理 18888888888</a>
                                <a>客服热线：0579-85129191（周一至周六 8:30-18:00）</a>
                                <a>服务投诉：金胜强 13957954169</a>
                            </div>
                        </div>
                        <div class="qrCode">
                            <div class="qrCodeBox">
                                <img src="../assets/img/img_QRcode01@2x.png" alt="">
                                <p>扫码下载APP 招聘快人一步</p>
                            </div>
                            <div class="qrCodeBox">
                                <img src="../assets/img/img_QRcode02@2x.png" alt="">
                                <p>添加招聘小助手 帮你发布岗位</p>
                                <p> （微信号：axin_hxrc) </p>
                            </div>
                        </div>
                    </div>
                    <div class="bottom">© 2002-2018 恒信人才网(91JOB.COM) All Rights 人才中介服务许可证号 330782000001 浙ICP备05042308号
                        ICP证号 浙B2-20130121
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '@/components/headTop'
    import {getCookie, delCookie} from "../api/cookie";

    export default {
        data() {
            return {
                screenWidth: "",
                collapse: false,
                currentTabName: this.$route.path.replace('/', ''),
                iconPath: {
                    icon1: require('../assets/img/menu_post@2x.png'),
                    icon1_a: require('../assets/img/menu_post_pre@2x.png'),
                    icon2: require('../assets/img/menu_resume@2x.png'),
                    icon2_a: require('../assets/img/menu_resume_pre@2x.png'),
                    icon3: require('../assets/img/menu_interview@2x.png'),
                    icon3_a: require('../assets/img/menu_interview_pre@2x.png'),
                    icon4: require('../assets/img/menu_interest@2x.png'),
                    icon4_a: require('../assets/img/menu_interest_pre@2x.png'),
                    icon5: require('../assets/img/menu_recommended@2x.png'),
                    icon5_a: require('../assets/img/menu_recommended_pre@2x.png'),
                    icon6: require('../assets/img/menu_communication@2x.png'),
                    icon6_a: require('../assets/img/menu_communication_pre@2x.png'),
                    icon7: require('../assets/img/menu_report@2x.png'),
                    icon7_a: require('../assets/img/menu_report_pre@2x.png'),
                    icon8: require('../assets/img/menu_information@2x.png'),
                    icon8_a: require('../assets/img/menu_information_pre@2x.png'),
                    icon9: require('../assets/img/menu_menber@2x.png'),
                    icon9_a: require('../assets/img/menu_menber_pre@2x.png')
                },
                targetId: '小伟的father',
                sessionList:[],
            }
        },
        created() {
            var that = this
            function init(params, callbacks, modules){
                var appKey = params.appKey;
                var token = params.token;
                var navi = params.navi || "";
                var store = that.$store
                modules = modules || {};
                var RongIMLib = modules.RongIMLib || window.RongIMLib;
                var RongIMClient = RongIMLib.RongIMClient;
                var protobuf = modules.protobuf || null;

                var config = {};

                //私有云切换navi导航，私有云格式 '120.92.10.214:8888'
                if(navi !== ""){
                    config.navi = navi;
                }

                //私有云切换api,私有云格式 '172.20.210.38:81:8888'
                var api = params.api || "";
                if(api !== ""){
                    config.api = api;
                }

                //support protobuf url + function
                if(protobuf != null){
                    config.protobuf = protobuf;
                };

                var dataProvider = null;
                var imClient = params.imClient;
                if (imClient) {
                    dataProvider = new RongIMLib.VCDataProvider(imClient);
                }
                RongIMLib.RongIMClient.init(appKey, dataProvider, config);

                var instance = RongIMClient.getInstance();
                console.log(instance)
                // 连接状态监听器
                RongIMClient.setConnectionStatusListener({
                    onChanged: function (status) {
                        // console.log(status);
                        switch (status) {
                            case RongIMLib.ConnectionStatus["CONNECTED"]:
                            case 0:
                                console.log("连接成功")
                                callbacks.getInstance && callbacks.getInstance(instance);
                                break;

                            case RongIMLib.ConnectionStatus["CONNECTING"]:
                            case 1:
                                console.log("连接中")
                                break;

                            case RongIMLib.ConnectionStatus["DISCONNECTED"]:
                            case 2:
                                console.log("当前用户主动断开链接")
                                break;

                            case RongIMLib.ConnectionStatus["NETWORK_UNAVAILABLE"]:
                            case 3:
                                console.log("网络不可用")
                                break;

                            case RongIMLib.ConnectionStatus["CONNECTION_CLOSED"]:
                            case 4:
                                console.log("未知原因，连接关闭")
                                break;

                            case RongIMLib.ConnectionStatus["KICKED_OFFLINE_BY_OTHER_CLIENT"]:
                            case 6:
                                console.log("用户账户在其他设备登录，本机会被踢掉线")
                                break;

                            case RongIMLib.ConnectionStatus["DOMAIN_INCORRECT"]:
                            case 12:
                                console.log("当前运行域名错误，请检查安全域名配置")
                                break;
                        }
                    }
                });

                /*
                文档：http://www.rongcloud.cn/docs/web.html#3、设置消息监听器

                注意事项：
                    1：为了看到接收效果，需要另外一个用户向本用户发消息
                    2：判断会话唯一性 ：conversationType + targetId
                    3：显示消息在页面前，需要判断是否属于当前会话，避免消息错乱。
                    4：消息体属性说明可参考：http://rongcloud.cn/docs/api/js/index.html
                */
                RongIMClient.setOnReceiveMessageListener({
                    // 接收到的消息
                    onReceived: function (message) {
                        // 判断消息类型

                        console.log("新消息: " + message.targetId);
                        console.log(message);
                        callbacks.receiveNewMessage && callbacks.receiveNewMessage(message);
                        store.dispatch('upDateNewMessage',message)
                        console.log(store.state.newMessageData.newMessage)
                    }
                });

                //开始链接
                RongIMClient.connect(token, {
                    onSuccess: function(userId) {
                        callbacks.getCurrentUser && callbacks.getCurrentUser({userId:userId});
                        console.log("链接成功，用户id：" + userId);
                    },
                    onTokenIncorrect: function() {
                        console.log('token无效');
                    },
                    onError:function(errorCode){
                        console.log(errorCode);
                    }
                }, params.userId);
            };
            var conversationType = RongIMLib.ConversationType.PRIVATE; // 私聊
            var instance = null;
            var appKey = "";
            var token = "";

            var userId = "";
            /*
            消息全部用单聊，user8 -> user9
            */
            /*
            PRIVATE 				1		单聊
            DISCUSSION 			2		讨论组
            GROUP 					3		群组
            CHATROOM 				4		聊天室
            CUSTOMER_SERVICE 		5		客服
            SYSTEM 				6		系统消息
            APP_PUBLIC_SERVICE 	7		应用公众账号（应用内私有）
            PUBLIC_SERVICE 		8		公众账号 (公有)
            */

            var targetId = "user9";
            var targetId2 = "user10";
            var targetIds = [];
            //消息接收方 Id，根据不同的 ConversationType，可能是用户 Id、讨论组 Id、群组 Id、聊天室 Id等。
            var begin = 0;

            function startInit(token) {
                appKey = "8w7jv4qb78a9y";
                if (appKey == "") {
                    alert("必须提供appkey和token");
                }
                begin = new Date().getTime()

                //公有云初始化
                var config = {
                    //protobuf: 'https://cdn.ronghub.com/protobuf-2.3.1.min.js' //支持http(s)网络路径、本地相对路径
                };

                var imClient = null;
                var isDesktopEnv = (typeof RongDesktop != 'undefined')
                if (isDesktopEnv) {
                    imClient = RongDesktop.require('IMLib');
                    // document.getElementById("rong-discussion").style.display = 'none';
                    // document.getElementById("rong-public-service").style.display = 'none';
                    // document.getElementById("rong-home-page").style.display = 'block';
                }

                var params = {
                    appKey: appKey,
                    token: token,
                    imClient: imClient,
                    userId: 'xiaowei'
                };

                var callbacks = {
                    getInstance: function (_instance) {
                        this.instance = _instance;
                    },
                    receiveNewMessage: function (message) {

                        // 判断消息类型
                        console.log("新消息",message);
                        console.log("messageUId:" + message.messageUId + ",   messageId:" + message.messageId);
                        console.log(message);
                    },
                    getCurrentUser: function (userInfo) {
                        userId = userInfo.userId;
                    }
                };
                console.log(callbacks)
                init(params, callbacks, config);
                console.log("初始化 应用 ");
                RongIMLib.RongIMEmoji.init();
                console.log("初始化 表情库 ");
                RongIMLib.RongIMVoice.init();
                console.log("初始化 声音库 ");

            }

            function login() {
                var token = "4FGCL0oQ/E72nU4ivbui8uHR/ySxKaD1cAX2biXsYR6RsLYO9xAA4ooa+q3n42JnVTQyMAdFUiDsjFRDYZaQeg==";

                if (token == "") {
                    alert("必须提供 token");
                }

                targetIds = "user9,user8";
                if (targetIds == "") {
                    alert("必须提供两个的有效targetId");
                }

                targetIds = targetIds.split("，").join(",").split(",");
                targetId = targetIds[0];
                targetId2 = targetIds[1];

                startInit(token);
            }

            login();
        },
        components: {
            headTop,
        },
        watch:{
            '$route'(v){
                console.log(this.$route.path.replace('/', ''))
                this.currentTabName = this.$route.path.replace('/', '')
            }
        },
        methods: {
            //屏幕宽度变化
            isCollapse(val) {
                this.collapse = val
            },
            currentTab(e) {
                console.log(e)
                this.currentTabName = e
            },
            //获取表情
            getEmoji() {
                var shadowDomList = [];
                for (var i = 0; i < RongIMLib.RongIMEmoji.list.length; i++) {
                    var value = RongIMLib.RongIMEmoji.list[i];
                    shadowDomList.push(value.node);
                }
                console.log(shadowDomList)

                for (var i = 0; i < shadowDomList.length; i++) {
                    this.emojiList.push(shadowDomList[i]);
                }
                console.log(this.emojiList)

            },
            //拉取历史消息
            getHistory() {
                var conversationType = RongIMLib.ConversationType.PRIVATE; //单聊,其他会话选择相应的消息类型即可。
                var targetId = "user10"; // 想获取自己和谁的历史消息，targetId 赋值为对方的 Id。
                var timestrap = null; // 默认传 null，若从头开始获取历史消息，请赋值为 0 ,timestrap = 0;
                var count = 20; // 每次获取的历史消息条数，范围 0-20 条，可以多次获取。
                RongIMLib.RongIMClient.getInstance().getHistoryMessages(conversationType, targetId, timestrap, count, {
                    onSuccess: function (list, hasMsg) {
                        console.log(list)
                    },
                    onError: function (error) {
                        console.log("GetHistoryMessages,errorcode:" + error);
                    }
                });
            },
            //获取会话列表
            getConversationList() {
                var that = this
                RongIMClient.getInstance().getConversationList({
                    onSuccess: function (list) {
                        console.log(list);
                        list.forEach((v,i)=>{
                            if(v.latestMessage.content.user){
                                that.sessionList.push({time:v.sentTime,
                                    unReadNum:v.unreadMessageCount,
                                    lastMessage:v.latestMessage.content.content,
                                    portrait:v.latestMessage.content.user.portrait,
                                    name:v.latestMessage.content.user.name,
                                })
                            }

                        })
                        console.log(that.sessionList)
                    },
                    onError: function (error) {
                        // do something...
                    }
                }, null);
            },
            //发送消息
            sendTextMessage() {

                var that = this
                /*
                文档： http://www.rongcloud.cn/docs/web.html#5_1、发送消息
                       http://rongcloud.cn/docs/api/js/TextMessage.html
                1: 单条消息整体不得大于128K
                2: conversatinType 类型是 number，targetId 类型是 string
                */

                /*
                    1、不要多端登陆，保证所有端都离线
                    2、接收 push 设备设置:
                        （1）打开系统通知提醒
                        （2）小米设置 “授权管理” －> “自己的应用” 为自启动
                        （3）应用内不要屏蔽新消息通知
                    3、内置消息类型，默认 push，自定义消息类型需要
                       pushData 显示逻辑顺序：自定义 > 默认
                    4、发送其他消息类型与发送 TextMessage 逻辑、方式一致
                */
                var pushData = "pushData" + Date.now();

                var isMentioned = false;

                var content = {
                    content: [
                        "呃呃呃"
                    ].join(","),
                    user: {
                        "id": "123",	//不支持中文及特殊字符
                        "name": "小伟",
                        "portrait": "http://02imgmini.eastday.com/mobile/20180821/20180821111805_5a54ad5f83089c740aa459a250debba2_1.jpeg"
                    },
                    extra: {post:'高新诚聘三年经验销售', key2 : 12, key3:true},
                };

                var msg = new RongIMLib.TextMessage(content);
                console.log(msg)
                var start = new Date().getTime();
                RongIMClient.getInstance().sendMessage(1, 'user10', msg, {
                    onSuccess: function (message) {
                        console.log("发送文字消息 成功", message, start);
                    },
                    onError: function (errorCode, message) {
                        console.log("发送文字消息 失败", message, start);
                    }
                }, isMentioned, pushData);
            },
        },

        computed: {

            defaultActive: function () {
                return this.$route.path.replace('/', '');
            }
        },
    }
</script>


<style lang="less">
    @import '../style/mixin';

    .menuBox {
        display: flex;
        justify-content: space-between;
    }

    .manage_page .el-menu-item {
        min-width: 0;
        height: 52px;
    }

    .menuBox .el-menu-item.is-active:after {
        content: "";
        width: 4px;
        height: 100%;
        background: #FF844C;
        position: absolute;
        left: 0;
        top: 0;
    }

    .menuBox .el-menu {
        background-color: #545c64;
        color: #fff;
        border: none;
    }

    .menuBox .el-menu-item {
        width: 100%;

    }

    .menuBox .leftMenu .el-tooltip {
        padding: 0 !important;
        width: 100%;
        text-align: center;
    }

    .menuBox .el-submenu__title {
        color: #fff;
    }

    .menuBox .el-menu-item {
        color: #f1f1f1;
        margin: 1px 0;

    }

    .el-menu-item, .el-submenu__title {
        line-height: 52px;
    }

    .el-menu-item:hover {
        outline: 0;
        background-color: #000;
    }

    .menuBox .el-menu--collapse {
        width: 100%;
        min-width: 50px;
    }

    .headTop {
        display: flex;
    }

    .leftMenu {
        min-width: 50px;
        padding-bottom: 2px;
    }

    .rightContent {
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }
        input[type="number"]{
            -moz-appearance: textfield;
        }
        background: #f5f5f5;
        min-width: 1100px;
        padding: 20px;
        padding-bottom: 0;
        .el-select .el-input.is-focus .el-input__inner{
            border: 1px solid #FF844C;
        }
        .el-select .el-input__inner:focus{
            border: 1px solid #FF844C;
        }
        .el-form-item.is-success .el-input__inner, .el-form-item.is-success .el-input__inner:focus, .el-form-item.is-success .el-textarea__inner, .el-form-item.is-success .el-textarea__inner:focus{
            border-color: #c0c4cc;
        }
    }

    .menuBox .el-menu-item img {
        width: 18px;
        height: 18px;
    }

    .menuBox {
        width: 100%;
    }

    .menuBox .el-menu {
        width: 100%;
        background: #1A1F30;
    }

    .menuItemTitle {
        height: 30px;
        padding-left: 12px;
        background-color: #181C2A;
        line-height: 30px;
        text-align: left;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #F4F4F4;
    }

    .menuBox .el-menu-item {
        background-color: #2B2F3C;
    }

    .menuBox .el-menu-item.is-active {
        background-color: #313646;
    }

    .rightContent .el-tab-pane {
        margin-top: 16px;
    }

    .rightContent .el-tabs--border-card {
        border: none;
        background: none;
        box-shadow: none;
    }

    .rightContent .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active:after {
        content: '';
        width: 100%;
        height: 3px;
        background: #FF844C;
        top: 0;
        left: 0;
        position: absolute;
    }

    .rightContent .el-tabs__content {
        padding: 0;
        margin-top: -1px;

    }
    .el-cascader-menu__item.is-active{
        color:#FF844C;
    }
    .rightContent .el-tabs--border-card > .el-tabs__header {
        position: relative;
        background-color: #FAFAFA;
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.06);
        height: 54px;
        box-sizing: border-box;
        -webkit-touch-callout: none; /* iOS Safari */

        -webkit-user-select: none; /* Chrome/Safari/Opera */

        -khtml-user-select: none; /* Konqueror */

        -moz-user-select: none; /* Firefox */

        -ms-user-select: none; /* Internet Explorer/Edge */

        user-select: none;
        /* Non-prefixed version, currently

       not supported by any browser */

    }

    .rightContent .el-tabs--border-card > .el-tabs__header .el-tabs__item {
        font-size: 18px;
        height: 54px;
        line-height: 54px;
        padding: 0 33px;
        border: none;
        color: #666666;
        max-width: 270px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .rightContent .el-tabs--border-card > .el-tabs__header .el-tabs__item:not(.is-disabled):hover {
        color: #FF844C;
    }

    .rightContent .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active:not(.is-disabled):hover {
        color: #FF844C;
    }

    .rightContent .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
        background: #FFFFFF;
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.06);
        border-radius: 2px 0 0 0;
        color: #FF844C;
        border: none;
        box-sizing: border-box;
    }

    .footer {
        margin-top: 60px;
        width: 100%;
        padding-right: 10px;
        .mainBox {
            width: 60%;
        }
        .footer-main {
            display: inline-block;
            vertical-align: top;
        }
        .footer-main:nth-child(1) {
            margin-right: 10px;
        }
        .footer-main:nth-child(2) {
            margin-right: 10%;
        }
        .tit {
            height: 40px;
            min-width: 70px;
            font-size: 14px;
            color: #999999;
        }
        a {
            display: block;
            font-size: 12px;
            color: #333333;
            margin-bottom: 10px;
            text-decoration: none;
            font-weight: lighter;
            cursor: pointer;
        }
        a:hover {
            color: #FF844C;
        }
        .container {
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        .qrCode {
            display: flex;
        }
        .qrCodeBox {
            padding: 0 10px;
            text-align: center;
            font-size: 12px;
            color: #333333;
            img {
                width: 74px;
                height: 74px;
                margin-bottom: 10px;
            }
        }
        .container {
            position: relative;
            padding-bottom: 20px;
        }
        .container:after {
            content: '';
            width: 100%;
            height: 1px;
            background: #D5D5D5;
            position: absolute;
            bottom: 0;
            left: 0;
        }
        .bottom {
            text-align: center;
            font-size: 12px;
            color: #999999;
            height: 50px;
            line-height: 50px;
        }
    }

    .paginationBox {
        margin: 20px;
        margin-top: 30px;
        text-align: center;

    }

    .el-table {
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.06);
        scrollbar-face-color: #FF844C; /*滚动条3D表面（ThreedFace）的颜色*/
        scrollbar-highlight-color: #fff; /*滚动条3D界面的亮边（ThreedHighlight）颜色*/
        scrollbar-shadow-color: #DDD; /*滚动条3D界面的暗边（ThreedShadow）颜色*/
        scrollbar-3dlight-color: #DDD; /*滚动条亮边框颜色*/
        scrollbar-arrow-color: #FF844C; /*滚动条方向箭头的颜色 */
        scrollbar-track-color: #DDD; /*滚动条的拖动区域(TrackBar)颜色*/
        ::-webkit-scrollbar-track-piece { //滚动条凹槽的颜色，还可以设置边框属性
            background-color: rgba(0, 0, 0, 0.25);
        }
        .tableNameBox {
            display: flex;
            align-items: center;
            overflow: hidden;
        }

        .tableAvatar {
            width: 30px;
            height: 30px;
            margin-right: 10px;
        }
        ::-webkit-scrollbar { //滚动条的宽度
            width: 10px;
            height: 10px;

        }
        ::-webkit-scrollbar-thumb { //滚动条的设置
            background-color: #FF844C;
            background-clip: padding-box;
            min-height: 28px;
        }
    }

    .searchBox {
        background: #fff;
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.06);
        font-size: 14px;
        width: 100%;
        display: inline-block;
        .el-form-item__label {
            font-size: 14px;
            color: #999999;
            letter-spacing: 0.24px;
        }
        form {
            margin: 10px 33px;
            position: relative;
            padding-bottom: 15px;
            border-bottom: 1px dashed #D5D5D5;
        }
        .el-input-group--prepend {
            .el-input__inner {
                border: none;
                padding-left: 10px;
            }
        }
        .el-input-group__prepend {
            background: #fff;
            border: none;
            padding: 0;
            padding-right: 10px;
            position: relative;
        }
        .el-input-group__prepend:after {
            content: '';
            position: absolute;
            right: 0;
            top: 10px;
            width: 2px;
            height: 12PX;
            background: #D5D5D5;

        }
    }

    .rightContent {
        .el-button--primary{
            background:#FF844C ;
            border-color:#FF844C;
        }
        .el-input.is-active .el-input__inner, .el-input__inner:focus{
            border-color:#FF844C;
        }
        .v-line {
            border-left: 1px solid #D5D5D5;
            margin: 0 7px 0 4px;
            font-size: 10px;
        }
        .postState {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            margin-right: 5px;
            display: inline-block;
            vertical-align: middle;
        }
        .el-table th:nth-child(2) > .cell {
            padding-left: 10px;
        }
        .el-table .el-table__row td:nth-child(2) > .cell {
            padding-left: 10px;
        }
        .received {

            .showPostBtn:after {
                content: '';
                position: absolute;
                left: -15px;
                top: 7px;
                background: #D5D5D5;
                width: 1px;
                height: 12px;
            }
            position: relative;
            min-height: 650px;
        }
        .showPostBtn {
            position: absolute;
            z-index: 100;
            left: 140px;
            top: 12px;
            font-size: 14px;
            color: #cccccc;
            padding: 2px 6px;
            border: 1px solid #D5D5D5;
            border-radius: 4px;
            cursor: pointer;
        }
        .delPostBtn{
            position: absolute;
            z-index: 100;
            left: 190px;
            top: 12px;
            font-size: 14px;
            color: #cccccc;
            padding: 2px 6px;
            border: 1px solid #D5D5D5;
            border-radius: 4px;
            cursor: pointer;
        }
        .delPostBtn.showPostAct{
            color: #FF844C;
            border-color: #FF844C;
        }
        .showPostBtn.showPostAct {
            color: #FF844C;
            border-color: #FF844C;
        }
        .el-input__inner {
            height: 32px;
            line-height: 32px;
        }
        .el-checkbox__inner:hover {
            border-color: #FF844C;
        }
        .el-checkbox__inner {
            border-color: #D5D5D5;
        }
        .el-checkbox__input.is-focus .el-checkbox__inner {
            border-color: #FF844C;
        }
        .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
            border-color: #FF844C;
            background-color: #FF844C;
        }
        .el-form-item {
            margin-right: 20px;
            margin-bottom: 0;
        }
        .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li {
            background: #fff;
            font-size: 14px;
            color: #666666;
            width: 32px;
            height: 32px;
            line-height: 32px;
            border-radius: 4px;
            border: 1px solid #D5D5D5;
            font-weight: lighter;
            padding: 0;
        }
        .el-pagination.is-background .el-pager li:not(.disabled).active {
            background-color: #FF844C;
            color: #fff;

        }
        .el-pagination.is-background .el-pager li:not(.disabled):hover {
            color: #FF844C;
        }
        .el-pagination.is-background .el-pager li:not(.disabled).active:hover {
            color: #fff;
        }

        .el-table {
            box-sizing: border-box;
            margin: 1px;

        }
        .el-table th {
            background: #FAFAFA;
            border-radius: 4px 4px 0 0;
            font-size: 14px;
            color: #999999;
            font-weight: lighter;
        }
        .el-table th .cell {
            padding: 0 33px;
        }
        .el-table .cell {
            padding: 0 33px;
        }
        .el-table__body-wrapper {
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #333333;
            cursor: pointer;
        }
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
</style>

