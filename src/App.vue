<template>
    <div id="app">
        <myTabbar></myTabbar>
        <router-view />
    </div>
</template>

<script>
import myTabbar from "./components/tabbar/myTabbar.vue";
export default {
    components: {
        myTabbar,
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
:root {
    --bgColor: #f6f6f6;
    --textColor: #333;
}

html {
    font-size: 10px;
}
body {
    font-size: 1.4rem;
    color: var(--textColor);
}

html,
body,
#app {
    height: 100%;
    background-color: var(--bgColor);
}

.clearfix:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
}

.clearfix {
    zoom: 1;
}

a {
    text-decoration: none;
    color:#333;
}

img {
    display: block;
}

ul,
li {
    list-style: none;
}
</style>
