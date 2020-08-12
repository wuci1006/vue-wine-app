<template>
    <div class="my_list">
        <ul class="list_wrap">
            <li class="list_box" v-for="(i,index) in listData" :key="index">
                <img :src="i.url" alt="" slot="listImg">
                <p slot="listTitle">{{i.title}}</p>
                <span slot="listText">{{i.text}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        listData:Array
    }
}
</script>

<style scoped>
.my_list{
    width:100%;
    background-color: #fff;
}
.list_wrap{
    display: flex;
}
.list_box{
    flex:1;
    padding:10px 0;
}
.list_box img{
    width:60%;
    margin:0 auto;
}
.list_box p{
    width: 100%;
    color: #333;
    text-align: center;
    line-height: 25px;
    font-size: 1.2rem;
}
.list_box span{
    width: 100%;
    color: #333;
    text-align: center;
    line-height: 25px;
    font-size: 1.2rem;
}
.mt {
    margin-top: 10px;
}
</style>
