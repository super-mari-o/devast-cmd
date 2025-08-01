import { ai } from "$lib/ai";

const list = ai.slice(1, -3);

const cmd = [];
for (const row of list) {
	const [day, night] = row[2]
		.split("/")
		.map((v) => v.trim())
		.map(Number);
	cmd.push(`!AI-speed=${row[0]}:${day}:${night}`);
}
for (const row of list) {
	const [day, night] = row[3]
		.split("/")
		.map((v) => v.trim())
		.map(Number);
	cmd.push(`!AI-damage=${row[0]}:${(day * 0.6) | 0}:${(night * 0.6) | 0}`);
}
for (const row of list) {
	const life = Number(row[1]);
	cmd.push(`!AI-life=${row[0]}:${(life * 0.6) | 0}`);
}

export const ai_weakGhoul = cmd.join("\n");
