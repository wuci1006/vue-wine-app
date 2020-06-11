<template>
    <div class="homeWrap">
        <MyHeader :class="{bc1:true}" id="extraTop">
            <img src="../assets/tabimg/ic_cate_scan.png" alt="" slot="left" class="leftImg">
            <div slot="center" class="searchWrap">
                <img src="../assets/images/ic_group_search_small.png" alt="" class="searchImg">
                <input type="text" placeholder="酒鬼酒特卖：20000套酒具免费享" class="searchInput">
            </div>
            <img src="../assets/tabimg/icon_not_message.png" alt="" slot="right" class="rightImg">
        </MyHeader>
        <div class="banner1">
            <Banner :auto="2000" :swiperId="11" dire="horizontal">
                <div class="swiper-slide" slot="slide">
                  <img src="../assets/images/banner1.jpg" alt="">
                </div>
                <div class="swiper-slide" slot="slide">
                  <img src="../assets/images/banner2.jpg" alt="">
                </div>
                <div class="swiper-slide" slot="slide">
                  <img src="../assets/images/banner3.jpg" alt="">
                </div>
                <div class="swiper-slide" slot="slide">
                  <img src="../assets/images/banner4.jpg" alt="">
                </div>
                <div class="swiper-slide" slot="slide">
                  <img src="../assets/images/banner5.jpg" alt="">
                </div>
                <div class="swiper-slide" slot="slide">
                  <img src="../assets/images/banner6.jpg" alt="">
                </div>
                <div class="swiper-slide" slot="slide">
                  <img src="../assets/images/banner7.jpg" alt="">
                </div>
                <div class="swiper-slide" slot="slide">
                  <img src="../assets/images/banner8.jpg" alt="">
                </div>
                <div class="swiper-slide" slot="slide">
                  <img src="../assets/images/banner9.jpg" alt="">
                </div>
            </Banner>
        </div>
        <NavBar>
            <div slot="navbar">
                <a href="" slot="navbar" class="wid1"><img src="../assets/images/q1.jpg" alt=""></a>
                <a href="" slot="navbar" class="wid1"><img src="../assets/images/q2.jpg" alt=""></a>
                <a href="" slot="navbar" class="wid1"><img src="../assets/images/q3.jpg" alt=""></a>
                <a href="" slot="navbar" class="wid1"><img src="../assets/images/q4.jpg" alt=""></a>
                <a href="" slot="navbar" class="wid1"><img src="../assets/images/q5.jpg" alt=""></a>
                <a href="" slot="navbar" class="wid1"><img src="../assets/images/q6.jpg" alt=""></a>
                <a href="" slot="navbar" class="wid1"><img src="../assets/images/q7.jpg" alt=""></a>
                <a href="" slot="navbar" class="wid1"><img src="../assets/images/q8.jpg" alt=""></a>
                <a href="" slot="navbar" class="wid1"><img src="../assets/images/q9.jpg" alt=""></a>
                <a href="" slot="navbar" class="wid1"><img src="../assets/images/q10.jpg" alt=""></a>
                <div class="clear"></div>
            </div>
        </NavBar>
        <pubBox></pubBox>
        <div class="newsBanner">
            <div class="newsBox">
                <i><img src="../assets/images/news1.jpg" alt=""></i>
                <div class="banner2">
                    <Banner :auto="1000" :swiperId="22" dire="vertical">
                        <div class="swiper-slide" slot="slide">
                            <a href=""> APP首单满100送100活动规则 点击查看！</a>
                        </div>
                        <div class="swiper-slide" slot="slide">
                            <a href=""> 超级秒杀日-收官之战 全程秒杀再包邮</a>
                        </div>
                        <div class="swiper-slide" slot="slide">
                            <a href=""> 12.12白酒会场，中奖看公告</a>
                        </div>
                    </Banner>
                </div>
            </div>
        </div>
        <div class="spikeBox">
            <spikeTit></spikeTit>
            <div class="banner3">
                <Banner :auto="0" :swiperId="33" :perview="4" :between="10">
                    <div class="swiper-slide" slot="slide">
                        <img src="../assets/images/h1.jpg" alt="">
                        <p>澳大利亚 杰卡斯经典系列梅</p>
                        <span>￥79.00</span>
                    </div>
                    <div class="swiper-slide" slot="slide">
                        <img src="../assets/images/h2.jpg" alt="">
                        <p>52度习酒习水大曲500ml</p>
                        <span>￥19.00</span>
                    </div>
                    <div class="swiper-slide" slot="slide">
                        <img src="../assets/images/h3.jpg" alt="">
                        <p>【厂家直营】52度洋河蓝色</p>
                        <span>￥588.00</span>
                    </div>
                    <div class="swiper-slide" slot="slide">
                        <img src="../assets/images/h4.jpg" alt="">
                        <p>澳大利亚 杰卡斯经典系列梅</p>
                        <span>￥79.00</span>
                    </div>
                    <div class="swiper-slide" slot="slide">
                        <img src="../assets/images/h5.jpg" alt="">
                        <p>澳大利亚 杰卡斯经典系列梅</p>
                        <span>￥79.00</span>
                    </div>
                    <div class="swiper-slide" slot="slide">
                        <img src="../assets/images/h6.jpg" alt="">
                        <p>52度习酒习水大曲500ml</p>
                        <span>￥19.00</span>
                    </div>
                    <div class="swiper-slide" slot="slide">
                        <img src="../assets/images/h7.jpg" alt="">
                        <p>【厂家直营】52度洋河蓝色</p>
                        <span>￥588.00</span>
                    </div>
                    <div class="swiper-slide" slot="slide">
                        <img src="../assets/images/h8.jpg" alt="">
                        <p>澳大利亚 杰卡斯经典系列梅</p>
                        <span>￥79.00</span>
                    </div>
                    <div class="swiper-slide" slot="slide">
                        <img src="../assets/images/h9.jpg" alt="">
                        <p>澳大利亚 杰卡斯经典系列梅</p>
                        <span>￥79.00</span>
                    </div>
                    <div class="swiper-slide" slot="slide">
                        <img src="../assets/images/h10.jpg" alt="">
                        <p>52度习酒习水大曲500ml</p>
                        <span>￥19.00</span>
                    </div>
                    <div class="swiper-slide" slot="slide">
                        <img src="../assets/images/h11.jpg" alt="">
                        <p>【厂家直营】52度洋河蓝色</p>
                        <span>￥588.00</span>
                    </div>
                    <div class="swiper-slide" slot="slide">
                        <img src="../assets/images/h12.jpg" alt="">
                        <p>澳大利亚 杰卡斯经典系列梅</p>
                        <span>￥79.00</span>
                    </div>
                    <div class="swiper-slide" slot="slide">
                        <img src="../assets/images/h13.jpg" alt="">
                        <p>澳大利亚 杰卡斯经典系列梅</p>
                        <span>￥79.00</span>
                    </div>
              </Banner>
            </div>
        </div>
        <div class="banner4">
            <Banner :auto="3000" :swiperId="44" dire="horizontal">
                <div class="swiper-slide" slot="slide">
                    <img src="../assets/images/b1.jpg" alt="">
                </div>
                <div class="swiper-slide" slot="slide">
                    <img src="../assets/images/b2.jpg" alt="">
                </div>
                <div class="swiper-slide" slot="slide">
                    <img src="../assets/images/b3.jpg" alt="">
                </div>
                <div class="swiper-slide" slot="slide">
                    <img src="../assets/images/b4.jpg" alt="">
                </div>
                <div class="swiper-slide" slot="slide">
                    <img src="../assets/images/b5.jpg" alt="">
                </div>
            </Banner>
        </div>
        <phoneBox></phoneBox>
        <div class="banner5">
            <Banner :auto="0" :swiperId="55" dire="horizontal" :perview="3" :between="0">
                <div class="swiper-slide" slot="slide">
                    <img src="../assets/images/c1.jpg" alt="">
                </div>
                <div class="swiper-slide" slot="slide">
                    <img src="../assets/images/c2.jpg" alt="">
                </div>
                <div class="swiper-slide" slot="slide">
                    <img src="../assets/images/c3.jpg" alt="">
                </div>
                <div class="swiper-slide" slot="slide">
                    <img src="../assets/images/c4.jpg" alt="">
                </div>
                <div class="swiper-slide" slot="slide">
                    <img src="../assets/images/c5.jpg" alt="">
                </div>
                <div class="swiper-slide" slot="slide">
                    <img src="../assets/images/c6.jpg" alt="">
                </div>
                <div class="swiper-slide" slot="slide">
                    <img src="../assets/images/c7.jpg" alt="">
                </div>
          </Banner>
        </div>
        <div class="banner6">
            <Banner :auto="3000" :swiperId="66" dire="horizontal" >
                <div class="swiper-slide" slot="slide">
                    <img src="../assets/images/d1.jpg" alt="">
                </div>
                <div class="swiper-slide" slot="slide">
                    <img src="../assets/images/d2.jpg" alt="">
                </div>
            </Banner>
        </div>
        <HandPick></HandPick>
        <Several v-for="item in china"
                 :title="item.title"
                 :sub1="item.sub1"
                 :sub2="item.sub2"
                 :sub3="item.sub3"
                 :sub4="item.sub4" :key="item.key">
        <div slot="ban">
            <Banner :auto="0" :swiperId="item.id" dire="horizontal" :perview="5" :between="0">
                <div class="swiper-slide" slot="slide" v-for="i in item.img">
                    <img :src="i">
                </div>
            </Banner>
        </div>
        </Several>
        <div class="theme">
            <div class="themeTop"><a href=""><img src="../assets/images/v.jpg" alt=""></a></div>
            <NavBar>
                <div slot="navbar">
                    <a href="" class="wid2"><img src="../assets/images/v1.jpg" alt=""></a>
                    <a href="" class="wid2"><img src="../assets/images/v2.jpg" alt=""></a>
                    <a href="" class="wid2"><img src="../assets/images/v3.jpg" alt=""></a>
                    <a href="" class="wid2"><img src="../assets/images/v4.jpg" alt=""></a>
                    <a href="" class="wid2"><img src="../assets/images/v5.jpg" alt=""></a>
                    <a href="" class="wid2"><img src="../assets/images/v6.jpg" alt=""></a>
                    <a href="" class="wid2"><img src="../assets/images/v7.jpg" alt=""></a>
                    <a href="" class="wid2"><img src="../assets/images/v8.jpg" alt=""></a>
                    <div class="clear"></div>
                </div>
            </NavBar>
        </div>
        <div class="product">
            <div class="productTop"><a href="">爆款推荐</a></div>

            <div class="productCon">
                <Product v-for="item in production"
                         :con="item.con"
                         :img="item.img"
                         :red="item.red"
                         :black="item.black"
                         :key="item.key">
                </Product>
            </div>

        </div>
        <copyRight></copyRight>
        <div class="toTop"><i></i></div>
    </div>
