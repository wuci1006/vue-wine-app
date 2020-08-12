<template>
    <div class="my_activity">
        <div class="activity_box">
            <div class="activity_list" v-for="item in activityData" :key="item.key">
                <img :src="item.img" alt="" />
                <div class="activity_item clearfix">
                    <span class="pink"></span>
                    <span class="txt">{{ item.con }}</span>
                    <span class="grey">人气 {{ item.num }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        activityData:Array
    },
};
</script>

<style scoped>
.my_activity {
    width: 100%;
    height: auto;
    margin-top: 96px;
    margin-bottom: 64px;
    background-color: #f1f5f4;
}
.activity_box {
    padding: 10px;
}

.activity_list {
    width: 100%;
    margin: 15px 0;
    background-color: #fff;
}
.activity_list img {
    width: 100%;
    display: block;
}
.activity_list .activity_item {
    padding: 10px 0;
    width: 100%;
    height: 30px;
    line-height: 30px;
}
.activity_list .activity_item span.pink {
    width: 5px;
    height: 100%;
    background-color: pink;
    display: inline-block;
    vertical-align: middle;
}
.activity_list .activity_item span.txt {
    font-size: 1.6rem;
    font-weight: 500;
    margin-left: 10px;
}
.activity_list .activity_item span.grey {
    color: #666;
    float: right;
    margin-right: 5px;
}
</style>
