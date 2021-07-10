<template>
<div class="page-detail">
    <div class="price-part">
        <span class="price-title">商品总价：</span>
        <span class="price-num">￥{{$store.getters.price}}</span>
    </div>
    <div class="btns">
        <span class="btn-cancel" @touchend="$router.back()">取消购买</span>
        <span class="btn-buy" @touchend="buyItems">立即购买</span>
    </div>
    <h2 class="list-title">已购商品</h2>
    <Product v-for="item in $store.state.products" :key="item._id" :data="item"></Product>
</div>
</template>
<style lang="scss" scoped>
.page-detail {
    .price-part {
        background: #fff;
        font-size: 18px;
        border-bottom: none;
        padding: 35px 15px 10px;
        .price-num {
            font-size: 24px;
            color: #f30;
        }

    }
    .btns {
        padding: 10px 0;
        text-align: center;
        background: #fff;
        span {
            padding: 4px 10px;
            font-size: 12px;
            color: #fff;
            background: #999;
            border-radius: 4px;
            margin: 0 10px;
            &.btn-buy {
                background: #f30;
            }
        }
    }
    .list-title {
        background: #fff;
        line-height: 40px;
        font-size: 20px;
        font-weight: normal;
        font-size: 22px;
        padding: 20px 10px 5px;
    }
}
</style>
<script>
// 引入组件
import Product from '@/components/Product';
export default {
    // 注册组件
    components: { Product },
    // 方法
    methods: {
        // 购买商品
        buyItems() {
            // 发送请求
            this.$http.post('/data/buy', {
                ids: this.$store.state.products.map(item => item._id)
            }).then(({ data }) => {
                console.log(data);
            })
        }
    }
}
</script>