</template>

<script>
  import $ from 'jquery'
  import MyHeader from '../components/myheader.vue'
  import Banner from '../components/banner.vue'
  import Several from '../components/several.vue'
  import {getChina,getProduction} from '../api/api.js'
  import NavBar from '../components/navbar.vue'
  import Product from '../components/product.vue'
  import pubBox from '../components/pubbox.vue'
  import phoneBox from '../components/phonebox.vue'
  import HandPick from '../components/handpick.vue'
  import spikeTit from '../components/spiketit.vue'
  import copyRight from '../components/copyright.vue'

    export default {
        name: "home",
        components:{
            MyHeader,
            Banner,
            Several,
            NavBar,
            Product,
            pubBox,
            phoneBox,
            HandPick,
            spikeTit,
            copyRight
        },
        data:function(){
            return {
              china:[],
              production:[]
            }
        },
        mounted:function () {
            var arr = {};
            var Proarr = {};
            var This = this;
            getChina(arr).then(function(res){
              This.china = res;
              console.log(This.china);
            });
            getProduction(Proarr).then(function(res){
              This.production = res;
              console.log(This.production);
            });
            $(window).scroll(function () {
                if ($(this).scrollTop() > 70) {
                    $("#extraTop").addClass("head");
                    $(".toTop i").show();
                }
                else {
                  $("#extraTop").removeClass("head");
                  $(".toTop i").hide();
                }
            });
            $(".toTop").click(function(){
              $("html,body").animate({scrollTop:0},300);
                return false;
            })

        }
    }
