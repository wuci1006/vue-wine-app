<template>
    <div class="itemWrap" @click="changePage()">
        <span v-show="!bol"><slot name="slot1"></slot></span>
        <span v-show="bol"><slot name="slot2"></slot></span>
        <p :class="{red:bol}">{{txt}}</p>
    </div>
</template>

<script>
    export default {
        name: "item",
        props:["txt","mark","sel"],
        computed:{
            bol:function () {
                if(this.mark == this.sel){
                  return true
                }
                else{
                  return false
                }
            }
        },
        methods:{
          changePage:function () {
            this.$emit("c",this.mark)
            this.$router.push('/' + this.mark)
          }
        }
    }
</script>

<style scoped>
.itemWrap{width: 20%;float: left;z-index: 999;}
.itemWrap img{width:80px; }
.itemWrap span{width:100%;height:100%;display:inline-block;position: relative;}
/*.itemWrap img.img1{width: 70px;position: absolute;left:0;right:0;bottom: 0;}*/
.itemWrap p{font-size: 12px;color: #666;}
.itemWrap p.red{color: red;}
</style>
