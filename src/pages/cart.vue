<template>
    <div class="my_cart">
        <div class="cart_header">
            <myHeader title="购物车" :class="{ cartBg: true }"></myHeader>
        </div>

        <div class="empty_wrap">
            <div class="img_wrap">
                <img :src="cartUrl" alt="" />
            </div>
            <p class="empty_title">您的购物车还没有商品</p>
            <p class="empty_text">快去逛逛吧~</p>
            <a class="go_home" @click="goHome">去首页</a>
        </div>
        
    </div>
</template>

<script>
import myHeader from "../components/header/myHeader.vue";
export default {
    data() {
        return {
            cartUrl:require('../assets/images/tools/cart.jpg')
        }
    },
    components: {
        myHeader,
    },
    methods: {
        goHome(){
            this.$router.push({ path: "home" });
        },
    },
};
</script>

<style scoped>
.my_cart {
    width:100%;
    height:100%;
    background-color: #f1f5f4;
    text-align: center;
}
.empty_wrap {
    width: 100%;
    margin-top: 48px;
    margin-bottom: 20px;
}
.img_wrap{
    display: block;
    padding:15px 0;
}
.img_wrap img {
    width:60px;
    height:60px;
    margin:0 auto;
}
.empty_wrap p {
    line-height: 30px;
}
.empty_wrap p.empty_title {
    font-size: 1.6rem;
    color: #333;
    font-weight: 600;
}
.empty_wrap p.empty_text {
    font-size: 1.4rem;
    color: #969a99;
    margin-bottom: 15px;
}

.empty_wrap a {
    font-size: 1.6rem;
    color: #000;
    text-decoration: none;
}
.empty_wrap a.go_home {
    padding: 6px 20px;
    background-color: #fff;
}

</style>
