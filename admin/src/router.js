// 引入库
import Vue from 'vue';
import Router from 'vue-router';
// 引入默认页面
import Home from '@v/Home';
import Main from '@v/Main';

// 安装
Vue.use(Router);

// 实例化
export default new Router({
    // 路由规则
    routes: [
        {
            path: '/',
            component: Home,
            // 子路由
            children: [
                // 商品模块
                { path: 'product/create', component: () => import('@v/product/Create') },
                {
                    path: 'product/list/:page', 
                    component: () => import('@v/product/List'), 
                    // props: true
                    props(route) {
                        return {
                            page: +route.params.page
                        }
                    }
                },
                { path: 'product/edit/:id', component: () => import('@v/product/Edit') },
                // 首页部分
                { path: 'home/ads', component: () => import('@v/home/Ads') },
                { path: 'home/types', component: () => import('@v/home/Types') },
                // 用户模块
                { path: 'user/create', component: () => import('@v/user/Create') },
                { path: 'user/list/:page', component: () => import('@v/user/List') },
                { path: 'user/edit/:id', component: () => import('@v/user/Edit') },
                // 默认
                { path: '*', component: Main }
            ]
        }
    ]
})