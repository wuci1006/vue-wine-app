<template>
    <div class="listWrap">
        <slot name="lit"></slot>
    </div>
</template>

<script>
    export default {
        name: "list"
    }
</script>

<style scoped>
  .clear{clear:both;}
  .liw{width: 100%;display: flex;background-color: #fff;}
  .liw a{flex:1;}
  .liw a img{width: 60%;}
  .liw a p{width: 100%;color: #333;text-align: center;line-height: 35px;font-size: 12px;}

  .lix{width: 100%;background-color: #fff;}
  .lix a{width: 25%;float: left;font-size: 0;padding: 10px 0;}
  .lix a img{width: 60%;}
  .mt{margin-top: 10px;}

</style>
