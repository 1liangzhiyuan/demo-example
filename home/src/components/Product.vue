<template functional>
<router-link tag="div" :to="'/detail/' + props.data._id" class="ickt-product">
    <div class="inner">
        <img :src="props.data.img" alt="">
        <div class="content">
            <h3>{{props.data.title}}</h3>
            <p>
                <span class="price">{{props.data.price}}元</span>
                <span class="origin-price">门市价:{{props.data.originPrice}}元</span>
                <span class="sales">销量{{props.data.sales}}</span>
            </p>
        </div>
    </div>
</router-link>
</template>
<style lang="scss" scoped>
@import '@/base.scss';
.ickt-product {
    background: #fff;
    padding: 0 10px;
    .inner {
        display: flex;
        padding: 10px 0;
        border-bottom: 1px solid #ccc;
        img {
            width: 100px;
            height: 60.5px;
        }
        .content {
            flex: 1;
            padding-left: 10px;
        }
        h3 {
            height: 44px;
            font-size: 16px;
        }
        p {
            font-size: 12px;
            display: flex;
            line-height: 16px;
        }
        .price {
            color: $navColor;
            margin-right: 8px;
        }
        .origin-price {
            flex: 1;
        }
    }
}
</style>