<template>
    <div class="my_mine">
        <div class="mine_header">
            <myHeader :class="{ mineBg: true }">
                <div slot="left" class="search_box"></div>
                <div slot="right1" class="right_img1">
                    <img :src="headerArr.setUrl" alt="" />
                </div>
                <div slot="right" class="right_img">
                    <img :src="headerArr.msgUrl" alt="" />
                </div>
            </myHeader>
        </div>

        <div class="mine_info">
            <div class="info_box clearfix">
                <img :src="userUrl" alt="" />
                <span>登录/注册 &nbsp;></span>
            </div>
        </div>

        <myCell leftText="我的订单" rightText="查看全部订单"></myCell>
        <myList :listData="orderData"></myList>
        
        <myCell leftText="我的钱包" rightText="查看明细" :class="{ line: true }"></myCell>
        <myList :listData="accountData"></myList>

        <div class="like_box">
            <div class="like_top">
                <span class="like_line"></span>
                <span>猜你喜欢</span>
                <span class="like_line"></span>
            </div>
            <div class="like_con">
                <div class="like_list" v-for="i in likeData" :key="i.key">
                    <img :src="i.pic" alt="" />
                    <p>{{ i.under }}</p>
                    <span>{{ i.price }}</span>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import myHeader from "../components/header/myHeader.vue";
import myCell from "../components/mine/myCell.vue";
import myList from "../components/mine/myList.vue";
import { getLike } from "../api/api.js";
export default {
    components: {
        myHeader,myCell,myList,
    },
    data() {
        return {
            headerArr: {
                scanUrl: require("../assets/images/tools/ic_cate_scan.png"),
                searchUrl: require("../assets/images/tools/ic_group_search_small.png"),
                msgUrl: require("../assets/images/tools/icon_not_message.png"),
                inputHolder: "酒鬼酒特卖：20000套酒具免费享",
                personUrl: require("../assets/images/tools/ic_tab_profile_female_normal.png"),
                setUrl: require("../assets/images/tools/setting_icon.png"),
            },
            userUrl:require("../assets/images/tools/ic_share_default_user.png"),
            orderData:[
                {id:1,url:require("../assets/images/mine/order/order1.jpg"),title:'待付款'},
                {id:2,url:require("../assets/images/mine/order/order2.jpg"),title:'待发货'},
                {id:3,url:require("../assets/images/mine/order/order3.jpg"),title:'待收获'},
                {id:4,url:require("../assets/images/mine/order/order4.jpg"),title:'待评价'},
            ],
            accountData:[
                {id:1,title:'0.00',text:'账户余额'},
                {id:2,title:'0.00',text:'返现'},
                {id:3,title:'0',text:'优惠券'},
                {id:4,title:'0',text:'金币'},
            ],
            otherData:[
                {id:1,url:require("../assets/images/mine/others/others1.png")},
                {id:2,url:require("../assets/images/mine/others/others2.png")},
                {id:3,url:require("../assets/images/mine/others/others3.png")},
                {id:4,url:require("../assets/images/mine/others/others4.png")},
                {id:5,url:require("../assets/images/mine/others/others5.png")},
                {id:6,url:require("../assets/images/mine/others/others6.png")},
                {id:7,url:require("../assets/images/mine/others/others7.png")},
                {id:8,url:require("../assets/images/mine/others/others8.png")},
            ],
            likeData: [],
        };
    },
    mounted() {
        this.handleLike();
    },
    methods: {
        handleLike(){
            getLike({}).then((res)=> {
                this.likeData = res;
            });
        },
    },
};
</script>

<style scoped>
.my_mine {
    background-color: #f1f5f4;
    text-align: center;
}

.mine_info {
    width:100%;
    margin-top:48px;
    background-color: #e14135;
}
.info_box {
    padding:10px;
}
.info_box img {
    float:left;
    width:80px;
    height:80px;
}
.info_box  span {
    float:left;
    margin-left:20px;
    line-height: 80px;
}



.like_box {
    width: 100%;
    /* margin-top: 30px; */
}
.like_box .like_top {
    width: 100%;
    font-size: 1.6rem;
    height: 40px;
    line-height: 40px;
}
.like_box .like_top span {
    display: inline-block;
    vertical-align: middle;
}
.like_box .like_top span.like_line{
    width:40px;
    height:1px;
    background-color: #ccc;
}
.like_con {
    column-count: 2;
    column-gap: 5px;
    padding-bottom:80px;
}

.like_list {
    display: block;
    background-color: #fff;
    margin-bottom: 5px;
    padding: 5px 10px;
}
.like_list img {
    width: 100%;
}
.like_list p {
    width: 100%;
    color: #000;
    display: inline-block;
    text-align: left;
    overflow: hidden;
    height: 20px;
    line-height: 20px;
}
.like_list span {
    width: 100%;
    color: red;
    display: inline-block;
    text-align: left;
}
</style>
