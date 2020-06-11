<template>
  <div class="runWrap">
    <div class="runCon">
      <RunBox v-for="item in runlist"
              :img="item.img"
              :con="item.con"
              :red="item.red"
              :num="item.num"
              :key="item.key"></RunBox>
    </div>
  </div>
</template>

<script>
  import {getRunList} from "../../api/api.js";
  import RunBox from '../../components/runbox.vue'
    export default {
      name: "run",
      components: {
        RunBox
      },
      data: function () {
        return {
          runlist: []
        }
      },
      mounted: function () {
        var runArr = {};
        var This = this;
        getRunList(runArr).then(function (res) {
          This.runlist = res;
          console.log(This.runlist);
        });
      }
    }
</script>

<style scoped>
  .runWrap{width: 100%;height: auto;margin-top:96px;margin-bottom: 64px;
    background-color: #f1f5f4;}
  .runCon{padding: 10px;}

</style>
