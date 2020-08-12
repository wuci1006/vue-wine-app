<template>
    <div class="tabbar_list" @click="handleTabChange()">
        <span v-show="!bol"><slot name="slot1"></slot></span>
        <span v-show="bol"><slot name="slot2"></slot></span>
        <!-- <p :class="{ red: bol }">{{ tabTxt }}</p> -->
    </div>
</template>

<script>
export default {
    props:{
        tabTxt:String,
        tabMark:String,
        tabSelected:String,
    },
    computed: {
        bol() {
            if (this.tabMark == this.tabSelected) {
                return true;
            } else {
                return false;
            }
        },
    },
    methods: {
        handleTabChange() {
            this.$emit("selectedChange", this.tabMark);
            this.$router.push("/" + this.tabMark);
        },
    },
};
</script>

<style scoped>
.tabbar_list {
    /* float:left; */
    /* width:25%; */
    height:100%;
    flex:1;
}
.tabbar_list img {
    width: 100%;
    height:100%;
    display: block;
}
.tabbar_list span {
    width:100%;
}
.tabbar_list p {
    font-size: 1.2rem;
    color: #666;
}
.tabbar_list p.red {
    color: red;
}
</style>
