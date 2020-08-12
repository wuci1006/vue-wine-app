<template>
    <div class="toTop">
        <i></i>
    </div>
</template>

<script>
import $ from "jquery";
export default {
    mounted() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 70) {
                $(".toTop i").show();
            } else {
                $(".toTop i").hide();
            }
        });
        $(".toTop").click(function () {
            $("html,body").animate({ scrollTop: 0 }, 300);
            return false;
        });
    },
};
</script>

<style scoped>
.toTop {
    width: 51px;
    height: 51px;
    position: fixed;
    bottom: 70px;
    right: 12px;
    z-index: 100000;
}
.toTop i {
    display: block;
    width: 100%;
    height: 100%;
    background: url("../assets/images/jx-sprite.png") no-repeat -93px -2px;
    background-size: 150px 55px;
}
</style>
