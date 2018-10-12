<template>
        <div class="received" style="width: 100%;height: 97%;">
            <div class="chatBox">
                <div class="sessionList">
                    <div class="listTitle noselect">
                        <div class="swithBtn active">全部</div>
                        <div class="swithBtn">沟通中</div>
                        <div class="swithBtn">不合适</div>
                    </div>
                </div>
                <div class="sessionWindow"></div>
            </div>
        </div>
</template>

<script>
    export default {
        name: "chat",
        data(){
            return{
                sessionList:[]
            }
        },
        created(){
            RongIMClient.getInstance().getConversationList({
                onSuccess: function(list) {
                    console.log(list);
                    this.sessionList = list
                },
                onError: function(error) {
                    // do something...
                }
            },null);
        },
    }
</script>

<style lang="less">
    .chatBox{
        width: 100%;
        height: 100%;
        min-height:668px;
        background: #FAFAFA;
        box-shadow: 0 2px 8px 0 rgba(0,0,0,0.06);
        border-radius: 2px;
        display: flex;
        .sessionList{
            width: 25.67%;
            height: 100%;
            background: #fff;
            box-shadow:0 2px 8px 0 rgba(0,0,0,0.08);
            .listTitle{
                height: 7%;
                background: #FAFAFA;
                box-shadow:0 2px 4px 0 rgba(0,0,0,0.04);
                border-radius: 4px 0 0 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .swithBtn{
                    cursor: pointer;
                    width: 100%;
                    height: 100%;
                    font-family: PingFangSC-Regular;
                    font-size: 16px;
                    color: #666666;
                    letter-spacing: 0.27px;
                    text-align: right;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .swithBtn.active{
                    color: #FF844C;
                }
                .swithBtn.active:after{
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: #FF844C;
                }

            }
        }

    }
</style>
