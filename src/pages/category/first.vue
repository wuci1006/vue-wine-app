<template>
  <div class="firstWrap">
    <div class="firstCon">
      <Third>
        <ul slot="thd">
          <li><a href=""><img src="../../assets/images/6_03.png" alt=""><p>整箱囤货</p></a></li>
          <li><a href=""><img src="../../assets/images/6_05.png" alt=""><p>实惠大坛</p></a></li>
          <li><a href=""><img src="../../assets/images/6_07.png" alt=""><p>热卖好酒</p></a></li>
          <li><a href=""><img src="../../assets/images/6_12.png" alt=""><p>礼尚往来</p></a></li>
          <li><a href=""><img src="../../assets/images/6_13.png" alt=""><p>年份老酒</p></a></li>
          <li><a href=""><img src="../../assets/images/6_14.png" alt=""><p>名优白酒</p></a></li>
          <li><a href=""><img src="../../assets/images/6_18.png" alt=""><p>海外直采</p></a></li>
          <li><a href=""><img src="../../assets/images/6_19.png" alt=""><p>必买清单</p></a></li>
          <li><a href=""><img src="../../assets/images/6_20.png" alt=""><p>猎奇专场</p></a></li>
          <li><a href=""><img src="../../assets/images/6_24.png" alt=""><p>喜宴用酒</p></a></li>
          <li><a href=""><img src="../../assets/images/6_25.png" alt=""><p>新品推荐</p></a></li>
          <li><a href=""><img src="../../assets/images/6_26.png" alt=""><p>红酒特惠</p></a></li>
          <li><a href=""><img src="../../assets/images/6_30.png" alt=""><p>名酒清仓</p></a></li>
          <li><a href=""><img src="../../assets/images/6_31.png" alt=""><p>名庄特卖</p></a></li>
          <li><a href=""><img src="../../assets/images/6_32.png" alt=""><p>每周低价</p></a></li>
          <li><a href=""><img src="../../assets/images/6_03.png" alt=""><p>整箱囤货</p></a></li>
          <li><a href=""><img src="../../assets/images/6_05.png" alt=""><p>实惠大坛</p></a></li>
          <li><a href=""><img src="../../assets/images/6_07.png" alt=""><p>热卖好酒</p></a></li>
          <li><a href=""><img src="../../assets/images/6_12.png" alt=""><p>礼尚往来</p></a></li>
          <li><a href=""><img src="../../assets/images/6_13.png" alt=""><p>年份老酒</p></a></li>
          <div class="clear"></div>
        </ul>
      </Third>
    </div>
  </div>

</template>

<script>
  import Third from '../../components/third.vue'
    export default {
        name: "first",
        components:{
          Third
        }
    }
</script>

<style scoped>
  ul,li{list-style: none;}
  .firstWrap{height: auto;width: 80%;position: absolute;top:48px;left:20%;
    margin-bottom: 64px;}
  .firstCon{width: 100%;height:100%;}
  .firstCon ul li a img{width: 70%;margin: 0 auto;}

</style>
