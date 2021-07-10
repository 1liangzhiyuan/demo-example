<template>
<div class="page-product-list">
    <h1 class="page-title">商品列表</h1>
    <!-- 商品卡片列表 -->
    <div class="list-container">
        <el-card v-for="item in data" :key="item._id">
            <img :src="item.img" alt="">
            <h2>{{item.title}}</h2>
            <p class="status">
                <span class="price">￥{{item.price}}</span>
                <!-- 过滤器处理 -->
                <!-- ><span class="types">{{item.type | type}}</span> -->
                <!-- 方法处理 -->
                <span class="types">{{getType(item.type)}}</span>
            </p>
            <p class="sales">已销售{{item.sales}}份</p>
            <div class="btns">
                <!-- <el-button type="success" size="mini">修改</el-button> -->
                <router-link tag="el-button" class="el-button--success el-button--mini" :to="'/product/edit/' + item._id" type="success" size="mini">修改</router-link>
                <el-button type="danger" size="mini" @click="removeItem(item._id, item.title)">删除</el-button>
            </div>
        </el-card>
    </div>
    <!-- 翻页按钮 -->
    <div class="list-page">
        <!-- <el-button round>&larr;上一页</el-button>
        <el-button round>下一页&rarr;</el-button> -->
        <!-- <router-link tag="el-button" class="is-round" :to="'/product/list/' + ($route.params.page < 2 ? 1 : $route.params.page - 1)">&larr;上一页</router-link> -->
        <router-link tag="el-button" class="is-round" :to="'/product/list/' + (page < 2 ? 1 : page - 1)">&larr;上一页</router-link>
        <router-link tag="el-button" class="is-round" :to="'/product/list/' + (page + 1)">下一页&rarr;</router-link>
    </div>
</div>
</template>
<style lang="scss" scoped>
.page-product-list {
    .list-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-bottom: 40px;
    }
    .el-card {
        width: 280px;
        margin-bottom: 30px;
        h2 {
            font-size: 20px;
            text-align: center;
            font-weight: normal;
            padding: 15px 0 10px;
            // 截字
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        img {
            width: 240px;
            height: 135px;
        }
        .status {
            display: flex;
            .price {
                flex: 1;
                color: #f30;
                font-size: 18px;
            }
        }
        .sales {
            padding: 10px 0 15px;
        }
    }
}
</style>
<script>
// 引入配置
import { types } from '@t/config';
export default {
    // 路由传递的数据
    props: ['page'],
    // 数据
    data() {
        return {
            data: []
        }
    },
    // 过滤器
    filters: {
        type(id) {
            // 根据id，找到对应的文本
            let data = types.find(item => item.id == id);
            // 返回文本
            return data ? data.text : '其它';
        }
    },
    // 方法
    methods: {
        // 获取数据
        getData() {
            // 解构query数据
            let { params } = this.$route;
            // 发送请求
            this.$http.get('/admin/product/list', { params })
                // 监听数据返回
                .then(({ data }) => {
                    // console.log(data);
                    // 如果成功了存储数据
                    if (data.errno === 0) {
                        this.data = data.data;
                    } else {
                        // 提示错误
                        this.$message.error(data.msg);
                    }
                })
        },
        // 根据id返回分类文案
        getType(id) {
            // 获取成员
            let data = types.find(item => item.id == id)
            // 返回文本
            return data ? data.text : '其它';
        },
        // 删除商品
        removeItem(id, title) {
            // 提示是否要删除该商品
            this.$confirm(`您确实删除“${title}”商品么`)
                // 实现promise规范
                .then(() => {
                    // console.log('success');
                    this.$http.post('/admin/product/remove', { id })
                        // 监听数据返回
                        .then(({ data }) =>{
                            // console.log(data);
                            // 如果成功
                            if (data.errno === 0) {
                                // 提示用户
                                this.$message.success('删除成功');
                                setTimeout(() => {
                                    // 刷新页面
                                    location.reload();
                                }, 800)
                            } else {
                                this.$message.error(data.msg)
                            }
                        })
                })
                .catch(() => {
                    // console.log('fail');
                })
        }
    },
    // 监听器
    watch: {
        // 路由
        $route() {
            // 获取数据
            this.getData();
        }
    },
    // 组件创建完
    created() {
        // 获取数据
        this.getData();
    }
}
</script>