import {createStore} from "vuex";
import axios from "axios";
import {getLogin} from '../src/api'
import {getPlaylistSongsUrl} from '../src/api'
import {getSearch} from '../src/api'

const store = createStore({
    state: {
        playlist: [{
            al: {
                name: '分分钟需要你',
                id: '143304781',

            },
            ar: {
                id: 1937096193,
                name: '分分钟需要你'
            }

        }],
        palyCurrentIndex: 0,
        user: null,
        url: null,
        result: null
    },
    getters: {},
    mutations: {
        login(state, user) {
            state.user = user
        },
        playlistSongsUrl(state, url) {
            state.url = url
        },
        search(state, result) {
            state.result = result
        }
    },
    actions: {
        login(context, user) {
            getLogin(`/login/cellphone?phone=${user.phone}&password=${user.password}`)
                .then(response => {
                    console.log(response.data)
                    context.commit('login', response.data)
                })
        },
        playlistSongsUrl(context, query) {
            getPlaylistSongsUrl(`/song/url/v1?id=${query}&level=exhigh`)
                .then(response => {
                        console.log(response.data.data)
                        context.commit('getPlaylistSongsUrl', response.data.data)
                    }
                )
        },
        search(context, message) {
            getSearch(`/search?keywords=${message}`)
                .then(response => {
                        console.log(response.data.result.songs)
                        context.commit('getSearch', response.data.result.songs)
                    }
                )
        }
    }
})

export default store