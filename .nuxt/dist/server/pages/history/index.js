exports.ids = [11,3,5];
exports.modules = {

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/history/index.vue?vue&type=template&id=af2137a0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Head'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"history\" data-v-af2137a0>","</div>",[(_vm.loading)?_vm._ssrNode("<ul data-v-af2137a0>","</ul>",[_vm._ssrNode("<li class=\"title\" data-v-af2137a0><strong data-v-af2137a0> # </strong> <strong class=\"nftId\" data-v-af2137a0> NFT ID </strong> <strong data-v-af2137a0> Start Time </strong> <strong data-v-af2137a0> End Time </strong> <strong data-v-af2137a0> Prize </strong></li> <img width=\"100%\""+(_vm._ssrAttr("src",__webpack_require__(90)))+" style=\"margin-bottom: 20px\" data-v-af2137a0> "+(_vm._ssrList((_vm.eventAttr),function(item,key){return ("<li class=\"tableBody\" data-v-af2137a0><p data-v-af2137a0><span class=\"index\" data-v-af2137a0>"+_vm._ssrEscape(" "+_vm._s(key + 1)+" ")+"</span></p> <p class=\"back\" data-v-af2137a0>"+_vm._ssrEscape(_vm._s(item.winnerId))+"</p> <p class=\"item\" data-v-af2137a0><span data-v-af2137a0>"+_vm._ssrEscape(_vm._s(_vm.moment(item.startTimestamp * 1000).format("HH:mm:ss")))+"</span> <label data-v-af2137a0>"+_vm._ssrEscape(_vm._s(_vm.moment(item.startTimestamp * 1000).format("YYYY-MM-DD")))+"</label></p> <p class=\"item\" data-v-af2137a0><span data-v-af2137a0>"+_vm._ssrEscape(_vm._s(_vm.moment(item.closeTimestamp * 1000).format("HH:mm:ss")))+"</span> <label data-v-af2137a0>"+_vm._ssrEscape(_vm._s(_vm.moment(item.closeTimestamp * 1000).format("YYYY-MM-DD")))+"</label></p> <p class=\"usd\" data-v-af2137a0><img"+(_vm._ssrAttr("src",__webpack_require__(91)))+" data-v-af2137a0> <span data-v-af2137a0>"+_vm._ssrEscape(_vm._s(item.jackpotAmount / _vm.singNum)+" ETH")+"</span></p></li>")})))],2):_vm._ssrNode("<div style=\"text-align: center; padding: 30px 0px\" data-v-af2137a0>","</div>",[_c('a-spin',{attrs:{"size":"large"}})],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/history/index.vue?vue&type=template&id=af2137a0&scoped=true&

// EXTERNAL MODULE: external "web3"
var external_web3_ = __webpack_require__(31);
var external_web3_default = /*#__PURE__*/__webpack_require__.n(external_web3_);

// EXTERNAL MODULE: ./common/minxins/mint.js + 1 modules
var mint = __webpack_require__(52);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(33);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/history/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var historyvue_type_script_lang_js_ = ({
  name: "IndexPage",
  mixins: [mint["a" /* default */]],

  data() {
    return {
      eventAttr: [],
      moment: external_moment_default.a,
      loading: false
    };
  },

  async mounted() {
    const web3 = new external_web3_default.a(new external_web3_default.a.providers.HttpProvider("https://goerli.infura.io/v3/41d3db874b584770865cb0c194f39c47"));
    const events = await web3.eth.getPastLogs({
      address: "0xe37971960574A60ec0078c0b370a62595AB288FA",
      topics: ["0xf8661aec877e4b8b87afea92dee5fda3b952cb324def1d37b09f00475473cbdc"],
      fromBlock: 0
    });
    const roundAttr = [];

    for (let i = 0; i < events.length; i++) {
      let event = events[i]; // console.log(JSON.stringify(event));
      // 获取到账户
      // 获取到当前轮数据

      let round = parseInt(event.topics[1]);
      let callRound = [this.contractAddr, await this.contract.methods.rounds(round).encodeABI()];
      roundAttr.push(callRound);
    }

    const roundResult = await this.multicall.methods.aggregate(roundAttr).call();
    const eventAttr = [];

    for (let item in roundResult["1"]) {
      const ids = roundResult["1"][item];
      const startTimestamp = parseInt("0x" + ids.substring(66, 130));
      const closeTimestamp = parseInt("0x" + ids.substring(194, 258));
      const winnerId = parseInt("0x" + ids.substring(66 + 64 * 9, 66 + 64 * 10));
      const jackpotAmount = parseInt("0x" + ids.substring(66 + 64 * 6, 66 + 64 * 7));
      eventAttr.push({
        startTimestamp,
        closeTimestamp,
        winnerId,
        jackpotAmount,
        transactionHash: "https://rinkeby.etherscan.io/tx/" + events[item]["transactionHash"]
      });
    }

    this.eventAttr = eventAttr;
    this.loading = true;
  },

  methods: {
    async handleEvent(event) {
      let round = parseInt(event.topics[1]);
      let tokenId = parseInt(event.topics[2]);
      let blockNumber = parseInt(event.blockNumber);
      let address = "";
      let rounds = "";

      try {
        address = await this.contract.methods.ownerOf(tokenId).call();
        rounds = await this.contract.methods.rounds(round).call();
      } catch (e) {}

      return {
        round,
        tokenId,
        address,
        blockNumber,
        rounds
      };
    }

  }
});
// CONCATENATED MODULE: ./pages/history/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_historyvue_type_script_lang_js_ = (historyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/history/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(92)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_historyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "af2137a0",
  "245717c3"
  
)

