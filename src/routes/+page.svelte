<script lang="ts">
  import { ai } from "$lib/ai";
  import { maze } from "$lib/maze";

  let mapEditorCode = $state("");
  let mapEditorCodeCmd: string[] = $state([]);
  const handleCut = () => {
    const list = mapEditorCode
      .trim()
      .split("!")
      .filter((v) => v)
      .map((v) => v.split(":"));
    const m = new Map();
    for (const arr of list) {
      if (arr.length === 4) {
        const key = arr[0];
        m.set(key, (m.get(key) ?? 0) + 1);
      }
    }
    mapEditorCodeCmd = [];
    for (const arr of list) {
      if (arr.length === 4) {
        const key = arr[0];
        if ((m.get(key) ?? 0) > 256) continue;
      }
      mapEditorCodeCmd.push(`!${arr.join(":")}`);
    }
  };

  const usefulCmd: string[] = [];
  usefulCmd.push("!start-record");
  usefulCmd.push("!stop-record");

  const initCmd: string[] = [];
  for (const row of ai.slice(1)) {
    const [day, night] = row[2]
      .split("/")
      .map((v) => v.trim())
      .map(Number);
    initCmd.push(`!AI-speed=${row[0]}:${day}:${night}`);
  }
  for (const row of ai.slice(1)) {
    const [day, night] = row[3]
      .split("/")
      .map((v) => v.trim())
      .map(Number);
    initCmd.push(`!AI-damage=${row[0]}:${day}:${night}`);
  }
  for (const row of ai.slice(1)) {
    initCmd.push(`!AI-life=${row[0]}:${row[1]}`);
  }
  initCmd.push("!harvest-speed=1");
  initCmd.push("!xp=1");
  initCmd.push("!regeneration-on");
  initCmd.push("!clean-starter-kit");
  initCmd.push("!timer-record=20");
  initCmd.push("harvest-speed=1");
  initCmd.push("!xp=1");
  initCmd.push("!spawn-random");

  initCmd.push("!gauge-food-decrease=12");
  initCmd.push("!gauge-cold-decrease=35");
  initCmd.push("!gauge-cold-increase=50");
  initCmd.push("!gauge-stamina-decrease=200");
  initCmd.push("!gauge-stamina-increase=150");
  initCmd.push("!gauge-rad-decrease=240");
  initCmd.push("!gauge-life-decrease=50");
  initCmd.push("!gauge-life-increase=50");

  const ownCmd: string[] = [];
  ownCmd.push("!regeneration-on");
  ownCmd.push("!ghoul-regeneration-on");
  ownCmd.push("!house-regeneration-off");
  ownCmd.push("!vegetation-regeneration-off");
  ownCmd.push("!clean-starter-kit");
  ownCmd.push("!add-starter-kit=stone_axe");
  ownCmd.push("!add-starter-kit=steel_pickaxe");
  ownCmd.push("!add-starter-kit=mp5");
  ownCmd.push("!add-starter-kit=armor_fire_2");
  ownCmd.push("!add-starter-kit=alloys*11");
  ownCmd.push("!add-starter-kit=steel*45");
  ownCmd.push("!add-starter-kit=junk*14");
  ownCmd.push("!add-starter-kit=workbench2*1");

  ownCmd.push("harvest-speed=10");
  ownCmd.push("!xp=20");
  ownCmd.push("!spawn-loot-on");
  ownCmd.push("!spawn-loot-timer=5");
  ownCmd.push("!spawn-loot-factor=59");
  ownCmd.push("!timer-record=20");
  ownCmd.push("!spawn=1:1:19:19");

  ownCmd.push("!gauge-food-decrease=1");
  ownCmd.push("!gauge-cold-decrease=0");
  ownCmd.push("!gauge-cold-increase=9999");
  ownCmd.push("!gauge-stamina-decrease=0");
  ownCmd.push("!gauge-stamina-increase=9999");
  ownCmd.push("!gauge-rad-decrease=0");
  ownCmd.push("!gauge-life-decrease=50");
  ownCmd.push("!gauge-life-increase=200");

  const mazeCmd: string[] = [];
  const makeWall = (x: number, y: number) => `!b=29:${x}:${y}:0`;
  for (const [y, row] of maze.entries()) {
    for (const [x, v] of row.entries()) {
      if (!v) continue;
      for (const _y of Array(3).keys()) {
        for (const _x of Array(3).keys()) {
          mazeCmd.push(makeWall(x * 3 + _x, y * 3 + _y));
        }
      }
    }
  }
