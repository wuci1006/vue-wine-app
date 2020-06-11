<template>
    <div class="phoneBox">
        <div class="phoneWrap">
            <div class="phoneLeft">
                <div class="phone1"><a href=""><img src="../assets/images/a1.jpg" alt=""></a></div>
            </div>
            <div class="phoneRight">
                <div class="phone1"><a href="" class="line"><img src="../assets/images/a2.jpg" alt=""></a></div>
                <div class="phone1"><a href=""><img src="../assets/images/a3.jpg" alt=""></a></div>
            </div>
            <div class="clear"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "phonebox"
    }
</script>

<style scoped>
  a{text-decoration: none;color:#333;display: block;}
  img{display: block;}
  .clear{clear:both;}

  .phoneBox{font-size: 0;background-color: #fff;}
  .phoneWrap{padding: 10px 0;width: 100%;}
  .phoneLeft{width: 49%;float: left;border-right: 1px solid #ccc;}
  .phoneRight{width: 50%;float: left;}
  .phone1{width: 100%;}
  .phone1 a{width:100%;display: block;}
  .phone1 a img{width: 100%;display: block;}
  .phone1 .line{border-bottom: 1px solid #ccc;}

</style>
