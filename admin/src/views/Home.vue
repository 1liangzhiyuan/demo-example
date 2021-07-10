<template>
<el-container class="page-home">
    <el-header>
        <router-link tag="h1" to="/">爱创课堂后台管理系统</router-link>
        <div class="status">
            <span>您好 </span>
            <strong>ickt</strong>
            <span> 欢迎回来 ! </span>
            <a href="/admin/logout">退出</a>
        </div>
    </el-header>
    <el-container>
        <el-aside width="200px">
            <!-- 启动路由功能：切换依据 -- menu-item组件的index属性 -->
            <el-menu :router="true">
                <!-- 每一个模块 -->
                <el-submenu v-for="(item, index) in menu" :key="index" :index="String(index)">
                    <!-- <span slot="title">
                        <i class="el-icon-menu"></i>
                        <span>{{item.title}}</span>
                    </span> -->
                    <!-- #语法糖代表v-slot指令 -->
                    <template #title>
                        <i class="el-icon-menu"></i>
                        <span>{{item.title}}</span>
                    </template>
                    <!-- 定义每一项 -->
                    <el-menu-item v-for="childItem in item.chidren" :key="childItem.link" :index="childItem.link">{{childItem.title}}</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-main>
            <!-- 1 确定渲染位置 -->
            <router-view></router-view>
        </el-main>
    </el-container>
</el-container>
</template>
<style lang="scss">
.page-home {
    height: 100%;
    .el-header {
        background: #fff;
        height: 60px;
        line-height: 60px;
        margin-bottom: 10px;
        display: flex;
        h1 {
            flex: 1;
        }
        .status {
            padding-top: 10px;
        }
    }
    .el-aside,
    .el-main {
        background: #fff;
    }
    .el-main {
        margin-left: 10px;
    }
    // 子页面页面标题
    .page-title {
        margin-bottom: 40px;
        padding: 15px 10px;
        border-bottom: 1px solid #ccc;
        font-size: 24px;
        font-weight: normal;
    }
    .el-input,
    .el-textarea,
    .el-select {
        width: 50%;
    }
    .el-select {
        .el-input {
            width: 100%;
        }
    }
    .el-rate {
        line-height: 40px;
        .el-rate__icon {
            vertical-align: middle;
        }
    }
    // 上传组件
    .ickt-upload-tip {
        color: #999;
        margin-left: 10px;
    }
    .ickt-upload-img {
        max-height: 150px;
        margin-top: 20px;
    }
    .list-page {
        text-align: center;
    }
}
</style>
<script>
export default {
    // 数据
    data() {
        return {
            menu: [
                {
                    title: '商品模块',
                    chidren: [
                        { title: '创建商品', link: '/product/create' },
                        { title: '商品列表', link: '/product/list/1' }
                    ]
                },
                {
                    title: '首页模块',
                    chidren: [
                        { title: '首页广告', link: '/home/ads' },
                        { title: '分类按钮', link: '/home/types' }
                    ]
                },
                {
                    title: '用户模块',
                    chidren: [
                        { title: '创建用户', link: '/user/create' },
                        { title: '用户列表', link: '/user/list/1' }
                    ]
                }
            ]
        }
    }
}
</script>