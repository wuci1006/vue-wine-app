<template>
    <div class="my_cell">
        <span class="cell_left">{{ leftText }}</span>
        <span class="cell_right">{{ rightText }}</span>
        <i>></i>
    </div>
</template>

<script>
export default {
    props:{
        leftText:String,
        rightText:String
    }
};
</script>

<style scoped>
.my_cell {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    position: relative;
    border-bottom:1px solid #e5e5e5;
}
.my_cell .cell_left {
    position: absolute;
    left: 10px;
    color: #333;
    font-weight: 600;
    font-size: 1.6rem;
}
.my_cell .cell_right {
    position: absolute;
    right: 25px;
    color: #c9c9c9;
    font-size: 1.4rem;
}
.my_cell i {
    position: absolute;
    right: 10px;
}

.line {
    border-bottom: 1px solid #f1f1f1;
    margin-top: 10px;
}
</style>
