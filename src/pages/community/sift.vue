<template>
  <div class="siftWrap">
    <div class="siftCon">
      <SiftBox v-for="item in siftlist"
               :img1="item.img1"
               :tit="item.tit"
               :time="item.time"
               :tet="item.tet"
               :com="item.com"
               :img2="item.img2"
               :num1="item.num1"
               :num2="item.num2" :key="item.key"></SiftBox>
    </div>
  </div>

</template>

<script>
  import SiftBox from '../../components/siftbox.vue'
  import {getSiftList} from "../../api/api";
  export default {
        name: "sift",
        components:{
          SiftBox
        },
        data: function () {
          return {
            siftlist: []
          }
        },
        mounted: function () {
          var siftArr = {};
          var This = this;
          getSiftList(siftArr).then(function (res) {
            This.siftlist = res;
            console.log(This.siftlist);
          });
        }
    }
</script>

<style scoped>
  .siftWrap{width: 100%;height: auto;margin-top:96px;margin-bottom: 64px;
    background-color: #f1f5f4;}
  .siftCon{padding: 10px;}

</style>
