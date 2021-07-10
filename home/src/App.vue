<template>
<div id="app">
	<!-- 使用Header组件 -->
	<!-- <Header title="爱创课堂"></Header> -->
	<Header :clickLeft="goBack">
		<!-- <h1>爱创课堂团购网站</h1> -->
		<!-- 点击标题进入首页 -->
		<router-link to="/" tag="h1">爱创课堂团购网站</router-link>
		<!-- 使用插槽 -->
		<span slot="right">登录</span>
	</Header>
	<!-- 路由渲染位置 -->
    <router-view/>
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
}
</style>
<script>
// 引入Header组件
import Header from '@/components/Header';
export default {
	// 注册组件
	components: { Header },
	// 方法
	methods: {
		// 返回上一个页面
		goBack() {
			this.$router.go(-1);
		}
	}
}
</script>
