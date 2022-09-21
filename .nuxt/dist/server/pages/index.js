exports.ids = [13,1,2,3,5];
exports.modules = Array(36).concat([
/* 36 */
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/metamask-fox.7db9467.svg";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("5183b5b5", content, true, context)
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.eb8b110.png";

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Head.vue?vue&type=template&id=04e97453&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"header"},[_vm._ssrNode("<header data-v-04e97453>","</header>",[_vm._ssrNode("<ul class=\"container\" data-v-04e97453>","</ul>",[_vm._ssrNode("<li data-v-04e97453>","</li>",[_c('nuxt-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":__webpack_require__(39)}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-04e97453>","</li>",[_c('nuxt-link',{attrs:{"to":"/home"}},[_vm._v(" Mint ")]),_vm._ssrNode(" "),_c('nuxt-link',{attrs:{"to":"/claim"}},[_vm._v(" Claim ")]),_vm._ssrNode(" "),_c('nuxt-link',{attrs:{"to":"/nft"}},[_vm._v(" Collection ")]),_vm._ssrNode(" "),_c('nuxt-link',{attrs:{"to":"/history"}},[_vm._v(" History ")]),_vm._ssrNode(" "+((_vm.$route.path == '/')?("<a href=\"#faq\" data-v-04e97453> FAQ </a>"):"<!---->")+" <p data-v-04e97453><img"+(_vm._ssrAttr("src",__webpack_require__(37)))+" data-v-04e97453> "+((_vm.accounts[0])?("<a data-v-04e97453>"+_vm._ssrEscape(_vm._s(_vm._f("userInformation")(_vm.accounts[0])))+"</a>"):("<a data-v-04e97453> Connect Wallet </a>"))+"</p>")],2)],2)]),_vm._ssrNode(" "),_c('Metamask')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Head.vue?vue&type=template&id=04e97453&scoped=true&

// EXTERNAL MODULE: external "web3"
var external_web3_ = __webpack_require__(31);
var external_web3_default = /*#__PURE__*/__webpack_require__.n(external_web3_);

// EXTERNAL MODULE: ./components/Popup/Metamask.vue + 4 modules
var Metamask = __webpack_require__(44);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Head.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // import minxins from "@/common/minxins/mint.js";

/* harmony default export */ var Headvue_type_script_lang_js_ = ({
  name: "Head",
  components: {
    Metamask: Metamask["default"]
  },

  // mixins: [minxins],
  data() {
    return {
      accounts: [],
      web3: ""
    };
  },

  async mounted() {
    this.web3 = new external_web3_default.a(window.ethereum);
    this.accounts = await this.web3.eth.getAccounts();
  },

  // async mounted() {
  //   this.web3 = new Web3(window.ethereum);
  //   this.accounts = await this.web3.eth.getAccounts();
  //   // this.accounts = await ethereum.enable();
  //   ethereum.enable().then((accounts) => {
  //     this.accounts = accounts;
  //   });
  //   ethereum.on("accountsChanged", (accounts) => {
  //     this.accounts = accounts;
  //   });
  //   ethereum.on("networkChanged", (networkIDstring) => {
  //     if (networkIDstring !== 4) {
  //       this.switchEthereumChain(4);
  //     }
  //   });
  //   if (ethereum.networkVersion !== 4) {
  //     this.switchEthereumChain(4);
  //   }
  // },
  methods: {
    async singInEve() {
      const getAccounts = await this.web3.eth.getAccounts();
      this.accounts = await window.ethereum.enable();

      if (getAccounts.length === 0) {
        location.reload();
      }
    },

    singUpEve() {
      window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [{
          chainId: external_web3_default.a.utils.numberToHex(56),
          // 目标链ID
          chainName: "Binance Smart Chain Mainnet",
          nativeCurrency: {
            name: "bnb",
            symbol: "bnb",
            decimals: 18
          },
          rpcUrls: ["https://bsc-dataseed.binance.org"],
          // 节点
          blockExplorerUrls: ["https://www.bscscan.com"]
        }]
      });
    },

    switchEthereumChain(value) {
      window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{
          chainId: external_web3_default.a.utils.numberToHex(value) // 目标链ID

        }]
      });
    }

  }
});
// CONCATENATED MODULE: ./components/Head.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headvue_type_script_lang_js_ = (Headvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Head.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(45)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Headvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "04e97453",
  "ebad04e0"
  
)

/* harmony default export */ var Head = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAfCAYAAADwbH0HAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIDSURBVHgBvZcLccMwDEAdBmYwM1ggBMIYLAwWBs0QrEOQQigDh0FbBCmDlYEmrXJP8fztetOdmka29Cw7SuxGVQgAaLx0qAZVs/mCeiRtmuaiHiUEQ92gWsjLAbVHNbm4TQqIlzfUQa2zO6GeWRW3tajPoh+17XAG3lVllgZ1EZnMqB0PJuX3wn2dLCXZO+cW9Us4dqpSeJBu4BSrrYHuchlmYmmOkYZ707tVDxKKlZx2MbrZs9+dtYhhObb1G7rQqLg0SDaFDPLZsM8gbEYsYRca0egFceAiuICS9F7buMqaR+MeABMINpbAPegYaNcia0OGgW+mRNAkPAcV/Xa3ZcCfPd+8qITE4KVQ7uuWbk83B75JF3kAXgNlf7esi3JeqlA8eDGUffWNVwvmAFZAbaXvGgyFLwpvem/TrgpFgs/83xQ4SegIhaUm/Fvue5BPdV8DFfZiOFw/myT70joOQmvh4NWxfHPpWmgpHNbva+OMNhQY1u/qKDQC7yMJzNLYiayNsA+l0AC8V+tsF7Z3voPlhqq6jMB1JPYU6ixH9aEeJBSLYy4QK1lY77km+PueaxJLWLXhW+A/dpnCUU77z7pD/rOpGWiFX3R6m0ywES+v6npWInHnpBP/J3nidspKnjg+Ubd3n6c4e6rnI+Rlhms5ZZ+NRlUIB2zV7+zOqHNNdt+QN9JhdBzc3gAAAABJRU5ErkJggg=="

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Metamask_vue_vue_type_style_index_0_id_cae1559e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Metamask_vue_vue_type_style_index_0_id_cae1559e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Metamask_vue_vue_type_style_index_0_id_cae1559e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Metamask_vue_vue_type_style_index_0_id_cae1559e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Metamask_vue_vue_type_style_index_0_id_cae1559e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".popupMetamask .popup[data-v-cae1559e]{width:100%;height:100%;background-color:rgba(0,0,0,.8);z-index:11;top:50%}.popupMetamask .contentBox[data-v-cae1559e],.popupMetamask .popup[data-v-cae1559e]{color:#fff;position:fixed;left:50%;transform:translate(-50%,-50%)}.popupMetamask .contentBox[data-v-cae1559e]{top:30%;z-index:12;text-align:center}.popupMetamask .contentBox .content[data-v-cae1559e]{background:linear-gradient(108.4deg,#adafae 37.46%,#aeddcf 87.92%,#afffe8 157.07%),linear-gradient(107.35deg,rgba(199,255,252,.2) 38.1%,rgba(176,255,250,0) 132.78%);width:314px;height:197px}.popupMetamask .contentBox .content h3[data-v-cae1559e]{color:#fff;font-size:24px;font-weight:700;text-align:center;padding-top:22px}.popupMetamask .contentBox .content p label[data-v-cae1559e]{font-size:14px;display:block;margin-top:14px}.popupMetamask .contentBox .clone[data-v-cae1559e]{margin-top:18px}.popupMetamask .contentBox img[data-v-cae1559e]{cursor:pointer}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 44 */
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

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Head_vue_vue_type_style_index_0_id_04e97453_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Head_vue_vue_type_style_index_0_id_04e97453_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Head_vue_vue_type_style_index_0_id_04e97453_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Head_vue_vue_type_style_index_0_id_04e97453_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Head_vue_vue_type_style_index_0_id_04e97453_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(15);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(47);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".header[data-v-04e97453]{background-color:#242424}.header ul[data-v-04e97453]{margin:auto;height:80px;line-height:80px;border-bottom:1px solid #383838}.header ul[data-v-04e97453],.header ul li[data-v-04e97453]{display:flex;justify-content:space-between;align-items:center}.header ul li a[data-v-04e97453]{color:#fff;font-size:16px;margin-right:32px}.header ul li p[data-v-04e97453]{display:inline-block;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;background-size:100% 100%;height:47px;line-height:47px;padding:0 30px;width:230px;overflow:hidden;text-align:center}.header ul li p img[data-v-04e97453]{margin-right:20px;width:27px}.header ul li p a[data-v-04e97453]{margin:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/singin.aa106f2.png";

/***/ }),
/* 48 */,
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("16941ceb", content, true, context)
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(59);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("9376e6a4", content, true, context)
};

