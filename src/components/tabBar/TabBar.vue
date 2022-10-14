<template>
    <PlayCom/>
    <ul>

        <li>
            <router-link to="/">
                <svg class="icon" v-if="$route.path!=='/'">
                    <use xlink:href="#icon-wangyiyunyinyuemusic1193417easyiconnet"></use>
                </svg>
                <svg class="icon" v-else>
                    <use xlink:href="#icon-wangyiyunyinyuemusic1193417easyiconnet-copy"></use>
                </svg>
                发现
            </router-link>
        </li>
        <li>
            <router-link to="/boke-view">
                <svg class="icon" v-if="$route.path.indexOf('/boke-view')!==0">
                    <!--跳转子路由图标变色 indexOf判断字符串值在字符串中首次出现的位置-->
                    <use xlink:href="#icon-faxian"></use>
                </svg>
                <svg class="icon" v-else>
                    <use xlink:href="#icon-faxian-copy"></use>
                </svg>

                播客
            </router-link>
        </li>
        <li>
            <router-link to="/profile-view">
                <svg class="icon" v-if="$route.path!=='/profile-view'">
                    <use xlink:href="#icon-yinle"></use>
                </svg>
                <svg class="icon" v-else>
                    <use xlink:href="#icon-yinle-copy"></use>
                </svg>

                我的
            </router-link>
        </li>
        <li>
            <router-link to="/guanzhu-view">
                <svg class="icon" v-if="$route.path!=='/guanzhu-view'">
                    <use xlink:href="#icon-weibiaoti--"></use>
                </svg>
                <svg class="icon" v-else>
                    <use xlink:href="#icon-weibiaoti---copy"></use>
                </svg>
                关注
            </router-link>
        </li>
        <li>
            <router-link to="/yuncun-view">
                <svg class="icon" v-if="$route.path!=='/yuncun-view'">
                    <use xlink:href="#icon-duihua"></use>
                </svg>
                <svg class="icon" v-else>
                    <use xlink:href="#icon-duihua-copy"></use>
                </svg>
                云村
            </router-link>
        </li>
    </ul>
</template>

<script>
import PlayCom from "./PlayCom.vue";
    export default {
        name: "TabBar",
        components: {
            PlayCom
        }
    }
</script>

<style scoped>
    ul {
        width: 100%;
        height: 50px;
        background: white;
        display: flex;
        justify-content: space-around;
        position: fixed;
        bottom: 0;
        padding-top: 3px;
        z-index: 10;
    }

    li {
        height: 100%;
        width: 50px;
        text-align: center;
        font-size: 12px;
    }

    li svg {
        width: 35px;
        height: 30px;
    }

    a {
        color: lightgrey
    }

    a.router-link-active {
        color: #d81e06;
    }
</style>