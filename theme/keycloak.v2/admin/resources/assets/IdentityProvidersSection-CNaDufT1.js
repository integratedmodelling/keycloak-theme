import{jsx as e,jsxs as m,Fragment as S}from"react/jsx-runtime";import*as C from"react";import{useState as g,Fragment as Z}from"react";import{_ as J,c2 as W,k as F,c3 as X,c4 as z,c5 as ee,u as K,e as R,q as H,U as ae,h as A,f as D,B as U,Y as T,G as x,a as te,b as $,c as re,A as se,ag as ie,P as ne,H as j,b9 as oe,a9 as le,aa as V,c6 as de,O as ce,Q as me,br as pe,L as _,bZ as ge,bo as ue,c7 as G,D as he}from"./index-C9t2UlUN.js";import{u as fe}from"./ConfirmDialog-BDkqxnFL.js";import{G as ye,C as De}from"./ClickableCard-CwUELw3C.js";import{a1 as ve}from"./KeycloakDataTable-2rLFZPhG.js";import{V as be}from"./ViewHeader-cxZm8XhN.js";import{b as Pe,s as v}from"./sortBy-CgAHVq9r.js";import{M as Ce,a as Oe}from"./Modal-Bgkd26UL.js";import{e as Ie,D as we,a as ke,b as Le,c as Ne,d as Se}from"./DataListItemRow-Bimi62Tu.js";import{D as Ae}from"./DataListControl-BRWG6uCI.js";import{b as M}from"./ToolbarContent-D6TJq6fk.js";import"react-dom";import"./PaginatingTableToolbar-oQUfBy2J.js";import"./EmptyStateBody-CyIhnUop.js";import"./EmptyStateSecondaryActions-BekVwNvY.js";import"./Form-Cdw1qhWG.js";import"./grip-vertical-icon-B_ub3hpF.js";import"./_baseFlatten-BQ8y46Zj.js";const q=a=>{var{children:t=null,className:r="",label:o=""}=a,n=J(a,["children","className","label"]);return C.createElement(W.Consumer,null,({sectionClass:c,sectionTitleClass:d,sectionComponent:p})=>{const h=p;return C.createElement(h,Object.assign({className:F(c,r)},n),o&&C.createElement("h1",{className:F(d),"aria-hidden":!0},o),C.createElement("ul",{role:"none"},t))})};q.displayName="DropdownGroup";function Te(a,t,r,o){for(var n=-1,c=a==null?0:a.length;++n<c;){var d=a[n];t(o,d,r(d),a)}return o}function xe(a,t,r,o){return Pe(a,function(n,c,d){t(o,n,r(n),d)}),o}function Ke(a,t){return function(r,o){var n=z(r)?Te:xe,c=t?t():{};return n(r,a,X(o),c)}}var Be=Object.prototype,Ee=Be.hasOwnProperty,Fe=Ke(function(a,t,r){Ee.call(a,r)?a[r].push(t):ee(a,r,[t])});const je=Fe,Ve=({onClose:a})=>{const{t}=K(),{addAlert:r,addError:o}=R(),[n,c]=g(""),[d,p]=g(""),[h,O]=g(),[y,f]=g([]),I=s=>{c(s),p(t("onDragStart",{item:s}))},b=()=>{p(t("onDragMove",{item:n}))},w=()=>{p(t("onDragCancel"))},k=s=>{p(t("onDragFinish",{list:s})),f(s)};return H(()=>D.identityProviders.find(),s=>{O(v(s,["config.guiOrder","alias"])),f(s.map(u=>u.alias))},[]),h?m(Ce,{variant:Oe.small,title:t("manageDisplayOrder"),isOpen:!0,onClose:a,actions:[e(A,{id:"modal-confirm","data-testid":"confirm",onClick:async()=>{const s=y.map((u,L)=>{const P=h.find(N=>N.alias===u);return P.config.guiOrder=L,D.identityProviders.update({alias:u},P)});try{await Promise.all(s),r(t("orderChangeSuccess"))}catch(u){o("orderChangeError",u)}a()},children:t("save")},"confirm"),e(A,{id:"modal-cancel","data-testid":"cancel",variant:U.link,onClick:a,children:t("cancel")},"cancel")],children:[e(T,{className:"pf-u-pb-lg",children:e(x,{children:t("orderDialogIntro")})}),e(Ie,{"aria-label":t("manageOrderTableAria"),"data-testid":"manageOrderDataList",isCompact:!0,onDragFinish:k,onDragStart:I,onDragMove:b,onDragCancel:w,itemOrder:y,children:v(h,"config.guiOrder","alias").map(s=>e(we,{"aria-label":s.alias,id:s.alias,children:m(ke,{children:[e(Ae,{children:e(Le,{"aria-label":t("dragHelp")})}),e(Ne,{dataListCells:[e(Se,{"data-testid":s.alias,children:s.alias},s.alias)]})]})},s.alias))}),e("div",{className:"pf-screen-reader","aria-live":"assertive",children:d})]}):e(ae,{})},Ge=a=>{const{t}=K(),{realm:r}=$();return m(_,{to:ge({realm:r,providerId:a.providerId,alias:a.alias,tab:"settings"}),children:[a.displayName||a.alias,!a.enabled&&e(ue,{isRead:!0,className:"pf-u-ml-sm",children:t("disabled")},`${a.providerId}-disabled`)]},a.providerId)};function ia(){const{t:a}=K(),t=je(te().identityProviders,"groupName"),{realm:r}=$(),o=re(),[n,c]=g(0),d=()=>c(n+1),[p,h]=g(!1),[O,y]=g(!1),[f,I]=g(!1),[b,w]=g(),{addAlert:k,addError:s}=R();H(async()=>D.identityProviders.find({max:1}),i=>{I(i.length===1)},[n]);const u=async(i,l,B)=>{const E={first:i,max:l};B&&(E.search=B);const Y=await D.identityProviders.find(E);return v(Y,["config.guiOrder","alias"])},L=i=>o(G({realm:r,providerId:i})),P=()=>Object.keys(t).map(i=>e(q,{label:i,children:v(t[i],"name").map(l=>e(he,{value:l.id,component:e(_,{to:G({realm:r,providerId:l.id}),"data-testid":l.id,children:l.name})},l.id))},i)),[N,Q]=fe({titleKey:"deleteProvider",messageKey:a("deleteConfirm",{provider:b?.alias}),continueButtonLabel:"delete",continueButtonVariant:U.danger,onConfirm:async()=>{try{await D.identityProviders.del({alias:b.alias}),d(),k(a("deletedSuccessIdentityProvider"),se.success)}catch(i){s("deleteErrorIdentityProvider",i)}}});return m(S,{children:[e(Q,{}),O&&e(Ve,{onClose:()=>{y(!1),d()}}),e(be,{titleKey:"identityProviders",subKey:"listExplain",helpUrl:ie.identityProvidersUrl}),m(ne,{variant:f?"light":"default",className:f?"pf-u-p-0":"",children:[!f&&m(S,{children:[e(T,{children:e(x,{component:j.p,children:a("getStarted")})}),Object.keys(t).map(i=>m(Z,{children:[e(T,{children:m(x,{className:"pf-u-mt-lg",component:j.h2,children:[i,":"]})}),e("hr",{className:"pf-u-mb-lg"}),e(ye,{hasGutter:!0,children:v(t[i],"name").map(l=>e(De,{"data-testid":`${l.id}-card`,onClick:()=>L(l.id),children:e(oe,{children:m(le,{hasGutter:!0,children:[e(V,{children:e(de,{icon:l.id})}),e(V,{isFilled:!0,children:l.name})]})})},l.id))})]},i))]}),f&&e(ve,{loader:u,isPaginated:!0,ariaLabelKey:"identityProviders",searchPlaceholderKey:"searchForProvider",toolbarItem:m(S,{children:[e(M,{children:e(ce,{"data-testid":"addProviderDropdown",toggle:e(me,{onToggle:()=>h(!p),isPrimary:!0,children:a("addProvider")}),isOpen:p,dropdownItems:P()})}),e(M,{children:e(A,{"data-testid":"manageDisplayOrder",variant:"link",onClick:()=>y(!0),children:a("manageDisplayOrder")})})]}),actions:[{title:a("delete"),onRowClick:i=>{w(i),N()}}],columns:[{name:"alias",displayKey:"name",cellRenderer:Ge},{name:"providerId",displayKey:"providerDetails",cellFormatters:[pe()]}]},n)]})]})}export{ia as default};
//# sourceMappingURL=IdentityProvidersSection-CNaDufT1.js.map