<template>
    <div class="my_home">

        <div class="home_header">
            <myHeader :class="{homeBg:true}" id="headerBox">
                <div slot="left" class="left_img">
                    <img :src="headerArr.scanUrl" alt="">
                </div>
                <div slot="center" class="search_box">
                    <img :src="headerArr.searchUrl"  alt="" class="search_img">
                    <input type="text" :placeholder="headerArr.inputHolder" class="search_input">
                </div>
                <div slot="right" class="right_img">
                    <img :src="headerArr.msgUrl" alt="">
                </div>
            </myHeader>
        </div>

        <div class="home_banner">
            <myBanner :auto="2000" :swiperId="11" dire="horizontal">
                <div class="swiper-slide" slot="slide" v-for="i in bannerData" :key="i.id">
                    <img :src="i.url" alt="">
                </div>
            </myBanner>
        </div>

        <div class="home_grid">
            <ul class="grid_box clearfix">
                <li class="grid_list" v-for="i in gridData" :key="i.id">
                    <img :src="i.url" alt="">
                </li>
            </ul>
        </div>

        <div class="home_news">
            <div class="news_box">
                <i><img :src="newsUrl" alt=""></i>
                <div class="news_banner">
                    <myBanner :auto="1000" :swiperId="22" dire="vertical">
                        <div class="swiper-slide" slot="slide" v-for="i in newsData" :key="i.id">
                            <a>{{i.text}}</a>
                        </div>
                    </myBanner>
                </div>
            </div>
        </div>

        <div class="home_spike">
            <div class="my_spike">
                <h3>掌上秒拍</h3>
                <div class="count_down">
                    <span>距结束</span>
                    <i>04</i><em>:</em> <i>11</i><em>:</em>
                    <i>07</i>
                </div>
                <a><span>更多产品等你来</span><i></i></a>
            </div>
            <div class="spike_banner">
                <myBanner :auto="0" :swiperId="33" :perview="4" :between="10">
                    <div class="swiper-slide" slot="slide" v-for="i in spikeData" :key="i.id">
                        <img :src="i.url" alt="">
                        <p>{{i.title}}</p>
                        <span>￥{{i.text}}</span>
                    </div>
                </myBanner>
            </div>
        </div>

        <div class="home_banner">
            <myBanner :auto="3000" :swiperId="44" dire="horizontal">
                <div class="swiper-slide" slot="slide" v-for="i in swiperData1" :key="i.id">
                    <img :src="i.url" alt="">
                </div>
            </myBanner>
        </div>

        <div class="home_phone">
            <myPhone :phoneArr="phoneArr"></myPhone>
        </div>

        <div class="home_banner">
            <myBanner :auto="0" :swiperId="55" dire="horizontal" :perview="3" :between="0">
                <div class="swiper-slide" slot="slide" v-for="i in swiperData2" :key="i.id">
                    <img :src="i.url" alt="">
                </div>
            </myBanner>
        </div>

        <div class="home_banner">
            <myBanner :auto="3000" :swiperId="66" dire="horizontal" >
                <div class="swiper-slide" slot="slide" v-for="i in swiperData3" :key="i.id">
                    <img :src="i.url" alt="">
                </div>
            </myBanner>
        </div>

        <div class="home_fine">
            <myFine :fineArr="fineArr"></myFine>
        </div>

        <div class="home_box" v-for="(item,index) in boxData" :key="index">
            <myBox :boxArr="item"></myBox>
            <myBanner :auto="0" :swiperId="item.id" dire="horizontal" :perview="5" :between="0">
                <div class="swiper-slide" slot="slide" v-for="(i,index) in item.img" :key="index">
                    <img :src="i">
                </div>
            </myBanner>
        </div>

        <div class="home_product">
            <div class="product_top">
                <a>爆款推荐</a>
            </div>
            <myProduct :productData="productData"></myProduct>
        </div>

        <div class="home_copyright">
            <myCopyright></myCopyright>
        </div>

    </div>
</template>

