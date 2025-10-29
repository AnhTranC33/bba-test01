// Bài 1
let playerName = 'Mario';
let currentLives = 3;
const lv1Coins = 25;
const lv2Coins = 30;
const lv3Coins = 45;

const avgCoinPerLevel = (lv1Coins + lv2Coins + lv3Coins) / 3;
const mod = (lv1Coins + lv2Coins + lv3Coins) % 3;

//Print average coins per level
console.log(`Hi ${playerName}, you have average ${avgCoinPerLevel} coins per level.`);
//Print remain coins
console.log(`Remain coins after divided by 3 is: ${mod} coins.`);