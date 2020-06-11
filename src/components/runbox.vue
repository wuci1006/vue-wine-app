<template>
    <div class="runBoxWrap">
        <img :src="img" alt="">
        <div class="runDiv">
          <span class="pink"></span>
          <span class="txt">{{con}}</span>
          <span class="new">{{red}}</span>
          <span class="grey">人气   {{num}}</span>
          <div class="clear"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "runbox",
        props:["img","con","red","num"]
    }
</script>

<style scoped>
  .clear{clear:both;}
  .runBoxWrap{width: 100%;margin: 15px 0;background-color: #fff;}
  .runBoxWrap img{width: 100%;display: block;}
  .runBoxWrap .runDiv{padding: 10px 0;width: 100%;height: 30px;line-height: 30px;}
  .runBoxWrap .runDiv span.pink{width: 5px;height: 100%;background-color: pink;
      display: inline-block;vertical-align: middle;}
  .runBoxWrap .runDiv span.txt{font-size: 16px;font-weight: 600;margin-left: 10px;}
  .runBoxWrap .runDiv span.new{width: 35px;height: 30px;background-color: #F37F81;
      color:#fff;border-radius: 10px;font-size: 14px;}
  .runBoxWrap .runDiv span.grey{color: #666;float:right;margin-right: 5px;}
</style>
