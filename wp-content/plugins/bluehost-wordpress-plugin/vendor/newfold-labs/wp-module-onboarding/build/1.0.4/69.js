"use strict";(self.webpackChunknewfold_Onboarding=self.webpackChunknewfold_Onboarding||[]).push([[69],{1211:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(9307),r=n(6974),o=n(9818),s=n(9685),l=e=>{let{text:t,handleClick:n,disabled:r,className:o}=e;return(0,a.createElement)("button",{type:"button",className:`${o} nfd-card-button`,onClick:()=>{n()},disabled:r},t)},i=n(7533),c=n(2200),u=e=>{let{text:t,disabled:n}=e;const u=(0,r.s0)(),d=(0,r.TH)(),{nextStep:m,currentData:p}=(0,o.useSelect)((e=>({nextStep:e(s.h).getNextStep(),currentData:e(s.h).getCurrentOnboardingData()})),[d.path]),g=null===m||!1===m;return(0,a.createElement)(l,{className:"nfd-nav-card-button",text:t,handleClick:()=>g?async function(){p&&(p.isComplete=(new Date).getTime(),(0,i.kB)(p));const e="ecommerce"===window.nfdOnboarding.currentFlow?c.Nj:c.hF;window.location.replace(e)}():u(m.path),disabled:n})}},9519:function(e,t,n){var a=n(9307);n(9196),t.Z=e=>{let{heading:t,subHeading:n,question:r}=e;return(0,a.createElement)("div",null,t&&(0,a.createElement)("h2",{className:"nfd-step-card-heading"},t),n&&(0,a.createElement)("h3",{className:r?"nfd-step-card-subheading-other":"nfd-step-card-subheading"},n),r&&(0,a.createElement)("h3",{className:"nfd-step-card-question"},r))}},4401:function(e,t,n){n.d(t,{V:function(){return l}});var a=n(9307),r=n(5791),o=n(4316),s=n(950),l=e=>{let{title:t,subtitle:n,error:l}=e;return(0,a.createElement)(r.Z,{className:"step-error-state",isVerticallyCentered:!0},(0,a.createElement)(o.Z,{title:t,subtitle:n}),(0,a.createElement)("div",{className:"step-error-state__logo"}),(0,a.createElement)("h3",{className:"step-error-state__error"},l),(0,a.createElement)(s.Z,null))}},4316:function(e,t,n){var a=n(9307),r=n(5736);t.Z=e=>{let{title:t,subtitle:n}=e;return(0,a.createElement)("div",{className:"nfd-main-heading"},(0,a.createElement)("h2",{className:"nfd-main-heading__title"},(0,r.__)(t,"wp-module-onboarding")),(0,a.createElement)("h3",{className:"nfd-main-heading__subtitle"},(0,r.__)(n,"wp-module-onboarding")))}},5791:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(9307),r=(n(5609),n(4184)),o=n.n(r),s=n(5158),l=n(6974),i=n(2200),c=n(6989),u=n.n(c),d=n(4704),m=e=>{let{className:t="nfd-onboarding-layout__base",children:n}=e;const r=(0,l.TH)(),c=document.querySelector(".nfd-onboard-content");return(0,a.useEffect)((()=>{null==c||c.focus({preventScroll:!0}),function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Showing new Onboarding Page";(0,s.speak)(t,"assertive")}(r,"Override"),new class{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.eventSlug=e,this.eventData=t}send(){u()({url:(0,d.F)("events"),method:"POST",data:{slug:this.eventSlug,data:this.eventData}}).catch((e=>{console.error(e)}))}}(`${i.Db}-pageview`,{stepID:r.pathname,previousStepID:window.nfdOnboarding.previousStepID}).send(),window.nfdOnboarding.previousStepID=r.pathname}),[r.pathname]),(0,a.createElement)("div",{className:o()("nfd-onboarding-layout",t)},n)};const p=e=>{let{children:t}=e;return(0,a.createElement)("section",{className:"is-contained"},t)};var g=e=>{let{className:t="",children:n,isBgPrimary:r=!1,isCentered:s=!1,isVerticallyCentered:l=!1,isContained:i=!1,isPadded:c=!1,isFadeIn:u=!0}=e;const d=i?p:a.Fragment;return(0,a.createElement)(m,{className:o()("nfd-onboarding-layout__common",t,{"is-layout-fade-in":u},{"is-bg-primary":r},{"is-centered":s},{"is-vertically-centered":l},{"is-padded":c})},(0,a.createElement)(d,null,n))}},7004:function(e,t,n){n.d(t,{L:function(){return i},Y:function(){return l}});var a=n(9307),r=n(5791),o=n(4316),s=n(950),l=e=>{let{title:t,subtitle:n}=e;return(0,a.createElement)(r.Z,{className:"step-loader",isVerticallyCentered:!0},(0,a.createElement)(o.Z,{title:t,subtitle:n}),(0,a.createElement)("div",{className:"step-loader__logo-container"},(0,a.createElement)("div",{className:"step-loader__logo"})),(0,a.createElement)(s.Z,null))},i=()=>(0,a.createElement)("div",{className:"image-upload-loader--loading-box"},(0,a.createElement)("div",{className:"image-upload-loader--loading-box__loader"}))},950:function(e,t,n){var a=n(9307),r=n(9685),o=n(9818),s=n(5736);t.Z=e=>{let{question:t=(0,s.__)("Need Help?","wp-module-onboarding"),urlLabel:n=(0,s.__)("Hire our Experts","wp-module-onboarding")}=e;const l=(0,o.select)(r.h).getHireExpertsUrl();return(0,a.createElement)("div",{className:"nfd-card-need-help-tag"},t,(0,a.createElement)("a",{href:l,target:"_blank"},n))}},349:function(e,t,n){var a=n(9307),r=(n(5736),n(4184)),o=n.n(r);t.Z=e=>{let{className:t="",children:n}=e;return(0,a.createElement)("div",{className:o()("nfd-onboarding-large-card",t)},n)}},1340:function(e,t,n){n.d(t,{U:function(){return m},g:function(){return b}});var a=n(9307),r=n(9818),o=n(4333),s=n(7004),l=n(9685),i=n(7625),c=n(2200),u=n(4401),d=n(5736),m=e=>{let{children:t,navigationStateCallback:n=!1}=e;const m=(0,o.useViewportMatch)("medium"),{storedThemeStatus:p,brandName:g}=(0,r.useSelect)((e=>({storedThemeStatus:e(l.h).getThemeStatus(),brandName:e(l.h).getNewfoldBrandName()})),[]),b=(e=>({loader:{title:(0,d.sprintf)(
/* translators: %s: Brand */
(0,d.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,d.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding")},errorState:{title:(0,d.sprintf)(
/* translators: %s: Brand */
(0,d.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,d.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding"),error:(0,d.__)("Uh-oh, something went wrong. Please contact support.","wp-module-onboarding")}}))(g),{updateThemeStatus:f,setIsDrawerOpened:h,setIsDrawerSuppressed:w,setIsHeaderNavigationEnabled:v}=(0,r.useDispatch)(l.h),_=async()=>{const e=await(0,i.YL)(c.DY);return null!=e&&e.error?c.vv:e.body.status},y=e=>{switch(e){case c.vv:case c.GV:return(()=>{if("function"==typeof n)return n();m&&h(!0),w(!1),v(!0)})();default:h(!1),w(!0),v(!1)}};return(0,a.useEffect)((async()=>{if(y(p),p===c.a0){const e=await _();switch(e){case c.Zh:setTimeout((async()=>{if(await _()!==c.GV)return f(c.vv);window.location.reload()}),c.YU);break;case c.GV:window.location.reload();break;default:f(e)}}}),[p]),(0,a.createElement)(a.Fragment,null,(()=>{switch(p){case c.vv:return(0,a.createElement)(u.V,{title:b.errorState.title,subtitle:b.errorState.subtitle,error:b.errorState.error});case c.GV:return t;default:return(0,a.createElement)(s.Y,{title:b.loader.title,subtitle:b.loader.subtitle})}})())},p=n(3421),g=n(1392),b=e=>{let{children:t,navigationStateCallback:n=!1}=e;const i=(0,o.useViewportMatch)("medium"),[m,b]=(0,a.useState)(c.Sr),{storedPluginsStatus:f,brandName:h}=(0,r.useSelect)((e=>({storedPluginsStatus:e(l.h).getPluginsStatus(),brandName:e(l.h).getNewfoldBrandName()})),[]),w=(e=>({loader:{title:(0,d.sprintf)(
/* translators: 1: Brand 2: Site */
(0,d.__)("Making the keys to your %s Online %s","wp-module-onboarding"),e,(0,g.I)("Site")),subtitle:(0,d.__)("We’re installing WooCommerce for you to fill with your amazing products & services!","wp-module-onboarding")},errorState:{title:(0,d.sprintf)(
/* translators: 1: Brand 2: Site */
(0,d.__)("Making the keys to your %s Online %s","wp-module-onboarding"),e,(0,g.I)("Site")),subtitle:(0,d.__)("We’re installing WooCommerce for you to fill with your amazing products & services!","wp-module-onboarding"),error:(0,d.__)("Uh-oh, something went wrong. Please contact support.","wp-module-onboarding")}}))(h),{updatePluginsStatus:v,setIsDrawerOpened:_,setIsDrawerSuppressed:y,setIsHeaderNavigationEnabled:E}=(0,r.useDispatch)(l.h),S=async()=>{const e=await(0,p.qC)(c.Gv);return null!=e&&e.error?c.sG:e.body.status},N=e=>{switch(e){case c.sG:case c.ye:return(()=>{if("function"==typeof n)return n();i&&_(!0),y(!1),E(!0)})();default:_(!1),y(!0),E(!1)}};return(0,a.useEffect)((()=>{N(m)}),[m]),(0,a.useEffect)((async()=>{if(b(f[c.Gv]),f[c.Gv]===c.Ck){const e=await S();switch(e){case c.Sr:setTimeout((async()=>{if(await S()!==c.ye)return f[c.Gv]=c.sG,v(f),b(c.sG);window.location.reload()}),c.sr);break;case c.ye:window.location.reload();break;default:f[c.Gv]=e,b(e),v(f)}}}),[f]),(0,a.createElement)(a.Fragment,null,(()=>{switch(m){case c.sG:return(0,a.createElement)(u.V,{title:w.errorState.title,subtitle:w.errorState.subtitle,error:w.errorState.error});case c.ye:return t;default:return(0,a.createElement)(s.Y,{title:w.loader.title,subtitle:w.loader.subtitle})}})())}},4069:function(e,t,n){n.r(t);var a=n(9307),r=n(5609),o=n(9818),s=n(5736),l=n(2200),i=n(1211),c=n(9519),u=n(5791),d=n(950),m=n(349),p=n(1340),g=n(9685),b=n(9371);t.default=()=>{const{setDrawerActiveView:e,setSidebarActiveView:t,setCurrentOnboardingData:n}=(0,o.useDispatch)(g.h);let f=(0,o.useSelect)((e=>e(g.h).getCurrentOnboardingData())),h=f.storeDetails.productInfo;return(0,a.useEffect)((()=>{t(l.Jq),e(l.dv)}),[]),(0,a.createElement)(p.g,null,(0,a.createElement)(u.Z,{isBgPrimary:!0,isCentered:!0},(0,a.createElement)(m.Z,{className:"ecommerce-step"},(0,a.createElement)("div",{className:"nfd-onboarding-experience-step onboarding-product-step onboarding-ecommerce-step"},(0,a.createElement)("div",{className:"nfd-card-heading center"},(0,a.createElement)(c.Z,{heading:(0,s.__)(b.F6,"wp-module-onboarding"),subHeading:(0,s.__)(b.fA,"wp-module-onboarding")})),(0,a.createElement)("div",{className:"nfd-product-step-options"},b.GE.map((e=>(0,a.createElement)(r.CheckboxControl,{key:e.value,checked:h.product_types.includes(e.value),label:e.content,onChange:t=>{return a=e.value,r=t,n({storeDetails:{...f.storeDetails,productInfo:{...h,product_types:r?[...null==h?void 0:h.product_types,a]:null==h?void 0:h.product_types.filter((e=>e!==a))}}});var a,r}})))),(0,a.createElement)("div",{className:"step-product-numbers"},(0,a.createElement)("span",{style:{fontSize:"16px"}},(0,s.__)(b.xs,"wp-module-onboarding")),(0,a.createElement)(r.RadioControl,{className:"components-radio-control__input",selected:null==h?void 0:h.product_count,options:b.XY.map((e=>({label:(0,s.__)(e.content,"wp-module-onboarding"),value:(0,s.__)(e.value,"wp-module-onboarding")}))),onChange:e=>n({storeDetails:{...f.storeDetails,productInfo:{...h,product_count:e}}})})),(0,a.createElement)(i.Z,{text:(0,s.__)(b.q5,"wp-module-onboarding")}),(0,a.createElement)(d.Z,null)))))}},9371:function(e){e.exports=JSON.parse('{"F6":"Tell us about your products","fA":"What type of products will you be selling?","xs":"How many products will you be selling?","OB":"Configure your tax information","pm":"Do you want to enable tax rates and calculations?","Q4":"Confirm your business or store address","Ds":"We’ll use this information to help you setup your online store","kM":[{"content":"Yes, enable tax rates and calculations","value":"1","data":{"wc_connect_taxes_enabled":"yes","woocommerce_calc_taxes":"yes"}},{"content":"I will configure my own tax information later","value":"3","data":{"wc_connect_taxes_enabled":"no","woocommerce_calc_taxes":"yes"}},{"content":"I don\'t charge sales tax","value":"5","data":{"woocommerce_no_sales_tax":true,"woocommerce_calc_taxes":"no","wc_connect_taxes_enabled":"no"}}],"q5":"Continue Setup","GE":[{"content":"Physical products","value":"physical"},{"content":"Digital / Downloadable products","value":"downloads"},{"content":"Subscriptions","value":"subscriptions"},{"content":"Book rooms, houses or rent products","value":"bookings"},{"content":"Membership","value":"memberships"},{"content":"Customizable products","value":"product-add-ons"},{"content":"Bundles of products","value":"product-bundles"},{"content":"Let your users ask a quote for your products","value":"product-quotes"}],"XY":[{"content":"0","value":"0"},{"content":"1 - 10","value":"1-10"},{"content":"11 - 100","value":"11-100"},{"content":"101 - 1000","value":"101-1000"},{"content":"1000 +","value":"1000+"}]}')}}]);