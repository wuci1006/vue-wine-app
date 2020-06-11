<template>
    <div class="navbarWrap">
        <slot name="navbar"></slot>
    </div>
</template>

<script>
    export default {
        name: "navbar"
    }
</script>

<style scoped>
  .navbarWrap{width: 100%;height: 100%;font-size: 0;}
  .navbarWrap a{height:100%;display:block;text-align: center;float: left;}
  .navbarWrap a.wid1{width: 20%;}
  .navbarWrap a.wid2{width: 50%;border-bottom: 1px solid #f1f1f1;}
  .navbarWrap a img{width: 100%;height:100%;display:block;padding: 0;}


</style>
