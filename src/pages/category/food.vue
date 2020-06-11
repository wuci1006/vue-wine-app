<template>
  <div class="foodWrap">
    <div class="foodCon">
      <Third>
        <ul slot="thd">
          <li><a href=""><img src="../../assets/cate/img6/6_03.gif" alt=""><p>润之源泉</p></a></li>
          <li><a href=""><img src="../../assets/cate/img6/6_05.gif" alt=""><p>休闲食品</p></a></li>
          <li><a href=""><img src="../../assets/cate/img6/6_07.gif" alt=""><p>进口</p></a></li>
          <li><a href=""><img src="../../assets/cate/img6/6_12.gif" alt=""><p>茶饮冲调</p></a></li>
          <li><a href=""><img src="../../assets/cate/img6/6_13.gif" alt=""><p>营养健康</p></a></li>
          <li><a href=""><img src="../../assets/cate/img6/6_14.gif" alt=""><p>电子烟</p></a></li>
          <li><a href=""><img src="../../assets/cate/img6/6_18.gif" alt=""><p>解酒</p></a></li>
          <div class="clear"></div>
        </ul>
      </Third>
    </div>
  </div>

</template>

<script>
  import Third from '../../components/third.vue'
    export default {
        name: "food",
        components:{
          Third
        }
    }
</script>

<style scoped>
  ul,li{list-style: none;}
  .clear{clear:both;}
  .foodWrap{width: 80%;height: auto;position: absolute;top:48px;left:20%;margin-bottom: 64px;}
  .foodCon{padding:10px ;height: 100%;}
  .foodCon ul li a{width: 100%;display: block;}
  .foodCon ul li a img{width: 70%;margin: 0 auto;display: block;}


</style>
