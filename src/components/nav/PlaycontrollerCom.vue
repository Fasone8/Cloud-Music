<template>
    <div class="playcontroller">
        <div class="left">
            <div class="songname">
                <span>{{$store.state.playlist[$store.state.palyCurrentIndex].al.name}}</span>
                <div class="arthor">
                    <span>{{$store.state.playlist[$store.state.palyCurrentIndex].ar.name}}</span>
                </div>
                <audio :src="` https://music.163.com/song/media/outer/url?id=${$store.state.playlist[$store.state.palyCurrentIndex].ar.id}.mp3`"
                       controls></audio>
            </div>

        </div>

    </div>
</template>

<script>
    import {useStore} from 'vuex'
    // import {getPlaying} from "../../api";
    import store from "../../../store";

    export default {
        name: "Playcontroller",
        data() {
            return {
                song: ''
            }
        },
        setup() {
            const store = useStore()
            // console.log(store);
            return {store}
        },
        mounted() {

        }
    }
</script>

<style scoped>
    .playcontroller {
        /*background: #d81e09;*/
        width: 100%;
        position: fixed;
        bottom: 50px;
    }

    audio {
        width: 100%;
    }

</style>