<template>
    <div class="my_matter">
        <div class="matter_box">

            <div class="matter_banner">
                <myBanner :auto="0" :swiperId="101" dire="horizontal">
                    <div class="swiper-slide" slot="slide" 
                        v-for="i in contentData.bannerData" :key="i.id">
                        <img :src="i.url" alt="" />
                    </div>
                </myBanner>
            </div>

            <div class="matter_main">
                <div class="main_list" v-for="(i,index) in contentData.mainData" :key="index">
                    <myTitle :leftText="i.title" :spanColor="i.titleColor"></myTitle>
                    <ul class="clearfix">
                        <li v-for="j in i.detailArr" :key="j.id">
                            <img :src="j.url" alt="">
                            <p>{{j.text}}</p>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import myBanner from "../banner/myBanner.vue";
import myTitle from "./myTitle.vue";
export default {
    components: {
        myBanner,
        myTitle,
    },
    props:{
        contentData:Object
    }
};
</script>

<style scoped>
.my_matter {
    width: 80%;
    height: auto;
    position: absolute;
    top: 48px;
    left: 20%;
    padding-bottom: 54px;
}
.matter_box {
    padding: 10px;
    height: 100%;
}
.matter_banner .swiper-slide img {
    width: 100%;
    height: 100px;
    display: inline-block;
}
.main_list ul li{
    width:33.3%;
    float:left;
    text-align: center;
    margin:10px 0;
}
.main_list ul li img{
    width:70%;
    margin:0 auto;
}
.main_list ul li p{
    line-height: 25px;
}
</style>
