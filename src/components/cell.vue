<template>
    <div class="cellWrap">
        <span class="span1">{{tit}}</span>
        <span class="span2">{{tet}}</span>
        <i>></i>
    </div>
</template>

<script>
    export default {
        name: "cell",
        props:["tit","tet"]
    }
</script>

<style scoped>
  .cellWrap{width: 100%;height: 40px;line-height: 40px;
    background-color: #fff;position: relative;}
  .cellWrap .span1{position: absolute;left:10px;color: #333;font-weight:600;
    font-size: 16px;}
  .cellWrap .span2{position: absolute;right:25px;color: #c9c9c9;font-size: 14px;}
  .cellWrap i{position: absolute;right:10px;}

  .line{border-bottom: 1px solid #f1f1f1;margin-top: 10px;}

</style>
