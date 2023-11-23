const players = [
  {
    id: 1,
    name: "Ivan",
    scorePoints: 4500,
  },
  {
    id: 2,
    name: "Petr",
    scorePoints: 3600,
  },
  {
    id: 3,
    name: "Vadim",
    scorePoints: 3433,
  },
  {
    id: 4,
    name: "Olga",
    scorePoints: 2356,
  },
];

let score = [];

players.forEach((player) => {
  score.push(player.scorePoints);
});
console.log(score);

const bestPlayer = players.find(
  (player) =>
    player.scorePoints ===
    Math.max(
      players[0].scorePoints,
      players[1].scorePoints,
      players[2].scorePoints,
      players[3].scorePoints
    )
);

console.log(bestPlayer);
