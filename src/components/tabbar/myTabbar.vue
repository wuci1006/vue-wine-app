<template>
    <div class="my_tabbar">
        <myTabbarList v-for="(i,index) in tabbarData" :key="index" 
            :tabTxt="i.txt" :tabMark="i.mark" :tabSelected="indexSelected" 
            @selectedChange="handleSelectedChange">
            <img :src="i.defaultUrl" alt="" slot="slot1" />
            <img :src="i.selectUrl" alt="" slot="slot2" />
        </myTabbarList>
    </div>
</template>

<script>
import myTabbarList from "./myTabbarList.vue";
export default {
    components: {
        myTabbarList,
    },
    data() {
        return {
            tabbarData:[
                {   id:1,txt:'首页',mark:'home',defaultUrl:require('../../assets/images/tabbar/icon_tab_home.png'),
                    selectUrl:require('../../assets/images/tabbar/icon_tab_home_checked.png')},

                {   id:2,txt:'分类',mark:'category',defaultUrl:require('../../assets/images/tabbar/icon_tab_category.png'),
                    selectUrl:require('../../assets/images/tabbar/icon_tab_category_checked.png')},

                // {   id:3,txt:'社区',mark:'community',defaultUrl:require('../../assets/images/tabbar/icon_tab_community.png'),
                //     selectUrl:require('../../assets/images/tabbar/icon_tab_community_checked.png')},
                    
                {   id:4,txt:'购物车',mark:'cart',defaultUrl:require('../../assets/images/tabbar/icon_tab_cart.png'),
                    selectUrl:require('../../assets/images/tabbar/icon_tab_cart_checked.png')},

                {   id:5,txt:'我的',mark:'mine',defaultUrl:require('../../assets/images/tabbar/icon_tab_usercenter.png'),
                    selectUrl:require('../../assets/images/tabbar/icon_tab_usercenter_checked.png')},
            ],
            indexSelected: "home",
        };
    },
    methods: {
        handleSelectedChange(val) {
            this.indexSelected = val;
        },
    },
};
</script>

<style scoped>
.my_tabbar {
    width: 100%;
    height: 54px;
    line-height: 54px;
    position: fixed;
    bottom: 0;
    background-color: #fff;
    border-top: 1px solid #ccc;
    z-index: 999;
    display: flex;
}
</style>
