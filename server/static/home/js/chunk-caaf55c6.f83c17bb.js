(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-caaf55c6"],{"0f71":function(t,s,a){},"54ec":function(t,s,a){"use strict";a.r(s);var n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"page-detail"},[a("div",{staticClass:"price-part"},[a("span",{staticClass:"price-title"},[t._v("商品总价：")]),a("span",{staticClass:"price-num"},[t._v("￥"+t._s(t.$store.getters.price))])]),a("div",{staticClass:"btns"},[a("span",{staticClass:"btn-cancel",on:{touchend:function(s){return t.$router.back()}}},[t._v("取消购买")]),a("span",{staticClass:"btn-buy",on:{touchend:t.buyItems}},[t._v("立即购买")])]),a("h2",{staticClass:"list-title"},[t._v("已购商品")]),t._l(t.$store.state.products,function(t){return a("Product",{key:t._id,attrs:{data:t}})})],2)},e=[],c=a("be6f"),i={components:{Product:c["a"]},methods:{buyItems:function(){this.$http.post("/data/buy",{ids:this.$store.state.products.map(function(t){return t._id})}).then(function(t){var s=t.data;console.log(s)})}}},o=i,r=(a("7ef9"),a("2877")),u=Object(r["a"])(o,n,e,!1,null,"63c45d54",null);s["default"]=u.exports},"7ef9":function(t,s,a){"use strict";var n=a("0f71"),e=a.n(n);e.a}}]);
//# sourceMappingURL=chunk-caaf55c6.f83c17bb.js.map