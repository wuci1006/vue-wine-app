<template>
    <div class="login">
        <h1 @click="goto">login</h1>
    </div>
</template>

<script>

export default {
    
    methods: {
        goto(){
            this.$router.push({ path: "home" });
        }
    },
};
</script>

<style>

</style>
