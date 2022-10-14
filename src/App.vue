<template>
    <router-view/>

    <!--    登录测试，已成功获取账号信息-->
    <PlaycontrollerCom/>
    <TabBar/>
</template>
<script>
    import TabBar from "./components/tabBar/TabBar.vue";
    import PlaycontrollerCom from "./components/nav/PlaycontrollerCom.vue";

    export default {
        components: {
            TabBar,
            PlaycontrollerCom
        },

    }
</script>
<style scoped>

</style>