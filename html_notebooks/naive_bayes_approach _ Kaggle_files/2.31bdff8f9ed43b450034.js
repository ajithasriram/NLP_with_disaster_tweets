(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1882:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"f",(function(){return o})),n.d(t,"g",(function(){return s})),n.d(t,"e",(function(){return l})),n.d(t,"j",(function(){return d})),n.d(t,"i",(function(){return u})),n.d(t,"h",(function(){return p})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return g})),n.d(t,"a",(function(){return f}));var i=n(47);const r=e=>{const t=a(e);return i.duration(t,"seconds").humanize()},a=e=>{return e?e>53687091200?10800:e>10737418240?3600:e>5368709120?1800:e>1073741824?900:e>524288e3?600:e>104857600?180:e>10485760?60:e>1048576?20:10:10},o=e=>l(new Date(e)),s=e=>c(new Date(e)),l=e=>e?i(e).format("DMMMYY"):"",c=e=>e?i(e).format("YYYY-MM-DD HH:mm:ss"):"",d=(e,t)=>null===e?"":e===1/0?"Inf":e===-1/0?"-Inf":t?u(e):p(e),u=e=>"number"!=typeof e?"":e>1e11?(e/1e9).toFixed(0)+"b":e>1e10?(e/1e9).toFixed(1)+"b":e>1e9?(e/1e9).toFixed(2)+"b":e>1e8?(e/1e6).toFixed(0)+"m":e>1e7?(e/1e6).toFixed(1)+"m":e>1e6?(e/1e6).toFixed(2)+"m":e>1e5?(e/1e3).toFixed(0)+"k":e>1e4?(e/1e3).toFixed(1)+"k":e.toFixed(0),p=e=>{if(null==e)return"";if(isNaN(e))return"NaN";const t=Math.abs(e);return t>1e11?`${m(e/1e9,0)}b`:t>1e10?`${m(e/1e9,1)}b`:t>1e9?`${m(e/1e9,2)}b`:t>1e8?`${m(e/1e6,0)}m`:t>1e7?`${m(e/1e6,1)}m`:t>1e6?`${m(e/1e6,2)}m`:t>1e5?`${m(e/1e3,0)}k`:t>1e4?`${m(e/1e3,1)}k`:t>1e3?`${m(e/1e3,2)}k`:m(e,t>100?0:t>10?1:2)},m=(e,t)=>Number.parseFloat(e.toFixed(t)).toString(),h=e=>{let t="."===e.substring(0,1)?e.substring(1):e;switch(t=t?t.toLowerCase():t,t){case"csv":case"tsv":case"xls":case"xlsx":return"table_chart";case"sqlite":return"storage";case"sqlitetable":return"table_chart";case"png":case"jpg":case"jpeg":case"gif":return"image";case"txt":case"json":case"ndjson":return"description";case"zip":case"7z":case"gz":case"tar":case"rar":case"bz2":return"drive_zip_outline";default:return"insert_drive_file"}},g=e=>e.substring(e.lastIndexOf(".")+1,e.length)||e,f=e=>{const t=n=>{n.clipboardData.setData("text/plain",e),n.preventDefault(),document.removeEventListener("copy",t)};document.addEventListener("copy",t),document.execCommand("copy")}},1990:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(0);const r=i.createContext(!1)},2007:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return s}));const i=(e,t,n,i,r,a,o)=>{e.logger.report("datasets",`uploader2-create-${t}`,Object.assign(Object.assign({},o),{createType:n,folderUploadsUsed:i,lastPrivacyChangeMechanism:r,showPublicCreationWarning:a}))},r=(e,t,n)=>{e.logger.report("datasets",`uploader2-${n?"open":"closed"}-${t}`)},a=(e,t,n)=>{e.logger.report("datasets","uploader2-duplicate",Object.assign(Object.assign({},n),{fileName:t}))},o=(e,t,n)=>{e.logger.report("datasets","uploader2-privacy-update",{isPrivate:t,source:n})},s=(e,t)=>{e.logger.report("datasets","uploader2-public-dataset-warning",{confirmed:t})}},2082:function(e,t,n){"use strict";n.d(t,"q",(function(){return i})),n.d(t,"m",(function(){return r})),n.d(t,"n",(function(){return a})),n.d(t,"o",(function(){return o})),n.d(t,"p",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return d})),n.d(t,"g",(function(){return u})),n.d(t,"f",(function(){return p})),n.d(t,"d",(function(){return m})),n.d(t,"h",(function(){return h})),n.d(t,"l",(function(){return g})),n.d(t,"j",(function(){return f})),n.d(t,"k",(function(){return b})),n.d(t,"i",(function(){return y})),n.d(t,"a",(function(){return v}));const i=e=>"uploadContainer"===e.type,r=e=>"remoteUrlUploadContainer"===e.type,a=e=>"failed"===e.type,o=e=>"pending"===e.type,s=e=>"success"===e.type,l=e=>"githubContainer"===e.type,c=e=>"githubFile"===e.type,d=e=>"failed"===e.type,u=e=>"success"===e.type,p=e=>"pending"===e.type,m=e=>"invalid"===e.type,h=e=>"kernelOutputContainer"===e.type,g=e=>"loadingKernels"===e.type,f=e=>"listKernels"===e.type,b=e=>"loadingFiles"===e.type,y=e=>"listFiles"===e.type,v=e=>"gcsFileSetContainer"===e.type},2083:function(e,t,n){"use strict";var i=n(3),r=n(9),a=n(47),o=n(0),s=n(1882),l=n(214),c=n(1666),d=n(218),u=n(1),p=n.n(u);const m=p.a.div`
  display: flex;
`,h=p.a.img`
  flex: 0;
  margin-right: 16px;
  height: 196px;
  width: 196px;
`,g=p.a.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: left;
`,f=p()(l.m)`
  margin: 16px 0 24px 0;
  flex: 0;
`,b=p()(l.a)`
  flex: 1;
`,y=p()(l.v)``,v=p.a.div`
  flex: 0;
  display: flex;
`,C=p.a.div`
  flex: 1;
`,x=p()(c.a)`
  margin-right: 8px;
`;class E extends o.Component{render(){const{open:e,disabled:t,title:n,description:i,button:r,error:a,type:s,statusComponent:l,onAction:u,onDismiss:p}=this.props,E="error"===s?"uploader_error.png":"success"===s?"uploader_success.png":"uploader_progress.png";return o.createElement(d.a,{open:e,onClose:u,width:"780px"},o.createElement(m,null,o.createElement(h,{src:`/static/images/datasets/${E}`}),o.createElement(g,null,o.createElement(f,{emphasis:"high"},n),o.createElement(b,{emphasis:"medium"},i,a&&o.createElement(y,{emphasis:"high"},a)),o.createElement(v,null,l,o.createElement(C,null),p&&o.createElement(x,{disabled:t,emphasis:"low",onClick:p,type:"button"},"Dismiss"),o.createElement(c.a,{disabled:t,emphasis:"high",onClick:u},r)))))}}function O(e){const{open:t,disabled:n,description:i,button:r,error:a,onAction:s,onDismiss:l}=e;return o.createElement(E,{open:t,disabled:n,type:"error",title:"Oh no! Upload failed",button:r,description:i,error:a,onAction:s,onDismiss:l})}var w=n(2348);const j=p.a.div`
  width: 200px;
  margin-top: 16px;
`;function k(e){const{open:t,disabled:n,description:i,button:r,percentComplete:a,estimatedTimeHumanized:s,onAction:l,onDismiss:c}=e,d=o.createElement(o.Fragment,null,"We estimate this dataset will take ",s," to process.",o.createElement("br",null),i),u=o.createElement(j,null,o.createElement(w.a,{closed:!1,progress:a}));return o.createElement(E,{open:t,disabled:n,type:"progress",title:"We are processing your data",button:r,description:d,statusComponent:u,onAction:l,onDismiss:c})}function S(e){const{open:t,disabled:n,description:i,button:r,onAction:a,onDismiss:s}=e;return o.createElement(E,{open:t,disabled:n,type:"success",title:"Success!",button:r,description:i,onAction:a,onDismiss:s})}n.d(t,"a",(function(){return U})),n.d(t,"b",(function(){return F})),n.d(t,"c",(function(){return R}));const D=10;class U extends o.Component{constructor(){super(...arguments),this.pollInterval=2e3,this.state={processingState:this.props.stubProcessingState||{type:"not-started"}},this.onUploadSuccess=e=>{this.setState({processingState:{type:"processing",dataset:e,timer:window.setInterval(this.pollStatus,this.pollInterval),failedPolls:0,progress:{creationStart:a().toString(),percentComplete:0}}})},this.onCloseRequest=()=>{const{onCloseRequest:e,resetOnClose:t}=this.props,{processingState:n}=this.state;e(n),!0===t&&this.resetState()},this.resetState=()=>{this.setState({processingState:{type:"not-started"}})},this.pollStatus=()=>Object(i.__awaiter)(this,void 0,void 0,(function*(){const{processingState:e}=this.state;if(F(e)){const{failedPolls:t,dataset:n}=e,{databundleVersionId:i}=n;try{const t=yield r.datasetsClient.getDatabundleVersionCreationStatus({databundleVersionId:i});"ready"===t.status?(clearInterval(e.timer),this.handleProcessingSuccess()):"failed"===t.status?(clearInterval(e.timer),this.handleProcessingFailure(t.userMessage)):this.updateProcessingProgress(t.creationPercentComplete)}catch(n){t>D?(clearInterval(e.timer),this.handleProcessingFailure("Failed to check creation status. Please try again later.")):this.setState({processingState:Object.assign(Object.assign({},e),{failedPolls:t+1})})}}})),this.handleProcessingSuccess=()=>{this.setState(e=>{const{processingState:t}=e;return F(t)?(clearInterval(t.timer),{processingState:Object.assign(Object.assign({},t),{type:"success"})}):e})},this.handleProcessingFailure=e=>{this.setState(t=>{const{processingState:n}=t;return F(n)?(clearInterval(n.timer),{processingState:Object.assign(Object.assign({},n),{type:"failed",userMessage:e})}):t})},this.updateProcessingProgress=e=>{this.setState(t=>{const{processingState:n}=t;return F(n)&&e?{processingState:Object.assign(Object.assign({},n),{type:"processing",progress:Object.assign(Object.assign({},n.progress),{percentComplete:e}),failedPolls:0})}:t})}}componentWillUnmount(){const{processingState:e}=this.state;F(e)&&clearInterval(e.timer)}render(){const{isOpen:e,isDisabled:t,renderUploader:n,successScreen:i,failureScreen:r,processingScreen:a}=this.props,{processingState:l}=this.state;if($(l))return n({onCloseRequest:this.onCloseRequest,onCreateSuccess:this.onUploadSuccess});if(R(l)){const{buttonText:n,descriptionText:r}=i;return o.createElement(S,{open:e,disabled:t,button:n,description:r,onAction:this.onCloseRequest})}if(I(l)){const{userMessage:n}=l,{buttonText:i,descriptionText:a}=r;return o.createElement(O,{open:e,disabled:t,button:i,description:a,error:n||void 0,onAction:this.onCloseRequest})}{const{buttonText:n,descriptionText:i}=a,{dataset:r,progress:c}=l,{percentComplete:d}=c,u=Object(s.b)(r.databundleSize);return o.createElement(k,{open:e,disabled:t,button:n,description:i,estimatedTimeHumanized:u,percentComplete:d,onAction:this.onCloseRequest})}}}const $=e=>"not-started"===e.type,F=e=>"processing"===e.type,R=e=>"success"===e.type,I=e=>"failed"===e.type},2094:function(e,t,n){"use strict";var i=n(3),r=n(9),a=n(0),o=n(212),s=n(2175),l=n(2288),c=n(2082),d=n(2007),u=n(2271),p=n(2272),m=n(2130),h=n(2176),g=n(1741),f=n(1),b=n.n(f);const y=b()(g.a)`
  height: 32px;
  width: 32px;
  margin-right: 16px;
`;function v({isDisabled:e,onClick:t}){return a.createElement(y,{icon:"arrow_back",disabled:e,onClick:t,"data-testid":"back-button"})}var C=n(2267),x=n(2268),E=n(1990),O=n(2291),w=n(2292),j=n(2266),k=n(2141),S=n(2232),D=n(2244),U=n(214);const $=b.a.div`
  padding: 16px;
`,F=b()(D.a)`
  width: 90%;
  height: 34px;
  margin-bottom: 8px;

  && .mdc-text-field__input {
    height: 32px !important;
  }

  && .mdc-floating-label {
    top: 8px;
  }

  && .mdc-floating-label--float-above {
    display: none !important;
  }

  && .mdc-notched-outline--notched .mdc-notched-outline__notch {
    display: none !important;
  }
`,R=b.a.div`
  display: flex;
  align-items: center;
`,I=b()(U.c)`
  color: ${e=>e.hasError?e.theme.material.color.status.error[900]:e.theme.material.color.text[50]};
  border: 1px solid transparent;
  flex: 0 0 auto;
`,T=b.a.input`
  padding: 0;
  color: ${e=>e.hasError?e.theme.material.color.status.error[900]:e.theme.material.color.text[50]};
  font-size: ${e=>e.theme.material.typography.body3.fontSize};
  font-weight: ${e=>e.theme.material.typography.body3.fontWeight};
  line-height: ${e=>e.theme.material.typography.body3.lineHeight};
  border-radius: ${e=>e.theme.material.borderRadius.normal};
  border: 1px solid transparent;
  margin-left: -1px;
  margin-top: -1px;
  flex: 1 1 auto;
  min-width: 0;

  &:focus {
    outline: none;
  }

  &:hover {
    border: 1px solid
      ${e=>e.hasError?e.theme.material.color.status.error[900]:e.theme.material.color.brand.grey[100]};
  }
`;function P(e){const t=a.useContext(E.a),{title:n,slug:i,ownerSlug:r,onTitleChange:o,onSlugChange:s}=e;return a.createElement($,null,a.createElement(F,{disabled:t,invalid:n.hasError,value:n.text,label:"Enter Dataset Title",onChange:e=>o(e.currentTarget.value)}),a.createElement(R,null,a.createElement(I,{hasError:i.hasError},"www.kaggle.com/",r,"/"),a.createElement(T,{disabled:t,hasError:i.hasError,value:i.text,onChange:e=>s(e.currentTarget.value)})))}var z=n(2344),_=n(2270),L=n(2287),M=n(2286),A=n(2284),B=n(2285);function q(e){const t=a.useContext(E.a),{renderProp:n,selectedTab:i,settings:r,config:o,onLicenseIdChange:l,onOwnerChange:d,onPrivacyChange:u,onFlagsChange:p}=e,{container:m,onUpdate:g}=n,{owner:f,licenseId:b,isPrivate:y,flags:v}=r,{allowedOwners:C,limits:x,licenseGroups:O}=o;if("uploadContainer"===i&&Object(c.q)(m))return a.createElement(A.a,{container:m,onUpdate:g});if("kernelOutputContainer"===i&&Object(c.h)(m))return a.createElement(M.a,{isDisabled:t,container:m,allowBackToSearch:!0,onUpdate:g});if("remoteUrlUploadContainer"===i&&Object(c.m)(m))return a.createElement(B.a,{isDisabled:t,container:m,onUpdate:g});if("githubContainer"===i&&Object(c.b)(m))return a.createElement(L.a,{container:m,onUpdate:g});if("gcsFileSetContainer"===i&&Object(c.a)(m))return a.createElement(_.a,{container:m,onUpdate:g});if("adminFlags"===i)return a.createElement(s.a,{flags:v,onFlagsChange:p});if("settings"===i){const{totalBytes:e,prevUsedBytes:n}=Object(S.f)(x,y),i=n+Object(h.a)(m);return a.createElement(z.a,{isDisabled:t,allowedOwners:C,licenseGroups:O,limits:{totalBytes:e,usedBytes:i},isPrivate:y,licenseId:b,owner:f,onLicenseIdChange:l,onOwnerChange:d,onPrivacyChange:u})}return a.createElement("div",null,"Invalid state")}var N=n(1666);const H=b.a.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: 0.96;

  background-color: ${e=>e.theme.material.color.white};
  z-index: ${e=>e.theme.zindex.foreground};
`,V=b.a.div`
  width: 70%;
`,K=b()(U.q)`
  margin: 16px 8px;
`,G=b.a.div`
  display: flex;
  justify-content: center;
  margin: 24px 8px;
`,W=b()(N.a)`
  margin-right: 8px;
`,Z=b()(N.a)`
  margin-left: 8px;
`;function Y(e){const{description:t,confirmText:n,cancelText:i,onAction:r}=e;return a.createElement(H,null,a.createElement(V,null,a.createElement(K,null,t),a.createElement(G,null,a.createElement(W,{emphasis:"low",onClick:()=>r("cancel")},i),a.createElement(Z,{emphasis:"high",onClick:()=>r("confirm")},n))))}const Q=a.memo(e=>{const{confirmModalType:t,onCloseRequest:n,onCreate:i,onDisableConfirmClose:r,onDisableConfirmCreate:o}=e;return"closeRequest"===t.type?a.createElement(Y,{description:"If you close this dialog, all your work in this window will be lost. Do you want to continue?",confirmText:"Confirm",cancelText:"Back",onAction:e=>{"confirm"===e?n():r()}}):"publicUpload"===t.type?a.createElement(Y,{description:a.createElement("div",null,a.createElement(U.q,null,"Ready To Go Public?"),a.createElement("br",null),a.createElement(U.b,null,"Public datasets enjoy the engagement from the entire Kaggle community. They cannot be changed back to private, but may be deleted. Hit the Back button and toggle to private if you are not ready yet.")),confirmText:"Create",cancelText:"Back",onAction:e=>{"confirm"===e?i(t.createType):o()}}):a.createElement(a.Fragment,null)});function J(e){const{isOpen:t,creation:n,onCloseRequest:i,onBackClicked:r}=e;return a.createElement(E.a.Provider,{value:n.isLoading},a.createElement(j.a,{open:t,onClose:i,headerBar:r&&a.createElement(k.f,null,e.onBackClicked&&a.createElement(v,{onClick:e.onBackClicked}),a.createElement(k.g,null,"Create a New Dataset"))},X(e)))}const X=e=>{const{renderProp:t,defaultTabs:n,selectedTab:i,settings:r,config:o,creation:s,confirmModalType:l,onCloseRequest:c,onCreate:d,onDisableConfirmClose:u,onDisableConfirmCreate:p,onTabSelect:m,onSlugChange:h,onTitleChange:g,onLicenseIdChange:f,onOwnerChange:b,onPrivacyChange:y,onFlagsChange:v}=e;if("error"===o)return a.createElement(C.a,null);if("loading"===o)return a.createElement(x.a,null);const{container:E,isContainerUploadable:j,isContainerDirty:S,doesContainerContainDuplicates:D,doesContainerHaveErrors:U,inflightUploadMessage:$}=t,{title:F,slug:R,owner:I,isPrivate:T}=r,{limits:z}=o,_=te(E,z,T),L=!re(F.value)&&!ae(R.value)&&j&&!_&&!s.isLoading,M=ne(F,S),A=ie(R,S),B=M||(A||(_||(U?"You must resolve errors before creating your dataset":s.errorMessage))),N=()=>B?{type:"error",str:B}:$,H=n.map(e=>Object.assign(Object.assign({},e),{isDisabled:ee(s.isLoading,e.key,E,S)}));return l?a.createElement(Q,{confirmModalType:l,onCloseRequest:c,onCreate:e=>{d(E,e)},onDisableConfirmClose:u,onDisableConfirmCreate:p}):a.createElement(a.Fragment,null,a.createElement(O.a,{tabs:H,selectedTab:i,onTabSelect:e=>m(e)}),a.createElement(k.d,null,a.createElement(k.e,null,a.createElement(P,{title:{text:F.value,hasError:!!M},slug:{text:R.value,hasError:!!A},ownerSlug:I.slug,onSlugChange:h,onTitleChange:g})),a.createElement(k.h,null,a.createElement(q,{renderProp:t,selectedTab:i,settings:r,config:o,onLicenseIdChange:f,onOwnerChange:b,onPrivacyChange:e=>y(e,"settings"),onFlagsChange:v})),a.createElement(w.a,{isPrivate:T,privacyTip:`Toggle to change to ${T?"public":"private"}`,statusMessage:N(),canCreate:L,isLoading:s.isLoading,createText:D?"Skip duplicates":"Create",duplicateText:D?"Include duplicates":void 0,onCreate:e=>d(E,e),onPrivacyChange:e=>y(e,"status")})))},ee=(e,t,n,i)=>e||"settings"!==t&&"adminFlags"!==t&&n.type!==t&&i,te=(e,t,n)=>{const i=Object(S.e)(t,n,e);if("success"!==i.status)return i.message},ne=(e,t)=>{const{value:n,wasEdited:i}=e;if(i||t)return re(n)},ie=(e,t)=>{const{value:n,wasEdited:i}=e;if(i||t)return ae(n)},re=e=>0===e.trim().length?"Please enter a title for your dataset.":e.trim().length<S.d||e.trim().length>S.b?`The title must be between ${S.d} and ${S.b} characters in length.`:void 0,ae=e=>0===e.trim().length?"Please enter a URL for your dataset.":e.trim().length<S.c||e.trim().length>S.a?`The URL must be between ${S.c} and ${S.a} characters in length.`:void 0;n.d(t,"a",(function(){return le}));const oe={type:"uploadContainer",files:[],directories:[],existingFiles:[],existingDirectories:[]},se=4;let le=(()=>{class e extends a.Component{constructor(){super(...arguments),this.state={selectedTab:this.props.defaultContainer?this.props.defaultContainer.type:"uploadContainer",settings:{title:{value:"",wasEdited:!1},slug:{value:"",wasEdited:!1},owner:this.props.defaultOwner?this.props.defaultOwner:{isOrganization:!1,id:this.props.user.id,imageUrl:this.props.user.imageUrl,name:this.props.user.name,slug:this.props.user.slug,userTier:null},isPrivate:!0!==this.props.isPublicByDefault,licenseId:se,flags:s.b},isConfirmingCloseRequest:!1,isConfirmingPublicUpload:{value:!1},config:"loading",creation:{isLoading:!1},lastPrivacyChangeMechanism:""},this.loadConfig=()=>Object(i.__awaiter)(this,void 0,void 0,(function*(){const{datasetsClient:e}=this.context.clients;try{const t=yield e.getDatasetUploaderConfig({currentDatasetVersionId:null,ownerOrganizationId:null});this.setState({config:{allowedOwners:t.allowedOwners,limits:t.limits,licenseGroups:t.licenseGroups}})}catch(e){this.setState({config:"error"})}})),this.renderContents=e=>{const{isOpen:t,user:n,onBackClicked:i}=this.props,{selectedTab:r,config:o,settings:s,creation:l,isConfirmingCloseRequest:c,isConfirmingPublicUpload:d}=this.state;return a.createElement(J,{isOpen:t,confirmModalType:c?{type:"closeRequest"}:d.value&&!l.isLoading?{type:"publicUpload",createType:d.createType}:void 0,renderProp:e,defaultTabs:Object(u.b)(n),selectedTab:r,settings:s,config:o,creation:l,onBackClicked:i,onCloseRequest:()=>this.onCloseRequest(e),onCreate:this.onCreate,onDisableConfirmClose:()=>this.setState({isConfirmingCloseRequest:!1}),onDisableConfirmCreate:()=>this.setState({isConfirmingPublicUpload:{value:!1}}),onTabSelect:this.onTabSelect(e),onTitleChange:this.onTitleChange,onSlugChange:this.onSlugChange,onLicenseIdChange:this.onLicenseIdChange,onOwnerChange:this.onOwnerChange,onPrivacyChange:this.onPrivacyChange,onFlagsChange:this.onFlagsChange})},this.onCloseRequest=e=>{const{onCloseRequest:t}=this.props,{isConfirmingCloseRequest:n,creation:i}=this.state;i.isLoading||(n||e.isContainerClosable?t():this.setState({isConfirmingCloseRequest:!0}))},this.onLicenseIdChange=e=>{this.setState(t=>{const{settings:n}=t;return{settings:Object.assign(Object.assign({},n),{licenseId:e})}})},this.onOwnerChange=e=>{this.setState(t=>{const{settings:n}=t;return{settings:Object.assign(Object.assign({},n),{owner:e})}},this.loadNewLimitsForOwner)},this.onFlagsChange=e=>{const{settings:t}=this.state;this.setState({settings:Object.assign(Object.assign({},t),{flags:e})})},this.loadNewLimitsForOwner=()=>Object(i.__awaiter)(this,void 0,void 0,(function*(){const{id:e}=this.props.user,{owner:t}=this.state.settings,n=t.isOrganization?e:t.id,i=t.isOrganization?t.id:null;try{const{datasetsClient:e}=this.context.clients,t=yield e.getDatasetLimits({userId:n,organizationId:i,excludeDatasetVersionId:null});this.setState(e=>{const{settings:n}=e;return{settings:Object.assign(Object.assign({},n),{limits:t})}})}catch(e){}})),this.onPrivacyChange=(e,t)=>{const{legacyClients:n}=this.context,{analyticsClient:i}=n;Object(d.d)(i,e,t),this.setState(n=>{const{settings:i}=n;return{settings:Object.assign(Object.assign({},i),{isPrivate:e}),lastPrivacyChangeMechanism:t}})},this.onTitleChange=e=>{this.setState(t=>{const{settings:n}=t,{slug:i}=n,r=i.wasEdited?i.value:ce(e);return{settings:Object.assign(Object.assign({},n),{title:{value:e,wasEdited:!0},slug:Object.assign(Object.assign({},n.slug),{value:r})})}})},this.onSlugChange=e=>{this.setState(t=>({settings:Object.assign(Object.assign({},t.settings),{slug:{value:e,wasEdited:!0}})}))},this.onTabSelect=e=>t=>{const{container:n,onUpdate:i}=e,{selectedTab:r}=this.state;this.setState({selectedTab:t}),("settings"!==r&&"adminFlags"!==r||n.type!==t)&&("githubContainer"!==t||Object(c.b)(n)?"remoteUrlUploadContainer"!==t||Object(c.m)(n)?"uploadContainer"!==t||Object(c.q)(n)?"kernelOutputContainer"!==t||Object(c.h)(n)?"gcsFileSetContainer"!==t||Object(c.a)(n)||i("gcsFileSetContainer","reset",void 0):i("kernelOutputContainer","reset",void 0):i("uploadContainer","reset",void 0):i("remoteUrlUploadContainer","reset",void 0):i("githubContainer","reset",void 0))},this.onCreate=(e,t)=>Object(i.__awaiter)(this,void 0,void 0,(function*(){const{showPublicCreationWarning:n}=this.props,{settings:i,isConfirmingPublicUpload:r,creation:a}=this.state,{isPrivate:o}=i;if(a.isLoading)return;const s="create"===t?ue(e):e;if("create"!==t||"uploadContainer"!==s.type||0!==Object(m.b)(s,()=>!0)){if(!o&&n){const{legacyClients:e}=this.context,{analyticsClient:t}=e;Object(d.e)(t,r.value)}o||!n||r.value?this.setState({creation:{isLoading:!0},isConfirmingPublicUpload:{value:!1}},()=>this.onCreateRequest(s,t)):this.setState({isConfirmingPublicUpload:{value:!0,createType:t}})}else this.onCreationError("Please specify at least one non-duplicate file.")})),this.onCreateRequest=Object(o.debounce)(1e3,!0,(e,t)=>Object(i.__awaiter)(this,void 0,void 0,(function*(){const{referrer:n,user:i,taskId:r,competitionId:a,showPublicCreationWarning:o}=this.props,{lastPrivacyChangeMechanism:s,settings:l}=this.state,{title:c,slug:u,isPrivate:m,licenseId:h,owner:g,flags:f}=l,b=Object(p.b)(e,{title:c.value,slug:u.value,isPrivate:m,licenseId:h,owner:g,referrer:n,flags:i.isAdmin?f:null,taskId:r,competitionId:a}),{legacyClients:y,clients:v}=this.context,{analyticsClient:C}=y,x="uploadContainer"===e.type&&(e.directories.length>0||e.existingDirectories.length>0);Object(d.a)(C,"dataset",t,x,s,void 0!==o&&o,b);try{const{datasetsClient:t}=v,n=yield t.createDatasetRequestV2(b);if("ok"===n.status){const{onCreateSuccess:t}=this.props;t(de(n,e))}else this.onCreationError(n.errorMessage?n.errorMessage:"An internal error occurred.")}catch(e){if("string"==typeof e.message)this.onCreationError(e.message);else{if("string"!=typeof e)throw e;this.onCreationError(e)}}}))),this.onCreationError=e=>{this.setState({creation:{errorMessage:e,isLoading:!1}})}}componentDidMount(){const{isOpen:e}=this.props;e&&this.loadConfig()}render(){const{defaultContainer:e}=this.props,t=e||oe;return a.createElement(l.a,{defaultContainer:t},this.renderContents)}}return e.contextType=r.ClientsContext,e})();const ce=e=>{const t=e.toLowerCase().trim().replace(/[^\w ]+/g,"").replace(/[_ ]+/g,"-");return t.endsWith("-")?t.substring(0,t.length-1):t},de=(e,t)=>{var n;if("ok"===e.status){const{url:i,datasetVersionReference:r,databundleVersionReference:a}=e,{databundleVersionId:o}=a,{datasetVersionId:s}=r;return{id:(null===(n=e.datasetVersionReference)||void 0===n?void 0:n.datasetId)||0,url:i,databundleSize:Object(h.a)(t),databundleVersionId:o,versionId:s}}throw new Error("Failed to create dataset")},ue=e=>{if(Object(c.q)(e)){const{files:t,directories:n}=e;return Object.assign(Object.assign({},e),{files:t.filter(e=>"duplicate"!==e.state.type),directories:n.map(e=>pe(e))})}return e},pe=e=>{const{files:t,directories:n}=e;return Object.assign(Object.assign({},e),{files:t.filter(e=>"duplicate"!==e.state.type),directories:n.map(e=>pe(e))})}},2130:function(e,t,n){"use strict";n.d(t,"i",(function(){return i})),n.d(t,"h",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"g",(function(){return l})),n.d(t,"f",(function(){return c})),n.d(t,"c",(function(){return d})),n.d(t,"j",(function(){return u})),n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));const i=(e,t)=>e.files.some(e=>e.state.type===t)||e.directories.some(e=>i(e,t)),r=e=>{const t=o(e),n=s(e);return 0===t?100:100*n/t},a=e=>e.files.length+e.directories.reduce((e,t)=>e+a(t),0),o=e=>e.files.reduce((e,t)=>t.size+e,0)+e.directories.reduce((e,t)=>e+o(t),0),s=e=>{return e.files.reduce((e,t)=>"uploading"===t.state.type?t.state.percentComplete*t.size/100+e:t.size+e,0)+e.directories.reduce((e,t)=>e+s(t),0)},l=(e,t)=>{const n={type:"uploadDirectory",name:"",files:e.files,directories:e.directories},i=t.reduce((e,t)=>{if(void 0===e)return;const n=e[e.length-1].directories.find(e=>e.name===t);return n?(e.push(n),e):void 0},[n]);if(Array.isArray(i))return i.slice(1)},c=(e,t)=>{const n={type:"existingDirectory",name:"",files:e.existingFiles,directories:e.existingDirectories},i=t.reduce((e,t)=>{if(void 0===e)return;const n=e[e.length-1].directories.find(e=>e.name===t);return n?(e.push(n),e):void 0},[n]);if(Array.isArray(i))return i.slice(1)},d=(e,t)=>{if("uploadDirectory"===t.type){const n=l(e,t.parts);return Array.isArray(n)?n.pop():void 0}if("existingDirectory"===t.type){const n=c(e,t.parts);return Array.isArray(n)?n.pop():void 0}},u=(e,t)=>{t(e),e.type,e.directories.forEach(e=>{u(e,t)})},p=(e,t)=>(e.type,e.files.filter(e=>t(e)).length+e.directories.reduce((e,n)=>e+p(n,t),0)),m=(e,t)=>{const{files:n,existingFiles:i,directories:r,existingDirectories:a}=e;return n.filter(e=>t(e)).length+i.filter(e=>t(e)).length+r.reduce((e,n)=>e+p(n,t),0)+a.reduce((e,n)=>e+p(n,t),0)}},2141:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return l})),n.d(t,"h",(function(){return c})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return u})),n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return h}));var i=n(214),r=n(1),a=n.n(r),o=n(2197);a.a.div`
  flex-grow: 1;
  display: flex;
  position: relative;
  line-height: 1.4;
`;const s=a.a.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 200px;
  flex: 1 1 auto;
