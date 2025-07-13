import"../chunks/CWj6FrbW.js";import{h as p,i as ce,I as de,s as X,k as Z,m as ue,o as fe,aA as me,aB as ge,aC as be,aD as _e,U as ve,af as xe,M as pe,aw as O,am as F,p as he,a6 as ke,r as i,a7 as we,a2 as _,q as ye,O as Ae,u as f,an as x,v as m}from"../chunks/Dq3uFF6L.js";import{d as $e}from"../chunks/Dfka0sWU.js";function g(e){p&&ce(e)!==null&&de(e)}let ee=!1;function re(){ee||(ee=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function Ie(e){var t=ue,r=fe;X(null),Z(null);try{return e()}finally{X(t),Z(r)}}function Ce(e,t,r,a=r){e.addEventListener(t,()=>Ie(r));const o=e.__on_r;o?e.__on_r=()=>{o(),a(!0)}:e.__on_r=()=>a(!0),re()}const Ne=Symbol("is custom element"),ze=Symbol("is html");function Me(e){if(p){var t=!1,r=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var a=e.value;te(e,"value",null),e.value=a}if(e.hasAttribute("checked")){var o=e.checked;te(e,"checked",null),e.checked=o}}};e.__on_r=r,ge(r),re()}}function b(e,t){var r=ae(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function te(e,t,r,a){var o=ae(e);p&&(o[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||o[t]!==(o[t]=r)&&(t==="loading"&&(e[be]=r),e.removeAttribute(t))}function ae(e){return e.__attributes??(e.__attributes={[Ne]:e.nodeName.includes("-"),[ze]:e.namespaceURI===me})}function je(e,t,r=t){var a=_e();Ce(e,"input",o=>{var n=o?e.defaultValue:e.value;if(n=T(e)?P(n):n,r(n),a&&n!==(n=t())){var l=e.selectionStart,c=e.selectionEnd;e.value=n??"",c!==null&&(e.selectionStart=l,e.selectionEnd=Math.min(c,e.value.length))}}),(p&&e.defaultValue!==e.value||ve(t)==null&&e.value)&&r(T(e)?P(e.value):e.value),xe(()=>{var o=t();T(e)&&o===P(e.value)||e.type==="date"&&!o&&!e.value||o!==e.value&&(e.value=o??"")})}function T(e){var t=e.type;return t==="number"||t==="range"}function P(e){return e===""?null:+e}const Ee=`
!AI-speed=hal_bot:60:60
!AI-damage=hal_bot:3:3
!AI-life=hal_bot:1024
!AI-speed=tesla_bot:60:60
!AI-damage=tesla_bot:4:4
!AI-life=tesla_bot:4096
`,oe=[["","life","speed [day / night]","damages [day / night]","aggro"],["normal_ghoul","160","12 / 22","8 / 20","16min"],["fast_ghoul","120","18 / 28","3 / 7","32min"],["explosive_ghoul","80","12 / 23","6 / 20","48min"],["radioactive_ghoul","160","12 / 23","5 / 15","64min"],["armored_ghoul","800","12 / 23","20 / 50","80min"],["pumpkin_ghoul","160","4 / 4","20 / 30","16min"],["lapabot_repair","600","8 / 8","30 / 30","0"],["hal_bot","800","12 / 12","30 / 30","0"],["tesla_bot","3000","10 / 10","80 / 80","0"]],G=oe.slice(1),h=[];for(const e of G){const[t,r]=e[2].split("/").map(a=>a.trim()).map(Number);h.push(`!AI-speed=${e[0]}:${t}:${r}`)}for(const e of G){const[t,r]=e[3].split("/").map(a=>a.trim()).map(Number);h.push(`!AI-damage=${e[0]}:${t}:${r}`)}for(const e of G){const t=Number(e[1]);h.push(`!AI-life=${e[0]}:${t}`)}const Se=h.join(`
`),Le=`
!AI-speed=pumpkin_ghoul:4:4
!AI-damage=pumpkin_ghoul:32:64
!AI-life=pumpkin_ghoul:1024
`,B=oe.slice(1,-3),k=[];for(const e of B){const[t,r]=e[2].split("/").map(a=>a.trim()).map(Number);k.push(`!AI-speed=${e[0]}:${t}:${r}`)}for(const e of B){const[t,r]=e[3].split("/").map(a=>a.trim()).map(Number);k.push(`!AI-damage=${e[0]}:${t*.6|0}:${r*.6|0}`)}for(const e of B){const t=Number(e[1]);k.push(`!AI-life=${e[0]}:${t*.6|0}`)}const Oe=k.join(`
`),Te=`
!gauge-food-decrease=0
!gauge-cold-decrease=0
!gauge-cold-increase=9999
!gauge-stamina-decrease=0
!gauge-stamina-increase=9999
!gauge-rad-decrease=0
!gauge-life-decrease=50
!gauge-life-increase=200
`,Pe=`
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
`,Ge=`
!clean-starter-kit
!timer-starter-kit=0
!add-starter-kit=stone_axe
!add-starter-kit=steel_pickaxe
!add-starter-kit=mp5
!add-starter-kit=bullet_9mm
!add-starter-kit=armor_fire_1
`,Be=`

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
`,De=`

11111111111111111111111111111
10100010001010001000100000001
10101010101010101010101010111
10101000100010100010001010001
10101011111110111111111110101
10101000100010100000100000101
10101110101110111010111111101
10101010100000100010000010001
10101010101110101110111011101
10100010001000100010001010001
10111111111010111011101010111
10100000000010001000101000101
10111011111111111010101111101
10000010000000001010100000101
11111111111011101110111110101
10000010000000101000100010101
10111010111110101011101010101
10100010001000101010101000101
10101111101011101010101111101
10101000001010100010001000101
10101011111010111111111011101
10101000100010000000000010001
10101110101110111111111010111
10101010101000100000001010001
10101010101110101111111011101
10100010100010100000000010101
10111110111010111011111110101
10000000100000100000000000001
11111111111111111111111111111

`.trim().split(`
`).map(e=>e.split("").map(Number)),Re=(e,t,r,a)=>{const o=_(t).trim().split("!").filter(l=>l).map(l=>l.trim().split(":")),n=new Map;for(const l of o)if(l.length===4){const c=l[0];n.set(c,(n.get(c)??0)+1)}x(r,[],!0),x(a,[],!0);for(const l of o){const c=`!${l.join(":")}`;if(l.length===4){const u=l[0];if((n.get(u)??0)>256){_(r).push(c);continue}}_(a).push(c)}x(a,["!timer-record=7","!clean-record","!start-record",..._(a),"!stop-record"],!0)};var Ue=he('<div class="mb-8 max-w-xl mx-auto"><label for="initCmd" class="block mb-2 text-xs font-bold text-green-400 tracking-widest uppercase">よく使うコマンド</label> <textarea id="initCmd" class="w-full h-40 p-3 rounded-md resize-none font-mono text-sm bg-black text-green-400 border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/60 focus:border-green-500 shadow-md" readonly=""></textarea></div> <div class="mb-8 max-w-xl mx-auto flex gap-2"><input type="text" placeholder="MAP EDITOR CODEを入力" class="flex-1 p-2 rounded-md bg-black text-green-400 border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/60 focus:border-green-500 shadow-md font-mono text-sm"/> <button class="px-4 py-2 rounded-md bg-green-600 text-black font-bold tracking-widest uppercase hover:bg-green-500 active:bg-green-700 transition">分離</button></div> <div class="mb-8 max-w-xl mx-auto"><label for="initCmd" class="block mb-2 text-xs font-bold text-green-400 tracking-widest uppercase">記録非推奨コマンド（先に設置）</label> <textarea id="initCmd" class="w-full h-40 p-3 rounded-md resize-none font-mono text-sm bg-black text-green-400 border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/60 focus:border-green-500 shadow-md" readonly=""></textarea></div> <div class="mb-8 max-w-xl mx-auto"><label for="initCmd" class="block mb-2 text-xs font-bold text-green-400 tracking-widest uppercase">記録用コマンド（後に設置）</label> <textarea id="initCmd" class="w-full h-40 p-3 rounded-md resize-none font-mono text-sm bg-black text-green-400 border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/60 focus:border-green-500 shadow-md" readonly=""></textarea></div> <div class="mb-8 max-w-xl mx-auto"><label for="initCmd" class="block mb-2 text-xs font-bold text-green-400 tracking-widest uppercase">初期化コマンド</label> <textarea id="initCmd" class="w-full h-40 p-3 rounded-md resize-none font-mono text-sm bg-black text-green-400 border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/60 focus:border-green-500 shadow-md" readonly=""></textarea></div> <div class="mb-8 max-w-xl mx-auto"><label for="ownCmd" class="block mb-2 text-xs font-bold text-green-400 tracking-widest uppercase">自作マップ用設定コマンド</label> <textarea id="ownCmd" class="w-full h-40 p-3 rounded-md resize-none font-mono text-sm bg-black text-green-400 border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/60 focus:border-green-500 shadow-md" readonly=""></textarea></div> <div class="mb-8 max-w-xl mx-auto"><label for="mazeCmd" class="block mb-2 text-xs font-bold text-green-400 tracking-widest uppercase">迷路マップ生成用コマンド</label> <textarea id="mazeCmd" class="w-full h-40 p-3 rounded-md resize-none font-mono text-sm bg-black text-green-400 border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/60 focus:border-green-500 shadow-md" readonly=""></textarea></div> <div class="mb-8 max-w-xl mx-auto"><label for="fillCmd" class="block mb-2 text-xs font-bold text-green-400 tracking-widest uppercase">埋め立てマップ生成用コマンド</label> <textarea id="fillCmd" class="w-full h-40 p-3 rounded-md resize-none font-mono text-sm bg-black text-green-400 border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/60 focus:border-green-500 shadow-md" readonly=""></textarea></div>',1);function Ke(e,t){pe(t,!0);let r=O(""),a=O(F([])),o=O(F([]));const n=s=>s.trim().split(`
`),l=n(Be),c=n(Pe).concat(n(Se)),u=[...c];u.push(...n(Te)),u.push(...n(Oe)),u.push(...n(Le)),u.push(...n(Ee)),u.push(...n(Ge));const D=[],ne=(s,d)=>`!b=27:${s}:${d}:0`,se=(s,d)=>`!b=29:${s}:${d}:0`,v=5;for(const[s,d]of De.entries())for(const[M,j]of d.entries())for(const E of Array(v).keys())for(const S of Array(v).keys()){const L=M*v+S,le=s*v+E;j&&D.push(se(L,le))}const R=[];for(let s=0;s<150;s++)for(let d=0;d<150;d++)Math.random()<.9&&R.push(ne(d,s));var U=Ue(),w=ke(U),W=i(f(w),2);g(W),m(w);var y=i(w,2),A=f(y);Me(A);var ie=i(A,2);ie.__click=[Re,r,a,o],m(y);var $=i(y,2),q=i(f($),2);g(q),m($);var I=i($,2),H=i(f(I),2);g(H),m(I);var C=i(I,2),K=i(f(C),2);g(K),m(C);var N=i(C,2),V=i(f(N),2);g(V),m(N);var z=i(N,2),Y=i(f(z),2);g(Y),m(z);var J=i(z,2),Q=i(f(J),2);g(Q),m(J),we((s,d,M,j,E,S,L)=>{b(W,s),b(q,d),b(H,M),b(K,j),b(V,E),b(Y,S),b(Q,L)},[()=>l.join(`
`),()=>_(a).join(`
`),()=>_(o).join(`
`),()=>c.join(`
`),()=>u.join(`
`),()=>D.join(`
`),()=>R.join(`
`)]),je(A,()=>_(r),s=>x(r,s)),ye(e,U),Ae()}$e(["click"]);export{Ke as component};
