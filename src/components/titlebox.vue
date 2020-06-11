<template>
    <div class="titleBoxWrap">
      <span class="spanColor" :style="{background:col}"></span>
      <span class="spanText1">{{text1}}</span>
      <span class="spanText2">{{text2}}</span>
    </div>
</template>

<script>
    export default {
        name: "titlebox",
        props:["text1","text2","col"]
    }
</script>

<style scoped>
  .titleBoxWrap{width: 100%;background-color: #f1f5f4;
    margin: 8px 0;height: 25px;line-height: 25px;position: relative;}

  .titleBoxWrap .spanColor{width: 7px;height: 100%;position: absolute;left:0px;}
  .titleBoxWrap .spanText1{position: absolute;left:13px;color: #666;font-size: 14px;}
  .titleBoxWrap .spanText2{position: absolute;right:10px;color: #666;font-size: 14px;}


</style>
