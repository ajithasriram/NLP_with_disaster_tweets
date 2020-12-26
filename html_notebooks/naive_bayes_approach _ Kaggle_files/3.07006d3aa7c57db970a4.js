(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1985:function(e,t,a){"use strict";a.d(t,"h",(function(){return s})),a.d(t,"d",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return o})),a.d(t,"g",(function(){return c})),a.d(t,"e",(function(){return u})),a.d(t,"j",(function(){return d})),a.d(t,"f",(function(){return m})),a.d(t,"i",(function(){return p}));const n=e=>`${e.value||""}${e.unit}`,s=e=>{const{start:t,end:a}=e;return t&&a?`${n(t)} to ${n(a)}`:t?`>${n(t)}`:a?`<${n(a)}`:"(none)"},i=e=>!e||!e.hasCompetitions&&e.hasDatasets&&e.hasTasks,r=20,l={size:{},fileType:"all",license:"all",tags:[],hasTasks:!1},o=Object.assign(Object.assign({},l),{search:""}),c=e=>"my"===e?"updated":"hottest",u=e=>{const{size:t,fileType:a,license:n,tags:s,hasTasks:i}=e;return!(void 0===t.start&&void 0===t.end&&a===l.fileType&&n===l.license&&0===s.length&&!i)},d=[{label:"Hottest",value:"hottest"},{label:"Most Votes",value:"votes"},{label:"New",value:"published"},{label:"Updated",value:"updated"},{label:"Usability",value:"usability"}],m=new Map([["csv",{value:"csv",label:"CSV"}],["json",{value:"json",label:"JSON"}],["sqlite",{value:"sqlite",label:"SQLite"}],["bigQuery",{value:"bigQuery",label:"BigQuery"}]]),p=new Map([["cc",{value:"cc",label:"Creative Commons"}],["gpl",{value:"gpl",label:"GPL"}],["odb",{value:"odb",label:"Open Database"}],["other",{value:"other",label:"Other"}]])},2006:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(3),s=a(76),i=a(1686),r=a(2261),l=a(1716),o=a(203),c=a(1),u=a.n(c),d=a(0),m=a(212);const p=u.a.div`
  margin: ${e=>e.theme.material.spacing(2)};
  width: 100%;
  overflow-y: visible;

  .searchTextField {
    width: 100%;
  }

  .mdc-menu-surface {
    width: 100%;
    max-height: 400px;
  }
`,g=u()(s.a)`
  width: ${e=>e.width};
`;let h=0,b=0;const f=e=>{const{className:t,label:a,small:s,loadOptions:c,onSelect:u,optionRenderer:f=(e=>d.createElement("div",null,e)),shouldExcludeOption:v,disabled:y,hoistToBody:x=!0}=e,[E,w]=d.useState(""),[C,O]=d.useState([]),[S,T]=d.useState(!1),k=d.useRef();d.useEffect(()=>{k.current=Object(m.debounce)(200,e=>Object(n.__awaiter)(void 0,void 0,void 0,(function*(){T(!0),O([]),h++;const t=h,a=yield c(e),n=v?a.filter(e=>!(null==v?void 0:v(e))):a;t>b&&(b=t,T(!1),O(n))})))},[v]);const j=d.useRef(null);return d.createElement(p,{className:t},d.createElement(i.a,{ref:j},d.createElement(r.a,{placeholder:y?"disabled":a,small:s,disabled:y,value:E,onChange:e=>{var t;w(e.target.value),null===(t=k.current)||void 0===t||t.call(k,e.target.value)},className:"searchTextField"}),d.createElement(l.a,{open:!!E||S,onClose:()=>w(""),anchorCorner:"bottomLeft",hoistToBody:x,style:{zIndex:1001}},d.createElement(g,{className:"fullWidthSelectBoxList",variant:"dense",width:j.current?j.current.getBoundingClientRect().width+"px":"initial"},S&&d.createElement(o.a,null,"Searching..."),!S&&C.map(e=>d.createElement(o.a,{key:e.id,onClick:()=>{w(""),u(e)}},f(e))),!S&&E&&0===C.length&&d.createElement(o.a,null,"No results found.")))))}},2078:function(e,t,a){"use strict";var n=a(1),s=a.n(n),i=a(0),r=a(214),l=a(6);const o={light:{separator:l.g},dark:{separator:l.n}},c=s.a.div`
  border-bottom: ${e=>e.separator&&`1px solid ${e.theme.material.color.brand.grey[200]}`};
  display: flex;
  justify-content: space-between;
  padding-bottom: ${e=>e.paddingBottom};
  padding-top: 62px;
  width: 100%;

  @media (max-width: ${e=>e.theme.size.breakpoint.screen.tablet.max}) {
    flex-wrap: ${e=>"wrap"===e.wrap&&"wrap"};
  }
`,u=s.a.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: ${e=>e.theme.material.spacing(165)};
  width: 100%;
`,d=s()(r.l)`
  font-weight: bold;
  margin-bottom: ${e=>e.theme.material.spacing(2)};
  font-family: ${e=>e.theme.material.typography.display1.fontFamily};
`,m=s()(r.b)`
  line-height: 22px;
`,p=s.a.div`
  align-items: center;
  display: flex;
  min-height: 100%;
  flex-shrink: 0;

  @media (max-width: ${e=>e.theme.size.breakpoint.screen.tablet.max}) {
    display: ${e=>"hide"===e.wrap&&"none"};
    margin-top: ${e=>"wrap"===e.wrap&&e.theme.material.spacing(4)};
  }
`,g=e=>{const{className:t,title:a,separator:n,subtitle:s,meta:r,wrap:l="wrap"}=e,o=s||r?"58px":"30px";return i.createElement(c,{wrap:l,className:t,paddingBottom:o,separator:n},i.createElement(u,null,i.createElement(d,null,a),i.createElement(m,null,s)),i.createElement(p,{wrap:l},r))};a.d(t,"a",(function(){return E}));const h=s.a.div`
  border-bottom: ${e=>e.separator&&`1px solid ${e.contentTheme.separator}`};
  display: flex;
  height: 200px;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: ${e=>e.theme.size.breakpoint.screen.tablet.max}) {
    flex-wrap: ${e=>"wrap"===e.wrap&&"wrap"};
    justify-content: center;
  }
`,b=s.a.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 48px;
  max-width: ${e=>e.theme.material.spacing(165)};
  width: 100%;

  @media (max-width: ${e=>e.theme.size.breakpoint.screen.tablet.max}) {
    margin-right: 0;
  }
`,f=s()(r.l)`
  font-weight: bold;
  margin-bottom: ${e=>e.theme.material.spacing(4)};
  font-family: ${e=>e.theme.material.typography.display1.fontFamily};
`,v=s()(r.t)`
  line-height: 22px;
`,y=s.a.div`
  margin-top: 24px;
`,x=s.a.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-shrink: 0;

  @media (max-width: ${e=>e.theme.size.breakpoint.screen.tablet.max}) {
    display: ${e=>"hide"===e.wrap&&"none"};
  }