</script>

<!-- よく使うコマンド -->
<div class="mb-8 max-w-xl mx-auto">
  <label
    for="initCmd"
    class="block mb-2 text-xs font-bold text-green-400 tracking-widest uppercase"
  >
    よく使うコマンド
  </label>
  <textarea
    id="initCmd"
    class="w-full h-40 p-3 rounded-md resize-none font-mono text-sm bg-black text-green-400 border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/60 focus:border-green-500 shadow-md"
    readonly>{usefulCmd.join("\n")}</textarea
  >
</div>

<!-- 入力欄 & ボタン -->
<div class="mb-8 max-w-xl mx-auto flex gap-2">
  <input
    type="text"
    bind:value={mapEditorCode}
    placeholder="MAP EDITOR CODEを入力"
    class="flex-1 p-2 rounded-md bg-black text-green-400 border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/60 focus:border-green-500 shadow-md font-mono text-sm"
  />

  <button
    onclick={handleCut}
    class="px-4 py-2 rounded-md bg-green-600 text-black font-bold tracking-widest uppercase hover:bg-green-500 active:bg-green-700 transition"
  >
    削減
  </button>
</div>

<!-- 削減後コマンド -->
<div class="mb-8 max-w-xl mx-auto">
  <label
    for="initCmd"
    class="block mb-2 text-xs font-bold text-green-400 tracking-widest uppercase"
  >
    削減後コマンド
  </label>
  <textarea
    id="initCmd"
    class="w-full h-40 p-3 rounded-md resize-none font-mono text-sm bg-black text-green-400 border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/60 focus:border-green-500 shadow-md"
    readonly>{mapEditorCodeCmd.join("\n")}</textarea
  >
</div>

<!-- 初期化コマンド -->
<div class="mb-8 max-w-xl mx-auto">
  <label
    for="initCmd"
    class="block mb-2 text-xs font-bold text-green-400 tracking-widest uppercase"
  >
    初期化コマンド
  </label>
  <textarea
    id="initCmd"
    class="w-full h-40 p-3 rounded-md resize-none font-mono text-sm bg-black text-green-400 border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/60 focus:border-green-500 shadow-md"
    readonly>{initCmd.join("\n")}</textarea
  >
</div>

<!-- 自作マップ用設定コマンド -->
<div class="mb-8 max-w-xl mx-auto">
  <label
    for="ownCmd"
    class="block mb-2 text-xs font-bold text-green-400 tracking-widest uppercase"
  >
    自作マップ用設定コマンド
  </label>
  <textarea
    id="ownCmd"
    class="w-full h-40 p-3 rounded-md resize-none font-mono text-sm bg-black text-green-400 border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/60 focus:border-green-500 shadow-md"
    readonly>{ownCmd.join("\n")}</textarea
  >
</div>

<!-- 迷路マップ生成用コマンド -->
<div class="mb-8 max-w-xl mx-auto">
  <label
    for="mazeCmd"
    class="block mb-2 text-xs font-bold text-green-400 tracking-widest uppercase"
  >
    迷路マップ生成用コマンド
  </label>
  <textarea
    id="mazeCmd"
    class="w-full h-40 p-3 rounded-md resize-none font-mono text-sm bg-black text-green-400 border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/60 focus:border-green-500 shadow-md"
    readonly>{mazeCmd.join("\n")}</textarea
  >
</div>
