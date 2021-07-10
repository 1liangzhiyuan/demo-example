<script>
// 引入创建页面
import Create from './Create';
export default {
    mixins: [Create],
    // 数据
    data() {
        return {
            // 页面标题
            pageTitle: '编辑商品',
            // 提交地址
            submitUrl: '/admin/product/update'
        }
    },
    // 方法
    methods: {
        // 获取数据
        getData() {
            // 解构
            let { params } = this.$route;
            // 请求数据
            this.$http.get('/admin/product/detail', { params })
                // 监听结果
                .then(({ data }) => {
                    // console.log(data);
                    // 如果成功
                    if (data.errno === 0) {
                        // 存储数据
                        this.data = data.data;
                    } else {
                        // 提示用户
                        this.$message.error(data.msg);
                        // 返回上一个页面
                        this.$router.back();
                    }
                })
        }
    },
    // 监听器
    watch: {
        // 监听路由变化
        $route() {
            // 获取数据
            this.getData();
        }
    },
    created() {
        // console.log(this)
        // 获取数据
            this.getData();

    }
}
</script>