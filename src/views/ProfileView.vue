<template>
    <h2>我的界面</h2>
    <div>
        <input type="text" v-model="user.phone">
        <br>
        <input type="password" v-model="user.password">
        <br>
        <input type="button" value="登录" @click="login">
    </div>
    <p>{{$store.state.user}}</p>
</template>

<script>
    export default {
        name: "ProfileView",
        data(){
            return{
                user:{
                    phone:'',
                    password:''
                }
            }
        },
        methods:{
            login(){
                this.$store.dispatch('login',this.user)
            }
        }
    }
</script>

<style scoped>

</style>