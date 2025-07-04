<script lang="ts">
  import { ai } from "$lib/ai";
  import { maze } from "$lib/maze";

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
  initCmd.push("!ghoul-regeneration-on");
  initCmd.push("!house-regeneration-on");
  initCmd.push("!vegetation-regeneration-on");
  initCmd.push("!clean-starter-kit");
  initCmd.push("!timer-record=20");
  initCmd.push("!spawn-random");

  const ownCmd: string[] = [];
  ownCmd.push("!regeneration-off");
  ownCmd.push("!ghoul-regeneration-on");
  ownCmd.push("!house-regeneration-off");
  ownCmd.push("!vegetation-regeneration-off");
  ownCmd.push("!clean-starter-kit");
  ownCmd.push("!add-starter-kit=hachet");
  ownCmd.push("!add-starter-kit=headscarf");
  ownCmd.push("!add-starter-kit=soda*1");
  ownCmd.push("!add-starter-kit=can*1");
  ownCmd.push("!add-starter-kit=tomato*4");
  ownCmd.push("!add-starter-kit=wood_wall*5");
  ownCmd.push("!add-starter-kit=campfire*1");
  ownCmd.push("!add-starter-kit=wood*4");
  ownCmd.push("!spawn=1:1");
  ownCmd.push("!spawn-loot=45");
  ownCmd.push("!spawn-loot-timer=4");
  ownCmd.push("!spawn-loot-on");
  ownCmd.push("!timer-record=20");
  ownCmd.push("!spawn=1:1:19:19");

  const mazeCmd: string[] = [];
  const makeWall = (x: number, y: number) => `!b=29:${x}:${y}:0`;
  for (const [y, row] of maze.entries()) {
    for (const [x, v] of row.entries()) {
      if (v) mazeCmd.push(makeWall(x, y));
    }
  }
</script>

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
