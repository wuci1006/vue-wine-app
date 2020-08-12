<template>
    <div class="my_fine">
        <div class="fine_title">
            <a href=""><img :src="fineArr.fine1" alt="" /></a>
        </div>
        <div class="fine_box">
            <div class="fine_second right_line">
                <a href=""><img :src="fineArr.fine2" alt="" /></a>
            </div>
            <div class="fine_second">
                <a href=""><img :src="fineArr.fine3" alt="" /></a>
            </div>
        </div>
        <div class="fine_gain">
            <div class="fine_third right_line">
                <a href=""><img :src="fineArr.fine4" alt="" /></a>
            </div>
            <div class="fine_third right_line">
                <a href=""><img :src="fineArr.fine5" alt="" /></a>
            </div>
            <div class="fine_third">
                <a href=""><img :src="fineArr.fine6" alt="" /></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        fineArr:Object
    }
};
</script>

<style scoped>
.my_fine {
    width: 100%;
    height: 100%;
    font-size: 0;
}
.fine_title {
    width: 100%;
    border-bottom: 1px solid #f1f1f1;
}
.fine_title a {
    width: 100%;
    display: block;
}
.fine_title a img {
    width: 100%;
    display: block;
}
.fine_box {
    width: 100%;
    border-bottom: 1px solid #f1f1f1;
    display: flex;
}
.fine_box .fine_second {
    flex: 1;
}
.fine_box .fine_second a {
    width: 100%;
    display: block;
}
.fine_box .fine_second a img {
    width: 100%;
    display: block;
}
.fine_gain {
    width: 100%;
    border-bottom: 1px solid #f1f1f1;
    display: flex;
}
.fine_gain .fine_third {
    width: 100%;
    flex: 1;
}
.fine_gain .fine_third a {
    width: 100%;
    display: block;
}
.fine_gain .fine_third a img {
    width: 100%;
    display: block;
}
.right_line {
    border-right: 1px solid #f1f1f1;
}
</style>
