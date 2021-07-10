import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
		// 搜索词
		search: '',
		// 所有加入购物车的商品
		products: []
	},
	// 计算属性数据
	getters: {
		// 购物车中商品总价
		price(state) {
			// 计算商品总价
			return state.products
				// 求和
				.reduce((res, item) => res + item.price, 0)
				// 保留两位小数
				.toFixed(2);
		}
	},
    mutations: {
		// 更新搜索词
		updateSearch(state, search) {
			state.search = search;
		},
		// 加入购物车
		addProduct(state, product) {
			// console.log('addProduct');
			// 判断商品是否有价格
			if (Object.is(+product.price, NaN)) {
				// 提示错误
				return alert('该商品无法加入购物车')
			}
			// 加入购物车
			state.products.push(product);
			// console.log(state.products);
		},
		// 移除购物车
		removeProduct(state, product) {
			// console.log('removeProduct');
			// 获取商品在购物车中的索引值
			let index = state.products.findIndex(item => item._id == product._id);
			// 存在成员
			if (index >= 0) {
				// 移除商品
				state.products.splice(index, 1)
			} else {
				// 提示错误
				alert('该商品不在购物车中')
			}
			// console.log('removeProduct', state.products);
		}
	},
    actions: {

    }
})
