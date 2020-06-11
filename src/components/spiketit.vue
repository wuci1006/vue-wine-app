<template>
    <div class="spikeTit">
        <h3>掌上秒拍</h3>
        <div class="countdown">
          <span>距结束</span>
          <i>04</i><em>:</em>
          <i>11</i><em>:</em>
          <i>07</i>
        </div>
        <a href=""><span>更多产品等你来</span><i></i></a>
    </div>
</template>

<script>
    export default {
        name: "spiketit"
    }
</script>

<style scoped>
  a{text-decoration: none;color:#333;display: block;}
  img{display: block;}
  .clear{clear:both;}

  .spikeTit{padding: 8px 10px;height: 25px;line-height: 25px;
    position: relative;border-bottom: 1px solid #ededed;}
  .spikeTit h3{position: absolute;left:10px;font-size: 14px;}
  .spikeTit .countdown{position: absolute;left:70px;height: 17px;line-height: 17px;padding: 2px 0;}
  .spikeTit .countdown span{font-size: 12px;}
  .spikeTit .countdown i{font-size: 12px;}
  .spikeTit .countdown em{font-size: 12px;}
  .spikeTit a{position: absolute;right:10px;font-size: 12px;height: 25px;line-height: 25px;}
  .spikeTit a span{vertical-align: middle;margin-right: 5px;}
  .spikeTit a i{width:14px;height:14px;display: inline-block;vertical-align: middle;
    background: url("../assets/images/jx-sprite.png") no-repeat -135px -3px;}

</style>
