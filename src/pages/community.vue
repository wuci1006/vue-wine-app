<template>
    <div class="comWrap">
      <MyHeader :class="{bc6:true}">
        <img src="../assets/images/ic_tab_profile_female_normal.png" alt="" slot="left" class="leftImg">
        <img src="../assets/tabimg/icon_not_message.png" alt="" slot="right" class="rightImg">
      </MyHeader>
      <ul class="childHead" @click="fn($event)">
        <li class="active"><router-link to="/community/run">活动</router-link></li>
        <li><router-link to="/community/sift">精选页</router-link></li>
        <li><router-link to="/community/friend">酒友圈</router-link></li>
      </ul>
      <router-view></router-view>

    </div>
</template>

<script>
  import MyHeader from '../components/myheader.vue'
  import  $ from 'jquery'
  export default {
        name: "community",
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
  .comWrap{width: 100%;height: 100%;}
  .childHead{width: 100%;height:48px;position: fixed;z-index: 999;
    left:0;top:48px;font-size: 14px;background-color: #fafafa;display: flex;}
  .childHead li{flex:1;height: 48px;line-height: 38px;text-align: center;}
  .childHead li a{text-decoration: none;color: #666;
    display: inline-block;}
  .childHead li.active a{border-bottom: 2px solid #000;color: #000;}
</style>
