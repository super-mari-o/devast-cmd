import"../chunks/CWj6FrbW.js";import{h,i as d0,I as u0,s as Z,k as F,m as f0,o as m0,aD as g0,aE as b0,aF as _0,aG as v0,U as x0,ai as p0,ac as v,M as h0,az as T,ap as e0,p as k0,a7 as w0,r as l,a8 as y0,a3 as _,q as A0,O as $0,u as f,aq as p,v as m}from"../chunks/zCHpgmD3.js";import{d as I0}from"../chunks/2e6dZNVd.js";function g(e){h&&d0(e)!==null&&u0(e)}let a0=!1;function r0(){a0||(a0=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var a;if(!e.defaultPrevented)for(const t of e.target.elements)(a=t.__on_r)==null||a.call(t)})},{capture:!0}))}function C0(e){var a=f0,t=m0;Z(null),F(null);try{return e()}finally{Z(a),F(t)}}function N0(e,a,t,r=t){e.addEventListener(a,()=>C0(t));const s=e.__on_r;s?e.__on_r=()=>{s(),r(!0)}:e.__on_r=()=>r(!0),r0()}const z0=Symbol("is custom element"),E0=Symbol("is html");function S0(e){if(h){var a=!1,t=()=>{if(!a){if(a=!0,e.hasAttribute("value")){var r=e.value;t0(e,"value",null),e.value=r}if(e.hasAttribute("checked")){var s=e.checked;t0(e,"checked",null),e.checked=s}}};e.__on_r=t,b0(t),r0()}}function b(e,a){var t=o0(e);t.value===(t.value=a??void 0)||e.value===a&&(a!==0||e.nodeName!=="PROGRESS")||(e.value=a??"")}function t0(e,a,t,r){var s=o0(e);h&&(s[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName==="LINK")||s[a]!==(s[a]=t)&&(a==="loading"&&(e[_0]=t),e.removeAttribute(a))}function o0(e){return e.__attributes??(e.__attributes={[z0]:e.nodeName.includes("-"),[E0]:e.namespaceURI===g0})}function j0(e,a,t=a){var r=v0(),s=new WeakSet;N0(e,"input",n=>{var o=n?e.defaultValue:e.value;if(o=G(e)?P(o):o,t(o),v!==null&&s.add(v),r&&o!==(o=a())){var u=e.selectionStart,c=e.selectionEnd;e.value=o??"",c!==null&&(e.selectionStart=u,e.selectionEnd=Math.min(c,e.value.length))}}),(h&&e.defaultValue!==e.value||x0(a)==null&&e.value)&&(t(G(e)?P(e.value):e.value),v!==null&&s.add(v)),p0(()=>{var n=a();e===document.activeElement&&s.has(v)||G(e)&&n===P(e.value)||e.type==="date"&&!n&&!e.value||n!==e.value&&(e.value=n??"")})}function G(e){var a=e.type;return a==="number"||a==="range"}function P(e){return e===""?null:+e}const M0=`
!AI-speed=hal_bot:60:60
!AI-damage=hal_bot:3:3
!AI-life=hal_bot:1024
!AI-speed=tesla_bot:60:60
!AI-damage=tesla_bot:4:4
!AI-life=tesla_bot:4096
`,n0=[["","life","speed [day / night]","damages [day / night]","aggro"],["normal_ghoul","160","12 / 22","8 / 20","16min"],["fast_ghoul","120","18 / 28","3 / 7","32min"],["explosive_ghoul","80","12 / 23","6 / 20","48min"],["radioactive_ghoul","160","12 / 23","5 / 15","64min"],["armored_ghoul","800","12 / 23","20 / 50","80min"],["pumpkin_ghoul","160","4 / 4","20 / 30","16min"],["lapabot_repair","600","8 / 8","30 / 30","0"],["hal_bot","800","12 / 12","30 / 30","0"],["tesla_bot","3000","10 / 10","80 / 80","0"]],B=n0.slice(1),k=[];for(const e of B){const[a,t]=e[2].split("/").map(r=>r.trim()).map(Number);k.push(`!AI-speed=${e[0]}:${a}:${t}`)}for(const e of B){const[a,t]=e[3].split("/").map(r=>r.trim()).map(Number);k.push(`!AI-damage=${e[0]}:${a}:${t}`)}for(const e of B){const a=Number(e[1]);k.push(`!AI-life=${e[0]}:${a}`)}const L0=k.join(`
`),O0=`
!AI-speed=pumpkin_ghoul:4:4
!AI-damage=pumpkin_ghoul:32:64
!AI-life=pumpkin_ghoul:1024
`,D=n0.slice(1,-3),w=[];for(const e of D){const[a,t]=e[2].split("/").map(r=>r.trim()).map(Number);w.push(`!AI-speed=${e[0]}:${a}:${t}`)}for(const e of D){const[a,t]=e[3].split("/").map(r=>r.trim()).map(Number);w.push(`!AI-damage=${e[0]}:${a*.6|0}:${t*.6|0}`)}for(const e of D){const a=Number(e[1]);w.push(`!AI-life=${e[0]}:${a*.6|0}`)}const T0=w.join(`
`),G0=`
!gauge-food-decrease=0
!gauge-cold-decrease=0
!gauge-cold-increase=9999
!gauge-stamina-decrease=0
!gauge-stamina-increase=9999
!gauge-rad-decrease=0
!gauge-life-decrease=50
!gauge-life-increase=200
`,P0=`
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
`,B0=`
!clean-starter-kit
!timer-starter-kit=0
!add-starter-kit=stone_axe
!add-starter-kit=steel_pickaxe
!add-starter-kit=mp5
!add-starter-kit=bullet_9mm
!add-starter-kit=armor_fire_1
`,D0=`

マップ初期化
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
`,W0=`

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
`).map(e=>e.split("").map(Number)),q0=(e,a,t,r)=>{const s=_(a).trim().split("!").filter(o=>o).map(o=>o.trim().split(":")),n=new Map;for(const o of s)if(o.length===4){const u=o[0];n.set(u,(n.get(u)??0)+1)}p(t,[],!0),p(r,[],!0);for(const o of s){const u=`!${o.join(":")}`;if(o.length===4){const c=o[0];if((n.get(c)??0)>256){_(t).push(u);continue}}_(r).push(u)}p(r,["!timer-record=7","!clean-record","!start-record",..._(r),"!stop-record"],!0)};var R0=k0('<div class="mb-8 max-w-xl mx-auto"><label for="initCmd" class="block mb-2 text-xs font-bold text-green-400 tracking-widest uppercase">よく使うコマンド</label> <textarea id="initCmd" class="w-full h-40 p-3 rounded-md resize-none font-mono text-sm bg-black text-green-400 border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/60 focus:border-green-500 shadow-md" readonly=""></textarea></div> <div class="mb-8 max-w-xl mx-auto flex gap-2"><input type="text" placeholder="MAP EDITOR CODEを入力" class="flex-1 p-2 rounded-md bg-black text-green-400 border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/60 focus:border-green-500 shadow-md font-mono text-sm"/> <button class="px-4 py-2 rounded-md bg-green-600 text-black font-bold tracking-widest uppercase hover:bg-green-500 active:bg-green-700 transition">分離</button></div> <div class="mb-8 max-w-xl mx-auto"><label for="initCmd" class="block mb-2 text-xs font-bold text-green-400 tracking-widest uppercase">記録非推奨コマンド（先に設置）</label> <textarea id="initCmd" class="w-full h-40 p-3 rounded-md resize-none font-mono text-sm bg-black text-green-400 border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/60 focus:border-green-500 shadow-md" readonly=""></textarea></div> <div class="mb-8 max-w-xl mx-auto"><label for="initCmd" class="block mb-2 text-xs font-bold text-green-400 tracking-widest uppercase">記録用コマンド（後に設置）</label> <textarea id="initCmd" class="w-full h-40 p-3 rounded-md resize-none font-mono text-sm bg-black text-green-400 border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/60 focus:border-green-500 shadow-md" readonly=""></textarea></div> <div class="mb-8 max-w-xl mx-auto"><label for="initCmd" class="block mb-2 text-xs font-bold text-green-400 tracking-widest uppercase">初期化コマンド</label> <textarea id="initCmd" class="w-full h-40 p-3 rounded-md resize-none font-mono text-sm bg-black text-green-400 border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/60 focus:border-green-500 shadow-md" readonly=""></textarea></div> <div class="mb-8 max-w-xl mx-auto"><label for="ownCmd" class="block mb-2 text-xs font-bold text-green-400 tracking-widest uppercase">自作マップ用設定コマンド</label> <textarea id="ownCmd" class="w-full h-40 p-3 rounded-md resize-none font-mono text-sm bg-black text-green-400 border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/60 focus:border-green-500 shadow-md" readonly=""></textarea></div> <div class="mb-8 max-w-xl mx-auto"><label for="mazeCmd" class="block mb-2 text-xs font-bold text-green-400 tracking-widest uppercase">迷路マップ生成用コマンド</label> <textarea id="mazeCmd" class="w-full h-40 p-3 rounded-md resize-none font-mono text-sm bg-black text-green-400 border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/60 focus:border-green-500 shadow-md" readonly=""></textarea></div> <div class="mb-8 max-w-xl mx-auto"><label for="fillCmd" class="block mb-2 text-xs font-bold text-green-400 tracking-widest uppercase">埋め立てマップ生成用コマンド</label> <textarea id="fillCmd" class="w-full h-40 p-3 rounded-md resize-none font-mono text-sm bg-black text-green-400 border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/60 focus:border-green-500 shadow-md" readonly=""></textarea></div>',1);function V0(e,a){h0(a,!0);let t=T(""),r=T(e0([])),s=T(e0([]));const n=i=>i.trim().split(`
`),o=n(D0),u=n(P0).concat(n(L0)),c=[...u];c.push(...n(G0)),c.push(...n(T0)),c.push(...n(O0)),c.push(...n(M0)),c.push(...n(B0));const W=[],s0=(i,d)=>`!b=27:${i}:${d}:0`,i0=(i,d)=>`!b=153:${i}:${d}:0`,x=5;for(const[i,d]of W0.entries())for(const[S,j]of d.entries())for(const M of Array(x).keys())for(const L of Array(x).keys()){const O=S*x+L,c0=i*x+M;j&&W.push(i0(O,c0))}const q=[];for(let i=0;i<150;i++)for(let d=0;d<150;d++)Math.random()<.9&&q.push(s0(d,i));var R=R0(),y=w0(R),U=l(f(y),2);g(U),m(y);var A=l(y,2),$=f(A);S0($);var l0=l($,2);l0.__click=[q0,t,r,s],m(A);var I=l(A,2),H=l(f(I),2);g(H),m(I);var C=l(I,2),K=l(f(C),2);g(K),m(C);var N=l(C,2),V=l(f(N),2);g(V),m(N);var z=l(N,2),Y=l(f(z),2);g(Y),m(z);var E=l(z,2),J=l(f(E),2);g(J),m(E);var Q=l(E,2),X=l(f(Q),2);g(X),m(Q),y0((i,d,S,j,M,L,O)=>{b(U,i),b(H,d),b(K,S),b(V,j),b(Y,M),b(J,L),b(X,O)},[()=>o.join(`
`),()=>_(r).join(`
`),()=>_(s).join(`
`),()=>u.join(`
`),()=>c.join(`
`),()=>W.join(`
`),()=>q.join(`
`)]),j0($,()=>_(t),i=>p(t,i)),A0(e,R),$0()}I0(["click"]);export{V0 as component};
