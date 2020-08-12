<template>
    <ul class="content clearfix">
        <li v-for="j in contentData" :key="j.id">
            <img :src="j.url" alt="">
            <p>{{j.title}}</p>
        </li>
    </ul>
</template>

<script>
export default {
    props:{
        contentData:Array
    }
}
</script>

<style scoped>
.content{
    width:80%;
    position: absolute;
    top:48px;
    left:20%;
    height: auto;
    padding-bottom: 54px;
}
.content li{
    float: left;
    width:33.3%;
    padding:15px 0;
    text-align: center;
}
.content li img{
    width:60%;
    margin:0 auto;
}
.content li p{
    font-size:1.2rem;
    padding:10px 0;
}

</style>
