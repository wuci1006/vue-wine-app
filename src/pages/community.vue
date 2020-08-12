<template>
    <div class="my_community">
        <div class="community_header">
            <myHeader :class="{ communityBg: true }">
                <div slot="left" class="left_img" >
                    <img :src="headerArr.personUrl" alt="" />
                </div>
                <div slot="center" class="search_box"></div>
                <div slot="right" class="right_img">
                    <img :src="headerArr.msgUrl" alt="" />
                </div>
            </myHeader>
        </div>
        <div class="community_main">
            <ul class="tab_menu">
                <li v-for="(i,index) in menuData" :key="index" 
                    :class="{'active':currentMenuKey == i.menuKey}" 
                    @click="handleMenuChange(i,index)">
                    <span>{{i.menuName}}</span>
                </li>
            </ul>
            <myActivity v-if="currentMenuKey=='activity'" :activityData="activityData"></myActivity>
            <mySift v-if="currentMenuKey=='sift'" :siftData="siftData"></mySift>    
            <myCircle v-if="currentMenuKey=='circle'" :circleData="circleData"></myCircle>
        </div>
    </div>
</template>

<script>
import myHeader from "../components/header/myHeader.vue";
import myActivity from "../components/community/myActivity.vue";
import mySift from "../components/community/mySift.vue";
import myCircle from "../components/community/myCircle.vue";

import { getActivity,getSift,getCircle } from "../api/api.js";

export default {
    components: {
        myHeader,myActivity,mySift,myCircle
    },
    data() {
        return {
            headerArr:{
                scanUrl:require('../assets/images/tools/ic_cate_scan.png'),
                searchUrl:require('../assets/images/tools/ic_group_search_small.png'),
                msgUrl:require('../assets/images/tools/icon_not_message.png'),
                inputHolder:'酒鬼酒特卖：20000套酒具免费享',
                personUrl:require('../assets/images/tools/ic_tab_profile_female_normal.png'),
                setUrl:require('../assets/images/tools/setting_icon.png'),
            },
            currentMenuKey:'activity',
            menuData:[
                {id:1,menuName:'活动',menuKey:'activity'},
                {id:2,menuName:'精选页',menuKey:'sift'},
                {id:3,menuName:'酒友圈',menuKey:'circle'},
            ],
            activityData:[],
            siftData:[],
            circleData:[]
        }
    },
    mounted() {
        this.handleActivity();
        this.handleSift();
        this.handleCircle();
    },
    methods: {
        handleMenuChange(item,index){
            this.currentMenuKey = item.menuKey;
        },
        handleActivity(){
            getActivity({}).then((res) =>{
                this.activityData = res;
            });
        },
        handleSift(){
            getSift({}).then((res) =>{
                this.siftData = res;
            });
        },
        handleCircle(){
            getCircle({}).then((res) =>{
                this.circleData = res;
            });
        },
    },
};
</script>

<style scoped>
.my_community {
    width: 100%;
    height: 100%;
}
.tab_menu {
    width: 100%;
    height: 48px;
    position: fixed;
    z-index: 999;
    left: 0;
    top: 48px;
    font-size: 14px;
    background-color: #fafafa;
    display: flex;
}
.tab_menu li {
    flex: 1;
    height: 48px;
    line-height: 38px;
    text-align: center;
    
}
.tab_menu li span{
    color: #666;
    display: inline-block;
}
.tab_menu li.active span{
    border-bottom: 2px solid #000;
    color: #000;
}
</style>
