<template>
    <div class="emptyWrap">
        <div class="imgWrap"><img src="../assets/images/rrr.jpg" alt=""></div>
        <p class="shop1">您的购物车还没有商品</p>
        <p class="shop2">快去逛逛吧~</p>
        <a href="" class="go">去首页</a>
    </div>
</template>

<script>
    export default {
        name: "empty"
    }
</script>

<style scoped>
.emptyWrap{width: 100%;margin-top: 48px;padding-bottom: 20px;}
.imgWrap img{width: 22%;margin-top:40px;}
.emptyWrap p{line-height: 30px;}
.emptyWrap p.shop1{font-size: 16px;color: #333;font-weight: 600;}
.emptyWrap p.shop2{font-size: 14px;color: #969A99;margin-bottom: 25px;}

.emptyWrap a{font-size: 16px;color: #000;text-decoration:none;}
.emptyWrap a.go{padding: 6px 20px;background-color: #fff;}

</style>
