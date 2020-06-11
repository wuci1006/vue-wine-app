<template>
  <div class="rimWrap">
    <div class="rimCon">
      <Third>
        <ul slot="thd">
          <li><a href=""><img src="../../assets/cate/img5/5_03.gif" alt=""><p>酒杯醒酒器</p></a></li>
          <li><a href=""><img src="../../assets/cate/img5/5_05.gif" alt=""><p>开瓶器</p></a></li>
          <li><a href=""><img src="../../assets/cate/img5/5_07.gif" alt=""><p>礼盒</p></a></li>
          <div class="clear"></div>
        </ul>
      </Third>
    </div>
  </div>
</template>

<script>
  import Third from '../../components/third.vue'
  export default {
    name: "rim",
    components:{
      Third
    }
  }
</script>

<style scoped>
  ul,li{list-style: none;}
  .clear{clear:both;}
  .rimWrap{width: 80%;height: auto;position: absolute;top:48px;left:20%;margin-bottom: 64px;}
  .rimCon{padding:10px ;height: 100%;}
</style>
