import{jsxs as p,Fragment as S,jsx as e}from"react/jsx-runtime";import{u as y,c as E,P as V,dt as q,e as O,a as R,du as d,g as w,q as H,a0 as u,a1 as f,a2 as v,a3 as j,aY as k,F as D,h,f as m,A as I}from"./index-C9t2UlUN.js";import{D as N}from"./DynamicComponents-D5DD9CFr.js";import{F as Y}from"./FormAccess-DnQCcStE.js";import{K as G}from"./KeycloakTextInput-DrlF32nr.js";import{V as L}from"./ViewHeader-cxZm8XhN.js";import{u as g}from"./useParams-DL8-63Ov.js";import{A as _}from"./Form-Cdw1qhWG.js";import"react";import"react-dom";import"./FileUpload-CTw4RKK1.js";import"./CodeEditor-Cp4g17EF.js";import"./copy-icon-CYSS18Ce.js";import"./EmptyStateBody-CyIhnUop.js";import"./EmptyStateSecondaryActions-BekVwNvY.js";import"./GroupPickerDialog-tI6XV7Ln.js";import"./PaginatingTableToolbar-oQUfBy2J.js";import"./ToolbarContent-D6TJq6fk.js";import"./useToggle-K3Kx99tM.js";import"./Modal-Bgkd26UL.js";import"./ConfirmDialog-BDkqxnFL.js";import"./DataListItemRow-Bimi62Tu.js";import"./grip-vertical-icon-B_ub3hpF.js";import"./_baseFlatten-BQ8y46Zj.js";import"./FlexItem-BEayPdRt.js";import"./KeySelect-CPI9XGq0.js";import"./MultiLineInput-DibC-IV_.js";import"./PasswordInput-CJKuHljf.js";import"./AddRoleMappingModal-BWNuJU0W.js";import"./KeycloakDataTable-2rLFZPhG.js";import"./filter-icon-C8nM2k1N.js";import"./KeycloakTextArea-DChmurIP.js";const z=({providerType:i,onClose:a})=>{const{t}=y(),{id:o}=g(),{addAlert:l,addError:b}=O(),P=R().componentTypes?.[d]??[],c=w({mode:"onChange"}),{register:T,control:F,handleSubmit:A,formState:{errors:x},reset:C}=c,K=async r=>{r.config&&Object.entries(r.config).forEach(([s,n])=>r.config[s]=Array.isArray(n)?n:[n]);try{o?(await m.components.update({id:o},{...r,providerType:d}),l(t("saveProviderSuccess"),I.success)):(await m.components.create({...r,providerId:i,providerType:d}),l(t("saveProviderSuccess"),I.success),a?.())}catch(s){b("saveProviderError",s)}};return H(async()=>{if(o)return await m.components.findOne({id:o})},r=>{r&&C({...r})},[]),p(Y,{isHorizontal:!0,role:"manage-realm",onSubmit:A(K),children:[o&&e(u,{label:t("providerId"),labelIcon:e(f,{helpText:t("mapperNameHelp"),fieldLabelId:"providerId"}),fieldId:"providerId",isRequired:!0,children:e(G,{id:"providerId","data-testid":"providerId-input",isReadOnly:!0,...T("id")})}),e(u,{label:t("name"),labelIcon:e(f,{helpText:t("mapperNameHelp"),fieldLabelId:"name"}),fieldId:"name",isRequired:!0,validated:x.name?v.error:v.default,helperTextInvalid:t("required"),children:e(j,{name:"name",control:F,rules:{required:!0},defaultValue:i,render:({field:r})=>e(k,{id:"name",value:r.value,onChange:r.onChange,"data-testid":"name-input"})})}),e(D,{...c,children:e(N,{properties:P.find(r=>r.id===i)?.properties||[]})}),p(_,{children:[e(h,{"data-testid":"add-provider-button",variant:"primary",type:"submit",children:t("save")}),e(h,{onClick:()=>a?.(),variant:"link",children:t("cancel")})]})]})};function Ae(){const{t:i}=y(),a=g(),t=E();return p(S,{children:[e(L,{titleKey:i("editProvider"),subKey:a.providerType}),e(V,{variant:"light",children:e(z,{...a,onClose:()=>t(q({realm:a.realm,tab:"providers"}))})})]})}export{z as KeyProviderForm,Ae as default};
//# sourceMappingURL=KeyProviderForm-BfBWi9oG.js.map