<template>
    <header>
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <router-link to="/search-view">
                <slot name="center"></slot>
            </router-link>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </header>
</template>

<script>
    export default {
        name: "HeaderCom"
    }
</script>

<style scoped>
    header {
        display: flex;
        width: 100%;
        height: 50px;
        overflow: hidden;
    }

    .left {
        /*flex: 0;*/
        width: 50px;
        height: 50px;
        text-align: center;
    }

    .center {
        flex: 1;
    }

    .right {
        /*flex: 0;*/
        width: 50px;
        height: 50px;
        text-align: center;

    }
</style>