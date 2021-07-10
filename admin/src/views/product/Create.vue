<template>
<div class="page-product-create">
    <h1 class="page-title">{{pageTitle}}</h1>
    <!-- 样式 1 placeholder, 2 label, 3 label-width -->
    <!-- 校验 1 v-model     2 model     3 prop      4 rules -->
    <!-- 提交 1 事件    2 ref   3 validate -->
    <el-form label-width="250px" :model="data" :rules="rules" ref="product">
        <el-form-item label="商品名称" prop="title">
            <el-input placeholder="请输入商品名称" v-model="data.title"></el-input>
        </el-form-item>
        <el-form-item label="商品描述" prop="description">
            <el-input placeholder="请输入商品描述" v-model="data.description" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="商品价格" prop="price">
            <el-input placeholder="请输入商品价格" v-model="data.price" type="number"></el-input>
        </el-form-item>
        <el-form-item label="商品原价" prop="originPrice">
            <el-input placeholder="请输入商品原价" v-model="data.originPrice" type="number"></el-input>
        </el-form-item>
        <el-form-item label="商品评分" prop="evaluate">
            <el-rate show-score allow-half v-model="data.evaluate"></el-rate>
        </el-form-item>
        <el-form-item label="商品分类" prop="type">
            <el-select v-model="data.type" placeholder="请选择商品分类">
                <el-option v-for="item in types" :key="item.id" :label="item.text" :value="item.id"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="商品销量" prop="sales">
            <el-input placeholder="请输入商品销量" v-model="data.sales" type="number"></el-input>
        </el-form-item>
        <el-form-item label="商品店名" prop="storeName">
            <el-input placeholder="请输入商品店名" v-model="data.storeName"></el-input>
        </el-form-item>
        <el-form-item label="商品地址" prop="storeAddress">
            <el-input placeholder="请输入商品地址" v-model="data.storeAddress"></el-input>
        </el-form-item>
        <el-form-item label="商品分店" prop="storeNum">
            <el-input placeholder="请输入商品分店" v-model="data.storeNum" type="number"></el-input>
        </el-form-item>
        <el-form-item label="商品图片" prop="img">
            <el-upload
                action="/admin/product/upload"
                :on-success="uploadSuccess"
                :on-error="uploadFail"
                :show-file-list="false"
            >
                <el-button type="primary">上传</el-button>
                <span slot="tip" class="ickt-upload-tip">请选择商品图片</span>
            </el-upload>
            <img :src="data.img" v-show="data.img" class="ickt-upload-img" alt="">
        </el-form-item>
        <el-form-item label="商品内容" prop="content">
            <quill-editor v-model="data.content"></quill-editor>
        </el-form-item>
        <el-form-item>
            <el-button type="success" @click="submitData">提交</el-button>
        </el-form-item>
    </el-form>
</div>
</template>
<script>
// 引入配置
import { types } from '@t/config';
export default {
    // 数据
    data() {
        // 定义rules
        let rules = {};
        // 为每一个字段定义校验规则
        ["img", "title", "description", "sales", "price", "originPrice", "type", "evaluate", "storeName", "storeAddress", "storeNum", "content"].forEach(key => {
            // 为rules拓展
            rules[key] = [{ required: true, trigger: 'blur', message: '请输入数据' }]
        })
        return {
            // 分类数据
            types,
            // 数据
            data: {},
            // 校验规则
            rules,
            // rules: {
            //     title: [{ required: true, trigger: 'blur', message: '请输入数据' }],
            //     description: [{ required: true, trigger: 'blur', message: '请输入数据' }]
            // }
            // 页面标题
            pageTitle: '创建商品',
            // 提交地址
            submitUrl: '/admin/product/create'
        }
    },
    // 计算属性数据
    computed: {
        // 处理data数据
        dealData() {
            ["sales", "price", "originPrice", "type", "evaluate", "storeNum"].forEach(key => {
                // 转成数字类型
                this.data[key] = +this.data[key];
            })
            // 返回数据
            return this.data;
        }
    },
    // 方法
    methods: {
        // 上传成功
        uploadSuccess(data) {
            // console.log('uploadSuccess', arguments);
            // 如果成功
            if (data.errno === 0 ) {
                // this.data.img = data.data;
                // 避免数据丢失
                this.$set(this.data, 'img', data.data)
                // console.log(this.data);
            } else {
                // 提示错误
                this.$message.error(data.msg);
            }
        },
        // 上传失败
        uploadFail() {
            // console.log('uploadFail', arguments);
            this.$message.error('上传失败')
        },
        // 提交表单
        submitData() {
            // 校验合法性
            this.$refs.product.validate(valid => {
                // console.log(valid);
                // 校验成功，提交数据
                if (valid) {
                    this.$http.post(this.submitUrl, this.dealData)
                        // 监听数据返回
                        .then(({ data }) => {
                            // console.log(data);
                            // 如果成功
                            if (data.errno === 0) {
                                // 进入列表页查看
                                this.$router.replace('/product/list/1');
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