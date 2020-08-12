<template>
    <div :class="{ header_wrap: true }">
        <span>{{ title }}</span>
        
        <slot name="left"></slot>

        <!-- <slot name="left1"></slot> -->

        <slot name="center"></slot>

        <slot name="right"></slot>

        <slot name="right1"></slot>
    </div>
</template>

<script>
export default {
    props: {
        title:String,
    },
};
</script>

<style scoped>
.header_wrap {
    width: 100%;
    height: 48px;
    border-bottom: 1px solid #ccc;
    position: fixed;
    top: 0;
    left:0;
    line-height: 48px;
    z-index: 9999;
    display: flex;
}
.header_wrap span{
    text-align: center;
    margin:0 auto;
}

.homeBg {
    border: none;
}
.categoryBg {
    background-color: #f4f5f7;
}
.cartBg {
    background-color: #fafafa;
}
.mineBg {
    background-color: #e14135;
    border: none;
}
.communityBg {
    background-color: #fafafa;
    border: none;
}

.header_wrap .left_img {
    flex:1;
    padding-left:3vw;
}
.header_wrap .right_img {
    flex:1;
    padding-right:3vw;
}
.header_wrap .right_img1 {
    flex:1;
    padding-right:3vw;
}

.header_wrap .left_img img,
.header_wrap .right_img img,
.header_wrap .right_img1 img{
    width: 24px;
    height:24px;
    margin:12px auto;
}

.header_wrap .search_box {
    flex:8;
    width:100%;
    position: relative;
    margin:0 3vw;
}
.header_wrap .search_box .search_input {
    width:100%;
    height: 30px;
    display: inline-block;
    position: absolute;
    top: 9px;
    border: none;
    outline: none;
    text-indent: 2rem;
}
.header_wrap .search_box img.search_img {
    position: absolute;
    z-index: 999;
    width: 15px;
    height:15px;
    top: 16px;
    margin:0;
    left: 5px;
}

.head {
    background-color: #e85254;
}

</style>
