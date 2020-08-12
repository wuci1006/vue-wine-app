<template>
    <div class="my_product">
        <div class="product_wrap" v-for="i in productData" :key="i.id">
            <div class="product_box">
                <img :src="i.img" alt="" />
                <span class="span1">{{ i.con }}</span>
                <span class="span2">{{ i.red }}</span>
                <span class="span3">{{ i.black }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        productData:Array
    }
};
</script>

<style scoped>
.my_product {
    width: 100%;
    column-count: 2;
    column-gap: 8px;
}
.product_wrap {
    background-color: #fff;
    margin-bottom: 8px;
}

.product_box {
    padding: 5px 10px;
    display: block;
}
.product_box img {
    width: 100%;
}

.product_box span {
    font-size: 12px;
    color: #252525;
}
.product_box span.span1 {
    height: 32px;
    line-height: 16px;
    overflow: hidden;
    display: block;
}
.product_box span.span2 {
    color: indianred;
    text-align: left;
}
.product_box span.span3 {
    text-decoration: line-through;
}
</style>