`,l=a.a.div`
  flex: 0 0 auto;
  border-bottom: 1px solid ${e=>e.theme.colors.content.borderLight};
`,c=a.a.div`
  display: flex;
  flex: 1 1 0;
  min-height: 0;
`,d=(a()(o.a)`
  position: absolute;
  top: ${e=>e.theme.size.pad.s};
  right: ${e=>e.theme.size.pad.s};
  justify-self: right;
`,a()(o.a)`
  justify-self: right;
`,a.a.div`
  position: relative;
  height: 28px;
  flex: 0 0 auto;
  display: flex;
  border-bottom: 1px solid
    ${e=>e.theme.material.color.brand.grey[100]};
  padding: 16px;
  align-items: center;
`),u=a()(i.q)`
  flex: 1 1 auto;
`,p=a()(i.q)`
  margin: 16px 0 8px 0;
`,m=a()(i.c)`
  margin-bottom: 24px;
`,h=a.a.div`
  padding: 0 16px;
  overflow-y: auto;
  flex: 1 1 auto;
`},2146:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return c}));var i=n(214),r=n(1),a=n.n(r);const o=a()(i.v)`
  padding: ${e=>e.theme.size.pad.l} ${e=>e.theme.size.pad.m};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-shrink: 0;
`,s=(a.a.div`
  ${e=>e.theme.font.main.size.m};
  ${e=>e.theme.font.main.weight.light};
  color: ${e=>e.theme.colors.text.light};
  margin-top: -${e=>e.theme.size.pad.m}; /* HACK */
  padding: 0 ${e=>e.theme.size.pad.m} ${e=>e.theme.size.pad.l}
    ${e=>e.theme.size.pad.m};
`,a.a.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  padding: 1px 6px;
`),l=a()(s)`
  border: none;
  background: none;
  color: ${e=>e.theme.colors.kaggle.red};
  padding: 1px 6px;
  height: 26px;

  &:hover {
    cursor: pointer;
    color: ${e=>e.theme.colors.kaggle.redDarkest};
  }

  &:disabled {
    cursor: default;
    color: ${e=>e.theme.colors.text.light};
  }
`.withComponent("button"),c=(a()(s)`
  border: none;
  background: none;
  color: ${e=>e.theme.colors.kaggle.blueDark};

  &:hover {
    cursor: pointer;
    color: ${e=>e.theme.colors.kaggle.blue};
  }

  &:disabled {
    cursor: default;
    color: ${e=>e.theme.colors.text.light};
  }
`.withComponent("button"),(e,t,n)=>e?n:t)},2153:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n(1),r=n.n(i),a=n(1680),o=n(0);n(1679);const s=r()(a.b)``,l=e=>{const{align:t,children:n,className:i,desktop:r,order:a,phone:l,span:c,tablet:d}=e;return o.createElement(s,{align:t,className:i,desktop:r,order:a,phone:l,span:c,tablet:d},n)}},2156:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n(1),r=n.n(i),a=n(1680),o=n(0);n(1679);const s=r()(a.a)`
  && {
    padding: ${e=>e.padding?e.padding:"0px"};
  }
`,l=e=>{const{align:t,children:n,className:i,fixedColumnWidth:r,padding:a}=e;return o.createElement(s,{align:t,className:i,fixedColumnWidth:r,padding:a},n)}},2157:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return m}));var i=n(499),r=n(1),a=n.n(r),o=n(0);const s=a.a.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  background-color: rgba(220, 220, 220, 0.8);
`,l=a.a.div`
  background-color: ${e=>e.theme.material.color.white};
  border-radius: ${e=>e.theme.material.borderRadius.normal};
  color: ${e=>e.theme.material.color.text[70]};
  display: inline-block;
  font-size: ${e=>e.theme.material.typography.body2.fontSize};
  font-weight: ${e=>e.theme.material.typography.body2.fontWeight};
  line-height: ${e=>e.theme.material.typography.body2.lineHeight};
  width: 70%;
`,c=a.a.div`
  margin: ${e=>e.theme.material.spacing(5)}
    ${e=>e.theme.material.spacing(3)};
`,d=a.a.div`
  display: flex;
  justify-content: flex-end;
  margin: ${e=>e.theme.material.spacing(3)};
`,u=a()(i.Button)`
  margin-right: ${e=>e.theme.material.spacing(2)};
  background-color: ${e=>e.theme.material.color.white};
  border: 1px solid ${e=>e.theme.material.color.brand.grey[200]};
  color: ${e=>e.theme.material.color.brand.grey[500]};

  &:hover {
    background-color: ${e=>e.theme.material.color.white};
    border: 1px solid ${e=>e.theme.material.color.brand.blue[500]};
    color: ${e=>e.theme.material.color.brand.blue[500]};
  }
