<template>
<div class="page-login">
    <div class="login-inner">
        <h2>请您登录</h2>
        <!-- 样式：1 placeholder， 2 label， 3 label-width -->
        <!-- 表单校验：1 v-model, 2 model, 3 prop, 4 rules -->
        <!-- 表单提交：1 绑定事件，2 ref， 3 validate方法校验 -->
        <el-form label-width="100px" :model="data" :rules="rules" ref="login">
            <el-form-item label="用户名" prop="username">
                <el-input placeholder="请输入用户名" v-model="data.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input placeholder="请输入密码" type="password" v-model="data.password"></el-input>
            </el-form-item>
            <el-button type="success" class="login-btn" @click="submitData">登录</el-button>
        </el-form>
    </div>
</div>
</template>
<style lang="scss" scoped>
.page-login {
    .login-inner {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 400px;
        margin: -220px;
        background: #fff;
        border-radius: 10px;
        padding: 15px 20px 25px;
        h2 {
            text-align: center;
            padding-bottom: 20px;
            margin-bottom: 30px;
            border-bottom: 1px solid #ccc;
            font-size: 24px;
            font-weight: normal;
        }
        .login-btn {
            display: block;
            width: 100%;
        }
    }
}
</style>
<script>
// 引入校验方法
import { username, password } from '@t/validate';

export default {
    // 数据
    data() {
        return {
            data: {},
            rules: {
                username: [
                    { trigger: 'blur', validator: username }
                ],
                password: [
                    { trigger: 'blur', validator: password }
                ]
            }
        }
    },
    // 方法
    methods: {
        // 提交数据
        submitData() {
            // 校验表单的合法性
            // 校验成功，发送请求
            this.$refs.login.validate(valid => valid && this.$store.dispatch('login', this.data));
        }
    }
}
</script>