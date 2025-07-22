import"../chunks/Bzak7iHL.js";import{h as y,i as N0,I as C0,p as p0,q as v0,v as S0,w as j0,aD as G0,aE as E0,aF as L0,ai as y0,t as M0,aj as b0,U as O0,aG as P0,M as T0,az as k,ap as z0,Q as B0,a3 as i,aq as m,j as K0,a7 as q0,l as c,a8 as F0,k as R0,O as D0,s as l,r as d,m as g}from"../chunks/DqyipWNs.js";function V(e){y&&N0(e)!==null&&C0(e)}let h0=!1;function A0(){h0||(h0=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var a;if(!e.defaultPrevented)for(const t of e.target.elements)(a=t.__on_r)==null||a.call(t)})},{capture:!0}))}function H0(e){var a=S0,t=j0;p0(null),v0(null);try{return e()}finally{p0(a),v0(t)}}function I0(e,a,t,s=t){e.addEventListener(a,()=>H0(t));const n=e.__on_r;n?e.__on_r=()=>{n(),s(!0)}:e.__on_r=()=>s(!0),A0()}const U0=Symbol("is custom element"),Q0=Symbol("is html");function p(e){if(y){var a=!1,t=()=>{if(!a){if(a=!0,e.hasAttribute("value")){var s=e.value;k0(e,"value",null),e.value=s}if(e.hasAttribute("checked")){var n=e.checked;k0(e,"checked",null),e.checked=n}}};e.__on_r=t,E0(t),A0()}}function X(e,a){var t=$0(e);t.value===(t.value=a??void 0)||e.value===a&&(a!==0||e.nodeName!=="PROGRESS")||(e.value=a??"")}function k0(e,a,t,s){var n=$0(e);y&&(n[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName==="LINK")||n[a]!==(n[a]=t)&&(a==="loading"&&(e[L0]=t),e.removeAttribute(a))}function $0(e){return e.__attributes??(e.__attributes={[U0]:e.nodeName.includes("-"),[Q0]:e.namespaceURI===G0})}const Z=new Set;function b(e,a,t,s,n=s){var u=t.getAttribute("type")==="checkbox",_=e;let x=!1;if(a!==null)for(var h of a)_=_[h]??(_[h]=[]);_.push(t),I0(t,"change",()=>{var o=t.__value;u&&(o=w0(_,o,t.checked)),n(o)},()=>n(u?[]:null)),y0(()=>{var o=s();if(y&&t.defaultChecked!==t.checked){x=!0;return}u?(o=o||[],t.checked=o.includes(t.__value)):t.checked=P0(t.__value,o)}),M0(()=>{var o=_.indexOf(t);o!==-1&&_.splice(o,1)}),Z.has(_)||(Z.add(_),b0(()=>{_.sort((o,f)=>o.compareDocumentPosition(f)===4?-1:1),Z.delete(_)})),b0(()=>{if(x){var o;if(u)o=w0(_,o,t.checked);else{var f=_.find(w=>w.checked);o=f==null?void 0:f.__value}n(o)}})}function x0(e,a,t=a){I0(e,"change",s=>{var n=s?e.defaultChecked:e.checked;t(n)}),(y&&e.defaultChecked!==e.checked||O0(a)==null)&&t(e.checked),y0(()=>{var s=a();e.checked=!!s})}function w0(e,a,t){for(var s=new Set,n=0;n<e.length;n+=1)e[n].checked&&s.add(e[n].__value);return t||s.delete(a),Array.from(s)}const W0=`
!AI-speed=hal_bot:60:60
!AI-damage=hal_bot:3:3
!AI-life=hal_bot:1024
!AI-speed=tesla_bot:60:60
!AI-damage=tesla_bot:4:4
!AI-life=tesla_bot:4096
`,e0=[["","life","speed [day / night]","damages [day / night]","aggro"],["normal_ghoul","160","12 / 22","8 / 20","16min"],["fast_ghoul","120","18 / 28","3 / 7","32min"],["explosive_ghoul","80","12 / 23","6 / 20","48min"],["radioactive_ghoul","160","12 / 23","5 / 15","64min"],["armored_ghoul","800","12 / 23","20 / 50","80min"],["pumpkin_ghoul","160","4 / 4","20 / 30","16min"],["lapabot_repair","600","8 / 8","30 / 30","0"],["hal_bot","800","12 / 12","30 / 30","0"],["tesla_bot","3000","10 / 10","80 / 80","0"]],a0=e0.slice(1),L=[];for(const e of a0){const[a,t]=e[2].split("/").map(s=>s.trim()).map(Number);L.push(`!AI-speed=${e[0]}:${a}:${t}`)}for(const e of a0){const[a,t]=e[3].split("/").map(s=>s.trim()).map(Number);L.push(`!AI-damage=${e[0]}:${a}:${t}`)}for(const e of a0){const a=Number(e[1]);L.push(`!AI-life=${e[0]}:${a}`)}const Y0=L.join(`
`),J0=`
!AI-speed=pumpkin_ghoul:4:4
!AI-damage=pumpkin_ghoul:32:64
!AI-life=pumpkin_ghoul:1024
`,t0=e0.slice(1,-3),M=[];for(const e of t0){const[a,t]=e[2].split("/").map(s=>s.trim()).map(Number);M.push(`!AI-speed=${e[0]}:${a}:${t}`)}for(const e of t0){const[a,t]=e[3].split("/").map(s=>s.trim()).map(Number);M.push(`!AI-damage=${e[0]}:${a*.6|0}:${t*.6|0}`)}for(const e of t0){const a=Number(e[1]);M.push(`!AI-life=${e[0]}:${a*.6|0}`)}const V0=M.join(`
`),r0=e0.slice(1,-3),O=[];for(const e of r0){const[a,t]=e[2].split("/").map(s=>s.trim()).map(Number);O.push(`!AI-speed=${e[0]}:${a}:${t}`)}for(const e of r0){const[a,t]=e[3].split("/").map(s=>s.trim()).map(Number);O.push(`!AI-damage=${e[0]}:0:0`)}for(const e of r0)Number(e[1]),O.push(`!AI-life=${e[0]}:1`);const X0=O.join(`
`),Z0=`
!gauge-food-decrease=0
!gauge-cold-decrease=0
!gauge-cold-increase=9999
!gauge-stamina-decrease=0
!gauge-stamina-increase=9999
!gauge-rad-decrease=0
!gauge-life-decrease=50
!gauge-life-increase=200
`,ee=`
!regeneration-on
!clean-starter-kit
!timer-starter-kit=0
!harvest-speed=1
!xp=1
!spawn-random

!gauge-food-decrease=12
!gauge-cold-decrease=35
!gauge-cold-increase=50
!gauge-stamina-decrease=200
!gauge-stamina-increase=150
!gauge-rad-decrease=240
!gauge-life-decrease=50
!gauge-life-increase=50
`,ae=`
!clean-starter-kit
!timer-starter-kit=0
!add-starter-kit=sulfur_pickaxe
!add-starter-kit=sulfur_axe
!add-starter-kit=workbench2*5
!add-starter-kit=shaped_metal
!add-starter-kit=alloys
!add-starter-kit=shaped_uranium
!add-starter-kit=electronics
!add-starter-kit=wire
`,te=`
!clean-starter-kit
!timer-starter-kit=0
!add-starter-kit=stone_axe
!add-starter-kit=steel_pickaxe
!add-starter-kit=mp5
!add-starter-kit=bullet_9mm
!add-starter-kit=armor_fire_1
`,re=`
!clean-starter-kit
!timer-starter-kit=0
!add-starter-kit=sulfur_pickaxe
!add-starter-kit=sulfur_axe
!add-starter-kit=super_hammer
!add-starter-kit=energy_cells
!add-starter-kit=energy_cells
!add-starter-kit=energy_cells
!add-starter-kit=armor_tesla_2
!add-starter-kit=laser_submachine
`,se=`

マップ掃除
!regeneration-off
!ghoul-regeneration-off
!house-regeneration-off
!vegetation-regeneration-off
!clean-record
!clean-map

自作マップ注入
!clean-record
!start-record
!stop-record
!timer-record=32

アイテム復活
!spawn-loot-on
!spawn-loot-timer=5
!spawn-loot-factor=59

スポーン地点
!spawn-random
!spawn=0:0:8:9
!spawn=25:9:41:19
!spawn=20:0:50:30

収穫速度 & レベリング効率
!harvest-speed=10
!xp=20

無敵
!immortal-on
!immortal-off
`,ne=`

00000000000000000000000000000
10000000000000101010000000101
10000000000010100000000010101
10000000000010000000000000001
10000000000011000000000010101
10000000000000000000000010001
11000000000000000000000000101
10001110100000000000000000101
11001000100000000000000001101
10010000001000000000000010001
10111000000000000000000100101
10100000000000000000000000101
10101100000000010000001100111
10100000000000000000001000001
10111000000000010000101111001
10100000000000000000100010001
10101110000000000001010010101
10100000000000000000001000101
10011110000000000000010000101
10000000000000000000000010001
10011100100000000000000001100
10001000000000000000000000000
10111000000000000000000000100
10000010100000000000000000000
10000100100000000000000000000
10000000000010000000000000101
00101011101010011100000000100
10101000001000000000000000001
11111111110111111111111111111

`.trim().split(`
`).map(e=>e.split("").map(Number));var oe=K0('<div class="mb-8 max-w-xl mx-auto"><label for="initCmd" class="block mb-2 text-xs font-bold text-green-400 tracking-widest uppercase">よく使うコマンド</label> <textarea id="initCmd" class="w-full h-40 p-3 rounded-md resize-none font-mono text-sm bg-black text-green-400 border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/60 focus:border-green-500 shadow-md" readonly=""></textarea></div> <div class="mb-8 max-w-xl mx-auto"><label for="initCmd" class="block mb-2 text-xs font-bold text-green-400 tracking-widest uppercase">初期化コマンド</label> <textarea id="initCmd" class="w-full h-40 p-3 rounded-md resize-none font-mono text-sm bg-black text-green-400 border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/60 focus:border-green-500 shadow-md" readonly=""></textarea></div> <div class="mb-8 max-w-xl mx-auto space-y-4"><div><div class="text-green-300 text-sm mb-1">ゲージ消費</div> <label class="block text-green-200 text-sm"><input type="radio" class="accent-green-500"/> ゲージ消費なし</label> <label class="block text-green-200 text-sm"><input type="radio" class="accent-green-500"/> そのまま</label></div> <h2 class="text-green-300 font-bold text-sm tracking-widest uppercase">AI 設定</h2> <div><div class="text-green-300 text-sm mb-1">グールの強さ</div> <label class="block text-green-200 text-sm"><input type="radio" class="accent-green-500"/> グール弱化</label> <label class="block text-green-200 text-sm"><input type="radio" class="accent-green-500"/> グール最弱化</label> <label class="block text-green-200 text-sm"><input type="radio" class="accent-green-500"/> そのまま</label></div> <label class="flex items-center space-x-2 text-green-200 text-sm"><input type="checkbox" class="accent-green-500"/> <span>カボチャグール超強化</span></label> <label class="flex items-center space-x-2 text-green-200 text-sm"><input type="checkbox" class="accent-green-500"/> <span>HALボット高速移動化</span></label> <div><div class="text-green-300 text-sm mb-1">スターターキット</div> <label class="block text-green-200 text-sm"><input type="radio" class="accent-green-500"/> いつもの</label> <label class="block text-green-200 text-sm"><input type="radio" class="accent-green-500"/> 初心者向けセット</label> <label class="block text-green-200 text-sm"><input type="radio" class="accent-green-500"/> 壁破壊セット</label> <label class="block text-green-200 text-sm"><input type="radio" class="accent-green-500"/> 使用しない</label></div> <label for="ownCmd" class="block mt-6 mb-2 text-xs font-bold text-green-400 tracking-widest uppercase">自作マップ設定コマンド</label> <textarea id="ownCmd" class="w-full h-40 p-3 rounded-md resize-none font-mono text-sm bg-black text-green-400 border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/60 focus:border-green-500 shadow-md" readonly=""></textarea></div>',1);function _e(e,a){T0(a,!0);const t=[],s=[],n=[],u=r=>r.trim().split(`
`),_=u(se),x=u(ee).concat(u(Y0));let h=k(z0([])),o=k("easy"),f=k("weakest"),w=k(!1),P=k(!1),v=k("easy-builder");B0(()=>{const r=[...x];switch(i(o)){case"easy":r.push(...u(Z0));break}switch(i(f)){case"weak":r.push(...u(V0));break;case"weakest":r.push(...u(X0));break}switch(i(w)&&r.push(...u(J0)),i(P)&&r.push(...u(W0)),i(v)){case"easy-builder":r.push(...u(ae));break;case"enjoy-beginner":r.push(...u(te));break;case"gunfight-on-filled-map":r.push(...u(re));break}m(h,r,!0)});const s0=5;for(const[r,J]of ne.entries())for(const[g0,le]of J.entries())for(const ie of Array(s0).keys())for(const ce of Array(s0).keys());var n0=oe(),T=q0(n0),o0=l(c(T),2);V(o0),d(T);var z=l(T,2),l0=l(c(z),2);V(l0),d(z);var i0=l(z,2),B=c(i0),K=l(c(B),2),A=c(K);p(A),A.value=A.__value="easy",g(),d(K);var c0=l(K,2),I=c(c0);p(I),I.value=I.__value="none",g(),d(c0),d(B);var q=l(B,4),F=l(c(q),2),$=c(F);p($),$.value=$.__value="weak",g(),d(F);var R=l(F,2),N=c(R);p(N),N.value=N.__value="weakest",g(),d(R);var d0=l(R,2),C=c(d0);p(C),C.value=C.__value="none",g(),d(d0),d(q);var D=l(q,2),u0=c(D);p(u0),g(2),d(D);var H=l(D,2),_0=c(H);p(_0),g(2),d(H);var U=l(H,2),Q=l(c(U),2),S=c(Q);p(S),S.value=S.__value="easy-builder",g(),d(Q);var W=l(Q,2),j=c(W);p(j),j.value=j.__value="enjoy-beginner",g(),d(W);var Y=l(W,2),G=c(Y);p(G),G.value=G.__value="gunfight-on-filled-map",g(),d(Y);var f0=l(Y,2),E=c(f0);p(E),E.value=E.__value="none",g(),d(f0),d(U);var m0=l(U,4);V(m0),d(i0),F0((r,J,g0)=>{X(o0,r),X(l0,J),X(m0,g0)},[()=>_.join(`
`),()=>x.join(`
`),()=>i(h).join(`
`)]),b(t,[],A,()=>i(o),r=>m(o,r)),b(t,[],I,()=>i(o),r=>m(o,r)),b(s,[],$,()=>i(f),r=>m(f,r)),b(s,[],N,()=>i(f),r=>m(f,r)),b(s,[],C,()=>i(f),r=>m(f,r)),x0(u0,()=>i(w),r=>m(w,r)),x0(_0,()=>i(P),r=>m(P,r)),b(n,[],S,()=>i(v),r=>m(v,r)),b(n,[],j,()=>i(v),r=>m(v,r)),b(n,[],G,()=>i(v),r=>m(v,r)),b(n,[],E,()=>i(v),r=>m(v,r)),R0(e,n0),D0()}export{_e as component};
