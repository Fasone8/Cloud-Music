<template>
    <nav>
    <h2>搜索</h2>
    <input type="text" v-model="message">
    <input type="button" value="搜索" @click="search">
    <div v-for="(item,index) of $store.state.result" :key="index" class="song" @click="start(item.id)">
        <span>{{index+1}}</span>
        <div>
            <span>{{item.name}}</span>
            <div>
                <span v-for="name in item.ar">{{name.name}}</span>
                &nbsp-&nbsp
                <span>{{item.al.name}}</span>
            </div>
            <div v-if="item.mv!==0" style="color: red">mv</div>
            <input type="button" value="更多">
            <hr>
        </div>
    </div>
    </nav>
</template>

<script>
    export default {
        name: "SearchView",
        data(){
            return{
                message:'',
            }
        },
        methods:{
            search(){
                this.$store.dispatch('getSearch',this.message)
            },
            start(query) {
                this.$store.dispatch('getPlaylistSongsUrl', query)
            }
        }
    }
</script>

<style scoped>
    nav {
        width: 100vw;
        height: 100vh;
        overflow: auto;
        scrollbar-width: none;
        background: lightgrey;
        position: absolute;
        z-index: 20;
    }

    nav::-webkit-scrollbar {
        display: none
    }</style>