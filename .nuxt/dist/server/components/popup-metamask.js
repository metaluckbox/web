exports.ids = [5];
exports.modules = {

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("e32ad1f6", content, true, context)
};

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/metamask-fox.7db9467.svg";

/***/ }),

/***/ 41:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAfCAYAAADwbH0HAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIDSURBVHgBvZcLccMwDEAdBmYwM1ggBMIYLAwWBs0QrEOQQigDh0FbBCmDlYEmrXJP8fztetOdmka29Cw7SuxGVQgAaLx0qAZVs/mCeiRtmuaiHiUEQ92gWsjLAbVHNbm4TQqIlzfUQa2zO6GeWRW3tajPoh+17XAG3lVllgZ1EZnMqB0PJuX3wn2dLCXZO+cW9Us4dqpSeJBu4BSrrYHuchlmYmmOkYZ707tVDxKKlZx2MbrZs9+dtYhhObb1G7rQqLg0SDaFDPLZsM8gbEYsYRca0egFceAiuICS9F7buMqaR+MeABMINpbAPegYaNcia0OGgW+mRNAkPAcV/Xa3ZcCfPd+8qITE4KVQ7uuWbk83B75JF3kAXgNlf7esi3JeqlA8eDGUffWNVwvmAFZAbaXvGgyFLwpvem/TrgpFgs/83xQ4SegIhaUm/Fvue5BPdV8DFfZiOFw/myT70joOQmvh4NWxfHPpWmgpHNbva+OMNhQY1u/qKDQC7yMJzNLYiayNsA+l0AC8V+tsF7Z3voPlhqq6jMB1JPYU6ixH9aEeJBSLYy4QK1lY77km+PueaxJLWLXhW+A/dpnCUU77z7pD/rOpGWiFX3R6m0ywES+v6npWInHnpBP/J3nidspKnjg+Ubd3n6c4e6rnI+Rlhms5ZZ+NRlUIB2zV7+zOqHNNdt+QN9JhdBzc3gAAAABJRU5ErkJggg=="

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Metamask_vue_vue_type_style_index_0_id_cae1559e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Metamask_vue_vue_type_style_index_0_id_cae1559e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Metamask_vue_vue_type_style_index_0_id_cae1559e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Metamask_vue_vue_type_style_index_0_id_cae1559e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Metamask_vue_vue_type_style_index_0_id_cae1559e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".popupMetamask .popup[data-v-cae1559e]{width:100%;height:100%;background-color:rgba(0,0,0,.8);z-index:11;top:50%}.popupMetamask .contentBox[data-v-cae1559e],.popupMetamask .popup[data-v-cae1559e]{color:#fff;position:fixed;left:50%;transform:translate(-50%,-50%)}.popupMetamask .contentBox[data-v-cae1559e]{top:30%;z-index:12;text-align:center}.popupMetamask .contentBox .content[data-v-cae1559e]{background:linear-gradient(108.4deg,#adafae 37.46%,#aeddcf 87.92%,#afffe8 157.07%),linear-gradient(107.35deg,rgba(199,255,252,.2) 38.1%,rgba(176,255,250,0) 132.78%);width:314px;height:197px}.popupMetamask .contentBox .content h3[data-v-cae1559e]{color:#fff;font-size:24px;font-weight:700;text-align:center;padding-top:22px}.popupMetamask .contentBox .content p label[data-v-cae1559e]{font-size:14px;display:block;margin-top:14px}.popupMetamask .contentBox .clone[data-v-cae1559e]{margin-top:18px}.popupMetamask .contentBox img[data-v-cae1559e]{cursor:pointer}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Popup/Metamask.vue?vue&type=template&id=cae1559e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.bollPopup)?_c('div',{staticClass:"popupMetamask"},[_vm._ssrNode("<p class=\"popup\" data-v-cae1559e></p> <div class=\"contentBox\" data-v-cae1559e><div class=\"content\" data-v-cae1559e><h3 data-v-cae1559e>Connect your wallet</h3> <p data-v-cae1559e><img width=\"76px\""+(_vm._ssrAttr("src",__webpack_require__(37)))+" data-v-cae1559e> <label data-v-cae1559e> MetaMask </label></p></div> <img"+(_vm._ssrAttr("src",__webpack_require__(41)))+" class=\"clone\" data-v-cae1559e></div>")]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Popup/Metamask.vue?vue&type=template&id=cae1559e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Popup/Metamask.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Metamaskvue_type_script_lang_js_ = ({
  name: "popupMetamask",

  data() {
    return {
      bollPopup: false
    };
  }

});
// CONCATENATED MODULE: ./components/Popup/Metamask.vue?vue&type=script&lang=js&
 /* harmony default export */ var Popup_Metamaskvue_type_script_lang_js_ = (Metamaskvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Popup/Metamask.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(42)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Popup_Metamaskvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "cae1559e",
  "61c4a044"
  
)

/* harmony default export */ var Metamask = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=popup-metamask.js.map