<template>
     <h2>博客界面</h2>
     <router-link to="/boke-view/ting-ting">听听</router-link>
     <router-link to="/boke-view">推荐</router-link><!--     跳转之后默认跳转到推荐页面-->
     <router-link to="/boke-view/gu-shi">故事</router-link>
     <router-view/>
</template>

<script>
    export default {
        name: "BoKeView"
    }
</script>

<style scoped>

</style>