`,E=e=>{const{className:t,title:a,separator:s,subtitle:r,meta:l,wrap:c="wrap",useKM:u,style:d,actions:m}=e,p=i.useContext(n.ThemeContext),E=o[p.name];return u?i.createElement(h,{wrap:c,className:t,separator:s,contentTheme:E,style:d},i.createElement(b,null,i.createElement(f,{useKM:!0},a),i.createElement(v,{useKM:!0},r),m&&i.createElement(y,null,m)),i.createElement(x,{wrap:c},l)):i.createElement(g,Object.assign({},e))}},2111:function(e,t,a){"use strict";a.d(t,"a",(function(){return g})),a.d(t,"b",(function(){return h})),a.d(t,"c",(function(){return b}));var n=a(3),s=a(208),i=a(1717),r=a(1),l=a.n(r),o=a(1870),c=a(0),u=a(2347);const d=l()(e=>{const{isFloating:t}=e,a=Object(n.__rest)(e,["isFloating"]);return c.createElement(o.a,Object.assign({classes:{input:"input",focused:"focused",notchedOutline:"outline"}},a))})`
  background-color: ${e=>e.theme.colors.pure.white};

  && {
    /* HACK: base styles in @kaggle/web-old do NOT match @kaggle/web */
    flex-grow: 1;
    font-size: 12px;
  }

  & .input {
    color: ${e=>e.theme.colors.text.medium};
    padding: ${e=>e.theme.size.pad.m};
    ${e=>e.theme.font.main.size.l};
  }

  && .outline {
    border: 1px solid ${e=>e.theme.colors.border};
    border-radius: ${e=>e.isFloating?"0px":e.theme.size.border.radius.input};
  }

  &&&&&:hover {
    .outline {
      border: 1px solid ${e=>e.theme.colors.kaggle.blue};
    }
  }

  &&&&&.focused {
    .outline {
      border: 1px solid ${e=>e.theme.colors.kaggle.blueDark};
    }
  }
`,m=l.a.div`
  display: flex;
`,p=l()(s.a)`
  margin-right: ${e=>e.theme.size.margin.s};
  color: ${e=>e.theme.colors.text.light};
