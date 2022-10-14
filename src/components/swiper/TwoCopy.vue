<template>
    <li >
        <div class="swiper-container swiper2">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item of playlists" :key="item.targetId" @click="songsJump(item.id)">
                    <img :src="item.picUrl" alt="">
                    <span>{{item.name}}</span>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
    import Swiper from "swiper";

    export default {
        name: "TwoCopy",
        props:['playlists'],
        updated() {
            new Swiper('.swiper2', {
                autoplay: true,
                loop:true,
                direction: 'vertical'
            })
        },
        methods:{
            songsJump(query){
                this.$router.push(`/playlist-songs?query=${query}`)
            }
        },
    }
</script>

<style scoped>
    li {
        width: 75px;
        margin-top: 15px;
        overflow: hidden;
    }
    li img{
        width: 100%;
        height: 75px;
        border-radius: 5px;
    }
    li span{
        font-size: 12px;
        color: #808080;
        display: -webkit-box; /*弹性伸缩盒子模型显示*/
        -webkit-box-orient: vertical; /*排列方式*/
        -webkit-line-clamp: 3; /*行数*/
        overflow: hidden;
    }
</style>