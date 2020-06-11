<template>
  <div class="foreignWrap">
    <div class="foreignCon">
      <div class="ban3">
        <Banner :auto="0" :swiperId="103" dire="horizontal" >
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
          <li><a href=""><img src="../../assets/cate/img3/3_03.gif" alt=""><p>轩尼诗</p></a></li>
          <li><a href=""><img src="../../assets/cate/img3/3_05.gif" alt=""><p>马爹利</p></a></li>
          <li><a href=""><img src="../../assets/cate/img3/3_07.gif" alt=""><p>芝华士</p></a></li>
          <li><a href=""><img src="../../assets/cate/img3/3_12.gif" alt=""><p>杰克丹尼</p></a></li>
          <li><a href=""><img src="../../assets/cate/img3/3_13.gif" alt=""><p>人头马</p></a></li>
          <li><a href=""><img src="../../assets/cate/img3/3_14.gif" alt=""><p>百加得</p></a></li>
          <li><a href=""><img src="../../assets/cate/img3/3_18.gif" alt=""><p>百龄坛</p></a></li>
          <li><a href=""><img src="../../assets/cate/img3/3_19.gif" alt=""><p>真露</p></a></li>
          <li><a href=""><img src="../../assets/cate/img3/3_20.gif" alt=""><p>贺茂鹤</p></a></li>
          <div class="clear"></div>
        </ul>
      </Third>
      <TitleBox text1="类型" col="plum"></TitleBox>
      <Third>
        <ul slot="thd">
          <li><a href=""><p>威士忌</p></a></li>
          <li><a href=""><p>白兰地</p></a></li>
          <li><a href=""><p>伏特加</p></a></li>
          <li><a href=""><p>朗姆酒</p></a></li>
          <li><a href=""><p>预调酒</p></a></li>
          <li><a href=""><p>力娇酒</p></a></li>
          <div class="clear"></div>
        </ul>
      </Third>
      <TitleBox text1="价位" col="yellow"></TitleBox>
      <Third>
        <ul slot="thd">
          <li><a href=""><p>1-99元</p></a></li>
          <li><a href=""><p>100-299元</p></a></li>
          <li><a href=""><p>300-599元</p></a></li>
          <li><a href=""><p>600-999元</p></a></li>
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
    name: "foreign",
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
  .foreignWrap{width: 80%;height: auto;position: absolute;top:48px;left:20%;margin-bottom: 64px;}
  .foreignCon{padding: 10px;height: 100%;}
  .ban3 .swiper-slide img{width:100%;height: 100px;display: inline-block;}

</style>
