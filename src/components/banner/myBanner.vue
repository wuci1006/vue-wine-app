<template>
    <div class="my_banner">
        <div class="swiper-container" :id="swiperId">
            <div class="swiper-wrapper">
                <!---slot代表的是轮播的内容-->
                <slot name="slide"></slot>
            </div>
            <!-- 分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import "../../assets/swiper/swiper.js";
export default {
    props: {
        swiperId: {//id
            type: Number,
            default: 0,
        },
        auto: {//自动轮播事件
            type: Number,
            default: 2000,
        },
        dire: {//方向
            type: String,
            default: "horizontal",
        },
        pag: {
            type: String,
            default: "",
        },
        perview: {
            type: Number,
            default: 1,
        },
        between: {
            type: Number,
            default: 0,
        },
    },
    mounted: function () {
        var This = this;
        var mySwiper = new Swiper("#" + This.swiperId, {
            loop: true,
            autoplay: This.auto, //调用时传过来的值
            direction: This.dire,
            autoplayDisableOnInteraction: false,
            slidesPerView: This.perview,
            spaceBetween: This.between,
            pagination: ".swiper-pagination",
        });
    },
};
</script>

<style scoped>
@import "../../assets/swiper/swiper.min.css";

.swiper-container {
    width: 100%;
}
.swiper-container img {
    width: 100%;
}
</style>
