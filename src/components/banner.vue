<template>
    <div class="bannerWrap">
        <div class="swiper-container" :id="swiperId">
            <div class="swiper-wrapper">
                <!---slot代表的是轮播的内容-->
                <slot name="slide"></slot>
            </div>
            <!-- 分页器 -->
            <div class="swiper-pagination"></div>
            <!--<slot name="button"></slot>-->
        </div>
    </div>
</template>

<script>
  import '../assets/js/swiper.js'

    export default {
        name: "banner",
        props:{
            swiperId:{
              type:Number,
              default:0
            },
            auto:{
                type:Number,
                default:2000
            },
            dire:{
                type:String,
                default:"horizontal"
            },
            pag:{
              type:String,
              default:""
            },
            perview:{
                type:Number,
                default:1
            },
            between:{
                type:Number,
                default:0
            }
        },
        mounted:function () {
            var This = this;
            var mySwiper = new Swiper (
                '#'+This.swiperId, {
                  loop: true,
                  autoplay:This.auto,//调用时传过来的值
                  direction:This.dire,
                  autoplayDisableOnInteraction:false,
                  slidesPerView: This.perview,
                  spaceBetween: This.between,
                  pagination: '.swiper-pagination'
                })
        }
    }
</script>

<style scoped>
  @import "../assets/css/swiper.min.css";

  .swiper-container {width: 100%;}
  .swiper-container img{width: 100%;}


</style>
