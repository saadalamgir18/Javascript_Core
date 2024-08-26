const players1 = [
  "Neuer",
  "Pavard",
  "Martinez",
  "Alaba",
  "Davies",
  "Kimmich",
  "Goretzka",
  "Coman",
  "Muller",
  "Gnarby",
  "Lewandowski",
];
const players2 = [
  "Burki",
  "Schulz",
  "Hummels",
  "Akjanji",
  "Hakimi",
  "Wigi",
  "Witsel",
  "Hazard",
  "Brandt",
  "Sancho",
  "Gotze",
];
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [players1, players2],
  score: "4:0",
  date: "Nov 9th 2037",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);
for (const [min, ev] of gameEvents.entries()) {
  console.log(ev);
  if (min >= 64 && ev === "🔶 Yellow card") {
    gameEvents.delete(min);
  }
}

console.log(gameEvents);
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

for (const [min, ev] of gameEvents.entries()) {
  if (min <= 45) {
    console.log(`[FIRST HALF] ${min}: ${ev}`);
  } else {
    console.log(`[SECOND HALF] ${min}: ${ev}`);
  }
}
