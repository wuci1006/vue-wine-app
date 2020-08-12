<template>
    <div class="my_phone">
        <div class="phone_wrap clearfix">
            <div class="phone_left">
                <div class="phone_img">
                    <img :src="phoneArr.phoneLeft" alt="">
                </div>
            </div>
            <div class="phone_right">
                <div class="phone_img">
                    <img :src="phoneArr.phoneTop" alt="">
                </div>
                <div class="phone_img">
                    <img :src="phoneArr.phoneBottom" alt="">
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props:{
        phoneArr:Object
    }
}
</script>

<style scoped>
.my_phone{
    font-size: 0;
    background-color: #fff;
}
.phone_wrap{
    padding: 10px 0;
    width: 100%;
}
.phone_left{
    width: 49%;
    float: left;
    border-right: 1px solid #ccc;
}
.phone_right{
    width: 50%;
    float: left;
}
.phone_img{
    width: 100%;
}
.phone_img{
    width:100%;
    display: block;
}
.phone_img img{
    width: 100%;
    display: block;
}
.phone_img .line{
    border-bottom: 1px solid #ccc;
}

</style>
