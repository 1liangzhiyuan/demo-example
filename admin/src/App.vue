<template>
<div id="app">
    <!-- 有用户名显示首页，没有用户名显示登录页面 -->
    <router-view v-if="$store.state.username"></router-view>
    <Login v-else></Login>
</div>
</template>
<style lang="scss">
* {
    margin: 0;
    padding: 0;
    list-style: none;
}
html, body {
    background: #efefef;
    height: 100%;
}
#app {
    height: 100%;
}
</style>
<script>
// 引入组件
import Login from '@v/Login';
export default {
    // 注册组件
    components: { Login },
    // 组件创建完成
    created() {
        // 异步消息
        this.$store.dispatch('userinfo')
    }
}
</script>


<!-- <template>
<div id="app">
    <h1>app part</h1>
    <el-button type="success">按钮</el-button>
    <router-view></router-view>
</div>
</template>
<style lang="scss" scoped>
$color: red;
h1 {
    color: $color;
    background: pink;;
}
</style> -->
