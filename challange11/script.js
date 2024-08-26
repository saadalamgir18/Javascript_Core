players1 = [
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
players2 = [
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
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [gk0, fieldPlayers0] = game.players[0];
const [gk1, ...fieldPlayers1] = game.players[1];
const allPlayers = [...game.players[0], ...game.players[1]];
const players1Final = [...game.players[0], "Thiago", "Coutinho", "Perisic"];
const { team1, x: draw, team2 } = game.odds;
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals("Davies", "Muller");
printGoals(...game.score.split(":"));
team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");
