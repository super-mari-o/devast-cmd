<script lang="ts">
    import { ai_fastBot } from "$lib/cmd/ai/fast-bot";
    import { ai_init } from "$lib/cmd/ai/init";
    import { ai_strongPumpkinGhoul } from "$lib/cmd/ai/strong-pumpkin-ghoul";
    import { ai_weakGhoul } from "$lib/cmd/ai/weak-ghoul";
    import { ai_weakestGhoul } from "$lib/cmd/ai/weakest-ghoul";
    import { easyGauge } from "$lib/cmd/easy-gauge";
    import { init } from "$lib/cmd/init";
    import { starterKit_easyBuilder } from "$lib/cmd/starter-kit/easy-builder";
    import { starterKit_enjoyBeginner } from "$lib/cmd/starter-kit/enjoy-beginner";
    import { starterKit_gunfightOnFilledMap } from "$lib/cmd/starter-kit/gunfight-on-filled-map";
    import { util } from "$lib/cmd/util";
    import { maze } from "$lib/maze";

    const toArray = (cmd: string) => cmd.trim().split("\n");
    const utilCmd = toArray(util);
    const initCmd = toArray(init).concat(toArray(ai_init));

    let ownCmd: string[] = $state([]);

    let useGaugeType: "easy" | "none" = $state("easy");

    let useWeakGhoulFlag: "weak" | "weakest" | "none" = $state("weakest");
    let useStrongPumpkinGhoul = $state(false);
    let useFastBot = $state(false);

    let useStarterKit:
        | "easy-builder"
        | "enjoy-beginner"
        | "gunfight-on-filled-map"
        | "none" = $state("easy-builder");

    $effect(() => {
        const arr = [...initCmd];
        switch (useGaugeType) {
            case "easy":
                arr.push(...toArray(easyGauge));
                break;
        }
        switch (useWeakGhoulFlag) {
            case "weak":
                arr.push(...toArray(ai_weakGhoul));
                break;
            case "weakest":
                arr.push(...toArray(ai_weakestGhoul));
                break;
        }
        if (useStrongPumpkinGhoul) {
            arr.push(...toArray(ai_strongPumpkinGhoul));
        }
        if (useFastBot) {
            arr.push(...toArray(ai_fastBot));
        }
        switch (useStarterKit) {
            case "easy-builder":
                arr.push(...toArray(starterKit_easyBuilder));
                break;
            case "enjoy-beginner":
                arr.push(...toArray(starterKit_enjoyBeginner));
                break;
            case "gunfight-on-filled-map":
                arr.push(...toArray(starterKit_gunfightOnFilledMap));
                break;
        }
        ownCmd = arr;
    });

    // 迷路マップ用
    const mazeCmd: string[] = [];
    const makeWoodenWall = (x: number, y: number) => `!b=27:${x}:${y}:0`;
    const makeMetalWall = (x: number, y: number) => `!b=29:${x}:${y}:0`;
    const makeBunkerWall = (x: number, y: number) => `!b=153:${x}:${y}:0`;
    const makeFloor1 = (x: number, y: number) => `!b=62:${x}:${y}:0`;
    const makeFloor2 = (x: number, y: number) => `!b=67:${x}:${y}:0`;
    const zoom = 5;
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

    // 埋め立てマップ用
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

<!-- 自作マップ設定コマンド -->
<div class="mb-8 max-w-xl mx-auto space-y-4">
    <div>
        <div class="text-green-300 text-sm mb-1">ゲージ消費</div>
        <label class="block text-green-200 text-sm">
            <input
                type="radio"
                value="easy"
                bind:group={useGaugeType}
                class="accent-green-500"
            />
            ゲージ消費なし
        </label>
        <label class="block text-green-200 text-sm">
            <input
                type="radio"
                value="none"
                bind:group={useGaugeType}
                class="accent-green-500"
            />
            そのまま
        </label>
    </div>

    <h2 class="text-green-300 font-bold text-sm tracking-widest uppercase">
        AI 設定
    </h2>

    <div>
        <div class="text-green-300 text-sm mb-1">グールの強さ</div>
        <label class="block text-green-200 text-sm">
            <input
                type="radio"
                value="weak"
                bind:group={useWeakGhoulFlag}
                class="accent-green-500"
            />
            グール弱化
        </label>
        <label class="block text-green-200 text-sm">
            <input
                type="radio"
                value="weakest"
                bind:group={useWeakGhoulFlag}
                class="accent-green-500"
            />
            グール最弱化
        </label>
        <label class="block text-green-200 text-sm">
            <input
                type="radio"
                value="none"
                bind:group={useWeakGhoulFlag}
                class="accent-green-500"
            />
            そのまま
        </label>
    </div>

    <label class="flex items-center space-x-2 text-green-200 text-sm">
        <input
            type="checkbox"
            bind:checked={useStrongPumpkinGhoul}
            class="accent-green-500"
        />
        <span>カボチャグール超強化</span>
    </label>

    <label class="flex items-center space-x-2 text-green-200 text-sm">
        <input
            type="checkbox"
            bind:checked={useFastBot}
            class="accent-green-500"
        />
        <span>HALボット高速移動化</span>
    </label>

    <div>
        <div class="text-green-300 text-sm mb-1">スターターキット</div>
        <label class="block text-green-200 text-sm">
            <input
                type="radio"
                value="easy-builder"
                bind:group={useStarterKit}
                class="accent-green-500"
            />
            いつもの
        </label>
        <label class="block text-green-200 text-sm">
            <input
                type="radio"
                value="enjoy-beginner"
                bind:group={useStarterKit}
                class="accent-green-500"
            />
            初心者向けセット
        </label>
        <label class="block text-green-200 text-sm">
            <input
                type="radio"
                value="gunfight-on-filled-map"
                bind:group={useStarterKit}
                class="accent-green-500"
            />
            壁破壊セット
        </label>
        <label class="block text-green-200 text-sm">
            <input
                type="radio"
                value="none"
                bind:group={useStarterKit}
                class="accent-green-500"
            />
            使用しない
        </label>
    </div>

    <label
        for="ownCmd"
        class="block mt-6 mb-2 text-xs font-bold text-green-400 tracking-widest uppercase"
    >
        自作マップ設定コマンド
    </label>
    <textarea
        id="ownCmd"
        class="w-full h-40 p-3 rounded-md resize-none font-mono text-sm bg-black text-green-400 border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/60 focus:border-green-500 shadow-md"
        readonly>{ownCmd.join("\n")}</textarea
    >
</div>