`,p=a()(i.Button)`
  background-color: ${e=>e.theme.material.color.brand.blue[800]};

  &:hover {
    background-color: ${e=>e.theme.material.color.brand.blue[500]};
    color: ${e=>e.theme.material.color.white};
  }
`;function m(e){const{description:t,confirmText:n,cancelText:i,onAction:r}=e;return o.createElement(s,null,o.createElement(l,null,o.createElement(c,null,t),o.createElement(d,null,o.createElement(u,{variant:"secondary",tight:!0,onClick:()=>r("cancel")},i),o.createElement(p,{variant:"secondary",tight:!0,onClick:()=>r("confirm")},n))))}},2168:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"e",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return d}));var i=n(1),r=n.n(i);const a=i.keyframes`
  {
    0% {
      background-position: -200px 0;
    }
    100% {
      background-position: calc(200px + 100%) 0;
    }
  }
`,o=r.a.div`
  background-color: ${e=>e.theme.colors.misc.grayLighter};
  background-image: linear-gradient(
    90deg,
    ${e=>e.theme.colors.misc.grayLighter},
    ${e=>e.theme.colors.misc.grayLightest},
    ${e=>e.theme.colors.misc.grayLighter}
  );

  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: ${e=>e.theme.size.border.radius.loadingBar};
  margin: ${e=>e.theme.size.margin.xs};
  animation: ${a} 1.2s ease-in-out 0s infinite normal none running;
`,s=r()(o)`
  width: ${e=>{var t;return null!==(t=e.width)&&void 0!==t?t:"auto"}};
  height: ${e=>e.fontSize.toString()+"px"};
  margin-top: ${e=>(e.lineHeight-e.fontSize).toString()+"px"};
`,l=r()(s).attrs({fontSize:20,lineHeight:24})``,c=r()(s).attrs({fontSize:16,lineHeight:24})``,d=r()(s).attrs({fontSize:12,lineHeight:20})``},2175:function(e,t,n){"use strict";n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return g}));var i=n(214),r=n(1737),a=n(499),o=n(1),s=n.n(o),l=n(0),c=n(1990);const d=s.a.div`
  padding: ${e=>e.theme.material.spacing(4)};
  display: flex;
  width: 100%;
  overflow-y: auto;
`,u=s.a.div`
  flex: 0 0 50%;
  .mdc-form-field {
    align-items: flex-start !important;
  }
`,p=s()(i.e.withComponent("p"))`
  color: ${e=>e.theme.material.color.text[50]};
`,m=s.a.div`
  margin: ${e=>e.theme.material.spacing(4)}
    ${e=>e.theme.material.spacing(2)} ${e=>e.theme.material.spacing(4)} 0;
`,h={reuseOriginalSingleGcsZip:!1,disableRawUpload:!1,disableBundleCreation:!1,disableIndividualZipCreation:!1,disableDirectoryZipCreation:!1,disableDecompression:!1,gcsUploadUrl:""},g=e=>{const t=l.useContext(c.a),{flags:n,onFlagsChange:o}=e;return l.createElement(d,null,l.createElement(u,null,l.createElement(i.q,null,"Flags"),l.createElement(m,null,l.createElement(r.a,{title:"Reuse Single Zip",disabled:t,checked:n.reuseOriginalSingleGcsZip,onChange:e=>o(Object.assign(Object.assign({},n),{reuseOriginalSingleGcsZip:e.currentTarget.checked}))},"Reuse Single Zip",l.createElement(p,null,"If a single zip was uploaded, reuse this zip as-is as the bundle zip (ignored if not exactly one zip was uploaded)."))),l.createElement(m,null,l.createElement(r.a,{title:"Disable Kernels Upload",disabled:t,checked:n.disableRawUpload,onChange:e=>o(Object.assign(Object.assign({},n),{disableRawUpload:e.currentTarget.checked}))},"Disable Kernels Upload",l.createElement(p,null,"If enabled, no data will be uploaded to the kernels bucket / available for Notebooks."))),l.createElement(m,null,l.createElement(r.a,{title:"Disable bundle.zip Creation",disabled:t,checked:n.disableBundleCreation,onChange:e=>o(Object.assign(Object.assign({},n),{disableBundleCreation:e.currentTarget.checked}))},"Disable bundle.zip Creation",l.createElement(p,null,"Disables the creation of the bundle.zip (the archive containing all raw contents). If enabled, overrides 'Reuse Single Zip'."))),l.createElement(m,null,l.createElement(r.a,{title:"Disable Individual Zip Creation",disabled:t,checked:n.disableIndividualZipCreation,onChange:e=>o(Object.assign(Object.assign({},n),{disableIndividualZipCreation:e.currentTarget.checked}))},"Disable Individual Zip Creation",l.createElement(p,null,"By default, all files ",">","1mb get zipped individually, for faster downloads from the website. Settings this flag disables this functionality and always uses the raw files."))),l.createElement(m,null,l.createElement(r.a,{title:"Disable Directory Zip Creation",disabled:t,checked:n.disableDirectoryZipCreation,onChange:e=>o(Object.assign(Object.assign({},n),{disableDirectoryZipCreation:e.currentTarget.checked}))},"Disable Directory Zip Creation",l.createElement(p,null,"By default, all top-level directories with ",">","10 files get zipped, for faster downloads from the website. Settings this flag disables this functionality."))),l.createElement(m,null,l.createElement(r.a,{title:"Disable Decompression",disabled:t,checked:n.disableDecompression,onChange:e=>o(Object.assign(Object.assign({},n),{disableDecompression:e.currentTarget.checked}))},"Disable Decompression",l.createElement(p,null,"By default, all archive files (zip, tar.gz, 7zip, ...) get decompressed automatically. This setting disables it.")))),l.createElement(u,null,l.createElement(i.q,null,"Other settings"),l.createElement(m,null,l.createElement(a.TextInput,{placeholder:"GCS Upload URL",value:n.gcsUploadUrl?n.gcsUploadUrl:null,disabled:t,debounceMilliseconds:100,hasIndicator:!1,hideBorder:!1,sizeToContent:!1,onSave:e=>o(Object.assign(Object.assign({},n),{gcsUploadUrl:e}))}),l.createElement(p,null,"Set this path to a valid GCS URL to pull the data from there instead of using uploaded files (TPU usecase)."))))}},2176:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(2082),r=n(2130);const a=e=>{if("uploadContainer"===e.type){const{files:t,existingFiles:n,directories:i,existingDirectories:a}=e;return t.reduce((e,t)=>e+t.size,0)+n.reduce((e,t)=>e+t.size,0)+i.reduce((e,t)=>e+Object(r.e)(t),0)+a.reduce((e,t)=>e+Object(r.e)(t),0)}if("remoteUrlUploadContainer"===e.type){const{children:t}=e;return t.reduce((e,t)=>"remoteUrlVersionedFile"===t.type?e+t.size:Object(i.p)(t.state)?e+t.state.size:0,0)}return 0}},2177:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return c}));var i=n(1),r=n.n(i),a=n(1666),o=n(60);const s=r.a.div`
  border-radius: 20px;
  height: 36px;
  transition: all 0.3s ease;

  &:hover,
  &:active,
  &:focus {
    box-shadow: ${e=>!e.disabled&&o.a[e.theme.name][e.emphasis||"high"].hover.shadow};
  }
`,l=r()(a.a)`
  padding-right: 8px;
  border-right: ${e=>o.a[e.theme.name].medium.border};
  border-radius: 20px 0 0 20px;

  &:hover,
  &:active,
  &:focus {
    border-right: ${e=>o.a[e.theme.name].medium.border};
    box-shadow: none;
  }
`,c=r()(a.a)`
  border-radius: 0 20px 20px 0;
  padding-left: 10px;
  padding-right: 16px;

  &:hover,
  &:active,
  &:focus {
    background-color: ${e=>o.a[e.theme.name][e.emphasis||"high"].split_hover.background};
    box-shadow: none;
  }
`},2197:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n(208),r=n(1),a=n.n(r),o=n(0);const s=a.a.button`
  padding: ${e=>e.theme.size.pad.xs} ${e=>e.theme.size.pad.s};
  border: none;
  border-radius: ${e=>e.theme.size.border.radius.button};
  background-color: ${e=>e.theme.colors.content.borderLight};
  color: ${e=>e.theme.colors.kaggle.gray};
  cursor: ${e=>e.disabled?"default":"pointer"};

  &:hover {
    color: ${e=>e.disabled?e.theme.colors.kaggle.gray:e.theme.colors.kaggle.black};
  }
  &:focus {
    outline: none;
  }
`;function l({isDisabled:e,onClose:t,className:n}){return o.createElement(s,{disabled:e,onClick:t,className:n,"data-testid":"close-modal-button",title:"Close"},o.createElement(i.a,{icon:"close",size:"xsmall"}))}},2213:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return c}));var i=n(1666),r=n(1),a=n(1862),o=n(0);function s(e){const{isDisabled:t,onClick:n,className:r}=e;return o.createElement(i.a,{emphasis:"medium",disabled:t,onClick:n,className:r,leadingIcon:"add"},"Upload Files")}function l(e){const t=Object(a.a)(r.BreakpointDown.PHONE),{isDisabled:n,onClick:s,className:l}=e;return o.createElement(i.a,{emphasis:"medium",disabled:n,onClick:s,className:l,leadingIcon:"add"},t?"Add":"Add Remote Files")}function c(e){const{isDisabled:t,onClick:n,className:r}=e;return o.createElement(i.a,{emphasis:"medium",disabled:t,onClick:n,className:r},"Back To Search")}},2232:function(e,t,n){"use strict";var i=n(501),r=n(2176),a=n(2130);n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return c})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return u}));const o=5,s=50,l=6,c=50,d=(e,t,n)=>{if((e=>{if("uploadContainer"===e.type){return Object(a.b)(e,()=>!0)}return"remoteUrlUploadContainer"===e.type?e.children.length:0})(n)>e.maxFiles){return{status:"error",message:`Maximum number of files exceeded (${e.maxFiles})`}}const o=u(e,t),s=o.totalBytes-o.prevUsedBytes,l=Object(r.a)(n);if(l>s){return{status:"error",message:`The total size of the dataset (${i(l)}) must be below ${i(s)}`}}return{status:"success"}},u=(e,t)=>{if(t){const{totalBytes:t,usedBytes:n}=e.privateLimits;return{totalBytes:t,prevUsedBytes:n}}const{maxBytes:n}=e.publicLimits;return{totalBytes:n,prevUsedBytes:0}}},2244:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n(1),r=n.n(i),a=n(1704),o=n(0);n(1668),n(1669),n(1670),n(1696);const s=r()(a.a)`
  &:not(.mdc-text-field--focused):hover {
    .mdc-notched-outline__leading,
    .mdc-notched-outline__notch,
    .mdc-notched-outline__trailing {
      border-color: ${e=>e.theme.material.color.mode[e.theme.name].textinput.hover} !important;
    }
  }

  &&& {
    min-width: ${e=>e.theme.material.spacing(32)};
    transition: all 0.3s ease;

    .mdc-text-field__input {
      font-family: "Inter", sans-serif;
      color: ${e=>e.theme.material.color.mode[e.theme.name].textinput.focused};

      caret-color: ${e=>e.theme.material.color.mode[e.theme.name].textinput.focused};

      &:hover {
        background-color: transparent !important;
      }
    }

    .mdc-floating-label,
    .mdc-text-field__icon {
      color: ${e=>e.theme.material.color.mode[e.theme.name].textinput.focused};
    }

    .mdc-notched-outline__leading,
    .mdc-notched-outline__notch,
    .mdc-notched-outline__trailing {
      border-color: ${e=>e.theme.material.color.mode[e.theme.name].textinput.default};
    }
  }

  &&&.mdc-text-field--focused {
    .mdc-notched-outline__leading,
    .mdc-notched-outline__notch,
    .mdc-notched-outline__trailing {
      border-color: ${e=>e.theme.material.color.mode[e.theme.name].textinput.focused};
    }
  }

  &&&.mdc-text-field--invalid {
    .mdc-notched-outline__leading,
    .mdc-notched-outline__notch,
    .mdc-notched-outline__trailing {
      border-color: ${e=>e.theme.material.color.mode[e.theme.name].textinput.error};
    }

    .mdc-floating-label,
    .mdc-text-field__icon {
      color: ${e=>e.theme.material.color.mode[e.theme.name].textinput.error};
    }
  }

  &&&.mdc-text-field--disabled {
    opacity: 0.38;
  }
