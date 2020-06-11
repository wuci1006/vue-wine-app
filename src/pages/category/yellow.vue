<template>
  <div class="yellowWrap">
    <div class="yellowCon">
      <TitleBox text1="啤酒品牌" text2="全部品牌  >"></TitleBox>
      <Third>
        <ul slot="thd">
          <li><a href=""><img src="../../assets/cate/img4/4_03.gif" alt=""><p>青岛</p></a></li>
          <li><a href=""><img src="../../assets/cate/img4/4_05.gif" alt=""><p>瓦伦丁</p></a></li>
          <li><a href=""><img src="../../assets/cate/img4/4_07.gif" alt=""><p>嘉士伯</p></a></li>
          <li><a href=""><img src="../../assets/cate/img4/4_12.gif" alt=""><p>雪花</p></a></li>
          <li><a href=""><img src="../../assets/cate/img4/4_13.gif" alt=""><p>艾丝伯爵</p></a></li>
          <li><a href=""><img src="../../assets/cate/img4/4_14.gif" alt=""><p>费尔德堡</p></a></li>
          <div class="clear"></div>
        </ul>
      </Third>
      <TitleBox text1="养生酒" text2="全部品牌  >"></TitleBox>
      <Third>
        <ul slot="thd">
          <li><a href=""><img src="../../assets/cate/img4/4_18.gif" alt=""><p>椰岛</p></a></li>
          <li><a href=""><img src="../../assets/cate/img4/4_19.gif" alt=""><p>竹叶青</p></a></li>
          <li><a href=""><img src="../../assets/cate/img4/4_20.gif" alt=""><p>劲酒</p></a></li>
          <div class="clear"></div>
        </ul>
      </Third>
      <TitleBox text1="黄酒" text2="全部品牌  >"></TitleBox>
      <Third>
        <ul slot="thd">
          <li><a href=""><img src="../../assets/cate/img4/4_20.gif" alt=""><p>古越龙山</p></a></li>
          <div class="clear"></div>
        </ul>
      </Third>
    </div>
  </div>
</template>

<script>
  import TitleBox from '../../components/titlebox.vue'
  import Third from '../../components/third.vue'
  export default {
    name: "yellow",
    components:{
      TitleBox,
      Third
    }
  }
</script>

<style scoped>
  ul,li{list-style: none;}
  .clear{clear:both;}
  .yellowWrap{width: 80%;height: auto;position: absolute;
    top:48px;left:20%;margin-bottom: 64px;}
  .yellowCon{padding:0 10px ;height: 100%;}
  .yellowCon ul li a img{width: 70%;display: block;margin: 0 auto;}
</style>
