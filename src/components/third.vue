<template>
    <div class="thirdWrap">
        <slot name="thd"></slot>
    </div>
</template>

<script>
    export default {
        name: "third"
    }
</script>

<style scoped>
  .clear{clear:both;}
  .thirdWrap{height: auto;width: 100%;}
  .thirdWrap li{width: 25%;margin: 10px;height: 100%;display: inline-block;}
  .thirdWrap li a{width:100%;height:100%;text-decoration: none;color: #666;
    font-size: 12px;text-align: center;display: block;}
  .thirdWrap li a img{width: 100%;display: block;vertical-align: middle;}
  .thirdWrap li a p{margin: 7px 0px;}
  .thirdWrap li a:hover  p{color: red;}


</style>
