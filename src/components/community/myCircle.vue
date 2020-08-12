<template>
    <div class="my_circle">
        <div class="circle_box">
            <div class="circle_img">
                <img src="../../assets/images/1.png" alt="" />
            </div>
            <div class="circle_main">
                <div class="circle_top">
                    <span class="circle_line"></span>
                    <span>推荐圈子</span>
                    <span class="circle_line"></span>
                </div>
                
                <div class="circle_wrap clearfix"  v-for="i in circleData" :key="i.key">
                    <div class="circle_user">
                        <img :src="i.img" alt="" />
                    </div>
                    <div class="circle_title">
                        <p>{{ i.under }}</p>
                        <span>话题：{{ i.hot }}</span>
                        <span>人气：{{ i.person }}</span>
                    </div>
                    <div class="circle_btn">
                        <span class="add">加入</span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        circleData: Array,
    },
};
</script>

<style scoped>
.my_circle {
    width: 100%;
    height: auto;
    margin-top: 96px;
    margin-bottom: 64px;
    background-color: #f1f5f4;
}
.circle_box {
    padding: 10px;
}

.circle_img img {
    width: 100%;
}

.circle_main {
    margin-top: 15px;
    background-color: #fff;
    padding:0 10px;
}
.circle_top {
    font-size: 1.6rem;
    font-weight: bold;
    display: block;
    line-height: 25px;
    text-align: center;
    padding:10px 0;
}
.circle_top span.circle_line{
    width: 13px;
    height: 2px;
    background-color: #000;
    display: inline-block;
    vertical-align: middle;
    margin: 0 5px;
}

.circle_list {
    padding:10px 0;
    border-bottom: 1px solid #e5e5e5;
}
.circle_list:last-child{
    border-bottom:none;
}

.circle_user{
    width: 20%;
    float: left;
}
.circle_user img {
    width:60px;
    height:60px;
    margin:5px auto;
}

.circle_title {
    width: 52%;
    float: left;
    margin-left:2%;
}
.circle_title p {
    width: 100%;
    color: #000;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 40px;
}
.circle_title span {
    color: #666;
    font-size: 1.4rem;
    line-height: 15px;
}


.circle_btn{
    float: right;
    width:20%;
    text-align: center;
    height:100%;
}
.circle_btn span{
    line-height: 25px;
    margin:20px auto;
    color: #fff;
    background-color: #ff5f5f;
    font-size: 1.4rem;
    display: block;
    width:80%;
    text-align: center;
}
</style>
