import{jsx as e,jsxs as v,Fragment as Re}from"react/jsx-runtime";import{useState as D}from"react";import{c as X,b as J,u as Y,af as fe,P as Z,X as he,h,ar as I,br as ye,f as l,g as ge,bs as ve,e as we,a4 as j,q as Ce,as as Q,B as q,A as F,D as N,U as Ae,aF as z,bt as G,a$ as ke,bu as Te,bv as De,bw as Ie,bg as Fe,bx as Ne}from"./index-C9t2UlUN.js";import{u as H}from"./ConfirmDialog-BDkqxnFL.js";import{A as Ee}from"./AttributeForm-CF8uy5gF.js";import{P as Ke}from"./PermissionTab-Cqx0kVF9.js";import{R as Be}from"./RoleForm-7jTMyy6l.js";import{A as Se,R as xe}from"./AddRoleMappingModal-BWNuJU0W.js";import{R as Pe,u as Le}from"./RoutableTabs-vx5wTdby.js";import{V as Ve}from"./ViewHeader-cxZm8XhN.js";import{u as Me,F as Oe}from"./useIsFeatureEnabled-CkHhuO9z.js";import{u as _}from"./useParams-DL8-63Ov.js";import{L as Ue}from"./PaginatingTableToolbar-oQUfBy2J.js";import{a1 as We}from"./KeycloakDataTable-2rLFZPhG.js";import{Q as $e}from"./question-circle-icon-B-vzDm0d.js";import{a as y,b as g}from"./Tabs-CjrDEqsl.js";import"react-dom";import"./Modal-Bgkd26UL.js";import"./FormAccess-DnQCcStE.js";import"./Form-Cdw1qhWG.js";import"./copy-icon-CYSS18Ce.js";import"./KeyValueInput-BJlDoGlu.js";import"./KeycloakTextInput-DrlF32nr.js";import"./KeySelect-CPI9XGq0.js";import"./useToggle-K3Kx99tM.js";import"./EmptyStateBody-CyIhnUop.js";import"./Trans-DcN6j3pV.js";import"./KeycloakTextArea-DChmurIP.js";import"./filter-icon-C8nM2k1N.js";import"./ToolbarContent-D6TJq6fk.js";import"./PageHandler-TK8xnd8P.js";import"./DynamicComponents-D5DD9CFr.js";import"./FileUpload-CTw4RKK1.js";import"./CodeEditor-Cp4g17EF.js";import"./EmptyStateSecondaryActions-BekVwNvY.js";import"./GroupPickerDialog-tI6XV7Ln.js";import"./DataListItemRow-Bimi62Tu.js";import"./grip-vertical-icon-B_ub3hpF.js";import"./_baseFlatten-BQ8y46Zj.js";import"./FlexItem-BEayPdRt.js";import"./MultiLineInput-DibC-IV_.js";import"./PasswordInput-CJKuHljf.js";import"./PageList-59HC89eh.js";import"./MenuList-Br-Zu33q.js";const je=()=>{const m=X(),{realm:o}=J(),{t:a}=Y(),{id:w,clientId:E}=_(),K=async(r,i)=>{const d=await l.roles.findOneById({id:w});if(!d)throw new Error(a("notFound"));return d.clientRole?l.clients.findUsersWithRole({roleName:d.name,id:E,first:r,max:i}):l.roles.findUsersWithRole({name:d.name,first:r,max:i})},{enabled:b}=fe();return e(Z,{"data-testid":"users-page",variant:"light",children:e(We,{isPaginated:!0,loader:K,ariaLabelKey:"roleList",searchPlaceholderKey:"","data-testid":"users-in-role-table",toolbarItem:b&&e(he,{"aria-label":"Basic popover",position:"bottom",bodyContent:v("div",{children:[a("whoWillAppearPopoverTextRoles"),e(h,{className:"kc-groups-link",variant:"link",onClick:()=>m(`/${o}/groups`),children:a("groups")}),a("or"),v(h,{className:"kc-users-link",variant:"link",onClick:()=>m(`/${o}/users`),children:[a("users"),"."]})]}),footerContent:a("whoWillAppearPopoverFooterText"),children:e(h,{variant:"link",className:"kc-who-will-appear-button",icon:e($e,{}),children:a("whoWillAppearLinkTextRoles")},"who-will-appear-button")}),emptyState:e(Ue,{hasIcon:!0,message:a("noDirectUsers"),instructions:v("div",{children:[a("noUsersEmptyStateDescription"),e(h,{className:"kc-groups-link-empty-state",variant:"link",onClick:()=>m(`/${o}/groups`),children:a("groups")}),a("or"),e(h,{className:"kc-users-link-empty-state",variant:"link",onClick:()=>m(`/${o}/users`),children:a("users")}),a("noUsersEmptyStateDescriptionContinued")]})}),columns:[{name:"username",displayKey:"userName",cellFormatters:[I()]},{name:"email",displayKey:"email",cellFormatters:[I()]},{name:"lastName",displayKey:"lastName",cellFormatters:[I()]},{name:"firstName",displayKey:"firstName",cellFormatters:[ye(),I()]}]})})};function xt(){const m=Me(),{t:o}=Y(),a=ge({mode:"onChange"}),{control:w,reset:E,setValue:K}=a,b=X(),{id:r,clientId:i}=_(),{pathname:d}=ve(),{realm:c}=J(),[B,ee]=D(0),[te,S]=D(),x=()=>ee(B+1),{addAlert:C,addError:A}=we(),[P,L]=D(!1),oe=t=>{const{attributes:s,...p}=t;return{attributes:Ne(s),...p}},n=j({control:w,defaultValue:void 0,name:"name"}),V=j({control:w,defaultValue:!1,name:"composite"}),[k,ae]=D();Ce(async()=>{const[t,s]=await Promise.all([l.realms.findOne({realm:c}),l.roles.findOneById({id:r})]);return{realm:t,role:s}},({realm:t,role:s})=>{if(!t||!s)throw new Error(o("notFound"));const p=oe(s);E(p),S(p.attributes),ae(t)},[B]);const M=async t=>{try{const{attributes:s,...p}=t,f=p;f.name=f.name?.trim(),f.attributes=ke(s),i?await l.clients.updateRole({id:i,roleName:t.name},f):await l.roles.updateById({id:r},f),S(s),C(o("roleSaveSuccess"),F.success)}catch(s){A("roleSaveError",s)}},O=Q(Te.path),u=Q(De.path),se=()=>{if(O)return G({realm:c});if(u)return z({realm:c,clientId:u.params.clientId,tab:"roles"});throw new Error("Roles overview route could not be determined.")},T=t=>{if(O)return Ie({realm:c,id:r,tab:t});if(u)return Fe({realm:c,id:r,clientId:u.params.clientId,tab:t});throw new Error("Route could not be determined.")},R=t=>Le(T(t)),re=R("details"),le=R("associated-roles"),ie=R("attributes"),ne=R("users-in-role"),ce=R("permissions"),[U,me]=H({titleKey:"roleDeleteConfirm",messageKey:o("roleDeleteConfirmDialog",{selectedRoleName:n||o("createRole")}),continueButtonLabel:"delete",continueButtonVariant:q.danger,onConfirm:async()=>{try{i?await l.clients.delRole({id:i,roleName:n}):await l.roles.delById({id:r}),C(o("roleDeletedSuccess"),F.success),b(se())}catch(t){A("roleDeleteError",t)}}}),de=d.includes("associated-roles")?[e(N,{component:"button",onClick:()=>ue(),children:o("removeAllAssociatedRoles")},"delete-all-associated"),e(N,{component:"button",onClick:()=>{U()},children:o("deleteRole")},"delete-role")]:[e(N,{"data-testid":"add-roles",component:"button",onClick:()=>be(),children:o("addAssociatedRolesText")},"toggle-modal"),e(N,{component:"button",onClick:()=>U(),children:o("deleteRole")},"delete-role")],[ue,pe]=H({titleKey:o("removeAllAssociatedRoles")+"?",messageKey:o("removeAllAssociatedRolesConfirmDialog",{name:n||o("createRole")}),continueButtonLabel:"delete",continueButtonVariant:q.danger,onConfirm:async()=>{try{const t=await l.roles.getCompositeRoles({id:r});await l.roles.delCompositeRoles({id:r},t),C(o("compositeRoleOff"),F.success,o("compositesRemovedAlertDescription")),b(T("details")),x()}catch(t){A("roleDeleteError",t)}}}),be=()=>{L(!P)},W=async t=>{try{await l.roles.createComposite({roleId:r,realm:k.realm},t),x(),b(T("associated-roles")),C(o("addAssociatedRolesSuccess"),F.success)}catch(s){A("addAssociatedRolesError",s)}},$=t=>k?.defaultRole&&k.defaultRole.name===t;return k?v(Re,{children:[e(me,{}),e(pe,{}),P&&e(Se,{id:r,type:"roles",name:n,onAssign:t=>W(t.map(s=>s.role)),onClose:()=>L(!1)}),e(Ve,{titleKey:n,badges:[{id:"composite-role-badge",text:V?o("composite"):"",readonly:!0}],actionsDropdownId:"roles-actions-dropdown",dropdownItems:de,divider:!1}),e(Z,{variant:"light",className:"pf-u-p-0",children:v(Pe,{isBox:!0,mountOnEnter:!0,defaultLocation:T("details"),children:[e(y,{title:e(g,{children:o("details")}),...re,children:e(Be,{form:a,onSubmit:M,role:u?"manage-clients":"manage-realm",cancelLink:u?z({realm:c,clientId:i,tab:"roles"}):G({realm:c}),editMode:!0})}),V&&e(y,{"data-testid":"associatedRolesTab",title:e(g,{children:o("associatedRolesText")}),...le,children:e(xe,{name:n,id:r,type:"roles",isManager:!0,save:t=>W(t.map(s=>s.role))})}),!$(n)&&e(y,{"data-testid":"attributesTab",className:"kc-attributes-tab",title:e(g,{children:o("attributes")}),...ie,children:e(Ee,{form:a,save:M,reset:()=>K("attributes",te,{shouldDirty:!1})})}),!$(n)&&e(y,{title:e(g,{children:o("usersInRole")}),...ne,children:e(je,{"data-cy":"users-in-role-tab"})}),m(Oe.AdminFineGrainedAuthz)&&e(y,{title:e(g,{children:o("permissions")}),...ce,children:e(Ke,{id:r,type:"roles"})})]})})]}):e(Ae,{})}export{xt as default};
//# sourceMappingURL=RealmRoleTabs--vYqA43N.js.map