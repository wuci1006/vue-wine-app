<template>
    <div class="severalWrap">
        <div class="china">
            <div class="Title"><a href=""><img :src="title" alt=""></a></div>
            <div class="Substance">
                <div class="substanceLeft right-line">
                    <div class="subWrap"><a href=""><img :src="sub1" alt=""></a></div>
                </div>
                <div class="substanceRight">
                    <div class="subTop"><a href=""><img :src="sub2" alt=""></a></div>
                    <div class="subFooter">
                        <a href="" class="right-line"><img :src="sub3" alt=""></a>
                        <a href=""><img :src="sub4" alt=""></a>
                    </div>
                </div>
            </div>
            <slot name="ban"></slot>

        </div>
    </div>
</template>

<script>
  // import Banner from '../components/banner.vue'
    export default {
        name: "several",
        /*components:{
          Banner
        },*/
        props:["title","sub1","sub2","sub3","sub4","img"]
    }
</script>

<style scoped>
  .severalWrap{width: 100%;height: 100%; font-size: 0;}
  .china{width: 100%;height: 100%;background-color: #fff;margin-top: 10px;}
  .Title{width: 100%;border-bottom: 1px solid #f1f1f1;}
  .Title a{width: 100%;display: block;}
  .Title a img{width: 100%;display: block;}
  .Substance{width: 100%;border-bottom: 1px solid #f1f1f1;display: flex;}
  .Substance .substanceLeft{flex:4;}
  .Substance .substanceLeft .subWrap{width: 100%;}
  .Substance .substanceLeft a{width: 100%;display: block;}
  .Substance .substanceLeft a img{width: 100%;display: block;}
  .Substance .substanceRight{flex:6;}
  .Substance .substanceRight .subTop{width: 100%;border-bottom: 1px solid #f1f1f1;}
  .Substance .substanceRight .subTop a{width: 100%;display: block;}
  .Substance .substanceRight .subTop a img{width: 100%;display: block;}
  .Substance .substanceRight .subFooter{width: 100%;display: flex;}
  .Substance .substanceRight .subFooter a{flex: 1;display: block;}
  .Substance .substanceRight .subFooter a img{width: 100%;display: block;}
  .right-line{border-right: 1px solid #f1f1f1;}



</style>
