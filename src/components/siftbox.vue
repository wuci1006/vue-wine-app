<template>
    <div class="siftBoxWrap">
      <div class="sift1">
        <img :src="img1" alt="">
        <div class="title">
          <h4 class="orange">{{tit}}</h4>
          <span class="time">{{time}}</span>
        </div>
        <div class="clear"></div>
      </div>
      <div class="sift2">
        <span class="pink"></span>
        <span class="middle">{{tet}}</span>
      </div>
      <div class="sift3">
        <p>{{com}}</p>
      </div>
      <div class="sift4">
        <img :src="img2" alt="">
      </div>
      <div class="sift5">
        <span class="pro1">葡萄酒动态</span>
        <span class="pro2">点赞：{{num1}}</span>
        <span class="pro3">评论：{{num2}}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "siftbox",
        props:["img1","tit","time","tet","com","img2","num1","num2"]
    }
</script>

<style scoped>
  .clear{clear:both;}
  .siftBoxWrap{width: 100%;background-color: #fff;margin: 15px 0;}

  .siftBoxWrap .sift1{width: 100%;}
  .siftBoxWrap .sift1 img{width: 20%;float: left;vertical-align: middle;}
  .siftBoxWrap .sift1 .title{width: 80%;float: left;padding: 5px 0;
    line-height: 30px;}
  .siftBoxWrap .sift1 .title h4.orange{color: orange;font-size: large;
      font-weight: lighter;}
  .siftBoxWrap .sift1 .title .time{width: 80%;}

  .siftBoxWrap .sift2{width: 100%;height: 25px;line-height: 25px;padding: 10px 0;}
  .siftBoxWrap .sift2 span.pink{width: 5px;height: 100%;display: inline-block;
    background-color:#F2615D;vertical-align: middle;border-radius: 2px;}
  .siftBoxWrap .sift2 span.middle{font-size:20px;font-weight: bold;margin-left: 10px;
    color:#3A3A3A;}

  .siftBoxWrap .sift3{padding: 0 18px;}
  .siftBoxWrap .sift3 p{height:57px;line-height: 30px;font-size: 18px;overflow: hidden;
    color:#666;}

  .siftBoxWrap .sift4 img{width: 100%;}

  .siftBoxWrap .sift5{width: 100%;height:30px;line-height:30px;
    padding: 10px 0;position: relative;}
  .siftBoxWrap .sift5 span.pro1{position: absolute;left:10px;color:#F2615D; }
  .siftBoxWrap .sift5 span.pro2{position: absolute;right:75px;}
  .siftBoxWrap .sift5 span.pro3{position: absolute;right:5px;}

</style>
