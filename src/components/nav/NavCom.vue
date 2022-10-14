<template>
    <nav>
        <ul>
            <li>
                <router-link to="/daily-View">
                    <svg class="icon">
                        <use xlink:href="#icon-rili"></use>
                    </svg>
                    <span>每日推荐</span>
                </router-link>
            </li>
            <li>
                <router-link to="/private-View">
                    <svg class="icon">
                        <use xlink:href="#icon-diantai"></use>
                    </svg>
                    <span>私人FM</span>
                </router-link>
            </li>
            <li>
                <router-link to="/song-sheet-View">
                    <svg class="icon">
                        <use xlink:href="#icon-zhuanji"></use>
                    </svg>
                    <span>歌单</span>
                </router-link>
            </li>
            <li>
                <router-link to="/ranking-View">
                    <svg class="icon">
                        <use xlink:href="#icon-phb"></use>
                    </svg>
                    <span>排行榜</span>
                </router-link>
            </li>
            <li>
                <router-link to="/audio-View">
                    <svg class="icon">
                        <use xlink:href="#icon-ai-book"></use>
                    </svg>
                    <span>有声书</span>
                </router-link>
            </li>
            <li>
                <router-link to="/album-View">
                    <svg class="icon">
                        <use xlink:href="#icon-zhuanji"></use>
                    </svg>
                    <span>数字专辑</span>
                </router-link>
            </li>
            <li>
                <router-link to="/live-View">
                    <svg class="icon">
                        <use xlink:href="#icon-liveshipinzhibo"></use>
                    </svg>
                    <span>直播</span>
                </router-link>
            </li>
            <li>
                <router-link to="/news-song-View">
                    <svg class="icon">
                        <use xlink:href="#"></use>
                    </svg>
                    <span>新歌推荐</span>
                </router-link>
            </li>
            <li>
                <router-link to="/song-room-View">
                    <svg class="icon">
                        <use xlink:href="#icon-xingxing"></use>
                    </svg>
                    <span>歌房</span>
                </router-link>
            </li>
            <li>
                <router-link to="/games-View">
                    <svg class="icon">
                        <use xlink:href="#icon-youxi"></use>
                    </svg>
                    <span>游戏专区</span>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "NavCom"
    }
</script>

<style scoped>
    nav {
        width: 94%;
        height: 80px;
        margin: 0 auto;
        border: 1px solid;
        overflow-x: auto;
        overflow-y: hidden;
        scrollbar-width: none
    }

    nav::-webkit-scrollbar {display: none}

    nav > ul {
        width: 690px;
        height: 100%;
        display: flex;
        justify-content: space-around;
    }
    nav li{
        width: 50px;
        height: 45px;
        margin-top: 15px;
        text-align: center;
    }
    nav li svg{
        width: 100%;
        height: 80%;
        top: 0;
    }
    nav li span{
        height: 20%;
        font-size: 12px;
        flex-wrap: nowrap;
        color: lightgrey;

    }

</style>