/* harmony default export */ var pages_history = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Head: __webpack_require__(40).default})


/***/ }),

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

/***/ 38:
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

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.eb8b110.png";

/***/ }),

/***/ 40:
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

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Head_vue_vue_type_style_index_0_id_04e97453_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Head_vue_vue_type_style_index_0_id_04e97453_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Head_vue_vue_type_style_index_0_id_04e97453_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Head_vue_vue_type_style_index_0_id_04e97453_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Head_vue_vue_type_style_index_0_id_04e97453_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 46:
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

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/singin.aa106f2.png";

/***/ }),

/***/ 48:
/***/ (function(module) {

module.exports = JSON.parse("[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"ApprovalCallerNotOwnerNorApproved\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ApprovalQueryForNonexistentToken\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ApprovalToCurrentOwner\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ApproveToCaller\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BalanceQueryForZeroAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MintToZeroAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MintZeroQuantity\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"OwnerIndexOutOfBounds\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"OwnerQueryForNonexistentToken\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TokenIndexOutOfBounds\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferCallerNotOwnerNorApproved\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFromIncorrectOwner\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferToNonERC721ReceiverImplementer\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferToZeroAddress\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdminAddress\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Paused\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"epoch\",\"type\":\"uint256\"}],\"name\":\"StartRound\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"TokenRecovery\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"TreasuryClaim\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Unpaused\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"epoch\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"WinerNft\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"adminAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"blindBoxImg\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"}],\"name\":\"claim\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"claimTreasury\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"currentEpoch\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"drawLuckNft\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentIndex\",\"outputs\":[{\"internalType\":\"uint128\",\"name\":\"\",\"type\":\"uint128\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"epoch\",\"type\":\"uint256\"}],\"name\":\"getDrawListForEpoch\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"intervalSeconds\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_mintAmount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"mintLimitPerRound\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"mintPrice\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"operatorAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"paused\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"requestId\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"randomness\",\"type\":\"uint256\"}],\"name\":\"rawFulfillRandomness\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"recoverToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"_tokenIds\",\"type\":\"uint256[]\"}],\"name\":\"refund\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"refundPrice\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"rounds\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"epoch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"startTimestamp\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lockTimestamp\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"closeTimestamp\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"startId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"endId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"jackpotAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"mintPrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"refundPrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"winnerId\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"oracleId\",\"type\":\"bytes32\"},{\"internalType\":\"bool\",\"name\":\"oracleCalled\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_adminAddress\",\"type\":\"address\"}],\"name\":\"setAdmin\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_intervalSeconds\",\"type\":\"uint256\"}],\"name\":\"setIntervalSeconds\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_mintLimitPerRound\",\"type\":\"uint256\"}],\"name\":\"setMintLimitPerRound\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_mintPrice\",\"type\":\"uint256\"}],\"name\":\"setMintPrice\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_refundPrice\",\"type\":\"uint256\"}],\"name\":\"setRefundPrice\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"startNewRound\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"thanksImg\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"treasuryAmount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"treasuryFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_blindBoxImg\",\"type\":\"string\"}],\"name\":\"uploadBlindBoxImg\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_thanksImg\",\"type\":\"string\"}],\"name\":\"uploadThanksImg\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_winnerImg\",\"type\":\"string\"}],\"name\":\"uploadWinnerImg\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"winnerClaimed\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"winnerImg\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"winnerNFT\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"isWin\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"epoch\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"withdraw\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]");

