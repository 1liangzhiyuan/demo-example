<template>
<div class="ickt-shopping-car">
    <div class="price">共￥{{$store.getters.price}}元</div>
    <div class="btn" @touchend="showBuyPage">选好了</div>
    <!-- router-link跳转无法做拦截 -->
    <!-- <router-link tag="div" to="/buy" class="btn">选好了</router-link> -->
</div>
</template>
<style lang="scss" scoped>
.ickt-shopping-car {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: #494d53;
    color: #fff;
    display: flex;
    font-size: 20px;
    .price {
        flex: 1;
    }
    .btn {
        width: 120px;
        background: #fe2947;
    }
}
</style>
<script>
export default {
    // 方法
    methods: {
        // 跳转页面
        showBuyPage() {
            // 有商品显示购买页面
            if (this.$store.state.products.length) {
                // 跳转页面
                this.$router.push('/buy')
            } else {
                // 提示用户购买商品
                alert('购物车空空如也，请购买商品！');
            }
        }
    }
}
</script>