<template>
    <div class="categoryWrap">
        <MyHeader :class="{bc2:true}">
            <div slot="left1" class="searchWrap" id="categoryWrap">
                <img src="../assets/images/ic_group_search_small.png" alt="" class="searchImg">
                <input type="text" placeholder="酒鬼酒特卖：20000套酒具免费享" class="searchInput">
            </div>
            <img src="../assets/tabimg/ic_cate_scan.png" alt="" slot="right" class="rightImg">
        </MyHeader>
        <ul class="menu" @click="fn($event)">
            <li class="active"><router-link to="/category/first">一键选酒</router-link></li>
            <li><router-link to="/category/white">白酒</router-link></li>
            <li><router-link to="/category/grape">葡萄酒</router-link></li>
            <li><router-link to="/category/foreign">洋酒</router-link></li>
            <li><router-link to="/category/yellow">黄/保/啤</router-link></li>
            <li><router-link to="/category/food">酒仙食尚</router-link></li>
            <li><router-link to="/category/rim">酒具周边</router-link></li>
        </ul>
        <router-view></router-view>

    </div>
</template>

<script>
  import MyHeader from '../components/myheader.vue'
  import  $ from 'jquery'
      export default {
          name: "category",
          components:{
              MyHeader
          },
          methods:{
            fn:function (e) {
              $(e.target).parent("li").addClass("active")
                .siblings().removeClass("active");
            }
          }
      }
</script>

<style scoped>
  ul,li{list-style: none;}
  .categoryWrap{width: 100%;height: 100%;position: relative;}
  .menu{width: 20%;background-color: #F1F5F4;height: 100%;left:0;
    position: fixed;top:48px;font-size: 12px;}
  .menu li{width: 100%;height: 50px;line-height: 50px;text-align: center;}
  .menu li a{text-decoration: none;color: #666;width:100%;
    display: inline-block;}
  .menu li.active{background-color: #fff;}
  .menu li.active a{color: red;}
</style>
