import{jsx as e,jsxs as k,Fragment as N}from"react/jsx-runtime";import{a as B}from"./policyRepresentation-LeM_FTje.js";import{useState as b,useRef as J}from"react";import{u as _,Z as Q,q as G,a3 as $,I as W,J as K,S as Z,f as p,g as X,c as Y,e as ee,aR as se,B as H,A as U,bi as z,a4 as ie,U as re,aQ as ae,D as te,P as oe,F as le,a0 as m,a1 as u,V as ne,R as ce,h as E,L as de,aU as pe}from"./index-C9t2UlUN.js";import{u as me}from"./ConfirmDialog-BDkqxnFL.js";import{F as ue}from"./FormAccess-DnQCcStE.js";import{K as fe}from"./KeycloakTextArea-DChmurIP.js";import{K as j}from"./KeycloakTextInput-DrlF32nr.js";import{V as he}from"./ViewHeader-cxZm8XhN.js";import{u as ye}from"./useParams-DL8-63Ov.js";import{R as M}from"./NewPolicyDialog-Q18nUkuT.js";import{A as ge}from"./Form-Cdw1qhWG.js";import"react-dom";import"./Modal-Bgkd26UL.js";import"./copy-icon-CYSS18Ce.js";import"./ToolbarContent-D6TJq6fk.js";import"./KeycloakDataTable-2rLFZPhG.js";import"./PaginatingTableToolbar-oQUfBy2J.js";import"./EmptyStateBody-CyIhnUop.js";import"./EmptyStateSecondaryActions-BekVwNvY.js";import"./grip-vertical-icon-B_ub3hpF.js";import"./_baseFlatten-BQ8y46Zj.js";import"./useToggle-K3Kx99tM.js";import"./ClientScopeTypes-43MQv2_N.js";import"./utils-DeGqqWSp.js";import"./filter-icon-C8nM2k1N.js";import"./GroupPickerDialog-tI6XV7Ln.js";import"./DataListItemRow-Bimi62Tu.js";import"./CodeEditor-Cp4g17EF.js";import"./AddRoleMappingModal-BWNuJU0W.js";import"./DatePicker-D83L1Ym_.js";import"./MenuList-Br-Zu33q.js";import"./FlexItem-BEayPdRt.js";const Te=({clientId:s,resourceId:f,preSelected:h})=>{const{t:I}=_(),{control:V,getValues:c,setValue:w,formState:{errors:A}}=Q(),[a,S]=b([]),[i,t]=b([]),[y,T]=b(""),[C,v]=b(!1),R=J(!0),D=c("scopes"),x=n=>n.map(l=>e(Z,{value:l,children:l.name},l.id));return G(async()=>f?(f&&!R.current&&w("scopes",[]),R.current=!1,p.clients.listScopesByResource({id:s,resourceName:f})):p.clients.listAllScopes(Object.assign({id:s,deep:!1},y===""?null:{name:y})),n=>{S(n),y||t(n.filter(l=>D?.includes(l.id)))},[f,y]),e($,{name:"scopes",defaultValue:h?[h]:[],control:V,rules:{validate:n=>n.length>0},render:({field:n})=>e(W,{toggleId:"scopes",variant:K.typeaheadMulti,onToggle:v,onFilter:(l,g)=>(T(g),x(a)),onClear:()=>{n.onChange([]),T("")},selections:i.map(l=>l.name),onSelect:(l,g)=>{const F=typeof g=="string"?i.find(d=>d.name===g):g,L=i.find(d=>d.id===F.id)?i.filter(d=>d.id!==F.id):[...i,F];n.onChange(L.map(d=>d.id)),t(L),T("")},isOpen:C,"aria-labelledby":I("scopes"),validated:A.scopes?"error":"default",isDisabled:!!h,typeAheadAriaLabel:I("scopes"),children:x(a)})})};function Xe(){const{t:s}=_(),f=X({mode:"onChange"}),{register:h,control:I,reset:V,formState:{errors:c},handleSubmit:w}=f,A=Y(),{id:a,realm:S,permissionType:i,permissionId:t,selectedId:y}=ye(),{addAlert:T,addError:C}=ee(),[v,R]=b(),[D,x]=b(!1),{hasAccess:n}=se(),l=!n("manage-authorization");G(async()=>{if(!t)return{};const[r,o,q,O]=await Promise.all([p.clients.findOnePermission({id:a,type:i,permissionId:t}),p.clients.getAssociatedResources({id:a,permissionId:t}),p.clients.getAssociatedPolicies({id:a,permissionId:t}),p.clients.getAssociatedScopes({id:a,permissionId:t})]);if(!r)throw new Error(s("notFound"));return{permission:r,resources:o.map(P=>P._id),policies:q.map(P=>P.id),scopes:O.map(P=>P.id)}},({permission:r,resources:o,policies:q,scopes:O})=>{V({...r,resources:o,policies:q,scopes:O}),r&&"resourceType"in r&&x(!!r.resourceType),R({...r,resources:o,policies:q})},[]);const g=async r=>{try{if(t)await p.clients.updatePermission({id:a,type:i,permissionId:t},r);else{const o=await p.clients.createPermission({id:a,type:i},r);R(o),A(pe({realm:S,id:a,permissionType:i,permissionId:o.id}))}T(s((t?"update":"create")+"PermissionSuccess"),U.success)}catch(o){C("permissionSaveError",o)}},[F,L]=me({titleKey:"deletePermission",messageKey:s("deletePermissionConfirm",{permission:v?.name}),continueButtonVariant:H.danger,continueButtonLabel:"confirm",onConfirm:async()=>{try{await p.clients.delPermission({id:a,type:i,permissionId:t}),T(s("permissionDeletedSuccess"),U.success),A(z({realm:S,clientId:a,tab:"permissions"}))}catch(r){C("permissionDeletedError",r)}}}),d=ie({control:I,name:"resources",defaultValue:[]});return v?k(N,{children:[e(L,{}),e(he,{titleKey:t?v.name:`create${ae(i)}BasedPermission`,dropdownItems:t?[e(te,{"data-testid":"delete-resource",isDisabled:l,onClick:()=>F(),children:s("delete")},"delete")]:void 0}),e(oe,{variant:"light",children:e(ue,{isHorizontal:!0,role:"manage-authorization",onSubmit:w(g),children:k(le,{...f,children:[e(m,{label:s("name"),isRequired:!0,helperTextInvalid:s("required"),validated:c.name?"error":"default",fieldId:"name",labelIcon:e(u,{helpText:s("permissionName"),fieldLabelId:"name"}),children:e(j,{id:"name",validated:c.name?"error":"default",...h("name",{required:!0})})}),e(m,{label:s("description"),fieldId:"description",labelIcon:e(u,{helpText:s("permissionDescription"),fieldLabelId:"description"}),validated:c.description?"error":"default",helperTextInvalid:c.description?.message,children:e(fe,{id:"description",validated:c.description?"error":"default",...h("description",{maxLength:{value:255,message:s("maxLength",{length:255})}})})}),e(m,{label:s("applyToResourceTypeFlag"),fieldId:"applyToResourceTypeFlag",labelIcon:e(u,{helpText:s("applyToResourceTypeFlagHelp"),fieldLabelId:"applyToResourceTypeFlag"}),children:e(ne,{id:"applyToResourceTypeFlag",name:"applyToResourceTypeFlag",label:s("on"),labelOff:s("off"),isChecked:D,onChange:x,"aria-label":s("applyToResourceTypeFlag")})}),D?e(m,{label:s("resourceType"),fieldId:"resourceType",labelIcon:e(u,{helpText:s("resourceTypeHelp"),fieldLabelId:"resourceType"}),isRequired:i==="scope",children:e(j,{id:"resourceType",...h("resourceType",{required:i==="scope"})})}):e(m,{label:s("resource"),fieldId:"resources",labelIcon:e(u,{helpText:s("permissionResources"),fieldLabelId:"resources"}),helperTextInvalid:s("required"),validated:c.resources?"error":"default",isRequired:i!=="scope",children:e(M,{name:"resources",clientId:a,permissionId:t,preSelected:i==="scope"?void 0:y,variant:i==="scope"?K.typeahead:K.typeaheadMulti,isRequired:i!=="scope"})}),i==="scope"&&e(m,{label:s("authorizationScopes"),fieldId:"scopes",labelIcon:e(u,{helpText:s("permissionScopesHelp"),fieldLabelId:"scopesSelect"}),helperTextInvalid:s("required"),validated:c.scopes?"error":"default",isRequired:!0,children:e(Te,{clientId:a,resourceId:d?.[0],preSelected:y})}),e(m,{label:s("policies"),fieldId:"policies",labelIcon:e(u,{helpText:s("permissionPoliciesHelp"),fieldLabelId:"policies"}),children:e(M,{name:"policies",clientId:a,permissionId:t})}),e(m,{label:s("decisionStrategy"),labelIcon:e(u,{helpText:s("permissionDecisionStrategyHelp"),fieldLabelId:"decisionStrategy"}),fieldId:"policyEnforcementMode",hasNoPaddingTop:!0,children:e($,{name:"decisionStrategy","data-testid":"decisionStrategy",defaultValue:B.UNANIMOUS,control:I,render:({field:r})=>e(N,{children:Object.values(B).map(o=>e(ce,{id:o,"data-testid":o,isChecked:r.value===o,isDisabled:l,name:"decisionStrategies",onChange:()=>r.onChange(o),label:s(`decisionStrategies.${o}`),className:"pf-u-mb-md"},o))})})}),e(ge,{children:k("div",{className:"pf-u-mt-md",children:[e(E,{variant:H.primary,type:"submit","data-testid":"save",children:s("save")}),e(E,{variant:"link","data-testid":"cancel",component:r=>e(de,{...r,to:z({realm:S,clientId:a,tab:"permissions"})}),children:s("cancel")})]})})]})})})]}):e(re,{})}export{Xe as default};
//# sourceMappingURL=PermissionDetails-B4Hadp3r.js.map