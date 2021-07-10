import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'

Vue.use(Router)

export default new Router({
	// 路由规则
	routes: [
		// 列表页
		{ path: '/list/:id', component: () => import('@/views/List') },
		// 详情页面
		{ path: '/detail/:id', component: () => import('@/views/Detail') },
		// 购买页面
		{ path: '/buy', component: () => import('@/views/Buy') },
		// 首页是默认页面
		{ path: '*', component: Home }
	]
})