/***/ }),
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAETSURBVHgB1ZUBDYMwEEUvKEBCJSChEiYBCThgDsABEiZhczAJSEDCX5sxVkp3a7uWbS9pUgLc77/7BKJfAUBJGSiYe5US7WgvlJjEnVEtQYkoPJ4RamnRhnJiODQZUrr1EXy0WFJqVNEKPC19yuyqNa7F7AiMW0GxwJFM/T2q1TOiE2IDhfXcVoXUvn7jdohyq146vio0t/gMvsWSQsF2dnpfMYeyCQ8U3LPLHyhHCwdLdOJEQ4S0w5Pxsh0iCd7hxduho5jemzPswOP/mTiK6TmW9GzhlREazYP5OoPRwoNxrwE/r+VgMYJL/7Gdpc3qYDGCeYLhKc6R9oeML/wPXYLhwYgU1MGoKSdwJHYPwZ7+nRsllr+rQ1dgpQAAAABJRU5ErkJggg=="

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJiSURBVHgB3VVbbtpQED332qRSVKkswZX6UL9wVxCyA/irImjZQWAFwAoCK8CVUNW/0hXADgJSJaoSqXQF5TvBnp7rEGL8wFXCV44E17qvMzN35gzwVKDyNlQupfj8GGUIfxZKHIs8teLSKhB8D3xMvr5TyweT1BbS5oam4p8EmAkwJckqPKjhcr4kAodz3o2PbhZZKsmHuTi2jYFWcHlBX9voeS/VKm1v/Zc0SNimEfCB6pc3appLYggKFsY8CG3hlJcvkYPGbymufXSU4JMvOI0T6fgB28K3DcH7NIL6XBrGkOic8XL4SjVF4bOlMI6v75CcGdcZoo0HifDUrqQChrGg0UMKaGCHoVkWbFxkklhAm0MvK0QqYGaFH5sxBmMYn6bFz8rZD3ETJLW5lHnYsWz08QgMX6sJk+CPLqByN2fjnq5MV6f/89C5UBgx7Cf3V2/n4RoLcAAYYzkkwyUaL/gof3E4FBMkLLqDeBHBNjvt6CSL6WTfKauA0foajn0Eb98+yo/Lu2aJBepUub4QaVAQ8UjwrsvaT9nW0jZcJvWMuq6P0cw6bIrVGFK/kkEmAUvBJJH9DEkSA/HRp6Scx2UhsjnMGIbCzSJRFgY01ouWwg7J8K0KZeGI+pUWNruADocWVbmaRhC2Bo2iZaG7QxzfSEV12IjGCLC69lHNa0h3YBiNXjVZa1UaO9pLEiXa9IgupdvLujyUIwsXWsNhp6yGbxvD3s74cSEd7jhn9zNpOaF3M4rkMrDDFlzSEuqT+R4xRK1MYUUOjFf+DYx4VnDbam/fSofSMaGgelld8+nhHzAE7VeUpTGmAAAAAElFTkSuQmCC"

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FAQ_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FAQ_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FAQ_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FAQ_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FAQ_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".faq .content div{border-top:1px solid #d9d9d9;font-size:20px;color:#fff;padding-top:10px;font-weight:200}.faq .content li{list-style:disc;margin:12px 0 12px 50px}.faq .content a,.faq .content p{color:#5edbff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FAQ_vue_vue_type_style_index_1_id_37d6c28d_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FAQ_vue_vue_type_style_index_1_id_37d6c28d_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FAQ_vue_vue_type_style_index_1_id_37d6c28d_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FAQ_vue_vue_type_style_index_1_id_37d6c28d_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FAQ_vue_vue_type_style_index_1_id_37d6c28d_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".faq[data-v-37d6c28d]{margin:auto;padding:130px 0}.faq li[data-v-37d6c28d]{width:1280px;background:radial-gradient(87.18% 87.18% at 7.03%,at 6.18%,rgba(95,254,255,.2) 0,transparent 100%),linear-gradient(152.02deg,#56545f 16.59%,#0d0c13 102.6%),#d9d9d9;background:radial-gradient(87.18% 87.18% at 7.03% 6.18%,rgba(95,254,255,.2) 0,transparent 100%),linear-gradient(152.02deg,#56545f 16.59%,#0d0c13 102.6%),#d9d9d9;border-radius:12px;padding:13px 30px;margin:auto auto 30px;border:1px solid #3ac3f7}.faq li h3[data-v-37d6c28d]{font-size:28px;color:#fff;display:flex;justify-content:space-between;align-items:center;cursor:pointer;margin-top:10px}.metaluckboxVideo[data-v-37d6c28d]{width:1280px;margin:auto}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(68);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("d419ed24", content, true, context)
};

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FAQ.vue?vue&type=template&id=37d6c28d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<ul class=\"container faq\" data-v-37d6c28d>"+(_vm._ssrList((_vm.faqList),function(val,key){return ("<li data-v-37d6c28d><h3 data-v-37d6c28d>"+_vm._ssrEscape("\n        "+_vm._s(val.name)+"\n        ")+"<img"+(_vm._ssrAttr("src",__webpack_require__(54)))+" data-v-37d6c28d></h3> "+((val.boll)?("<div class=\"content\" data-v-37d6c28d><div data-v-37d6c28d>"+(_vm._s(val.value))+"</div></div>"):"<!---->")+"</li>")}))+"</ul> <div class=\"metaluckboxVideo\" data-v-37d6c28d></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FAQ.vue?vue&type=template&id=37d6c28d&scoped=true&

// EXTERNAL MODULE: ./assets/ico/win.png
var win = __webpack_require__(55);
var win_default = /*#__PURE__*/__webpack_require__.n(win);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FAQ.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var FAQvue_type_script_lang_js_ = ({
  name: "IndexPage",

  data() {
    return {
      faqList: [{
        name: "What is MetaLuckBox? ",
        value: "MetaLuckBox is a game in which luck leverages a hundred times or maybe thousand times. You just need to click click and click then your luck will lead to unexpected rewards for your ticket. Do you wanna be the next lucky dog? Come and join us immediately !!",
        boll: false
      }, {
        name: "Where Can I find the mint link? ",
        value: `The official mint link is : <a target="_blank" href="https://metaluckbox.com/">MetaLuckBox.com</a> Please always check our official channel for updates. We advice you not to trust DMs from anyone. Only check official website around mid-September. `,
        boll: false
      }, {
        name: "Is there a Twitter? ",
        value: `Yes, There is an official Twitter Link: <a target="_blank" href="https://twitter.com/MetaLB777/">https://twitter.com/MetaLB777</a>
          Join the MateLuckBox twitter to learn Drawing information. We will have a real-time Delivery notification to update the time, the winner NFT ID, the winner address, and also the strat time for next round. 
          `,
        boll: false
      }, {
        name: "How much did I win?",
        value: `The amount of prize (Prizepot) = Total number of minted NFTs is current round  NFT price  20% 
          <p><img style="margin-right: 12px;" src="${win_default.a}"/>Remember MetaLuckBox will charge 10% of prize pot as service fee. </p>
          `,
        boll: false
      }, {
        name: "Where can I get results for MetaLuckBox? ",
        value: `Right here on the Official MetaLuckBox website. Winning NFT is posted shortly on Twitter and official website after the current round finished. The player could go to the 'Claim' page to check if you have the winner NFT or not.`,
        boll: false
      }, {
        name: "Why ETH network?",
        value: `Ethereum network is the most established, and we wanted to ensure that once everyone had their NFTs, they could trade them on Opensea. `,
        boll: false
      }, {
        name: "Is there a time limit? ",
        value: `Yes. The game will have two channels, the first one is 24H minting channel, another one is 24H free-trading channel which after the minting time finish. You can buy the NFT on the Opensea if you don't have time to mint before the clock runs out. `,
        boll: false
      }, {
        name: "How do MetaLuckBox draw the winner? ",
        value: `MetaLuckBox use Chainlink VRF which is a provably fair and verifiable random number generator(RNG) that enables smart contracts to access random values without compromising security or usability. `,
        boll: false
      }, {
        name: "How to claim your prize?",
        value: `
            <p>Congrats on your win! Follow these easy steps to get the claim process started.  </p>
            <ul>
              <li>Once you are the winner which you have the winning NFT in your wallet. </li>
              <li>Please click the 'Claim' button on our official website. </li>
              <li>Then click the 'Claim' on the NFT. </li>
              <li>Confirm on your 'Metamask' Wallet and wait until it processed. Once it shows successfully. </li>
              <li>You got your prize. </li>
            </ul>
          `,
        boll: false
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/FAQ.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FAQvue_type_script_lang_js_ = (FAQvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/FAQ.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(56)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(58)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FAQvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "37d6c28d",
  "3b38ce96"
  
)

/* harmony default export */ var FAQ = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 62 */,
/* 63 */,
/* 64 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEbSURBVHgBzVPRjYJAEN1dFr63g/M6gA7uOvCXEMjRwXWgVnAlQAJ8XwmnFZx2gBXoNxDwjWGN0TVKNNFJCJOdmbfvzcwy9irGtZMkiXIcZ3xrYdu226ZplnEcl7wHGNm2/Qd3xIZZWde1J8mTUroE0HXdLAzD6S3VRVFMkD+1LGu8BxFCKBwwzvkkz/M3oM+Ipqm4l50g/yBdHCcg8AmgD5KWZdlZf3BGsX+4LuUaQSBlDlYUXADsF6x+9O3k44z6tqiqyqNcXSdPb/N9v8TvC5opieRpRgoTiaMoSk9rBLtgQRCkPasVqK/RQM8EYGRiYHV1dwR7gN0Ngh3b6o1VGN0G7nxAvcLnolfvh7eDabjo/jcbZunxqJ9vO586cmyjNnBRAAAAAElFTkSuQmCC"

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAYAAADQWvz5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE2SURBVHgB1VHLcYMwFBQC7pRAByEd2BVkcuQ3gQpCOkgqSDrA5nOOO0g6MCWQCuIzHMguIzKK7fgzPvnNMBJ6u6t9KyGussqynOV57h7CSHFCGYbxallWcpEQnDhYPNM0m0M4aw/RtW37HdsmiqIUTjyeD8PQYsQ3uLvr+36epmn7ryMl8gGwAwcv6piORBiGDUQpJIjZzkxui2C7kVLOfd9vVWsG8jgWz9jbJzYK1XXtobGmCG1rIgz6BmN9Tf/sdV13Syw55P4KodGC8ImtO2WilQOhP0ErjEsOueOFOkCF+YhtgqCXfDHc+o1x7oMgWBFTVdUDlgW+JTDJTkasOI4z3M6QFyBk+otxLYoiY48YXWRHSIk9EwhnG6G92AiWI/yJGHFOcVSEuT4Fax3pr6axrq9+AK4/iKWmlD0CAAAAAElFTkSuQmCC"

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE0SURBVHgBzZLLcYNADIZhCZwpgRLcQegg9pEBZqCCJB04HZAK1uFxpwMnHZAOKIEzwyO/mDWzrMHx0bpIaHc//RLStEcx/Z5LnHPHNM39OI42Y6z0fb+6gmRZduy67hTHca0CiqLY4fEZoT0/0vUSOccwjIPneTUTyWdUOqdpGqkQXOYyQOT25FHYIc9E8hfOgVSe5zmHMld6s9PW7SsMw28KniYSYye4F5IIH0FZBFiDuNoAUOH5bFLS9/2Rhqbco293C4JWlhBUTjSl71uG+xV+QrOAUG9QcsBhfSfnU/5gEt0RM/lPRd22bbkKCYIgAeQDYXMLMgzDu9zKAkKGYSViPluAGK2XV+qw0rZlWa+IaTNdbWXAyP9gDd7UdZ8hl0AsGG3itFxQ1OBxjbC8LNXj2x80toj9M/O1AAAAAABJRU5ErkJggg=="

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bottom_vue_vue_type_style_index_0_id_f4343ee4_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bottom_vue_vue_type_style_index_0_id_f4343ee4_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bottom_vue_vue_type_style_index_0_id_f4343ee4_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bottom_vue_vue_type_style_index_0_id_f4343ee4_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bottom_vue_vue_type_style_index_0_id_f4343ee4_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bottom[data-v-f4343ee4]{background:#000;text-align:center;padding:35px 0}.bottom a[data-v-f4343ee4]{font-size:16px;color:#a4a4a4;margin:0 22px}.bottom a img[data-v-f4343ee4]{margin-right:6px}.bottom div[data-v-f4343ee4]{margin-top:20px;margin-bottom:43px}.bottom p[data-v-f4343ee4]{color:#a4a4a4;font-size:12px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Bottom.vue?vue&type=template&id=f4343ee4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bottom"},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(39)))+" data-v-f4343ee4> <div data-v-f4343ee4><a href=\"mailto:Social@metaluckbox.com\" data-v-f4343ee4><img"+(_vm._ssrAttr("src",__webpack_require__(64)))+" data-v-f4343ee4>Contact us</a> <a target=\"_blank\" href=\"https://github.com/metaluckbox/\" data-v-f4343ee4><img"+(_vm._ssrAttr("src",__webpack_require__(65)))+" data-v-f4343ee4>Open Source Code</a> <a target=\"_blank\" href=\"https://twitter.com/MetaLB777/\" data-v-f4343ee4><img"+(_vm._ssrAttr("src",__webpack_require__(66)))+" data-v-f4343ee4>Twitter</a></div> <p data-v-f4343ee4>© 2022 MetaLuckBox, all rights reserved</p>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Bottom.vue?vue&type=template&id=f4343ee4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Bottom.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Bottomvue_type_script_lang_js_ = ({
  name: "IndexPage"
});
// CONCATENATED MODULE: ./components/Bottom.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Bottomvue_type_script_lang_js_ = (Bottomvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Bottom.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(67)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Bottomvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f4343ee4",
  "291a465b"
  
)

/* harmony default export */ var Bottom = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(122);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("27493bab", content, true, context)
};

/***/ }),
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/wint.591bf38.png";

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/video.ac4a948.png";

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/winner.f2d55d0.png";

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMFSURBVHgB7ZlNjtNAEIWrk0HMsAo3cE5AbjDxCQgSf2JDcgM4QcIJgBMQNmiAjW+QzAnInADfIF7xK2hexd2SZZy24y47WfhJVtqW3fY31VX9uoeoU6dOnTqdmBS1pKdaT/8QjfpEb66UiqkBtQLzWOs5XrQwpzHaYRNAjcPkQKwaAeqRkJ5pPXqi9RYf/9xe2wPCCjTRCkMvIEGJwDAI8mGF5gAdDvmaA8RKHEgE5i8SGz8DfPwrDJ1FBRArUSCxnMEHjQGyPgAkK5EcEi0ANUGs4o9KDclDYjCeIDv9JLobKZVQTYnkjAQI55sPiOnDT1IgXDjIU14wpwRi+qqnqdaD70Rb8pAkCMs3Z2qPcWkQVm2YJZIVDjikGkAWhJ0DCcorMh+U2hwKlHUJsEBfsl7OVyLzTNabkftlhXYHlmb6San35CmReaZKhLI50sv9EXGylIiQqJ3ZF6GiZIeXWyAi8+w13wiJL87yQK6qJQ3UyEqTLT2AXqC5+azUsuReMaDWNjRckgI6CRiWBNBBMBNYmDOsKvHQBMelSvNibfIiJk/5AlWCeYhVZD99yci84AYPRjgS+3Kp3RYfoFIY3rxDZ++wzn8LoOgHkjq77jCGc1e9jg1UCoPtI/5QXtLOeJgBaNxLj/umg/AcEToFoCowW3Qyu4PcwAd/pf8tS5wDSgAekoAKgJz7BE47w7mCn8EvgHxDNKjYe+22i3jcXaSWZvxIyA3zZMvFxZ5jqN+47nfC9LmAEV2bHJk4bg3OTXEwzzkN5yEyQCGO2W8MM9e9Z+TWPRxrbqi07Xop75kxMA+zNQnqqmJ/Za55iMjEpr3XEXP0THOSabeuMpgIN8zZayEfHuB8U3QTzznm95JM+xhywlykCyieGFeYXwYmwS1QYqLwEpt3S7NfHNAe4DZUWprzkyKXYFS3ANUttpMn5p/gNtFrNEe+W6w+qmRn8kCIUnIrrW4jM3lyeb5Ge9rUv/iqqLLRzADZEsxR4WHGRjM6JkRt8UpSeouoU6dOnTpl9Q9von7CmcwpBwAAAABJRU5ErkJggg=="

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/trade-in-icon.cfd1a88.png";

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/brder.91e0587.png";

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3dacfc70_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3dacfc70_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3dacfc70_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3dacfc70_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3dacfc70_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(15);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(123);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(124);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(125);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".home .play[data-v-3dacfc70]{margin:auto;padding:0 100px}.home .play .just[data-v-3dacfc70]{display:flex;justify-content:space-between;align-items:center}.home .play .just li h3[data-v-3dacfc70]{font-weight:800;font-size:72px;color:#fff;word-break:break-all}.home .play .just li h3 span[data-v-3dacfc70]{color:#339f01}.home .play .just li h3 strong[data-v-3dacfc70]{color:#3ac3f7}.home .play .just li p[data-v-3dacfc70]{color:#fff;font-size:27px;font-weight:400}.home .play .just li .explore[data-v-3dacfc70]{margin-top:82px}.home .play .just li .explore .video[data-v-3dacfc70]{margin-left:30px;color:#fff}.home .play .just li .explore .video img[data-v-3dacfc70]{margin-right:14px}.home .play .mechanism[data-v-3dacfc70]{color:#fff}.home .play .mechanism h3[data-v-3dacfc70]{color:#fff;font-weight:700;font-size:72px}.home .play .mechanism ul[data-v-3dacfc70]{display:flex;justify-content:space-between;align-items:center}.home .play .mechanism ul li[data-v-3dacfc70]{border-radius:12px;padding:20px;margin:10px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;background-size:100% 100%;width:50%;height:500px}.home .play .mechanism ul li h4[data-v-3dacfc70]{font-weight:700;font-size:32px;color:#fff;text-align:center}.home .play .mechanism ul li h4 img[data-v-3dacfc70]{margin-left:14px}.home .play .mechanism ul li p[data-v-3dacfc70]{color:#c5c5c5;font-weight:400;font-size:24px;margin-bottom:30px}.home .play .mechanism ul .trade[data-v-3dacfc70]{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat;background-size:100% 100%}.home .how[data-v-3dacfc70]{margin-top:300px;background:#d9d9d9}.home .how .howBack[data-v-3dacfc70]{width:1200px;margin:auto;position:relative;padding:60px 0 10px}.home .how .border[data-v-3dacfc70]{width:7px;height:100%;position:absolute;left:109px;top:0;background:#3ac3f7}.home .how h3[data-v-3dacfc70]{font-weight:700;font-size:48px;margin-left:200px}.home .how ul li[data-v-3dacfc70]{display:flex;justify-content:flex-start;align-items:center;margin-bottom:150px}.home .how ul li img[data-v-3dacfc70]{margin:0 20px;position:relative;z-index:11}.home .how ul li p[data-v-3dacfc70]{color:#000;font-weight:400;font-size:24px}.home .how ul li p span[data-v-3dacfc70]{background:#3ac3f7;font-size:12px}.home .how ul li p span[data-v-3dacfc70],.home .how ul li p strong[data-v-3dacfc70]{display:block;width:69px;text-align:center;color:#fff}.home .how ul li p strong[data-v-3dacfc70]{background:#000;font-size:32px}.home .how ul li .website[data-v-3dacfc70]{margin-left:10px}.home .what[data-v-3dacfc70]{background:linear-gradient(45deg,#000b2a,#011e4c)}.home .what .container[data-v-3dacfc70]{margin:auto}.home .what .happens[data-v-3dacfc70]{text-align:center;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat;background-size:100% 100%;padding-bottom:180px}.home .what .happens ul li[data-v-3dacfc70]{max-width:1100px;margin:auto}.home .what .happens ul h4[data-v-3dacfc70]{font-weight:700;font-size:48px;color:#fff;padding-top:130px}.home .what .happens ul p[data-v-3dacfc70]{font-size:24px;color:#fff;font-weight:400;line-height:180%}.home .what .metaluckboxVideo[data-v-3dacfc70]{width:1280px;margin:auto}@media only screen and (max-width:2000px){.home .play .just li h3[data-v-3dacfc70]{font-size:55px}.home .play[data-v-3dacfc70]{padding:0}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/minting.eb8662c.png";

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/trade-in.b60b05a.png";

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/happens.4279dea.png";

/***/ }),
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=3dacfc70&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home"},[_c('Head'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container play\" data-v-3dacfc70>","</div>",[_vm._ssrNode("<ul class=\"just\" data-v-3dacfc70>","</ul>",[_vm._ssrNode("<li data-v-3dacfc70>","</li>",[_vm._ssrNode("<h3 data-v-3dacfc70>\n          Play <span data-v-3dacfc70>MetaLuckBox</span> for just <strong data-v-3dacfc70>0.05 ETH</strong></h3> <p data-v-3dacfc70>\n          Mint your tickets at our official website, any NFT before Draw is\n          likely to be your chance to win a hundred times the prize.\n        </p> "),_vm._ssrNode("<p class=\"explore\" data-v-3dacfc70>","</p>",[_c('nuxt-link',{staticClass:"now",attrs:{"to":"/home"}},[_c('img',{attrs:{"src":__webpack_require__(115)}})]),_vm._ssrNode(" <a href=\"#video\" class=\"video\" data-v-3dacfc70><img"+(_vm._ssrAttr("src",__webpack_require__(116)))+" data-v-3dacfc70>Watch Video</a>")],2)],2),_vm._ssrNode(" <li data-v-3dacfc70><img"+(_vm._ssrAttr("src",__webpack_require__(117)))+" data-v-3dacfc70></li>")],2),_vm._ssrNode(" <div class=\"mechanism\" data-v-3dacfc70><h3 data-v-3dacfc70>Our Mechanism</h3> <ul data-v-3dacfc70><li data-v-3dacfc70><h4 data-v-3dacfc70>Minting<img"+(_vm._ssrAttr("src",__webpack_require__(118)))+" data-v-3dacfc70></h4> <p data-v-3dacfc70>\n            When the current round kicks off, the minting channel will open in\n            MetaLuckBox. Each round last for 48H. The user can mint NFTs\n            during the first 24H, after which the minting channel closes and\n            the user can no longer mint any NFTs.\n          </p> <p data-v-3dacfc70>\n            The total quantity of NFTs that user can be minted in a round is\n            predetermined. There’s no limit on how many NFTs or how many times\n            a user can mint, unless the number of minted NFTs in the current\n            round has reached the limit.\n          </p></li> <li class=\"trade\" data-v-3dacfc70><h4 data-v-3dacfc70>Trade-in<img"+(_vm._ssrAttr("src",__webpack_require__(119)))+" data-v-3dacfc70></h4> <p data-v-3dacfc70>\n            If the user no longer wants to keep his NFT, he can recycle it to\n            MetaLuckBox by selling it back. Once recycled, the NFT will be\n            destroyed immediately. The trade-in price of each NFT in\n            MetaLuckBox is 80% of its original price.\n          </p> <p data-v-3dacfc70>\n            There is no time limite on NFT trade-in, meaning they can trade in\n            minted NFTs when the current round is over.\n          </p></li></ul></div>")],2),_vm._ssrNode(" <div class=\"how\" data-v-3dacfc70><div class=\"howBack\" data-v-3dacfc70><h3 data-v-3dacfc70>How to Participate</h3> <p class=\"border\" data-v-3dacfc70></p> <ul data-v-3dacfc70>"+(_vm._ssrList((_vm.howList),function(item,key){return ("<li data-v-3dacfc70><p data-v-3dacfc70><span data-v-3dacfc70>STEP</span> <strong data-v-3dacfc70>"+_vm._ssrEscape(_vm._s(key + 1))+"</strong> <span data-v-3dacfc70>"+_vm._ssrEscape(_vm._s(item.ids))+"</span></p> <img"+(_vm._ssrAttr("src",__webpack_require__(120)))+" data-v-3dacfc70> <p class=\"website\" data-v-3dacfc70>"+_vm._ssrEscape("\n            "+_vm._s(item.value)+"\n          ")+"</p></li>")}))+"</ul></div></div> "),_vm._ssrNode("<div class=\"what\" data-v-3dacfc70>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-3dacfc70><div class=\"happens\" data-v-3dacfc70><ul data-v-3dacfc70><li data-v-3dacfc70><h4 data-v-3dacfc70>What Happens after Minting？</h4> <p data-v-3dacfc70>\n              After minting your NFTs, you can view them in the collection\n              page, but they will remain mystery boxes until the result is\n              released. However, you can still list them for sale in the\n              second 24H of the current round.\n            </p> <p data-v-3dacfc70>Wait for the result at the end of the current round.</p></li> <li data-v-3dacfc70><h4 data-v-3dacfc70>What Happens after Result Release?</h4> <p data-v-3dacfc70>\n              When the result is released, you will know by then whether you\n              are the winner. If you are the winner, you can claim your prize\n              and get the prize pot. If not, you can still sell your NFTs if\n              you don’t want to keep them. You can trade in unwanted NFTs on\n              MetaLuckBox’s official website (at 80% of its original price) or\n              list them for sale on OpenSea.\n            </p></li></ul></div></div> <div id=\"video\" class=\"metaluckboxVideo\" data-v-3dacfc70><video width=\"100%\" height=\"100%\" controls=\"controls\" data-v-3dacfc70><source src=\"https://metaluckbox.com/metaluckbox.mp4\" type=\"video/mp4\" data-v-3dacfc70></video></div> "),_c('FAQ',{attrs:{"id":"faq"}})],2),_vm._ssrNode(" "),_c('Bottom')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=3dacfc70&scoped=true&

