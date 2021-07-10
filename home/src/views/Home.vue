<template>
<div class="page-home">
    <!-- 分类按钮 -->
    <ul class="types">
        <router-link tag="li" :to="'/list/' + item.id" v-for="item in types" :key="item.id">
            <img :src="'/static/img/icon/' + item.img" alt="">
            <p>{{item.text}}</p>
        </router-link>
    </ul>
    <!-- 广告模块 -->
    <ul class="ads">
        <router-link tag="li" v-for="(item, index) in ad" :key="item._id" :to="'/detail/' + item.product">
            <h3 :class="'color-' + index">{{item.title}}</h3>
            <p>{{item.description}}</p>
             <img :src="item.url" alt="">
        </router-link>
    </ul>
    <div class="guess-title">
        <h2>猜你喜欢</h2>
    </div>
    <Product v-for="item in list" :key="item._id" :data="item"></Product>
</div>
</template>
<style lang="scss" scoped>
.page-home {
    .types {
        background: #fff;
        padding: 15px 0 10px;
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        li {
            width: (100%/5);
            img {
                width: 60%;
            }
            p {
                font-size: 14px;
                padding: 6px 0 12px;
            }
        }
    }
    .ads {
        background: #fff;
        margin-top: 10px;
        display: flex;
        text-align: center;
        li {
            width: (100%/3);
            border-right: 1px solid #ccc;
            box-sizing: border-box;
            padding: 20px 0;
            &:last-child {
                border-right: none;
            }
            h3 {
                font-size: 16px;
                font-weight: normal;
            }
            p {
                font-size: 12px;
                padding: 10px 15px;
            }
            img {
                width: 60%;
            }
            // .color-0 {
            //     color: red;
            // }
            // .color-1 {
            //     color: green;
            // }
            // .color-2 {
            //     color: purple;
            // }
            // 枚举循环
            // 定义索引值
            $i: 0;
            @each $color in red, green, purple {
                .color-#{$i} {
                    color: $color;
                }
                // 修改索引值
                $i: $i + 1;
            }
        }
    }
    .guess-title {
        background: #fff;
        padding: 15px 10px 0;
        margin-top: 10px;
        h2 {
            border-bottom: 1px solid #ccc;
            padding-bottom: 10px;
            font-weight: normal;
            font-size: 20px;
        }
    }
}
</style>
<script>
// 引入组件
import Product from '@/components/Product';
export default {
    // 注册
    components: { Product },
    // 数据
    data() {
        return {
            // 同步数据
            types: [
                { id: 1, img: '01.png', text: '美食' },
                { id: 2, img: '02.png', text: '电影' },
                { id: 3, img: '03.png', text: '酒店' },
                { id: 4, img: '04.png', text: '休闲' },
                { id: 5, img: '05.png', text: '外卖' },
                { id: 6, img: '06.png', text: 'KTV' },
                { id: 7, img: '07.png', text: '丽人' },
                { id: 8, img: '08.png', text: '小吃' },
                { id: 9, img: '09.png', text: '周边游' },
                { id: 10, img: '10.png', text: '火车票' }
            ],
            // 初始化数据
            ad: [],
            list: []
        }
    },
    // 组件创建完成
    created() {
        // 获取数据
        // this.$http.get('/data/home.json')
        this.$http.get('/data/home')
            // 监听数据返回
            .then(({ data }) => {
                // console.log(data)
                // 存储数据
                this.ad = data.ad;
                this.list = data.list;
            })
        // console.log(this);
    }
}
</script>
<!--<style lang="scss" scoped>

</style>-->