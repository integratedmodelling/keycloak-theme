import{bE as g,dn as o,dp as v,db as x,dq as I,de as _,cj as c,dr as p,c3 as B}from"./index-C9t2UlUN.js";function K(n,r,e,s){if(!g(n))return n;r=o(r,n);for(var t=-1,f=r.length,d=f-1,i=n;i!=null&&++t<f;){var a=v(r[t]),u=e;if(a==="__proto__"||a==="constructor"||a==="prototype")return n;if(t!=d){var l=i[a];u=s?s(l,a,i):void 0,u===void 0&&(u=g(l)?l:x(r[t+1])?[]:{})}I(i,a,u),i=i[a]}return n}function P(n,r,e){for(var s=-1,t=r.length,f={};++s<t;){var d=r[s],i=_(n,d);e(i,d)&&K(f,o(d,n),i)}return f}function q(n,r){if(n==null)return{};var e=c(p(n),function(s){return[s]});return r=B(r),P(n,e,function(s,t){return r(s,t[0])})}export{q as p};
//# sourceMappingURL=pickBy-3m0iiQTY.js.map