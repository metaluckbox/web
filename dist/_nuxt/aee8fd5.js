(window.webpackJsonp=window.webpackJsonp||[]).push([[12,8,10],{1221:function(e,t,n){var content=n(1231);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(120).default)("e32ad1f6",content,!0,{sourceMap:!1})},1222:function(e,t,n){e.exports=n.p+"img/metamask-fox.7db9467.svg"},1224:function(e,t,n){var content=n(1238);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(120).default)("5183b5b5",content,!0,{sourceMap:!1})},1225:function(e,t,n){"use strict";n.r(t);var r=n(30),o=(n(122),n(1240)),c=n.n(o),l={name:"Head",components:{Metamask:n(1236).default},data:function(){return{accounts:[],web3:""}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.web3=new c.a(window.ethereum),t.next=3,e.web3.eth.getAccounts();case 3:e.accounts=t.sent;case 4:case"end":return t.stop()}}),t)})))()},methods:{singInEve:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.web3.eth.getAccounts();case 2:return n=t.sent,t.next=5,window.ethereum.enable();case 5:e.accounts=t.sent,0===n.length&&location.reload();case 7:case"end":return t.stop()}}),t)})))()},singUpEve:function(){window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:c.a.utils.numberToHex(56),chainName:"Binance Smart Chain Mainnet",nativeCurrency:{name:"bnb",symbol:"bnb",decimals:18},rpcUrls:["https://bsc-dataseed.binance.org"],blockExplorerUrls:["https://www.bscscan.com"]}]})},switchEthereumChain:function(e){window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:c.a.utils.numberToHex(e)}]})}}},m=(n(1237),n(61)),component=Object(m.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header"},[r("header",[r("ul",{staticClass:"container"},[r("li",[r("nuxt-link",{attrs:{to:"/"}},[r("img",{attrs:{src:n(1226)}})])],1),e._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/home"}},[e._v(" Mint ")]),e._v(" "),r("nuxt-link",{attrs:{to:"/claim"}},[e._v(" Claim ")]),e._v(" "),r("nuxt-link",{attrs:{to:"/nft"}},[e._v(" Collection ")]),e._v(" "),r("nuxt-link",{attrs:{to:"/history"}},[e._v(" History ")]),e._v(" "),"/"==e.$route.path?r("a",{attrs:{href:"#faq"}},[e._v(" FAQ ")]):e._e(),e._v(" "),r("p",[r("img",{attrs:{src:n(1222)}}),e._v(" "),e.accounts[0]?r("a",[e._v(e._s(e._f("userInformation")(e.accounts[0])))]):r("a",{on:{click:e.singInEve}},[e._v(" Connect Wallet ")])])],1)])]),e._v(" "),r("Metamask")],1)}),[],!1,null,"04e97453",null);t.default=component.exports},1226:function(e,t,n){e.exports=n.p+"img/logo.eb8b110.png"},1229:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAfCAYAAADwbH0HAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIDSURBVHgBvZcLccMwDEAdBmYwM1ggBMIYLAwWBs0QrEOQQigDh0FbBCmDlYEmrXJP8fztetOdmka29Cw7SuxGVQgAaLx0qAZVs/mCeiRtmuaiHiUEQ92gWsjLAbVHNbm4TQqIlzfUQa2zO6GeWRW3tajPoh+17XAG3lVllgZ1EZnMqB0PJuX3wn2dLCXZO+cW9Us4dqpSeJBu4BSrrYHuchlmYmmOkYZ707tVDxKKlZx2MbrZs9+dtYhhObb1G7rQqLg0SDaFDPLZsM8gbEYsYRca0egFceAiuICS9F7buMqaR+MeABMINpbAPegYaNcia0OGgW+mRNAkPAcV/Xa3ZcCfPd+8qITE4KVQ7uuWbk83B75JF3kAXgNlf7esi3JeqlA8eDGUffWNVwvmAFZAbaXvGgyFLwpvem/TrgpFgs/83xQ4SegIhaUm/Fvue5BPdV8DFfZiOFw/myT70joOQmvh4NWxfHPpWmgpHNbva+OMNhQY1u/qKDQC7yMJzNLYiayNsA+l0AC8V+tsF7Z3voPlhqq6jMB1JPYU6ixH9aEeJBSLYy4QK1lY77km+PueaxJLWLXhW+A/dpnCUU77z7pD/rOpGWiFX3R6m0ywES+v6npWInHnpBP/J3nidspKnjg+Ubd3n6c4e6rnI+Rlhms5ZZ+NRlUIB2zV7+zOqHNNdt+QN9JhdBzc3gAAAABJRU5ErkJggg=="},1230:function(e,t,n){"use strict";n(1221)},1231:function(e,t,n){var r=n(119)(!1);r.push([e.i,".popupMetamask .popup[data-v-cae1559e]{width:100%;height:100%;background-color:rgba(0,0,0,.8);z-index:11;top:50%}.popupMetamask .contentBox[data-v-cae1559e],.popupMetamask .popup[data-v-cae1559e]{color:#fff;position:fixed;left:50%;transform:translate(-50%,-50%)}.popupMetamask .contentBox[data-v-cae1559e]{top:30%;z-index:12;text-align:center}.popupMetamask .contentBox .content[data-v-cae1559e]{background:linear-gradient(108.4deg,#adafae 37.46%,#aeddcf 87.92%,#afffe8 157.07%),linear-gradient(107.35deg,rgba(199,255,252,.2) 38.1%,rgba(176,255,250,0) 132.78%);width:314px;height:197px}.popupMetamask .contentBox .content h3[data-v-cae1559e]{color:#fff;font-size:24px;font-weight:700;text-align:center;padding-top:22px}.popupMetamask .contentBox .content p label[data-v-cae1559e]{font-size:14px;display:block;margin-top:14px}.popupMetamask .contentBox .clone[data-v-cae1559e]{margin-top:18px}.popupMetamask .contentBox img[data-v-cae1559e]{cursor:pointer}",""]),e.exports=r},1236:function(e,t,n){"use strict";n.r(t);var r=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("h3",[e._v("Connect your wallet")]),e._v(" "),r("p",[r("img",{attrs:{width:"76px",src:n(1222)}}),e._v(" "),r("label",[e._v(" MetaMask ")])])])}],o={name:"popupMetamask",data:function(){return{bollPopup:!1}}},c=(n(1230),n(61)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.bollPopup?r("div",{staticClass:"popupMetamask"},[r("p",{staticClass:"popup",on:{click:function(t){e.bollPopup=!e.bollPopup}}}),e._v(" "),r("div",{staticClass:"contentBox"},[e._m(0),e._v(" "),r("img",{staticClass:"clone",attrs:{src:n(1229)},on:{click:function(t){e.bollPopup=!e.bollPopup}}})])]):e._e()}),r,!1,null,"cae1559e",null);t.default=component.exports},1237:function(e,t,n){"use strict";n(1224)},1238:function(e,t,n){var r=n(119),o=n(652),c=n(1239),l=r(!1),m=o(c);l.push([e.i,".header[data-v-04e97453]{background-color:#242424}.header ul[data-v-04e97453]{margin:auto;height:80px;line-height:80px;border-bottom:1px solid #383838}.header ul[data-v-04e97453],.header ul li[data-v-04e97453]{display:flex;justify-content:space-between;align-items:center}.header ul li a[data-v-04e97453]{color:#fff;font-size:16px;margin-right:32px}.header ul li p[data-v-04e97453]{display:inline-block;background:url("+m+") no-repeat;background-size:100% 100%;height:47px;line-height:47px;padding:0 30px;width:230px;overflow:hidden;text-align:center}.header ul li p img[data-v-04e97453]{margin-right:20px;width:27px}.header ul li p a[data-v-04e97453]{margin:0}",""]),e.exports=l},1239:function(e,t,n){e.exports=n.p+"img/singin.aa106f2.png"},1255:function(e,t){},1256:function(e,t){},1257:function(e,t){},1258:function(e,t){},1260:function(e,t){},1261:function(e,t){},1265:function(e,t){},1266:function(e,t){},1270:function(e,t){},1271:function(e,t){},1272:function(e,t){(function(t){e.exports=t}).call(this,{})},1273:function(e,t){},1274:function(e,t){},1275:function(e,t){},1276:function(e,t){},1279:function(e,t){},1280:function(e,t){},1463:function(e,t,n){var content=n(1820);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(120).default)("05993142",content,!0,{sourceMap:!1})},1819:function(e,t,n){"use strict";n(1463)},1820:function(e,t,n){var r=n(119)(!1);r.push([e.i,"div[data-v-3c3e21cd]{color:#fff}",""]),e.exports=r},1836:function(e,t,n){"use strict";n.r(t);n(78),n(76),n(77),n(35),n(154),n(62),n(155);var r=n(73),o=n(30),c=(n(122),n(153),n(1240)),l=n.n(c),m=n(3),y=n.n(m),d=n(1225);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var T=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"ApprovalCallerNotOwnerNorApproved",type:"error"},{inputs:[],name:"ApprovalQueryForNonexistentToken",type:"error"},{inputs:[],name:"ApprovalToCurrentOwner",type:"error"},{inputs:[],name:"ApproveToCaller",type:"error"},{inputs:[],name:"BalanceQueryForZeroAddress",type:"error"},{inputs:[],name:"MintToZeroAddress",type:"error"},{inputs:[],name:"MintZeroQuantity",type:"error"},{inputs:[],name:"OwnerIndexOutOfBounds",type:"error"},{inputs:[],name:"OwnerQueryForNonexistentToken",type:"error"},{inputs:[],name:"TokenIndexOutOfBounds",type:"error"},{inputs:[],name:"TransferCallerNotOwnerNorApproved",type:"error"},{inputs:[],name:"TransferFromIncorrectOwner",type:"error"},{inputs:[],name:"TransferToNonERC721ReceiverImplementer",type:"error"},{inputs:[],name:"TransferToZeroAddress",type:"error"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"admin",type:"address"}],name:"NewAdminAddress",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Paused",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"epoch",type:"uint256"}],name:"StartRound",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"token",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"TokenRecovery",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"TreasuryClaim",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Unpaused",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"epoch",type:"uint256"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"WinerNft",type:"event"},{inputs:[],name:"adminAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"blindBoxImg",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"claim",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"claimTreasury",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"currentEpoch",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"drawLuckNft",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getCurrentIndex",outputs:[{internalType:"uint128",name:"",type:"uint128"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"epoch",type:"uint256"}],name:"getDrawListForEpoch",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"intervalSeconds",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_mintAmount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"mintLimitPerRound",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"mintPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"operatorAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"paused",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"requestId",type:"bytes32"},{internalType:"uint256",name:"randomness",type:"uint256"}],name:"rawFulfillRandomness",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_token",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"recoverToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256[]",name:"_tokenIds",type:"uint256[]"}],name:"refund",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"refundPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"rounds",outputs:[{internalType:"uint256",name:"epoch",type:"uint256"},{internalType:"uint256",name:"startTimestamp",type:"uint256"},{internalType:"uint256",name:"lockTimestamp",type:"uint256"},{internalType:"uint256",name:"closeTimestamp",type:"uint256"},{internalType:"uint256",name:"startId",type:"uint256"},{internalType:"uint256",name:"endId",type:"uint256"},{internalType:"uint256",name:"totalAmount",type:"uint256"},{internalType:"uint256",name:"jackpotAmount",type:"uint256"},{internalType:"uint256",name:"mintPrice",type:"uint256"},{internalType:"uint256",name:"refundPrice",type:"uint256"},{internalType:"uint256",name:"winnerId",type:"uint256"},{internalType:"bytes32",name:"oracleId",type:"bytes32"},{internalType:"bool",name:"oracleCalled",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_adminAddress",type:"address"}],name:"setAdmin",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_intervalSeconds",type:"uint256"}],name:"setIntervalSeconds",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_mintLimitPerRound",type:"uint256"}],name:"setMintLimitPerRound",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_mintPrice",type:"uint256"}],name:"setMintPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_refundPrice",type:"uint256"}],name:"setRefundPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"startNewRound",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"thanksImg",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"treasuryAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"treasuryFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"_blindBoxImg",type:"string"}],name:"uploadBlindBoxImg",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_thanksImg",type:"string"}],name:"uploadThanksImg",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_winnerImg",type:"string"}],name:"uploadWinnerImg",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"winnerClaimed",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"winnerImg",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"winnerNFT",outputs:[{internalType:"bool",name:"isWin",type:"bool"},{internalType:"uint256",name:"epoch",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"}],w={name:"NuxtTutorial",data:function(){return{accounts:"",contract:"",web3:"",result:{},gasPriceWei:null,gasLimitHex:null,amount:null,claimId:"",currentEpoch:"",itemDate:{}}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,r,o,c,m,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return new l.a.providers.HttpProvider("https://goerli.infura.io/v3/2b86c426683f4a6095fd175fe931d799"),e.web3=new l.a(window.ethereum),t.next=4,e.web3.eth.getAccounts();case 4:return e.accounts=t.sent,t.next=7,ethereum.enable();case 7:return e.accounts=t.sent,e.web3.eth.accounts.privateKeyToAccount,e.contract=new e.web3.eth.Contract(T,"0x0026545a58d8ad153255ce86184a24ca4f98d997"),n=e.web3,5,"10","1800000",e.gasPriceWei=n.utils.numberToHex(n.utils.toWei("10","gwei")),e.gasLimitHex=n.utils.numberToHex("1800000"),e.amount=n.utils.numberToHex(n.utils.toWei(String(.005),"ether")),t.next=19,e.contract.methods.currentEpoch().call();case 19:return e.currentEpoch=t.sent,t.next=22,e.contract.methods.rounds(e.currentEpoch).call();case 22:r=t.sent,o=function(e){return e<=0?"00":e<10?"0"+e:e},c=v({},r),m=e,setInterval((function(){var e=parseInt(Date.now()/1e3),t=parseInt(c.lockTimestamp),n=parseInt((t-e)/60/60%24),r=parseInt((t-e)/60%60),s=parseInt((t-e)%60);m.itemDate={h:o(n),m:o(r),s:o(s)}}),1e3),d=function(e){return y()(1e3*parseInt(e)).format("YYYY-MM-DD HH:mm:ss")},r.startTimestamp=d(r.startTimestamp),r.closeTimestamp=d(r.closeTimestamp),r.lockTimestamp=d(r.lockTimestamp),e.result=r;case 32:case"end":return t.stop()}}),t)})))()},methods:{mint:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(0,e.contract.methods.mint)(3).send({from:e.accounts[0],gasPrice:e.gasPriceWei,gasLimit:e.gasLimitHex,value:e.amount}).on("confirmation",(function(e,t){console.log(e,t)}));case 2:case"end":return t.stop()}}),t)})))()},refundEve:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.contract.methods.refund,t.next=3,e.contract.methods.balanceOf(e.accounts[0]).call();case 3:return t.sent,t.next=6,e.contract.methods.tokenOfOwnerByIndex(e.accounts[0],0).call();case 6:r=t.sent,n([r]).send({from:e.accounts[0],gasPrice:e.gasPriceWei,gasLimit:e.gasLimitHex}).on("confirmation",(function(e,t){console.log(e,t)}));case 8:case"end":return t.stop()}}),t)})))()},winningEve:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,i,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.contract.methods.balanceOf(e.accounts[0]).call();case 2:n=t.sent,i=0;case 4:if(!(i<parseInt(n))){t.next=15;break}return t.next=7,e.contract.methods.tokenOfOwnerByIndex(e.accounts[0],i).call();case 7:return r=t.sent,t.next=10,e.contract.methods.winnerNFT(r).call();case 10:t.sent.isWin&&(e.claimId=r);case 12:i++,t.next=4;break;case 15:case"end":return t.stop()}}),t)})))()},claimEve:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.contract.methods.claim(e.claimId).send({from:e.accounts[0],gasPrice:e.gasPriceWei,gasLimit:e.gasLimitHex}).on("confirmation",(function(e,t){console.log(e,t)}));case 1:case"end":return t.stop()}}),t)})))()}},components:{Head:d.default}},h=(n(1819),n(61)),component=Object(h.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[n("a",{on:{click:e.mint}},[e._v("mint")])]),e._v(" "),n("p",[e._v("开始时间 "+e._s(e.result.startTimestamp))]),e._v(" "),n("p",[e._v("交易时间 "+e._s(e.result.lockTimestamp))]),e._v(" "),n("p",[e._v("开奖时间 "+e._s(e.result.closeTimestamp))]),e._v(" "),n("p",[n("a",{on:{click:e.refundEve}},[e._v("回购")])]),e._v(" "),n("p",[n("a",{on:{click:e.winningEve}},[e._v("查看是否中奖")])]),e._v(" "),n("p",[n("a",{on:{click:e.claimEve}},[e._v("claim")])]),e._v(" "),n("p",[e._v("当前第"+e._s(e.currentEpoch)+"轮")]),e._v(" "),n("p",[e._v("已售 "+e._s(e.result.endId-e.result.startId)+" 个")]),e._v(" "),n("p",[e._v("\n    "+e._s(e.result.totalAmount)+"\n  ")]),e._v(" "),n("p",[e._v("\n    "+e._s(e.result.jackpotAmount)+"\n  ")]),e._v("\n  "+e._s(e.itemDate)+"\n")])}),[],!1,null,"3c3e21cd",null);t.default=component.exports}}]);