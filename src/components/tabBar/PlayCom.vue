<template>

    <div v-for="audio in $store.state.url" :key="audio.id">
        <div class="control">
            <p style="display: none">{{name=audio.id}}</p>
            <p v-for="item in song" style="color: yellow">{{item.name}}</p>
            <input type="button" value="播放" @click="play">
            <input type="button" value="暂停" @click="pause">
            <input type="button" value="播放列表">
        </div>
        <audio id="audio" ref="audio" :src="audio.url"></audio>
        <!--    获取到歌曲url，但是感觉很对，30s是vip歌曲-->
    </div>
</template>

<script>
    import {getPlaylistSongs} from '../../api'
    export default {
        name: "PlayCom",
        data() {
            return {
                name:'',
                song:[]
            }
        },
        methods: {
            play() {
                // var audio = document.querySelector('#audio');
                // audio.play();
                this.$refs.audio[0].play()
            },
            pause() {
                // var audio = document.querySelector('#audio');
                //     audio.pause();
                this.$refs.audio[0].pause()
            }
        },
        updated() {
            getPlaylistSongs(`/song/detail?ids=${this.name}`).then(
                response=>{
                    // console.log(response.data.songs)
                    this.song=response.data.songs
                }
            )
        }

    }
</script>

<style scoped>
    .control {
        position: fixed;
        bottom: 50px;
        padding-top: 3px;
        z-index: 30;
    }
</style>