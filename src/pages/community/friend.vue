<template>
  <div class="friendWrap">
    <div class="friendCon">
      <div class="myCircle">
        <img src="../../assets/images/1.png" alt="">
      </div>
      <div class="recommendCircle">
        <div class="recommendTop">
          <span></span>推荐圈子<span></span>
        </div>
        <FriendBox v-for="item in friendlist"
                   :img="item.img"
                   :under="item.under"
                   :hot="item.hot"
                   :person="item.person" :key="item.key"></FriendBox>
      </div>
    </div>
  </div>

</template>

<script>
  import {getFriendList} from "../../api/api.js";
  import FriendBox from '../../components/friendbox.vue'
    export default {
        name: "friend",
        components: {
          FriendBox
        },
        data: function () {
          return {
            friendlist: []
          }
        },
      mounted: function () {
        var friendArr = {};
        var This = this;
        getFriendList(friendArr).then(function (res) {
          This.friendlist = res;
          console.log(This.friendlist);
        });
      }
    }
</script>

<style scoped>
  .friendWrap{width: 100%;height: auto;margin-top:96px;margin-bottom: 64px;
    background-color: #f1f5f4;}
  .friendCon{padding: 10px;}

  .myCircle img{width: 100%;}

  .recommendCircle{width: 100%;margin-top: 15px;background-color: #fff;}
  .recommendCircle .recommendTop{font-size: 16px;font-weight: bold;display: block;
    margin: 0 auto;height: 25px;line-height: 25px;width:35%;}
  .recommendCircle .recommendTop span{width: 13px;height: 2px;background-color: #000;
    display: inline-block;vertical-align: middle;margin: 0 5px;}

</style>