`,l=e=>{const{onChange:t,disabled:n,label:i,leadingIcon:r,pattern:a,required:l,status:c,trailingIcon:d,trailingIconAction:u,type:p,value:m,name:h,className:g,onBlur:f,onFocus:b,autoFocus:y}=e;return o.createElement(s,{autoFocus:y,onChange:t,disabled:n,icon:r,invalid:"invalid"===c||e.invalid,label:i,pattern:a,required:l,trailingIcon:d&&{icon:d,tabIndex:0,onClick:u},type:p,value:m,outlined:!0,name:h,className:g,onBlur:f,onFocus:b})}},2263:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var i=n(1),r=n.n(i),a=n(0),o=n(208),s=n(214),l=n(1685),c=n(510),d=n(1686);const u=r.a.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :focus {
    outline: none;
    border: none;
  }
`,p=r()(o.a)`
  margin-right: ${e=>e.theme.material.spacing(4)};
`,m=r()(o.a)`
  margin-left: ${e=>e.theme.material.spacing(2)};
`,h=({options:e,optionIcons:t,onSelect:n,value:i,dense:r,disabled:o,hoistToBody:h=!0,renderButton:g,renderOption:f,focusOnOpen:b})=>{const[y,v]=a.useState(!1);return a.createElement(d.a,null,a.createElement(l.a,{open:y,focusOnOpen:b,anchorCorner:"bottomLeft",dense:r,hoistToBody:h,onSelect:t=>{t.detail.item.textContent&&n(e[t.detail.index],t.detail.index)},onClose:()=>v(!1),style:{zIndex:1001}},e.map((e,n)=>a.createElement(c.a,{key:e},t&&t[n]&&a.createElement(p,{useKM:!0,icon:t[n]}),f?f(e):e))),a.createElement(u,{tabIndex:0,onClick:o?void 0:()=>v(!0)},g?g(i):a.createElement(s.t,{emphasis:o?"low":"high"},i),a.createElement(m,{icon:"arrow_drop_down",size:"small",emphasis:o?"low":"high"})))}},2266:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var i=n(1741),r=n(218),a=n(1),o=n.n(a),s=n(0),l=n(1990);const c=o.a.div`
  margin: -32px;
  position: relative;
`,d=o.a.div`
  display: flex;
  height: 480px;
`,u=o()(i.a)`
  position: absolute;
  top: 14px;
  right: 8px;
  height: 32px;
  width: 32px;
`,p=e=>{const{open:t,headerBar:n,onClose:i,children:a}=e;return s.createElement(r.a,{open:t,onClose:i},s.createElement(c,null,s.createElement(l.a.Consumer,null,e=>!e&&s.createElement(u,{icon:"close",onClick:i})),n,s.createElement(d,null,a)))}},2267:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n(1),r=n.n(i),a=n(0),o=n(2349);const s=r.a.a`
  color: ${e=>e.theme.colors.text.link};
  text-decoration: none;

  &:hover {
    color: ${e=>e.theme.colors.hover.link};
  }
`;function l(){return a.createElement(o.a,{title:"Ooooops, something went wrong.",description:a.createElement(a.Fragment,null,"Please try reopening this dialog. If the problem persists, please contact ",a.createElement(s,{href:"mailto:support@kaggle.com"},"contact support")," and we'll get you squared away.")})}},2268:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n(1717),r=n(1),a=n.n(r),o=n(0);const s=a.a.div`
  flex-grow: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${e=>e.theme.colors.kaggle.blueDark};
  padding: ${e=>e.theme.size.pad.m};
`;function l(){return o.createElement(s,null,o.createElement(i.a,{size:"xlarge"}))}},2269:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));const i=(e,t)=>{if(e.type!==t.type)return!0;if("githubContainer"===e.type&&"githubContainer"===t.type)return e.state.type!==t.state.type||e.url!==t.url;if("uploadContainer"===e.type&&"uploadContainer"===t.type){if(e.files.length!==t.files.length||e.existingFiles.length!==t.existingFiles.length||e.directories.length!==t.directories.length||e.existingDirectories.length!==t.existingDirectories.length)return!0;if(e.directories.length>0||t.directories.length>0||e.existingDirectories.length>0||t.existingDirectories.length>0)return!0;for(let n=0;n<e.files.length;n++)if(s(e.files[n],t.files[n]))return!0;for(let n=0;n<e.existingFiles.length;n++)if(l(e.existingFiles[n],t.existingFiles[n]))return!0;return!1}if("remoteUrlUploadContainer"===e.type&&"remoteUrlUploadContainer"===t.type){if(e.children.length!==t.children.length)return!0;for(let n=0;n<e.children.length;n++)if(o(e.children[n],t.children[n]))return!0;return!1}if("kernelOutputContainer"===e.type&&"kernelOutputContainer"===t.type){if("listFiles"===e.state.type&&"listFiles"===t.state.type){if(r(e.state.kernel,t.state.kernel))return!0;if(e.state.files.length!==t.state.files.length)return!0;for(let n=0;n<e.state.files.length;n++)if(a(e.state.files[n],t.state.files[n]))return!0;return!1}if("listKernels"===e.state.type&&"listKernels"===t.state.type){if(e.state.query!==t.state.query)return!0;if(e.state.searchType!==t.state.searchType)return!0;if(e.state.kernels.length!==t.state.kernels.length)return!0;for(let n=0;n<e.state.kernels.length;n++)if(r(e.state.kernels[n],t.state.kernels[n]))return!0;return!1}}else if("gcsFileSetContainer"===e.type&&"gcsFileSetContainer"===t.type)return e.gcsUrl!==t.gcsUrl;return!0},r=(e,t)=>e.id!==t.id||e.title!==t.title||e.url!==t.url,a=(e,t)=>e.type!==t.type||e.name!==t.name||e.id!==t.id,o=(e,t)=>{if(e.type!==t.type||e.name!==t.name||e.url!==t.url)return!0;if("remoteUrlUploadFile"===e.type&&"remoteUrlUploadFile"===t.type){if(e.state.type!==t.state.type)return!0}else if("remoteUrlVersionedFile"===e.type&&"remoteUrlVersionedFile"===t.type&&e.id!==t.id)return!0;return!1},s=(e,t)=>{if(e.type!==t.type||e.name!==t.name||e.state.type!==t.state.type)return!0;if("uploading"===e.state.type&&"uploading"===t.state.type){if(e.state.percentComplete!==t.state.percentComplete)return!0}else if("duplicate"===e.state.type&&"duplicate"===t.state.type&&e.state.duplication.url!==t.state.duplication.url)return!0;return!1},l=(e,t)=>e.type!==t.type||e.name!==t.name||e.identifier.type!==t.identifier.type||("database"===e.identifier.type&&"database"===t.identifier.type?e.identifier.databundleVersionObjectId!==t.identifier.databundleVersionObjectId:"firestore"===e.identifier.type&&"firestore"===t.identifier.type&&e.identifier.gcsPath!==t.identifier.gcsPath)},2270:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var i=n(3),r=n(2244),a=n(214),o=n(9),s=n(1),l=n.n(s),c=n(0),d=n(2353),u=n(2141),p=n(2269);const m=l()(r.a)`
  width: 100%;
  height: unset;
`,h=l()(a.b)`
  color: ${e=>e.theme.material.color.status.error[700]};
  margin: 16px 0;
`;let g=(()=>{class e extends c.Component{constructor(){super(...arguments),this.shouldComponentUpdate=e=>{const{container:t}=this.props;return Object(p.a)(t,e.container)},this.renderStatusMessage=(e,t)=>{if(!e&&t)return c.createElement(h,null,"This does not seem to be a valid GCS Url (for example gs://bucket/path).")},this.getStatusIcon=(e,t)=>e||t?t?"priority_high":void 0:"check",this.onGcsUrlChange=e=>Object(i.__awaiter)(this,void 0,void 0,(function*(){const{onUpdate:t}=this.props;t("gcsFileSetContainer","set",{gcsUrl:e})}))}render(){const{container:e}=this.props,{gcsUrl:t}=e,n=""===t,i=!n&&!Object(d.a)(t);return c.createElement(u.c,null,c.createElement(u.a,{"data-testid":"remote-gcsfileset-header"},"Import Google Cloud Storage Files"),c.createElement(u.b,{emphasis:"low"},"Create a dataset from a public Google Cloud Storage bucket or path."),c.createElement(m,{label:"Public GCS URL",value:t,status:i?"invalid":"normal",onChange:e=>this.onGcsUrlChange(e.currentTarget.value),trailingIcon:this.getStatusIcon(n,i)}),this.renderStatusMessage(n,i))}}return e.contextType=o.ClientsContext,e})()},2271:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s}));const i=[{key:"uploadContainer",icon:"upload_file"},{key:"remoteUrlUploadContainer",icon:"link"},{key:"githubContainer",icon:"github"},{key:"kernelOutputContainer",icon:"code"},{key:"gcsFileSetContainer",icon:"cloud"}].map(e=>e),r={key:"settings",icon:"settings",isEnd:!0},a={key:"adminFlags",icon:"lock",isEnd:!0},o=e=>e.isAdmin?[...i,a,r]:[...i,r],s=e=>e.isAdmin?[...i,a]:[...i]},2272:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return s}));var i=n(2354),r=n(2301);const a=(e,t)=>{const{title:n,slug:i,isPrivate:r,licenseId:a,owner:o,referrer:s,flags:c,taskId:d,competitionId:u}=t;return Object.assign(Object.assign({},l(e)),{title:n,slug:i,isPrivate:r,licenseId:a,ownerOrganizationId:o.isOrganization?o.id:null,ownerUserId:o.isOrganization?null:o.id,referrer:s,description:null,overview:null,flags:y(c),taskId:d||null,competitionId:u||null})},o=(e,t)=>Object.assign(Object.assign(Object.assign({},l(e)),t),{deleteOldVersions:!1,overview:null,description:null,flags:y(t.flags)}),s=(e,t)=>Object.assign(Object.assign(Object.assign({},l(e)),t),{flags:y(t.flags)}),l=e=>{switch(e.type){case"uploadContainer":return c(e);case"remoteUrlUploadContainer":return h(e);case"githubContainer":return g(e);case"kernelOutputContainer":return f(e);case"gcsFileSetContainer":return b(e)}throw new Error("invalid container supplied")},c=e=>{return{databundleVersionType:"fileset",files:e.files.filter(e=>Object(i.a)(e.state)).map(e=>d(e)),existingFiles:e.existingFiles.map(e=>u(e)),directories:e.directories.map(e=>p(e)),existingDirectories:e.existingDirectories.map(e=>m(e)),remoteUrlInfos:[],githubInfo:null,kernelOutputInfo:null,gcsFileSetInfo:null,flags:null}},d=e=>({name:e.name,token:e.state.token}),u=e=>{const t={type:"existingFile",name:e.name,size:e.size};return"firestore"===e.identifier.type?Object.assign(Object.assign({},t),{gcsPath:e.identifier.gcsPath,legacyInfo:null}):Object.assign(Object.assign({},t),{gcsPath:"",legacyInfo:{databundleVersionObjectId:e.identifier.databundleVersionObjectId,blobFileId:e.identifier.blobFileId}})},p=e=>({name:e.name,files:e.files.map(e=>d(e)),directories:e.directories.map(e=>p(e))}),m=e=>({name:e.name,files:e.files.map(e=>u(e)),directories:e.directories.map(e=>m(e))}),h=e=>{return{databundleVersionType:"remoteUrlFileSet",remoteUrlInfos:e.children.filter(e=>{return"remoteUrlUploadFile"===e.type&&"success"===e.state.type||"remoteUrlVersionedFile"===e.type}).map(e=>({name:e.name,url:e.url})),files:[],existingFiles:[],directories:[],existingDirectories:[],githubInfo:null,kernelOutputInfo:null,gcsFileSetInfo:null,flags:null}},g=e=>{const t=Object(r.a)(e.url),n={databundleVersionType:"remoteGitRepositoryFileSet",files:[],existingFiles:[],directories:[],existingDirectories:[],remoteUrlInfos:[],githubInfo:null,kernelOutputInfo:null,gcsFileSetInfo:null,flags:null};return t?Object.assign(Object.assign({},n),{githubInfo:{ownerSlug:t.owner,repositorySlug:t.repository,lastUpdatedHash:null}}):n},f=e=>"listFiles"!==e.state.type?{databundleVersionType:"kernelOutputFileSet",kernelOutputInfo:{kernelId:0,kernelVersionId:0,kernelOutputFiles:[]},files:[],existingFiles:[],directories:[],existingDirectories:[],remoteUrlInfos:[],githubInfo:null,gcsFileSetInfo:null,flags:null}:{databundleVersionType:"kernelOutputFileSet",kernelOutputInfo:{kernelId:e.state.kernel.id,kernelVersionId:e.state.kernel.lastKernelRunId,kernelOutputFiles:[]},files:[],existingFiles:[],directories:[],existingDirectories:[],remoteUrlInfos:[],githubInfo:null,gcsFileSetInfo:null,flags:null},b=e=>({databundleVersionType:"gcsFileSet",kernelOutputInfo:null,files:[],existingFiles:[],directories:[],existingDirectories:[],remoteUrlInfos:[],githubInfo:null,gcsFileSetInfo:{gcsUrl:e.gcsUrl},flags:null}),y=e=>{if(!e)return null;const{reuseOriginalSingleGcsZip:t,disableRawUpload:n,disableBundleCreation:i,disableIndividualZipCreation:r,disableDirectoryZipCreation:a,gcsUploadUrl:o,disableDecompression:s}=e;return{disableWorker:!1,disableMetadata:!1,disableStatus:!1,disableStatusPubSub:!1,disableFinalResult:!1,disableEmbeddedFilesystem:!0,useStandaloneZipperForBundle:!0,migration:!1,migrationIsCurrentDatabundleVersion:!1,reuseOriginalSingleGcsZip:t,disableRawUpload:n,disableBundleCreation:i,disableDirectoryZipCreation:a,disableIndividualZipCreation:r,disableDecompression:s,gcsUploadUrl:o||null}}},2284:function(e,t,n){"use strict";var i=n(3),r=n(9),a=n(1),o=n.n(a),s=n(0),l=n(1682),c=n(2157),d=n(2350),u=n(2351),p=n(2007),m=n(1990),h=n(2130),g=n(2213),f=n(214),b=n(208);const y=o.a.div`
  display: flex;
  align-items: center;
  color: ${e=>e.theme.material.color.text[70]};
`,v=o()(f.t)`
  display: flex;
  white-space: nowrap;
`,C=o()(f.t.withComponent("button"))`
  display: flex;
  white-space: nowrap;
  background: none;
  border: none;

  &:hover {
    cursor: pointer;
    color: ${e=>e.theme.material.color.anchor.hover};
  }

  &:disabled {
    cursor: default;
    color: ${e=>e.theme.material.color.text[70]};
  }
`,x=o()(b.a)`
  margin-right: ${e=>e.theme.material.spacing(1)};
`,E=o()(b.a)`
  margin: 0 ${e=>e.theme.material.spacing(2)} 0
    ${e=>e.theme.material.spacing(2)};
`;function O({path:e,onPathChange:t,className:n}){const i=s.useContext(m.a);return s.createElement(y,{className:n},s.createElement(C,{key:"root-path",disabled:i,onClick:()=>t([])},s.createElement(x,{icon:"folder",size:"small"}),"root"),s.createElement(E,{icon:"chevron_right",size:"xsmall"}),e.map((n,r)=>{const a=r===e.length-1,o=e.slice(0,r+1),l=a?s.createElement(v,null,s.createElement(x,{icon:"folder",size:"small"}),n):s.createElement(C,{disabled:i,onClick:()=>t(o)},s.createElement(x,{icon:"folder",size:"small"}),n);return s.createElement(s.Fragment,{key:o.join("/")},l,!a&&s.createElement(E,{icon:"chevron_right",size:"xsmall"}))}))}var w=n(501),j=n(127);const k=o()(f.b.withComponent("li"))`
  list-style-type: none;
  padding: 0 16px;

  &:hover {
    cursor: ${e=>e.isDisabled?"default":"pointer"};
    background-color: ${e=>e.isDisabled?"transparent":e.theme.material.color.brand.grey[50]};
  }
`;function S({children:e,onHover:t,onClick:n,className:i}){const r=s.useContext(m.a);return s.createElement(k,{isDisabled:r,onMouseOver:!r&&t?()=>t(!0):void 0,onMouseLeave:!r&&t?()=>t(!1):void 0,onClick:r?void 0:n,className:i},e)}var D=n(504);const U=o()(D.a)`
  width: 200px;
  height: ${e=>e.theme.font.main.size.m};
`,$=o()(f.b)`
  display: flex;
  align-items: center;
  color: ${e=>e.theme.colors.text.light};
  padding: ${e=>e.theme.size.pad.xs};
`,F=o()(f.b)`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline;
`,R=o()(f.b)`
  display: inline;
`,I=o()(e=>{const t=s.useContext(m.a),{percent:n,className:i}=e;return s.createElement(U,{className:i,strokeLinecap:"butt",percent:n,strokeWidth:2,trailWidth:0,strokeColor:t?"rgba(0,0,0,0.4)":"#86dcff",trailColor:"rgba(0,0,0,0.1)","data-testid":"progress-bar"})})`
  margin-right: ${e=>e.theme.size.pad.s};
`,T=o()(f.e.withComponent("div"))`
  padding: 0 40px 4px 34px;
`,P=o.a.p`
  margin: 0;
`,z=o()(f.w.withComponent("button"))`
  font-size: ${e=>e.theme.material.typography.caption.fontSize};
  color: ${e=>e.theme.material.color.anchor.base};
  padding: 0 0 0 4px;

  border: none;
  background: none;

  &:hover {
    cursor: pointer;
    color: ${e=>e.theme.material.color.anchor.hover};
  }
`;function _(e){const t=s.useContext(m.a),{error:n}=e,i="folder-error"===n.type?"Folder contains files that failed to upload.":"folder-duplication"===n.type?"Folder contains files that exist in other datasets or competitions.":s.createElement(s.Fragment,null,"This file already exists in ",n.entity," ",s.createElement(f.w,{title:`${n.entityName} ${n.entity}`,href:n.href,target:"_blank",rel:"noopener"},n.entityName," ",s.createElement(b.a,{icon:"open_in_new",size:"inline"})),". Consider removing it and using the existing data source."),r="folder-error"===n.type?"Remove Failed Uploads":"folder-duplication"===n.type?"Remove Duplicates":void 0;return s.createElement(T,null,s.createElement(P,null,i,!t&&"file-duplication"!==n.type&&s.createElement(z,{onClick:n.onAction},r)))}var L=n(2146);const M=o()(({isDisabled:e,...t})=>s.createElement(b.a,Object.assign({},t)))`
  color: ${e=>Object(L.d)(e.isDisabled,e.theme.colors.kaggle.orange,e.theme.colors.text.light)};
`,A=e=>{const{isDisabled:t,onRemove:n}=e;return n?s.createElement(L.c,{disabled:t,onClick:n,"data-testid":"duplicate-remove-icon"},s.createElement(b.a,{icon:"close"})):s.createElement(L.b,{"data-testid":"duplicate-icon"},s.createElement(M,{isDisabled:t,icon:"warning"}))};var B=n(2299),q=n(2300);function N(e){const t=s.useContext(m.a),{directory:n,onRemove:i}=e;return Object(h.i)(n,"failed")?s.createElement(B.a,{isDisabled:t,onRemove:i}):Object(h.i)(n,"duplicate")?s.createElement(A,{isDisabled:t,onRemove:i}):Object(h.i)(n,"uploading")?s.createElement(L.c,{disabled:t,onClick:i,"data-testid":"uploading-directory-remove-icon"},s.createElement(b.a,{icon:"close"})):s.createElement(q.a,{isDisabled:t,onRemove:i})}const H=o()(b.a)`
  margin-right: ${e=>e.theme.size.pad.s};
  width: 24px;
`;function V(e){const t=s.useContext(m.a),[n,i]=s.useState(!1),{directory:r,className:a,onNavigate:o,onRemove:l,onRemoveDuplicates:c,onRemoveFailed:d}=e,u=Object(h.i)(r,"failed")?s.createElement(_,{error:{type:"folder-error",onAction:e=>{e.stopPropagation(),d()}}}):Object(h.i)(r,"duplicate")?s.createElement(_,{error:{type:"folder-duplication",onAction:e=>{e.stopPropagation(),c()}}}):void 0,p=Object(h.h)(r),g=w(Object(h.e)(r)),f=Object(h.d)(r);return s.createElement(S,{key:r.name,onClick:t?void 0:o,onHover:i,className:a},s.createElement($,null,s.createElement(H,{icon:"folder",size:"small"}),s.createElement(F,null,r.name," ",s.createElement(R,{emphasis:"low"},"(",g,", ",f," ",j("file",f),")")),p<100&&s.createElement(I,{percent:p}),s.createElement(N,{directory:r,onRemove:n?e=>{e.stopPropagation(),l()}:void 0,"data-testid":"remove-directory-icon"})),u)}var K=n(1882);function G(e){const t=s.useContext(m.a),{fileState:n,onRemove:i}=e;return"uploading"===n.type?s.createElement(s.Fragment,null,s.createElement(L.c,{disabled:t,onClick:i,"data-testid":"uploading-file-remove-icon"},s.createElement(b.a,{icon:"close"}))):"failed"===n.type?s.createElement(B.a,{isDisabled:t,onRemove:i}):"duplicate"===n.type?s.createElement(A,{isDisabled:t,onRemove:i}):s.createElement(q.a,{isDisabled:t,onRemove:i})}const W=o()(S)`
  &:hover {
    cursor: default;
  }
`,Z=o()(b.a)`
  margin-right: ${e=>e.theme.size.pad.s};
  width: 24px;
`;function Y(e){const[t,n]=s.useState(!1),{file:i,onRemove:r}=e,a=Object(K.d)(Object(K.c)(name)),o=s.createElement(Z,{icon:a});return s.createElement(W,{onHover:n},s.createElement($,null,o,s.createElement(F,null,i.name," ",s.createElement(R,{emphasis:"low"},"(",w(i.size),")")),"uploading"===i.state.type&&s.createElement(I,{percent:i.state.percentComplete}),s.createElement(G,{fileState:i.state,onRemove:t?r:void 0})),"duplicate"===i.state.type&&s.createElement(_,{error:{type:"file-duplication",entityName:i.state.duplication.name,href:i.state.duplication.url,entity:i.state.duplication.type}}))}const Q=o.a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,J=o()(O)`
  overflow-x: auto;
  overflow-y: hidden;
  margin: ${e=>e.theme.size.pad.l} ${e=>e.theme.size.pad.m};
  ::-webkit-scrollbar {
    height: ${e=>e.theme.material.spacing(1)};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${e=>e.theme.material.color.brand.grey[200]};
  }
`,X=o.a.div`
  padding: ${e=>e.theme.material.spacing(2)};
`;function ee(e){const t=s.useContext(m.a),{path:n,directory:i,onOpenFileDialog:r,onPathChange:a,onRemove:o,onRemoveDuplicates:l,onRemoveFailed:c}=e,{directories:d,files:u}=i;return s.createElement(s.Fragment,null,s.createElement(Q,null,s.createElement(J,{path:n,onPathChange:a}),s.createElement(X,null,s.createElement(g.a,{isDisabled:t,onClick:r}))),d.map(e=>{const t=[...n,e.name];return s.createElement(V,{key:t.join("/"),directory:e,onNavigate:()=>a(t),onRemove:()=>o({type:"uploadDirectory",parts:t}),onRemoveDuplicates:()=>l(t),onRemoveFailed:()=>c(t)})}),u.map(e=>{const t=[...n,e.name];return s.createElement(Y,{key:t.join("/"),file:e,onRemove:()=>o({type:"uploadFile",parts:t})})}))}const te=o.a.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.96;

  background-color: ${e=>e.theme.material.color.white};
  z-index: ${e=>e.theme.zindex.foreground};
`,ne=o.a.div`
  display: flex;
`,ie=o()(f.q)`
  margin-left: 16px;
`;function re(){return s.createElement(te,null,s.createElement(ne,null,s.createElement(b.a,{icon:"file_upload"}),s.createElement(ie,null,"Drop to upload file")))}const ae=o.a.div`
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  position: relative;
  overflow-y: auto;
`;function oe(e){const{getRootProps:t,getInputProps:n,isDragActive:i,children:r}=e;return s.createElement(ae,Object.assign({},t()),s.createElement("input",Object.assign({},n(),{"data-testid":"dropzone-input"})),i&&s.createElement(re,null),r)}var se=n(1666);const le=o.a.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`,ce=o.a.div`
  border: 1px solid ${e=>e.theme.material.color.brand.grey[200]};
  border-radius: ${e=>e.theme.material.borderRadius.large};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
`,de=o()(f.q)`
  margin-top: 16px;
`,ue=o()(f.c)`
  margin-top: 8px;
`,pe=o()(f.c)`
  margin-top: 16px;
  margin-bottom: 16px;
`;function me(e){const t=s.useContext(m.a),{onOpenFileDialog:n}=e;return s.createElement(le,null,s.createElement(ce,null,s.createElement(b.a,{icon:"upload_file"}),s.createElement(de,null,"Drag and drop files to upload"),s.createElement(ue,{emphasis:"low"},"Consider zipping large directories for faster uploads")),s.createElement(pe,{emphasis:"low"},"or"),s.createElement(se.a,{emphasis:"medium",disabled:t,onClick:n},"Browse Files"))}const he=o()(b.a)`
  margin-right: ${e=>e.theme.size.pad.s};
`;function ge(e){const t=s.useContext(m.a),{directory:n,className:i,onNavigate:r,onRemove:a}=e,o=w(Object(h.e)(n)),l=Object(h.d)(n);return s.createElement(S,{key:n.name,onClick:t?void 0:r,className:i},s.createElement($,null,s.createElement(he,{icon:"folder",size:"small"}),s.createElement(F,null,n.name," ",s.createElement(R,null,"(",o,", ",l," ",j("file",l),")")),s.createElement(L.c,{disabled:t,onClick:e=>{e.stopPropagation(),a()},"data-testid":"remove-directory-icon"},s.createElement(b.a,{icon:"close"}))))}const fe=o()(S)`
  &:hover {
    cursor: default;
  }
`,be=o()(b.a)`
  margin-right: ${e=>e.theme.size.pad.s};
`;function ye(e){const t=s.useContext(m.a),{file:n,onRemove:i}=e,r=Object(K.d)(Object(K.c)(name)),a=s.createElement(be,{icon:r});return s.createElement(fe,null,s.createElement($,null,a,s.createElement(F,null,n.name," ",s.createElement(R,null,"(",w(n.size),")")),s.createElement(L.c,{disabled:t,onClick:i,"data-testid":"remove-file-icon"},s.createElement(b.a,{icon:"close"}))))}const ve=o.a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Ce=o()(O)`
  overflow-x: auto;
  overflow-y: hidden;
  margin: ${e=>e.theme.size.pad.l} ${e=>e.theme.size.pad.m};
  ::-webkit-scrollbar {
    height: ${e=>e.theme.material.spacing(1)};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${e=>e.theme.material.color.brand.grey[200]};
  }
`,xe=o.a.div`
  padding: ${e=>e.theme.material.spacing(2)};
`;function Ee(e){const t=s.useContext(m.a),{path:n,directory:i,onOpenFileDialog:r,onPathChange:a,onRemove:o}=e,{directories:l,files:c}=i;return s.createElement(s.Fragment,null,s.createElement(ve,null,s.createElement(Ce,{path:n,onPathChange:a}),s.createElement(xe,null,s.createElement(g.a,{isDisabled:t,onClick:r}))),l.map(e=>{const t=[...n,e.name];return s.createElement(ge,{key:t.join("/"),directory:e,onNavigate:()=>a(t),onRemove:()=>o({type:"existingDirectory",parts:t})})}),c.map(e=>{const t=[...n,e.name];return s.createElement(ye,{key:t.join("/"),file:e,onRemove:()=>o({type:"existingFile",parts:t})})}))}var Oe=n(2141);const we=o.a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`,je=o.a.div`
  padding: 0 16px;
`,ke=o.a.div`
  padding: ${e=>e.theme.material.spacing(2)};
`,Se=o()(f.b)`
  font-style: italic;
  color: ${e=>e.theme.colors.text.medium};
  margin-left: ${e=>e.theme.size.pad.l};
`;function De(e){const t=s.useContext(m.a),{container:n,onOpenFileDialog:i,onPathChange:r,onRemove:a,onRemoveDuplicates:o,onRemoveFailed:l}=e,{directories:c,files:d,existingDirectories:u,existingFiles:p}=n,h=c.length>0||d.length>0,f=u.length>0||p.length>0;return s.createElement(s.Fragment,null,s.createElement(we,null,s.createElement(Oe.a,{"data-testid":"local-directories-header"},"Uploaded files"),s.createElement(ke,null,s.createElement(g.a,{isDisabled:t,onClick:i}))),h?s.createElement(s.Fragment,null,c.map(e=>s.createElement(V,{key:`dir-${e.name}`,directory:e,onNavigate:()=>r("uploadDirectory",[e.name]),onRemove:()=>{a({type:"uploadDirectory",parts:[e.name]})},onRemoveDuplicates:()=>o([e.name]),onRemoveFailed:()=>l([e.name])})),d.map(e=>s.createElement(Y,{key:`file-${e.name}`,file:e,onRemove:()=>a({type:"uploadFile",parts:[e.name]})}))):s.createElement(Se,null,"Use the file explorer or drag-and-drop to upload more files"),f&&s.createElement(s.Fragment,null,s.createElement(je,null,s.createElement(Oe.a,null,"Previously uploaded files")),u.map(e=>s.createElement(ge,{key:`dir-${e.name}`,directory:e,onNavigate:()=>r("existingDirectory",[e.name]),onRemove:()=>a({type:"existingDirectory",parts:[e.name]})})),p.map(e=>s.createElement(ye,{key:`file-${e.name}`,file:e,onRemove:()=>a({type:"existingFile",parts:[e.name]})}))))}n.d(t,"a",(function(){return $e}));const Ue=o.a.div`
  position: relative;
  flex-grow: 1;
`;function $e(e){const t=s.useContext(m.a),n=s.useContext(r.ClientsContext),{container:i,datasetId:a,competitionId:o,onUpdate:d}=e,[u,p]=s.useState({type:"root"}),[g,f]=s.useState([]),{directories:b,files:y,existingDirectories:v,existingFiles:C}=i,{getRootProps:x,getInputProps:E,open:O,isDragActive:w}=Object(l.b)({disabled:t,noClick:!0,noKeyboard:!0,onDrop:e=>{Fe({bothClients:n,datasetId:a,competitionId:o,onUpdate:d,droppedFiles:e,container:i,setConflictFiles:f,setPath:p})}});if(g.length>0)return s.createElement(Ue,null,s.createElement(c.a,{description:"One or more files in your selection have the same names as existing\n          files. Do you want to replace the existing files?",cancelText:"Cancel",confirmText:"Replace files",onAction:e=>{"cancel"===e?f([]):(Re({bothClients:n,datasetId:a,competitionId:o,temporaryFiles:g,setPath:p,onUpdate:d}),f([]))}}));if(0===b.length&&0===y.length&&0===v.length&&0===C.length)return s.createElement(oe,{isDragActive:w,getRootProps:x,getInputProps:E},s.createElement("input",Object.assign({},E())),s.createElement(me,{onOpenFileDialog:O}));const j=Object(h.c)(i,u);return"root"===u.type||void 0===j?s.createElement(oe,{isDragActive:w,getRootProps:x,getInputProps:E},s.createElement("input",Object.assign({},E())),g&&g.map(e=>e.file.name),s.createElement(De,{container:i,onPathChange:(e,t)=>p({type:e,parts:t}),onOpenFileDialog:O,onRemove:e=>d("uploadContainer","remove",{path:e}),onRemoveDuplicates:e=>{d("uploadContainer","removeDuplicates",{path:{type:"uploadDirectory",parts:e}})},onRemoveFailed:e=>{d("uploadContainer","removeFailed",{path:{type:"uploadDirectory",parts:e}})}})):s.createElement(oe,{isDragActive:w,getRootProps:x,getInputProps:E},s.createElement("input",Object.assign({},E())),"uploadDirectory"===j.type?s.createElement(ee,{path:u.parts,directory:j,onPathChange:e=>p({type:"uploadDirectory",parts:e}),onOpenFileDialog:O,onRemove:e=>d("uploadContainer","remove",{path:e}),onRemoveDuplicates:e=>{d("uploadContainer","removeDuplicates",{path:{type:"uploadDirectory",parts:e}})},onRemoveFailed:e=>{d("uploadContainer","removeFailed",{path:{type:"uploadDirectory",parts:e}})}}):s.createElement(Ee,{path:u.parts,directory:j,onPathChange:e=>p({type:"existingDirectory",parts:e}),onOpenFileDialog:O,onRemove:e=>d("uploadContainer","remove",{path:e})}))}const Fe=e=>{const{bothClients:t,droppedFiles:n,datasetId:i,competitionId:r,container:a,setPath:o,setConflictFiles:s,onUpdate:l}=e,c=n.filter(e=>Pe(e.path||e.name)).map(e=>{const t="string"==typeof e.path?e.path.split("/").filter(e=>e):[e.name];return{file:e,parts:t,hasNameConflict:Object(d.d)(a,t)}});c.some(e=>e.hasNameConflict)?s(c):Re({bothClients:t,datasetId:i,competitionId:r,temporaryFiles:c,setPath:o,onUpdate:l})},Re=e=>{const{bothClients:t,temporaryFiles:n,datasetId:i,competitionId:a,setPath:o,onUpdate:s}=e;n.map(e=>{const{parts:n,file:i}=e;return s("uploadContainer","remove",{path:{type:"existingFile",parts:n}}),s("uploadContainer","remove",{path:{type:"uploadFile",parts:n}}),s("uploadContainer","start",{path:n,size:i.size}),{uploadPromise:Object(u.c)(t.legacyClients.blobFilesClient.createNewBlob,r.LegacyClientBlobBucketName.DatasetVersionFilesV2,i),parts:n}}).forEach(e=>Ie({bothClients:t,datasetId:i,competitionId:a,onUpdate:s,fileUpload:e})),o({type:"root"})},Ie=e=>Object(i.__awaiter)(void 0,void 0,void 0,(function*(){const{datasetId:t,competitionId:n,bothClients:i,fileUpload:r,onUpdate:a}=e,{uploadPromise:o,parts:s}=r;o.onProgress=e=>{if(e.isDone&&e.hasFailed)return void a("uploadContainer","failed",{path:s});const{progressEvent:t}=e.progressProps;if(!t)return;const{loaded:n,total:i}=t;a("uploadContainer","progress",{path:s,percentComplete:100*n/i})};try{const e=yield o,{token:r}=e,{datasetsClient:l}=i.clients,c=yield l.detectDuplicate({blobFileToken:r,currentDatasetId:t||null,currentCompetitionId:n||null});if(null!==c){const{analyticsClient:t}=i.legacyClients;Object(p.b)(t,e.name,c),a("uploadContainer","duplicate",{path:s,token:r,duplication:c})}else a("uploadContainer","complete",{path:s,token:r})}catch(e){a("uploadContainer","failed",{path:s})}})),Te=["__MACOSX",".DS_Store","__pycache__"],Pe=e=>!Te.some(t=>e&&e.includes(t))},2285:function(e,t,n){"use strict";var i=n(3),r=n(2244),a=n(214),o=n(9),s=n(1),l=n.n(s),c=n(0),d=n(2352),u=n(2213),p=n(2141),m=n(2269),h=n(208),g=n(501),f=n(1882),b=n(2082),y=n(2299),v=n(2146),C=n(1717);l()(h.a)`
  color: ${e=>Object(v.d)(e.isDisabled,e.theme.colors.kaggle.blueDark,e.theme.colors.text.light)};
`;const x=e=>{const{isDisabled:t,onRemove:n,isHovered:i}=e;return i?c.createElement(v.c,{disabled:t,onClick:()=>n(),"data-testid":"pending-remove-icon"},c.createElement(h.a,{icon:"close"})):c.createElement(v.b,null,c.createElement(C.a,{progress:t?.8:void 0}))};var E=n(2300);const O=l.a.li`
  padding: 4px 16px;

  &:hover {
    background-color: ${e=>e.isDisabled?"transparent":e.theme.material.color.brand.grey[50]};
  }
`,w=l.a.div`
  display: flex;
  align-items: center;
  padding: 4px 4px 0 4px;
`,j=l()(h.a)`
  margin: 0 8px;
`,k=l()(a.b)`
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,S=l.a.input`
  padding: 0;
  padding-bottom: 1px;
  background-color: transparent;
  border: 1px solid transparent;
  font-size: ${e=>e.theme.material.typography.body2.fontSize};

  &:focus {
    outline: none;
  }

  &:hover {
    border: 1px solid ${e=>e.theme.material.color.brand.grey[50]};
    border-radius: ${e=>e.theme.material.borderRadius.normal};
  }
`,D=l()(a.b)`
  flex: 0 0 auto;
  margin: 0 8px;
`,U=l()(a.c)`
  padding: 0 32px 4px 40px;
`,$=l.a.a`
  text-decoration: none;
  color: ${e=>e.theme.material.color.anchor.base};
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &:hover {
    color: ${e=>e.theme.material.color.anchor.hover};
  }
`;class F extends c.Component{constructor(){super(...arguments),this.state={isHovered:!1},this.renderItemStatus=e=>{const{onRemove:t,isDisabled:n}=this.props,{isHovered:i}=this.state,{name:r}=e;if("remoteUrlVersionedFile"===e.type)return c.createElement(v.c,{disabled:n,onClick:()=>t(r)},c.createElement(h.a,{icon:"close"}));const{state:a}=e;return Object(b.p)(a)?c.createElement(E.a,{isDisabled:n,onRemove:i?()=>t(r):void 0}):Object(b.o)(a)?c.createElement(x,{isDisabled:n,isHovered:i,onRemove:()=>t(r)}):Object(b.n)(a)?c.createElement(y.a,{isDisabled:n,onRemove:i?()=>t(r):void 0}):void 0},this.onMouseOver=()=>{this.setState({isHovered:!0})},this.onMouseLeave=()=>{this.setState({isHovered:!1})}}render(){const{isDisabled:e,file:t,onRename:n}=this.props,{name:i,url:r}=t,a=Object(f.d)(Object(f.c)(i)),o="remoteUrlVersionedFile"===t.type?t.size:Object(b.p)(t.state)?t.state.size:void 0,s="remoteUrlUploadFile"===t.type&&Object(b.p)(t.state)&&!e;return c.createElement(O,{isDisabled:e,onMouseOver:e?void 0:this.onMouseOver,onMouseLeave:e?void 0:this.onMouseLeave},c.createElement(w,null,c.createElement(j,{icon:a,size:"inline"}),c.createElement(k,null,s?c.createElement(S,{value:i,placeholder:"Enter a file name",onChange:e=>n(i,e.currentTarget.value)}):i),void 0!==o&&o<=0?c.createElement(D,{emphasis:"low"},"unknown"):o&&c.createElement(D,{emphasis:"low"},"(",g(o),")"),this.renderItemStatus(t)),c.createElement(U,null,c.createElement($,{title:r,href:r,target:"_blank",rel:"noopener"},r," ",c.createElement(h.a,{icon:"open_in_new",size:"inline"}))))}}const R=l.a.div`
  width: 100%;
`,I=l.a.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;function T(e){const{isDisabled:t,showHelpMessage:n,files:i,onRemove:r,onRename:a}=e,o=i.map(e=>c.createElement(F,{isDisabled:t,key:e.url,file:e,onRemove:r,onRename:a}));return c.createElement(R,null,c.createElement(p.c,null,c.createElement(p.a,{"data-testid":"remote-files-header"},"Remote Files"),n&&c.createElement(p.b,{emphasis:"low"},"Create a dataset from remote URLs. URLs must point to a file.")),c.createElement(I,null,o))}const P=l.a.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;function z(e){const{isDisabled:t,files:n,onRemove:i,onRename:r}=e,a=n.map(e=>c.createElement(F,{key:e.name,isDisabled:t,file:e,onRemove:i,onRename:r}));return c.createElement(c.Fragment,null,c.createElement(p.c,null,c.createElement(p.a,null,"Previous remote files")),c.createElement(P,null,a))}n.d(t,"a",(function(){return B}));const _=l.a.div`
  overflow-y: auto;
  flex-grow: 1;
`,L=l()(r.a)`
  flex: 1 1 auto;
  height: unset;
  margin-right: 16px;
`,M=l.a.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`,A=l()(a.b)`
  color: ${e=>e.theme.material.color.status.error[700]};
  margin-right: 16px;
`;let B=(()=>{class e extends c.Component{constructor(){super(...arguments),this.state={urlToAdd:{value:"",isValid:!1,isDuplicate:!1}},this.shouldComponentUpdate=(e,t)=>{const{container:n}=this.props,{urlToAdd:i}=this.state;return i.value!==t.urlToAdd.value||i.isValid!==t.urlToAdd.isValid||i.isDuplicate!==t.urlToAdd.isDuplicate||Object(m.a)(n,e.container)},this.onRemove=e=>{const{onUpdate:t}=this.props;t("remoteUrlUploadContainer","remove",{name:e})},this.onRename=(e,t)=>{const{onUpdate:n}=this.props;n("remoteUrlUploadContainer","rename",{oldName:e,newName:t})},this.onUrlToAddChange=e=>{const{container:t}=this.props;this.setState({urlToAdd:{value:e,isValid:Object(d.d)(e),isDuplicate:t.children.some(t=>t.url===e)}})},this.onAddUrl=()=>Object(i.__awaiter)(this,void 0,void 0,(function*(){const{container:e,onUpdate:t}=this.props,{urlToAdd:n}=this.state,{value:i}=n;this.setState({urlToAdd:{value:"",isValid:!1,isDuplicate:!1}});const r=Object(d.e)(Object(d.c)(i,`file_${e.children.length+1}`),e);r&&(t("remoteUrlUploadContainer","add",{name:r,url:i}),yield this.onValidate(r,i))})),this.onValidate=(e,t)=>Object(i.__awaiter)(this,void 0,void 0,(function*(){const{onUpdate:n}=this.props,{datasetsClient:i}=this.context.clients;try{const r=yield i.getRemoteUrlFileInfo({url:t});n("remoteUrlUploadContainer","success",{name:e,size:r.size})}catch(t){n("remoteUrlUploadContainer","failed",{name:e})}})),this.canAddUrl=()=>{const{urlToAdd:e}=this.state,{isValid:t,isDuplicate:n}=e;return t&&!n}}render(){const{isDisabled:e,container:t}=this.props,{urlToAdd:n}=this.state,{children:i}=t,{value:r,isValid:a}=n,o=i.filter(e=>"remoteUrlVersionedFile"===e.type),s=i.filter(e=>"remoteUrlUploadFile"===e.type),l=!this.canAddUrl()&&r.length>0;return c.createElement(_,null,o.length>0&&c.createElement(z,{isDisabled:e,files:o,onRemove:this.onRemove,onRename:this.onRename}),c.createElement(T,{isDisabled:e,showHelpMessage:0===o.length,files:s,onRemove:this.onRemove,onRename:this.onRename}),!e&&c.createElement(p.c,null,c.createElement(M,null,c.createElement(L,{autoFocus:!0,label:"URL",value:r,status:l?"invalid":"normal",onChange:e=>this.onUrlToAddChange(e.currentTarget.value)}),l&&c.createElement(A,null,a?"URL already added":"Invalid URL"),c.createElement(u.b,{isDisabled:!this.canAddUrl(),onClick:this.onAddUrl}))))}}return e.contextType=o.ClientsContext,e})()},2286:function(e,t,n){"use strict";var i=n(1),r=n.n(i),a=n(0),o=n(2082),s=n(2213),l=n(2349),c=n(2269),d=n(208),u=n(1717),p=n(214),m=n(2146),h=n(3),g=n(2244),f=n(76),b=n(2263),y=n(9),v=n(212),C=n(1705),x=n(1740),E=n(1882);const O=r()(p.v.withComponent("a"))`
  text-decoration: none;
  color: ${e=>e.theme.material.color.text[100]};

  &:hover {
    color: ${e=>e.theme.material.color.anchor.hover};
  }
`,w=r()(d.a)`
  margin-left: ${e=>e.theme.size.margin.s};
`,j=r.a.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: -16px; /* HACK: Otherwise it gets some weird extra margin */
`,k=r.a.span`
  margin-right: 8px;
`,S=r()(d.a)`
  margin: 0 4px 0 0;
`;class D extends a.Component{constructor(){super(...arguments),this.state={isHovered:!1},this.renderFile=e=>{const t=Object(E.d)(Object(E.c)(e.name));return a.createElement(k,{key:e.id},a.createElement(S,{icon:t,size:"inline"}),e.name)},this.onClick=e=>{const{onSelect:t}=this.props;this.titleLinkRef&&this.titleLinkRef.contains(e.target)||t()},this.onMouseOver=()=>{this.setState({isHovered:!0})},this.onMouseLeave=()=>{this.setState({isHovered:!1})}}render(){const{isDisabled:e,kernel:t}=this.props,{isHovered:n}=this.state,{title:i,owner:r,url:o,outputFiles:s}=t;return a.createElement(C.a,{disabled:e,key:name,onClick:e?void 0:this.onClick,graphic:a.createElement(x.a,{displayName:r.name,thumbnailUrl:r.imageUrl,profileUrl:`/${r.slug}`,openLinkInNewWindow:!0,size:"xlarge",tier:null===r.userTier?void 0:r.userTier}),primaryText:a.createElement(O,{href:o,target:"_blank",ref:e=>this.titleLinkRef=e,onMouseOver:this.onMouseOver,onMouseLeave:this.onMouseLeave},i,n&&a.createElement(w,{icon:"open_in_new",size:"inline"})),secondaryText:a.createElement(j,null,s.map(e=>this.renderFile(e)))})}}const U=50,$=20,F="Public Notebooks",R="Your Work",I=r.a.div`
  overflow-y: auto;
  flex-grow: 1;
`,T=r.a.div`
  display: flex;
  align-items: center;
  padding: 16px;
`,P=r()(g.a)`
  flex: 1 1 auto;
  height: 34px;
  margin-right: 16px;

  && .mdc-text-field__input {
    height: 32px !important;
  }

  && .mdc-floating-label {
    top: 8px;
  }

  && .mdc-floating-label--float-above {
    display: none !important;
  }

  && .mdc-notched-outline--notched .mdc-notched-outline__notch {
    display: none !important;
  }
`,z=r.a.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  margin: 48px;
`,_=r.a.div`
  ${e=>e.theme.font.main.size.l};
  ${e=>e.theme.font.main.weight.light};
  color: ${e=>e.theme.colors.text.light};
  padding: ${e=>e.theme.size.pad.m};
  text-align: center;
`;let L=(()=>{class e extends a.Component{constructor(){super(...arguments),this.debouncedSearch=Object(v.debounce)(500,()=>this.onSearch()),this.state={hasMore:!1,isSearchingMore:!1},this.renderWaiting=()=>a.createElement(z,null,a.createElement(u.a,{size:"xlarge"})),this.renderList=e=>{const{isDisabled:t}=this.props;return a.createElement(f.a,{variant:"two-line"},e.map(e=>a.createElement(D,{isDisabled:t,kernel:e,onSelect:()=>this.onSelect(e),key:`kernel_${e.id}`})))},this.onSelect=e=>Object(h.__awaiter)(this,void 0,void 0,(function*(){const{onUpdate:t}=this.props;if(e.outputFiles.length<5)t("kernelOutputContainer","setKernel",{id:e.id});else{t("kernelOutputContainer","setLoadingFiles",{id:e.id});try{const{kernelsClient:n}=this.context.clients;t("kernelOutputContainer","setFiles",{files:(yield n.listKernelRunOutput({kernelRunId:e.lastKernelRunId,pageSize:U,pageToken:null})).items.map(A)})}catch(e){t("kernelOutputContainer","failed",void 0)}}})),this.onScroll=e=>{const{container:t}=this.props;if(!Object(o.j)(t.state))return;const n=e.currentTarget,i=n&&n.scrollTop||document.body.scrollTop,r=n&&n.scrollHeight||document.body.scrollHeight,a=n.clientHeight||window.innerHeight;Math.ceil(i+a)>=r-30&&this.onSearchMore()},this.onSearchMore=()=>Object(h.__awaiter)(this,void 0,void 0,(function*(){const{container:e,onUpdate:t}=this.props,{isSearchingMore:n,hasMore:i}=this.state;if(!Object(o.j)(e.state)||n||!i)return;const{state:r}=e,{query:a,searchType:s,kernels:l}=r,c=l&&l.length>0?l[l.length-1].id:void 0;try{this.setState({isSearchingMore:!0});const e=yield this.searchKernels(s,a,c),n=e.length===$;this.setState({isSearchingMore:!1,hasMore:n}),t("kernelOutputContainer","addToKernelList",{moreKernels:e})}catch(e){t("kernelOutputContainer","failed",void 0),this.setState({isSearchingMore:!1})}})),this.onQueryChange=e=>{const{onUpdate:t}=this.props;t("kernelOutputContainer","setQuery",{query:e}),this.debouncedSearch()},this.onSearchTypeChange=e=>{const{onUpdate:t}=this.props;t("kernelOutputContainer","setSearchType",{searchType:e?"yourWork":"public"}),this.debouncedSearch()},this.onSearch=()=>Object(h.__awaiter)(this,void 0,void 0,(function*(){const{container:e,onUpdate:t}=this.props;if(!Object(o.l)(e.state)&&!Object(o.j)(e.state))return;const{state:n}=e,{query:i,searchType:r}=n;t("kernelOutputContainer","setQuery",{query:i});try{const e=yield this.searchKernels(r,i,void 0),n=e.length===$;this.setState({isSearchingMore:!1,hasMore:n}),t("kernelOutputContainer","setKernelList",{kernels:e})}catch(e){t("kernelOutputContainer","failed",void 0)}}))}componentDidMount(){this.debouncedSearch()}render(){const{isDisabled:e,container:t}=this.props,{isSearchingMore:n}=this.state;if(!Object(o.l)(t.state)&&!Object(o.j)(t.state))return;const{state:i}=t,{query:r,searchType:s}=i;return a.createElement(I,{onScroll:e=>this.onScroll(e),"data-testid":"kernel-list-wrapper"},a.createElement(T,null,a.createElement(P,{disabled:e,label:"Search notebooks",value:r,onChange:e=>this.onQueryChange(e.currentTarget.value)}),a.createElement(b.a,{dense:!0,disabled:e,options:[F,R],onSelect:e=>this.onSearchTypeChange(e===R),value:"public"===s?F:R})),Object(o.l)(t.state)&&this.renderWaiting(),Object(o.j)(t.state)&&this.renderList(t.state.kernels),n&&a.createElement(_,null,"Loading more kernels..."))}searchKernels(e,t,n){return Object(h.__awaiter)(this,void 0,void 0,(function*(){const i={kernelFilterCriteria:{competitionId:null,datasetId:null,datasourceType:null,forkParentScriptId:null,kernelType:null,language:null,page:0,userId:null,tagIds:null,startRow:0,outputType:"Data",excludeResultsFilesOutputs:!0,wantOutputFiles:!0,sortBy:"public"===e?"hotness":"dateRun",pageSize:$,group:"public"===e?"everyone":"profile",search:t.length>0?t:"",after:n||null,hasGpuRun:null,privacy:"all"},detailFilterCriteria:null},r=yield this.context.clients.kernelsClient.listKernels(i);return M(r.kernels)}))}}return e.contextType=y.ClientsContext,e})();const M=e=>{return e.map(e=>{if(null===e.currentUrlSlug||null===e.author)return null;return{id:e.id,lastKernelRunId:e.scriptVersionId,url:e.scriptUrl,owner:{id:e.author.id,imageUrl:e.author.thumbnailUrl,slug:e.author.userName,isOrganization:!1,name:e.author.displayName,userTier:e.author.performanceTier},title:e.title,outputFiles:e.outputFiles.map(A)}}).filter(e=>!!e)},A=e=>{return{id:e.kernelVersionOutputFileId,name:e.name,size:e.contentLength,type:"kernelOutputFile"}};var B=n(501);const q=r.a.li`
  padding: 0 16px;

  &:hover {
    background-color: ${e=>e.isDisabled?"transparent":e.theme.material.color.brand.grey[50]};
  }
`,N=r.a.div`
  display: flex;
  align-items: center;
  padding: 4px;
`,H=r()(d.a)`
  margin-right: 8px;
  color: ${e=>e.theme.material.color.text[50]};
`,V=r()(p.b)`
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,K=r()(p.b)`
  white-space: nowrap;
  margin: 0 8px;
`;class G extends a.Component{constructor(){super(...arguments),this.state={isHovered:!1},this.onMouseOver=()=>{this.setState({isHovered:!0})},this.onMouseLeave=()=>{this.setState({isHovered:!1})}}render(){const{isDisabled:e,file:t}=this.props,{name:n,size:i}=t,r=Object(E.d)(Object(E.c)(n)),o=a.createElement(H,{icon:r});return a.createElement(q,{isDisabled:e,key:n,onMouseOver:e?void 0:this.onMouseOver,onMouseLeave:e?void 0:this.onMouseLeave},a.createElement(N,null,o,a.createElement(V,{emphasis:"high"},n),a.createElement(K,{emphasis:"low"},"(",B(i),")")))}}const W=r.a.div`
  overflow-y: auto;
  flex-grow: 1;
  height: 100%;
`,Z=r.a.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,Y=r()(m.a)`
  flex-grow: 1;
  flex-shrink: 1;
`,Q=r()(s.c)`
  margin: 0 ${e=>e.theme.size.margin.m};
`,J=r.a.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`,X=r.a.li`
  ${e=>e.theme.font.main.size.l};
  ${e=>e.theme.font.main.weight.light};
  padding: ${e=>e.theme.size.pad.m};
  background-color: ${e=>e.theme.material.color.brand.grey[100]};
  color: ${e=>e.theme.colors.text.light};
  margin-bottom: ${e=>e.theme.size.pad.s};
`,ee=r.a.div`
  ${e=>e.theme.font.main.size.l};
  ${e=>e.theme.font.main.weight.light};
  color: ${e=>e.theme.colors.text.light};
  padding: ${e=>e.theme.size.pad.m};
`,te=r.a.span`
  cursor: pointer;
  color: ${e=>e.theme.colors.kaggle.blueDark};
  :hover {
    color: ${e=>e.theme.colors.kaggle.blue};
  }
`,ne=r()(d.a)`
  margin-left: ${e=>e.theme.size.margin.s};
`,ie=r.a.a`
  color: ${e=>e.theme.colors.text.medium};
  ${e=>e.theme.font.main.weight.normal};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: ${e=>e.theme.colors.hover.link};
  }
