<template>
<div class="page-main">
    <h1 class="page-title">修改密码</h1>
    <!-- 表单 -->
    <!-- 样式: 1 placeholder, 2 label, 3 label-width -->
    <!-- 校验：1 v-model， 2 model,  3 prop,  4 rules -->
    <!-- 提交：1 事件 2 ref， 3 validate -->
    <el-form label-width="250px" :model="data" :rules="rules" ref="main">
        <el-form-item label="用户名" prop="username">
            <el-input placeholder="请输入用户名" v-model="data.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input placeholder="请输入密码" type="password" v-model="data.password"></el-input>
        </el-form-item>
        <el-form-item label="重复密码" prop="repeat">
            <el-input placeholder="请重复输入密码" type="password" v-model="data.repeat"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="success" @click="submitData">修改</el-button>
            <el-button type="warning" @click="resetData">重置</el-button>
        </el-form-item>
    </el-form>
</div>
</template>
<script>
// 引入校验规则
import { username, password, repeat } from '@t/validate';
export default {
    // 数据
    data() {
        return {
            // 数据
            data: {},
            // 校验规则
            rules: {
                username: [{ trigger: 'blur', validator: username }],
                password: [{ trigger: 'blur', validator: password }],
                repeat: [{ trigger: 'blur', validator: (...args) => repeat(this.data.password, '密码', ...args) }]
                // repeat: [{ trigger: 'blur', validator: repeat }]
                // repeat: [{ trigger: 'blur', validator: (...args) => repeat(this.data.username, '用户名', ...args) }]
            }
        }
    },
    // 方法
    methods: {
        // 重置数据
        resetData() {
            // console.log(this.$refs.main);
            this.$refs.main.resetFields();
        },
        // 提交数据
        submitData() {
            // console.log(this);
            this.$refs.main.validate(valid => {
                // 如果校验成功
                if (valid) {
                    // console.log(valid);
                    // 解构
                    let { username, password } = this.data;
                    // 登录, 获取的数据只在当前页面中使用，就不需要发送异步action了
                    this.$http.post('/admin/manager/update', { username, password })
                        .then(({ data }) => {
                            // console.log(data);
                            // 如果成功
                            if (data.errno === 0) {
                                // 刷新页面
                                location.reload();
                            } else {
                                // 提示错误
                                this.$message.error(data.msg);
                            }
                        })
                }
            })
        }
    }
}
</script>