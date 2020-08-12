<template>
    <div class="my_title">
        <span class="span_color" :style="{ background: spanColor }"></span>
        <span class="text_left">{{ leftText }}</span>
        <span class="text_right">{{ rightText }}</span>
    </div>
</template>

<script>
export default {
    props:{
        leftText:String,
        rightText:String,
        spanColor:String
    }
};
</script>

<style scoped>
.my_title {
    width: 100%;
    background-color: #f1f5f4;
    margin: 8px 0;
    height: 25px;
    line-height: 25px;
    position: relative;
    padding-bottom:54px;
}

.my_title .span_color {
    width: 7px;
    height: 100%;
    position: absolute;
    left: 0px;
    top:0px;
}

.my_title .text_left {
    position: absolute;
    left: 15px;
    color: #666;
    font-size: 1.2rem;
}

.my_title .text_right {
    position: absolute;
    right: 10px;
    color: #666;
    font-size: 1.2rem;
}
</style>
