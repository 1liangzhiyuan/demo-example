<template>
<div class="ickt-search">
    <input type="text" :placeholder="placeholder" v-model="msg" @keyup.enter="goSearch">
</div>
</template>
<style lang="scss" scoped>
.ickt-search {
    background: #fff;
    display: flex;
    padding: 10px 20px;
    input {
        flex: 1;
        padding: 10px 20px;
        background: #efefef;
        line-height: 12px;
        font-size: 12px;
        border: none;
        outline: none;
        border-radius: 17px;
    }
}
</style>
<script>
export default {
    // 接收数据
    props: ['placeholder', 'search'],
    // 数据
    data() {
        return {
            msg: ''
        }
    },
    // 方法
    methods: {
        // 搜索
        goSearch() {
            // 向外部传递数据
            this.search(this.msg);
            // 清空输入框
            this.msg = '';
        }
    }
}
</script>