</script>

<style scoped>
  a{text-decoration: none;color:#333;display: block;}
  img{display: block;}
  .clear{clear:both;}
  .homeWrap{width: 100%;background-color: #f6f6f6;}

  .newsBanner{padding: 8px 10px;background-color: #fff;}
  .newsBanner .newsBox{height: 20px;position: relative;}
  .newsBanner .newsBox i{width: 83px;height: 16px;display:inline-block;
    padding: 2px 10px 2px 0px;position: absolute;left:0;}
  .newsBanner .newsBox i img{width: 100%;}
  .newsBanner .newsBox .banner2{margin-left: 110px;width:auto;height: 20px;
    line-height: 20px;font-size: 12px;overflow: hidden;}
  .newsBanner .newsBox .banner2 a{color: #252525;}

.spikeBox{width: 100%;height: auto;margin-top: 10px;background-color: #fff;}
.banner3{padding: 5px 10px;}
.banner3 img{width: 100%;}
.banner3 p{font-size: 12px;color: #666;}
.banner3 span{color: red;font-weight:bold;text-align: left;display:block;}

  .theme{width: 100%;height: 100%;font-size: 0;margin-top: 10px;}
  .theme .themeTop{width: 100%;height: 100%;border-bottom: 1px solid #f1f1f1;}
  .theme .themeTop a{width: 100%;display: block;}
  .theme .themeTop a img{width: 100%;display: block;}

.product{width: 100%;height: 100%;margin-top: 10px;}
.productTop{width: 100%;height: 30px;line-height:30px;background-color: #fff;
  text-align: center;border-bottom: 1px solid #f1f1f1;}
.productTop a{font-size: 14px;}

  .productCon{width: 100%;column-count: 2;column-gap: 8px;}

  .toTop{width: 51px;height: 51px;position: fixed;bottom: 70px;
    right: 12px;z-index: 100000;}
  .toTop i{display: block;width: 100%;height: 100%;
    background: url("../assets/images/jx-sprite.png") no-repeat -93px -2px;
    background-size: 150px 55px;}

</style>
