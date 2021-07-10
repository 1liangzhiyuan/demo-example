// 引入库
import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import axios from 'axios';
// 引入组件
import { Message } from 'element-ui';

// 安装
Vue.use(Vuex);

// 实例化
export default new Store({
    // 数据
    state: {
        // 用户名
        username: ''
    },
    // 计算属性数据
    getters: {},
    // 同步消息
    mutations: {
        // 更新用户名
        updateUserName(state, username) {
            state.username = username;
        }
    },
    // 异步消息
    actions: {
        // 登录
        login(store, data) {
            // 发送请求
            axios.post('/admin/login', data)
                .then(({ data }) => {
                    // console.log(data)
                    // 判断是否成功
                    if (data.errno === 0) {
                        // 更新用户名
                        store.commit('updateUserName', data.data.username)
                    } else {
                        // 提示错误
                        Message.error(data.msg)
                    }
                })
        },
        // 获取用户信息
        userinfo(store) {
            // 发送请求
            axios.get('/admin/userinfo')
                // 监听数据返回
                .then(({ data }) => {
                    // console.log(data);
                    // 如果成功，更新用户名
                    if (data.errno === 0) {
                        // 更新用户名
                        store.commit('updateUserName', data.data) 
                    }
                })
        }
    }
})