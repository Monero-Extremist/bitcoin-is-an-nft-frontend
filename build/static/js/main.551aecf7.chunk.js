(this["webpackJsonpnft-dapp"]=this["webpackJsonpnft-dapp"]||[]).push([[0],{272:function(e,t,n){},279:function(e,t){},358:function(e,t,n){"use strict";n.r(t),n.d(t,"Polygon",(function(){return I})),n.d(t,"TokenBalance",(function(){return F})),n.d(t,"useMint",(function(){return N})),n.d(t,"App",(function(){return D}));var a=n(18),i=n(0),s=n.n(i),p=n(50),r=n.n(p),u=n(121),o=(n(157),n(86)),d=(n(92),n(6)),y=function(){return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsxs)("span",{className:"header-title",children:[Object(d.jsx)("h1",{children:"Bitcoin is an NFT"}),"We literally made the bitcoin blockchain into an NFT. You can now own bitcoin blocks."]}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{className:"header-text"}),Object(d.jsx)("div",{children:Object(d.jsx)("b",{children:"Every block you mint gives you nftBTC token rewards."})})]})},c=function(){return Object(d.jsx)(o.a,{bg:"light",expand:"lg",fixed:"top",children:Object(d.jsxs)(u.a,{children:[Object(d.jsx)(o.a.Brand,{href:"#home",children:"BTC Blocks NFT"}),Object(d.jsx)(o.a.Toggle,{"aria-controls":"basic-navbar-nav"})]})})},l=(n(272),n(379)),b=n(145),m=n(380),T=n(64),j=n(376),f=(n(273),n(148)),v=n(74),x=n(58),h=n(377),O=n(378),w=n(179),k=n(75),M=n(153),g=(n(357),[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"bitcoin",outputs:[{internalType:"contract ERC20BITCOIN",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_addy",type:"address"}],name:"bitcoinBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"bitcoinDecimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"bitcoinSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_blockNum",type:"uint256"}],name:"blockRewardCalc",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"mintBlock",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_steps",type:"uint256"},{internalType:"uint256",name:"_blockNum",type:"uint256"}],name:"mod",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"tokenCounter",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"payable",type:"function"}]),I={chainId:137,chainName:"Polygon",isTestChain:!1,isLocalChain:!1,multicallAddress:"0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507",getExplorerAddressLink:function(e){return"https://polygonscan.com/address/".concat(e)},getExplorerTransactionLink:function(e){return"https://polygonscan.com/tx/".concat(e)}},B={readOnlyChainId:I.chainID,readOnlyUrls:Object(a.a)({},I.chainID,"https://polygon-rpc.com/"),multicallAddresses:Object(a.a)({},I.chainID,"https://polygon-rpc.com/")},C="0x9a95ea51387d63e55afd9d718ba9846de16fb0a0",A="0xDD2dAaE523088022B1506C7876484ce734B46334";function F(){var e=Object(b.a)().account,t=Object(j.a)(C,e);return Object(d.jsx)("div",{children:t&&Object(d.jsxs)("p",{children:["You have: nftBTC tokens Balance: ",Object(T.c)(t,18)]})})}function N(e){var t=Object(h.a)(e,"mintBlock",{});return{state:t.state,send:t.send}}function D(){var e,t,n=Object(b.a)(),a=n.activateBrowserWallet,i=n.account,s=(n.library,n.deactivate),p=(n.active,Object(m.a)(i)),r=(Object(j.a)(C,i),Object(f.b)(),new v.utils.Interface(g));k.a.utils.getAddress(A);var o=new x.b(A,r),l=N(o),T=(l.state,l.send),h=(e=Object(M.a)({abi:r,address:A,method:"symbol",args:[]}),null!==(t=Object(M.a)({abi:r,address:A,method:"bitcoin",args:[]}))&&void 0!==t?t:[]),I=Object(O.a)();I.sendTransaction,I.stateTX;return Object(d.jsx)("div",{children:Object(d.jsxs)(u.a,{children:[Object(d.jsx)(w.a,{children:Object(d.jsx)("div",{children:Object(d.jsx)(c,{})})}),Object(d.jsx)(y,{}),Object(d.jsxs)("div",{children:[o&&Object(d.jsxs)("p",{children:[" NFT contract address (MATIC): ",o.address]}),!i&&Object(d.jsx)("p",{children:"Please connect your wallet to continue"}),!i&&Object(d.jsx)("button",{onClick:function(){return a()},children:"Connect"}),i&&Object(d.jsx)("button",{onClick:s,children:"Disconnect"}),!1]}),!1,p&&!1,!1,Object(d.jsx)("div",{}),Object(d.jsx)(F,{}),i&&Object(d.jsxs)("p",{children:[" nftBTC token contract address: ",h]}),i&&Object(d.jsx)("button",{onClick:function(){T()},children:"Mint"})]})})}r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(l.a,{config:B,children:Object(d.jsx)(D,{})})}),document.getElementById("root"))}},[[358,1,2]]]);
//# sourceMappingURL=main.551aecf7.chunk.js.map