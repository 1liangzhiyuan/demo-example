<template>
<div class="ickt-header">
    <div class="left" @touchend="clickLeft"></div>
    <div class="title">
        <h1 v-if="title">{{title}}</h1>
        <slot v-else></slot>
    </div>
    <div class="right">
        <slot name="right"></slot>
    </div>
</div>
</template>
<style lang="scss" scoped>
@import '@/base.scss';
.ickt-header {
    height: 50px;
    line-height: 50px;
    background: $navColor;
    color: #fff;
    display: flex;
    text-align: center;
    .left,
    .right {
        width: 60px;
    }
    .title {
        flex: 1;
    }
    h1 {
        font-size: 24px;
        margin: 0;
        font-weight: normal;
        text-indent: -0.5em;
    }
    // 绘制三角形
    .left {
        position: relative;
        &:before,
        &:after {
            @include arrow(8px, #fff, right);
            content: "";
            position: absolute;
            top: 17px;
            left: 10px;
        }
        &:after {
            border-right-color: $navColor;
            left: 13px;
        }
    }
}
</style>
<script>
export default {
    // 接收属性
    props: ['title', 'clickLeft']
}
</script>