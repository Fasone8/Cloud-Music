<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item of banners" :key="item.targetId">
                <img :src="item.imageUrl" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import {getBanner} from "@/api";

    export default {
        name: "FaXianSwiperOne",
        data() {
            return {
                banners: []
            }
        },

        mounted() {//挂载之后才有dom
            getBanner('/banner')
                .then(response=>{
                    this.banners=response.data.banners
                })
        },
        updated() {
            new Swiper('.swiper-container', {
                autoplay: true,
                loop:true,
            })
        },
        methods: {

        }
    }
</script>

<style scoped>
    .swiper-slide>img{
        width: 100%;

    }
    .swiper-slide{
        width: 100% !important;
    }
    .swiper-container{
        width: 94%;
        border-radius: 10px;

    }
</style>