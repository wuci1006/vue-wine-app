<template>
    <div class="handpick">
        <div class="pushTitle">
            <a href=""><img src="../assets/images/mm1.jpg" alt=""></a>
        </div>
        <div class="pushBox">
            <div class="pushSecond right-line"><a href=""><img src="../assets/images/mm2.jpg" alt=""></a></div>
            <div class="pushSecond"><a href=""><img src="../assets/images/mm3.jpg" alt=""></a></div>
        </div>
        <div class="pushGain">
            <div class="pushThird right-line"><a href=""><img src="../assets/images/mm4.jpg" alt=""></a></div>
            <div class="pushThird right-line"><a href=""><img src="../assets/images/mm5.jpg" alt=""></a></div>
            <div class="pushThird"><a href=""><img src="../assets/images/mm6.jpg" alt=""></a></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "handpick"
    }
</script>

<style scoped>
  a{text-decoration: none;color:#333;display: block;}
  img{display: block;}
  .clear{clear:both;}

  .handpick{width: 100%;height: 100%;font-size: 0;}
  .pushTitle{width: 100%;border-bottom: 1px solid #f1f1f1;}
  .pushTitle a{width: 100%;display: block;}
  .pushTitle a img{width: 100%;display: block;}
  .pushBox{width: 100%;border-bottom: 1px solid #f1f1f1;display: flex;}
  .pushBox .pushSecond{flex:1;}
  .pushBox .pushSecond a{width: 100%;display: block;}
  .pushBox .pushSecond a img{width: 100%;display: block;}
  .pushGain{width: 100%;border-bottom: 1px solid #f1f1f1;display: flex;}
  .pushGain .pushThird{width: 100%;flex:1;}
  .pushGain .pushThird a{width: 100%;display: block;}
  .pushGain .pushThird a img{width: 100%;display: block;}
  .right-line{border-right: 1px solid #f1f1f1;}
</style>
