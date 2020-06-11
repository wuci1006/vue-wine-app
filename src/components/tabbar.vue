<template>
  <div class="tabbarWrap">

    <Item txt="首页" mark="home" :sel="selected" @c="getValue">
        <img src="../assets/tabimg/icon_tab_home.png" alt="" slot="slot1">
        <img src="../assets/tabimg/icon_tab_home_checked.png" alt="" slot="slot2">
    </Item>

    <Item txt="分类" mark="category" :sel="selected" @c="getValue">
        <img src="../assets/tabimg/icon_tab_category.png" alt="" slot="slot1">
        <img src="../assets/tabimg/icon_tab_category_checked.png" alt="" slot="slot2">
    </Item>

    <Item txt="社区" mark="community" :sel="selected" @c="getValue">
        <img src="../assets/tabimg/icon_tab_community.png" alt="" slot="slot1">
        <img src="../assets/tabimg/icon_tab_community_checked.png" alt="" slot="slot2" class="img1">

    </Item>

    <Item txt="购物车" mark="cart" :sel="selected" @c="getValue">
        <img src="../assets/tabimg/icon_tab_cart.png" alt="" slot="slot1">
        <img src="../assets/tabimg/icon_tab_cart_checked.png" alt="" slot="slot2">
    </Item>

    <Item txt="我的酒仙" mark="mine" :sel="selected" @c="getValue">
        <img src="../assets/tabimg/icon_tab_usercenter.png" alt="" slot="slot1">
        <img src="../assets/tabimg/icon_tab_usercenter_checked.png" alt="" slot="slot2">
    </Item>

  </div>

</template>

<script>
  import Item from '../components/item.vue'
    export default {
        name: "tabbar",
        components:{
          Item
        },
        data:function () {
          return{
            selected:"home"
          }
        },
        methods:{
          getValue:function (v) {
            this.selected = v;
          }
        }
    }
</script>

<style scoped>
  .tabbarWrap{width: 100%;height: 64px;line-height: 64px;
    position: fixed;bottom: 0;background-color: #fff;
    border-top: 1px solid #ccc;z-index: 999;}


</style>
