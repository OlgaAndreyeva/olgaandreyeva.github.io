"use strict";(self.webpackChunknewfold_Onboarding=self.webpackChunknewfold_Onboarding||[]).push([[512],{4316:function(e,t,a){var l=a(9307),r=a(5736);t.Z=e=>{let{title:t,subtitle:a}=e;return(0,l.createElement)("div",{className:"nfd-main-heading"},(0,l.createElement)("h2",{className:"nfd-main-heading__title"},(0,r.__)(t,"wp-module-onboarding")),(0,l.createElement)("h3",{className:"nfd-main-heading__subtitle"},(0,r.__)(a,"wp-module-onboarding")))}},5791:function(e,t,a){a.d(t,{Z:function(){return p}});var l=a(9307),r=(a(5609),a(4184)),n=a.n(r),o=a(5158),i=a(6974),s=a(2200),c=a(6989),d=a.n(c),u=a(4704),m=e=>{let{className:t="nfd-onboarding-layout__base",children:a}=e;const r=(0,i.TH)(),c=document.querySelector(".nfd-onboard-content");return(0,l.useEffect)((()=>{null==c||c.focus({preventScroll:!0}),function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Showing new Onboarding Page";(0,o.speak)(t,"assertive")}(r,"Override"),new class{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.eventSlug=e,this.eventData=t}send(){d()({url:(0,u.F)("events"),method:"POST",data:{slug:this.eventSlug,data:this.eventData}}).catch((e=>{console.error(e)}))}}(`${s.Db}-pageview`,{stepID:r.pathname,previousStepID:window.nfdOnboarding.previousStepID}).send(),window.nfdOnboarding.previousStepID=r.pathname}),[r.pathname]),(0,l.createElement)("div",{className:n()("nfd-onboarding-layout",t)},a)};const _=e=>{let{children:t}=e;return(0,l.createElement)("section",{className:"is-contained"},t)};var p=e=>{let{className:t="",children:a,isBgPrimary:r=!1,isCentered:o=!1,isVerticallyCentered:i=!1,isContained:s=!1,isPadded:c=!1,isFadeIn:d=!0}=e;const u=s?_:l.Fragment;return(0,l.createElement)(m,{className:n()("nfd-onboarding-layout__common",t,{"is-layout-fade-in":d},{"is-bg-primary":r},{"is-centered":o},{"is-vertically-centered":i},{"is-padded":c})},(0,l.createElement)(u,null,a))}},7004:function(e,t,a){a.d(t,{L:function(){return s},Y:function(){return i}});var l=a(9307),r=a(5791),n=a(4316),o=a(950),i=e=>{let{title:t,subtitle:a}=e;return(0,l.createElement)(r.Z,{className:"step-loader",isVerticallyCentered:!0},(0,l.createElement)(n.Z,{title:t,subtitle:a}),(0,l.createElement)("div",{className:"step-loader__logo-container"},(0,l.createElement)("div",{className:"step-loader__logo"})),(0,l.createElement)(o.Z,null))},s=()=>(0,l.createElement)("div",{className:"image-upload-loader--loading-box"},(0,l.createElement)("div",{className:"image-upload-loader--loading-box__loader"}))},950:function(e,t,a){var l=a(9307),r=a(9685),n=a(9818),o=a(5736);t.Z=e=>{let{question:t=(0,o.__)("Need Help?","wp-module-onboarding"),urlLabel:a=(0,o.__)("Hire our Experts","wp-module-onboarding")}=e;const i=(0,n.select)(r.h).getHireExpertsUrl();return(0,l.createElement)("div",{className:"nfd-card-need-help-tag"},t,(0,l.createElement)("a",{href:i,target:"_blank"},a))}},676:function(e,t,a){var l=a(9307),r=a(5736),n=a(9818),o=a(5609),i=a(6974),s=a(7533),c=a(9685),d=a(8395),u=a(2200);t.Z=()=>{const e=(0,i.s0)(),t=(0,i.TH)(),{previousStep:a,nextStep:m,currentData:_}=(0,n.useSelect)((e=>({previousStep:e(c.h).getPreviousStep(),nextStep:e(c.h).getNextStep(),currentData:e(c.h).getCurrentOnboardingData()})),[]);async function p(e,t){if(t){if(t.isComplete=(new Date).getTime(),null!=e&&e.includes("basic-info")){const e=await async function(e){var t;const a=await(0,d.Gw)(),l=await(0,d.I2)(null==e||null===(t=e.data)||void 0===t?void 0:t.socialData);return null!=(null==l?void 0:l.error)?(console.error("Unable to Save Social Data!"),null==a?void 0:a.body):null==l?void 0:l.body}(t);e&&null!=t&&t.data&&(t.data.socialData=e)}(0,s.kB)(t)}const a="ecommerce"==window.nfdOnboarding.currentFlow?u.Nj:u.hF;window.location.replace(a)}return null===m||!1===m?(0,l.createElement)(o.Button,{className:"skip-button",onClick:e=>p(t.pathname,_)},(0,r.__)("Skip this Step","wp-module-onboarding")):(0,l.createElement)(o.Button,{className:"skip-button",onClick:t=>e(m.path)},(0,r.__)("Skip this Step","wp-module-onboarding"))}},1512:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var l=a(9307),r=a(5791),n=a(4316),o=a(5736),i=a(9818),s=a(7798),c=JSON.parse('{"y7":{"TN":"%s Title","W$":"WordPress %s","$f":"Shown to visitors, search engine and social media posts.","MT":"80"},"Je":{"TN":"%s Description","W$":"Just another WordPress %s.","$f":"Tell people who you are, what you sell and why they should visit your %s.","MT":"160"},"vU":{"T":"Error Saving Data, Try Again!"}}'),d=e=>{let{title:t,hint:a,placeholder:r,height:n,maxCharacters:i,textValue:s,textValueSetter:c}=e;const d=(0,l.useRef)(null),[u,m]=(0,l.useState)("nfd-input__field");return(0,l.useEffect)((()=>{d.current.style.height=n;const e=d.current.scrollHeight;d.current.style.height=e+"px"}),[s]),(0,l.createElement)("div",{className:"nfd-input"},(0,l.createElement)("label",null,(0,l.createElement)("div",{className:"nfd-input__label"},(0,l.createElement)("p",{className:"nfd-input__label_title"},(0,o.__)(t,"wp-module-onboarding")),(0,l.createElement)("p",{className:"nfd-input__label_maxChar"},`(${i-(null==s?void 0:s.length)} characters left)`)),(0,l.createElement)("textarea",{type:"text",className:u,ref:d,style:{height:n},placeholder:r,value:s,maxLength:i,onChange:e=>(e=>{e.preventDefault(),c(e.target.value),e.target.value.length==i?m("nfd-input__field nfd-input__field_error"):m("nfd-input__field")})(e)}),(0,l.createElement)("p",{className:"nfd-input__hint"},(0,o.__)(a,"wp-module-onboarding"))))},u=a(676),m=JSON.parse('{"qv":"--default-logo-icon","TN":"WordPress %s","C8":"Just another WordPress %s","HQ":"https://bluehost.com"}'),_=a(1392),p=e=>{let{title:t,desc:a,icon:r,socialData:n,isSocialFormOpen:i,setIsSocialFormOpen:s}=e;var c=""==r||null==r?m.qv:r,d=""==t?(0,o.sprintf)((0,o.__)(m.TN,"wp-module-onboarding"),(0,_.I)("Site")):t,u=""==a?(0,o.sprintf)((0,o.__)(m.C8,"wp-module-onboarding"),(0,_.I)("Site")):a,p=""==t?m.HQ:function(e){return`https://${null==e?void 0:e.toLowerCase().replace(/\s/g,"").replace(/\W/g,"")}.com`}(t);const[v,b]=(0,l.useState)(""),[g,w]=(0,l.useState)(""),[f,E]=(0,l.useState)(""),[h,N]=(0,l.useState)(""),[S,y]=(0,l.useState)(""),[k,T]=(0,l.useState)(""),[D,I]=(0,l.useState)("");(0,l.useEffect)((()=>{var e,t,a,l,r;if(b(null!==(e=null==n?void 0:n.facebook_site)&&void 0!==e?e:""),w(null!==(t=null==n?void 0:n.twitter_site)&&void 0!==t?t:""),E(null!==(a=null==n?void 0:n.instagram_url)&&void 0!==a?a:""),N(null!==(l=null==n?void 0:n.youtube_url)&&void 0!==l?l:""),y(null!==(r=null==n?void 0:n.linkedin_url)&&void 0!==r?r:""),Object.keys(n).includes("other_social_urls")){var o,i;const e=n.other_social_urls;Object.keys(e).includes("yelp_url")&&T(null!==(o=e.yelp_url)&&void 0!==o?o:""),Object.keys(e).includes("tiktok_url")&&I(null!==(i=e.tiktok_url)&&void 0!==i?i:"")}}),[n]);const O=e=>{let t;try{t=new URL(e)}catch(e){return!1}return"http:"===t.protocol||"https:"===t.protocol};var C=[{url:v,image:"var(--facebook-colored-icon)"},{url:g,image:"var(--twitter-colored-icon)"},{url:f,image:"var(--instagram-colored-icon)"},{url:h,image:"var(--youtube-colored-icon)"},{url:S,image:"var(--linkedin-colored-icon)"},{url:k,image:"var(--yelp-colored-icon)"},{url:D,image:"var(--tiktok-colored-icon)"}];return(0,l.createElement)("div",null,(0,l.createElement)("h4",{className:"mini-preview"},"Preview"),(0,l.createElement)("div",{className:"browser-container"},(0,l.createElement)("div",{className:"browser-row-title"},(0,l.createElement)("div",{className:"browser-row-title_main"},(0,l.createElement)("div",{className:"browser-row-title_buttons"},(0,l.createElement)("span",{className:"browser-dot",style:{background:"#ED594A"}}),(0,l.createElement)("span",{className:"browser-dot",style:{background:"#FDD800"}}),(0,l.createElement)("span",{className:"browser-dot",style:{background:"#5AC05A"}}))),(0,l.createElement)("div",{className:"browser-row-title_bar"},(0,l.createElement)("div",{className:"browser-row-title_bar_before"},(0,l.createElement)("div",{className:"browser-row-title_bar_before-curve"})),(0,l.createElement)("div",{className:"browser-row-title_bar_main"},(0==r||null==r)&&(0,l.createElement)("div",{className:"browser-icon-title",style:{content:"var(--default-logo-icon)"}}),0!=r&&null!=r&&(0,l.createElement)("img",{className:"browser-icon-title",src:c.url,alt:"Thumb"}),(0,l.createElement)("div",{className:"browser-row-title_bar_main-text"},(0,o.__)(null==d?void 0:d.substring(0,20),"wp-module-onboarding")),(0,l.createElement)("div",{className:"browser-row-title_bar_main-cross"},"x")),(0,l.createElement)("div",{className:"browser-row-title_bar_after"},(0,l.createElement)("div",{className:"browser-row-title_bar_after-curve"})))),(0,l.createElement)("div",{className:"browser-row-search"},(0,l.createElement)("div",{className:"browser-row-search__icons"},(0,l.createElement)("div",{className:"browser-icon",style:{backgroundImage:"var(--back-icon)"}}),(0,l.createElement)("div",{className:"browser-icon",style:{backgroundImage:"var(--forward-icon)"}}),(0,l.createElement)("div",{className:"browser-icon",style:{backgroundImage:"var(--reload-icon)"}})),(0,l.createElement)("div",{className:"browser-row-search__search-box"},(0,l.createElement)("input",{className:"browser-row-search__search-box_input",type:"text",onChange:e=>{},value:(0,o.__)(p,"wp-module-onboarding")})),(0,l.createElement)("div",{className:"browser-row-search__more"},(0,l.createElement)("div",{className:"browser-icon",style:{backgroundImage:"var(--more-icon)"}}))),(0,l.createElement)("div",{className:"browser-content"},(0,l.createElement)("div",{className:"browser-content_top-row"},(0,l.createElement)("h4",{className:"browser-content_top-row-name"},(0,o.__)(d,"wp-module-onboarding")),(0,l.createElement)("a",{className:"browser-content_top-row-link"},(0,o.__)(p,"wp-module-onboarding"))),(0,l.createElement)("h5",{className:"browser-content_desc"},(0,o.__)(u,"wp-module-onboarding")),(0,l.createElement)("div",{className:"browser-content_social"},C.map((e=>(0,l.createElement)("div",{key:e.image,onClick:e=>s(!i),className:`browser-content_social_icon ${e.url?O(e.url)||"--invalid-url":"--no-url"}`,style:{backgroundImage:e.image}})))))))},v=a(8395),b=a(9685),g=a(7004),w=a(6329),f=a(4704),E=a(6989),h=a.n(E);var N=e=>{let{icon:t,iconSetter:a}=e;const r=(0,l.useRef)(null),[n,i]=(0,l.useState)(!1);return(0,l.createElement)("div",{className:"image-uploader"},(0,l.createElement)("h4",{className:"image-uploader_heading"},"Logo"),n?(0,l.createElement)("div",{className:"image-uploader_window"},(0,l.createElement)(g.L,null)):(0,l.createElement)("div",{className:"image-uploader_window"},(0,l.createElement)("div",{className:"image-uploader_window-empty"}),(0,l.createElement)("div",{className:"image-uploader_window-logo"},(0==t||null==t)&&(0,l.createElement)("div",{className:"image-uploader_window-logo-icon-empty"}),0!=t&&null!=t&&(0,l.createElement)("img",{className:"image-uploader_window-logo-icon-selected",src:t.url,alt:"Thumb"})),(0,l.createElement)("div",{className:"image-uploader_window-reset"},0!=t&&null!=t&&(0,l.createElement)("button",{className:"image-uploader_window-reset-btn",onClick:()=>{var e;a(0),(null==r||null===(e=r.current)||void 0===e?void 0:e.files.length)>0&&(r.current.value="")}},(0,o.__)("RESET","wp-module-onboarding")),(0==t||null==t)&&(0,l.createElement)("button",{className:"image-uploader_window-reset-btn",onClick:()=>{null==r||r.current.click()}},(0,o.__)("UPLOAD","wp-module-onboarding")),(0,l.createElement)("input",{className:"image-uploader_window-select-btn",accept:"image/*",type:"file",ref:r,onChange:e=>{var t,l,r;null!=e&&null!==(t=e.target)&&void 0!==t&&t.files&&(null==e||null===(l=e.target)||void 0===l?void 0:l.files.length)>0&&async function(e){if(e){i(!0);const r=await async function(e){const t=await function(e){return new Promise(((t,a)=>{const l=new FileReader;l.addEventListener("loadend",(e=>t(e.target.result))),l.addEventListener("error",a),l.readAsArrayBuffer(e)}))}(e),a={"Content-Type":"image/png"};return a["Content-Disposition"]="attachment; filename="+e.name,await(0,w.D)(h()({url:(0,f.$)("media"),method:"POST",headers:a,body:t}))}(e);if(r){var t,l;const e=null==r||null===(t=r.body)||void 0===t?void 0:t.id,n=null==r||null===(l=r.body)||void 0===l?void 0:l.source_url;a({id:e,url:n})}else console.error("Image Upload Failed")}else console.error("No File Attached");i(!1)}(null==e||null===(r=e.target)||void 0===r?void 0:r.files[0])}}))))},S=a(2819),y=a.n(S),k=a(9196),T=e=>{let t;const[a,r]=(0,k.useState)(!0);return"hide"==e.content?(0,l.createElement)("div",null,e.children):(0,l.createElement)("div",{className:"Tooltip-Wrapper",onMouseEnter:()=>{t=setTimeout((()=>{r(!0)}),e.delay||400)},onMouseLeave:()=>{clearInterval(t),r(!1)}},e.children,a&&(0,l.createElement)("div",{className:`Tooltip-Tip ${e.direction||"top"}`},e.content))},D=e=>{let{socialData:t,setSocialData:a,setIsValidSocials:r,isSocialFormOpen:n,setIsSocialFormOpen:i}=e;const[s,c]=(0,l.useState)(""),[d,u]=(0,l.useState)(""),[m,_]=(0,l.useState)(""),[p,v]=(0,l.useState)(""),[b,g]=(0,l.useState)(""),[w,f]=(0,l.useState)(""),[E,h]=(0,l.useState)(""),[N,S]=(0,l.useState)([]),k={FACEBOOK:"facebook",TWITTER:"twitter",INSTAGRAM:"instagram",YOUTUBE:"youtube",LINKEDIN:"linkedin",YELP:"yelp",TIKTOK:"tiktok"},D={FACEBOOK:s,TWITTER:d,INSTAGRAM:m,YOUTUBE:p,LINKEDIN:b,YELP:w,TIKTOK:E};var I={facebook_site:s,twitter_site:d,instagram_url:m,youtube_url:p,linkedin_url:b,other_social_urls:{yelp_url:w,tiktok_url:E}};(0,l.useEffect)((()=>{var e,a,l,r,n;if(c(null!==(e=null==t?void 0:t.facebook_site)&&void 0!==e?e:""),u(null!==(a=null==t?void 0:t.twitter_site)&&void 0!==a?a:""),_(null!==(l=null==t?void 0:t.instagram_url)&&void 0!==l?l:""),v(null!==(r=null==t?void 0:t.youtube_url)&&void 0!==r?r:""),g(null!==(n=null==t?void 0:t.linkedin_url)&&void 0!==n?n:""),Object.keys(t).includes("other_social_urls")){var o,i;const e=t.other_social_urls;Object.keys(e).includes("yelp_url")&&f(null!==(o=e.yelp_url)&&void 0!==o?o:""),Object.keys(e).includes("tiktok_url")&&h(null!==(i=e.tiktok_url)&&void 0!==i?i:"")}}),[t]);const O=y().debounce((function(e,t){let a=!1;if(e===k.TWITTER?(t=t.substring(t.indexOf("@")+1),(t.match("^[A-Za-z0-9_]{1,25}$")||t.match("^http(?:s)?://(?:www.)?twitter.com/([A-Za-z0-9_]{1,25})/?$"))&&(a=!0)):(e=>{let t;try{t=new URL(e)}catch(e){return!1}return"http:"===t.protocol||"https:"===t.protocol})(t)&&(a=!0),a){var l=N.filter((function(t){return t!==e}));S(l)}else N.includes(e)||S([...N,e]);((e,t,a)=>{if(!e){var l=a.filter((function(e){return e!==t}));S(l)}0==a.length?r(!0):r(!1)})(t,e,N)}),1e3),C=e=>{const t=e.target.value;switch(e.target.id){case k.FACEBOOK:O(k.FACEBOOK,t),c(t),I.facebook_site=t;break;case k.TWITTER:O(k.TWITTER,t),u(t),I.twitter_site=t;break;case k.INSTAGRAM:O(k.INSTAGRAM,t),_(t),I.instagram_url=t;break;case k.YOUTUBE:O(k.YOUTUBE,t),v(t),I.youtube_url=t;break;case k.LINKEDIN:O(k.LINKEDIN,t),g(t),I.linkedin_url=t;break;case k.YELP:O(k.YELP,t),f(t),I.other_social_urls.yelp_url=t;break;case k.TIKTOK:O(k.TIKTOK,t),h(t),I.other_social_urls.tiktok_url=t}a(I)};return(0,l.createElement)("div",{className:"social-form"},(0,l.createElement)("div",{className:"social-form__top-row",onClick:e=>{i(!n)}},(0,l.createElement)("div",{className:"social-form__top-row_heading"},(0,o.__)("Social Media","wp-module-onboarding")),(0,l.createElement)("div",{className:"social-form__top-row_icon "+(n?"social-form__top-row_icon_opened":"")})),(0,l.createElement)("form",{className:n?"social-form__main-active":"social-form__main-hidden",onSubmit:e=>{handleSubmit(e)}},function(){var e,t=[];for(var a in k)t.push((0,l.createElement)("div",{key:k[a]},(0,l.createElement)("label",{className:`social-form__label social-form__label-${k[a]}`},(0,l.createElement)("div",{className:"social-form__label_icon",style:{backgroundImage:`var(--${k[a]}-icon)`}}),(0,l.createElement)("div",{className:"social-form__label_name"},(0,o.__)(k[a].replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})),"wp-module-onboarding"))),(0,l.createElement)(T,{content:N.includes(k[a])?(e=k[a],e===k.TWITTER?`Please enter a valid ${e} URL / username`:`Please enter a valid ${e} URL`):"hide",direction:"top"},(0,l.createElement)("input",{className:N.includes(k[a])?"social-form__box-error":"social-form__box",type:"url",id:`${k[a]}`,value:D[a],onChange:e=>{C(e)}}))));return t}()))},I=()=>{const e=(0,l.useRef)(null),[t,a]=(0,l.useState)(!1),[r,n]=(0,l.useState)(),[m,g]=(0,l.useState)(!1),[w,f]=(0,l.useState)(),[E,h]=(0,l.useState)(""),[S,y]=(0,l.useState)(""),[k,T]=(0,l.useState)(0),[I,O]=(0,l.useState)(""),[C,x]=(0,l.useState)(!1),[L,A]=(0,l.useState)(!1),{setCurrentOnboardingData:F}=(0,i.useDispatch)(b.h),{editEntityRecord:R}=(0,i.useDispatch)(s.store),{getEditedEntityRecord:$}=(0,i.useSelect)((e=>e(s.store)),[]),{currentData:P}=(0,i.useSelect)((e=>({currentData:e(b.h).getCurrentOnboardingData()})),[]);return(0,l.useEffect)((()=>{L&&e.current.scrollIntoView()}),[L]),(0,l.useEffect)((()=>{m||async function(){const e=await(0,v.Gw)();O(e.body),n(P),f(r),g(!0)}(),$("root","site"),m&&(T(null==r?void 0:r.data.siteLogo),h(null==r?void 0:r.data.blogName),y(null==r?void 0:r.data.blogDescription))}),[m]),(0,l.useEffect)((()=>{const e=setTimeout((()=>{m&&f({data:{siteLogo:k,blogName:E,blogDescription:S,socialData:I}})}),600);return()=>{clearTimeout(e)}}),[E,S,k,I,C]),(0,l.useEffect)((()=>{w&&(async()=>{var e,t,a,l;const r=P;r.data.siteLogo=null!==(e=w.data.siteLogo)&&void 0!==e?e:r.data.siteLogo,r.data.blogName=null!==(t=w.data.blogName)&&void 0!==t?t:r.data.blogName,r.data.blogDescription=null!==(a=w.data.blogDescription)&&void 0!==a?a:r.data.blogDescription,r.data.socialData=null!==(l=w.data.socialData)&&void 0!==l?l:r.data.socialData,((e,t,a)=>{R("root","site",void 0,{site_logo:null!=e&&e.id?e.id:null,description:a,title:t})})(r.data.siteLogo,r.data.blogName,r.data.blogDescription),F(r)})()}),[w]),(0,l.createElement)("div",{className:"basic-info"},(0,l.createElement)("div",{className:t?"error__show":"error__hide"},(0,o.__)(c.vU.T,"wp-module-onboarding")),(0,l.createElement)("div",{className:"basic-info-form"},(0,l.createElement)("div",{className:"basic-info-form__left"},(0,l.createElement)(d,{title:(0,o.sprintf)((0,o.__)(c.y7.TN,"wp-module-onboarding"),(0,_.I)("Site")),hint:(0,o.__)(c.y7.$f,"wp-module-onboarding"),placeholder:(0,o.sprintf)((0,o.__)(c.y7.W$,"wp-module-onboarding"),(0,_.I)("Site")),maxCharacters:(0,o.__)(c.y7.MT,"wp-module-onboarding"),height:"47px",textValue:E,textValueSetter:h}),(0,l.createElement)(d,{title:(0,o.sprintf)((0,o.__)(c.Je.TN,"wp-module-onboarding"),(0,_.I)("Site")),hint:(0,o.sprintf)((0,o.__)(c.Je.$f,"wp-module-onboarding"),(0,_.I)("site")),placeholder:(0,o.sprintf)((0,o.__)(c.Je.W$,"wp-module-onboarding"),(0,_.I)("Site")),maxCharacters:(0,o.__)(c.Je.MT,"wp-module-onboarding"),height:"100px",textValue:S,textValueSetter:y}),(0,l.createElement)("div",{ref:e},(0,l.createElement)(D,{socialData:I,setSocialData:O,isSocialFormOpen:L,setIsValidSocials:x,setIsSocialFormOpen:A}))),(0,l.createElement)("div",{className:"basic-info-form__right"},(0,l.createElement)(N,{icon:k,iconSetter:T}),(0,l.createElement)(p,{icon:k,title:E,desc:S,socialData:I,isSocialFormOpen:L,setIsSocialFormOpen:A}))),(0,l.createElement)(u.Z,null))},O=a(2200),C=a(4333),x=()=>{const e=(0,C.useViewportMatch)("medium"),{setIsDrawerOpened:t,setDrawerActiveView:a,setSidebarActiveView:o,setIsDrawerSuppressed:s,setIsHeaderNavigationEnabled:c}=(0,i.useDispatch)(b.h),{currentStep:d}=(0,i.useSelect)((e=>({currentStep:e(b.h).getCurrentStep()})),[]);return(0,l.useEffect)((()=>{e&&t(!0),o(O.Jq),s(!1),a(O.tM),c(!0)}),[]),(0,l.createElement)(r.Z,{isVerticallyCentered:!0},(0,l.createElement)(n.Z,{title:null==d?void 0:d.heading,subtitle:null==d?void 0:d.subheading}),(0,l.createElement)(I,null))}}}]);