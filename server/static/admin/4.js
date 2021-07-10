(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "../../../../node_modules/vue-loader/lib/index.js?!./src/views/product/Edit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** C:/Liang/node_modules/vue-loader/lib??vue-loader-options!./src/views/product/Edit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create */ \"./src/views/product/Create.vue\");\n\r\n// 引入创建页面\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    mixins: [_Create__WEBPACK_IMPORTED_MODULE_0__[\"default\"]],\r\n    // 数据\r\n    data() {\r\n        return {\r\n            // 页面标题\r\n            pageTitle: '编辑商品',\r\n            // 提交地址\r\n            submitUrl: '/admin/product/update'\r\n        }\r\n    },\r\n    // 方法\r\n    methods: {\r\n        // 获取数据\r\n        getData() {\r\n            // 解构\r\n            let { params } = this.$route;\r\n            // 请求数据\r\n            this.$http.get('/admin/product/detail', { params })\r\n                // 监听结果\r\n                .then(({ data }) => {\r\n                    // console.log(data);\r\n                    // 如果成功\r\n                    if (data.errno === 0) {\r\n                        // 存储数据\r\n                        this.data = data.data;\r\n                    } else {\r\n                        // 提示用户\r\n                        this.$message.error(data.msg);\r\n                        // 返回上一个页面\r\n                        this.$router.back();\r\n                    }\r\n                })\r\n        }\r\n    },\r\n    // 监听器\r\n    watch: {\r\n        // 监听路由变化\r\n        $route() {\r\n            // 获取数据\r\n            this.getData();\r\n        }\r\n    },\r\n    created() {\r\n        // console.log(this)\r\n        // 获取数据\r\n            this.getData();\r\n\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/views/product/Edit.vue?C:/Liang/node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/views/product/Edit.vue":
/*!************************************!*\
  !*** ./src/views/product/Edit.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ \"./src/views/product/Edit.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\nvar render, staticRenderFns\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/product/Edit.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/product/Edit.vue?");

/***/ }),

/***/ "./src/views/product/Edit.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/views/product/Edit.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ \"../../../../node_modules/vue-loader/lib/index.js?!./src/views/product/Edit.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/product/Edit.vue?");

/***/ })

}]);