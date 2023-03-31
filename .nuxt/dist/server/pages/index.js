exports.ids = [2];
exports.modules = {

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/back-image.2500f79.jpg";

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(48);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("fe7e91da", content, true, context)
};

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hero.be13e60.jpg";

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/BP picture.ad3abb5.jpeg";

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ossama.829ab50.jpeg";

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sergetassiga.55f8cf5.jpg";

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_78a226a3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_78a226a3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_78a226a3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_78a226a3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_78a226a3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_78a226a3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(33);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(49);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".bg-hero[data-v-78a226a3]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:cover}.bg-color[data-v-78a226a3]{background-color:rgba(0,0,0,.6902)}i[data-v-78a226a3]{font-size:1.5rem}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/back.503796e.jpg";

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=78a226a3&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"bg-hero  container mx-auto py-12 px-4 lg:rounded-lg shadow-lg flex justify-center items-center mt-6 w-full h-screen opacity-60\" data-v-78a226a3><div class=\"flex flex-col justify-center items-center lg:p-12 p-12 rounded-lg shadow-lg bg-color\" data-v-78a226a3><h1 class=\"text-white lg:text-5xl sm:text-2xl font-bold text-center uppercase\" data-v-78a226a3>Welcome to Water4All Company</h1> <p class=\"text-blue-500 text-2xl italic font-bold text-center\" data-v-78a226a3>Let's Drink a Clean Water</p></div></div> <div class=\"container mx-auto flex flex-col sm:flex-row justify-between py-16\" data-v-78a226a3><div class=\"w-full sm:w-3/5 sm:text-left items-center\" data-v-78a226a3><div data-v-78a226a3><h2 class=\"text-4xl text-blue-700 font-bold pb-2\" data-v-78a226a3>About Us</h2> <p class=\"mb-4 lg:w-3/4 sm:w-full text-justify\" data-v-78a226a3>\n\n          At Water4all, we understand the importance of clean and safe drinking water, not only for our physical health but also for our overall well-being. We believe that by providing access to clean water, we can help alleviate the burden of waterborne diseases and contribute to the economic development of communities. Our organization operates on a volunteer basis, with each member committed to working towards our common goal. We have partnered with various local and international organizations to leverage resources and expertise in addressing the water crisis. Through our projects, we have witnessed firsthand the transformative power of clean water on people's lives, and we are driven to continue our efforts until everyone has access to this basic necessity\n\n        </p></div></div> <div class=\"lg:w-1/2 sm:w-full lg:order-1 sm:order-2\" data-v-78a226a3><img"+(_vm._ssrAttr("src",__webpack_require__(43)))+" alt=\"Image\" class=\"w-full rounded-lg shadow-lg\" data-v-78a226a3></div></div> <section class=\"bg-gray-100 py-12\" data-v-78a226a3><div class=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\" data-v-78a226a3><div class=\"lg:text-center\" data-v-78a226a3><p class=\"mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-700 sm:text-4xl\" data-v-78a226a3>\n          Our Team\n        </p></div> <div class=\"mt-10\" data-v-78a226a3><div class=\"mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3\" data-v-78a226a3><div class=\"bg-white overflow-hidden shadow rounded-lg\" data-v-78a226a3><div class=\"px-4 py-5 sm:p-6\" data-v-78a226a3><img"+(_vm._ssrAttr("src",__webpack_require__(44)))+" alt class=\"mx-auto h-48 w-48 rounded-full\" data-v-78a226a3> <h3 class=\"mt-6 text-center font-bold text-xl leading-9 font-medium text-gray-900\" data-v-78a226a3>\n                Blaise Agbetsomedo\n              </h3> <div class=\"mt-2 text-center text-sm leading-5 text-gray-600\" data-v-78a226a3><p data-v-78a226a3>Co-founder</p> <p class=\"mt-1\" data-v-78a226a3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> <div class=\"flex justify-center space-x-4\" data-v-78a226a3><li data-v-78a226a3><a href=\"https://twitter.com/STassiga\" target=\"_blank\" class=\"text-blue-600 hover:text-blue-400\" data-v-78a226a3><svg width=\"20\" height=\"17\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" data-v-78a226a3><path d=\"M19.807 1.943a8.588 8.588 0 0 1-2.036 2.135 11.918 11.918 0 0 1-.465 3.854 12.085 12.085 0 0 1-1.452 3.177 12.426 12.426 0 0 1-2.318 2.691c-.897.78-1.978 1.402-3.243 1.867-1.265.464-2.618.697-4.06.697-2.27 0-4.348-.618-6.233-1.854.293.034.62.051.98.051 1.885 0 3.565-.588 5.04-1.764a3.915 3.915 0 0 1-2.363-.825 4.038 4.038 0 0 1-1.432-2.039c.276.043.532.064.766.064.36 0 .717-.047 1.068-.14A3.982 3.982 0 0 1 1.73 8.43c-.617-.754-.925-1.63-.925-2.627v-.051c.57.324 1.182.498 1.835.524a4.1 4.1 0 0 1-1.32-1.47 4.078 4.078 0 0 1-.49-1.969c0-.75.185-1.445.553-2.084a11.548 11.548 0 0 0 3.702 3.05 11.163 11.163 0 0 0 4.669 1.271c-.067-.324-.1-.639-.1-.946 0-1.142.395-2.116 1.187-2.92C11.632.402 12.589 0 13.712 0c1.173 0 2.161.435 2.966 1.304a7.878 7.878 0 0 0 2.576-.997 3.997 3.997 0 0 1-1.785 2.275 7.98 7.98 0 0 0 2.338-.639z\" fill-rule=\"nonzero\" data-v-78a226a3></path></svg></a></li> <li data-v-78a226a3><a href=\"https://www.instagram.com/__iamsergeo/\" target=\"_blank\" class=\"text-red hover:text-red-400\" data-v-78a226a3><svg width=\"20\" height=\"20\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" data-v-78a226a3><path d=\"M10.002 4.872A5.12 5.12 0 0 0 4.876 10a5.12 5.12 0 0 0 5.126 5.128A5.12 5.12 0 0 0 15.13 10a5.12 5.12 0 0 0-5.127-5.128zm0 8.462A3.34 3.34 0 0 1 6.67 10a3.337 3.337 0 0 1 3.333-3.334A3.337 3.337 0 0 1 13.335 10a3.34 3.34 0 0 1-3.333 3.334zm6.532-8.671c0 .664-.535 1.196-1.195 1.196a1.196 1.196 0 1 1 1.196-1.196zm3.396 1.213c-.076-1.602-.442-3.02-1.615-4.19C17.145.516 15.727.15 14.125.07c-1.65-.093-6.6-.093-8.25 0-1.597.076-3.016.442-4.19 1.611C.512 2.851.151 4.27.07 5.871c-.093 1.652-.093 6.601 0 8.253.076 1.602.442 3.02 1.615 4.19 1.174 1.17 2.588 1.535 4.19 1.616 1.65.093 6.6.093 8.25 0 1.602-.076 3.02-.442 4.19-1.616 1.169-1.17 1.534-2.588 1.615-4.19.093-1.652.093-6.596 0-8.248zm-2.133 10.02a3.375 3.375 0 0 1-1.9 1.9c-1.317.523-4.44.402-5.895.402-1.454 0-4.582.116-5.894-.402a3.375 3.375 0 0 1-1.9-1.9c-.523-1.317-.402-4.441-.402-5.896s-.116-4.583.401-5.895a3.375 3.375 0 0 1 1.901-1.901c1.316-.523 4.44-.402 5.894-.402 1.455 0 4.582-.116 5.894.402a3.375 3.375 0 0 1 1.901 1.9c.522 1.317.402 4.441.402 5.896s.12 4.583-.402 5.895z\" fill-rule=\"nonzero\" data-v-78a226a3></path></svg></a></li> <li data-v-78a226a3><a href=\"https://www.linkedin.com/in/serge-anan-tassiga-759b6b190/\" target=\"_blank\" class=\"text-blue-600 hover:text-blue-400\" data-v-78a226a3><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" class=\"text-white hover:text-gray-400\" data-v-78a226a3><path d=\"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z\" data-v-78a226a3></path></svg></a></li></div></div></div></div> <div class=\"bg-white overflow-hidden shadow rounded-lg\" data-v-78a226a3><div class=\"px-4 py-5 sm:p-6\" data-v-78a226a3><img"+(_vm._ssrAttr("src",__webpack_require__(45)))+" alt class=\"mx-auto h-48 w-48 rounded-full\" data-v-78a226a3> <h3 class=\"mt-6 text-center font-bold text-xl leading-9 font-medium text-gray-900\" data-v-78a226a3>\n                Anael Osama\n              </h3> <div class=\"mt-2 text-center text-sm leading-5 text-gray-600\" data-v-78a226a3><p data-v-78a226a3>Finance Manager</p> <p class=\"mt-1\" data-v-78a226a3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> <div class=\"flex justify-center space-x-4\" data-v-78a226a3><li data-v-78a226a3><a href=\"https://twitter.com/STassiga\" target=\"_blank\" class=\"text-blue-600 hover:text-blue-400\" data-v-78a226a3><svg width=\"20\" height=\"17\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" data-v-78a226a3><path d=\"M19.807 1.943a8.588 8.588 0 0 1-2.036 2.135 11.918 11.918 0 0 1-.465 3.854 12.085 12.085 0 0 1-1.452 3.177 12.426 12.426 0 0 1-2.318 2.691c-.897.78-1.978 1.402-3.243 1.867-1.265.464-2.618.697-4.06.697-2.27 0-4.348-.618-6.233-1.854.293.034.62.051.98.051 1.885 0 3.565-.588 5.04-1.764a3.915 3.915 0 0 1-2.363-.825 4.038 4.038 0 0 1-1.432-2.039c.276.043.532.064.766.064.36 0 .717-.047 1.068-.14A3.982 3.982 0 0 1 1.73 8.43c-.617-.754-.925-1.63-.925-2.627v-.051c.57.324 1.182.498 1.835.524a4.1 4.1 0 0 1-1.32-1.47 4.078 4.078 0 0 1-.49-1.969c0-.75.185-1.445.553-2.084a11.548 11.548 0 0 0 3.702 3.05 11.163 11.163 0 0 0 4.669 1.271c-.067-.324-.1-.639-.1-.946 0-1.142.395-2.116 1.187-2.92C11.632.402 12.589 0 13.712 0c1.173 0 2.161.435 2.966 1.304a7.878 7.878 0 0 0 2.576-.997 3.997 3.997 0 0 1-1.785 2.275 7.98 7.98 0 0 0 2.338-.639z\" fill-rule=\"nonzero\" data-v-78a226a3></path></svg></a></li> <li data-v-78a226a3><a href=\"https://www.instagram.com/__iamsergeo/\" target=\"_blank\" class=\"text-red hover:text-red-400\" data-v-78a226a3><svg width=\"20\" height=\"20\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" data-v-78a226a3><path d=\"M10.002 4.872A5.12 5.12 0 0 0 4.876 10a5.12 5.12 0 0 0 5.126 5.128A5.12 5.12 0 0 0 15.13 10a5.12 5.12 0 0 0-5.127-5.128zm0 8.462A3.34 3.34 0 0 1 6.67 10a3.337 3.337 0 0 1 3.333-3.334A3.337 3.337 0 0 1 13.335 10a3.34 3.34 0 0 1-3.333 3.334zm6.532-8.671c0 .664-.535 1.196-1.195 1.196a1.196 1.196 0 1 1 1.196-1.196zm3.396 1.213c-.076-1.602-.442-3.02-1.615-4.19C17.145.516 15.727.15 14.125.07c-1.65-.093-6.6-.093-8.25 0-1.597.076-3.016.442-4.19 1.611C.512 2.851.151 4.27.07 5.871c-.093 1.652-.093 6.601 0 8.253.076 1.602.442 3.02 1.615 4.19 1.174 1.17 2.588 1.535 4.19 1.616 1.65.093 6.6.093 8.25 0 1.602-.076 3.02-.442 4.19-1.616 1.169-1.17 1.534-2.588 1.615-4.19.093-1.652.093-6.596 0-8.248zm-2.133 10.02a3.375 3.375 0 0 1-1.9 1.9c-1.317.523-4.44.402-5.895.402-1.454 0-4.582.116-5.894-.402a3.375 3.375 0 0 1-1.9-1.9c-.523-1.317-.402-4.441-.402-5.896s-.116-4.583.401-5.895a3.375 3.375 0 0 1 1.901-1.901c1.316-.523 4.44-.402 5.894-.402 1.455 0 4.582-.116 5.894.402a3.375 3.375 0 0 1 1.901 1.9c.522 1.317.402 4.441.402 5.896s.12 4.583-.402 5.895z\" fill-rule=\"nonzero\" data-v-78a226a3></path></svg></a></li> <li data-v-78a226a3><a href=\"https://www.linkedin.com/in/serge-anan-tassiga-759b6b190/\" target=\"_blank\" class=\"text-white hover:text-gray-400\" data-v-78a226a3><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" class=\"text-blue-600 hover:text-blue-400\" data-v-78a226a3><path d=\"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z\" data-v-78a226a3></path></svg></a></li></div></div></div></div> <div class=\"bg-white overflow-hidden shadow rounded-lg\" data-v-78a226a3><div class=\"px-4 py-5 sm:p-6\" data-v-78a226a3><img"+(_vm._ssrAttr("src",__webpack_require__(46)))+" alt class=\"mx-auto h-48 w-48 rounded-full\" data-v-78a226a3> <h3 class=\"mt-6 text-center font-bold text-xl leading-9 font-medium text-gray-900\" data-v-78a226a3>\n                Serge Tassiga\n              </h3> <div class=\"mt-2 text-center text-sm leading-5 text-gray-600\" data-v-78a226a3><p data-v-78a226a3>CTO</p> <p class=\"mt-1\" data-v-78a226a3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> <div class=\"flex justify-center space-x-4\" data-v-78a226a3><li data-v-78a226a3><a href=\"https://twitter.com/STassiga\" target=\"_blank\" class=\"text-blue-600 hover:text-blue-400\" data-v-78a226a3><svg width=\"20\" height=\"17\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" data-v-78a226a3><path d=\"M19.807 1.943a8.588 8.588 0 0 1-2.036 2.135 11.918 11.918 0 0 1-.465 3.854 12.085 12.085 0 0 1-1.452 3.177 12.426 12.426 0 0 1-2.318 2.691c-.897.78-1.978 1.402-3.243 1.867-1.265.464-2.618.697-4.06.697-2.27 0-4.348-.618-6.233-1.854.293.034.62.051.98.051 1.885 0 3.565-.588 5.04-1.764a3.915 3.915 0 0 1-2.363-.825 4.038 4.038 0 0 1-1.432-2.039c.276.043.532.064.766.064.36 0 .717-.047 1.068-.14A3.982 3.982 0 0 1 1.73 8.43c-.617-.754-.925-1.63-.925-2.627v-.051c.57.324 1.182.498 1.835.524a4.1 4.1 0 0 1-1.32-1.47 4.078 4.078 0 0 1-.49-1.969c0-.75.185-1.445.553-2.084a11.548 11.548 0 0 0 3.702 3.05 11.163 11.163 0 0 0 4.669 1.271c-.067-.324-.1-.639-.1-.946 0-1.142.395-2.116 1.187-2.92C11.632.402 12.589 0 13.712 0c1.173 0 2.161.435 2.966 1.304a7.878 7.878 0 0 0 2.576-.997 3.997 3.997 0 0 1-1.785 2.275 7.98 7.98 0 0 0 2.338-.639z\" fill-rule=\"nonzero\" data-v-78a226a3></path></svg></a></li> <li data-v-78a226a3><a href=\"https://www.instagram.com/__iamsergeo/\" target=\"_blank\" class=\"text-red hover:text-red-400\" data-v-78a226a3><svg width=\"20\" height=\"20\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" data-v-78a226a3><path d=\"M10.002 4.872A5.12 5.12 0 0 0 4.876 10a5.12 5.12 0 0 0 5.126 5.128A5.12 5.12 0 0 0 15.13 10a5.12 5.12 0 0 0-5.127-5.128zm0 8.462A3.34 3.34 0 0 1 6.67 10a3.337 3.337 0 0 1 3.333-3.334A3.337 3.337 0 0 1 13.335 10a3.34 3.34 0 0 1-3.333 3.334zm6.532-8.671c0 .664-.535 1.196-1.195 1.196a1.196 1.196 0 1 1 1.196-1.196zm3.396 1.213c-.076-1.602-.442-3.02-1.615-4.19C17.145.516 15.727.15 14.125.07c-1.65-.093-6.6-.093-8.25 0-1.597.076-3.016.442-4.19 1.611C.512 2.851.151 4.27.07 5.871c-.093 1.652-.093 6.601 0 8.253.076 1.602.442 3.02 1.615 4.19 1.174 1.17 2.588 1.535 4.19 1.616 1.65.093 6.6.093 8.25 0 1.602-.076 3.02-.442 4.19-1.616 1.169-1.17 1.534-2.588 1.615-4.19.093-1.652.093-6.596 0-8.248zm-2.133 10.02a3.375 3.375 0 0 1-1.9 1.9c-1.317.523-4.44.402-5.895.402-1.454 0-4.582.116-5.894-.402a3.375 3.375 0 0 1-1.9-1.9c-.523-1.317-.402-4.441-.402-5.896s-.116-4.583.401-5.895a3.375 3.375 0 0 1 1.901-1.901c1.316-.523 4.44-.402 5.894-.402 1.455 0 4.582-.116 5.894.402a3.375 3.375 0 0 1 1.901 1.9c.522 1.317.402 4.441.402 5.896s.12 4.583-.402 5.895z\" fill-rule=\"nonzero\" data-v-78a226a3></path></svg></a></li> <li data-v-78a226a3><a href=\"https://www.linkedin.com/in/serge-anan-tassiga-759b6b190/\" target=\"_blank\" class=\"text-blue-600 hover:text-blue-400\" data-v-78a226a3><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" class=\"text-white hover:text-gray-400\" data-v-78a226a3><path d=\"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z\" data-v-78a226a3></path></svg></a></li></div></div></div></div></div></div></div></section> <div class=\"overflow-x-hidden\" data-v-78a226a3><div class=\"contact-me bg-background-secondary pt-16\" data-v-78a226a3><div class=\"container mx-auto text-xl pb-4 relative\" data-v-78a226a3><h2 id=\"contact\" class=\"font-bold mb-6 text-center text-blue-700\" data-v-78a226a3>Contact Us:</h2> <p class=\"mb-12 text-center container px-4\" data-v-78a226a3>\n          Welcome to our contact page! we are glad you're interested in getting in touch. <br data-v-78a226a3>\n          Whether you\n          have a question, a comment, or a project proposal, We are here to help.</p> <div class=\"flex flex-col gap-3 pb-4\" data-v-78a226a3><h1 class=\"font-bold text-blue-700\" data-v-78a226a3>Contact details:</h1> <span class=\"flex gap-2\" data-v-78a226a3><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"home\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" class=\"w-4 mr-4\" data-v-78a226a3><path fill=\"currentColor\" d=\"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z\" data-v-78a226a3></path></svg>Lome, Togo</span> <span class=\"flex gap-2\" data-v-78a226a3><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"envelope\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"w-4 mr-4\" data-v-78a226a3><path fill=\"currentColor\" d=\"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z\" data-v-78a226a3></path></svg>Water4All@gmail.com</span> <span class=\"flex gap-2\" data-v-78a226a3><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"phone\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"w-4 mr-4\" data-v-78a226a3><path fill=\"currentColor\" d=\"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z\" data-v-78a226a3></path></svg>+228 91584474</span></div> <div class=\"lg:container mx-auto flex flex-col gap-4 sm:flex-row justify-between py-16\" data-v-78a226a3><div class=\"lg:w-1/2 sm:w-full lg:order-1 sm:order-2\" data-v-78a226a3><img"+(_vm._ssrAttr("src",__webpack_require__(34)))+" alt=\"Image\" class=\"w-full rounded-lg shadow-lg\" data-v-78a226a3></div> <div class=\"text-lg sm:text-lg mb-16\" data-v-78a226a3><form action=\"#\" class=\"mb-12\" data-v-78a226a3><div class=\"flex flex-wrap mb-6 -mx-4\" data-v-78a226a3><div class=\"w-full md:w-1/2 mb-6 md:mb-0 px-4\" data-v-78a226a3><label for=\"name\" class=\"block mb-2 text-copy-primary\" data-v-78a226a3>\n                    Name\n                  </label> <input type=\"text\" name=\"name\" id=\"name\" placeholder=\"Jon Snow\" required=\"required\" class=\"block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4\" data-v-78a226a3></div> <div class=\"w-full px-4 md:w-1/2\" data-v-78a226a3><label for=\"email\" class=\"block text-copy-primary mb-2\" data-v-78a226a3>\n                    Email Address\n                  </label> <input type=\"email\" name=\"email\" id=\"email\" placeholder=\"email@example.com\" required=\"required\" class=\"block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4\" data-v-78a226a3></div></div> <div class=\"w-full mb-12\" data-v-78a226a3><label for=\"message\" class=\"block text-copy-primary mb-2\" data-v-78a226a3>\n                  Message\n                </label> <textarea id=\"message\" rows=\"5\" name=\"message\" placeholder=\"Enter your message here.\" required=\"required\" class=\"block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-green-700 mb-2 px-4 py-4\" data-v-78a226a3></textarea></div> <div class=\"flex justify-end w-full\" data-v-78a226a3><input type=\"submit\" value=\"Submit\" class=\"block bg-blue-600 hover:bg-blue-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3\" data-v-78a226a3></div></form></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=78a226a3&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(47)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "78a226a3",
  "99dd8064"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map