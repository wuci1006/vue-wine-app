<template>
    <div class="cartBoxWrap">
        <img :src="pic" alt="">
        <p>{{under}}</p>
        <span>{{price}}</span>
    </div>
</template>

<script>
    export default {
        name: "cartbox",
        props:["pic","under","price"]
    }
</script>

<style scoped>
  .cartBoxWrap{display: block;background-color: #fff;
    margin-bottom: 5px;padding: 5px 10px;}
  .cartBoxWrap img{width: 100%;}
  .cartBoxWrap p{width: 100%;color: #000;display: inline-block;
    text-align: left;overflow: hidden;height: 20px;line-height: 20px;}
  .cartBoxWrap span{width: 100%;color: red;display: inline-block;
      text-align: left;}
</style>
