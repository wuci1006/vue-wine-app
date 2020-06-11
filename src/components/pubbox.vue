<template>
    <div class="pubBox">
        <div class="pub1"><a href=""><img src="../assets/images/p1.jpg" alt=""></a></div>
        <div class="pub2">
            <div class="leftPub"><a href=""><img src="../assets/images/p2.jpg" alt=""></a></div>
            <div class="rightPub"><a href=""><img src="../assets/images/p3.jpg" alt=""></a></div>
            <div class="clear"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pubbox"
    }
</script>

<style scoped>
  a{text-decoration: none;color:#333;display: block;}
  img{display: block;}
  .clear{clear:both;}

  .pubBox{width: 100%;height: 100%;font-size: 0;}
  .pub1,.pub2{width: 100%;height: 50%;}
  .pub1 a{width: 100%;display:block;}
  .pub1 a img{width: 100%;display:block;}
  .pub2 .leftPub,.pub2 .rightPub{width: 50%;float: left;}
  .pub2 .leftPub a,.pub2 .rightPub a{width: 100%;display:block;}
  .pub2 .leftPub a img,.pub2 .rightPub a img{width: 100%;display:block;border:0;padding: 0;}

</style>
