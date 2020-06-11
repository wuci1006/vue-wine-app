<template>
    <div class="cartWrap">
        <MyHeader title="购物车" :class="{bc4:true}"></MyHeader>
        <Empty></Empty>
        <div class="like">
            <div class="likeTop">
                <span></span>
                你可能喜欢
                <span></span>
            </div>
            <div class="likeCon">
                <cartBox v-for="item in cartlist"
                         :pic="item.pic"
                         :under="item.under"
                         :price="item.price" :key="item.key">
                </cartBox>
            </div>
        </div>
        <div class="process"><span></span>以上根据您购物车已有商品推荐<span></span></div>
        <div class="toTop"><i></i></div>
    </div>
</template>

<script>
  import $ from 'jquery'
  import MyHeader from '../components/myheader.vue'
  import Empty from '../components/empty.vue'
  import {getCartList} from '../api/api.js'
  import cartBox from '../components/cartbox.vue'
    export default {
        name: "cart",
        components:{
            MyHeader,
            Empty,
            cartBox
        },
        data:function(){
            return {
              cartlist:[]
            }
        },
        mounted:function () {
          var cartArr = {};
          var This = this;
          getCartList(cartArr).then(function(res){
            This.cartlist = res;
            console.log(This.cartlist);
          });
          $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
              $(".toTop i").show();
            }
            else {
              $(".toTop i").hide();
            }
          });
          $(".toTop").click(function(){
            $("html,body").animate({scrollTop:0},300);
            return false;
          })

      }
    }
</script>

<style scoped>
  .cartWrap{background-color: #F1F5F4;text-align: center;}
  .like{width: 100%;margin-top: 30px;}
  .like .likeTop{width: 100%;font-size: 16px;height: 40px;line-height: 40px;}
  .like .likeTop span{width:37%;height: 1px;background-color: #ccc;
      display: inline-block;vertical-align: middle;}
  .likeCon{column-count: 2;column-gap: 5px;}

  .process{margin-bottom: 64px;width: 100%;height: 80px;margin-top: 10px;}
  .process span{width: 18%;vertical-align: middle;height: 1px;
    background-color: #ccc;display: inline-block;margin: 0 1%;}

  .toTop{width: 51px;height: 51px;position: fixed;bottom: 70px;
    right: 12px;z-index: 100000;}
  .toTop i{display: block;width: 100%;height: 100%;
    background: url("../assets/images/jx-sprite.png") no-repeat -93px -2px;
    background-size: 150px 55px;}


</style>
