import axios from "axios";

const baseURL = 'http://127.0.0.1:3000'

export function getBanner(query) {//获取轮播图，已成功
    return axios.get(`${baseURL}${query}`)
}

export function getPersonalized(query) {//获取8个推荐歌单，已成功
    return axios.get(`${baseURL}${query}`)
}
export function getHotPlaylist(query) {
    return axios.get(`${baseURL}${query}`)
}
export function getPlaylistSongs(query) {
    return axios.get(`${baseURL}${query}`)
}
export function getLogin(query) {
    return axios.get(`${baseURL}${query}`)
}
export function getPlaylistSongsUrl(query) {
    return axios.get(`${baseURL}${query}`)
}
export function getSearch(query) {
    return axios.get(`${baseURL}${query}`)
}