`,re=100;class ae extends a.Component{constructor(){super(...arguments),this.renderLoading=()=>a.createElement(z,null,a.createElement(u.a,{size:"large"})),this.renderList=e=>{const{isDisabled:t,allowBackToSearch:n,onRemove:i,onBack:r}=this.props,o=e.length>re?e.slice(0,re):e,s=o.length<e.length;if(0===o.length)return a.createElement(ee,null,"Select at least one file in order to continue."," ",n&&a.createElement(a.Fragment,null,a.createElement(te,{onClick:r},"Search again")," to select a new Kernel output."));const l=o.map(e=>a.createElement(G,{isDisabled:t,key:e.name,file:e,onRemove:()=>i(e.id)}));return a.createElement(J,null,s&&a.createElement(X,null,a.createElement(p.b,{emphasis:"medium"},"This preview only shows the first ",re," files from the notebook output. The resulting dataset will contain all files.")),l)}}render(){const{isDisabled:e,kernel:t,allowBackToSearch:n,onBack:i}=this.props,{outputFiles:r,title:o,url:s}=t,l=void 0===r?this.renderLoading():this.renderList(r);return a.createElement(W,null,a.createElement(Z,null,a.createElement(Y,null,"Kernel:"," ",a.createElement(ie,{href:s,target:"_blank"},o,a.createElement(ne,{icon:"open_in_new",size:"inline"}))),n&&a.createElement(Q,{onClick:i,isDisabled:e})),l)}}n.d(t,"a",(function(){return ce}));const oe=r.a.div`
  width: 100%;
  position: relative;
