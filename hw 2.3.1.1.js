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

let scores = [];

players.forEach((player) => {
  scores.push(player.scorePoints);
});
console.log(scores);

const bestPlayer = players.find(
  (player) => player.scorePoints === Math.max(...scores)
);

console.log(bestPlayer);
