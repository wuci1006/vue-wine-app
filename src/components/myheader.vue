<template>
  <div :class="{headerWrap:true}">
      <span>{{title}}</span>
      <slot name="left"></slot>
      <slot name="left1"></slot>
      <slot name="center"></slot>
      <slot name="right"></slot>
      <slot name="right1"></slot>
  </div>
</template>

<script>
    export default {
        name: "myheader",
        props:["title"]
    }
</script>

<style scoped>
  .headerWrap{width: 100%;height: 48px;border-bottom: 1px solid #ccc;
    position: fixed;top:0;line-height: 48px;z-index: 999;}

  .bc1{border:none;}
  .bc2{background-color: #f4f5f7;}
  .bc4{background-color: #fafafa;}
  .bc5{background-color: #e14135;height: 125px;}
  .bc6{background-color: #fafafa;border: none;}

  .headerWrap img{width: 25px;position: absolute;top:12px;}
  .headerWrap img.leftImg{left:10px;}
  .headerWrap img.rightImg{right:10px;}
  .headerWrap img.rigImg{right:50px;}

  .searchWrap{position: relative;}
  .searchWrap .searchInput{width: 76%;height: 30px;display: inline-block;
    position: absolute;left:50px;top:9px;
    border: none;outline: none;text-indent: 2rem;}
  .searchWrap img{position: absolute;z-index: 999;width: 20px;top:14px;}
  .searchWrap img.searchImg{left:60px;}

  #categoryWrap .searchInput{width: 85%;position: absolute;left:15px;}
  #categoryWrap img.searchImg{left:25px;}

  .head{background-color: #E85254;}

</style>
