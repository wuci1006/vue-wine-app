<template>
    <div class="my_sift">
        <div class="sift_box">
            <div class="sift_wrap" v-for="i in siftData" :key="i.id">
                <div class="sift_top clearfix">
                    <img :src="i.img1" alt="" />
                    <div class="title">
                        <h4 class="orange">{{ i.tit }}</h4>
                        <span class="time">{{ i.time }}</span>
                    </div>
                </div>
                <div class="sift_title">
                    <span class="pink"></span>
                    <span class="middle">{{ i.tet }}</span>
                </div>
                <div class="sift_content">
                    <p>{{ i.com }}</p>
                </div>
                <div class="sift_img">
                    <img :src="i.img2" alt="" />
                </div>
                <div class="sift_foot">
                    <span class="pro1">葡萄酒动态</span>
                    <span class="pro2">点赞：{{ i.num1 }}</span>
                    <span class="pro3">评论：{{ i.num2 }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        siftData:Array
    },
};
</script>

<style scoped>
.my_sift {
    width: 100%;
    height: auto;
    margin-top: 96px;
    margin-bottom: 64px;
    background-color: #f1f5f4;
}
.sift_box {
    padding: 10px;
}

.sift_wrap {
    width: 100%;
    background-color: #fff;
    margin: 15px 0;
}

.sift_wrap .sift_top {
    width: 100%;
}
.sift_wrap .sift_top img {
    width: 20%;
    float: left;
    vertical-align: middle;
}
.sift_wrap .sift_top .title {
    width: 78%;
    float: left;
    margin-left:2%;
    line-height: 30px;
}
.sift_wrap .sift_top .title h4.orange {
    color: orange;
    font-size: large;
    font-weight: lighter;
    line-height: 40px;
}
.sift_wrap .sift_top .title .time {
    width: 80%;
    display: block;
    line-height: 10px;
}

.sift_wrap .sift_title {
    width: 100%;
    height: 25px;
    line-height: 25px;
    padding: 10px 0;
}
.sift_wrap .sift_title span.pink {
    width: 5px;
    height: 100%;
    display: inline-block;
    background-color: #f2615d;
    vertical-align: middle;
    border-radius: 2px;
    margin-left: 10px;
}
.sift_wrap .sift_title span.middle {
    font-size: 1.8rem;
    font-weight: bold;
    margin-left: 10px;
    color: #3a3a3a;
    vertical-align: middle;
}

.sift_wrap .sift_content {
    padding: 0 10px 10px 10px;
}
.sift_wrap .sift_content p {
    line-height: 30px;
    font-size: 1.6rem;
    overflow: hidden;
    color: #666;
}
.sift_wrap .sift_img {
    height:150px;
}
.sift_wrap .sift_img img {
    width: 100%;
    height: 100%;
}

.sift_wrap .sift_foot {
    width: 100%;
    height: 30px;
    line-height: 30px;
    padding: 10px 0;
    position: relative;
}
.sift_wrap .sift_foot span.pro1 {
    position: absolute;
    left: 10px;
    color: #f2615d;
}
.sift_wrap .sift_foot span.pro2 {
    position: absolute;
    right: 75px;
}
.sift_wrap .sift_foot span.pro3 {
    position: absolute;
    right: 5px;
}
</style>