`,se=r.a.div`
  margin-top: 48px;
`,le=r()(s.c)`
  position: absolute;
  top: ${e=>e.theme.size.margin.m};
  right: ${e=>e.theme.size.margin.m};
`;class ce extends a.Component{constructor(){super(...arguments),this.shouldComponentUpdate=e=>{const{container:t}=this.props;return Object(c.a)(t,e.container)}}render(){const{isDisabled:e,container:t,allowBackToSearch:n,onUpdate:i}=this.props;return Object(o.l)(t.state)||Object(o.j)(t.state)?a.createElement(L,{isDisabled:e,onUpdate:i,container:t}):Object(o.k)(t.state)||Object(o.i)(t.state)?a.createElement(oe,null,a.createElement(ae,{kernel:{title:t.state.kernel.title,url:t.state.kernel.url,outputFiles:Object(o.i)(t.state)?t.state.files:void 0},isDisabled:e,allowBackToSearch:n,onRemove:e=>i("kernelOutputContainer","removeFile",{id:e}),onBack:()=>i("kernelOutputContainer","reset",void 0)})):a.createElement(oe,null,a.createElement(se,null,a.createElement(l.a,{title:"Unable to load Kernels",description:"We ran into an issue retrieving the list of Kernels."})),n&&a.createElement(le,{onClick:()=>i("kernelOutputContainer","reset",void 0),isDisabled:e}))}}},2287:function(e,t,n){"use strict";var i=n(3),r=n(2244),a=n(214),o=n(9),s=n(1),l=n.n(s),c=n(0),d=n(212),u=n(2082),p=n(2301),m=n(2141),h=n(2269),g=n(2168);const f=l.a.div`
  margin: 16px 0;
`,b=l()(a.v)`
  margin-bottom: 8px;
`,y=l()(g.b)`
  width: ${e=>e.width};
`;function v(){return c.createElement(f,null,c.createElement(b,null,"Preview"),c.createElement(y,{width:"50%"}," "),c.createElement(y,{width:"20%"}," "),c.createElement(y,{width:"40%"}," "),c.createElement(y,{width:"30%"}," "),c.createElement(y,{width:"50%"}," "),c.createElement(y,{width:"20%"}," "),c.createElement(y,{width:"40%"}," "),c.createElement(y,{width:"30%"}," "))}var C=n(208),x=n(501),E=n(1882);const O=l.a.div`
  margin: 16px 0;
`,w=l()(a.v)`
  margin-bottom: 8px;
`,j=l.a.ul`
  padding: 0;
  margin-left: 16px;
  list-style-type: none;
`,k=l.a.li``,S=l.a.div`
  margin: ${e=>e.theme.size.margin.xs};
  display: flex;
  align-items: center;
`,D=l()(C.a)`
  margin-right: 4px;
  color: ${e=>e.theme.material.color.brand.grey[500]};
