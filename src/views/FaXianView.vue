<template>
    <HeaderCom>
        <template v-slot:left>
            <svg class="icon">
                <use xlink:href="#icon-danlieliebiao"></use>
            </svg>
        </template>
        <template v-slot:center>
            <div class="searchBtn">
                <svg class="icon">
                    <use xlink:href="#icon-sousuo"></use>
                </svg>
                <span> 薛之谦</span>
            </div>
        </template>
        <template v-slot:right>
            <svg class="icon">
                <use xlink:href="#icon-record-sound-full"></use>
            </svg>
        </template>
    </HeaderCom>
    <FaXianSwiperOne/>
    <NavCom></NavCom>
    <RecommendedPlaylist/>
    <EverybodyListeningNavCom/>
    <router-view></router-view>
    <div class="foot"></div>
</template>

<script>
    import HeaderCom from "../components/header/HeaderCom.vue";
    import FaXianSwiperOne from "../components/swiper/FaXianSwiperOne.vue";
    import RecommendedPlaylist from "../components/swiper/RecommendedPlaylist.vue";
    import NavCom from "../components/nav/NavCom.vue";
    import EverybodyListeningNavCom from "../components/nav/EverybodyListeningNavCom.vue";

    export default {
        name: "faXianView",
        components: {
            HeaderCom,FaXianSwiperOne,NavCom,RecommendedPlaylist,EverybodyListeningNavCom
        }
    }
</script>

<style scoped>
    .icon {
        width: 35px;
        height: 30px;
        margin-top: 10px;
    }

    .searchBtn {
        width: 100%;
        height: 30px;
        margin-top: 10px;
        text-align: center;
        background: #fff;
        border-radius: 15px;
        color: #a39494;
    }

    .searchBtn > .icon {
        width: 20px;
        height: 20px;
        margin-top: 5px;
        vertical-align: bottom;
    }

    .searchBtn > span {
        /*vertical-align: middle*/
    }
    .foot{height: 80px}
</style>