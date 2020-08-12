<template>
    <div class="my_box">
        <div class="box_con">
            <div class="box_title">
                <img :src="boxArr.title" alt="" />
            </div>
            <div class="box_main">
                <div class="box_left right_line">
                    <div class="box_img">
                        <img :src="boxArr.sub1" alt="" />
                    </div>
                </div>
                <div class="box_right">
                    <div class="right_top">
                        <img :src="boxArr.sub2" alt="" />
                    </div>
                    <div class="right_foot">
                        <a class="right_line"><img :src="boxArr.sub3" alt=""></a>
                        <a><img :src="boxArr.sub4" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        boxArr: Object,
    },
};
</script>

<style scoped>
.my_box {
    width: 100%;
    height: 100%;
    font-size: 0;
}
.box_con {
    width: 100%;
    height: 100%;
    background-color: #fff;
    margin-top: 10px;
}
.box_title {
    width: 100%;
    border-bottom: 1px solid #f1f1f1;
}
.box_title a {
    width: 100%;
    display: block;
}
.box_title img {
    width: 100%;
    display: block;
}
.box_main {
    width: 100%;
    border-bottom: 1px solid #f1f1f1;
    display: flex;
}
.box_main .box_left {
    flex: 4;
}
.box_main .box_left .box_img {
    width: 100%;
}
.box_main .box_left a {
    width: 100%;
    display: block;
}
.box_main .box_left img {
    width: 100%;
    display: block;
}
.box_main .box_right {
    flex: 6;
}
.box_main .box_right .right_top {
    width: 100%;
    border-bottom: 1px solid #f1f1f1;
}
.box_main .box_right .right_top a {
    width: 100%;
    display: block;
}
.box_main .box_right .right_top img {
    width: 100%;
    display: block;
}
.box_main .box_right .right_foot {
    width: 100%;
    display: flex;
}
.box_main .box_right .right_foot a {
    flex: 1;
    display: block;
}
.box_main .box_right .right_foot a img {
    width: 100%;
    display: block;
}
.right_line {
    border-right: 1px solid #f1f1f1;
}
</style>
