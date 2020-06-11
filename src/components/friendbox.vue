<template>
    <div class="friendBoxWrap">
        <div class="friendBoxCon">
            <img :src="img" alt="">
            <div class="midTitle">
              <p>{{under}}</p>
              <span>话题：{{hot}}</span>
              <span>人气：{{person}}</span>
            </div>
            <span class="add">加入</span>
            <div class="clear"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "friendbox",
        props:["img","under","hot","person"]
    }
</script>

<style scoped>
  .clear{clear:both;}
  .friendBoxWrap{width: 100%;height: auto;}
  .friendBoxCon{padding: 10px;border-bottom: 1px solid #ccc;}
  .friendBoxCon img{width: 20%;display: block;vertical-align: middle;
    float: left;}

  .friendBoxCon .midTitle{width: 55%;float: left;margin: 10px 0;line-height: 25px;}
  .friendBoxCon .midTitle p{width: 100%;color: #000;font-size: 18px;font-weight: bold;}
  .friendBoxCon .midTitle span{color: #666;font-size: 14px;}

  .friendBoxCon span.add{width: 50px;height: 25px;line-height:25px;color: #fff;
    background-color: #ff5f5f;display: inline-block;text-align: center;margin: 20px auto;}


</style>