`,U=l()(a.b)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,$=l()(a.b)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 8px;
`;class F extends c.Component{constructor(){super(...arguments),this.renderItem=e=>Object(u.c)(e)?this.renderFile(e):this.renderFolder(e),this.renderFolder=e=>c.createElement(k,{key:`folder-${e.repositoryPath}`},c.createElement(S,null,c.createElement(D,{icon:"folder"}),c.createElement(U,null,e.name)),e.children.length>0&&c.createElement(j,null,e.children.map(e=>this.renderItem(e)))),this.renderFile=e=>{const t=Object(E.d)(Object(E.c)(e.name));return c.createElement(k,{key:`file-${e.repositoryPath}`},c.createElement(S,null,c.createElement(D,{icon:t}),c.createElement(U,null,e.name),c.createElement($,{emphasis:"low"},"(",x(e.size),")")))}}render(){const{content:e}=this.props;return c.createElement(O,null,c.createElement(w,null,"Preview"),c.createElement(j,null,e.map(e=>this.renderItem(e))))}}n.d(t,"a",(function(){return T}));const R=l()(r.a)`
  width: 100%;
  height: unset;
`,I=l()(a.b)`
  color: ${e=>e.theme.material.color.status.error[700]};
  margin: 16px 0;
`;let T=(()=>{class e extends c.Component{constructor(){super(...arguments),this.debouncedValidation=Object(d.debounce)(500,()=>this.onValidateGithub()),this.shouldComponentUpdate=e=>{const{container:t}=this.props;return Object(h.a)(t,e.container)},this.renderStatusMessage=(e,t)=>{if(this.hasUrlError(e,t))return c.createElement(I,null,"This does not seem to be a valid GitHub repository.")},this.getStatusIcon=(e,t)=>this.hasUrlError(e,t)?"priority_high":Object(u.f)(e)?"hourglass_empty":Object(u.g)(e)?"check":void 0,this.onUrlChange=e=>Object(i.__awaiter)(this,void 0,void 0,(function*(){const{onUpdate:t}=this.props;t("githubContainer","set",{url:e}),Object(p.c)(e)&&this.debouncedValidation()})),this.onValidateGithub=()=>Object(i.__awaiter)(this,void 0,void 0,(function*(){const{container:e,onUpdate:t}=this.props,{url:n}=e,i=Object(p.a)(n);if(i){const{datasetsClient:e}=this.context.clients;try{t("githubContainer","success",{content:(yield e.getGithubRepositoryInfo({ownerSlug:i.owner,repositorySlug:i.repository})).map(e=>P(e))})}catch(e){t("githubContainer","failed",void 0)}}})),this.hasUrlError=(e,t)=>Object(u.d)(e)&&0!==t.length}render(){const{container:e}=this.props,{url:t,state:n}=e,i=this.hasUrlError(n,t);return c.createElement(m.c,null,c.createElement(m.a,{"data-testid":"remote-github-header"},"Import GitHub repository"),c.createElement(m.b,{emphasis:"low"},"Create a dataset from a GitHub repository archive. Use the repo URL or any deep link."),c.createElement(R,{label:"GitHub URL",value:t,status:i?"invalid":"normal",onChange:e=>this.onUrlChange(e.currentTarget.value),trailingIcon:this.getStatusIcon(n,t)}),this.renderStatusMessage(n,t),Object(u.g)(n)&&c.createElement(F,{content:n.content}),Object(u.f)(n)&&c.createElement(v,null),Object(u.e)(n)&&c.createElement(I,null,"We ran into a problem retrieving the repository contents from GitHub. You can still go ahead and create your Dataset."))}}return e.contextType=o.ClientsContext,e})();const P=e=>{if("file"===e.type){const t=e;return{name:t.name,size:t.size,type:"githubFile",repositoryPath:t.repositoryPath}}{const t=e;return{name:t.name,type:"githubFolder",repositoryPath:t.repositoryPath,children:t.children.map(e=>P(e))}}}},2288:function(e,t,n){"use strict";var i=n(127),r=n(0),a=n(2130),o=n(2082),s=n(2354),l=n(2353),c=n(2301);const d=e=>t=>{const{id:n}=e,{container:i}=t;return Object(o.h)(i)&&Object(o.i)(i.state)?{container:Object.assign(Object.assign({},i),{state:Object.assign(Object.assign({},i.state),{files:i.state.files.filter(e=>"kernelOutputFile"===e.type&&e.id!==n)})})}:t},u=e=>t=>{const{id:n}=e,{container:i}=t;if(Object(o.h)(i)&&Object(o.j)(i.state)){const e=i.state.kernels.find(e=>e.id===n);if(e)return{container:Object.assign(Object.assign({},i),{state:{type:"listFiles",kernel:e,files:e.outputFiles}})}}return t},p=e=>t=>{const{id:n}=e,{container:i}=t;if(Object(o.h)(i)&&Object(o.j)(i.state)){const e=i.state.kernels.find(e=>e.id===n);if(e)return{container:Object.assign(Object.assign({},i),{state:{type:"loadingFiles",kernel:e}})}}return t},m=e=>t=>{const{files:n}=e,{container:i}=t;if(Object(o.h)(i)&&Object(o.k)(i.state)){const e=i.state.kernel;if(e)return{container:Object.assign(Object.assign({},i),{state:{type:"listFiles",kernel:e,files:n}})}}return t},h=e=>t=>{const{moreKernels:n}=e,{container:i}=t;return Object(o.h)(i)&&Object(o.j)(i.state)?{container:Object.assign(Object.assign({},i),{state:Object.assign(Object.assign({},i.state),{kernels:[...i.state.kernels,...n]})})}:t},g=e=>t=>{const{kernels:n}=e,{container:i}=t;return Object(o.h)(i)&&(Object(o.j)(i.state)||Object(o.l)(i.state))?{container:Object.assign(Object.assign({},i),{state:Object.assign(Object.assign({},i.state),{type:"listKernels",kernels:n})})}:t},f=e=>t=>{const{query:n}=e,{container:i}=t;return Object(o.h)(i)&&(Object(o.j)(i.state)||Object(o.l)(i.state))?{container:Object.assign(Object.assign({},i),{state:{type:"loadingKernels",searchType:i.state.searchType,query:n}})}:t},b=e=>t=>{const{searchType:n}=e,{container:i}=t;return Object(o.h)(i)&&(Object(o.j)(i.state)||Object(o.l)(i.state))?{container:Object.assign(Object.assign({},i),{state:{type:"loadingKernels",searchType:n,query:i.state.query}})}:t},y=()=>({container:{type:"kernelOutputContainer",state:{type:"failed"}}}),v=()=>({container:{type:"kernelOutputContainer",state:{type:"loadingKernels",query:"",searchType:"public"}}});var C=n(2350),x=n(2352);n.d(t,"a",(function(){return E}));class E extends r.Component{constructor(){super(...arguments),this.state={container:this.props.defaultContainer},this.onUpdate=(e,t,n)=>{switch(e){case"uploadContainer":return void this.onUploadContainerUpdate(t,n);case"remoteUrlUploadContainer":return void this.onRemoteUploadContainerUpdate(t,n);case"githubContainer":return void this.onGithubContainerUpdate(t,n);case"kernelOutputContainer":return void this.onKernelOutputContainerUpdate(t,n);case"gcsFileSetContainer":return void this.onGcsFileSetContainerUpdate(t,n)}},this.onUploadContainerUpdate=(e,t)=>{switch(e){case"start":return void this.setState(Object(C.j)(t));case"progress":return void this.setState(Object(C.e)(t));case"complete":return void this.setState(Object(C.a)(t));case"duplicate":return void this.setState(Object(C.b)(t));case"failed":return void this.setState(Object(C.c)(t));case"remove":return void this.setState(Object(C.h)(t));case"removeFailed":return void this.setState(Object(C.g)(t));case"removeDuplicates":return void this.setState(Object(C.f)(t));case"reset":return void this.setState(C.i)}},this.onRemoteUploadContainerUpdate=(e,t)=>{switch(e){case"add":return void this.setState(Object(x.a)(t));case"rename":return void this.setState(Object(x.g)(t));case"success":return void this.setState(Object(x.i)(t));case"failed":return void this.setState(Object(x.b)(t));case"remove":return void this.setState(Object(x.f)(t));case"reset":return void this.setState(x.h)}},this.onGithubContainerUpdate=(e,t)=>{switch(e){case"set":return void this.setState(Object(c.e)(t));case"failed":return void this.setState(c.b);case"success":return void this.setState(Object(c.f)(t));case"reset":return void this.setState(c.d)}},this.onKernelOutputContainerUpdate=(e,t)=>{switch(e){case"removeFile":return void this.setState(d(t));case"setKernel":return void this.setState(u(t));case"setLoadingFiles":return void this.setState(p(t));case"setFiles":return void this.setState(m(t));case"addToKernelList":return void this.setState(h(t));case"setKernelList":return void this.setState(g(t));case"setQuery":return void this.setState(f(t));case"setSearchType":return void this.setState(b(t));case"reset":return void this.setState(v);case"failed":return void this.setState(y)}},this.onGcsFileSetContainerUpdate=(e,t)=>{switch(e){case"set":return void this.setState(Object(l.c)(t));case"reset":return void this.setState(l.b)}},this.isContainerDirty=()=>{const{container:e}=this.state;if(Object(o.q)(e)){return Object(a.b)(e,()=>!0)>0}return Object(o.b)(e)?!!e.url:Object(o.m)(e)?e.children.length>0:Object(o.h)(e)?Object(o.i)(e.state):!!Object(o.a)(e)&&!!e.gcsUrl},this.isContainerClosable=()=>{const{container:e}=this.state;return Object(o.q)(e)?0===e.files.length&&0===e.directories.length:Object(o.m)(e)?!e.children.some(e=>"remoteUrlUploadFile"===e.type):!Object(o.h)(e)||!Object(o.i)(e.state)},this.isContainerUploadable=()=>{const{container:e}=this.state;if("uploadContainer"===e.type){const t=Object(a.b)(e,()=>!0),n=0===Object(a.b)(e,e=>"uploadFile"===e.type&&!Object(s.a)(e.state));return t>0&&n}if(Object(o.b)(e))return Object(o.g)(e.state)||Object(o.e)(e.state);if(Object(o.m)(e)){const{children:t}=e,n=t.length>0,i=t.every(e=>"remoteUrlVersionedFile"===e.type||Object(o.p)(e.state));return n&&i}return Object(o.h)(e)?Object(o.i)(e.state)&&e.state.files.length>0:!!Object(o.a)(e)&&Object(l.a)(e.gcsUrl)},this.doesContainerContainerDuplicates=()=>{const{container:e}=this.state;return"uploadContainer"===e.type&&Object(a.b)(e,e=>"uploadFile"===e.type&&"duplicate"===e.state.type)>0},this.doesContainerHaveErrors=()=>{const{container:e}=this.state;if("uploadContainer"===e.type)return Object(a.b)(e,e=>"uploadFile"===e.type&&"failed"===e.state.type)>0;if("remoteUrlUploadContainer"===e.type){const{children:t}=e;return t.some(e=>"remoteUrlUploadFile"===e.type&&"failed"===e.state.type)}return!1},this.inflightUploadMessage=()=>{const{container:e}=this.state;if("uploadContainer"===e.type){const t=Object(a.b)(e,e=>"uploadFile"===e.type);if(t>0){const n=this.getCompleteLocalUploadsCount(e),r=n===t;return{type:"loading",str:`Uploaded ${n} of ${t} ${i("files",t)}${r?".":"..."}`}}}},this.getCompleteLocalUploadsCount=e=>Object(a.b)(e,e=>"uploadFile"===e.type&&("duplicate"===e.state.type||"complete"===e.state.type))}render(){const{children:e}=this.props,{container:t}=this.state;return e({container:t,isContainerDirty:this.isContainerDirty(),isContainerClosable:this.isContainerClosable(),isContainerUploadable:this.isContainerUploadable(),doesContainerContainDuplicates:this.doesContainerContainerDuplicates(),doesContainerHaveErrors:this.doesContainerHaveErrors(),inflightUploadMessage:this.inflightUploadMessage(),onUpdate:this.onUpdate})}}},2291:function(e,t,n){"use strict";var i=n(1),r=n.n(i),a=n(0),o=n(208);const s=r.a.button`
  border: none;
  background: none;
  position: relative;
  margin-bottom: 16px;
  color: ${e=>(e=>{const{isSelected:t,disabled:n,isHovering:i,theme:r}=e;return t?r.material.color.brand.grey[900]:n?r.material.color.brand.grey[500]:i?r.material.color.brand.grey[900]:r.material.color.brand.grey[500]})(e)};
  cursor: ${e=>(e=>{const{disabled:t,isHovering:n}=e;return!t&&n?"pointer":"default"})(e)};
`;class l extends a.Component{constructor(){super(...arguments),this.state={isHovering:!1},this.onMouseEnter=()=>{this.setState({isHovering:!0})},this.onMouseLeave=()=>{this.setState({isHovering:!1})}}static getDerivedStateFromProps(e,t){const{isSelected:n,isDisabled:i}=e;return{isHovering:!n&&!i&&t.isHovering}}render(){const{icon:e,isDisabled:t,isSelected:n,onClick:i,className:r}=this.props,{isHovering:l}=this.state;return a.createElement(s,{disabled:n||t,isSelected:n,isHovering:l,className:r,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,onClick:i},a.createElement(o.a,{icon:e,size:"medium"}))}}n.d(t,"a",(function(){return m}));const c=r.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 40px;

  padding: 24px 16px 0 16px;
  border-right: 1px solid ${e=>e.theme.colors.content.border};
`,d=r()(l)``,u=r()(l)``,p=r.a.div`
  flex: 1 1 auto;
`;function m(e){const{tabs:t,selectedTab:n,onTabSelect:i}=e,r=t.filter(e=>!e.isEnd).map(({icon:e,key:t,isDisabled:r,isEnd:o})=>{const s={icon:e,isEnd:o,isDisabled:r,isSelected:t===n,onClick:()=>i(t)};return a.createElement(d,Object.assign({key:t},s))}),o=t.filter(e=>!0===e.isEnd).map(({icon:e,key:t,isDisabled:r,isEnd:o})=>{const s={icon:e,isEnd:o,isDisabled:r,isSelected:t===n,onClick:()=>i(t)};return a.createElement(u,Object.assign({key:t},s))});return a.createElement(c,null,r,a.createElement(p,null)," ",o)}},2292:function(e,t,n){"use strict";var i=n(214),r=n(208),a=n(1686),o=n(1685),s=n(510),l=n(2177),c=n(1666),d=n(1),u=n.n(d),p=n(0),m=n(499);const h=u()(c.a)`
  margin-right: 8px;
`,g=e=>{const{isPrivate:t,privateText:n,publicText:i,tipText:r,onPrivacyChange:a}=e,o=n||"Private",s=i||"Public",l=p.createElement(h,{emphasis:"low",leadingIcon:t?"lock":"lock_open",onClick:a?()=>a(!t):void 0},t?o:s);return r?p.createElement(m.Tooltip,{tip:r},l):l};n.d(t,"a",(function(){return C}));const f=u.a.div`
  flex-shrink: 0;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-top: 1px solid ${e=>e.theme.colors.content.borderLight};
  padding: ${e=>e.theme.size.pad.m};
`,b=u()(i.b)`
  flex: 1 1 auto;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${e=>e.theme.material.color.status.error[700]};
`,y=u()(i.b)`
  flex: 1 1 auto;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,v=u.a.div`
  display: flex;
  align-items: center;
`;u()(r.a)`
  color: ${e=>e.theme.colors.pure.white};
  margin-right: ${e=>e.theme.material.spacing(1)} !important;
`;function C(e){const{canCreate:t,isPrivate:n,isLoading:i,statusMessage:r,createText:d,duplicateText:u,privacyTip:m,privateText:h,publicText:C,onCreate:E,onPrivacyChange:O}=e,[w,j]=p.useState(!1),k=i?"Please wait...":d,S=u?[{key:"create",content:"Create without duplicates"},{key:"create-duplicate",content:u}]:[],D=!t||i;return p.createElement(f,null,!!r&&"error"===r.type&&p.createElement(b,null,r.str),!!r&&"loading"===r.type&&p.createElement(y,{emphasis:"low"},r.str),p.createElement(v,null,p.createElement(g,{isPrivate:n,tipText:m,privateText:h,publicText:C,onPrivacyChange:O}),S.length>0&&!D?p.createElement(a.a,null,p.createElement(o.a,{dense:!0,open:w,onClose:()=>j(!1),onSelect:e=>x(E)(S[e.detail.index].key),style:{bottom:0,top:"unset"}},S.map(e=>p.createElement(s.a,null,e.content))),p.createElement(l.a,null,p.createElement(l.b,{emphasis:"high",disabled:D,onClick:()=>x(E)("create")},k),p.createElement(l.c,{emphasis:"high",disabled:D,onClick:()=>j(!0)},"🞃"," "))):p.createElement(c.a,{emphasis:"high",disabled:!t||i,onClick:()=>x(E)("create")},k)))}const x=e=>t=>e(t)},2299:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(3);var i=n(208),r=n(1),a=n.n(r),o=n(0),s=n(2146);const l=a()(({isDisabled:e,...t})=>o.createElement(i.a,Object.assign({},t)))`
  color: ${e=>Object(s.d)(e.isDisabled,e.theme.colors.kaggle.red,e.theme.colors.text.light)};
`,c=e=>{const{isDisabled:t,onRemove:n}=e;return n?o.createElement(s.c,{disabled:t,onClick:n,"data-testid":"error-remove-icon"},o.createElement(i.a,{icon:"close"})):o.createElement(s.b,{"data-testid":"error-icon"},o.createElement(l,{isDisabled:t,icon:"warning"}))}},2300:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(3);var i=n(208),r=n(1),a=n.n(r),o=n(0),s=n(2146);const l=a()(({isDisabled:e,...t})=>o.createElement(i.a,Object.assign({},t)))`
  color: ${e=>Object(s.d)(e.isDisabled,e.theme.colors.kaggle.green,e.theme.colors.text.light)};
`,c=e=>{const{isDisabled:t,onRemove:n}=e;return n?o.createElement(s.c,{disabled:t,onClick:n,"data-testid":"success-remove-icon"},o.createElement(i.a,{icon:"close"})):o.createElement(s.b,{"data-testid":"success-icon"},o.createElement(l,{isDisabled:t,icon:"check"}))}},2301:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"f",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return c}));var i=n(2082);const r=()=>({container:{type:"githubContainer",url:"",state:{type:"invalid"}}}),a=e=>{const{url:t}=e;return c(t)?{container:{type:"githubContainer",url:t,state:{type:"pending"}}}:{container:{type:"githubContainer",url:t,state:{type:"invalid"}}}},o=e=>{const{container:t}=e;return Object(i.b)(t)?{container:Object.assign(Object.assign({},t),{state:{type:"failed"}})}:e},s=e=>t=>{const{content:n}=e,{container:r}=t;return Object(i.b)(r)?{container:Object.assign(Object.assign({},r),{state:{type:"success",content:n}})}:t},l=e=>{if(!c(e))return;const t=d(e).replace("https://github.com/","").split("/");return{owner:t[0],repository:t[1]}},c=e=>{const t=d(e);return!!t.startsWith("https://github.com/")&&!(t.replace("https://github.com/","").split("/").length<2)},d=e=>{if(0===e.length)return"";const t=e.trim().toLowerCase();return(t.startsWith("http://")?t.replace("http://","https://"):t.startsWith("https://")?t:"https://"+t).replace("www.github.com","github.com")}},2344:function(e,t,n){"use strict";var i=n(214),r=n(208),a=n(1740),o=n(2348),s=n(2156),l=n(2153),c=n(1),d=n.n(c),u=n(501),p=n(0),m=n(2141),h=n(1686),g=n(1685),f=n(510);const b=d.a.div`
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  border: 1px solid ${e=>e.theme.material.color.brand.grey[100]};
  border-radius: ${e=>e.theme.material.borderRadius.normal};
  cursor: pointer;

  &:focus {
    outline: none;
  }
`,y=d.a.div`
  display: flex;
  align-items: center;
`,v=d.a.div`
  flex: 0;
  margin-left: 8px;
`,C=d()(r.a)`
  flex: 0;
  margin: 0 8px;
`,x=d()(i.b)`
  flex: 1;
  margin-left: 8px;
`,E=e=>{const{items:t,selectedItem:n,disabled:i,onSelect:r}=e,[a,o]=p.useState(!1);return p.createElement(h.a,null,p.createElement(g.a,{open:a,anchorCorner:"bottomLeft",hoistToBody:!0,onClose:()=>o(!1),style:{zIndex:1001}},t.map(e=>p.createElement(f.a,{key:e.key,onClick:()=>r(e)},p.createElement(y,null,e.icon&&p.createElement(v,null,e.icon),p.createElement(x,null,e.label))))),p.createElement(b,{onClick:()=>!i&&o(!0)},n&&n.icon&&p.createElement(v,null,n.icon),p.createElement(x,null,n&&n.label),p.createElement(C,{icon:"arrow_drop_down",size:"small"})))};n.d(t,"a",(function(){return j}));const O=d()(i.e)`
  display: block;
  margin: 16px 0;
`,w=d()(i.c)`
  margin-top: 8px;
`,j=e=>{const{allowedOwners:t,isDisabled:n,isPrivate:i,licenseGroups:c,licenseId:d,limits:h,owner:g,onLicenseIdChange:f,onOwnerChange:b,onPrivacyChange:y}=e;return p.createElement(m.c,null,p.createElement(m.a,{"data-testid":"remote-gcsfileset-header"},"Dataset Settings"),p.createElement(s.a,null,p.createElement(l.a,{desktop:6,phone:12},(()=>{const e=[{key:"private",label:"Private",icon:p.createElement(r.a,{icon:"lock"})},{key:"public",label:"Public",icon:p.createElement(r.a,{icon:"lock_open"})}],t=i?e[0]:e[1];return p.createElement(p.Fragment,null,p.createElement(O,{emphasis:"low"},"Visibility"),p.createElement(E,{items:e,selectedItem:t,disabled:n,onSelect:e=>y("private"===e.key)}))})()),p.createElement(l.a,{desktop:6,phone:12},(()=>{const{usedBytes:e,totalBytes:t}=h,n=e<t&&0!==t?e/t:1;return p.createElement(p.Fragment,null,p.createElement(O,{emphasis:"low"},i?"Private Quota":"Public Quota"),p.createElement(o.a,{closed:!1,progress:n}),p.createElement(w,{emphasis:"low"},u(e)," / ",u(t)))})()),p.createElement(l.a,{desktop:6,phone:12},(()=>{const e=t.map(e=>{const t=p.createElement(a.a,{thumbnailUrl:e.imageUrl,tier:e.userTier||void 0});return{key:e.id,label:e.name,icon:t}}),i=e.find(e=>e.key===g.id);return p.createElement(p.Fragment,null,p.createElement(O,{emphasis:"low"},"Owner"),p.createElement(E,{items:e,selectedItem:i,disabled:n,onSelect:e=>{const n=t.find(t=>e.key===t.id);n&&b(n)}}))})()),!i&&p.createElement(l.a,{desktop:6,phone:12},(()=>{const e=c.map(e=>e.licenses).reduce((e,t)=>e.concat(t),[]).map(e=>({key:e.id,label:e.name})),t=e.find(e=>e.key===d);return p.createElement(p.Fragment,null,p.createElement(O,{emphasis:"low"},"License"),p.createElement(E,{items:e,selectedItem:t,disabled:n,onSelect:e=>f(e.key)}))})())))}},2348:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(1824),r=n(0);n(1744);const a=e=>{const{progress:t}=e,n=!e.hasOwnProperty("closed")||e.closed;return r.createElement(i.a,{closed:!!n,progress:t})}},2349:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var i=n(214),r=n(1),a=n.n(r),o=n(0);const s=a.a.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
`,l=a()(i.q)`
  margin-bottom: 8px;
