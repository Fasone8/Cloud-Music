<template>
    <nav>
        <h2>歌曲：{{id}}</h2>

        <!--    成功获取歌曲数据-->
        <div v-for="(item,index) of songs" :key="index" class="song" @click="start(item.id)">
            <span>{{index+1}}</span>

            <div>
<!--                <p>{{item.id}}</p>-->
                <span>{{item.name}}</span>
                <div>
                    <span v-for="name in item.ar">{{name.name}}</span>
                    &nbsp-&nbsp
                    <span>{{item.al.name}}</span>
                </div>
                <div v-if="item.mv!==0" style="color: red">mv</div>
                <input type="button" value="更多">
            </div>
        </div>
    </nav>
</template>

<script>
    import {getPlaylistSongs} from '../../api'


    export default {
        name: "PlaylistSongs",
        components:{

        },
        data() {
            return {
                id: this.$route.query.query,
                songs: [],
            }
        },
        methods: {
            start(query) {
                console.log(query)
                this.$store.dispatch('getPlaylistSongsUrl', query)
            }
        },
        mounted() {
            getPlaylistSongs(`/playlist/track/all?id=${this.id}`).then(
                response => {
                    console.log(response.data.songs)
                    this.songs = response.data.songs
                }
            );
        }
    }
</script>

<style scoped>
    nav {
        width: 100vw;
        height: 100vh;
        overflow: auto;
        scrollbar-width: none;
        position: absolute;
        z-index: 20;
    }

    nav::-webkit-scrollbar {
        display: none
    }
</style>