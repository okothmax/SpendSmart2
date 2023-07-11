(()=>{"use strict";var e={1183:(e,t,n)=>{var a=n(1957),r=n(1947),o=n(499),i=n(9835);function c(e,t,n,a,r,o){const c=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(c)}var s=n(9167),l=n(1746),d=n(1569);class p{async authenticate(){return await d.api.get("/sanctum/csrf-cookie")}}class u{default(){let e=new p;return e.authenticate().then((()=>d.api.get("/api/v1/currencies/default")))}}var h=n(3555);const m=(0,i.aZ)({name:"App",preFetch({store:e}){const t=(0,h.S)(e);t.refreshCacheKey();const n=function(){let e=new s.Z;return e.getByName("viewRange").then((e=>{const n=e.data.data.attributes.data;t.updateViewRange(n),t.setDatesFromViewRange()})).catch((e=>{console.error("Could not load view range."),console.log(e)}))},a=function(){let e=new s.Z;return e.getByName("listPageSize").then((e=>{const n=e.data.data.attributes.data;t.updateListPageSize(n)})).catch((e=>{console.error("Could not load listPageSize."),console.log(e)}))},r=function(){let e=new u;return e.default().then((e=>{let n=parseInt(e.data.data.id),a=e.data.data.attributes.code;t.setCurrencyId(n),t.setCurrencyCode(a)})).catch((e=>{console.error("Could not load preferences."),console.log(e),e.response&&401===e.response.status&&(window.location.href="/login")}))},o=function(){return(new l.Z).get("locale").then((e=>{const n=e.data.data.attributes.data.replace("_","-");t.setLocale(n)})).catch((e=>{console.error("Could not load locale."),console.log(e)}))};r().then((()=>{n(),a(),o()}))}});var _=n(1639);const g=(0,_.Z)(m,[["render",c]]),b=g;var f=n(3340),y=n(7363);const w=(0,f.h)((()=>{const e=(0,y.WB)();return e}));var P=n(8910);const v=[{path:"/",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(2306)]).then(n.bind(n,2306)),name:"index",meta:{dateSelector:!0,pageTitle:"firefly.welcome_back"}}]},{path:"/development",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(7676)]).then(n.bind(n,7676)),name:"development.index",meta:{pageTitle:"firefly.development"}}]},{path:"/export",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(8493)]).then(n.bind(n,8493)),name:"export.index",meta:{pageTitle:"firefly.export"}}]},{path:"/budgets",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(159)]).then(n.bind(n,159)),name:"budgets.index",meta:{pageTitle:"firefly.budgets",breadcrumbs:[{title:"budgets",route:"budgets.index",params:[]}]}}]},{path:"/budgets/show/:id",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(753)]).then(n.bind(n,753)),name:"budgets.show",meta:{pageTitle:"firefly.budgets",breadcrumbs:[{title:"placeholder",route:"budgets.show",params:[]}]}}]},{path:"/budgets/edit/:id",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(7916)]).then(n.bind(n,7916)),name:"budgets.edit",meta:{pageTitle:"firefly.budgets",breadcrumbs:[{title:"placeholder",route:"budgets.show",params:[]}]}}]},{path:"/budgets/create",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(4670)]).then(n.bind(n,4670)),name:"budgets.create",meta:{pageTitle:"firefly.budgets",breadcrumbs:[{title:"placeholder",route:"budgets.show",params:[]}]}}]},{path:"/subscriptions",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(5529)]).then(n.bind(n,5529)),name:"subscriptions.index",meta:{pageTitle:"firefly.subscriptions",breadcrumbs:[{title:"placeholder",route:"subscriptions.index",params:[]}]}}]},{path:"/subscriptions/show/:id",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(1198)]).then(n.bind(n,1198)),name:"subscriptions.show",meta:{pageTitle:"firefly.subscriptions",breadcrumbs:[{title:"placeholder",route:"subscriptions.index"}]}}]},{path:"/subscriptions/edit/:id",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(8490)]).then(n.bind(n,8490)),name:"subscriptions.edit",meta:{pageTitle:"firefly.subscriptions",breadcrumbs:[{title:"placeholder",route:"subscriptions.index"}]}}]},{path:"/subscriptions/create",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(9378)]).then(n.bind(n,9378)),name:"subscriptions.create",meta:{dateSelector:!1,pageTitle:"firefly.subscriptions"}}]},{path:"/piggy-banks",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(6254)]).then(n.bind(n,6254)),name:"piggy-banks.index",meta:{pageTitle:"firefly.piggyBanks",breadcrumbs:[{title:"piggy-banks",route:"piggy-banks.index",params:[]}]}}]},{path:"/piggy-banks/create",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(7073)]).then(n.bind(n,7073)),name:"piggy-banks.create",meta:{pageTitle:"firefly.piggy-banks",breadcrumbs:[{title:"placeholder",route:"piggy-banks.create",params:[]}]}}]},{path:"/piggy-banks/show/:id",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(3576)]).then(n.bind(n,3576)),name:"piggy-banks.show",meta:{pageTitle:"firefly.piggy-banks",breadcrumbs:[{title:"placeholder",route:"piggy-banks.index"}]}}]},{path:"/piggy-banks/edit/:id",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(4216)]).then(n.bind(n,4216)),name:"piggy-banks.edit",meta:{pageTitle:"firefly.piggy-banks",breadcrumbs:[{title:"placeholder",route:"piggy-banks.index"}]}}]},{path:"/transactions/show/:id",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(8659)]).then(n.bind(n,8659)),name:"transactions.show",meta:{pageTitle:"firefly.transactions",breadcrumbs:[{title:"placeholder",route:"transactions.index",params:{type:"todo"}},{title:"placeholder",route:"transactions.show",params:[]}]}}]},{path:"/transactions/create/:type",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(6317)]).then(n.bind(n,6317)),name:"transactions.create",meta:{dateSelector:!1,pageTitle:"firefly.transactions"}}]},{path:"/transactions/:type",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(1341)]).then(n.bind(n,1341)),name:"transactions.index",meta:{dateSelector:!1,pageTitle:"firefly.transactions",breadcrumbs:[{title:"transactions"}]}}]},{path:"/transactions/edit/:id",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(9376)]).then(n.bind(n,9376)),name:"transactions.edit",meta:{pageTitle:"firefly.transactions",breadcrumbs:[{title:"placeholder",route:"transactions.index",params:{type:"todo"}},{title:"placeholder",route:"transactions.show",params:[]}]}}]},{path:"/rules",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(9729)]).then(n.bind(n,9729)),name:"rules.index",meta:{pageTitle:"firefly.rules"}}]},{path:"/rules/show/:id",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(7222)]).then(n.bind(n,7222)),name:"rules.show",meta:{pageTitle:"firefly.rules",breadcrumbs:[{title:"placeholder",route:"transactions.index",params:{type:"todo"}},{title:"placeholder",route:"transactions.show",params:[]}]}}]},{path:"/rules/create",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(3726)]).then(n.bind(n,3726)),name:"rules.create",meta:{pageTitle:"firefly.rules",breadcrumbs:[{title:"placeholder",route:"transactions.index",params:{type:"todo"}}]}}]},{path:"/rules/edit/:id",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(7450)]).then(n.bind(n,7450)),name:"rules.edit",meta:{pageTitle:"firefly.rules",breadcrumbs:[{title:"placeholder",route:"rules.index",params:{type:"todo"}}]}}]},{path:"/rule-groups/edit/:id",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(1019)]).then(n.bind(n,1019)),name:"rule-groups.edit",meta:{pageTitle:"firefly.rules",breadcrumbs:[{title:"placeholder",route:"transactions.index",params:{type:"todo"}}]}}]},{path:"/rule-groups/create",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(1800)]).then(n.bind(n,1800)),name:"rule-groups.create",meta:{pageTitle:"firefly.rule-groups",breadcrumbs:[{title:"placeholder",route:"transactions.index",params:{type:"todo"}}]}}]},{path:"/recurring",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(4036)]).then(n.bind(n,4036)),name:"recurring.index",meta:{pageTitle:"firefly.recurrences"}}]},{path:"/recurring/create",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(4355)]).then(n.bind(n,4355)),name:"recurring.create",meta:{pageTitle:"firefly.recurrences",breadcrumbs:[{title:"placeholder",route:"recurrences.create",params:[]}]}}]},{path:"/recurring/show/:id",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(7697)]).then(n.bind(n,7697)),name:"recurring.show",meta:{pageTitle:"firefly.recurrences",breadcrumbs:[{title:"placeholder",route:"recurrences.index"}]}}]},{path:"/recurring/edit/:id",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(9412)]).then(n.bind(n,9412)),name:"recurring.edit",meta:{pageTitle:"firefly.recurrences",breadcrumbs:[{title:"placeholder",route:"recurrences.index"}]}}]},{path:"/accounts/show/:id",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(4575)]).then(n.bind(n,4575)),name:"accounts.show",meta:{pageTitle:"firefly.accounts",breadcrumbs:[{title:"placeholder",route:"accounts.index",params:{type:"todo"}},{title:"placeholder",route:"accounts.show",params:[]}]}}]},{path:"/accounts/reconcile/:id",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(4918)]).then(n.bind(n,3953)),name:"accounts.reconcile",meta:{pageTitle:"firefly.accounts",breadcrumbs:[{title:"placeholder",route:"accounts.index",params:{type:"todo"}},{title:"placeholder",route:"accounts.reconcile",params:[]}]}}]},{path:"/accounts/edit/:id",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(9253)]).then(n.bind(n,9253)),name:"accounts.edit",meta:{pageTitle:"firefly.accounts",breadcrumbs:[{title:"placeholder",route:"accounts.index",params:{type:"todo"}},{title:"placeholder",route:"accounts.edit",params:[]}]}}]},{path:"/accounts/:type",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(9173)]).then(n.bind(n,9173)),name:"accounts.index",meta:{pageTitle:"firefly.accounts"}}]},{path:"/accounts/create/:type",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(9432)]).then(n.bind(n,9432)),name:"accounts.create",meta:{pageTitle:"firefly.accounts"}}]},{path:"/categories",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(9053)]).then(n.bind(n,9053)),name:"categories.index",meta:{pageTitle:"firefly.categories"}}]},{path:"/categories/show/:id",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(7039)]).then(n.bind(n,7039)),name:"categories.show",meta:{pageTitle:"firefly.categories",breadcrumbs:[{title:"placeholder",route:"categories.show",params:[]}]}}]},{path:"/categories/edit/:id",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(8561)]).then(n.bind(n,8561)),name:"categories.edit",meta:{pageTitle:"firefly.categories",breadcrumbs:[{title:"placeholder",route:"categories.show",params:[]}]}}]},{path:"/categories/create",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(9052)]).then(n.bind(n,9052)),name:"categories.create",meta:{pageTitle:"firefly.categories",breadcrumbs:[{title:"placeholder",route:"categories.show",params:[]}]}}]},{path:"/tags",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(6745)]).then(n.bind(n,6745)),name:"tags.index",meta:{pageTitle:"firefly.tags"}}]},{path:"/tags/show/:id",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(3611)]).then(n.bind(n,9286)),name:"tags.show",meta:{pageTitle:"firefly.tags",breadcrumbs:[{title:"placeholder",route:"tags.show",params:[]}]}}]},{path:"/groups",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(4647)]).then(n.bind(n,4647)),name:"groups.index",meta:{pageTitle:"firefly.object_groups_page_title"}}]},{path:"/groups/show/:id",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(2372)]).then(n.bind(n,2372)),name:"groups.show",meta:{pageTitle:"firefly.groups",breadcrumbs:[{title:"placeholder",route:"groups.show",params:[]}]}}]},{path:"/groups/edit/:id",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(7493)]).then(n.bind(n,7493)),name:"groups.edit",meta:{pageTitle:"firefly.groups",breadcrumbs:[{title:"placeholder",route:"categories.show",params:[]}]}}]},{path:"/reports",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(8006)]).then(n.bind(n,8006)),name:"reports.index",meta:{pageTitle:"firefly.reports"}}]},{path:"/report/default/:accounts/:start/:end",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(990)]).then(n.bind(n,3694)),name:"reports.default",meta:{pageTitle:"firefly.reports"}}]},{path:"/webhooks",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(5114)]).then(n.bind(n,5114)),name:"webhooks.index",meta:{pageTitle:"firefly.webhooks"}}]},{path:"/webhooks/show/:id",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(9381)]).then(n.bind(n,9381)),name:"webhooks.show",meta:{pageTitle:"firefly.webhooks",breadcrumbs:[{title:"placeholder",route:"groups.show",params:[]}]}}]},{path:"/webhooks/edit/:id",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(9814)]).then(n.bind(n,9814)),name:"webhooks.edit",meta:{pageTitle:"firefly.webhooks",breadcrumbs:[{title:"placeholder",route:"groups.show",params:[]}]}}]},{path:"/webhooks/create",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(7232)]).then(n.bind(n,7232)),name:"webhooks.create",meta:{pageTitle:"firefly.webhooks",breadcrumbs:[{title:"placeholder",route:"webhooks.show",params:[]}]}}]},{path:"/currencies",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(9158)]).then(n.bind(n,9158)),name:"currencies.index",meta:{pageTitle:"firefly.currencies"}}]},{path:"/currencies/show/:code",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(1238)]).then(n.bind(n,1238)),name:"currencies.show",meta:{pageTitle:"firefly.currencies",breadcrumbs:[{title:"placeholder",route:"currencies.show",params:[]}]}}]},{path:"/currencies/edit/:code",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(607)]).then(n.bind(n,607)),name:"currencies.edit",meta:{pageTitle:"firefly.currencies",breadcrumbs:[{title:"placeholder",route:"currencies.show",params:[]}]}}]},{path:"/currencies/create",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(3912)]).then(n.bind(n,3912)),name:"currencies.create",meta:{pageTitle:"firefly.currencies",breadcrumbs:[{title:"placeholder",route:"currencies.create",params:[]}]}}]},{path:"/administrations",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(2255)]).then(n.bind(n,2255)),name:"administration.index",meta:{pageTitle:"firefly.administration_index"}}]},{path:"/profile",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(4799)]).then(n.bind(n,4799)),name:"profile.index",meta:{pageTitle:"firefly.profile"}}]},{path:"/profile/data",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(5724)]).then(n.bind(n,5724)),name:"profile.data",meta:{pageTitle:"firefly.profile_data"}}]},{path:"/preferences",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(7341)]).then(n.bind(n,7341)),name:"preferences.index",meta:{pageTitle:"firefly.preferences"}}]},{path:"/system",component:()=>Promise.all([n.e(4736),n.e(8825)]).then(n.bind(n,8825)),children:[{path:"",component:()=>Promise.all([n.e(4736),n.e(3064),n.e(1872)]).then(n.bind(n,1872)),name:"system.index",meta:{pageTitle:"firefly.system"}}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([n.e(4736),n.e(2769)]).then(n.bind(n,2769))}],T=v,x=(0,f.BC)((function(){const e=P.r5,t=(0,P.p7)({scrollBehavior:()=>({left:0,top:0}),routes:T,history:e("/v3/")});return t}));async function k(e,t){const n=e(b);n.use(r.Z,t);const a="function"===typeof w?await w({}):w;n.use(a);const i=(0,o.Xl)("function"===typeof x?await x({store:a}):x);return a.use((({store:e})=>{e.router=i})),{app:n,store:a,router:i}}var D=n(9527),S=n(214),Z=n(4462),R=n(3703);const C={config:{dark:"auto"},lang:D.Z,iconSet:S.Z,plugins:{Dialog:Z.Z,LocalStorage:R.Z}};let A="function"===typeof b.preFetch?b.preFetch:void 0!==b.__c&&"function"===typeof b.__c.preFetch&&b.__c.preFetch;function O(e,t){const n=e?e.matched?e:t.resolve(e).route:t.currentRoute.value;if(!n)return[];const a=n.matched.filter((e=>void 0!==e.components));return 0===a.length?[]:Array.prototype.concat.apply([],a.map((e=>Object.keys(e.components).map((t=>{const n=e.components[t];return{path:e.path,c:n}})))))}function N({router:e,store:t,publicPath:n}){e.beforeResolve(((a,r,o)=>{const i=window.location.href.replace(window.location.origin,""),c=O(a,e),s=O(r,e);let l=!1;const d=c.filter(((e,t)=>l||(l=!s[t]||s[t].c!==e.c||e.path.indexOf("/:")>-1))).filter((e=>void 0!==e.c&&("function"===typeof e.c.preFetch||void 0!==e.c.__c&&"function"===typeof e.c.__c.preFetch))).map((e=>void 0!==e.c.__c?e.c.__c.preFetch:e.c.preFetch));if(!1!==A&&(d.unshift(A),A=!1),0===d.length)return o();let p=!1;const u=e=>{p=!0,o(e)},h=()=>{!1===p&&o()};d.reduce(((e,o)=>e.then((()=>!1===p&&o({store:t,currentRoute:a,previousRoute:r,redirect:u,urlPath:i,publicPath:n})))),Promise.resolve()).then(h).catch((e=>{console.error(e),h()}))}))}const M="/v3/",B=/\/\//,j=e=>(M+e).replace(B,"/");async function I({app:e,router:t,store:n},a){let r=!1;const o=e=>{try{return j(t.resolve(e).href)}catch(n){}return Object(e)===e?null:e},i=e=>{if(r=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=o(e);null!==t&&(window.location.href=t,window.location.reload())},c=window.location.href.replace(window.location.origin,"");for(let l=0;!1===r&&l<a.length;l++)try{await a[l]({app:e,router:t,store:n,ssrContext:null,redirect:i,urlPath:c,publicPath:M})}catch(s){return s&&s.url?void i(s.url):void console.error("[Quasar] boot error:",s)}!0!==r&&(e.use(t),N({router:t,store:n}),e.mount("#q-app"))}k(a.ri,C).then((e=>{const[t,a]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(n.bind(n,7030)),Promise.resolve().then(n.bind(n,1569))]).then((t=>{const n=a(t).filter((e=>"function"===typeof e));I(e,n)}))}))},9167:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(1569);class r{getByName(e){return a.api.get("/api/v1/preferences/"+e)}postByName(e,t){return a.api.post("/api/v1/preferences",{name:e,data:t})}}},1746:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(1569);class r{get(e){return a.api.get("/api/v2/preferences/"+e)}}},1569:(e,t,n)=>{n.r(t),n.d(t,{api:()=>l,default:()=>d});var a=n(3340),r=n(9981),o=n.n(r),i=n(8268);const c=(0,i.setupCache)({maxAge:9e5,exclude:{query:!1}}),s="/",l=o().create({baseURL:s,withCredentials:!0,adapter:c.adapter}),d=(0,a.xr)((({app:e})=>{o().defaults.withCredentials=!0,o().defaults.baseURL=s,e.config.globalProperties.$axios=o(),e.config.globalProperties.$api=l}))},7030:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(3340),r=n(9991);const o={config:{html_language:"en",month_and_day_fns:"MMMM d, y"},form:{name:"Name",amount_min:"Minimum amount",amount_max:"Maximum amount",url:"URL",title:"Title",first_date:"First date",repetitions:"Repetitions",description:"Description",iban:"IBAN",skip:"Skip",date:"Date"},list:{name:"Name",account_number:"Account number",currentBalance:"Current balance",lastActivity:"Last activity",active:"Is active?"},breadcrumbs:{placeholder:"[Placeholder]",budgets:"Budgets",subscriptions:"Subscriptions",transactions:"Transactions",title_expenses:"Expenses",title_withdrawal:"Expenses",title_revenue:"Revenue / income",title_deposit:"Revenue / income",title_transfer:"Transfers",title_transfers:"Transfers",asset_accounts:"Asset accounts",expense_accounts:"Expense accounts",revenue_accounts:"Revenue accounts",liabilities_accounts:"Liabilities"},firefly:{administration_index:"Financial administration",actions:"Actions",edit:"Edit",delete:"Delete",reconcile:"Reconcile",create_new_asset:"Create new asset account",confirm_action:"Confirm action",new_budget:"New budget",new_asset_account:"New asset account",newTransfer:"New transfer",submission_options:"Submission options",apply_rules_checkbox:"Apply rules",fire_webhooks_checkbox:"Fire webhooks",newDeposit:"New deposit",newWithdrawal:"New expense",bills_paid:"Bills paid",left_to_spend:"Left to spend",no_budget:"(no budget)",budgeted:"Budgeted",spent:"Spent",no_bill:"(no bill)",rule_trigger_source_account_starts_choice:"Source account name starts with..",rule_trigger_source_account_ends_choice:"Source account name ends with..",rule_trigger_source_account_is_choice:"Source account name is..",rule_trigger_source_account_contains_choice:"Source account name contains..",rule_trigger_account_id_choice:"Either account ID is exactly..",rule_trigger_source_account_id_choice:"Source account ID is exactly..",rule_trigger_destination_account_id_choice:"Destination account ID is exactly..",rule_trigger_account_is_cash_choice:"Either account is cash",rule_trigger_source_is_cash_choice:"Source account is (cash) account",rule_trigger_destination_is_cash_choice:"Destination account is (cash) account",rule_trigger_source_account_nr_starts_choice:"Source account number / IBAN starts with..",rule_trigger_source_account_nr_ends_choice:"Source account number / IBAN ends with..",rule_trigger_source_account_nr_is_choice:"Source account number / IBAN is..",rule_trigger_source_account_nr_contains_choice:"Source account number / IBAN contains..",rule_trigger_destination_account_starts_choice:"Destination account name starts with..",rule_trigger_destination_account_ends_choice:"Destination account name ends with..",rule_trigger_destination_account_is_choice:"Destination account name is..",rule_trigger_destination_account_contains_choice:"Destination account name contains..",rule_trigger_destination_account_nr_starts_choice:"Destination account number / IBAN starts with..",rule_trigger_destination_account_nr_ends_choice:"Destination account number / IBAN ends with..",rule_trigger_destination_account_nr_is_choice:"Destination account number / IBAN is..",rule_trigger_destination_account_nr_contains_choice:"Destination account number / IBAN contains..",rule_trigger_transaction_type_choice:"Transaction is of type..",rule_trigger_category_is_choice:"Category is..",rule_trigger_amount_less_choice:"Amount is less than..",rule_trigger_amount_is_choice:"Amount is..",rule_trigger_amount_more_choice:"Amount is more than..",rule_trigger_description_starts_choice:"Description starts with..",rule_trigger_description_ends_choice:"Description ends with..",rule_trigger_description_contains_choice:"Description contains..",rule_trigger_description_is_choice:"Description is..",rule_trigger_date_on_choice:"Transaction date is..",rule_trigger_date_before_choice:"Transaction date is before..",rule_trigger_date_after_choice:"Transaction date is after..",rule_trigger_created_at_on_choice:"Transaction was made on..",rule_trigger_updated_at_on_choice:"Transaction was last edited on..",rule_trigger_budget_is_choice:"Budget is..",rule_trigger_tag_is_choice:"Any tag is..",rule_trigger_currency_is_choice:"Transaction currency is..",rule_trigger_foreign_currency_is_choice:"Transaction foreign currency is..",rule_trigger_has_attachments_choice:"Has at least this many attachments",rule_trigger_has_no_category_choice:"Has no category",rule_trigger_has_any_category_choice:"Has a (any) category",rule_trigger_has_no_budget_choice:"Has no budget",rule_trigger_has_any_budget_choice:"Has a (any) budget",rule_trigger_has_no_bill_choice:"Has no bill",rule_trigger_has_any_bill_choice:"Has a (any) bill",rule_trigger_has_no_tag_choice:"Has no tag(s)",rule_trigger_has_any_tag_choice:"Has one or more (any) tags",rule_trigger_any_notes_choice:"Has (any) notes",rule_trigger_no_notes_choice:"Has no notes",rule_trigger_notes_is_choice:"Notes are..",rule_trigger_notes_contains_choice:"Notes contain..",rule_trigger_notes_starts_choice:"Notes start with..",rule_trigger_notes_ends_choice:"Notes end with..",rule_trigger_bill_is_choice:"Bill is..",rule_trigger_external_id_is_choice:"External ID is..",rule_trigger_internal_reference_is_choice:"Internal reference is..",rule_trigger_journal_id_choice:"Transaction journal ID is..",rule_trigger_any_external_url_choice:"Transaction has an external URL",rule_trigger_no_external_url_choice:"Transaction has no external URL",rule_trigger_id_choice:"Transaction ID is..",rule_action_delete_transaction_choice:"DELETE transaction(!)",rule_action_set_category_choice:"Set category to ..",rule_action_clear_category_choice:"Clear any category",rule_action_set_budget_choice:"Set budget to ..",rule_action_clear_budget_choice:"Clear any budget",rule_action_add_tag_choice:"Add tag ..",rule_action_remove_tag_choice:"Remove tag ..",rule_action_remove_all_tags_choice:"Remove all tags",rule_action_set_description_choice:"Set description to ..",rule_action_update_piggy_choice:"Add / remove transaction amount in piggy bank ..",rule_action_append_description_choice:"Append description with ..",rule_action_prepend_description_choice:"Prepend description with ..",rule_action_set_source_account_choice:"Set source account to ..",rule_action_set_destination_account_choice:"Set destination account to ..",rule_action_append_notes_choice:"Append notes with ..",rule_action_prepend_notes_choice:"Prepend notes with ..",rule_action_clear_notes_choice:"Remove any notes",rule_action_set_notes_choice:"Set notes to ..",rule_action_link_to_bill_choice:"Link to a bill ..",rule_action_convert_deposit_choice:"Convert the transaction to a deposit",rule_action_convert_withdrawal_choice:"Convert the transaction to a withdrawal",rule_action_convert_transfer_choice:"Convert the transaction to a transfer",placeholder:"[Placeholder]",recurrences:"Recurring transactions",title_expenses:"Expenses",title_withdrawal:"Expenses",title_revenue:"Revenue / income",pref_1D:"One day",pref_1W:"One week",pref_1M:"One month",pref_3M:"Three months (quarter)",pref_6M:"Six months",pref_1Y:"One year",repeat_freq_yearly:"yearly","repeat_freq_half-year":"every half-year",repeat_freq_quarterly:"quarterly",repeat_freq_monthly:"monthly",repeat_freq_weekly:"weekly",single_split:"Split",asset_accounts:"Asset accounts",expense_accounts:"Expense accounts",liabilities_accounts:"Liabilities",undefined_accounts:"Accounts",name:"Name",revenue_accounts:"Revenue accounts",description:"Description",category:"Category",title_deposit:"Revenue / income",title_transfer:"Transfers",title_transfers:"Transfers",piggyBanks:"Piggy banks",rules:"Rules",accounts:"Accounts",categories:"Categories",tags:"Tags",object_groups_page_title:"Groups",reports:"Reports",webhooks:"Webhooks",currencies:"Currencies",administration:"Administration",profile:"Profile",source_account:"Source account",destination_account:"Destination account",amount:"Amount",date:"Date",time:"Time",preferences:"Preferences",transactions:"Transactions",balance:"Balance",budgets:"Budgets",subscriptions:"Subscriptions",welcome_back:"What's playing?",bills_to_pay:"Bills to pay",net_worth:"Net worth",pref_last365:"Last year",pref_last90:"Last 90 days",pref_last30:"Last 30 days",pref_last7:"Last 7 days",pref_YTD:"Year to date",pref_QTD:"Quarter to date",pref_MTD:"Month to date"}},i={"en-US":o},c=(0,a.xr)((({app:e})=>{const t=(0,r.o)({locale:"en-US",messages:i});e.use(t)}))},3555:(e,t,n)=>{n.d(t,{S:()=>m});var a=n(7363),r=n(1776),o=n(7104),i=n(3637),c=n(444),s=n(6490),l=n(7164),d=n(3611),p=n(9739),u=n(5057),h=n(4453);const m=(0,a.Q_)("firefly-iii",{state:()=>({drawerState:!0,viewRange:"1M",listPageSize:10,locale:"en-US",range:{start:null,end:null},defaultRange:{start:null,end:null},currencyCode:"AAA",currencyId:"0",cacheKey:"initial"}),getters:{getViewRange(e){return e.viewRange},getLocale(e){return e.locale},getListPageSize(e){return e.listPageSize},getCurrencyCode(e){return e.currencyCode},getCurrencyId(e){return e.currencyId},getRange(e){return e.range},getDefaultRange(e){return e.defaultRange},getCacheKey(e){return e.cacheKey}},actions:{refreshCacheKey(){let e=Math.random().toString(36).replace(/[^a-z]+/g,"").slice(0,8);this.setCacheKey(e)},resetRange(){let e=this.defaultRange;this.setRange(e)},setDatesFromViewRange(){let e,t,n=this.viewRange,a=new Date;switch(n){case"last365":e=(0,r.Z)((0,o.Z)(a,365)),t=(0,i.Z)(a);break;case"last90":e=(0,r.Z)((0,o.Z)(a,90)),t=(0,i.Z)(a);break;case"last30":e=(0,r.Z)((0,o.Z)(a,30)),t=(0,i.Z)(a);break;case"last7":e=(0,r.Z)((0,o.Z)(a,7)),t=(0,i.Z)(a);break;case"YTD":e=(0,c.Z)(a),t=(0,i.Z)(a);break;case"QTD":e=(0,s.Z)(a),t=(0,i.Z)(a);break;case"MTD":e=(0,l.Z)(a),t=(0,i.Z)(a);break;case"1D":e=(0,r.Z)(a),t=(0,i.Z)(a);break;case"1W":e=(0,r.Z)((0,d.Z)(a,{weekStartsOn:1})),t=(0,i.Z)((0,p.Z)(a,{weekStartsOn:1}));break;case"1M":e=(0,r.Z)((0,l.Z)(a)),t=(0,i.Z)((0,u.Z)(a));break;case"3M":e=(0,r.Z)((0,s.Z)(a)),t=(0,i.Z)((0,h.Z)(a));break;case"6M":a.getMonth()<=5&&(e=new Date(a),e.setMonth(0),e.setDate(1),e=(0,r.Z)(e),t=new Date(a),t.setMonth(5),t.setDate(30),t=(0,i.Z)(e)),a.getMonth()>5&&(e=new Date(a),e.setMonth(6),e.setDate(1),e=(0,r.Z)(e),t=new Date(a),t.setMonth(11),t.setDate(31),t=(0,i.Z)(e));break;case"1Y":e=new Date(a),e.setMonth(0),e.setDate(1),e=(0,r.Z)(e),t=new Date(a),t.setMonth(11),t.setDate(31),t=(0,i.Z)(t);break}this.setRange({start:e,end:t}),this.setDefaultRange({start:e,end:t})},updateViewRange(e){this.viewRange=e},updateListPageSize(e){this.listPageSize=e},setLocale(e){this.locale=e},setRange(e){return this.range=e,e},setDefaultRange(e){this.defaultRange=e},setCurrencyCode(e){this.currencyCode=e},setCurrencyId(e){this.currencyId=e},setCacheKey(e){this.cacheKey=e}}})}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,n),o.exports}n.m=e,(()=>{var e=[];n.O=(t,a,r,o)=>{if(!a){var i=1/0;for(d=0;d<e.length;d++){for(var[a,r,o]=e[d],c=!0,s=0;s<a.length;s++)(!1&o||i>=o)&&Object.keys(n.O).every((e=>n.O[e](a[s])))?a.splice(s--,1):(c=!1,o<i&&(i=o));if(c){e.splice(d--,1);var l=r();void 0!==l&&(t=l)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[a,r,o]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(a,r){if(1&r&&(a=this(a)),8&r)return a;if("object"===typeof a&&a){if(4&r&&a.__esModule)return a;if(16&r&&"function"===typeof a.then)return a}var o=Object.create(null);n.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var c=2&r&&a;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((e=>i[e]=()=>a[e]));return i["default"]=()=>a,n.d(o,i),o}})(),(()=>{n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}})(),(()=>{n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,a)=>(n.f[a](e,t),t)),[]))})(),(()=>{n.u=e=>"js/"+(3064===e?"chunk-common":e)+"."+{159:"849b2e88",607:"a7330a8c",753:"c47e29ea",936:"308ce395",990:"9f80994c",1019:"ebc4d223",1198:"cbaca816",1238:"744a7b52",1341:"e6d35593",1800:"73a958f8",1872:"235df0c5",2255:"106372da",2306:"accc86fe",2372:"0c493e6d",2382:"a6898a70",2769:"435f626d",3064:"2a30b5d5",3576:"5e70097a",3611:"d383e2f1",3726:"efae2175",3912:"55920040",3922:"0d52278f",4036:"46dc453b",4216:"13049863",4355:"044e2646",4575:"6117a3b3",4647:"eb08255c",4670:"83bf8b86",4777:"315d9cdb",4799:"53ec814f",4918:"ac68d296",5114:"96732a35",5389:"83172589",5529:"dbcd5e10",5724:"a11c8347",6254:"16279dd8",6317:"6569585a",6745:"426b85d7",7039:"7e8ac025",7073:"d2bf4ce4",7222:"f318969b",7232:"c2628686",7341:"eb42d75a",7450:"f34e8691",7493:"f0265108",7676:"a2a73fd6",7697:"84e1e5ec",7700:"8a677dfa",7889:"197b7788",7916:"085f15b4",8006:"ed33c726",8135:"8ac09b69",8490:"88c1c928",8493:"d667b5ff",8561:"1097efea",8659:"6dbd3a99",8825:"ed80aff7",9052:"436e16fe",9053:"8c7cb7c1",9158:"887ce7fc",9173:"44a0bd7d",9253:"d541f5eb",9376:"b2fa7b33",9378:"81ba39c5",9381:"936c3132",9412:"a953a672",9432:"7c03632b",9729:"a64217d1",9814:"61040ecb"}[e]+".js"})(),(()=>{n.miniCssF=e=>{}})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="firefly-iii:";n.l=(a,r,o,i)=>{if(e[a])e[a].push(r);else{var c,s;if(void 0!==o)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var p=l[d];if(p.getAttribute("src")==a||p.getAttribute("data-webpack")==t+o){c=p;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+o),c.src=a),e[a]=[r];var u=(t,n)=>{c.onerror=c.onload=null,clearTimeout(h);var r=e[a];if(delete e[a],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((e=>e(n))),t)return t(n)},h=setTimeout(u.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=u.bind(null,c.onerror),c.onload=u.bind(null,c.onload),s&&document.head.appendChild(c)}}})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{n.p="/v3/"})(),(()=>{var e={2143:0};n.f.j=(t,a)=>{var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else{var o=new Promise(((n,a)=>r=e[t]=[n,a]));a.push(r[2]=o);var i=n.p+n.u(t),c=new Error,s=a=>{if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,r[1](c)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,a)=>{var r,o,[i,c,s]=a,l=0;if(i.some((t=>0!==e[t]))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(s)var d=s(n)}for(t&&t(a);l<i.length;l++)o=i[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},a=globalThis["webpackChunkfirefly_iii"]=globalThis["webpackChunkfirefly_iii"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var a=n.O(void 0,[4736],(()=>n(1183)));a=n.O(a)})();