function E(){}function et(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function W(){return Object.create(null)}function $(t){t.forEach(J)}function H(t){return typeof t=="function"}function bt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let k;function wt(t,e){return k||(k=document.createElement("a")),k.href=e,t===k.href}function nt(t){return Object.keys(t).length===0}function it(t,...e){if(t==null)return E;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function $t(t,e,n){t.$$.on_destroy.push(it(e,n))}function vt(t,e,n,i){if(t){const r=K(t,e,n,i);return t[0](r)}}function K(t,e,n,i){return t[1]&&i?et(n.ctx.slice(),t[1](i(e))):n.ctx}function Et(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)u[o]=e.dirty[o]|r[o];return u}return e.dirty|r}return e.dirty}function Nt(t,e,n,i,r,u){if(r){const s=K(e,n,i,u);t.p(s,r)}}function St(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function At(t){return t??""}function kt(t){return t&&H(t.destroy)?t.destroy:E}const Mt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;let T=!1;function rt(){T=!0}function st(){T=!1}function ct(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function lt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:ct(1,r,d=>e[n[d]].claim_order,l))-1;i[c]=n[f]+1;const _=f+1;n[_]=c,r=Math.max(_,r)}const u=[],s=[];let o=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(u.push(e[c-1]);o>=c;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);u.reverse(),s.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<s.length;c++){for(;l<u.length&&s[c].claim_order>=u[l].claim_order;)l++;const f=l<u.length?u[l]:null;t.insertBefore(s[c],f)}}function ot(t,e){if(T){for(lt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Tt(t,e,n){T&&!n?ot(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ut(t){t.parentNode&&t.parentNode.removeChild(t)}function jt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function at(t){return document.createElement(t)}function ft(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function P(t){return document.createTextNode(t)}function Ct(){return P(" ")}function Dt(){return P("")}function Lt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Ot(t){return function(e){return e.preventDefault(),t.call(this,e)}}function qt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function dt(t){return Array.from(t.childNodes)}function _t(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Q(t,e,n,i,r=!1){_t(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function U(t,e,n,i){return Q(t,r=>r.nodeName===e,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||u.push(o.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Bt(t,e,n){return U(t,e,n,at)}function Ht(t,e,n){return U(t,e,n,ft)}function ht(t,e){return Q(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>P(e),!0)}function Pt(t){return ht(t," ")}function zt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ft(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Rt(t,e,n){t.classList[n?"add":"remove"](e)}function Wt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const u=r.textContent.trim();u===`HEAD_${t}_END`?(i-=1,n.push(r)):u===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Gt(t,e){return new t(e)}let N;function v(t){N=t}function V(){if(!N)throw new Error("Function called outside component initialization");return N}function It(t){V().$$.on_mount.push(t)}function Jt(t){V().$$.after_update.push(t)}const b=[],G=[];let w=[];const I=[],X=Promise.resolve();let q=!1;function Y(){q||(q=!0,X.then(Z))}function Kt(){return Y(),X}function B(t){w.push(t)}const O=new Set;let x=0;function Z(){if(x!==0)return;const t=N;do{try{for(;x<b.length;){const e=b[x];x++,v(e),mt(e.$$)}}catch(e){throw b.length=0,x=0,e}for(v(null),b.length=0,x=0;G.length;)G.pop()();for(let e=0;e<w.length;e+=1){const n=w[e];O.has(n)||(O.add(n),n())}w.length=0}while(b.length);for(;I.length;)I.pop()();q=!1,O.clear(),v(t)}function mt(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}function pt(t){const e=[],n=[];w.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),w=e}const M=new Set;let g;function Qt(){g={r:0,c:[],p:g}}function Ut(){g.r||$(g.c),g=g.p}function tt(t,e){t&&t.i&&(M.delete(t),t.i(e))}function Vt(t,e,n,i){if(t&&t.o){if(M.has(t))return;M.add(t),g.c.push(()=>{M.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Xt(t,e){t.d(1),e.delete(t.key)}function Yt(t,e,n,i,r,u,s,o,c,l,f,_){let d=t.length,m=u.length,h=d;const j={};for(;h--;)j[t[h].key]=h;const S=[],C=new Map,D=new Map,z=[];for(h=m;h--;){const a=_(r,u,h),p=n(a);let y=s.get(p);y?i&&z.push(()=>y.p(a,e)):(y=l(p,a),y.c()),C.set(p,S[h]=y),p in j&&D.set(p,Math.abs(h-j[p]))}const F=new Set,R=new Set;function L(a){tt(a,1),a.m(o,f),s.set(a.key,a),f=a.first,m--}for(;d&&m;){const a=S[m-1],p=t[d-1],y=a.key,A=p.key;a===p?(f=a.first,d--,m--):C.has(A)?!s.has(y)||F.has(y)?L(a):R.has(A)?d--:D.get(y)>D.get(A)?(R.add(y),L(a)):(F.add(A),d--):(c(p,s),d--)}for(;d--;){const a=t[d];C.has(a.key)||c(a,s)}for(;m;)L(S[m-1]);return $(z),S}function Zt(t){t&&t.c()}function te(t,e){t&&t.l(e)}function yt(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||B(()=>{const s=t.$$.on_mount.map(J).filter(H);t.$$.on_destroy?t.$$.on_destroy.push(...s):$(s),t.$$.on_mount=[]}),u.forEach(B)}function gt(t,e){const n=t.$$;n.fragment!==null&&(pt(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function xt(t,e){t.$$.dirty[0]===-1&&(b.push(t),Y(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ee(t,e,n,i,r,u,s,o=[-1]){const c=N;v(t);const l=t.$$={fragment:null,ctx:[],props:u,update:E,not_equal:r,bound:W(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:W(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};s&&s(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return l.ctx&&r(l.ctx[_],l.ctx[_]=h)&&(!l.skip_bound&&l.bound[_]&&l.bound[_](h),f&&xt(t,_)),d}):[],l.update(),f=!0,$(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){rt();const _=dt(e.target);l.fragment&&l.fragment.l(_),_.forEach(ut)}else l.fragment&&l.fragment.c();e.intro&&tt(t.$$.fragment),yt(t,e.target,e.anchor,e.customElement),st(),Z()}v(c)}class ne{$destroy(){gt(this,1),this.$destroy=E}$on(e,n){if(!H(n))return E;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!nt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{yt as A,gt as B,ft as C,Ht as D,wt as E,ot as F,E as G,$t as H,vt as I,Nt as J,St as K,Et as L,Wt as M,Rt as N,Lt as O,kt as P,Yt as Q,$ as R,ne as S,Mt as T,Xt as U,H as V,Ot as W,jt as X,At as Y,Ct as a,Tt as b,Pt as c,Vt as d,Dt as e,Ut as f,tt as g,ut as h,ee as i,Jt as j,at as k,Bt as l,dt as m,qt as n,It as o,Ft as p,P as q,ht as r,bt as s,Kt as t,zt as u,Qt as v,G as w,Gt as x,Zt as y,te as z};