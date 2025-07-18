<script lang="ts">
    import { ai_fastBot } from "$lib/cmd/ai/fast-bot";
    import { ai_init } from "$lib/cmd/ai/init";
    import { ai_strongPumpkinGhoul } from "$lib/cmd/ai/strong-pumpkin-ghoul";
    import { ai_weakGhoul } from "$lib/cmd/ai/weak-ghoul";
    import { easyGauge } from "$lib/cmd/easy-gauge";
    import { init } from "$lib/cmd/init";
    import { starterKit_enjoyBeginner } from "$lib/cmd/starter-kit/enjoy-beginner";
    import { util } from "$lib/cmd/util";
    import { maze } from "$lib/maze";

    let mapEditorCode = $state("");
    let mapEditorCodeCmd: string[] = $state([]);
    let mapEditorCodeCmdForRecord: string[] = $state([]);
    const handleCut = () => {
        const list = mapEditorCode
            .trim()
            .split("!")
            .filter((v) => v)
            .map((v) => v.trim().split(":"));
        const m = new Map();
        for (const arr of list) {
            if (arr.length === 4) {
                const key = arr[0];
                m.set(key, (m.get(key) ?? 0) + 1);
            }
        }
        mapEditorCodeCmd = [];
        mapEditorCodeCmdForRecord = [];
        for (const arr of list) {
            const cmd = `!${arr.join(":")}`;
            if (arr.length === 4) {
                const key = arr[0];
                if ((m.get(key) ?? 0) > 256) {
                    mapEditorCodeCmd.push(cmd);
                    continue;
                }
            }
            mapEditorCodeCmdForRecord.push(cmd);
        }
        mapEditorCodeCmdForRecord = [
            "!timer-record=7",
            "!clean-record",
            "!start-record",
            ...mapEditorCodeCmdForRecord,
            "!stop-record",
        ];
    };

    const toArray = (cmd: string) => cmd.trim().split("\n");
    const utilCmd = toArray(util);
    const initCmd = toArray(init).concat(toArray(ai_init));

    const ownCmd = [...initCmd];
    ownCmd.push(...toArray(easyGauge));
    ownCmd.push(...toArray(ai_weakGhoul));
    ownCmd.push(...toArray(ai_strongPumpkinGhoul));
    ownCmd.push(...toArray(ai_fastBot));
    ownCmd.push(...toArray(starterKit_enjoyBeginner));

    const mazeCmd: string[] = [];
    const makeWoodenWall = (x: number, y: number) => `!b=27:${x}:${y}:0`;
    const makeMetalWall = (x: number, y: number) => `!b=29:${x}:${y}:0`;
    const makeBunkerWall = (x: number, y: number) => `!b=153:${x}:${y}:0`;
    const makeFloor1 = (x: number, y: number) => `!b=62:${x}:${y}:0`;
    const makeFloor2 = (x: number, y: number) => `!b=67:${x}:${y}:0`;
    const zoom = 5;
    // maze
    for (const [my, row] of maze.entries()) {
        for (const [mx, v] of row.entries()) {
            // kernel
            for (const ky of Array(zoom).keys()) {
                for (const kx of Array(zoom).keys()) {
                    const x = mx * zoom + kx;
                    const y = my * zoom + ky;
                    if (v) {
                        mazeCmd.push(makeBunkerWall(x, y));
                    } else {
                    }
                }
            }
        }
    }

    const fillCmd: string[] = [];
    for (let y = 0; y < 150; y++) {
        for (let x = 0; x < 150; x++) {
            if (Math.random() < 0.9) {
                fillCmd.push(makeWoodenWall(x, y));
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
        readonly>{utilCmd.join("\n")}</textarea
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
        分離
    </button>
</div>

<!-- 記録非推奨コマンド -->
<div class="mb-8 max-w-xl mx-auto">
    <label
        for="initCmd"
        class="block mb-2 text-xs font-bold text-green-400 tracking-widest uppercase"
    >
        記録非推奨コマンド（先に設置）
    </label>
    <textarea
        id="initCmd"
        class="w-full h-40 p-3 rounded-md resize-none font-mono text-sm bg-black text-green-400 border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/60 focus:border-green-500 shadow-md"
        readonly>{mapEditorCodeCmd.join("\n")}</textarea
    >
</div>

<!-- 記録用コマンド -->
<div class="mb-8 max-w-xl mx-auto">
    <label
        for="initCmd"
        class="block mb-2 text-xs font-bold text-green-400 tracking-widest uppercase"
    >
        記録用コマンド（後に設置）
    </label>
    <textarea
        id="initCmd"
        class="w-full h-40 p-3 rounded-md resize-none font-mono text-sm bg-black text-green-400 border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/60 focus:border-green-500 shadow-md"
        readonly>{mapEditorCodeCmdForRecord.join("\n")}</textarea
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

<!-- 埋め立てマップ生成用コマンド -->
<div class="mb-8 max-w-xl mx-auto">
    <label
        for="fillCmd"
        class="block mb-2 text-xs font-bold text-green-400 tracking-widest uppercase"
    >
        埋め立てマップ生成用コマンド
    </label>
    <textarea
        id="fillCmd"
        class="w-full h-40 p-3 rounded-md resize-none font-mono text-sm bg-black text-green-400 border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/60 focus:border-green-500 shadow-md"
        readonly>{fillCmd.join("\n")}</textarea
    >
</div>
