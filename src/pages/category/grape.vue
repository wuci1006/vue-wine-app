<template>
  <div class="grapeWrap">
    <div class="grapeCon">
      <div class="ban2">
        <Banner :auto="0" :swiperId="102" dire="horizontal" >
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
          <li><a href=""><img src="../../assets/cate/img1/1_03.gif" alt=""><p>拉菲</p></a></li>
          <li><a href=""><img src="../../assets/cate/img1/1_05.gif" alt=""><p>奔富</p></a></li>
          <li><a href=""><img src="../../assets/cate/img1/1_07.gif" alt=""><p>长城</p></a></li>
          <li><a href=""><img src="../../assets/cate/img1/1_12.gif" alt=""><p>黄尾袋鼠</p></a></li>
          <li><a href=""><img src="../../assets/cate/img1/1_13.gif" alt=""><p>张裕</p></a></li>
          <li><a href=""><img src="../../assets/cate/img1/1_14.gif" alt=""><p>红魔鬼</p></a></li>
          <li><a href=""><img src="../../assets/cate/img1/1_18.gif" alt=""><p>丁戈树</p></a></li>
          <li><a href=""><img src="../../assets/cate/img1/1_19.gif" alt=""><p>茉莉花</p></a></li>
          <li><a href=""><img src="../../assets/cate/img1/1_20.gif" alt=""><p>克拉克</p></a></li>
          <div class="clear"></div>
        </ul>
      </Third>
      <TitleBox text1="类型" col="plum"></TitleBox>
      <Third>
        <ul slot="thd">
          <li><a href=""><p>红葡萄酒</p></a></li>
          <li><a href=""><p>白葡萄酒</p></a></li>
          <li><a href=""><p>起泡酒</p></a></li>
          <li><a href=""><p>桃红葡萄酒</p></a></li>
          <div class="clear"></div>
        </ul>
      </Third>
      <TitleBox text1="品种" col="deepskyblue"></TitleBox>
      <Third>
        <ul slot="thd">
          <li><a href=""><p>赤霞珠</p></a></li>
          <li><a href=""><p>梅洛</p></a></li>
          <li><a href=""><p>西拉</p></a></li>
          <li><a href=""><p>长相思</p></a></li>
          <li><a href=""><p>歌海娜</p></a></li>
          <li><a href=""><p>添帕尼优</p></a></li>
          <div class="clear"></div>
        </ul>
      </Third>
      <TitleBox text1="国家" col="green"></TitleBox>
      <Third>
        <ul slot="thd">
          <li><a href=""><img src="../../assets/cate/img1/1_24.gif" alt=""><p>法国</p></a></li>
          <li><a href=""><img src="../../assets/cate/img1/1_25.gif" alt=""><p>西班牙</p></a></li>
          <li><a href=""><img src="../../assets/cate/img1/1_26.gif" alt=""><p>澳大利亚</p></a></li>
          <li><a href=""><img src="../../assets/cate/img1/1_30.gif" alt=""><p>中国</p></a></li>
          <li><a href=""><img src="../../assets/cate/img1/1_31.gif" alt=""><p>智利</p></a></li>
          <li><a href=""><img src="../../assets/cate/img1/1_32.gif" alt=""><p>意大利</p></a></li>
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
          <li><a href=""><p>500-799元</p></a></li>
          <li><a href=""><p>800-999元</p></a></li>
          <li><a href=""><p>1000元以上</p></a></li>
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
    name: "grape",
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
  .grapeWrap{width: 80%;height: auto;position: absolute;top:48px;left:20%;margin-bottom: 64px;}
  .grapeCon{padding: 10px;height: 100%;}
  .ban2 .swiper-slide img{width:100%;height: 100px;display: inline-block;}

</style>
