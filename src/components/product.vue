<template>
    <div class="productWrap">
        <div class="productBox">
            <a href="">
                <div><img :src="img" alt=""></div>
                <span class="span1">{{con}}</span>
                <span class="span2">{{red}}</span>
                <span class="span3">{{black}}</span>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "product",
        props:["img","con","red","black"]
    }
</script>

<style scoped>
  a{text-decoration: none;color: #333;}

  .productWrap{background-color: #fff;margin-bottom: 8px;}
  .productWrap a{width: 100%;display:block;}
  .productWrap a img{width: 100%;display:block;}

  .productBox{padding:5px 10px;display:block;}
  .productBox img{width:100%;display:block;}

  .productBox span{font-size: 12px;color: #252525;}
  .productBox span.span1{height:32px;line-height: 16px;overflow: hidden;display: block;}
  .productBox span.span2{color: indianred;text-align: left;}
  .productBox span.span3{text-decoration: line-through;}

</style>
