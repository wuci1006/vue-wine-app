<template>
  <div class="memberWrap">
      <div class="memberCon">
          <span></span>CLUB会员尊享<span></span>
      </div>
      <div class="memberRig"><a href="">成为会员></a></div>
  </div>
</template>

<script>
    export default {
        name: "member"
    }
</script>

<style scoped>
  .memberWrap{width: 100%;position: relative;height: 40px;
    line-height: 40px;color: #E9D8C3;}
  .memberCon{position: absolute;right: 130px;font-size: 14px;font-weight: 600;}
  .memberCon span{width: 15px;height: 1px;margin: 0 5px;
    vertical-align: middle;background-color:#E9D8C3;display: inline-block; }

  .memberRig{position: absolute;right: 10px;font-size: 12px;}
  .memberRig a{color:#E9D8C3;font-size: 12px;text-decoration: none;}
</style>
