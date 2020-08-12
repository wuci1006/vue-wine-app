<template>
    <div class="my_category">
        <div class="category_header">
            <myHeader :class="{categoryBg:true}">
                <div slot="left" class="search_box">
                    <img :src="headerArr.searchUrl"  alt="" class="search_img">
                    <input type="text" :placeholder="headerArr.inputHolder" class="search_input">
                </div>
                <div slot="right" class="right_img">
                    <img :src="headerArr.msgUrl" alt="">
                </div>
            </myHeader>
        </div>
        <div class="category_main">
            <ul class="menu">
                <li v-for="(i,index) in menuData" :key="index" 
                    :class="{'active':currentMenuKey == i.menuKey}" 
                    @click="handleMenuChange(i,index)">
                    {{i.menuName}}</li>
            </ul>
            <myContent v-if="currentMenuKey=='one'" :contentData="contentData"></myContent>
            <myMatter v-if="currentMenuKey=='two'" :contentData="contentData"></myMatter>
            <myMatter v-if="currentMenuKey=='three'" :contentData="contentData"></myMatter>
            <myMatter v-if="currentMenuKey=='four'" :contentData="contentData"></myMatter>
            <myMatter v-if="currentMenuKey=='five'" :contentData="contentData"></myMatter>
            <myContent v-if="currentMenuKey=='six'" :contentData="contentData"></myContent>
        </div>
    </div>
</template>

