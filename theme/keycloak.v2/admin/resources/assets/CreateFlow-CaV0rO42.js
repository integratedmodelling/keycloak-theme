import{jsxs as r,Fragment as f,jsx as t}from"react/jsx-runtime";import{u as w,c as h,b as F,e as b,g,P as v,F as y,o as A,h as l,L as S,i as C,f as T,A as c,j as H}from"./index-C9t2UlUN.js";import{F as I}from"./FormAccess-DnQCcStE.js";import{V as L}from"./ViewHeader-cxZm8XhN.js";import{N as P}from"./NameDescription-B30C9S9E.js";import{A as V}from"./Form-Cdw1qhWG.js";import"react";import"react-dom";import"./copy-icon-CYSS18Ce.js";import"./ToolbarContent-D6TJq6fk.js";const m=["basic-flow","client-flow"];function R(){const{t:e}=w(),u=h(),{realm:n}=F(),{addAlert:s}=b(),i=g(),{handleSubmit:p}=i;return r(f,{children:[t(L,{titleKey:"createFlow",subKey:"authenticationCreateFlowHelp"}),t(v,{variant:"light",children:t(y,{...i,children:r(I,{isHorizontal:!0,role:"manage-authorization",onSubmit:p(async a=>{const d={...a,builtIn:!1,topLevel:!0};try{const{id:o}=await T.authenticationManagement.createFlow(d);s(e("flowCreatedSuccess"),c.success),u(H({realm:n,id:o,usedBy:"notInUse"}))}catch(o){s(e("flowCreateError",{error:o.response?.data?.errorMessage||o}),c.danger)}}),children:[t(P,{}),t(A,{name:"providerId",label:e("flowType"),labelIcon:e("topLevelFlowTypeHelp"),"aria-label":e("selectFlowType"),controller:{defaultValue:m[0]},options:m.map(a=>({key:a,value:e(`top-level-flow-type.${a}`)}))}),r(V,{children:[t(l,{"data-testid":"create",type:"submit",children:e("create")}),t(l,{"data-testid":"cancel",variant:"link",component:a=>t(S,{...a,to:C({realm:n})}),children:e("cancel")})]})]})})})]})}export{R as default};
//# sourceMappingURL=CreateFlow-CaV0rO42.js.map