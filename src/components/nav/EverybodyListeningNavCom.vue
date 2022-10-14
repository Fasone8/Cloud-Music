<template>
    <nav>
        <input type="button" value="刷新" @click="xunHuan">
        <div v-for="(item,index) in everybodyListening" :key="index">
            <div v-if="index===i" style="display: none">{{id=item.id}}</div>
            <h3 v-if="index===i&&item.tags.includes('华语')">温柔岁月的华语情怀</h3>
            <h3 v-else-if="index===i&&item.tags.includes('欧美')">欧美流行精选</h3>
            <h3 v-else-if="index===i&&item.tags.includes('粤语')">不可错过的粤语金曲</h3>
            <h3 v-else-if="index===i&&item.tags.includes('日语')">好听的日语歌曲精选</h3>
            <h3 v-else-if="index===i">好听的{{item.tags[0]}}歌曲推荐</h3>
        </div>
        <div>
            <h6>播放</h6>
        </div>
    </nav>
    <div class="nav" v-for="(item,index) in songs" :key="index" @click="start(item.id)">
        <img :src="item.al.picUrl" alt="">
        <span>{{item.name}}</span>
        <span class="singer" v-for="name in item.ar">-<span>{{name.name}}&nbsp</span></span>
        <div v-if="item.mv!==0" style="background: red">mv</div>
    </div>
    <!--6歌单 index 12歌曲-->
    <!--@点击-->
    <!--watch 12-->
</template>

<script>
    import {getHotPlaylist} from '../../api'
    import {getPlaylistSongs} from '../../api'

    export default {
        name: "EverybodyListeningNavCom",
        data() {
            return {
                i: 0,
                id: '',
                everybodyListening: [],
                songs: []
            }
        },
        methods: {
            xunHuan() {
                this.i < 5 ? this.i++ : this.i = 0
            },
            start(query) {
                this.$store.dispatch('getPlaylistSongsUrl', query)
            }
        },
        mounted() {
            getHotPlaylist('/top/playlist?limit=6').then(
                response => {
                    console.log(response.data.playlists)
                    this.everybodyListening = response.data.playlists
                    //获取歌单，展示6个   √
                    //三元运算符显示标题  √
                    //获取歌曲
                }
            );

        },
        updated() {
            getPlaylistSongs(`/playlist/track/all?id=${this.id}&limit=12`).then(
                response => {
                    this.songs = response.data.songs
                }
            )
        }
    }
</script>

<style scoped>
    nav {
        display: flex;
        height: 100%;
        text-align: center;
        width: 100vw
    }

    nav input {
        height: 100%;
        margin: auto 3%;
    }

    nav h6 {
        position: absolute;
        right: 3%;
    }

    .nav {
        width: 298px;
        display: flex;
        overflow: auto;
        margin-left: 3%;
        position: relative;
    }

    .nav > img {
        width: 50px;
        height: 50px;
        border-radius: 5px
    }

    .nav span {
        flex: 1;
        text-align: center;
        margin: auto 0;
        /*max-width: 70vw;*/
        overflow: hidden;
        /*text-overflow: ellipsis;*/
        white-space: nowrap;
    }

    .singer {
        font-size: 12px;
        color: lightgrey;
    }

    .nav div {
        width: 25px;
        height: 25px;
        margin: auto 0;
        position: absolute;
        right: 7%;
        top: 12.5px;
    }
</style>