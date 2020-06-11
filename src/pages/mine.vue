<template>
    <div class="mineWrap">
        <MyHeader :class="{bc5:true}">
            <img src="../assets/tabimg/setting_icon.png" alt="" slot="right1" class="rigImg">
            <img src="../assets/tabimg/icon_not_message.png" alt="" slot="right" class="rightImg">
        </MyHeader>
        <Login></Login>
        <Cell tit="我的订单" tet="查看全部订单" style="margin-top:125px; "></Cell>
        <List class="lis">
            <div slot="lit" class="liw">
                <a href=""><img src="../assets/images/aa1.jpg" alt=""><p>待付款</p></a>
                <a href=""><img src="../assets/images/aa2.jpg" alt=""><p>待发货</p></a>
                <a href=""><img src="../assets/images/aa3.jpg" alt=""><p>待收获</p></a>
                <a href=""><img src="../assets/images/aa4.jpg" alt=""><p>待评价</p></a>
            </div>
        </List>
        <Cell tit="我的钱包" tet="查看明细" :class="{line:true}"></Cell>
        <List class="lis">
            <div slot="lit" class="liw">
                <a href=""><p>0.00</p><p>账户余额</p></a>
                <a href=""><p>0.00</p><p>返现</p></a>
                <a href=""><p>0</p><p>优惠券</p></a>
                <a href=""><p>0</p><p>金币</p></a>
            </div>
        </List>
        <List :class="{mt:true}">
            <div slot="lit" class="lix">
                <a href=""><img src="../assets/images/1_03.png" alt=""></a>
                <a href=""><img src="../assets/images/1_05.png" alt=""></a>
                <a href=""><img src="../assets/images/1_07.png" alt=""></a>
                <a href=""><img src="../assets/images/1_09.png" alt=""></a>
                <a href=""><img src="../assets/images/1_15.png" alt=""></a>
                <a href=""><img src="../assets/images/1_16.png" alt=""></a>
                <a href=""><img src="../assets/images/1_17.png" alt=""></a>
                <a href=""><img src="../assets/images/1_18.png" alt=""></a>
                <div class="clear"></div>
            </div>
        </List>
        <Member></Member>
        <Banner :auto="0" :swiperId="41" dire="horizontal" :perview="4" :between="5" style="margin-bottom: 64px;">
            <div class="swiper-slide" slot="slide">
                <img src="../assets/images/2_13.png">
                <span style="font-size: 12px;text-decoration: line-through;">1299.00</span>
            </div>
            <div class="swiper-slide" slot="slide">
                <img src="../assets/images/2_14.png">
                <span style="font-size: 12px;text-decoration: line-through;">99.00</span>
            </div>
            <div class="swiper-slide" slot="slide">
                <img src="../assets/images/2_17.png">
                <span style="font-size: 12px;text-decoration: line-through;">119.00</span>
            </div>
            <div class="swiper-slide" slot="slide">
                <img src="../assets/images/2_18.png">
                <span style="font-size: 12px;text-decoration: line-through;">148.00</span>
            </div>
        </Banner>
    </div>
</template>

<script>
  import MyHeader from '../components/myheader.vue'
  import Cell from '../components/cell.vue'
  import List from '../components/list.vue'
  import Login from '../components/login.vue'
  import Banner from '../components/banner.vue'
  import Member from '../components/member.vue'

    export default {
        name: "mine",
        components:{
          MyHeader,
          Cell,
          List,
          Login,
          Banner,
          Member
        }
    }
</script>

<style scoped>
  .clear{clear:both;}
  a{text-decoration: none;color: #fff;}
  .mineWrap{background-color: #F1F5F4;text-align: center;}
</style>