`,c=a()(i.b)`
  max-width: 400px;
  text-align: center;
`;function d(e){const{title:t,description:n}=e;return o.createElement(s,null,o.createElement(l,{"data-testid":"error-screen-header"},t),o.createElement(c,null,n))}},2350:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"j",(function(){return s})),n.d(t,"e",(function(){return l})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return u})),n.d(t,"h",(function(){return m})),n.d(t,"g",(function(){return h})),n.d(t,"f",(function(){return g})),n.d(t,"i",(function(){return f}));var i=n(1745),r=n(2130);const a=(e,t)=>{const n=t[t.length-1],i=t.slice(0,t.length-1).reduce((e,t)=>{if(void 0===e)return;return e.directories.find(e=>e.name===t)},e);return i?i.files.find(e=>e.name===n):void 0},o=(e,t)=>{const n=t[t.length-1],i=t.slice(0,t.length-1).reduce((e,t)=>{if(void 0!==e){if("uploadContainer"===e.type){const n=e.directories.find(e=>e.name===t);return n||e.existingDirectories.find(e=>e.name===t)}return"uploadDirectory"===e.type?e.directories.find(e=>e.name===t):"existingDirectory"===e.type?e.directories.find(e=>e.name===t):void 0}},e);if(i&&"uploadContainer"===i.type){const e=i.files.find(e=>e.name===n);return e||i.existingFiles.find(e=>e.name===n)}return i&&"existingDirectory"===i.type?i.files.find(e=>e.name===n):i&&"uploadDirectory"===i.type?i.files.find(e=>e.name===n):void 0},s=e=>t=>{const{path:n,size:r}=e,{container:a}=t;if(0===n.length)return t;if("uploadContainer"===a.type){const e=n.slice(0,n.length-1),t=n[n.length-1];return{container:Object(i.a)(a,n=>{const i=e.reduce((e,t)=>{const n=e.directories.find(e=>e.name===t);if(n)return n;const i={type:"uploadDirectory",name:t,files:[],directories:[]};return e.directories.push(i),i},n),a={type:"uploadFile",name:t,size:r,state:{type:"uploading",percentComplete:0}};i.files.push(a)})}}return t},l=e=>t=>{const{container:n}=t,{percentComplete:r,path:o}=e;if("uploadContainer"===n.type){return{container:Object(i.a)(n,e=>{const t=a(e,o);t&&"uploading"===t.state.type&&(t.state.percentComplete=r)})}}return t},c=e=>t=>{const{container:n}=t,{token:r,path:o}=e;if("uploadContainer"===n.type){return{container:Object(i.a)(n,e=>{const t=a(e,o);t&&"uploading"===t.state.type&&(t.state={type:"complete",token:r})})}}return t},d=e=>t=>{const{container:n}=t,{path:r,duplication:o,token:s}=e;if("uploadContainer"===n.type){return{container:Object(i.a)(n,e=>{const t=a(e,r);t&&"uploading"===t.state.type&&(t.state={type:"duplicate",token:s,duplication:o})})}}return t},u=e=>t=>{const{container:n}=t,{path:r}=e;if("uploadContainer"===n.type){return{container:Object(i.a)(n,e=>{const t=a(e,r);t&&"uploading"===t.state.type&&(t.state={type:"failed"})})}}return t},p=(e,t)=>{let n,i=e;for(let a=t.length-1;a>=0;a--){const o=t[a];if(!(0===Object(r.a)(o,()=>!0)))break;i=0===a?e:t[a-1],n=o}void 0!==n&&("uploadContainer"===i.type&&"existingDirectory"===n.type?i.existingDirectories=i.existingDirectories.filter(e=>e!==n):i.directories=i.directories.filter(e=>e!==n))},m=e=>t=>{const{container:n}=t,{path:a}=e;if("uploadContainer"===n.type&&"root"!==a.type){const{parts:e}=a,t=e.slice(0,e.length-1),o=e[e.length-1];return{container:Object(i.a)(n,e=>{if("uploadDirectory"===a.type||"uploadFile"===a.type){const n=Object(r.g)(e,t),i=Array.isArray(n)?0===n.length?e:n[n.length-1]:void 0;i&&"uploadDirectory"===a.type?i.directories=i.directories.filter(e=>e.name!==o):i&&"uploadFile"===a.type&&(i.files=i.files.filter(e=>e.name!==o)),n&&p(e,n)}else{const n=Object(r.f)(e,t),i=Array.isArray(n)?0===n.length?e:n[n.length-1]:void 0;i&&"existingDirectory"===i.type?"existingDirectory"===a.type?i.directories=i.directories.filter(e=>e.name!==o):"existingFile"===a.type&&(i.files=i.files.filter(e=>e.name!==o)):i&&"uploadContainer"===i.type&&("existingDirectory"===a.type?i.existingDirectories=i.existingDirectories.filter(e=>e.name!==o):"existingFile"===a.type&&(i.existingFiles=i.existingFiles.filter(e=>e.name!==o))),n&&p(e,n)}})}}return t},h=e=>t=>{const{container:n}=t,{path:a}=e;if("uploadContainer"===n.type&&"uploadDirectory"===a.type){const{parts:e}=a;return{container:Object(i.a)(n,t=>{const n=Object(r.g)(t,e),i=Array.isArray(n)?0===n.length?t:n[n.length-1]:void 0;i&&"uploadDirectory"===i.type&&Object(r.j)(i,e=>{"uploadDirectory"===e.type&&(e.files=e.files.filter(e=>"failed"!==e.state.type))}),n&&p(t,n)})}}return t},g=e=>t=>{const{container:n}=t,{path:a}=e;if("uploadContainer"===n.type&&"uploadDirectory"===a.type){const{parts:e}=a;return{container:Object(i.a)(n,t=>{const n=Object(r.g)(t,e),i=Array.isArray(n)?0===n.length?t:n[n.length-1]:void 0;i&&"uploadDirectory"===i.type&&Object(r.j)(i,e=>{"uploadDirectory"===e.type&&(e.files=e.files.filter(e=>"duplicate"!==e.state.type))}),n&&p(t,n)})}}return t},f=()=>({container:{type:"uploadContainer",files:[],directories:[],existingDirectories:[],existingFiles:[]}})},2351:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return d}));var i=n(3);class r{constructor(e){this.description="Not started",this.isUploading=!1,this.isPaused=!1,this.hasSucceeded=!1,this.hasFailed=!1,e&&Object.assign(this,e)}get hasStarted(){return!!this.uploadProgressEvent}get totalBytesLoaded(){return(this.uploadProgressEvent&&this.uploadProgressEvent.loaded||0)+(this.previousBytesReceived||0)}get isDone(){return this.hasSucceeded||this.hasFailed}get progressProps(){return{initiatedTimeStamp:this.initialProgressEventTimeStamp,initialOffsetAmount:this.previousBytesReceived,progressEvent:this.uploadProgressEvent}}}class a{constructor(){this.cancellationCallbacks=[],this._isCancellationRequested=!1}register(e){return this.isCancellationRequested&&e(),this.cancellationCallbacks.push(e),()=>{this.cancellationCallbacks=this.cancellationCallbacks.filter(t=>t!==e)}}get isCancellationRequested(){return this._isCancellationRequested}cancel(){if(!this.isCancellationRequested){this._isCancellationRequested=!0;for(const e of this.cancellationCallbacks)e&&e()}}}class o{constructor(){this.internalResolve=()=>{},this.internalPromise=Promise.resolve(),this.reset()}set(){this.internalResolve&&this.internalResolve()}wait(){return this.internalPromise}reset(){this.internalPromise=new Promise(e=>{this.internalResolve=e})}}class s{constructor(){this.isPaused=!1,this.resumeEvent=null,this.currentCancellationToken=new a}pause(){this.isPaused||(this.isPaused=!0,this.resumeEvent=new o,this.currentCancellationToken.cancel())}waitUntilResumed(){return Object(i.__awaiter)(this,void 0,void 0,(function*(){this.isPaused&&null!==this.resumeEvent&&(yield this.resumeEvent.wait())}))}resume(){this.isPaused&&null!==this.resumeEvent&&(this.isPaused=!1,this.currentCancellationToken=new a,this.resumeEvent.set(),this.resumeEvent=null)}}const l=e=>Object(i.__awaiter)(void 0,void 0,void 0,(function*(){return new Promise(t=>setTimeout(t,e))}));function c(t,n,a,o,s,l){return(o?function(t,n,a){return Object(i.__awaiter)(this,void 0,void 0,(function*(){a(new r({description:"Checking server for existing upload"}));const i=yield e(t,{method:"PUT",headers:{"Content-Range":`bytes */${n.size}`}});if(i.status>=200&&i.status<300)return{bytesReceived:n.size,completeBlob:yield i.json()};const o=i.headers.get("Range");if(o){const e=o.match(/bytes\s*=\s*([0-9]+)-([0-9]+)/);if(!e)throw new Error(`Unable to parse Range header: ${o}`);const t=parseInt(e[1],10);if(0!==t)throw new Error(`Unexpect Range start offset: ${t}`);const i=parseInt(e[2],10);if(i>=n.size)throw new Error(`Range end is larger than expected: ${i}`);return{bytesReceived:i+1}}return{bytesReceived:0}}))}(t,n,s):Promise.resolve({bytesReceived:0})).then(e=>new Promise((i,o)=>{if(e.bytesReceived===n.size&&n.size>0)return void i(e.completeBlob);const c=new r({previousBytesReceived:e.bytesReceived?e.bytesReceived:0}),d=new XMLHttpRequest;d.open("PUT",t),d.upload.onprogress=e=>{c.description="Uploading file",c.isUploading=!0,c.isPaused=!1,c.initialProgressEventTimeStamp||(c.initialProgressEventTimeStamp=e.timeStamp),c.uploadProgressEvent=e,s(c)},d.onerror=()=>{c.isUploading=!1,l&&l.isCancellationRequested||o(d.statusText)},d.onload=()=>{if(c.isUploading=!1,d.status>=200&&d.status<300){c.isUploading=!1,c.isPaused=!1,s(c);const e=JSON.parse(d.responseText);i(e)}else c.description="Upload was interrupted",s(c),o(d.statusText)},l&&l.register(()=>{d.abort(),c.description="Upload was paused",c.isUploading=!1,c.isPaused=!1,s(c),o("Upload was cancelled")}),e.bytesReceived>0?(d.setRequestHeader("Content-Range",`bytes ${e.bytesReceived}-${n.size-1}/${n.size}`),d.send(n.slice(e.bytesReceived,n.size,a))):d.send(n)}))}function d(e,t,n,a){return function(e,t,n,a,o,d,u){const p=()=>Object(i.__awaiter)(this,void 0,void 0,(function*(){const i={name:a,contentLength:n.size,contentType:o,lastModifiedDate:d};return e({blobBucket:t},i)})),m=new s,h={progress:new r,onProgress:u},g=(e=>Object(i.__awaiter)(this,void 0,void 0,(function*(){e(new r({description:"Initializing upload"}));const t=yield p();let i=2;for(let s=0;s<5e3;s++)try{const i=0!==s,l=yield c(t.createUrl,n,o,i,e,m.currentCancellationToken);let d=null;if(l.md5Hash){d="";const e=atob(l.md5Hash);for(let t=0;t<e.length;t++)d+=e.charCodeAt(t).toString(16)}const u={token:t.token,md5Hash:d,name:a,size:n.size};return e(new r({description:"Upload complete",uploadedBlobInfo:u,hasSucceeded:!0})),u}catch(t){if(m.isPaused){yield m.waitUntilResumed();continue}s>1&&(e(new r({description:"Error while uploading",isPaused:!0,nextRetryDate:new Date(Date.now()+1e3*i),totalRetries:s})),yield l(1e3*i),i=Math.min(2*i,30))}throw e(new r({description:"Upload failed, even after 5000 attempts",isUploading:!1})),new Error("Upload failed, even after 5000 attempts")})))((function(e){h.progress=e,h.onProgress&&h.onProgress(e)}));return Object.defineProperties(g,{pause:{value:()=>(m.pause(),()=>(m.resume(),g)),configurable:!1,writable:!1,enumerable:!0},progress:{get:()=>h.progress,configurable:!1,enumerable:!0},onProgress:{get:()=>h.onProgress,set:e=>h.onProgress=e,configurable:!1,enumerable:!0}})}(e,t,n,n.name,n.type,new Date(n.lastModified),a)}}).call(this,n(113))},2352:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"g",(function(){return a})),n.d(t,"i",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"f",(function(){return l})),n.d(t,"h",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return h}));var i=n(2082);const r=e=>t=>{const{name:n,url:r}=e,{container:a}=t;if(Object(i.m)(a)&&n.length>0){const e={type:"remoteUrlUploadFile",name:n,url:r,state:{type:"pending"}};return{container:Object.assign(Object.assign({},a),{children:[...a.children,e]})}}return t},a=e=>t=>{const{oldName:n,newName:r}=e,{container:a}=t;if(Object(i.m)(a)){const e=u(r,a),{children:t}=a,{index:o,remoteFile:s}=d(t,n);if(s&&Object(i.p)(s.state))return{container:Object.assign(Object.assign({},a),{children:[...t.slice(0,o),Object.assign(Object.assign({},s),{name:e}),...t.slice(o+1)]})}}return t},o=e=>t=>{const{name:n,size:r}=e,{container:a}=t;if(Object(i.m)(a)){const{children:e}=a,{index:t,remoteFile:o}=d(e,n);if(o&&Object(i.o)(o.state))return{container:Object.assign(Object.assign({},a),{children:[...e.slice(0,t),Object.assign(Object.assign({},o),{state:{type:"success",size:r}}),...e.slice(t+1)]})}}return t},s=e=>t=>{const{name:n}=e,{container:r}=t;if(Object(i.m)(r)){const{children:e}=r,{index:t,remoteFile:a}=d(e,n);if(a&&Object(i.o)(a.state))return{container:Object.assign(Object.assign({},r),{children:[...e.slice(0,t),Object.assign(Object.assign({},a),{state:{type:"failed"}}),...e.slice(t+1)]})}}return t},l=e=>t=>{const{container:n}=t;return Object(i.m)(n)?{container:Object.assign(Object.assign({},n),{children:n.children.filter(t=>t.name!==e.name)})}:t},c=()=>({container:{type:"remoteUrlUploadContainer",children:[]}}),d=(e,t)=>{const n=e.findIndex(e=>"remoteUrlUploadFile"===e.type&&e.name===t);return{index:n,remoteFile:e[n]}},u=(e,t)=>{if(!t.children.some(t=>t.name===e))return e;for(let n=1;n<100;n++){const i=p(e,n);if(!t.children.some(e=>e.name===i))return i}return""},p=(e,t)=>{const n=e.split(".");if(n.length>1){return`${n.slice(0,n.length-1).join(".")}_${t}.${n[n.length-1]}`}return`${e}_${t}`},m=e=>{try{return void 0!==new URL(e)}catch(e){return!1}},h=(e,t)=>{try{const n=new URL(e),i=n.pathname.endsWith("/")?n.pathname.substr(0,n.pathname.length-1).split("/"):n.pathname.split("/");return i.length>0&&i[i.length-1].length>0?i[i.length-1]:t}catch(e){return t}}},2353:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));const i=()=>({container:{type:"gcsFileSetContainer",gcsUrl:""}}),r=e=>{const{gcsUrl:t}=e;return{container:{type:"gcsFileSetContainer",gcsUrl:t}}},a=e=>{if(!e)return!1;if(!e.startsWith("gs://"))return!1;return!!e.replace("gs://","")}},2354:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));const i=e=>"complete"===e.type||"duplicate"===e.type}}]);