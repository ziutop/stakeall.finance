_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"/EDR":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("23aj")}])},"23aj":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return xe}));var n=a("nKUr"),i=a("q1tI"),r=a("dfam"),c=a("JrkS"),o=a("tRbT"),s=a("e45s"),d=a.n(s),l=a("ED4I"),u=a("kKAo"),j=a("vJKn"),b=a.n(j),m=a("rg98"),h=a("5KpL"),x=a("B+V7"),p=a("Z6YE"),O=a("jTSF"),g=a("1Myq"),f=a("zOGZ"),v=a("Z3vd"),w=a("ofer"),y=a("Leku"),k=d()((function(e){return Object(l.a)({table:{},tableContainer:{height:"100%",padding:"30px"},logo:{height:"30px",width:"30px",objectFit:"contain"}})})),C=[{id:"name",label:"Name"},{id:"price",label:"Price"},{id:"quantity",label:"Quantity"},{id:"usdValue",label:"USD value"}],N=[{id:"indexer",label:"Indexer"},{id:"amount",label:"Amount"},{id:"timestamp",label:"Timestamp"},{id:"actions",label:"Actions"}],T=[{id:"validator",label:"Validator"},{id:"amount",label:"Amount"},{id:"timestamp",label:"Timestamp"},{id:"actions",label:"Actions"}],A=[{id:"borrowToken",label:"Borrow Token"},{id:"borrowAmount",label:"Amount"},{id:"rateMode",label:"Rate Mode"},{id:"timestamp",label:"Timestamp"},{id:"actions",label:"Actions"}],E=[{id:"depositToken",label:"Deposit Token"},{id:"depositAmount",label:"Amount"},{id:"timestamp",label:"Timestamp"},{id:"actions",label:"Actions"}],F=function(e){return e.maticProtocolDelegation.map((function(e){return{validator:e.validator,amount:e.amount,timestamp:e.blockTimestamp,actions:Object(n.jsx)(v.a,{variant:"outlined",color:"secondary",disabled:!0,children:"Manage"})}}))},R=function(e){return e.aaveBorrows.map((function(e){return{borrowToken:Object(O.j)(e.borrowToken,4),borrowAmount:e.borrowAmt,rateMode:e.rateMode,timestamp:e.blockTimestamp,actions:Object(n.jsx)(v.a,{variant:"outlined",color:"secondary",disabled:!0,children:"Manage"})}}))},_=function(e){return e.aaveBorrows.map((function(e){return{depositToken:Object(O.j)(e.depositToken,4),depositAmount:e.depositAmt,timestamp:e.blockTimestamp,actions:Object(n.jsx)(v.a,{variant:"outlined",color:"secondary",disabled:!0,children:"Manage"})}}))},I=function(e,t){var a=parseFloat(t),n=parseFloat(e);return"$".concat(parseFloat("".concat(n*a)).toFixed(2))},S=function(){var e=Object(i.useContext)(g.a).getUserActions,t=k(),a=Object(p.b)(),r=a.account,c=a.chainId,s=Object(i.useState)([]),d=s[0],l=s[1],u=Object(i.useState)([]),j=u[0],S=u[1],P=Object(i.useState)([]),D=P[0],q=P[1],M=Object(i.useState)([]),B=M[0],$=M[1],V=Object(i.useState)([]),U=V[0],L=V[1],G=Object(i.useState)(!1),H=G[0],Y=G[1],Q=Object(i.useCallback)((function(e){return Object.keys(e).map((function(t){var a=e[t],i=Object(O.b)(a.balance||"0",a.decimals);return{name:Object(n.jsx)(y.a,{tokenId:t}),quantity:i,price:a.usdPrice||"-",usdValue:a.usdPrice&&i&&I(i,a.usdPrice)}}))}),[t]);return Object(i.useEffect)((function(){var t=function(){var e=Object(m.a)(b.a.mark((function e(t,a){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Y(!0),e.next=3,h.a.getAllBalance(a,t);case 3:n=e.sent,l(Q(n)),Y(!1);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a=function(){var t=Object(m.a)(b.a.mark((function t(a){var i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,null===e||void 0===e?void 0:e(a);case 2:(i=t.sent)&&(S(i.graphProtocolDelegation.map((function(e){return{indexer:Object(O.j)(e.indexer,4),amount:e.amount,timestamp:e.blockTimestamp,actions:Object(n.jsx)(v.a,{variant:"outlined",color:"secondary",disabled:!0,children:"Manage"})}}))),q(F(i)),$(R(i)),L(_(i)));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();r&&c&&(t(r,c),a(r))}),[r,c]),H?Object(n.jsx)(f.a,{}):Object(n.jsxs)(o.a,{direction:"column",wrap:"nowrap",container:!0,children:[Object(n.jsxs)(o.a,{className:t.tableContainer,direction:"column",wrap:"nowrap",item:!0,container:!0,spacing:2,children:[Object(n.jsx)(o.a,{item:!0,children:Object(n.jsx)(w.a,{color:"secondary",id:"balance",variant:"h5",children:"Balances"})}),Object(n.jsx)(o.a,{item:!0,children:Object(n.jsx)(x.a,{headers:C,rows:d})})]}),Object(n.jsxs)(o.a,{className:t.tableContainer,direction:"column",wrap:"nowrap",item:!0,container:!0,spacing:2,children:[Object(n.jsx)(o.a,{item:!0,children:Object(n.jsx)(w.a,{color:"secondary",id:"graphstaking",variant:"h5",children:"Graph Delegations"})}),Object(n.jsx)(o.a,{item:!0,children:Object(n.jsx)(x.a,{headers:N,rows:j})})]}),Object(n.jsxs)(o.a,{className:t.tableContainer,direction:"column",wrap:"nowrap",item:!0,container:!0,spacing:2,children:[Object(n.jsx)(o.a,{item:!0,children:Object(n.jsx)(w.a,{color:"secondary",id:"maticstaking",variant:"h5",children:"Matic Delegations"})}),Object(n.jsx)(o.a,{item:!0,children:Object(n.jsx)(x.a,{headers:T,rows:D})})]}),Object(n.jsxs)(o.a,{className:t.tableContainer,direction:"column",wrap:"nowrap",item:!0,container:!0,spacing:2,children:[Object(n.jsx)(o.a,{item:!0,children:Object(n.jsx)(w.a,{color:"secondary",id:"aaveLoans",variant:"h5",children:"AAVE Deposits"})}),Object(n.jsx)(o.a,{item:!0,children:Object(n.jsx)(x.a,{headers:E,rows:U})})]}),Object(n.jsxs)(o.a,{className:t.tableContainer,direction:"column",wrap:"nowrap",item:!0,container:!0,spacing:2,children:[Object(n.jsx)(o.a,{item:!0,children:Object(n.jsx)(w.a,{color:"secondary",id:"aaveLoans",variant:"h5",children:"AAVE Borrows"})}),Object(n.jsx)(o.a,{item:!0,children:Object(n.jsx)(x.a,{headers:A,rows:B})})]})]})},P=d()((function(e){return Object(l.a)({overviewContainer:{width:"100%"}})})),D=function(){var e=P();return Object(n.jsx)(o.a,{component:u.a,className:e.overviewContainer,container:!0,direction:"row",children:Object(n.jsx)(S,{})})},q=a("cwiY"),M=a("jT3O"),B=a("UYTu"),$=a("+TN3"),V=a("Vlqo"),U=a("20a2");function L(){var e=Object(M.a)(["\nquery indexers($orderBy: Indexer_orderBy, $orderDirection: OrderDirection, $first: Int, $skip: Int, $where: Indexer_filter, $searchText: String, $addressSearchText: String) {\n  indexers(orderBy: $orderBy, orderDirection: $orderDirection, first: $first, skip: $skip, where: $where) {\n    id\n    createdAt\n    account {\n      id\n      defaultName {\n        id\n        name\n        __typename\n      }\n      image\n      __typename\n    }\n    allocations(first: 1000, orderBy: allocatedTokens, orderDirection: desc, where: {status: Active}) {\n      id\n      subgraphDeployment {\n        id\n        versions(orderBy: createdAt, orderDirection: desc, first: 1) {\n          id\n          subgraph {\n            id\n            image\n            displayName\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    stakedTokens\n    allocatedTokens\n    delegatedTokens\n    lockedTokens\n    delegationExchangeRate\n    delegatorParameterCooldown\n    lastDelegationParameterUpdate\n    queryFeeCut\n    queryFeeRebates\n    delegatorQueryFees\n    indexingRewardCut\n    indexingRewardEffectiveCut\n    queryFeesCollected\n    rewardsEarned\n    url\n    __typename\n  }\n}"]);return L=function(){return e},e}var G={orderBy:"stakedTokens",orderDirection:"desc",first:500,skip:0},H=Object(B.a)(L()),Y=[{id:"indexer",label:"Indexer",width:50},{id:"subgraphs",label:"Subgraphs",width:50},{id:"queryFeeCut",label:"Query Fee Cut",width:50},{id:"effectiveRewardCut",label:"Effective Reward Cut",width:50},{id:"cooldownRemained",label:"Cooldown Remained",width:50},{id:"owned",label:"Owned",width:50},{id:"delegated",label:"Delegated",width:50},{id:"allocated",label:"Allocated",width:50},{id:"queryFees",label:"Query Fees",width:50},{id:"indexerRewards",label:"Indexer Rewards",width:50},{id:"actions",label:"Actions",width:50}],Q=function(e){return e.allocations?e.allocations.map((function(e){return null!==e&&void 0!==e&&e.subgraphDeployment.versions?e.subgraphDeployment.versions.map((function(e){return{image:null===e||void 0===e?void 0:e.subgraph.image,name:null===e||void 0===e?void 0:e.subgraph.displayName}})):[]})).flat().filter((function(e){var t=e.name,a=e.image;return t||a})).filter((function(e,t,a){return t===a.findIndex((function(t){return t.image===e.image}))})).map((function(e){var t=e.image,a=e.name;return t?Object(n.jsx)("img",{height:"20px",width:"20px",src:t,alt:a||""}):Object(n.jsx)(n.Fragment,{})})):null},J=d()((function(){return Object(l.a)({table:{},tableContainer:{height:"100%"},logo:{height:"30px",width:"30px",objectFit:"contain"}})})),K=function(){var e=J(),t=Object($.a)(H,{variables:G}),a=t.data,r=t.loading,c=t.error,s=Object(i.useState)([]),d=s[0],l=s[1],u=Object(i.useContext)(V.a).setValidator,j=Object(U.useRouter)(),b=Object(i.useCallback)((function(e){null===u||void 0===u||u(e),j.push("/staking")}),[]);return Object(i.useEffect)((function(){a&&l(function(e,t){var a;return(null===e||void 0===e||null===(a=e.indexers)||void 0===a?void 0:a.map((function(e){var a,i;return{indexer:(null===(a=e.account)||void 0===a||null===(i=a.defaultName)||void 0===i?void 0:i.name)||Object(O.l)(e.account.id),subgraphs:Q(e),queryFeeCut:"".concat((e.queryFeeCut/Math.pow(10,4)).toFixed(0),"%"),effectiveRewardCut:"".concat((parseFloat(e.indexingRewardEffectiveCut)*Math.pow(10,2)).toFixed(0),"%"),cooldownRemained:e.delegatorParameterCooldown,owned:Object(O.d)(e.stakedTokens),delegated:Object(O.d)(e.delegatedTokens),allocated:Object(O.d)(e.allocatedTokens),queryFees:Object(O.d)(e.queryFeeRebates),indexerRewards:Object(O.d)(e.rewardsEarned),actions:Object(n.jsx)(v.a,{variant:"outlined",color:"secondary",onClick:function(){t(e.account.id)},children:"Delegate"})}})))||[]}(a,b))}),[a]),r?Object(n.jsx)(f.a,{}):c?(console.error(c),null):Object(n.jsx)(o.a,{className:e.tableContainer,container:!0,children:Object(n.jsx)(x.a,{headers:Y,rows:d})})},Z=a("30+C"),z=a("lFIR"),X=a("eomu"),W=a("QHvf"),ee=a("dw/m"),te=d()((function(e){return Object(l.a)({container:{padding:e.spacing(2)},card:{height:"300px",width:"300px",padding:e.spacing(4),textAlign:"center"},image:{height:"120px",width:"120px",objectFit:"contain"},ribbon:{backgroundColor:e.palette.secondary.main,width:"100%",color:e.palette.secondary.contrastText}})})),ae=function(){var e=te(),t=Object(i.useContext)(V.a).setProtocol,a=Object(O.h)(ee.a.LIVEPEER).address;Object(O.h)(ee.a.NUCYPHER).address;return Object(n.jsxs)(o.a,{className:e.container,container:!0,justify:"center",spacing:10,children:[Object(n.jsx)(o.a,{item:!0,children:Object(n.jsx)(Z.a,{variant:"outlined",children:Object(n.jsx)(z.a,{className:e.card,onClick:function(){null===t||void 0===t||t(ee.a.GRAPH)},children:Object(n.jsxs)(o.a,{container:!0,direction:"column",alignItems:"center",children:[Object(n.jsx)(o.a,{item:!0,children:Object(n.jsx)("img",{className:e.image,src:"".concat(X.a).concat(W.a[X.i].logo),alt:"graph"})}),Object(n.jsx)(o.a,{item:!0,children:Object(n.jsx)(w.a,{variant:"body1",color:"secondary",id:"modal-modal-description",children:"Graph"})}),Object(n.jsx)(o.a,{item:!0,children:Object(n.jsx)(w.a,{variant:"body2",color:"textSecondary",id:"modal-modal-description",children:"The Graph is an indexing protocol for querying networks like Ethereum and IPFS."})})]})})})}),Object(n.jsx)(o.a,{item:!0,children:Object(n.jsx)(Z.a,{variant:"outlined",children:Object(n.jsx)(z.a,{className:e.card,onClick:function(){null===t||void 0===t||t(ee.a.MATIC)},children:Object(n.jsxs)(o.a,{container:!0,direction:"column",alignItems:"center",children:[Object(n.jsx)(o.a,{item:!0,children:Object(n.jsx)("img",{className:e.image,src:"".concat(X.a).concat(W.a[X.k].logo),alt:"matic"})}),Object(n.jsx)(o.a,{item:!0,children:Object(n.jsx)(w.a,{variant:"body1",color:"secondary",id:"modal-modal-description",children:"Matic"})}),Object(n.jsx)(o.a,{item:!0,children:Object(n.jsx)(w.a,{variant:"body2",color:"textSecondary",id:"modal-modal-description",children:"Polygon is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks."})})]})})})}),Object(n.jsx)(o.a,{item:!0,children:Object(n.jsxs)(Z.a,{variant:"outlined",children:[Object(n.jsx)(z.a,{className:e.card,onClick:function(){null===t||void 0===t||t(ee.a.NUCYPHER)},children:Object(n.jsxs)(o.a,{container:!0,direction:"column",alignItems:"center",children:[Object(n.jsx)(o.a,{item:!0,children:Object(n.jsx)("img",{className:e.image,src:"https://cryptologos.cc/logos/nucypher-nu-logo.png",alt:"graph"})}),Object(n.jsx)(o.a,{item:!0,children:Object(n.jsx)(w.a,{variant:"body1",color:"secondary",id:"modal-modal-description",children:"Nucypher"})}),Object(n.jsx)(o.a,{item:!0,children:Object(n.jsx)(w.a,{variant:"body2",color:"textSecondary",id:"modal-modal-description",children:"Cryptographic Infrastructure for Privacy-Preserving Applications."})})]})}),Object(n.jsx)(o.a,{className:e.ribbon,item:!0,children:Object(n.jsx)(w.a,{align:"center",variant:"body2",id:"modal-modal-description",children:"Coming soon"})})]})}),Object(n.jsx)(o.a,{item:!0,children:Object(n.jsxs)(Z.a,{variant:"outlined",children:[Object(n.jsx)(z.a,{disabled:!0,className:e.card,onClick:function(){null===t||void 0===t||t(ee.a.LIVEPEER)},children:Object(n.jsxs)(o.a,{container:!0,direction:"column",alignItems:"center",children:[Object(n.jsx)(o.a,{item:!0,children:Object(n.jsx)("img",{className:e.image,src:"".concat(X.a).concat(W.a[a].logo),alt:"graph"})}),Object(n.jsx)(o.a,{item:!0,children:Object(n.jsx)(w.a,{variant:"body1",color:"secondary",id:"modal-modal-description",children:"LivePeer"})}),Object(n.jsx)(o.a,{item:!0,children:Object(n.jsx)(w.a,{variant:"body2",color:"textSecondary",id:"modal-modal-description",children:"Livepeer is a decentralized video streaming network built on the Ethereum blockchain."})})]})}),Object(n.jsx)(o.a,{className:e.ribbon,item:!0,children:Object(n.jsx)(w.a,{align:"center",variant:"body2",id:"modal-modal-description",children:"Coming soon"})})]})})]})},ne=d()((function(){return Object(l.a)({container:{width:"auto"},logoContainer:{height:"46px",width:"46px"},logo:{height:"30px",width:"30px",objectFit:"contain"}})})),ie=function(e){var t=e.name,a=e.logoUrl,i=ne();return Object(n.jsxs)(o.a,{className:i.container,wrap:"nowrap",container:!0,spacing:2,justify:"center",alignItems:"center",children:[Object(n.jsx)(o.a,{className:i.logoContainer,item:!0,children:Object(n.jsx)("img",{className:i.logo,src:a,alt:t})}),Object(n.jsx)(o.a,{item:!0,children:Object(n.jsx)(w.a,{variant:"body1",children:t})})]})},re=[{id:"name",label:"Name",width:50},{id:"id",label:"Validator Id",width:50},{id:"stake",label:"Stake",width:50},{id:"commission",label:"Commission",width:50},{id:"actions",label:"Actions",width:50}],ce=function(e,t){var a;return(null===(a=e.result)||void 0===a?void 0:a.map((function(e){return{id:e.id,name:Object(n.jsx)(ie,{logoUrl:e.logoUrl||"",name:e.name||""}),stake:e.totalStaked,commission:e.commissionPercent,actions:Object(n.jsx)(v.a,{variant:"outlined",color:"secondary",onClick:function(){var a;t((null===(a=e.id)||void 0===a?void 0:a.toString())||"")},children:"Delegate"})}})))||[]},oe=d()((function(){return Object(l.a)({table:{},tableContainer:{height:"100%"},logo:{height:"30px",width:"30px",objectFit:"contain"}})})),se=function(){var e=oe(),t=Object(i.useState)([]),a=t[0],r=t[1],c=Object(i.useState)(!1),s=c[0],d=c[1],l=Object(i.useContext)(V.a).setValidator,u=Object(U.useRouter)(),j=Object(i.useCallback)((function(e){null===l||void 0===l||l(e),u.push("/staking")}),[]);return Object(i.useEffect)((function(){(function(){var e=Object(m.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,h.b.getIndexers();case 3:t=e.sent,r(ce(t.data,j)),d(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),s?Object(n.jsx)(f.a,{}):Object(n.jsx)(o.a,{className:e.tableContainer,container:!0,children:Object(n.jsx)(x.a,{headers:re,rows:a})})},de=d()((function(e){return Object(l.a)({})})),le=function(){de();var e=Object(i.useContext)(V.a),t=e.protocol,a=e.setProtocol;return Object(i.useEffect)((function(){null===a||void 0===a||a(void 0)}),[]),Object(i.useEffect)((function(){}),[t]),t?t===ee.a.GRAPH?Object(n.jsx)(K,{}):t===ee.a.MATIC?Object(n.jsx)(se,{}):null:Object(n.jsx)(ae,{})},ue=d()((function(e){return Object(l.a)({dashboard:{margin:"30px"}})})),je=function(){var e=ue(),t=Object(i.useState)(0),a=t[0],o=t[1],s=Object(i.useCallback)((function(e,t){o(t)}),[]);return Object(n.jsxs)("section",{className:e.dashboard,children:[Object(n.jsx)(u.a,{elevation:3,children:Object(n.jsxs)(r.a,{value:a,onChange:s,children:[Object(n.jsx)(c.a,{label:"Overview"}),Object(n.jsx)(c.a,{label:"Staking"})]})}),Object(n.jsx)(q.a,{value:a,index:0,children:Object(n.jsx)(D,{})}),Object(n.jsx)(q.a,{value:a,index:1,children:Object(n.jsx)(le,{})})]})},be=a("oY5f"),me=a("3Wx2"),he=d()((function(e){return Object(l.a)({mainArea:{backgroundColor:e.palette.background.default,minHeight:"100vh",margin:0,padding:0}})}));function xe(){var e=he();return Object(n.jsxs)(be.a,{children:[Object(n.jsx)(me.a,{}),Object(n.jsx)(u.a,{component:"main",elevation:0,square:!0,className:e.mainArea,children:Object(n.jsx)(je,{})})]})}}},[["/EDR",1,2,0,3,4,6]]]);