/***/ }),

/***/ 51:
/***/ (function(module) {

module.exports = JSON.parse("[{\"constant\":true,\"inputs\":[],\"name\":\"getCurrentBlockTimestamp\",\"outputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"components\":[{\"name\":\"target\",\"type\":\"address\"},{\"name\":\"callData\",\"type\":\"bytes\"}],\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"aggregate\",\"outputs\":[{\"name\":\"blockNumber\",\"type\":\"uint256\"},{\"name\":\"returnData\",\"type\":\"bytes[]\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getLastBlockHash\",\"outputs\":[{\"name\":\"blockHash\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"getEthBalance\",\"outputs\":[{\"name\":\"balance\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getCurrentBlockDifficulty\",\"outputs\":[{\"name\":\"difficulty\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getCurrentBlockGasLimit\",\"outputs\":[{\"name\":\"gaslimit\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getCurrentBlockCoinbase\",\"outputs\":[{\"name\":\"coinbase\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"blockNumber\",\"type\":\"uint256\"}],\"name\":\"getBlockHash\",\"outputs\":[{\"name\":\"blockHash\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}]");

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "web3"
var external_web3_ = __webpack_require__(31);
var external_web3_default = /*#__PURE__*/__webpack_require__.n(external_web3_);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(33);

// EXTERNAL MODULE: ./common/json/abi.json
var abi = __webpack_require__(48);

// EXTERNAL MODULE: ./common/json/multicall.json
var multicall = __webpack_require__(51);

// EXTERNAL MODULE: external "ant-design-vue"
var external_ant_design_vue_ = __webpack_require__(32);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(34);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(6);

// CONCATENATED MODULE: ./utils/axios.js
//1、引入axios


 //2、创建axios的实例

let httpService = external_axios_default.a.create({
  baseUrl:  false ? undefined : '/proApi',
  // TODO:具体的配置可以根据项目情况而来
  timeout: 60000
}); //5、get请求的封装

function get(url, params = {}, headers = {}) {
  return new Promise((resolve, reject) => {
    httpService({
      url: url,
      method: 'get',
      params: params,
      headers: headers
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err);
    });
  });
}
function post(url, params = {}, headers = {
  'Content-Type': 'application/json'
}) {
  return new Promise((resolve, reject) => {
    if (!params.game_id) {
      params['game_id'] = parseInt(localStorage.getItem('gameid'));
    }

    params['access_token'] = localStorage.getItem('access_token');
    httpService({
      url: url,
      method: 'post',
      data: params,
      headers: headers
    }).then(res => {
      if (res.data.code == 1001) {
        localStorage.removeItem('access_token');
        window.location.replace("/");
      }

      if (res.data.code) {
        external_ant_design_vue_["message"].warning(res.data.message);
      }

      resolve(res.data || {});
    }).catch(err => {
      reject(err);
    });
  });
} //7、将模块暴露

/* harmony default export */ var axios = ({
  get,
  post
});
// CONCATENATED MODULE: ./common/minxins/mint.js






/* harmony default export */ var mint = __webpack_exports__["a"] = ({
  data() {
    return {
      accounts: [],
      contract: "",
      web3: "",
      result: {
        mainThisNum: 0,
        jackpotAmount: 0
      },
      amount: null,
      claimId: "",
      currentEpoch: "",
      itemDate: {
        "h": "00",
        "m": "00",
        "s": "00"
      },
      nftIdAttr: [],
      claimNftIdAttr: [],
      mintLimitPerRound: 0,
      mintPrice: 0,
      jackpotAmount: 0,
      balanceNum: 1,
      claimNftBoll: true,
      mintNum: 1,
      contractAddr: "0xe37971960574A60ec0078c0b370a62595AB288FA",
      singNum: 1000000000000000000
    };
  },

  async mounted() {
    this.web3 = new external_web3_default.a(window.ethereum);
    const getAccounts = await this.web3.eth.getAccounts();
    this.accounts = await window.ethereum.enable();

    if (getAccounts.length === 0) {
      location.reload();
    } //监听账号切换


    ethereum.on('accountsChanged', function (accounts) {
      location.reload();
    });
    ethereum.on("networkChanged", networkIDstring => {
      console.log(networkIDstring);

      if (networkIDstring !== '5') {
        this.switchEthereumChain(5);
      }

      location.reload();
    });
    console.log(ethereum.networkVersion);

    if (ethereum.networkVersion !== '5') {
      this.switchEthereumChain(5);
      external_ant_design_vue_["notification"].error({
        message: 'MetaMask',
        description: 'Network error, please switch'
      });
      return;
    }

    this.contract = new this.web3.eth.Contract(abi, this.contractAddr);
    this.multicall = new this.web3.eth.Contract(multicall, "0x42ad527de7d4e9d9d011ac45b31d8551f8fe9821");
    this.init();
  },

  methods: {
    async estimateGas(func, value = 0) {
      try {
        const gas = await func.estimateGas({
          from: this.accounts[0],
          value
        });
        return Math.floor(gas * 1.2);
      } catch (error) {
        console.log("errr", error.message);
        const objStartIndex = error.message.indexOf("{");
        external_ant_design_vue_["notification"].error({
          message: 'MetaMask',
          description: error.message.slice(0, objStartIndex)
        });
      }
    },

    switchEthereumChain(value) {
      window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{
          chainId: external_web3_default.a.utils.numberToHex(value) // 目标链ID

        }]
      });
    },

    async init() {
      this.nftIdAttr = [];
      this.claimNftIdAttr = [];
      this.contract.methods.mintLimitPerRound().call().then(value => {
        this.mintLimitPerRound = value;
      });
      this.contract.methods.mintPrice().call().then(value => {
        this.mintPrice = value;
      });
      const LastCurrentEpoch = await this.contract.methods.currentEpoch().call();

      if (LastCurrentEpoch > 1) {
        const {
          jackpotAmount
        } = await this.contract.methods.rounds(LastCurrentEpoch - 1).call();
        this.jackpotAmount = jackpotAmount;
      }

      const balanceNum = await this.contract.methods.balanceOf(this.accounts[0]).call();
      this.balanceNum = parseInt(balanceNum);
      console.log(balanceNum);

      if (!this.balanceNum) {
        this.claimNftBoll = false;
      }

      const calls = [];

      for (let i = 0; i < this.balanceNum; i++) {
        let call = [this.contractAddr, await this.contract.methods.tokenOfOwnerByIndex(this.accounts[0], i).encodeABI()];
        calls.push(call);
      }

      const tokenIdsResult = await this.multicall.methods.aggregate(calls).call();
      let tokenIds = tokenIdsResult[1];
      const winnerNFT = await this.multicallEve(tokenIds, 'winnerNFT');
      const winnerClaimed = await this.multicallEve(tokenIds, 'winnerClaimed');
      const tokenURI = await this.multicallEve(tokenIds, 'tokenURI');

      for (let i = 0; i < tokenIds.length; i++) {
        const isWin = this.web3.utils.hexToBytes('0x' + winnerNFT[1][i].substring(2, 66))[31];
        const epoch = this.web3.utils.hexToBytes('0x' + winnerNFT[1][i].substring(66, 130))[31];
        const isBool = this.web3.utils.hexToBytes('0x' + winnerClaimed[1][i].substring(2, 66))[31];
        const hexToAsciis = this.web3.utils.hexToAscii(tokenURI[1][i]);
        const {
          image
        } = await get(hexToAsciis.substring(64, hexToAsciis.length));
        const {
          refundPrice,
          jackpotAmount
        } = await this.contract.methods.rounds(epoch).call();
        this.nftIdAttr.push({
          id: parseInt(tokenIds[i]),
          boll: false,
          isWin: isWin,
          image: image,
          refundPrice: refundPrice / this.singNum
        });

        if (isWin && !isBool) {
          // const { jackpotAmount } = await this.contract.methods.rounds(epoch).call();
          this.claimNftIdAttr.push({
            id: parseInt(tokenIds[i]),
            boll: false,
            image: image,
            jackpotAmount: jackpotAmount / this.singNum
          });
        }
      }

      if (!this.claimNftIdAttr.length) {
        this.claimNftBoll = false;
      }
    },

    async multicallEve(tokenIds, type) {
      let winners = [];

      for (let i = 0; i < tokenIds.length; i++) {
        let tokenId = parseInt(tokenIds[i]);
        let winner = [this.contractAddr, await this.contract.methods[type](tokenId).encodeABI()];
        winners.push(winner);
      }

      let winnerResult = await this.multicall.methods.aggregate(winners).call();
      return winnerResult;
    }

  }
});

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(93);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("59303258", content, true, context)
};

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tables.2355b88.png";

