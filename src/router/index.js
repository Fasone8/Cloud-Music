import {createRouter, createWebHistory} from 'vue-router'
import FaXianView from "../views/FaXianView.vue";


const BoKeView = () => import('../views/BoKeView.vue')
const ProfileView = () => import('../views/ProfileView.vue')
const GuanZhuView = () => import('../views/GuanZhuView.vue')
const YunCunView = () => import('../views/YunCunView.vue')

const PlaylistSongsView=()=>import('../views/songs/PlaylistSongsView.vue')

const TingTing = () => import   ("../views/boke/TingTing.vue");
const TuiJian = () => import   ("../views/boke/TuiJian.vue");
const GuShi = () => import   ("../views/boke/GuShi.vue");

const ReMen = () => import('../views/boke/tingting/ReMen.vue')
const JingXuan = () => import('../views/boke/tingting/JingXuan.vue')


const DailyView = () => import('../views/DailyView.vue')
const SearchView = () => import('../views/SearchView.vue')
const PrivateView = () => import('../views/PrivateView.vue')
const SongSheetView = () => import('../views/SongSheetView.vue')
const RankingView = () => import('../views/RankingView.vue')
const SongRoomView = () => import('../views/SongRoomView.vue')
const AlbumView = () => import('../views/AlbumView.vue')
const AudioView = () => import('../views/AudioView.vue')
const NewsSongView = () => import('../views/NewsSongView.vue')
const LiveView = () => import('../views/LiveView.vue')
const GamesView = () => import('../views/GamesView.vue')


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'faxian',
            component: FaXianView
        },
        {
            path: '/playlist-songs',
            name: 'playlist-songs',
            component: PlaylistSongsView
        },
        {
            path: '/boke-view',
            name: 'boke',
            component: BoKeView,
            children: [
                /*{
                    path:'',
                    redirect:'/boke-view/tui-jian'
                    //重定向
                },*/
                {
                    path: 'ting-ting',
                    component: TingTing,
                    children: [
                        {
                            path:'',
                            redirect:'/boke-view/ting-ting/jing-xuan'
                            //重定向
                        },
                        {
                            path: 're-men',
                            component: ReMen
                        },
                        {
                            path:'jing-xuan',
                            component:JingXuan
                        }
                    ]
                },
                {
                    path: '',
                    component: TuiJian
                },
                {
                    path: 'gu-shi',
                    component: GuShi
                }
            ]
        },
        {
            path: '/profile-view',
            name: 'profile',
            component: ProfileView
        },
        {
            path: '/guanzhu-view',
            name: 'guanzhu',
            component: GuanZhuView
        },
        {
            path: '/yuncun-view',
            name: 'yuncun',
            component: YunCunView
        },
        {
            path: '/daily-View',
            name: 'daily',
            component: DailyView
        },
        {
            path: '/search-View',
            name: 'search',
            component: SearchView
        },
        {
            path: '/private-View',
            name: 'private',
            component: PrivateView
        },
        {
            path: '/song-sheet-View',
            name: 'song-sheet',
            component: SongSheetView
        },
        {
            path: '/ranking-View',
            name: 'ranking',
            component: RankingView
        },
        {
            path: '/song-room-View',
            name: 'song-room',
            component: SongRoomView
        },
        {
            path: '/album-View',
            name: 'album',
            component: AlbumView
        },
        {
            path: '/audio-View',
            name: 'audio',
            component: AudioView
        },
        {
            path: '/news-song-View',
            name: 'news-song',
            component: NewsSongView
        },
        {
            path: '/live-View',
            name: 'live',
            component: LiveView
        },
        {
            path: '/games-View',
            name: 'games',
            component: GamesView
        }
    ]
})

export default router
