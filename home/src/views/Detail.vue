<template>
<div class="page-detail">
    <template v-if="!data.img">
        <p class="desc">没有数据!</p>
    </template>
    <template v-else>
        <div class="image-part">
            <img :src="data.img" alt="">
            <h1>{{data.title}}</h1>
            <p>{{data.description}}</p>
        </div>
        <div class="price-part">
            <span class="price"><strong>{{data.price}}</strong>元</span>
            <span class="origin-price">门市价:{{data.originPrice}}元</span>
            <span :class="{
                'btn-buy': true,
                'has-buy': data.hasBuy
            }" @touchend="buyItem">{{data.hasBuy ? '取消购买' : '立即购买'}}</span>
        </div>
        <div class="sales-part">
            <div>支持随时退货</div>
            <div>支持立即退货</div>
            <div>销量: {{data.sales}}</div>
        </div>
        <div class="store-part module">
            <div class="module-header">店家信息</div>
            <div class="module-body">
                <p>{{data.storeName}}</p>
                <p>{{data.storeAddress}}</p>
            </div>
            <div class="module-foter">查看其它{{data.storeNum}}家分店</div>
        </div>
        <div class="buy-part module">
            <div class="module-header">购买须知</div>
            <div class="module-body" v-html="data.content"></div>
        </div>
    </template>
    <ShoppingCar></ShoppingCar>
</div>
</template>
<style lang="scss">
@import '@/base.scss';
.page-detail {
    padding-bottom: 60px;
    .image-part {
        position: relative;
        color: #fff;
        img {
            width: 100%;
            display: block;
        }
        h1, p {
            position: absolute;
            left: 15px;
            bottom: 15px;
        }
        h1 {
            bottom: 35px;
            font-size: 24px;
        }
    }
    .price-part {
        background: #fff;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #ccc;
        padding: 0 15px;
        font-size: 16px;
        display: flex;
        .price {
            color: $navColor;
            margin-right: 10px;
            strong {
                font-weight: normal;
                font-size: 24px;
                margin-right: 4px;
            }
        }
        .origin-price {
            flex: 1;
        }
        .btn-buy {
            color: #fff;
            background: #f30;
            font-size: 12px;
            padding: 0px 8px;
            display: inline-block;
            line-height: 20px;
            height: 20px;
            margin-top: 15px;
            border-radius: 4px;
            &.has-buy {
                background: #ccc;
                color: #333;
            }
        }
    }
    .sales-part {
        padding: 10px 0;
        background: #fff;
        display: flex;
        flex-wrap: wrap;
        div {
            width: 50%;
            padding-left: 15px;
            box-sizing: border-box;
            line-height: 26px;
            font-size: 16px;
            color: yellowgreen;
            &:last-child {
                color: #000;
            }
        }
    }
    .module {
        background: #fff;
        margin-top: 10px;
        border-bottom: 1px solid #ccc;
        padding: 15px 10px;
        .module-header {
            border-bottom: 1px solid #ccc;
            padding: 5px 5px 10px;
            font-size: 22px;
        }
        .module-body {
            padding: 10px 5px;
            line-height: 28px;
            h1, h2, h3, h4, h5, h6 {
                color: #f30;
                font-size: 18px;
                font-weight: normal;
                padding: 10px 0 5px;
            }
        }
        .module-footer {
            border: 1px solid #ccc;
            padding: 10px 5px 5px;
            font-size: 16px;
            color: skyblue;
        }
    }
}
</style>
<script>
import ShoppingCar from '@/components/ShoppingCar';
export default {
    // 注册组件
    components: { ShoppingCar },
    // 数据
    data() {
        return {
            data: {}
        }
    },
    // 定义方法
    methods: {
        // 购买商品
        buyItem() {
            // 如果已经购买，发送取消购买消息，否则发送立即购买消息
            this.$store.commit(this.data.hasBuy ? 'removeProduct' : 'addProduct', this.data)
            // 判断data中是否有hasBuy
            // 改变数据
            // this.data.hasBuy = !this.data.hasBuy;
            // 解决数据丢失
            this.$set(this.data, 'hasBuy', !this.data.hasBuy);
            // console.log(this.data.hasBuy, this.data);
        },
        // 获取数据
        getData() {
            // 解构数据
            let { params } = this.$route;
            // 发送请求
            this.$http.get('/data/detail', { params })
                // 监听数据返回
                .then(({ data }) => {
                    // 判断该商品是否购买
                    if (this.$store.state.products.find(item => item._id === data._id)) {
                        // 设置hasBuy属性，表示已经购买。
                        data.hasBuy = true;
                    }
                    // console.log(data);
                    this.data = data;
                })
        }
    },
    // 监听器
    watch: {
        // 监听路由的变化
        $route() {
            // 获取数据
            this.getData();
        }
    },
    // 创建完成
    created() {
        // 获取数据
        this.getData();
    }
}
</script>