/***/ }),

/***/ 91:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAATCAYAAACKsM07AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFQSURBVHgBrVSBUcMwDFQ4BsgGeAO6AR6hbMAGdAOyAd0gbEA2aJiAdIKGCZINjERfRicSDtL8nU6NLOtfcu2C/oGUUmRXsnVFUfS0Jrj4Nn3jxFbSmkBRi4rWAhd7MIXf4Yc/d4H2ReFBirm1YNTX+B7w/exyS7Yn5NdZwET7J6gO2KAIyK9sTA6f7cUQK/ZKMJi2PZGidkrn9gwmlgkOWsSo8UTBjWM3UbhCR4qtJu+1kJu9xBu2zczZ7bAuvkQsGoJAs8GF8GKvEO9MTqTLcAt/zAR87UdDsqHLEOGbTAC8wd/RQqTzW6XoPEHuIC1/Z7T7kafyVe/aLLYusXXqgis2YrQWEf6ogUwgzy8X+eCfN2yP+A/LgQXYD3COOFHa03nEOt6GZjb4C7YUMQt3BDKaVyiWblooHKGyR2owfgOTbuXsGp7GPf2GpZdtat8nUHA/+MTzbOEAAAAASUVORK5CYII="

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_af2137a0_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_af2137a0_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_af2137a0_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_af2137a0_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_af2137a0_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(15);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(94);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".history[data-v-af2137a0]{margin:auto;max-width:1200px;padding-top:100px;padding-bottom:100px}.history ul li[data-v-af2137a0]{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px}.history ul p[data-v-af2137a0]{width:290px}.history ul .title strong[data-v-af2137a0]{font-weight:700;font-size:16px;line-height:32px;color:#000;text-shadow:-1px 0 #fff,0 1px #fff,1px 0 #fff,0 -1px #fff;display:inline-block;width:290px}.history ul .title .nftId[data-v-af2137a0]{padding-left:20px}.history ul .tableBody[data-v-af2137a0]{color:#fff;font-size:16px}.history ul .tableBody .back[data-v-af2137a0]{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;background-size:150px 100%;height:40px;line-height:40px;text-indent:20px}.history ul .tableBody .index[data-v-af2137a0]{border-left:6px solid #0297ff;width:45px;height:44px;text-align:center;line-height:44px;display:inline-block;background:radial-gradient(87.18% 87.18% at 7.03%,at 6.18%,rgba(95,254,255,.2) 0,transparent 100%),linear-gradient(152.02deg,#56545f 16.59%,#0d0c13 102.6%),#d9d9d9;background:radial-gradient(87.18% 87.18% at 7.03% 6.18%,rgba(95,254,255,.2) 0,transparent 100%),linear-gradient(152.02deg,#56545f 16.59%,#0d0c13 102.6%),#d9d9d9}.history ul .tableBody .item[data-v-af2137a0]{font-size:16px}.history ul .tableBody .item span[data-v-af2137a0]{display:block}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/back.7f3406b.png";

/***/ })

};;
//# sourceMappingURL=index.js.map