`;function g(e){const{search:t,placeholder:a,isLoading:n,filters:s,searchHistory:r,onChange:l}=e,[o,g]=c.useState(!1),h=n?c.createElement(i.a,{"data-testid":"search-loading-icon",size:"small"}):c.createElement(p,{icon:"search",size:"inline"}),b=o&&0===t.length;return c.createElement(u.a,{autoBoxShadow:!0},e=>c.createElement(m,null,c.createElement(d,{isFloating:e,labelWidth:0,notched:!1,value:t,onChange:e=>{(e=>{l(e)})(e.target.value)},placeholder:a,startAdornment:h,endAdornment:s,onFocus:()=>g(!0),onBlur:()=>setTimeout(()=>g(!1),250)}),b&&r))}const h=new Map([["csv",{value:"csv",label:"CSV"}],["json",{value:"json",label:"JSON"}],["sqlite",{value:"sqlite",label:"SQLite"}],["bigQuery",{value:"bigQuery",label:"BigQuery"}]]),b=new Map([["cc",{value:"cc",label:"Creative Commons"}],["gpl",{value:"gpl",label:"GPL"}],["odb",{value:"odb",label:"Open Database"}],["other",{value:"other",label:"Other"}]])},2132:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return l}));var n=a(1985),s=a(2147);const i={setRecentQueries:e=>({recentQueries:e}),setRecentlyViewedItems:e=>({recentlyViewedItems:e}),setSuccessfulQueryResult:(e,t,a,n,s,i)=>({items:e,hasMoreSearchDatasets:t,totalResults:a,competitions:n,tasks:s,topicalDataset:i}),setErrorQueryResult:e=>e,setQuery:e=>e,toggleVoteButtonForItem:(e,t)=>({itemToUpdate:e,isDisabled:t}),updateVoteForItem:(e,t,a)=>({itemToUpdate:e,voteState:t,voteCount:a}),setFilterSearch:e=>({search:e}),setFilterTab:e=>({tab:e}),setFilterSort:e=>({sort:e}),setFilters:e=>({modalFilters:e}),clearFilters:()=>({}),setItemCategories:e=>({categories:e})},r=(e="",t="public",a,n)=>({query:{type:"loading",initialLoad:!0},filters:Object.assign(Object.assign({},Object(s.c)(e,t)),{userId:a,competitionId:n}),hasTouchedSort:Object(s.e)(e,t),recentQueries:[],recentlyViewedItems:[]}),l=(e,t)=>{switch(t.type){case"setRecentQueries":return g(e,t);case"setRecentlyViewedItems":return p(e,t);case"setSuccessfulQueryResult":return m(e,t);case"setErrorQueryResult":return d(e,t);case"setQuery":return u(e,t);case"toggleVoteButtonForItem":return o(e,t);case"updateVoteForItem":return c(e,t);case"setFilterSearch":return h(e,t);case"setFilterTab":return b(e,t);case"setFilterSort":return f(e,t);case"setFilters":return v(e,t);case"clearFilters":return y(e,t);case"setItemCategories":return x(e,t)}return e},o=(e,t)=>{const{itemToUpdate:a,isDisabled:n}=t.payload,{datasetItems:s}=e.list.data;return Object.assign(Object.assign({},e),{list:Object.assign(Object.assign({},e.list),{data:Object.assign(Object.assign({},e.list.data),{datasetItems:s.map(e=>e===a?Object.assign(Object.assign({},e),{voteButton:Object.assign(Object.assign({},e.voteButton),{isDisabled:n})}):e)})})})},c=(e,t)=>{const{itemToUpdate:a,voteState:n,voteCount:s}=t.payload,{datasetItems:i}=e.list.data;return Object.assign(Object.assign({},e),{list:Object.assign(Object.assign({},e.list),{data:Object.assign(Object.assign({},e.list.data),{datasetItems:i.map(e=>e===a?Object.assign(Object.assign({},e),{voteButton:{state:n,totalVotes:s,isDisabled:!1,voteUpUrl:e.voteButton.voteUpUrl}}):e)})})})},u=(e,t)=>{const a=t.payload;return"loading-more"!==a.type||"success"===e.query.type?Object.assign(Object.assign({},e),{query:a}):e},d=(e,t)=>{const a=t.payload;return Object.assign(Object.assign({},e),{query:a})},m=(e,t)=>{const{items:a,hasMoreSearchDatasets:n,totalResults:s,competitions:i,tasks:r}=t.payload;return Object.assign(Object.assign({},e),{query:{type:"success"},filters:e.filters,list:{data:{datasetItems:a,hasMoreSearchDatasets:n,totalResults:s,competitionItems:i,taskItems:r}}})},p=(e,t)=>{const{recentlyViewedItems:a}=t.payload;return Object.assign(Object.assign({},e),{recentlyViewedItems:a})},g=(e,t)=>{const{recentQueries:a}=t.payload;return Object.assign(Object.assign({},e),{recentQueries:a})},h=(e,t)=>Object.assign(Object.assign({},e),{filters:Object.assign(Object.assign({},e.filters),{search:t.payload.search}),query:{type:"loading",initialLoad:!1}}),b=(e,t)=>{const{tab:a}=t.payload,s=e.hasTouchedSort?e.filters.sort:Object(n.g)(a);return Object.assign(Object.assign({},e),{filters:Object.assign(Object.assign({},e.filters),{tab:a,sort:s}),query:{type:"loading",initialLoad:!1}})},f=(e,t)=>{const{sort:a}=t.payload;return Object.assign(Object.assign({},e),{filters:Object.assign(Object.assign({},e.filters),{sort:a}),query:{type:"loading",initialLoad:!1},hasTouchedSort:!0})},v=(e,t)=>{const{modalFilters:a}=t.payload;return Object.assign(Object.assign({},e),{filters:Object.assign(Object.assign({},e.filters),a),query:{type:"loading",initialLoad:!1}})},y=(e,t)=>Object.assign(Object.assign({},e),{filters:Object.assign(Object.assign({},e.filters),n.b),query:{type:"loading",initialLoad:!1}}),x=(e,t)=>Object.assign(Object.assign({},e),{filters:Object.assign(Object.assign({},e.filters),{itemCategories:t.payload.categories}),query:{type:"loading",initialLoad:!1}})},2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return g})),a.d(t,"e",(function(){return h})),a.d(t,"b",(function(){return b})),a.d(t,"c",(function(){return f})),a.d(t,"i",(function(){return y})),a.d(t,"h",(function(){return x})),a.d(t,"d",(function(){return E})),a.d(t,"g",(function(){return w})),a.d(t,"f",(function(){return C}));var n=a(488),s=a(1985);const i=(e,t)=>{const a=e.get("tab");return(e=>"public"===e||"my"===e||"upvoted"===e)(a)?a:t},r=(e,t)=>{const a=e.get("sort");return(e=>"votes"===e||"published"===e||"updated"===e||"hottest"===e||"usability"===e)(a)?a:Object(s.g)(t)},l=(e,t)=>{const a=e.get(t);if(!a)return;const[n,s]=a.split(","),i=Number.parseInt(n,10);return!isNaN(i)&&(e=>"KB"===e||"MB"===e||"GB"===e)(s)?{value:i,unit:s}:void 0},o=e=>{const t=e.get("fileType");return(e=>"all"===e||"bigQuery"===e||"csv"===e||"json"===e||"sqlite"===e)(t)?t:s.a.fileType},c=e=>{const t=e.get("license");return(e=>"cc"===e||"gpl"===e||"odb"===e||"other"===e||"all"===e)(t)?t:s.a.license},u=e=>{const t=e.get("tags");return t?t.split(",").map(e=>e.split("-")).map(([e,t])=>({id:Number.parseInt(e,10),label:t})):[]},d=e=>{const t=e.get("maintainer");if(!t)return;const[a,n]=t.split(","),s=Number.parseInt(a,10);return!isNaN(s)&&n?{id:s,name:n}:void 0},m=e=>{const t=e.get("tasks");return!!t&&"true"===t},p=e=>{const t=e.get("competitionId");if(!t)return;const a=Number.parseInt(t,10);return isNaN(a)?void 0:a},g=e=>h(location.search,e),h=(e,t)=>{const a=new URLSearchParams(e),n=i(a,t);return r(a,n)!==Object(s.g)(n)},b=e=>f(location.search,e),f=(e,t)=>{const a=new URLSearchParams(e);return T(a,t)},v=e=>{return Object.keys({artsAndEntertainmentDataset:!0,businessDataset:!0,classificationDataset:!0,covidDataset:!0,economicsDataset:!0,educationDataset:!0,healthDataset:!0,imageDataset:!0,nlpDatasets:!0,popularDataset:!0,trendingDataset:!0,trendingTask:!0}).indexOf(e||"")>=0},y=e=>v(e.get("topic")),x=e=>null!==(e.get("tab")||e.get("sort")||e.get("fileType")||e.get("license")||e.get("tags")||e.get("maintainer")||e.get("tasks")||e.get("competitionId")||e.get("search")),E=e=>{const t=e.get("topic"),a=e.get("item");return v(t)?{topicType:t,itemType:(e=>{return Object.keys({dataset:!0,task:!0}).indexOf(e||"")>=0})(a)?a:"dataset"}:null},w=(e,t,a)=>{const s=new URLSearchParams;O(s,{key:"topic",value:t,defaultValue:""}),O(s,{key:"item",value:e,defaultValue:"dataset"});const i=s.toString(),r=`${location.pathname}${i?`?${i}`:""}`;a?Object(n.c)(window.history.state,document.title,r):Object(n.f)(r)},C=(e,t,a)=>{const s=S(e,t),i=`${location.pathname}${s?`?${s}`:""}`;a?Object(n.c)(window.history.state,document.title,i):Object(n.f)(i)},O=(e,t)=>{const{key:a,value:n,defaultValue:s}=t;n!==s?e.set(a,n):e.delete(a)},S=(e,t)=>{const a=e=>{const{key:t,size:a}=e;if(void 0===a)return void n.delete(t);const{value:s,unit:i}=a;void 0!==s?n.set(t,`${s},${i}`):n.delete(t)},n=new URLSearchParams,{search:i,sort:r,tab:l,fileType:o,license:c,size:u,tags:d,hasTasks:m}=e;return O(n,{key:"search",value:i,defaultValue:s.a.search}),O(n,{key:"sort",value:r,defaultValue:Object(s.g)(l)}),O(n,{key:"tab",value:l,defaultValue:t}),O(n,{key:"fileType",value:o,defaultValue:s.a.fileType}),O(n,{key:"license",value:c,defaultValue:s.a.license}),O(n,{key:"tasks",value:String(m),defaultValue:String(s.a.hasTasks)}),a({key:"sizeStart",size:u.start}),a({key:"sizeEnd",size:u.end}),(e=>{e.length>0?n.set("tags",e.map(e=>`${e.id}-${e.label}`).join(",")):n.delete("tags")})(d),(e=>{if(e){const{id:t,name:a}=e;n.set("maintainer",`${t},${a}`)}else n.delete("maintainer")})(e.maintainer),(e=>{void 0!==e?n.set("competitionId",`${e}`):n.delete("competitionId")})(e.competitionId),n.toString()},T=(e,t)=>{const a=i(e,t);return{search:e.get("search")||"",tab:a,sort:r(e,a),size:{start:l(e,"sizeStart"),end:l(e,"sizeEnd")},fileType:o(e),license:c(e),tags:u(e),maintainer:d(e),hasTasks:m(e),competitionId:p(e)}}},2161:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n=e=>{if(!e||void 0===e.value)return null;const{value:t,unit:a}=e;return t*("KB"===a?Math.pow(2,10):"MB"===a?Math.pow(2,20):Math.pow(2,30))}},2180:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return l}));var n=a(9),s=a(2161);const i=e=>{const{voteButton:t,categories:a}=e,{totalVotes:n,voteUpUrl:s,hasAlreadyVotedUp:i,canUpvote:r}=t,l=i?"voted-up":"no-vote";return Object.assign(Object.assign({},e),{voteButton:{state:l,totalVotes:n,isDisabled:!r,voteUpUrl:s||""},tags:a.map(e=>e.name)})},r=e=>e.map(i),l=(e,t=1,a)=>{const{search:i,tab:r,sort:l,size:o,fileType:c,license:u,tags:d,maintainer:m,userId:p,competitionId:g}=e,h=n.featureFlags.datasetsPrependTopicalDatasetsInPublicList&&0===i.length&&"public"===r&&"hottest"===l&&!o.start&&!o.end&&"all"===c&&"all"===u&&0===d.length&&!m&&!p&&!e.hasTasks;return{page:t,group:r,size:"all",fileType:c,license:u,viewed:"all",categoryIds:d.map(e=>e.id),search:i,sortBy:l,userId:p||null,competitionId:g||null,organizationId:null,maintainerOrganizationId:m?m.id:null,minSize:Object(s.a)(o.start),maxSize:Object(s.a)(o.end),isUserQuery:!1,hasTasks:e.hasTasks,topicalDataset:a,includeTopicalDatasets:h}}},2181:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(127);const s=(e,t)=>{if("bigQuery"===e)return"BigQuery";const a=t.reduce((e,t)=>t.count+e,0),s=t.map(({fileType:e})=>"other"===e?e:e.toUpperCase()).join(", ");return`${a} ${n("Files",a)} (${s})`}},2217:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m})),a.d(t,"c",(function(){return p}));var n=a(3),s=a(9),i=a(97),r=a(2180),l=a(2147),o=a(2132);let c=null;const u=(e,t)=>Object(n.__awaiter)(void 0,void 0,void 0,(function*(){const{bothClients:a,query:n,filters:i,resultsPageSize:c,shelfPageSize:u,defaultTab:m,searchLogger:p,options:g}=e,{analyticsClient:h}=a.legacyClients;"loading"!==n.type||n.initialLoad||Object(l.f)(i,m,null==g?void 0:g.historyPushState);const b="loading-more"===n.type?n.page:1,f=i.itemCategories&&!1===i.itemCategories.hasDatasets?c:u;return d(a,i,b,f,{onThen:(e,a,l)=>{var c,u;(e=>{"loading"===n.type?n.initialLoad?h.logger.report("datasets","list-load-mount-success",{filters:i,topicalDataset:e.topicalDataset,topicalDatasetEnabled:s.featureFlags.datasetsPrependTopicalDatasetsInPublicList}):h.logger.report("datasets","list-search-api-success",{filters:i}):"loading-more"===n.type&&h.logger.report("datasets","list-load-more-success",{filters:i,pageNumber:n.page})})(e),"loading"===n.type&&p.startSearchTimer();const d="loading-more"===n.type?n.previousItems:[],m=Object(r.b)((null===(c=e.datasetList)||void 0===c?void 0:c.items)||[]);t({type:"setSuccessfulQueryResult",payload:o.b.setSuccessfulQueryResult([...d,...m],e.hasMore,(null===(u=e.datasetList)||void 0===u?void 0:u.totalResults)||null,a,l,e.topicalDataset)})},onCatch:e=>{!function(e){"loading"===n.type?n.initialLoad?h.logger.report("datasets","list-load-mount-fail",{filters:i,err:e&&e.message?e.message:e}):h.logger.report("datasets","list-search-api-fail",{filters:i}):"loading-more"===n.type&&h.logger.report("datasets","list-load-more-fail",{filters:i,pageNumber:n.page,err:e&&e.message?e.message:e})}(e);const a="loading-more"===n.type?{type:"error-load-more",message:"Failed to load additional results",page:b}:{type:"error",message:"Loading items failed"};t({type:"setErrorQueryResult",payload:o.b.setErrorQueryResult(a)})}})})),d=(e,t,a=1,s=1,{onThen:i,onCatch:l})=>Object(n.__awaiter)(void 0,void 0,void 0,(function*(){const{datasetsClient:n,competitionsClient:o}=e.clients,u=!t.itemCategories||t.itemCategories.hasDatasets,d=!t.itemCategories||t.itemCategories.hasCompetitions,m=!t.itemCategories||t.itemCategories.hasTasks,p=1!==a,g=!d||p||""===t.search||"public"!==t.tab?Promise.resolve({competitions:[],userTeams:[],nextPageToken:""}):o.competitionService.listCompetitions({selector:{searchQuery:t.search,competitionIds:[],listOption:0,sortOption:0,hostSegmentIdFilter:0},pageSize:3,pageToken:""}),h=!m||p||""===t.search||"public"!==t.tab?Promise.resolve({tasks:[]}):n.searchTasks({query:t.search,includeWithAcceptedSubmission:!1,includeClosed:!1,includeOwnTasks:!0,maxResults:s}),b=u?n.searchDatasets(Object(r.a)(t,a,null)):Promise.resolve({datasetList:{items:[],totalResults:0},hasMore:!1,topicalDataset:null}),f=c=Promise.all([b,g,h]);try{const e=yield c,[t,a,n]=e;c===f&&i(t,a.competitions,n.tasks)}catch(e){c===f&&l(e)}})),m=(e,t)=>Object(n.__awaiter)(void 0,void 0,void 0,(function*(){const{analyticsClient:a}=e.legacyClients,{searchClient:n}=e.clients,s=n.getRecentSearches({userId:null,specificSearchIndices:["global","datasets"]});try{const e=yield s,n=e?e.map(e=>{const t=new i.a(e);return t.convertFiltersToUiFilters(),t.toInputString()}).filter(e=>e.length>0):[],r=n.filter((e,t)=>n.indexOf(e)===t);t({type:"setRecentQueries",payload:o.b.setRecentQueries(r)}),a.logger.report("datasets","list-load-recent-queries-success")}catch(e){a.logger.report("datasets","list-load-recent-queries-fail",{err:e&&e.message?e.message:e})}})),p=(e,t)=>Object(n.__awaiter)(void 0,void 0,void 0,(function*(){const{datasetsClient:a}=e.clients,{analyticsClient:n}=e.legacyClients,s=a.getRecentlyViewedDatasets({userId:null});try{const e=yield s;t({type:"setRecentlyViewedItems",payload:o.b.setRecentlyViewedItems(Object(r.b)(e?e.items:[]))}),n.logger.report("datasets","list-load-recently-viewed-datasets-success")}catch(e){n.logger.report("datasets","list-load-recently-viewed-datasets-fail",{err:e&&e.message?e.message:e})}}))},2218:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(214),s=a(76),i=a(1691),r=a(1705),l=a(1),o=a.n(l),c=a(0);const u=o()(n.e)`
  font-size: 16px;
  font-weight: bold;
  padding: ${e=>`${e.theme.material.spacing(2)} ${e.theme.material.spacing(4)}`};
