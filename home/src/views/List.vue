<template>
<div class="page-list">
    <Search placeholder="请输入搜索内容" :search="showSearch"></Search>
    <!-- <h1>{{$store.state.search}}</h1> -->
    <!-- 分类按钮  -->
    <ul class="orders">
        <li v-for="item in orders" :key="item.id" @touchend="listOrder(item.id)" :data-id="item.id">{{item.text}}</li>
    </ul>
    <!-- 渲染商品 -->
    <Product v-for="item in list" :key="item._id" :data="item"></Product>
    <!-- 前端实现搜索 -->
    <!-- <Product v-for="item in dealLisst" :key="item._id" :data="item"></Product> -->
    <!-- 加载更多 -->
    <!-- <div class="loadmore" @touchstart="showMore"></div> -->
    <!-- 为了避免点击穿透,要改成touchend -->
    <div class="loadmore" @touchend="showMore" v-show="others.length">
        <span>显示其它{{others.length}}条商品</span>
        <span class="arrow"></span>
    </div>
</div>
</template>
<style lang="scss" scoped>
@import '@/base.scss';
.page-list {
    .orders {
        display: flex;
        text-align: center;;
        background: #fff;
        li {
            flex: 1;
            box-sizing: border-box;
            border-right: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            font-size: 14px;
            line-height: 30px;
            &:last-child {
                border-right: none;
            }
            &:after {
                @include arrow(4px);
                content: "";
                position: relative;
                top: -2px;
                right: -4px;
            }
        }
    }
    .loadmore {
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-bottom: 1px solid #ccc;
        background: #fff;
        color: $navColor;
        font-size: 16px;
        text-indent: -10px;
        .arrow {
            position: relative;
            top: 11px;
            left: 8px;
            &:before,
            &:after {
                @include arrow(6px, $navColor);
                content: "";
                position: absolute;
                top: 0;
                left: 0;
            }
            &:after {
                border-top-color: #fff;
                top: -3px;
            }
        }
    }
}
</style>
<script>
// 引入组件
import Search from '@/components/Search';
import Product from '@/components/Product';
export default {
    // 注册组件
    components: { Search, Product },
    // 数据
    data() {
        return {
            // 分类按钮
            orders: [
                { id: 'price', text: '价格排序' },
                { id: 'sales', text: '销量排序' },
                { id: 'evaluate', text: '好评排序' },
                { id: 'discount', text: '优惠排序' }
            ],
            // 初始化
            list: [],
            // 未渲染的数据
            others: []
        }
    },
    // 计算属性数据
    computed: {
        // 过滤数据
        // dealLisst() {
        //     return this.list.filter(item => {
        //         // 标题中，包含搜索词
        //         // return item.title.indexOf(this.$store.state.search) >= 0
        //         return new RegExp(this.$store.state.search, 'i').test(item.title)
        //     })
        // }
        // 代理store数据
        search() {
            return this.$store.state.search;
        }
    },
    // 方法
    methods: {
        // 展示搜索内容
        showSearch(msg) {
            // console.log(msg);
            // 发送消息了
            this.$store.commit('updateSearch', msg)
        },
        // 请求数据
        getData() {
            // 解构路由数据
            let { params } = this.$route;
            // 获取数据 (首先要定义接口文档)
            // this.$http.get('/data/list', {
            //     // query数据
            //     // params: { id: params.id }
            //     // 构造出来的对象字面量形式与params变量是一致的.
            //     // params: params
            //     // 简写
            //     params
            // })
            this.$http.get('/data/list', { params })
                // 监听数据返回
                .then(({ data }) => {
                    // console.log(data);
                    this.list = data.slice(0, 3);
                    // 未渲染的数据
                    this.others = data.slice(3);
                })
        },
        // 展示剩余的商品
        showMore() {
            // 更新数据
            this.list = this.list.concat(this.others);
            // console.log(this.list, this);
            // 清空others
            this.others = [];
        },
        // 排序
        listOrder(id) {
            // console.log(e.target.getAttribute('data-id'));
            // console.log('id', id);
            // if (id === 'discount') {
            //     this.list.sort((a, b) => {
            //         // 优惠： 原价（门市价） - 现价
            //         // a的优惠 a.originPrice - a.price
            //         // b的优惠 b.originPrice - b.price
            //         // 升序
            //         // return (a.originPrice - a.price) - (b.originPrice - b.price)
            //         // 降序
            //         return (b.originPrice - b.price) - (a.originPrice - a.price)
            //     })
            //     return;
            // }
            // // 根据id对已有的数据处理
            // this.list.sort((a, b) => {
            //     // 根据id属性排序 a[id] b[id]
            //     // 升序
            //     // return a[id] - b[id]
            //     // 降序
            //     return b[id] - a[id]
            // })

            // 发送请求
            this.$http.get('/data/order', {
                params: {
                    // 排序字段
                    id,
                    // 升序还是降序
                    desc: -1,
                    // 分类id
                    type: this.$route.params.id,
                }
            }).then(({ data }) => {
                // console.log(data);
                // 是否由数据返回
                if (data && data.length) {
                    // 更新视图
                    this.list = data.slice(0, 3);
                    this.others = data.slice(3);
                } else {
                    alert('没有数据')
                    this.list = [];
                    this.others = [];
                }
            })
        }
    },
    // 监听数据
    watch: {
        // 监听路由的变化,请求新的数据
        $route() {
            // 获取数据
            this.getData();
        },
        // 监听搜索词的改变
        // '$store.state.search'(val) {
        //     console.log(val);
        // }
        // 监听计算属性数据seach
        search(value) {
            // console.log(111, value);
            // 发送搜索请求
            this.$http.get('/data/search', {
                params: {
                    type: this.$route.params.id,
                    value
                }
            }).then(({ data }) => {
                // console.log(data);
                // 判断是否由数据
                if (data && data.length) {
                    // 更新视图
                    this.list = data.slice(0, 3);
                    this.others = data.slice(3);
                } else {
                    alert('没有数据');
                    // 清空视图
                    this.list = [];
                    this.others = [];
                }
            })
        }
    },
    // 组件创建完成
    created() {
        // console.log(this.$route);
        // 获取数据
        this.getData();      
    }
}
</script>