<script>
import $ from 'jquery';
import {getBox,getProduction} from '../api/api.js';
import myHeader from "../components/header/myHeader.vue";
import myBanner from '../components/banner/myBanner.vue';
import myPhone from '../components/home/myPhone.vue';
import myFine from '../components/home/myFine.vue';
import myBox from '../components/home/myBox.vue';
import myProduct from '../components/home/myProduct.vue';
import myCopyright from '../components/home/myCopyright.vue'
export default {
    components:{
        myHeader,
        myBanner,
        myPhone,
        myFine,
        myBox,
        myProduct,
        myCopyright
    },
    data(){
        return {
            headerArr:{
                scanUrl:require('../assets/images/tools/ic_cate_scan.png'),
                searchUrl:require('../assets/images/tools/ic_group_search_small.png'),
                msgUrl:require('../assets/images/tools/icon_not_message.png'),
                inputHolder:'酒鬼酒特卖：20000套酒具免费享',
                personUrl:require('../assets/images/tools/ic_tab_profile_female_normal.png'),
                setUrl:require('../assets/images/tools/setting_icon.png'),
            },
            bannerData:[
                {id:1,url:require('../assets/images/banner/banner1.jpg')},
                {id:2,url:require('../assets/images/banner/banner2.jpg')},
                {id:3,url:require('../assets/images/banner/banner3.jpg')},
                {id:4,url:require('../assets/images/banner/banner4.jpg')},
                {id:5,url:require('../assets/images/banner/banner5.jpg')},
                {id:6,url:require('../assets/images/banner/banner6.jpg')},
                {id:7,url:require('../assets/images/banner/banner7.jpg')},
                {id:8,url:require('../assets/images/banner/banner8.jpg')},
                {id:9,url:require('../assets/images/banner/banner9.jpg')},
            ],
            gridData:[
                {id:1,url:require('../assets/images/home/grid/q1.jpg')},
                {id:2,url:require('../assets/images/home/grid/q2.jpg')},
                {id:3,url:require('../assets/images/home/grid/q3.jpg')},
                {id:4,url:require('../assets/images/home/grid/q4.jpg')},
                {id:5,url:require('../assets/images/home/grid/q5.jpg')},
                {id:6,url:require('../assets/images/home/grid/q6.jpg')},
                {id:7,url:require('../assets/images/home/grid/q7.jpg')},
                {id:8,url:require('../assets/images/home/grid/q8.jpg')},
                {id:9,url:require('../assets/images/home/grid/q9.jpg')},
                {id:10,url:require('../assets/images/home/grid/q10.jpg')},
            ],
            newsUrl:require('../assets/images/news.jpg'),
            newsData:[
                {id:1,text:'APP首单满100送100活动规则 点击查看'},
                {id:2,text:'超级秒杀日-收官之战 全程秒杀再包邮'},
                {id:3,text:'12.12白酒会场，中奖看公告'},
            ],
            spikeData:[
                {id:1,url:require('../assets/images/home/spike/h1.jpg'),title:'澳大利亚 杰卡斯经典系列梅',text:'79.00'},
                {id:2,url:require('../assets/images/home/spike/h2.jpg'),title:'52度习酒习水大曲500ml',text:'19.00'},
                {id:3,url:require('../assets/images/home/spike/h3.jpg'),title:'【厂家直营】52度洋河蓝色',text:'588.00'},
                {id:4,url:require('../assets/images/home/spike/h4.jpg'),title:'澳大利亚 杰卡斯经典系列梅',text:'79.00'},
                {id:5,url:require('../assets/images/home/spike/h5.jpg'),title:'52度习酒习水大曲500ml',text:'19.00'},
                {id:6,url:require('../assets/images/home/spike/h6.jpg'),title:'【厂家直营】52度洋河蓝色',text:'588.00'},
                {id:7,url:require('../assets/images/home/spike/h7.jpg'),title:'澳大利亚 杰卡斯经典系列梅',text:'79.00'},
                {id:8,url:require('../assets/images/home/spike/h8.jpg'),title:'52度习酒习水大曲500ml',text:'19.00'},
                {id:9,url:require('../assets/images/home/spike/h9.jpg'),title:'【厂家直营】52度洋河蓝色',text:'588.00'},
                {id:10,url:require('../assets/images/home/spike/h10.jpg'),title:'澳大利亚 杰卡斯经典系列梅',text:'79.00'},
                {id:11,url:require('../assets/images/home/spike/h11.jpg'),title:'52度习酒习水大曲500ml',text:'19.00'},
                {id:12,url:require('../assets/images/home/spike/h12.jpg'),title:'【厂家直营】52度洋河蓝色',text:'588.00'},
                {id:13,url:require('../assets/images/home/spike/h13.jpg'),title:'澳大利亚 杰卡斯经典系列梅',text:'79.00'},
            ],
            swiperData1:[
                {id:1,url:require('../assets/images/home/banner1/b1.jpg')},
                {id:2,url:require('../assets/images/home/banner1/b2.jpg')},
                {id:3,url:require('../assets/images/home/banner1/b3.jpg')},
                {id:4,url:require('../assets/images/home/banner1/b4.jpg')},
                {id:5,url:require('../assets/images/home/banner1/b5.jpg')},
            ],
            phoneArr:{
                phoneLeft:require('../assets/images/home/phone/a1.jpg'),
                phoneTop:require('../assets/images/home/phone/a2.jpg'),
                phoneBottom:require('../assets/images/home/phone/a3.jpg'),
            },
            swiperData2:[
                {id:1,url:require('../assets/images/home/banner2/c1.jpg')},
                {id:2,url:require('../assets/images/home/banner2/c2.jpg')},
                {id:3,url:require('../assets/images/home/banner2/c3.jpg')},
                {id:4,url:require('../assets/images/home/banner2/c4.jpg')},
                {id:5,url:require('../assets/images/home/banner2/c5.jpg')},
                {id:6,url:require('../assets/images/home/banner2/c6.jpg')},
                {id:7,url:require('../assets/images/home/banner2/c7.jpg')},
            ],
            swiperData3:[
                {id:1,url:require('../assets/images/home/banner3/d1.jpg')},
                {id:2,url:require('../assets/images/home/banner3/d2.jpg')},
            ],
            fineArr:{
                fine1:require('../assets/images/home/fine/mm1.jpg'),
                fine2:require('../assets/images/home/fine/mm2.jpg'),
                fine3:require('../assets/images/home/fine/mm3.jpg'),
                fine4:require('../assets/images/home/fine/mm4.jpg'),
                fine5:require('../assets/images/home/fine/mm5.jpg'),
                fine6:require('../assets/images/home/fine/mm6.jpg'),
            },
            boxData:[],
            productData:[]
        }
    },
    mounted() {
        this.hanldeBox();
        this.handleProduct();
        $(window).scroll(function () {
            if ($(this).scrollTop() > 70) {
                $("#headerBox").addClass("head");
            } else {
                $("#headerBox").removeClass("head");
            }
        });
    },
    methods: {
        hanldeBox(){
            getBox({}).then((res)=>{
                this.boxData = res;
            });
        },
        handleProduct(){
            getProduction({}).then((res)=>{
                this.productData = res;
            });
        }
    },
}
</script>

