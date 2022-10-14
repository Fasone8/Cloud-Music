<template>
    <div>
        <h3>推荐歌单</h3>
        <h6>更多></h6>
    </div>
    <nav>
        <ul>
            <TwoCopy :playlists="playlistsOne"/>
            <li v-for="item of playlistsTwo" :key="item.trackCount" @click="songsJump(item.id)">
                <img :src="item.picUrl" alt="">
                <span>{{item.name}}</span>
            </li>
        </ul>
    </nav>
</template>

<script>
    import {getPersonalized} from "../../api";
    import TwoCopy from "./TwoCopy.vue";

    export default {
        name: "RecommendedPlaylist",
        components: {
            TwoCopy
        },
        data() {
            return {
                playlists: [],
            }
        },
        methods:{
            songsJump(query){
                this.$router.push(`/playlist-songs?query=${query}`)//传输歌单的id到歌曲界面
            }
        },
        computed: {
            playlistsOne() {
                return this.playlists.slice(0, 3)
            },
            playlistsTwo() {
                return this.playlists.slice(3, 8)
            }
        },
        mounted() {
            getPersonalized('/personalized?limit=8').then(
                response => {
                    console.log(response.data.result)//获取歌单
                    this.playlists = response.data.result
                }
            );
        }
    }
</script>

<style scoped>
    div {
        display: flex;
    }

    div > h3 {
        margin-left: 3%;
    }

    div > h6 {
        position: absolute;
        right: 3%;
    }

    nav {
        width: 94%;
        height: 145px;
        margin: 0 auto;
        overflow: auto;
        scrollbar-width: none
    }

    nav::-webkit-scrollbar {
        display: none
    }

    nav > ul {
        width: 700px;
        height: 100%;
        display: flex;
        justify-content: space-around;
    }

    nav > ul > li {
        width: 75px;
        margin-top: 15px;
        overflow: hidden;
    }

    nav > ul > li img {
        width: 100%;
        height: 75px;
        border-radius: 5px;
    }

    nav > ul > li span {
        font-size: 12px;
        color: #808080;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
    }

</style>