// EXTERNAL MODULE: ./components/Head.vue + 4 modules
var Head = __webpack_require__(40);

// EXTERNAL MODULE: ./components/Bottom.vue + 4 modules
var Bottom = __webpack_require__(69);

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


/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: "IndexPage",
  components: {
    Head: Head["default"],
    Bottom: Bottom["default"]
  },

  data() {
    return {
      howList: [{
        ids: "ONE",
        value: "Visit the official website of MetaLuckBox and auto-logs in with your wallet (Metamask). "
      }, {
        ids: "TWO",
        value: "You then enter the minting page, where you can draw NFTs through minting and view information about the  previous and the current round. "
      }, {
        ids: "THREE",
        value: "There is no limit on how many NFTs or how many times you can mint, unless all NFTs have been minted in  the current round and there are no available NFTs. "
      }, {
        ids: "FOUR",
        value: "Each round lasts for 48H, as shown in the timer. You can mint NFTs during the first 24H and trade them once  you minted the NFT. The result of NFT draw will be announced at the end of each round."
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(121)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3dacfc70",
  "5df16b7e"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Head: __webpack_require__(40).default,FAQ: __webpack_require__(61).default,Bottom: __webpack_require__(69).default})


/***/ })
]);;
//# sourceMappingURL=index.js.map