<style scoped>
.my_home{
    width: 100%;
}

/* 宫格 */
.home_grid{
    width:100%;
}
.grid_list{
    width:20%;
    float: left;
}
.grid_list img{
    width:100%;
}

/* 新闻 */
.home_news{
    padding: 8px 10px;
    background-color: #fff;
}
.news_box{
    height: 20px;
    position: relative;
}
.news_box i{
    width: 83px;
    height: 16px;
    display:inline-block;
    padding: 2px 10px 2px 0px;
    position: absolute;
    left:0;
}
.news_box i img{
    width: 100%;
}
.news_box .news_banner{
    margin-left: 110px;
    width:auto;
    height: 20px;
    line-height: 20px;
    font-size: 1.2rem;
    overflow: hidden;
}
.news_box .news_banner a{
    color: #252525;
}

/* 掌上秒拍 */
.home_spike{
    width: 100%;
    height: auto;
    margin-top: 10px;
    background-color: #fff;
}
.my_spike {
    padding: 8px 10px;
    height: 25px;
    line-height: 25px;
    position: relative;
    border-bottom: 1px solid #ededed;
}
.my_spike h3 {
    position: absolute;
    left: 10px;
    font-size: 1.4rem;
}
.my_spike .count_down {
    position: absolute;
    left: 70px;
    line-height: 23px;
    padding: 2px 0;
}
.my_spike .count_down span {
    font-size: 1.2rem;
}
.my_spike .count_down i {
    font-size: 1.2rem;
}
.my_spike .count_down em {
    font-size: 1.2rem;
}
.my_spike a {
    position: absolute;
    right: 10px;
    font-size: 1.2rem;
    height: 25px;
    line-height: 25px;
}
.my_spike a span {
    vertical-align: middle;
    margin-right: 5px;
}
.my_spike a i {
    width: 14px;
    height: 14px;
    display: inline-block;
    vertical-align: middle;
    background: url("../assets/images/jx-sprite.png") no-repeat -135px -3px;
}

.spike_banner{
    padding: 5px 10px;
}
.spike_banner img{
    width: 100%;
}
.spike_banner p{
    font-size: 1.2rem;
    color: #666;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.spike_banner span{
    color: red;
    font-weight:bold;
    text-align: left;
    display:block;
}

/* 爆款推荐 */
.home_product{
    width: 100%;
    height: 100%;
    margin-top: 10px;
}
.product_top{
    width: 100%;
    height: 30px;
    line-height:30px;
    background-color: #fff;
    text-align: center;
    border-bottom: 1px solid #f1f1f1;
}
.product_top a{
    font-size: 1.4rem;
}




</style>
