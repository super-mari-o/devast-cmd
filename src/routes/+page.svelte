<script lang="ts">
    import { ai } from "$lib/ai";

    const arr: string[] = [];
    for (const row of ai.slice(1)) {
        const [day, night] = row[2]
            .split("/")
            .map((v) => v.trim())
            .map(Number);
        arr.push(`!AI-speed=${row[0]}:${day}:${night}`);
    }
    for (const row of ai.slice(1)) {
        const [day, night] = row[3]
            .split("/")
            .map((v) => v.trim())
            .map(Number);
        arr.push(`!AI-damage=${row[0]}:${day}:${night}`);
    }
    for (const row of ai.slice(1)) {
        arr.push(`!AI-life=${row[0]}:${row[1]}`);
    }
    arr.push("!harvest-speed=1");
    arr.push("!xp=1");
</script>

<textarea>{arr.join("\n")}</textarea>