<script>
import myHeader from "../components/header/myHeader.vue";
import myContent from "../components/category/myContent.vue";
import myMatter from "../components/category/myMatter.vue";
export default {
    components: {
        myHeader,myContent,myMatter
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
            currentMenuKey:'one',
            menuData:[
                {   id:1,menuName:'一键选酒',menuKey:'one',
                    info:[
                        {id:11,url:require('../assets/images/category/one/one_1.png'),title:'整箱囤货'},
                        {id:12,url:require('../assets/images/category/one/one_2.png'),title:'实惠大坛'},
                        {id:13,url:require('../assets/images/category/one/one_3.png'),title:'热卖好酒'},
                        {id:14,url:require('../assets/images/category/one/one_4.png'),title:'礼尚往来'},
                        {id:15,url:require('../assets/images/category/one/one_5.png'),title:'年份老酒'},
                        {id:16,url:require('../assets/images/category/one/one_6.png'),title:'名优白酒'},
                        {id:17,url:require('../assets/images/category/one/one_7.png'),title:'海外直采'},
                        {id:18,url:require('../assets/images/category/one/one_8.png'),title:'必买清单'},
                        {id:19,url:require('../assets/images/category/one/one_9.png'),title:'猎奇专场'},
                        {id:110,url:require('../assets/images/category/one/one_10.png'),title:'喜宴用酒'},
                        {id:111,url:require('../assets/images/category/one/one_11.png'),title:'新品推荐'},
                        {id:112,url:require('../assets/images/category/one/one_12.png'),title:'红酒特惠'},
                        {id:113,url:require('../assets/images/category/one/one_13.png'),title:'名酒清仓'},
                        {id:114,url:require('../assets/images/category/one/one_14.png'),title:'名庄特卖'},
                        {id:115,url:require('../assets/images/category/one/one_15.png'),title:'每周低价'}
                    ]
                },
                {   id:2,menuName:'白酒',menuKey:'two',
                    info:{
                        bannerData:[
                            {id:221,url:require('../assets/images/banner/banner1.jpg')},
                            {id:222,url:require('../assets/images/banner/banner2.jpg')},
                        ],
                        mainData:[
                            {   id:231,title:'热门品牌',titleColor:'orange',
                                detailArr:[
                                    {id:2311,text:'茅台',url:require('../assets/images/category/two/two1.gif')},
                                    {id:2312,text:'五粮液',url:require('../assets/images/category/two/two2.gif')},
                                    {id:2313,text:'泸州老窖',url:require('../assets/images/category/two/two3.gif')},
                                    {id:2314,text:'牛栏山',url:require('../assets/images/category/two/two4.gif')},
                                    {id:2315,text:'汾酒',url:require('../assets/images/category/two/two5.gif')},
                                    {id:2316,text:'剑南春',url:require('../assets/images/category/two/two6.gif')},
                                    {id:2317,text:'洋河',url:require('../assets/images/category/two/two7.gif')},
                                    {id:2318,text:'郎酒',url:require('../assets/images/category/two/two8.gif')},
                                    {id:2319,text:'水井坊',url:require('../assets/images/category/two/two9.gif')},
                                    {id:23110,text:'酒鬼酒',url:require('../assets/images/category/two/two10.gif')},
                                    {id:23111,text:'古井贡',url:require('../assets/images/category/two/two11.gif')},
                                    {id:23112,text:'全兴',url:require('../assets/images/category/two/two12.gif')},
                                ]
                            },
                            {   id:241,title:'香型',titleColor:'plum',
                                detailArr:[
                                    {id:2411,text:'酱香型'},
                                    {id:2412,text:'浓香型'},
                                    {id:2413,text:'清香型'},
                                    {id:2414,text:'馥郁香型'},
                                    {id:2415,text:'凤香型'},
                                    {id:2416,text:'熏香型'},
                                    {id:2417,text:'老白干香型'},
                                ]
                            },
                            {   id:251,title:'产地',titleColor:'deepskyblue',
                                detailArr:[
                                    {id:2511,text:'贵州'},
                                    {id:2512,text:'四川'},
                                    {id:2513,text:'山西'},
                                    {id:2514,text:'河南'},
                                    {id:2515,text:'山东'},
                                    {id:2516,text:'安徽'},
                                    {id:2517,text:'河北'},
                                    {id:2518,text:'新疆'},
                                    {id:2519,text:'湖南'},
                                ]
                            },
                            {   id:261,title:'价位',titleColor:'yellow',
                                detailArr:[
                                    {id:2611,text:'1-49元'},
                                    {id:2612,text:'50-99元'},
                                    {id:2613,text:'100-199元'},
                                    {id:2614,text:'200-299元'},
                                    {id:2615,text:'300-499元'},
                                    {id:2616,text:'500-999元'},
                                    {id:2617,text:'1000-1999元'},
                                    {id:2618,text:'2000元以上'},
                                ]
                            }
                        ]
                    }
                },
                {   id:3,menuName:'葡萄酒',menuKey:'three',
                    info:{
                        bannerData:[
                            {id:221,url:require('../assets/images/banner/banner1.jpg')},
                            {id:222,url:require('../assets/images/banner/banner2.jpg')},
                        ],
                        mainData:[
                            {   id:231,title:'热门品牌',titleColor:'orange',
                                detailArr:[
                                    {id:2311,text:'拉菲',url:require('../assets/images/category/three/three1.gif')},
                                    {id:2312,text:'奔富',url:require('../assets/images/category/three/three2.gif')},
                                    {id:2313,text:'长城',url:require('../assets/images/category/three/three3.gif')},
                                    {id:2314,text:'黄尾袋鼠',url:require('../assets/images/category/three/three4.gif')},
                                    {id:2315,text:'张裕',url:require('../assets/images/category/three/three5.gif')},
                                    {id:2316,text:'红魔鬼',url:require('../assets/images/category/three/three6.gif')},
                                    {id:2317,text:'丁戈树',url:require('../assets/images/category/three/three7.gif')},
                                    {id:2318,text:'茉莉花',url:require('../assets/images/category/three/three8.gif')},
                                    {id:2319,text:'克拉克',url:require('../assets/images/category/three/three9.gif')},
                                ]
                            },
                            {   id:241,title:'类型',titleColor:'plum',
                                detailArr:[
                                    {id:2411,text:'红葡萄酒'},
                                    {id:2412,text:'白葡萄酒'},
                                    {id:2413,text:'起泡酒'},
                                    {id:2414,text:'桃红葡萄酒'}
                                ]
                            },
                            {   id:251,title:'品种',titleColor:'deepskyblue',
                                detailArr:[
                                    {id:2511,text:'赤霞珠'},
                                    {id:2512,text:'梅洛'},
                                    {id:2513,text:'西拉'},
                                    {id:2514,text:'长相思'},
                                    {id:2515,text:'歌海娜'},
                                    {id:2516,text:'添帕尼优'},
                                ]
                            },
                            {   id:231,title:'国家',titleColor:'green',
                                detailArr:[
                                    {id:2311,text:'法国',url:require('../assets/images/category/three/three10.gif')},
                                    {id:2312,text:'西班牙',url:require('../assets/images/category/three/three11.gif')},
                                    {id:2313,text:'澳大利亚',url:require('../assets/images/category/three/three12.gif')},
                                    {id:2314,text:'中国',url:require('../assets/images/category/three/three13.gif')},
                                    {id:2315,text:'智利',url:require('../assets/images/category/three/three14.gif')},
                                    {id:2316,text:'意大利',url:require('../assets/images/category/three/three15.gif')},
                                ]
                            },
                            {   id:261,title:'价位',titleColor:'yellow',
                                detailArr:[
                                    {id:2611,text:'1-49元'},
                                    {id:2612,text:'50-99元'},
                                    {id:2613,text:'100-199元'},
                                    {id:2614,text:'200-299元'},
                                    {id:2615,text:'300-499元'},
                                    {id:2616,text:'500-999元'},
                                    {id:2617,text:'1000-1999元'},
                                    {id:2618,text:'2000元以上'},
                                ]
                            }
                        ]
                    }
                },
                {   id:4,menuName:'洋酒',menuKey:'four',
                    info:{
                        bannerData:[
                            {id:221,url:require('../assets/images/banner/banner1.jpg')},
                            {id:222,url:require('../assets/images/banner/banner2.jpg')},
                        ],
                        mainData:[
                            {   id:231,title:'热门品牌',titleColor:'orange',
                                detailArr:[
                                    {id:2311,text:'轩尼诗',url:require('../assets/images/category/four/four1.gif')},
                                    {id:2312,text:'马爹利',url:require('../assets/images/category/four/four2.gif')},
                                    {id:2313,text:'芝华士',url:require('../assets/images/category/four/four3.gif')},
                                    {id:2314,text:'杰克丹尼',url:require('../assets/images/category/four/four4.gif')},
                                    {id:2315,text:'人头马',url:require('../assets/images/category/four/four5.gif')},
                                    {id:2316,text:'百加得',url:require('../assets/images/category/four/four6.gif')},
                                    {id:2317,text:'百龄坛',url:require('../assets/images/category/four/four7.gif')},
                                    {id:2318,text:'真露',url:require('../assets/images/category/four/four8.gif')},
                                    {id:2319,text:'贺茂鹤',url:require('../assets/images/category/four/four9.gif')},
                                ]
                            },
                            {   id:241,title:'类型',titleColor:'plum',
                                detailArr:[
                                    {id:2411,text:'威士忌'},
                                    {id:2412,text:'白兰地'},
                                    {id:2413,text:'伏特加'},
                                    {id:2414,text:'朗姆酒'},
                                    {id:2415,text:'预调酒'},
                                    {id:2416,text:'力娇酒'}
                                ]
                            },
                            {   id:261,title:'价位',titleColor:'yellow',
                                detailArr:[
                                    {id:2611,text:'1-49元'},
                                    {id:2612,text:'50-99元'},
                                    {id:2613,text:'100-199元'},
                                    {id:2614,text:'200-299元'},
                                    {id:2615,text:'300-499元'},
                                    {id:2616,text:'500-999元'},
                                    {id:2617,text:'1000-1999元'},
                                    {id:2618,text:'2000元以上'},
                                ]
                            }
                        ]
                    }
                },
                {   id:5,menuName:'黄/保/啤',menuKey:'five',
                    info:{
                        bannerData:[],
                        mainData:[
                            {   id:231,title:'啤酒品牌',
                                detailArr:[
                                    {id:2311,text:'青岛',url:require('../assets/images/category/five/five1.gif')},
                                    {id:2312,text:'瓦伦丁',url:require('../assets/images/category/five/five2.gif')},
                                    {id:2313,text:'嘉士伯',url:require('../assets/images/category/five/five3.gif')},
                                    {id:2314,text:'雪花',url:require('../assets/images/category/five/five4.gif')},
                                    {id:2315,text:'艾丝伯爵',url:require('../assets/images/category/five/five5.gif')},
                                    {id:2316,text:'费尔德堡',url:require('../assets/images/category/five/five6.gif')},
                                ]
                            },
                            {   id:241,title:'养生酒',
                                detailArr:[
                                    {id:2411,text:'椰岛',url:require('../assets/images/category/five/five7.gif')},
                                    {id:2412,text:'竹叶青',url:require('../assets/images/category/five/five8.gif')},
                                    {id:2413,text:'劲酒',url:require('../assets/images/category/five/five9.gif')},
                                ]
                            },
                        ]
                    }
                },
                {   id:6,menuName:'酒仙食尚',menuKey:'six',
                    info:[
                        {id:61,url:require('../assets/images/category/six/six_1.gif'),title:'润之源泉'},
                        {id:62,url:require('../assets/images/category/six/six_2.gif'),title:'休闲食品'},
                        {id:64,url:require('../assets/images/category/six/six_4.gif'),title:'茶饮冲调'},
                        {id:65,url:require('../assets/images/category/six/six_5.gif'),title:'营养健康'},
                        {id:66,url:require('../assets/images/category/six/six_6.gif'),title:'电子烟'},
                        {id:67,url:require('../assets/images/category/six/six_7.gif'),title:'解酒'},
                    ]
                },
            ],
            contentData:[],
        }
    },
    mounted() {
        this.contentData = this.menuData[0].info;
    },
    methods: {
        handleMenuChange(item,index){
            this.currentMenuKey = item.menuKey;
            this.contentData = this.menuData[index].info;
        },
    },
};
</script>

<style scoped>
.my_category {
    width: 100%;
    height: 100%;
}
.category_main{
    height: 100%;
    position: relative;
}
.menu {
    background-color: #f1f5f4;
    font-size: 1.2rem;
    border-right:1px solid #eee;
    position: fixed;
    top:48px;
    left:0;
    width:20%;
    height:100%;

}
.menu li {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #666;
    width: 100%;
    display: inline-block;
}
.menu li.active {
    background-color: #fff;
    color: red;
}


</style>
