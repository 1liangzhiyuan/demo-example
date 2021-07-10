// 引入库
import Vue from 'vue';
// 应用程序
import App from '@/App';
// 引入axios
import axios from 'axios';
// 引入store
import store from '@/store';
// 引入路由
import router from '@/router';
// 引入富文本编辑器
import VueQuillEditor from 'vue-quill-editor';
// 引入UI
import ElementUI from 'element-ui';
// UI样式
import 'element-ui/lib/theme-chalk/index.css';
// 引入富文本编辑器的样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

// 安装
Vue.use(ElementUI);
// 安装富文本编辑器
Vue.use(VueQuillEditor);
// 安装axios
Vue.prototype.$http = axios;

// 实例化
new Vue({
    // 注册store
    store,
    // 注册路由
    router,
    // 渲染
    render: h => h(App)
// 上树
}).$mount('#app')