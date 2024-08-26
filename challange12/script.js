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

for (const [i, player] of game.scored.entries()) {
  console.log(`Gload ${i}: ${player}`);
}

for (const odd of Object.values(game.odds)) {
  console.log(odd);
}

for (const [key, value] of Object.entries(game.odds)) {
  console.log(`Odd of ${game?.[key] ?? "draw"}: ${value}`);
}
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
