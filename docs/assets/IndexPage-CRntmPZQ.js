import{m as q2,g as W,a as A2,aT as Q,aU as t0,aX as a0,c as r,h as C,E as n0,d as _,f as i,a6 as y,U as q,X as u,a2 as g2,V as o0,b4 as n2,r as D,aI as s0,t as r0,y as i0,b2 as u0,b8 as a2,n as p0,I as T,aB as d0,b9 as c0,ah as m0,ba as v0,w as y2,H as D0,b3 as U,$ as k2,bb as o2,a8 as F,a9 as E2,F as K,a7 as x2,b0 as X,W as f,bc as h2,a0 as z,G as b0,Z as f0,S as A0}from"./index-Cv7eowTT.js";import{Q as k}from"./selection-sucgDov1.js";import{T as g0,Q as s2}from"./QInnerLoading-DmmJBuvQ.js";const C0=q2({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(t,{slots:s}){const{proxy:{$q:a}}=W(),o=A2(t0,Q);if(o===Q)return console.error("QPage needs to be a deep child of QLayout"),Q;if(A2(a0,Q)===Q)return console.error("QPage needs to be child of QPageContainer"),Q;const m=r(()=>{const d=(o.header.space===!0?o.header.size:0)+(o.footer.space===!0?o.footer.size:0);if(typeof t.styleFn=="function"){const c=o.isContainer.value===!0?o.containerHeight.value:a.screen.height;return t.styleFn(d,c)}return{minHeight:o.isContainer.value===!0?o.containerHeight.value-d+"px":a.screen.height===0?d!==0?`calc(100vh - ${d}px)`:"100vh":a.screen.height-d+"px"}}),n=r(()=>`q-page${t.padding===!0?" q-layout-padding":""}`);return()=>C("main",{class:n.value,style:m.value},n0(s.default))}}),q0=_({name:"CodePreview",props:{code:{type:String,required:!0},lang:{type:String,required:!0},meta:{type:String,required:!0}},setup(t){const s=D(),a=D(0),o=D(!1);return{codeEl:s,height:a,copied:o,toggleCode:()=>{const e=s.value?s.value.offsetHeight:0;a.value=a.value===0?e:0},copyCode:()=>{if(!o.value){try{navigator.clipboard.writeText(t.code)}catch(e){console.log(e)}o.value=!0,setTimeout(()=>{o.value=!1},1e3)}}}}}),y0=(t,s)=>{const a=t.__vccOpts||t;for(const[o,e]of s)a[o]=e;return a},k0={class:"mdp-demo__preview"},E0={class:"mdp-demo__toolbar"},x0={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",height:"20",width:"20",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24"},h0=u("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4"},null,-1),w0=[h0],B0={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",height:"20",width:"20",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24"},F0=u("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2"},null,-1),_0=[F0],$0=u("svg",{xmlns:"http://www.w3.org/2000/svg",class:"ionicon",viewBox:"0 0 512 512"},[u("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"46",d:"M160 368L32 256l128-112M352 368l128-112-128-112M304 96l-96 320"})],-1),V0=[$0],S0={ref:"codeEl"};function M0(t,s,a,o,e,m){return q(),y("div",{class:n2(["mdp-demo",t.height>0&&"is-expanded"])},[u("div",k0,[g2(t.$slots,"default")]),u("div",E0,[u("div",{class:"mdp-demo__btn mdp-demo__btn-copy",onClick:s[0]||(s[0]=(...n)=>t.copyCode&&t.copyCode(...n))},[t.copied?(q(),y("svg",x0,w0)):(q(),y("svg",B0,_0))]),u("div",{class:"mdp-demo__btn mdp-demo__btn-code",onClick:s[1]||(s[1]=(...n)=>t.toggleCode&&t.toggleCode(...n))},V0)]),u("div",{class:"mdp-demo__code",style:o0({height:t.height+"px",visibility:t.height>0?"visible":"hidden"})},[u("div",S0,[g2(t.$slots,"code")],512)],4)],2)}const I0=y0(q0,[["render",M0]]),P=_({name:"CodePreviewWrapper",props:{code:{type:String,required:!0},lang:{type:String,required:!0},meta:{type:String,default:""},component:{type:String,default:"CodePreview"}},setup(t,s){const a=W().appContext.app.component(t.component),o=a||I0;return()=>i(o,{code:decodeURIComponent(t.code),lang:decodeURIComponent(t.lang),meta:decodeURIComponent(t.meta)},{default:s.slots.default,code:s.slots.code})}}),C2="q-slider__marker-labels",R0=t=>({value:t}),L0=({marker:t})=>C("div",{key:t.value,style:t.style,class:t.classes},t.label),w2=[34,37,40,33,39,38],Q0={...r0,...s0,min:{type:Number,default:0},max:{type:Number,default:100},innerMin:Number,innerMax:Number,step:{type:Number,default:1,validator:t=>t>=0},snap:Boolean,vertical:Boolean,reverse:Boolean,color:String,markerLabelsClass:String,label:Boolean,labelColor:String,labelTextColor:String,labelAlways:Boolean,switchLabelSide:Boolean,markers:[Boolean,Number],markerLabels:[Boolean,Array,Object,Function],switchMarkerLabelsSide:Boolean,trackImg:String,trackColor:String,innerTrackImg:String,innerTrackColor:String,selectionColor:String,selectionImg:String,thumbSize:{type:String,default:"20px"},trackSize:{type:String,default:"4px"},disable:Boolean,readonly:Boolean,dense:Boolean,tabindex:[String,Number],thumbColor:String,thumbPath:{type:String,default:"M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0"}},P0=["pan","update:modelValue","change"];function T0({updateValue:t,updatePosition:s,getDragging:a,formAttrs:o}){const{props:e,emit:m,slots:n,proxy:{$q:d}}=W(),c=i0(e,d),h=c0(o),E=D(!1),R=D(!1),w=D(!1),L=D(!1),x=r(()=>e.vertical===!0?"--v":"--h"),G=r(()=>"-"+(e.switchLabelSide===!0?"switched":"standard")),$=r(()=>e.vertical===!0?e.reverse===!0:e.reverse!==(d.lang.rtl===!0)),B=r(()=>isNaN(e.innerMin)===!0||e.innerMin<e.min?e.min:e.innerMin),V=r(()=>isNaN(e.innerMax)===!0||e.innerMax>e.max?e.max:e.innerMax),A=r(()=>e.disable!==!0&&e.readonly!==!0&&B.value<V.value),S=r(()=>{if(e.step===0)return p=>p;const l=(String(e.step).trim().split(".")[1]||"").length;return p=>parseFloat(p.toFixed(l))}),I=r(()=>e.step===0?1:e.step),B2=r(()=>A.value===!0?e.tabindex||0:-1),N=r(()=>e.max-e.min),r2=r(()=>V.value-B.value),O=r(()=>J(B.value)),Z=r(()=>J(V.value)),j=r(()=>e.vertical===!0?$.value===!0?"bottom":"top":$.value===!0?"right":"left"),i2=r(()=>e.vertical===!0?"height":"width"),F2=r(()=>e.vertical===!0?"width":"height"),u2=r(()=>e.vertical===!0?"vertical":"horizontal"),_2=r(()=>{const l={role:"slider","aria-valuemin":B.value,"aria-valuemax":V.value,"aria-orientation":u2.value,"data-step":e.step};return e.disable===!0?l["aria-disabled"]="true":e.readonly===!0&&(l["aria-readonly"]="true"),l}),$2=r(()=>`q-slider q-slider${x.value} q-slider--${E.value===!0?"":"in"}active inline no-wrap `+(e.vertical===!0?"row":"column")+(e.disable===!0?" disabled":" q-slider--enabled"+(A.value===!0?" q-slider--editable":""))+(w.value==="both"?" q-slider--focus":"")+(e.label||e.labelAlways===!0?" q-slider--label":"")+(e.labelAlways===!0?" q-slider--label-always":"")+(c.value===!0?" q-slider--dark":"")+(e.dense===!0?" q-slider--dense q-slider--dense"+x.value:""));function H(l){const p="q-slider__"+l;return`${p} ${p}${x.value} ${p}${x.value}${G.value}`}function p2(l){const p="q-slider__"+l;return`${p} ${p}${x.value}`}const V2=r(()=>{const l=e.selectionColor||e.color;return"q-slider__selection absolute"+(l!==void 0?` text-${l}`:"")}),S2=r(()=>p2("markers")+" absolute overflow-hidden"),M2=r(()=>p2("track-container")),I2=r(()=>H("pin")),R2=r(()=>H("label")),L2=r(()=>H("text-container")),Q2=r(()=>H("marker-labels-container")+(e.markerLabelsClass!==void 0?` ${e.markerLabelsClass}`:"")),P2=r(()=>"q-slider__track relative-position no-outline"+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),T2=r(()=>{const l={[F2.value]:e.trackSize};return e.trackImg!==void 0&&(l.backgroundImage=`url(${e.trackImg}) !important`),l}),U2=r(()=>"q-slider__inner absolute"+(e.innerTrackColor!==void 0?` bg-${e.innerTrackColor}`:"")),d2=r(()=>{const l=Z.value-O.value,p={[j.value]:`${100*O.value}%`,[i2.value]:l===0?"2px":`${100*l}%`};return e.innerTrackImg!==void 0&&(p.backgroundImage=`url(${e.innerTrackImg}) !important`),p});function z2(l){const{min:p,max:v,step:b}=e;let g=p+l*(v-p);if(b>0){const M=(g-B.value)%b;g+=(Math.abs(M)>=b/2?(M<0?-1:1)*b:0)-M}return g=S.value(g),T(g,B.value,V.value)}function J(l){return N.value===0?0:(l-e.min)/N.value}function N2(l,p){const v=d0(l),b=e.vertical===!0?T((v.top-p.top)/p.height,0,1):T((v.left-p.left)/p.width,0,1);return T($.value===!0?1-b:b,O.value,Z.value)}const c2=r(()=>u0(e.markers)===!0?e.markers:I.value),m2=r(()=>{const l=[],p=c2.value,v=e.max;let b=e.min;do l.push(b),b+=p;while(b<v);return l.push(v),l}),v2=r(()=>{const l=` ${C2}${x.value}-`;return C2+`${l}${e.switchMarkerLabelsSide===!0?"switched":"standard"}${l}${$.value===!0?"rtl":"ltr"}`}),Y=r(()=>e.markerLabels===!1?null:j2(e.markerLabels).map((l,p)=>({index:p,value:l.value,label:l.label||l.value,classes:v2.value+(l.classes!==void 0?" "+l.classes:""),style:{...b2(l.value),...l.style||{}}}))),D2=r(()=>({markerList:Y.value,markerMap:H2.value,classes:v2.value,getStyle:b2})),O2=r(()=>{const l=r2.value===0?"2px":100*c2.value/r2.value;return{...d2.value,backgroundSize:e.vertical===!0?`2px ${l}%`:`${l}% 2px`}});function j2(l){if(l===!1)return null;if(l===!0)return m2.value.map(R0);if(typeof l=="function")return m2.value.map(v=>{const b=l(v);return a2(b)===!0?{...b,value:v}:{value:v,label:b}});const p=({value:v})=>v>=e.min&&v<=e.max;return Array.isArray(l)===!0?l.map(v=>a2(v)===!0?v:{value:v}).filter(p):Object.keys(l).map(v=>{const b=l[v],g=Number(v);return a2(b)===!0?{...b,value:g}:{value:g,label:b}}).filter(p)}function b2(l){return{[j.value]:`${100*(l-e.min)/N.value}%`}}const H2=r(()=>{if(e.markerLabels===!1)return null;const l={};return Y.value.forEach(p=>{l[p.value]=p}),l});function K2(){if(n["marker-label-group"]!==void 0)return n["marker-label-group"](D2.value);const l=n["marker-label"]||L0;return Y.value.map(p=>l({marker:p,...D2.value}))}const W2=r(()=>[[g0,X2,void 0,{[u2.value]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function X2(l){l.isFinal===!0?(L.value!==void 0&&(s(l.evt),l.touch===!0&&t(!0),L.value=void 0,m("pan","end")),E.value=!1,w.value=!1):l.isFirst===!0?(L.value=a(l.evt),s(l.evt),t(),E.value=!0,m("pan","start")):(s(l.evt),t())}function f2(){w.value=!1}function G2(l){s(l,a(l)),t(),R.value=!0,E.value=!0,document.addEventListener("mouseup",e2,!0)}function e2(){R.value=!1,E.value=!1,t(!0),f2(),document.removeEventListener("mouseup",e2,!0)}function Z2(l){s(l,a(l)),t(!0)}function J2(l){w2.includes(l.keyCode)&&t(!0)}function Y2(l){if(e.vertical===!0)return null;const p=d.lang.rtl!==e.reverse?1-l:l;return{transform:`translateX(calc(${2*p-1} * ${e.thumbSize} / 2 + ${50-100*p}%))`}}function e0(l){const p=r(()=>R.value===!1&&(w.value===l.focusValue||w.value==="both")?" q-slider--focus":""),v=r(()=>`q-slider__thumb q-slider__thumb${x.value} q-slider__thumb${x.value}-${$.value===!0?"rtl":"ltr"} absolute non-selectable`+p.value+(l.thumbColor.value!==void 0?` text-${l.thumbColor.value}`:"")),b=r(()=>({width:e.thumbSize,height:e.thumbSize,[j.value]:`${100*l.ratio.value}%`,zIndex:w.value===l.focusValue?2:void 0})),g=r(()=>l.labelColor.value!==void 0?` text-${l.labelColor.value}`:""),M=r(()=>Y2(l.ratio.value)),l2=r(()=>"q-slider__text"+(l.labelTextColor.value!==void 0?` text-${l.labelTextColor.value}`:""));return()=>{const t2=[C("svg",{class:"q-slider__thumb-shape absolute-full",viewBox:"0 0 20 20","aria-hidden":"true"},[C("path",{d:e.thumbPath})]),C("div",{class:"q-slider__focus-ring fit"})];return(e.label===!0||e.labelAlways===!0)&&(t2.push(C("div",{class:I2.value+" absolute fit no-pointer-events"+g.value},[C("div",{class:R2.value,style:{minWidth:e.thumbSize}},[C("div",{class:L2.value,style:M.value},[C("span",{class:l2.value},l.label.value)])])])),e.name!==void 0&&e.disable!==!0&&h(t2,"push")),C("div",{class:v.value,style:b.value,...l.getNodeData()},t2)}}function l0(l,p,v,b){const g=[];e.innerTrackColor!=="transparent"&&g.push(C("div",{key:"inner",class:U2.value,style:d2.value})),e.selectionColor!=="transparent"&&g.push(C("div",{key:"selection",class:V2.value,style:l.value})),e.markers!==!1&&g.push(C("div",{key:"marker",class:S2.value,style:O2.value})),b(g);const M=[m0("div",{key:"trackC",class:M2.value,tabindex:p.value,...v.value},[C("div",{class:P2.value,style:T2.value},g)],"slide",A.value,()=>W2.value)];if(e.markerLabels!==!1){const l2=e.switchMarkerLabelsSide===!0?"unshift":"push";M[l2](C("div",{key:"markerL",class:Q2.value},K2()))}return M}return p0(()=>{document.removeEventListener("mouseup",e2,!0)}),{state:{active:E,focus:w,preventFocus:R,dragging:L,editable:A,classes:$2,tabindex:B2,attributes:_2,roundValueFn:S,keyStep:I,trackLen:N,innerMin:B,innerMinRatio:O,innerMax:V,innerMaxRatio:Z,positionProp:j,sizeProp:i2,isReversed:$},methods:{onActivate:G2,onMobileClick:Z2,onBlur:f2,onKeyup:J2,getContent:l0,getThumbRenderFn:e0,convertRatioToModel:z2,convertModelToRatio:J,getDraggingRatio:N2}}}const U0=()=>({}),z0=q2({name:"QSlider",props:{...Q0,modelValue:{required:!0,default:null,validator:t=>typeof t=="number"||t===null},labelValue:[String,Number]},emits:P0,setup(t,{emit:s}){const{proxy:{$q:a}}=W(),{state:o,methods:e}=T0({updateValue:x,updatePosition:$,getDragging:G,formAttrs:v0(t)}),m=D(null),n=D(0),d=D(0);function c(){d.value=t.modelValue===null?o.innerMin.value:T(t.modelValue,o.innerMin.value,o.innerMax.value)}y2(()=>`${t.modelValue}|${o.innerMin.value}|${o.innerMax.value}`,c),c();const h=r(()=>e.convertModelToRatio(d.value)),E=r(()=>o.active.value===!0?n.value:h.value),R=r(()=>{const A={[o.positionProp.value]:`${100*o.innerMinRatio.value}%`,[o.sizeProp.value]:`${100*(E.value-o.innerMinRatio.value)}%`};return t.selectionImg!==void 0&&(A.backgroundImage=`url(${t.selectionImg}) !important`),A}),w=e.getThumbRenderFn({focusValue:!0,getNodeData:U0,ratio:E,label:r(()=>t.labelValue!==void 0?t.labelValue:d.value),thumbColor:r(()=>t.thumbColor||t.color),labelColor:r(()=>t.labelColor),labelTextColor:r(()=>t.labelTextColor)}),L=r(()=>o.editable.value!==!0?{}:a.platform.is.mobile===!0?{onClick:e.onMobileClick}:{onMousedown:e.onActivate,onFocus:B,onBlur:e.onBlur,onKeydown:V,onKeyup:e.onKeyup});function x(A){d.value!==t.modelValue&&s("update:modelValue",d.value),A===!0&&s("change",d.value)}function G(){return m.value.getBoundingClientRect()}function $(A,S=o.dragging.value){const I=e.getDraggingRatio(A,S);d.value=e.convertRatioToModel(I),n.value=t.snap!==!0||t.step===0?I:e.convertModelToRatio(d.value)}function B(){o.focus.value=!0}function V(A){if(w2.includes(A.keyCode)===!1)return;D0(A);const S=([34,33].includes(A.keyCode)?10:1)*o.keyStep.value,I=([34,37,40].includes(A.keyCode)?-1:1)*(o.isReversed.value===!0?-1:1)*(t.vertical===!0?-1:1)*S;d.value=T(o.roundValueFn.value(d.value+I),o.innerMin.value,o.innerMax.value),x()}return()=>{const A=e.getContent(R,o.tabindex,L,S=>{S.push(w())});return C("div",{ref:m,class:o.classes.value+(t.modelValue===null?" q-slider--no-value":""),...o.attributes.value,"aria-valuenow":t.modelValue},A)}}}),N0={class:"row"},O0={style:{width:"500px"}},j0={for:"length"},H0=_({__name:"Doc.md.DemoBlockIa97a2ea3",setup(t){const s=D(""),a=D(6);return(o,e)=>{const m=U("q-otp-input");return q(),y("div",N0,[i(k),u("div",O0,[i(m,{placeholder:"*",length:a.value,modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=n=>s.value=n),class:"q-mb-md"},null,8,["length","modelValue"]),u("label",j0,k2(o.$t("examples.basic.length")),1),i(z0,{modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=n=>a.value=n),min:4,max:10,snap:"",label:"",markers:"","label-always":""},null,8,["modelValue"])]),i(k)])}}}),K0={class:"row"},W0={style:{width:"500px"}},X0=_({__name:"Doc.md.DemoBlockI1793c74b",setup(t){const s=D(""),a=D({autofocus:!0,digitOnly:!0,allowPaste:!0,realTime:!0});return(o,e)=>{const m=U("q-otp-input");return q(),y("div",K0,[i(k),u("div",W0,[i(m,o2(a.value,{modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=n=>s.value=n),class:"q-mb-md"}),null,16,["modelValue"]),i(F(E2),{readonly:"",modelValue:s.value,"onUpdate:modelValue":e[1]||(e[1]=n=>s.value=n),outlined:"",label:o.$t("examples.global.inputLabel"),class:"q-mb-md"},null,8,["modelValue","label"]),(q(!0),y(K,null,x2(a.value,(n,d)=>(q(),y(K,{key:d},[i(X,{label:o.$t(`examples.behavior.${d}`),modelValue:a.value[d],"onUpdate:modelValue":c=>a.value[d]=c},null,8,["label","modelValue","onUpdate:modelValue"]),e[2]||(e[2]=u("br",null,null,-1))],64))),128))]),i(k)])}}}),G0={class:"row"},Z0={style:{width:"500px"}},J0=_({__name:"Doc.md.DemoBlockId7cc47f8",setup(t){const s=D(""),a=D("text"),o=["text","password"],e=D({readonly:!1,disable:!1,error:!1,loading:!1});return(m,n)=>{const d=U("q-otp-input");return q(),y("div",G0,[i(k),u("div",Z0,[i(d,o2(e.value,{type:a.value,modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=c=>s.value=c),class:"q-mb-md"}),{loading:f(({loading:c})=>[i(s2,{showing:c},null,8,["showing"])]),_:1},16,["type","modelValue"]),i(h2,{modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=c=>a.value=c),options:o.map(c=>({label:c,value:c}))},null,8,["modelValue","options"]),n[3]||(n[3]=u("br",null,null,-1)),(q(!0),y(K,null,x2(e.value,(c,h)=>(q(),y(K,{key:h},[i(X,{label:m.$t(`examples.state.${h}`),modelValue:e.value[h],"onUpdate:modelValue":E=>e.value[h]=E},null,8,["label","modelValue","onUpdate:modelValue"]),n[2]||(n[2]=u("br",null,null,-1))],64))),128))]),i(k)])}}}),Y0={class:"row"},ee={style:{width:"500px"}},le={for:"style"},te=_({__name:"Doc.md.DemoBlockIbd0fcdd7",setup(t){const s=D(""),a=D({outlined:!0,filled:!1,standout:!1,dense:!1}),o=["none","outlined","filled","standout"],e=D("none");return y2(e,m=>{switch(m){case"none":a.value.standout=!1,a.value.filled=!1,a.value.outlined=!1;break;case"outlined":a.value.standout=!1,a.value.filled=!1,a.value.outlined=!0;break;case"filled":a.value.standout=!1,a.value.outlined=!1,a.value.filled=!0;break;case"standout":a.value.outlined=!1,a.value.filled=!1,a.value.standout=!0;break}}),(m,n)=>{const d=U("q-otp-input");return q(),y("div",Y0,[i(k),u("div",ee,[i(d,o2(a.value,{modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=c=>s.value=c),class:"q-mb-md"}),{loading:f(({loading:c})=>[i(s2,{showing:c},null,8,["showing"])]),_:1},16,["modelValue"]),u("label",le,k2(m.$t("examples.style.inputStyle")),1),i(h2,{inline:"",modelValue:e.value,"onUpdate:modelValue":n[1]||(n[1]=c=>e.value=c),options:o.map(c=>({label:c,value:c}))},null,8,["modelValue","options"]),i(X,{label:m.$t("examples.style.dense"),modelValue:a.value.dense,"onUpdate:modelValue":n[2]||(n[2]=c=>a.value.dense=c)},null,8,["label","modelValue"]),n[3]||(n[3]=u("br",null,null,-1))]),i(k)])}}}),ae={class:"row"},ne={style:{width:"500px"}},oe=_({__name:"Doc.md.DemoBlockI6dfef1b7",setup(t){const s=D(""),a=D(!1);return(o,e)=>{const m=U("q-otp-input");return q(),y("div",ae,[i(k),u("div",ne,[e[5]||(e[5]=u("label",{for:"separator"},"separator",-1)),i(m,{modelValue:s.value,"onUpdate:modelValue":e[1]||(e[1]=n=>s.value=n),class:"q-mb-md",error:a.value},{separator:f(({slotClass:n})=>[u("div",{class:n2([n,"text-h6"])},"-",2)]),after:f(()=>[i(X,{label:"error",modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=n=>a.value=n)},null,8,["modelValue"])]),_:1},8,["modelValue","error"]),i(m,{modelValue:s.value,"onUpdate:modelValue":e[2]||(e[2]=n=>s.value=n),class:"q-mb-md"},{separator:f(({slotClass:n})=>[u("div",{class:n2([n,"text-h6"])},"😭",2)]),_:1},8,["modelValue"]),e[6]||(e[6]=u("label",{for:"loading"},"loading",-1)),e[7]||(e[7]=u("br",null,null,-1)),e[8]||(e[8]=u("span",{class:"text-weight-bold"}," Recommend: QInnerLoading ",-1)),i(m,{modelValue:s.value,"onUpdate:modelValue":e[3]||(e[3]=n=>s.value=n),class:"q-mb-md",loading:""},{loading:f(({loading:n})=>[i(s2,{showing:n},null,8,["showing"])]),_:1},8,["modelValue"]),e[9]||(e[9]=u("label",{for:"before and after"},"before and after",-1)),e[10]||(e[10]=u("br",null,null,-1)),e[11]||(e[11]=u("span",{class:"text-weight-bold"}," Recommend: QIcon / QBtn ",-1)),i(m,{modelValue:s.value,"onUpdate:modelValue":e[4]||(e[4]=n=>s.value=n),class:"q-mb-md"},{before:f(({clear:n,backspace:d,blur:c,focus:h})=>[i(b0,{name:"mdi-dialpad",color:"primary",size:"sm"})]),after:f(({clear:n,backspace:d,blur:c,focus:h})=>[i(z,{flat:"",round:"",icon:"mdi-backspace-outline",color:"negative",onClick:d},null,8,["onClick"])]),_:1},8,["modelValue"])]),i(k)])}}}),se={class:"row"},re={style:{width:"500px"}},ie={key:0,class:"row q-gutter-md"},ue=_({__name:"Doc.md.DemoBlockIee9492d7",setup(t){const s=D(""),a=D(null);return(o,e)=>{const m=U("q-otp-input");return q(),y("div",se,[i(k),u("div",re,[i(m,{ref_key:"otpRef",ref:a,modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=n=>s.value=n),gutter:"md",class:"q-mb-md"},null,8,["modelValue"]),i(F(E2),{readonly:"",modelValue:s.value,"onUpdate:modelValue":e[1]||(e[1]=n=>s.value=n),outlined:"",label:o.$t("examples.global.inputLabel"),class:"q-mb-md"},null,8,["modelValue","label"]),a.value?(q(),y("div",ie,[i(z,{"no-caps":"",unelevated:"",color:"primary",label:o.$t("examples.expose.focus"),onClick:a.value.focus,icon:"mdi-selection-ellipse-arrow-inside"},null,8,["label","onClick"]),i(z,{"no-caps":"",unelevated:"",color:"primary",label:o.$t("examples.expose.blur"),onClick:a.value.blur,icon:"mdi-selection-ellipse-remove"},null,8,["label","onClick"]),i(z,{"no-caps":"",unelevated:"",color:"primary",label:o.$t("examples.expose.clear"),onClick:a.value.clear,icon:"mdi-close"},null,8,["label","onClick"]),i(z,{"no-caps":"",unelevated:"",color:"primary",label:o.$t("examples.expose.backspace"),onClick:a.value.backspace,icon:"mdi-backspace-outline"},null,8,["label","onClick"])])):f0("",!0)]),i(k)])}}}),pe={class:"markdown-body"},de={__name:"Doc",setup(t,{expose:s}){return s({frontmatter:{}}),(o,e)=>(q(),y("div",pe,[i(F(P),{lang:"vue",meta:"preview [basic]",code:"%3Ctemplate%3E%0D%0A%20%20%20%20%3Cdiv%20class%3D%22row%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cq-space%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22width%3A%20500px%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cq-otp-input%20placeholder%3D%22*%22%20%3Alength%20v-model%3D%22otp%22%20class%3D%22q-mb-md%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fq-otp-input%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Clabel%20for%3D%22length%22%3E%7B%7B%20%24t(%22examples.basic.length%22)%20%7D%7D%3C%2Flabel%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cq-slider%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20v-model%3D%22length%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Amin%3D%224%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Amax%3D%2210%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20snap%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20markers%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20label-always%3E%3C%2Fq-slider%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%20%20%20%20%20%20%3Cq-space%20%2F%3E%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20ref%20%7D%20from%20%22vue%22%3B%0D%0Aimport%20%7B%20QInput%20%7D%20from%20%22quasar%22%3B%0D%0A%0D%0Aconst%20otp%20%3D%20ref(%22%22)%3B%0D%0Aconst%20length%20%3D%20ref(6)%3B%0D%0A%3C%2Fscript%3E",component:"CodePreview"},{code:f(()=>e[0]||(e[0]=[u("pre",{class:"language-vue"},[u("code",{class:"language-vue"},`<template>
    <div class="row">
        <q-space />
        <div style="width: 500px">
            <q-otp-input placeholder="*" :length v-model="otp" class="q-mb-md">
            </q-otp-input>
            <label for="length">{{ $t("examples.basic.length") }}</label>
            <q-slider
                v-model="length"
                :min="4"
                :max="10"
                snap
                label
                markers
                label-always></q-slider>
        </div>
        <q-space />
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { QInput } from "quasar";

const otp = ref("");
const length = ref(6);
<\/script>
`)],-1)])),default:f(()=>[i(H0)]),_:1}),i(F(P),{lang:"vue",meta:"preview [behavior]",code:"%3Ctemplate%3E%0D%0A%20%20%20%20%3Cdiv%20class%3D%22row%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cq-space%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22width%3A%20500px%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cq-otp-input%20v-bind%3D%22props%22%20v-model%3D%22otp%22%20class%3D%22q-mb-md%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fq-otp-input%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cq-input%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20readonly%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20v-model%3D%22otp%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20outlined%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Alabel%3D%22%24t('examples.global.inputLabel')%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20class%3D%22q-mb-md%22%3E%3C%2Fq-input%3E%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20v-for%3D%22(_%2C%20key)%20in%20props%22%20%3Akey%3D%22key%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cq-toggle%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Alabel%3D%22%24t(%60examples.behavior.%24%7Bkey%7D%60)%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20v-model%3D%22props%5Bkey%5D%22%3E%3C%2Fq-toggle%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cbr%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%20%20%20%20%20%20%3Cq-space%20%2F%3E%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20ref%20%7D%20from%20%22vue%22%3B%0D%0Aimport%20%7B%20QInput%20%7D%20from%20%22quasar%22%3B%0D%0Aimport%20%7B%20QOtpInputProps%20%7D%20from%20%22%40rubisco0211%2Fquasar-app-extension-qotp%22%3B%0D%0A%0D%0Aconst%20otp%20%3D%20ref(%22%22)%3B%0D%0A%0D%0Aconst%20props%20%3D%20ref(%7B%0D%0A%20%20%20%20autofocus%3A%20true%2C%0D%0A%20%20%20%20digitOnly%3A%20true%2C%0D%0A%20%20%20%20allowPaste%3A%20true%2C%0D%0A%20%20%20%20realTime%3A%20true%2C%0D%0A%7D)%3B%0D%0A%3C%2Fscript%3E",component:"CodePreview"},{code:f(()=>e[1]||(e[1]=[u("pre",{class:"language-vue"},[u("code",{class:"language-vue"},`<template>
    <div class="row">
        <q-space />
        <div style="width: 500px">
            <q-otp-input v-bind="props" v-model="otp" class="q-mb-md">
            </q-otp-input>
            <q-input
                readonly
                v-model="otp"
                outlined
                :label="$t('examples.global.inputLabel')"
                class="q-mb-md"></q-input>

            <template v-for="(_, key) in props" :key="key">
                <q-toggle
                    :label="$t(\`examples.behavior.\${key}\`)"
                    v-model="props[key]"></q-toggle>
                <br />
            </template>
        </div>
        <q-space />
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { QInput } from "quasar";
import { QOtpInputProps } from "@rubisco0211/quasar-app-extension-qotp";

const otp = ref("");

const props = ref({
    autofocus: true,
    digitOnly: true,
    allowPaste: true,
    realTime: true,
});
<\/script>
`)],-1)])),default:f(()=>[i(X0)]),_:1}),i(F(P),{lang:"vue",meta:"preview [state]",code:"%3Ctemplate%3E%0D%0A%20%20%20%20%3Cdiv%20class%3D%22row%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cq-space%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22width%3A%20500px%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cq-otp-input%20v-bind%3D%22props%22%20%3Atype%20v-model%3D%22otp%22%20class%3D%22q-mb-md%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20%23loading%3D%22%7B%20loading%20%7D%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cq-inner-loading%20%3Ashowing%3D%22loading%22%3E%20%3C%2Fq-inner-loading%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fq-otp-input%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cq-option-group%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20v-model%3D%22type%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Aoptions%3D%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20typeOptions.map((t)%20%3D%3E%20(%7B%20label%3A%20t%2C%20value%3A%20t%20%7D))%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22%3E%3C%2Fq-option-group%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cbr%20%2F%3E%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20v-for%3D%22(_%2C%20key)%20in%20props%22%20%3Akey%3D%22key%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cq-toggle%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Alabel%3D%22%24t(%60examples.state.%24%7Bkey%7D%60)%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20v-model%3D%22props%5Bkey%5D%22%3E%3C%2Fq-toggle%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cbr%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%20%20%20%20%20%20%3Cq-space%20%2F%3E%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20ref%20%7D%20from%20%22vue%22%3B%0D%0A%0D%0Aconst%20otp%20%3D%20ref(%22%22)%3B%0D%0Aconst%20type%20%3D%20ref(%22text%22)%3B%0D%0Aconst%20typeOptions%20%3D%20%5B%22text%22%2C%20%22password%22%5D%3B%0D%0A%0D%0Aconst%20props%20%3D%20ref(%7B%0D%0A%20%20%20%20readonly%3A%20false%2C%0D%0A%20%20%20%20disable%3A%20false%2C%0D%0A%20%20%20%20error%3A%20false%2C%0D%0A%20%20%20%20loading%3A%20false%2C%0D%0A%7D)%3B%0D%0A%3C%2Fscript%3E",component:"CodePreview"},{code:f(()=>e[2]||(e[2]=[u("pre",{class:"language-vue"},[u("code",{class:"language-vue"},`<template>
    <div class="row">
        <q-space />
        <div style="width: 500px">
            <q-otp-input v-bind="props" :type v-model="otp" class="q-mb-md">
                <template #loading="{ loading }">
                    <q-inner-loading :showing="loading"> </q-inner-loading>
                </template>
            </q-otp-input>
            <q-option-group
                v-model="type"
                :options="
                    typeOptions.map((t) => ({ label: t, value: t }))
                "></q-option-group>
            <br />

            <template v-for="(_, key) in props" :key="key">
                <q-toggle
                    :label="$t(\`examples.state.\${key}\`)"
                    v-model="props[key]"></q-toggle>
                <br />
            </template>
        </div>
        <q-space />
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const otp = ref("");
const type = ref("text");
const typeOptions = ["text", "password"];

const props = ref({
    readonly: false,
    disable: false,
    error: false,
    loading: false,
});
<\/script>
`)],-1)])),default:f(()=>[i(J0)]),_:1}),i(F(P),{lang:"vue",meta:"preview [style]",code:"%3Ctemplate%3E%0D%0A%20%20%20%20%3Cdiv%20class%3D%22row%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cq-space%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22width%3A%20500px%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cq-otp-input%20v-bind%3D%22props%22%20v-model%3D%22otp%22%20class%3D%22q-mb-md%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20%23loading%3D%22%7B%20loading%20%7D%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cq-inner-loading%20%3Ashowing%3D%22loading%22%3E%20%3C%2Fq-inner-loading%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fq-otp-input%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Clabel%20for%3D%22style%22%3E%7B%7B%20%24t(%22examples.style.inputStyle%22)%20%7D%7D%3C%2Flabel%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cq-option-group%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20inline%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20v-model%3D%22style%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Aoptions%3D%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20styles.map((t)%20%3D%3E%20(%7B%20label%3A%20t%2C%20value%3A%20t%20%7D))%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22%3E%3C%2Fq-option-group%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cq-toggle%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Alabel%3D%22%24t(%60examples.style.dense%60)%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20v-model%3D%22props.dense%22%3E%3C%2Fq-toggle%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cbr%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%20%20%20%20%20%20%3Cq-space%20%2F%3E%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20ref%2C%20watch%20%7D%20from%20%22vue%22%3B%0D%0A%0D%0Aconst%20otp%20%3D%20ref(%22%22)%3B%0D%0A%0D%0Aconst%20props%20%3D%20ref(%7B%0D%0A%20%20%20%20outlined%3A%20true%2C%0D%0A%20%20%20%20filled%3A%20false%2C%0D%0A%20%20%20%20standout%3A%20false%2C%0D%0A%20%20%20%20dense%3A%20false%2C%0D%0A%7D)%3B%0D%0A%0D%0Aconst%20styles%20%3D%20%5B%22none%22%2C%20%22outlined%22%2C%20%22filled%22%2C%20%22standout%22%5D%3B%0D%0A%0D%0Aconst%20style%20%3D%20ref(%22none%22)%3B%0D%0A%0D%0Awatch(style%2C%20(value)%20%3D%3E%20%7B%0D%0A%20%20%20%20switch%20(value)%20%7B%0D%0A%20%20%20%20%20%20%20%20case%20%22none%22%3A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20props.value.standout%20%3D%20false%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20props.value.filled%20%3D%20false%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20props.value.outlined%20%3D%20false%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20break%3B%0D%0A%20%20%20%20%20%20%20%20case%20%22outlined%22%3A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20props.value.standout%20%3D%20false%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20props.value.filled%20%3D%20false%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20props.value.outlined%20%3D%20true%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20break%3B%0D%0A%20%20%20%20%20%20%20%20case%20%22filled%22%3A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20props.value.standout%20%3D%20false%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20props.value.outlined%20%3D%20false%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20props.value.filled%20%3D%20true%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20break%3B%0D%0A%20%20%20%20%20%20%20%20case%20%22standout%22%3A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20props.value.outlined%20%3D%20false%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20props.value.filled%20%3D%20false%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20props.value.standout%20%3D%20true%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20break%3B%0D%0A%20%20%20%20%7D%0D%0A%7D)%3B%0D%0A%3C%2Fscript%3E",component:"CodePreview"},{code:f(()=>e[3]||(e[3]=[u("pre",{class:"language-vue"},[u("code",{class:"language-vue"},`<template>
    <div class="row">
        <q-space />
        <div style="width: 500px">
            <q-otp-input v-bind="props" v-model="otp" class="q-mb-md">
                <template #loading="{ loading }">
                    <q-inner-loading :showing="loading"> </q-inner-loading>
                </template>
            </q-otp-input>
            <label for="style">{{ $t("examples.style.inputStyle") }}</label>
            <q-option-group
                inline
                v-model="style"
                :options="
                    styles.map((t) => ({ label: t, value: t }))
                "></q-option-group>
            <q-toggle
                :label="$t(\`examples.style.dense\`)"
                v-model="props.dense"></q-toggle>
            <br />
        </div>
        <q-space />
    </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";

const otp = ref("");

const props = ref({
    outlined: true,
    filled: false,
    standout: false,
    dense: false,
});

const styles = ["none", "outlined", "filled", "standout"];

const style = ref("none");

watch(style, (value) => {
    switch (value) {
        case "none":
            props.value.standout = false;
            props.value.filled = false;
            props.value.outlined = false;
            break;
        case "outlined":
            props.value.standout = false;
            props.value.filled = false;
            props.value.outlined = true;
            break;
        case "filled":
            props.value.standout = false;
            props.value.outlined = false;
            props.value.filled = true;
            break;
        case "standout":
            props.value.outlined = false;
            props.value.filled = false;
            props.value.standout = true;
            break;
    }
});
<\/script>
`)],-1)])),default:f(()=>[i(te)]),_:1}),i(F(P),{lang:"vue",meta:"preview [slots]",code:"%3Ctemplate%3E%0D%0A%20%20%20%20%3Cdiv%20class%3D%22row%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cq-space%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22width%3A%20500px%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Clabel%20for%3D%22separator%22%3Eseparator%3C%2Flabel%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cq-otp-input%20v-model%3D%22otp%22%20class%3D%22q-mb-md%22%20%3Aerror%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20%23separator%3D%22%7B%20slotClass%20%7D%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20%3Aclass%3D%22slotClass%22%20class%3D%22text-h6%22%3E-%3C%2Fdiv%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20%23after%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cq-toggle%20label%3D%22error%22%20v-model%3D%22error%22%3E%3C%2Fq-toggle%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fq-otp-input%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cq-otp-input%20v-model%3D%22otp%22%20class%3D%22q-mb-md%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20%23separator%3D%22%7B%20slotClass%20%7D%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20%3Aclass%3D%22slotClass%22%20class%3D%22text-h6%22%3E%F0%9F%98%AD%3C%2Fdiv%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fq-otp-input%3E%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Clabel%20for%3D%22loading%22%3Eloading%3C%2Flabel%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cbr%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22text-weight-bold%22%3E%20Recommend%3A%20QInnerLoading%20%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cq-otp-input%20v-model%3D%22otp%22%20class%3D%22q-mb-md%22%20loading%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20%23loading%3D%22%7B%20loading%20%7D%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cq-inner-loading%20%3Ashowing%3D%22loading%22%3E%20%3C%2Fq-inner-loading%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fq-otp-input%3E%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Clabel%20for%3D%22before%20and%20after%22%3Ebefore%20and%20after%3C%2Flabel%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cbr%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22text-weight-bold%22%3E%20Recommend%3A%20QIcon%20%2F%20QBtn%20%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cq-otp-input%20v-model%3D%22otp%22%20class%3D%22q-mb-md%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20%23before%3D%22%7B%20clear%2C%20backspace%2C%20blur%2C%20focus%20%7D%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cq-icon%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3D%22mdi-dialpad%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3D%22primary%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3D%22sm%22%3E%3C%2Fq-icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20%23after%3D%22%7B%20clear%2C%20backspace%2C%20blur%2C%20focus%20%7D%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cq-btn%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20flat%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20round%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%22mdi-backspace-outline%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3D%22negative%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%40click%3D%22backspace%22%3E%3C%2Fq-btn%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fq-otp-input%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%20%20%20%20%20%20%3Cq-space%20%2F%3E%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20ref%20%7D%20from%20%22vue%22%3B%0D%0A%0D%0Aconst%20otp%20%3D%20ref(%22%22)%3B%0D%0Aconst%20error%20%3D%20ref(false)%3B%0D%0A%3C%2Fscript%3E",component:"CodePreview"},{code:f(()=>e[4]||(e[4]=[u("pre",{class:"language-vue"},[u("code",{class:"language-vue"},`<template>
    <div class="row">
        <q-space />
        <div style="width: 500px">
            <label for="separator">separator</label>
            <q-otp-input v-model="otp" class="q-mb-md" :error>
                <template #separator="{ slotClass }">
                    <div :class="slotClass" class="text-h6">-</div>
                </template>
                <template #after>
                    <q-toggle label="error" v-model="error"></q-toggle>
                </template>
            </q-otp-input>
            <q-otp-input v-model="otp" class="q-mb-md">
                <template #separator="{ slotClass }">
                    <div :class="slotClass" class="text-h6">😭</div>
                </template>
            </q-otp-input>

            <label for="loading">loading</label>
            <br />
            <span class="text-weight-bold"> Recommend: QInnerLoading </span>
            <q-otp-input v-model="otp" class="q-mb-md" loading>
                <template #loading="{ loading }">
                    <q-inner-loading :showing="loading"> </q-inner-loading>
                </template>
            </q-otp-input>

            <label for="before and after">before and after</label>
            <br />
            <span class="text-weight-bold"> Recommend: QIcon / QBtn </span>
            <q-otp-input v-model="otp" class="q-mb-md">
                <template #before="{ clear, backspace, blur, focus }">
                    <q-icon
                        name="mdi-dialpad"
                        color="primary"
                        size="sm"></q-icon>
                </template>
                <template #after="{ clear, backspace, blur, focus }">
                    <q-btn
                        flat
                        round
                        icon="mdi-backspace-outline"
                        color="negative"
                        @click="backspace"></q-btn>
                </template>
            </q-otp-input>
        </div>
        <q-space />
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const otp = ref("");
const error = ref(false);
<\/script>
`)],-1)])),default:f(()=>[i(oe)]),_:1}),i(F(P),{lang:"vue",meta:"preview [expose]",code:"%3Ctemplate%3E%0D%0A%20%20%20%20%3Cdiv%20class%3D%22row%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cq-space%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22width%3A%20500px%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cq-otp-input%20ref%3D%22otpRef%22%20v-model%3D%22otp%22%20gutter%3D%22md%22%20class%3D%22q-mb-md%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fq-otp-input%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cq-input%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20readonly%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20v-model%3D%22otp%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20outlined%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Alabel%3D%22%24t('examples.global.inputLabel')%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20class%3D%22q-mb-md%22%3E%3C%2Fq-input%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20v-if%3D%22otpRef%22%20class%3D%22row%20q-gutter-md%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cq-btn%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20no-caps%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20unelevated%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3D%22primary%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Alabel%3D%22%24t('examples.expose.focus')%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%40click%3D%22otpRef.focus%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%22mdi-selection-ellipse-arrow-inside%22%3E%3C%2Fq-btn%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cq-btn%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20no-caps%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20unelevated%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3D%22primary%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Alabel%3D%22%24t('examples.expose.blur')%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%40click%3D%22otpRef.blur%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%22mdi-selection-ellipse-remove%22%3E%3C%2Fq-btn%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cq-btn%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20no-caps%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20unelevated%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3D%22primary%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Alabel%3D%22%24t('examples.expose.clear')%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%40click%3D%22otpRef.clear%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%22mdi-close%22%3E%3C%2Fq-btn%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cq-btn%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20no-caps%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20unelevated%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3D%22primary%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Alabel%3D%22%24t('examples.expose.backspace')%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%40click%3D%22otpRef.backspace%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%22mdi-backspace-outline%22%3E%3C%2Fq-btn%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%20%20%20%20%20%20%3Cq-space%20%2F%3E%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20onMounted%2C%20ref%20%7D%20from%20%22vue%22%3B%0D%0Aimport%20%7B%20QInput%20%7D%20from%20%22quasar%22%3B%0D%0Aimport%20%7B%20type%20QOtpInput%20%7D%20from%20%22%40rubisco0211%2Fquasar-app-extension-qotp%22%3B%0D%0A%0D%0Aconst%20otp%20%3D%20ref(%22%22)%3B%0D%0A%0D%0Aconst%20otpRef%20%3D%20ref%3CQOtpInput%20%7C%20null%3E(null)%3B%0D%0A%3C%2Fscript%3E",component:"CodePreview"},{code:f(()=>e[5]||(e[5]=[u("pre",{class:"language-vue"},[u("code",{class:"language-vue"},`<template>
    <div class="row">
        <q-space />
        <div style="width: 500px">
            <q-otp-input ref="otpRef" v-model="otp" gutter="md" class="q-mb-md">
            </q-otp-input>
            <q-input
                readonly
                v-model="otp"
                outlined
                :label="$t('examples.global.inputLabel')"
                class="q-mb-md"></q-input>
            <div v-if="otpRef" class="row q-gutter-md">
                <q-btn
                    no-caps
                    unelevated
                    color="primary"
                    :label="$t('examples.expose.focus')"
                    @click="otpRef.focus"
                    icon="mdi-selection-ellipse-arrow-inside"></q-btn>
                <q-btn
                    no-caps
                    unelevated
                    color="primary"
                    :label="$t('examples.expose.blur')"
                    @click="otpRef.blur"
                    icon="mdi-selection-ellipse-remove"></q-btn>
                <q-btn
                    no-caps
                    unelevated
                    color="primary"
                    :label="$t('examples.expose.clear')"
                    @click="otpRef.clear"
                    icon="mdi-close"></q-btn>
                <q-btn
                    no-caps
                    unelevated
                    color="primary"
                    :label="$t('examples.expose.backspace')"
                    @click="otpRef.backspace"
                    icon="mdi-backspace-outline"></q-btn>
            </div>
        </div>
        <q-space />
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { QInput } from "quasar";
import { type QOtpInput } from "@rubisco0211/quasar-app-extension-qotp";

const otp = ref("");

const otpRef = ref<QOtpInput | null>(null);
<\/script>
`)],-1)])),default:f(()=>[i(ue)]),_:1})]))}},ce={class:"row justify-center"},me={class:"col-lg-6 col-12"},fe=_({__name:"IndexPage",setup(t){return D("template"),(s,a)=>(q(),A0(C0,{padding:""},{default:f(()=>[u("div",ce,[u("div",me,[i(F(de))])])]),_:1}))}});export{fe as default};