`,d=o.a.div`
  padding: ${e=>e.theme.size.pad.xl};
  background-color: ${e=>e.theme.colors.pure.white};
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.theme.size.border.radius.radioBubble};
  box-shadow: ${e=>e.theme.material.elevation[2]};
  margin-top: ${e=>e.theme.material.spacing(12)};
  position: absolute;
  z-index: ${e=>e.theme.zindex[100]};

  @media screen and (max-width: ${e=>e.theme.size.breakpoint.screen.tablet.max}) {
    display: none;
  }
`,m=o.a.div`
  width: 48px;
  height: 48px;
  border-radius: 8px;
`,p=o()(s.a)`
  margin-top: 16px;
  margin-bottom: 12px;
`,g=o.a.div`
  display: flex;
  flex-flow: row wrap;
  margin: 16px;
`,h=o()(i.a)`
  margin-right: 8px;
  margin-bottom: 8px;
`,b=e=>{const t=new Map;return e.forEach(e=>{var a;null===(a=e.tags)||void 0===a||a.forEach(e=>{t.has(e)||t.set(e,0),t.set(e,t.get(e)+1)})}),Array.from(t.entries()).sort((e,t)=>t[1]-e[1]).map(e=>e[0]).slice(0,7)};function f(e){const{recentQueries:t,recentlyViewedItems:a,onQuerySelected:n,onTrackClicked:s}=e,i=b(a);return c.createElement(d,null,t.length>0&&c.createElement(c.Fragment,null,c.createElement(u,{emphasis:"high"},"Recent Query"),c.createElement(p,{variant:"dense",useKM:!0},t.map((e,t)=>c.createElement(r.a,{key:e,graphic:"history",primaryText:e,onClick:()=>{s(e,t),n(e)}})))),a.length>0&&c.createElement(c.Fragment,null,c.createElement(u,null,"Related Content"),c.createElement(p,{variant:"two-line",useKM:!0},a.map((e,t)=>c.createElement(r.a,{key:e.datasetId,graphic:c.createElement(m,{style:{backgroundImage:`url(${e.thumbnailImageUrl})`}}),onClick:()=>{s(e,t),window.location.href=e.datasetUrl},primaryText:e.title,secondaryText:e.overview})))),i.length>0&&c.createElement(c.Fragment,null,c.createElement(u,{emphasis:"high"},"Related Tags"),c.createElement(g,null,i.map(e=>c.createElement(h,{key:e},e)))))}},2219:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(2263),s=a(1),i=a.n(s),r=a(0),l=a(1985);const o=i.a.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
`,c=({onSortChange:e,selectedSort:t})=>{var a,s;return r.createElement(o,{"data-testid":"sortby-select"},r.createElement(n.a,{value:null!==(s=null===(a=l.j.find(e=>e.value===t))||void 0===a?void 0:a.label)&&void 0!==s?s:"",options:l.j.map(e=>e.label),onSelect:t=>{var a;if(!t)return;const n=l.j.find(e=>e.label===t);e(null!==(a=null==n?void 0:n.value)&&void 0!==a?a:"hottest")}}))}},2220:function(e,t,a){"use strict";a.d(t,"a",(function(){return T}));var n=a(293),s=a(203),i=a(290),r=a(291),l=a(292),o=a(214),c=a(2260),u=a(1),d=a.n(u),m=a(1862),p=a(501),g=a(127),h=a(0),b=a(1676),f=a(2294),v=a(2313),y=a(2181),x=a(2290);const E=d.a.div`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  background-size: contain;
`,w=d.a.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`,C=d()(x.a)`
  z-index: ${e=>e.theme.zindex.foreground};
  position: relative;
  /* this is required to get the react tooltip to show up 
  with text untruncated. */
  white-space: normal;
`,O=d()(n.a)`
  display: flex;
  height: 100%;
  width: 90px;
  .km-list--three-line & {
    justify-content: space-evenly;
  }
`,S=d.a.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`,T=h.memo(e=>{const{item:t,topic:a,rank:n,onNavigate:d,onVote:x}=e,{datasetId:T,datasetUrl:k,title:j,thumbnailImageUrl:$,type:z,isPrivate:F,ownerName:I,ownerUrl:R,dateUpdated:D,commonFileTypes:B,datasetSize:V,voteButton:U,usabilityRating:N,medalUrl:M,taskCount:L}=t,Q=Object(v.b)(M),P=h.useCallback(()=>x(T),[x,T]),_=h.useCallback(()=>d(t,a,n),[d,t,a,n]),q=Object(m.a)(u.BreakpointDown.PHONE);return h.createElement(s.a,{divider:!0,"aria-label":j},h.createElement(i.a,{href:k,onClick:_},!q&&h.createElement(r.a,null,h.createElement(E,{style:{backgroundImage:`url(${$})`}})),h.createElement(l.a,{primaryText:j,secondaryText:h.createElement(h.Fragment,null,h.createElement(o.w,{href:R},I)," ·  Updated ",h.createElement(b.a,{time:D})),tertiaryText:h.createElement(f.a,{separator:" · "},F&&"Private",N&&h.createElement(C,{scores:N}),("fileset"===z||"bigQuery"===z)&&Object(y.a)(z,B),V&&p(V,{round:0}),L>0&&g("Task",L,!0))})),h.createElement(O,null,h.createElement(c.a,{upOnly:!0,dense:!0,userVote:"voted-up"===U.state?"up":"none",totalVotes:U.totalVotes,onUpvote:P}),h.createElement(S,null,M&&h.createElement(h.Fragment,null,h.createElement(w,{role:"presentation",alt:"",src:M})," "+Q))))})},2231:function(e,t,a){"use strict";var n=a(1741),s=a(6),i=a(1),r=a.n(i),l=a(1865),o=a(0),c=a(1985),u=a(3),d=a(1716),m=a(1686),p=a(9),g=a(13),h=a(1690),b=a(2161),f=a(1694),v=a(1737),y=a(1666),x=a(214);const E=r.a.div`
  flex-direction: column;
  margin-bottom: 8px;
`,w=r.a.div`
  margin-bottom: 8px;
`,C=r()(x.r)`
  text-transform: uppercase;
`,O=r.a.div`
  flex-direction: row;
`,S=r.a.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 8px;
`;var T=a(1691);const k=r.a.div`
  display: flex;
  flex-wrap: wrap;
`,j=r()(T.a)`
  margin-bottom: 8px;
`;function $(e){const{value:t,options:a,onChange:n}=e,s=a.map(e=>{const{value:a,label:s}=e,i=a===t;return o.createElement(j,{key:a,useKM:!0,onClick:()=>n(a),selected:i},s)});return o.createElement(k,null,s)}var z=a(2263),F=a(499);const I=r.a.div`
  display: grid;
  grid-row-gap: ${e=>e.theme.size.pad.s};
  ${e=>(e=>e?'\n      grid-column-gap: 8px;\n      grid-template-columns: 100px 70px auto;\n      grid-template-areas:\n        "start-value start-unit to"\n        "end-value end-unit .";\n  ':'\n    grid-column-gap: 8px;\n    grid-template-columns: 135px auto auto 135px auto;\n    grid-template-areas:\n      "start-value start-unit to end-value end-unit";\n  ')(e.isCompact)};

  margin-bottom: ${e=>e.theme.size.margin.m};
`,R=r()(F.Input)`
  height: 32px;
  border-color: ${e=>e.hasError&&e.theme.material.color.status.error[500]};
`,D=r()(R)`
  grid-area: start-value;
`,B=r()(R)`
  grid-area: end-value;
`,V=r.a.div`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-color: ${e=>e.hasError?e.theme.material.color.status.error[500]:s.h};
  border-radius: ${e=>e.theme.size.border.radius.input};
  padding: 3px;
`,U=r()(z.a)`
  grid-area: start-unit;
`,N=r()(z.a)`
  grid-area: end-unit;
`,M=r()(x.r)`
  grid-area: to;
  display: flex;
  align-items: center;
  margin: 2px 2px;
  color: ${e=>e.theme.colors.text.medium};
`,L=r()(x.e.withComponent("p"))`
  font-style: italic;
  color: ${e=>e.theme.material.color.status.error[500]};
  margin-bottom: ${e=>e.theme.material.spacing(2)};
`;function Q(e){var t,a;const{isCompact:n,size:s,sizeOptions:i,errorMessage:r,onSizeValueChange:l,onSizeUnitChange:c}=e,u=s.start||{unit:"MB"},d=s.end||{unit:"MB"},m=i.find(e=>e.label===u.unit),p=i.find(e=>e.label===d.unit),g=n;return o.createElement(o.Fragment,null,o.createElement(I,{isCompact:n},o.createElement(D,{type:"text",value:"number"==typeof u.value?u.value.toString():"",onChange:l("start"),disabled:!1,scale:1,tight:!0,variant:"primary",hideBorder:!1,hasError:!!r,"data-test":"size-start-value"}),o.createElement(V,{hasError:!!r},o.createElement(U,{hoistToBody:g,value:null!==(t=null==m?void 0:m.label)&&void 0!==t?t:"",options:i.map(e=>e.label),onSelect:e=>{if(!e)return;const t=i.find(t=>t.label===e);t&&c("start")(t)},"data-test":"size-start-unit"})),o.createElement(M,null,"TO"),o.createElement(B,{type:"text",value:"number"==typeof d.value?d.value.toString():"",onChange:l("end"),disabled:!1,scale:1,tight:!0,variant:"primary",hideBorder:!1,hasError:!!r,"data-test":"size-end-value"}),o.createElement(V,{hasError:!!r},o.createElement(N,{hoistToBody:!1,value:null!==(a=null==p?void 0:p.label)&&void 0!==a?a:"",options:i.map(e=>e.label),onSelect:e=>{if(!e)return;const t=i.find(t=>t.label===e);t&&c("end")(t)},"data-test":"size-end-unit"}))),r&&o.createElement(L,{"data-test":"size-error-message"},r))}var P=a(1718),_=a(2006);const q=r()(P.a)`
  margin: 0px;
  padding: 0px;
  margin-bottom: 8px;
`,K=r()(T.a)`
  margin-top: 8px;
`,A=r()(_.a)`
  z-index: 1001;
  margin: 0px;
  padding: 0px;
`,H=e=>{const{tags:t,onChange:a,searchTags:n}=e;return o.createElement(o.Fragment,null,o.createElement(A,{label:"Search",small:!0,hoistToBody:!1,loadOptions:n,shouldExcludeOption:e=>!!t.find(t=>t.label===e.label),optionRenderer:e=>o.createElement(x.b,null,e.label),onSelect:e=>{e&&!t.find(t=>t.label===e.label)&&a([...t,e])}}),o.createElement(q,null,t.map(e=>o.createElement(K,{useKM:!0,key:e.label,onRemove:()=>(e=>{a(t.filter(t=>t.label!==e))})(e.label)},e.label))))},G=r.a.span``,J=r()(f.a)`
  && {
    z-index: ${e=>e.theme.zindex[1e3]};
    padding: ${e=>e.theme.material.spacing(5)};
  }
`,W=r.a.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: scroll;
`,X=r.a.div`
  flex-grow: 1;
`,Y=o.forwardRef((e,t)=>{const{isOpen:a,filters:n,options:s,sizeFilterError:i,onSizeValueChange:r,onSizeUnitChange:l,onFileTypeChange:c,onLicenseChange:u,onTagsChange:d,onHasTasksChange:m,loadTagOptions:p,onSetFilters:g,onClearFilters:h}=e,{size:b,license:f,fileType:x}=s,{size:T,tags:k,license:j,fileType:z,hasTasks:F}=n;return o.createElement(G,{ref:t},o.createElement(J,{open:a},o.createElement(W,null,o.createElement(E,null,o.createElement(w,null,o.createElement(C,null,"Tags")),o.createElement(O,null,o.createElement(H,{tags:k,onChange:d,searchTags:p,"data-test":"tags-input"}))),o.createElement(E,null,o.createElement(w,null,o.createElement(C,null,"File Size")),o.createElement(O,null,o.createElement(Q,{isCompact:!0,size:T,sizeOptions:b,errorMessage:i,onSizeUnitChange:l,onSizeValueChange:r}))),o.createElement(E,null,o.createElement(w,null,o.createElement(C,null,"File Types")),o.createElement(O,null,o.createElement($,{value:"all"!==z?z:void 0,options:x,onChange:c,"data-test":"file-type-input"}))),o.createElement(E,null,o.createElement(w,null,o.createElement(C,null,"Licenses")),o.createElement(O,null," ",o.createElement($,{value:"all"!==j?j:void 0,options:f,onChange:u,"data-test":"license-input"}))),o.createElement(E,null,o.createElement(w,null,o.createElement(C,null,"Tasks")),o.createElement(O,null,o.createElement(v.a,{checked:F,title:"",onChange:e=>m(e.currentTarget.checked)},"Only Datasets with Tasks"))),o.createElement(X,null),o.createElement(S,null,o.createElement(y.a,{emphasis:"low",style:{marginRight:"8px"},onClick:h},"Clear"),o.createElement(y.a,{onClick:g?()=>g(n):void 0},"Apply")))))}),Z=r.a.div`
  display: flex;
  flex-direction: column;
  width: 468px;
  padding: ${e=>e.theme.size.pad.xl};
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.theme.size.border.radius.radioBubble};
  box-shadow: ${e=>e.theme.shadow.modal};
  background-color: ${e=>e.theme.colors.pure.white};
`,ee=o.forwardRef((e,t)=>{const{filters:a,options:n,sizeFilterError:s,onSizeValueChange:i,onSizeUnitChange:r,onFileTypeChange:l,onLicenseChange:c,onTagsChange:u,onHasTasksChange:d,loadTagOptions:m,onSetFilters:p,onClearFilters:g}=e,{size:h,license:b,fileType:f}=n,{size:x,tags:T,license:k,fileType:j,hasTasks:z}=a;return o.createElement(Z,{ref:t},o.createElement(E,null,o.createElement(w,null,o.createElement(C,null,"Tags")),o.createElement(O,null,o.createElement(H,{tags:T,onChange:u,searchTags:m,"data-test":"tags-input"}))),o.createElement(E,null,o.createElement(w,null,o.createElement(C,null,"File Size")),o.createElement(O,null,o.createElement(Q,{isCompact:!1,size:x,sizeOptions:h,errorMessage:s,onSizeUnitChange:r,onSizeValueChange:i}))),o.createElement(E,null,o.createElement(w,null,o.createElement(C,null,"File Types")),o.createElement(O,null,o.createElement($,{value:"all"!==j?j:void 0,options:f,onChange:l,"data-test":"file-type-input"}))),o.createElement(E,null,o.createElement(w,null,o.createElement(C,null,"Licenses")),o.createElement(O,null," ",o.createElement($,{value:"all"!==k?k:void 0,options:b,onChange:c,"data-test":"license-input"}))),o.createElement(E,null,o.createElement(w,null,o.createElement(C,null,"Tasks")),o.createElement(O,null,o.createElement(v.a,{checked:z,title:"",onChange:e=>d(e.currentTarget.checked)},"Only Datasets with Tasks"))),o.createElement(S,null,o.createElement(y.a,{emphasis:"low",style:{marginRight:"8px"},onClick:g},"Clear"),o.createElement(y.a,{onClick:p?()=>p(a):void 0},"Apply")))}),te=Number.parseInt(i.defaultTheme.size.breakpoint.screen.tablet.max.replace("px",""),10),ae=r()(d.a)`
  overflow: visible !important;
  border-radius: ${e=>e.theme.size.border.radius.radioBubble};
`;class ne extends o.Component{constructor(){super(...arguments),this.modalRef=o.createRef(),this.drawerRef=o.createRef(),this.state=this.props.defaultFilters,this.renderContents=(e,t)=>{const{isOpen:a,setIsOpen:n,onSetFilters:s,onClearFilters:i}=this.props,r={filters:this.state,options:{size:se,fileType:ie,license:re},sizeFilterError:this.isValidSizeRange()?void 0:"Invalid file size range entered",onSetFilters:this.isValidSizeRange()?s:void 0,onClearFilters:i,onSizeValueChange:this.onSizeValueChange,onSizeUnitChange:this.onSizeUnitChange,onFileTypeChange:this.onFileTypeChange,onLicenseChange:this.onLicenseChange,loadTagOptions:this.loadTags(e),onTagsChange:this.onTagsChange,onHasTasksChange:this.onHasTasksChange};return"drawer"===t?g.createPortal(o.createElement(Y,Object.assign({isOpen:a,ref:this.drawerRef},r)),document.body):o.createElement(m.a,null,o.createElement(ae,{open:a,onClose:()=>n(!1)},o.createElement(ee,Object.assign({ref:this.modalRef},r))))},this.isValidSizeRange=()=>{const{size:e}=this.state,t=Object(b.a)(e.start),a=Object(b.a)(e.end),n=null===t||t>=0&&t<=Number.MAX_SAFE_INTEGER,s=null===a||a>=0&&a<=Number.MAX_SAFE_INTEGER;return"number"==typeof t&&"number"==typeof a?n&&s&&t<a:n&&s},this.onSizeValueChange=e=>t=>{const a=t.currentTarget.value;if(!/^\d*$/.exec(a))return;const n=a.length>0?Number.parseInt(a,10):void 0;void 0!==n&&n>Number.MAX_SAFE_INTEGER||this.setState(t=>{const{size:a}=t,s=a[e];return{size:Object.assign(Object.assign({},a),{[e]:{value:n,unit:s?s.unit:"MB"}})}})},this.onSizeUnitChange=e=>t=>{this.setState(a=>{const{size:n}=a,s=n[e],i=s?s.value:void 0;return{size:Object.assign(Object.assign({},n),{[e]:{value:i,unit:t.label}})}})},this.onFileTypeChange=e=>{this.setState(t=>({fileType:e===t.fileType?"all":e}))},this.onLicenseChange=e=>{this.setState(t=>({license:e===t.license?"all":e}))},this.onHasTasksChange=e=>{this.setState(t=>({hasTasks:e}))},this.loadTags=e=>t=>Object(u.__awaiter)(this,void 0,void 0,(function*(){const a=null==t?{searchType:"dataset",searchQuery:t,showSystemTags:!1,skip:0,take:100}:{searchType:"dataset",searchQuery:null,showSystemTags:!1,skip:0,take:10},n=yield e.clients.tagsClient.searchTags(a);return n.tags?n.tags.map(e=>({id:e.id,label:e.displayName})):[]})),this.onTagsChange=e=>{this.setState({tags:e})}}componentDidUpdate(e){const{defaultFilters:t}=this.props;e.defaultFilters!==t&&this.setState(t)}render(){return o.createElement(h.a,Object.assign({handleWidth:!0},{querySelector:"body"}),({width:e})=>o.createElement(p.ClientsContext.Consumer,null,t=>this.renderContents(t,e>te?"modal":"drawer")))}}const se=[{label:"KB"},{label:"MB"},{label:"GB"}],ie=Array.from(c.f.values()),re=Array.from(c.i.values());a.d(t,"a",(function(){return ce}));const le=r()(n.a)`
  top: -12px;
  right: -16px;
`,oe=r()(l.a)`
  & .MuiBadge-colorPrimary {
    background: ${s.v};
  }
`,ce=e=>{const{defaultFilters:t,onClearFilters:a,onSetFilters:n}=e,[s,i]=o.useState(!1);return o.createElement(o.Fragment,null,o.createElement(oe,{color:"primary",variant:"dot",invisible:!Object(c.e)(t)},o.createElement(le,{icon:"filter_list",useKM:!0,onClick:()=>i(!s)})),o.createElement(ne,{isOpen:s,setIsOpen:i,defaultFilters:t,onSetFilters:e=>{n(e),i(!1)},onClearFilters:()=>{a(),i(!1)},onCloseRequest:()=>i(!1)}))}},2260:function(e,t,a){"use strict";var n=a(1),s=a.n(n),i=a(0),r=a(212),l=a(511),o=a(208),c=a(214),u=a(6);const d={light:{border:u.i,default:{hover:u.f,background:u.z,icon:u.u},selected:{hover:u.n,background:u.u,icon:u.z}},dark:{border:u.l,default:{hover:u.n,background:u.u,icon:u.z},selected:{hover:u.f,background:u.z,icon:u.u}}};a.d(t,"a",(function(){return v}));const m=s.a.div`
  display: flex;
  height: ${e=>e.dense?"24px":"36px"};
  align-items: center;
`,p=s()(c.d)`
  padding: 0 8px;
  height: 100%;
  text-align: center;
  line-height: ${e=>e.dense?"24px":"36px"};
  border: 1px solid ${e=>d[e.theme.name].border};
  border-top-right-radius: ${e=>e.upOnly&&(e.dense?"12px":"18px")};
  border-bottom-right-radius: ${e=>e.upOnly&&(e.dense?"12px":"18px")};
  padding-right: ${e=>e.upOnly&&"12px"};
`,g=s.a.div`
  border: 1px solid ${e=>d[e.theme.name].border};
  height: ${e=>e.dense?"24px":"36px"};
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  transition: all 0.25s ease;
  background-color: ${e=>d[e.theme.name][e.selected?"selected":"default"].background};

  && > i {
    transition: color 0.25s ease;
    color: ${e=>d[e.theme.name][e.selected?"selected":"default"].icon};
  }

  &:hover {
    transition: background-color 0.25s ease;
    background-color: ${e=>d[e.theme.name][e.selected?"selected":"default"].hover};
  }
`,h=s()(g)`
  border-top-left-radius: ${e=>e.dense?"12px":"18px"};
  border-bottom-left-radius: ${e=>e.dense?"12px":"18px"};
  border-right: none;
  padding: 0 4px 0 8px;
`,b=s()(g)`
  border-top-right-radius: ${e=>e.dense?"12px":"18px"};
  border-bottom-right-radius: ${e=>e.dense?"12px":"18px"};
  border-left: none;
  padding: 0 4px 0 4px;
`;function f(e,t,a){return Object(r.throttle)(500,n=>{const s=a(n);s instanceof Promise&&s.catch(a=>{t(e)})})}const v=e=>{const{dense:t,totalVotes:a,upOnly:n,userVote:s="none",onUpvote:r,onDownvote:c=(()=>{})}=e,u=Object(l.a)(e),[d,g]=i.useState(s),v=i.useCallback(e=>{g(d===e?"none":e)},[d]),y=i.useCallback(f(d,g,r),[r,d]),x=i.useCallback(f(d,g,c),[c,d]);let E=a;"up"===s?E--:"down"===s&&E++;let w=E;return"up"===d?w++:"down"===d&&w--,i.createElement(m,Object.assign({dense:t},u,{onClick:e=>{e.stopPropagation(),e.preventDefault()}}),i.createElement(h,{dense:t,selected:"up"===d,onClick:()=>{v("up"),y("none"===d)},"data-testid":"upvotebutton__upvote"},i.createElement(o.a,{useKM:!0,size:"xsmall",icon:"arrow_drop_up"})),i.createElement(p,{dense:t,upOnly:n},w),!n&&i.createElement(b,{dense:t,selected:"down"===d,onClick:()=>{v("down"),x("none"===d)},"data-testid":"upvotebutton__downvote"},i.createElement(o.a,{useKM:!0,icon:"arrow_drop_down"})))}},2261:function(e,t,a){"use strict";var n=a(1),s=a.n(n),i=a(0),r=a(1717),l=a(208),o=a(6);const c={light:{inputText:o.u,inputPlaceholder:o.m,default:{border:o.h},selected:{border:o.p}},dark:{inputText:o.z,inputPlaceholder:o.h,default:{border:o.m},selected:{border:o.f}}};a.d(t,"a",(function(){return h}));const u=s.a.div`
  height: ${e=>e.small?"32px":"48px"};
  width: 100%;
  position: relative;
`,d=s.a.input`
  font-size: ${e=>e.small?"12px":"14px"};
  padding-left: ${e=>e.small?"40px":"60px"};
  border: 1px solid ${e=>c[e.theme.name].default.border};
  border-radius: 24px;
  color: ${e=>c[e.theme.name].inputText};
  width: 100%;
  height: 100%;
  background-color: transparent;
  box-sizing: border-box;
  transition: border 0.3s ease;

  &:focus {
    outline: none;
    border: 1px solid ${e=>c[e.theme.name].selected.border};
  }
  &::placeholder {
    color: ${e=>c[e.theme.name].inputPlaceholder};
  }
`,m=s()(r.a)`
  position: absolute;
  top: ${e=>e.small?"8px":"12px"};
  left: ${e=>e.small?"12px":"24px"};
`,p=s()(l.a)`
  position: absolute;
  top: ${e=>e.small?"8px":"12px"};
  left: ${e=>e.small?"12px":"24px"};
`,g=s.a.div`
  position: absolute;
  top: 12px;
  right: 24px;
`,h=e=>{const{actionItem:t,placeholder:a,onChange:n,small:s,className:r,value:l,disabled:o,searchInProgress:c,onFocus:h,onBlur:b}=e,[f,v]=i.useState("");i.useEffect(()=>{v(l||"")},[l]);return i.createElement(u,{className:r,small:s},c?i.createElement(m,{size:s?"xsmall":"medium",small:s}):i.createElement(p,{useKM:!0,icon:"search",size:s?"xsmall":"medium",small:s}),i.createElement(d,{placeholder:a,value:f,onChange:e=>{n(e),v(e.target.value)},small:s,disabled:o,onFocus:h,onBlur:b,"aria-label":a}),!s&&t&&i.createElement(g,{className:r},t))}},2290:function(e,t,a){"use strict";var n=a(214),s=a(499),i=a(1),r=a.n(i),l=a(0);const o={name:"overview",completionComment:"overview is provided"},c={name:"license",completionComment:"license is specified"},u={name:"tags",completionComment:"tags are added"},d={name:"column descriptions",completionComment:"column descriptions are provided"},m={name:"file descriptions",completionComment:"file descriptions are provided"},p={name:"machine-readable files",completionComment:"files are in machine-readable formats"},g={name:"data collection source",completionComment:"data collection source is specified"},h={name:"Kernels code examples",completionComment:"code examples are available in Kernels"},b={name:"subtitle",completionComment:"subtitle is provided"},f={name:"update frequency",completionComment:"update frequency is specified"},v=e=>{const{score:t}=e;return t>=.9?y(e):t>=.8?x(e):t>=.5?E(e):w(e)},y=e=>{const{columnDescriptionScore:t,fileDescriptionScore:a,fileFormatScore:n,licenseScore:s,overviewScore:i,provenanceScore:r,publicKernelScore:l,subtitleScore:v,tagScore:y,updateFrequencyScore:x}=e,E=[];return 1===i&&E.push(o.completionComment),1===n&&E.push(p.completionComment),1===l&&E.push(h.completionComment),1===s&&E.push(c.completionComment),1===y&&E.push(u.completionComment),1===v&&E.push(b.completionComment),1===r&&E.push(g.completionComment),1===a&&E.push(m.completionComment),1===t&&E.push(d.completionComment),1===x&&E.push(f.completionComment),"This dataset is well documented, "+E.slice(0,2).join(", ")+" and "+E[2]},x=e=>{const t=C(e,1);return`The documentation for this dataset is almost complete${t?` but is missing ${t}`:""}`},E=e=>{const t=C(e,3);return`This dataset is partially documented${t?` but is missing ${t}`:""}`},w=e=>{const t=C(e,3);return`This dataset is missing many elements${t?` including ${t}`:""}`},C=(e,t)=>{const{columnDescriptionScore:a,fileDescriptionScore:n,fileFormatScore:s,licenseScore:i,overviewScore:r,provenanceScore:l,publicKernelScore:v,subtitleScore:y,tagScore:x,updateFrequencyScore:E}=e,w=[];r<1&&w.push(o.name),i<1&&w.push(c.name),x<1&&w.push(u.name),y<1&&w.push(b.name),l<1&&w.push(g.name),s<1&&w.push(p.name),n<1&&w.push(m.name),null!==a&&a<1&&w.push(d.name),v<1&&w.push(h.name),E<1&&w.push(f.name);const C=w.length<t?w.length:t;return 0===C?"":1===C?w[0]:2===C?`${w[0]} and ${w[1]}`:`${w.slice(0,C-1).join(", ")} and ${w[C-1]}`};a.d(t,"a",(function(){return T}));const O=r()(n.b)`
  text-align: left;
  max-width: ${e=>e.theme.material.spacing(65)};
  color: ${e=>e.theme.material.color.white};
`,S=r.a.span`
  :hover {
    cursor: pointer;
  }

  ${e=>(e=>e>=.9)(e.score)?"font-weight: 700;":""};
`;function T(e){const{scores:t,className:a}=e,n=l.createElement(O,null,v(t));return l.createElement(s.Tooltip,{tip:n,className:a},"Usability ",l.createElement(S,{score:t.score},(10*t.score).toFixed(1)))}},2294:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(0);const s=({separator:e=", ",children:t})=>{const a=n.isValidElement(e),s=(t||[]).filter(e=>!!e),i=[];for(let t=0;t<s.length;t++)t>0&&i.push(a?n.cloneElement(e):e),i.push(s[t]);return n.createElement(n.Fragment,null,i)}},2313:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return i}));const n={human:[[1e3,"k"],[1e6,"m"],[1e9,"b"]],computer:[[1e3,"k"],[1e6,"m"],[1e9,"g"]]};function s(e,t,a=0,s=!1){const i=n[t];for(let t=i.length-1;t>=0;t--){const[n,r]=i[t];if(e>=n){const t=s?r.toUpperCase():r;return(e/n).toFixed(a)+t}}return e.toString()}function i(e){return e?(e=e.toLowerCase()).indexOf("gold")>=0?"Gold":e.indexOf("silver")>=0?"Silver":e.indexOf("bronze")>=0?"Bronze":"":null}},2347:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(489),s=a(1),i=a.n(s),r=a(0);const l=i.a.div`
  height: 0px;
`,o=i.a.div`
  position: ${e=>e.isFloating?"sticky":"auto"};
  top: 0px;
  z-index: ${e=>e.isFloating?e.theme.zindex[100]:"auto"};
  box-shadow: ${e=>e.isFloating&&e.autoBoxShadow?e.theme.material.elevation[2]:"0"};
`;function c({autoBoxShadow:e,onStickyChanged:t,children:a}){const[s,i]=r.useState(!1),c=r.useRef(null);return r.useEffect(()=>{const e=Object(n.b)(([e])=>{const a=e.intersectionRatio<1,n=s;i(a),a!==n&&t&&t(a)},{threshold:1});return c.current&&e.observe(c.current),()=>{e.disconnect()}}),r.createElement(r.Fragment,null,r.createElement(l,{ref:c}),r.createElement(o,{isFloating:s,autoBoxShadow:!!e},a(s)))}},2507:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(3),s=a(265),i=a(268),r=a(372);class l{constructor(e){this.index=e,this.searchStartTime=Date.now()}startSearchTimer(){this.searchStartTime=Date.now()}logSearchExited(e){return Object(n.__awaiter)(this,void 0,void 0,(function*(){if(!e)return;const t={index:this.index,isQuick:"global"===this.index,q:e,secondsSpentSearching:Math.floor((Date.now()-this.searchStartTime)/1e3),isSuccess:!1};return this.logSearchLog(t)}))}logSearchResultClicked(e){return Object(n.__awaiter)(this,void 0,void 0,(function*(){const{query:t,rank:a,id:n,url:s,isPrivate:l}=e;if(!t)return;const o={index:this.index,isQuick:"global"===this.index,q:t,secondsSpentSearching:Math.floor((Date.now()-this.searchStartTime)/1e3),isSuccess:!0,rank:a,isPrivate:l,url:s,id:n,token:Object(i.v4)()};return Object(r.b)(o.token),this.logSearchLog(o)}))}logSearchLog(e){return new Promise(t=>{s.ajax({url:"/search/log",type:"POST",data:e}).always(()=>t())})}}}}]);