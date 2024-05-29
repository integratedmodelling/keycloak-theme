import{a,aE as u,b as c,aF as l,aC as p,S as d,aG as f}from"./index-cF5ei3Lq.js";import{jsx as o}from"react/jsx-runtime";import{useState as h,useMemo as P,lazy as C,Suspense as _}from"react";import"react-dom";function i(e,n){for(const t of e){if("path"in t&&t.path.endsWith(n)&&"modulePath"in t)return t.modulePath;if("children"in t)return i(t.children,n)}}const j=()=>{const e=a(),[n,t]=h(),{componentId:r}=u();c(m=>f({signal:m,context:e}),t);const s=P(()=>i(n||[],r),[n,r]);return s&&o(v,{modulePath:s})},v=({modulePath:e})=>{const{environment:n}=a(),t=C(()=>l(()=>import(p(n.resourceUrl,e)),__vite__mapDeps([]),import.meta.url));return o(_,{fallback:o(d,{}),children:o(t,{})})};export{j as ContentComponent,j as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=ContentComponent-B5ShcYj7.js.map
