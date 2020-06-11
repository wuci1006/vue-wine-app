<template>
    <div class="loginWrap">
        <div class="loginBox">
            <img src="../assets/images/ic_share_default_user.png" alt="">
            <a href="">登录/注册 &nbsp;></a>
        </div>
  </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>
  .clear{clear:both;}
  a{text-decoration: none;color: #fff;}

  .loginWrap{width:250px;height:125px;position: fixed;top:0;left:0;z-index: 111111111111;}
  .loginWrap .loginBox{position: absolute;top:10%;left:10px;margin-top: 20px;z-index: 999999;}
  .loginWrap .loginBox a{width: 100%;margin-left: 20px;font-size: 14px;}
  .loginWrap .loginBox img{width: 30%;vertical-align: middle;}


</style>
