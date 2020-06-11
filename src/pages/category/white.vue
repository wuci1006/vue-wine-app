<template>
  <div class="whiteWrap">
      <div class="whiteCon">
          <div class="ban1">
              <Banner :auto="0" :swiperId="101" dire="horizontal" >
                  <div class="swiper-slide" slot="slide">
                    <img src="../../assets/images/banner1.jpg" alt="">
                  </div>
                  <div class="swiper-slide" slot="slide">
                    <img src="../../assets/images/banner2.jpg" alt="">
                  </div>
              </Banner>
          </div>
          <TitleBox text1="热门品牌" text2="全部品牌  >" col="orange"></TitleBox>
          <Third>
               <ul slot="thd">
                 <li><a href=""><img src="../../assets/cate/img2/2_03.gif" alt=""><p>茅台</p></a></li>
                 <li><a href=""><img src="../../assets/cate/img2/2_05.gif" alt=""><p>五粮液</p></a></li>
                 <li><a href=""><img src="../../assets/cate/img2/2_07.gif" alt=""><p>泸州老窖</p></a></li>
                 <li><a href=""><img src="../../assets/cate/img2/2_12.gif" alt=""><p>牛栏山</p></a></li>
                 <li><a href=""><img src="../../assets/cate/img2/2_13.gif" alt=""><p>汾酒</p></a></li>
                 <li><a href=""><img src="../../assets/cate/img2/2_14.gif" alt=""><p>剑南春</p></a></li>
                 <li><a href=""><img src="../../assets/cate/img2/2_18.gif" alt=""><p>洋河</p></a></li>
                 <li><a href=""><img src="../../assets/cate/img2/2_19.gif" alt=""><p>郎酒</p></a></li>
                 <li><a href=""><img src="../../assets/cate/img2/2_20.gif" alt=""><p>水井坊</p></a></li>
                 <li><a href=""><img src="../../assets/cate/img2/2_24.gif" alt=""><p>酒鬼酒</p></a></li>
                 <li><a href=""><img src="../../assets/cate/img2/2_25.gif" alt=""><p>古井贡</p></a></li>
                 <li><a href=""><img src="../../assets/cate/img2/2_26.gif" alt=""><p>全兴</p></a></li>
                 <div class="clear"></div>
               </ul>
             </Third>
          <TitleBox text1="香型" col="plum"></TitleBox>
          <Third>
              <ul slot="thd">
                <li><a href=""><p>酱香型</p></a></li>
                <li><a href=""><p>浓香型</p></a></li>
                <li><a href=""><p>清香型</p></a></li>
                <li><a href=""><p>馥郁香型</p></a></li>
                <li><a href=""><p>凤香型</p></a></li>
                <li><a href=""><p>熏香型</p></a></li>
                <li><a href=""><p>老白干香型</p></a></li>
                <div class="clear"></div>
              </ul>
            </Third>
          <TitleBox text1="产地" col="deepskyblue"></TitleBox>
          <Third>
              <ul slot="thd">
                <li><a href=""><p>贵州</p></a></li>
                <li><a href=""><p>四川</p></a></li>
                <li><a href=""><p>山西</p></a></li>
                <li><a href=""><p>河南</p></a></li>
                <li><a href=""><p>山东</p></a></li>
                <li><a href=""><p>安徽</p></a></li>
                <li><a href=""><p>河北</p></a></li>
                <li><a href=""><p>新疆</p></a></li>
                <li><a href=""><p>湖南</p></a></li>
                <div class="clear"></div>
              </ul>
            </Third>
          <TitleBox text1="价位" col="yellow"></TitleBox>
          <Third>
            <ul slot="thd">
              <li><a href=""><p>1-49元</p></a></li>
              <li><a href=""><p>50-99元</p></a></li>
              <li><a href=""><p>100-199元</p></a></li>
              <li><a href=""><p>200-299元</p></a></li>
              <li><a href=""><p>300-499元</p></a></li>
              <li><a href=""><p>500-999元</p></a></li>
              <li><a href=""><p>1000-1999元</p></a></li>
              <li><a href=""><p>2000元以上</p></a></li>
              <div class="clear"></div>
            </ul>
          </Third>
      </div>
  </div>
</template>

<script>
  import Banner from '../../components/banner.vue'
  import TitleBox from '../../components/titlebox.vue'
  import Third from '../../components/third.vue'
    export default {
        name: "white",
        components:{
          Banner,
          TitleBox,
          Third
        }
    }
</script>

<style scoped>
  ul,li{list-style: none;}
  .clear{clear:both;}
  .whiteWrap{width: 80%;height: auto;position: absolute;top:48px;left:20%;margin-bottom: 64px;}
  .whiteCon{padding: 10px;height: 100%;}
  .ban1 .swiper-slide img{width:100%;height: 100px;display: inline-block;}
</style>
