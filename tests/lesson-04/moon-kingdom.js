//Bài 1

function createCharacters(chars, threshold) {

    const charactersPowerUps = chars.map(newChar => {
        const upperName = newChar.name.toUpperCase();
        const newLevel = newChar.level * 2;
        const newHealth = newChar.health * 3;
        return {
            name: upperName,
            level: newLevel,
            health: newHealth
        };
    });

    const possibleWinners = charactersPowerUps.filter(filteredChar => filteredChar.health > threshold);
    return possibleWinners;
}

const characters = [
    { name: 'Mar', level: 1, health: 500 },
    { name: 'Cel', level: 2, health: 200 },
    { name: 'Gan', level: 3, health: 400 },
    { name: 'Ron', level: 2, health: 300 },
    { name: 'Dak', level: 1, health: 600 },
    { name: 'Ven', level: 3, health: 250 }
];

const healthThreshold = 1000;
const char = createCharacters(characters, healthThreshold);

//Print list of possible winners, who have health > 1000
console.log('Bài 1');
console.log(`Possible Winners after powering up are:`, char);

//Bài 2

function printLeaderboard(pl) {
    const sortedList = pl.sort((a, b) => b.scores - a.scores);
    const formattedList = sortedList.map((player, index) => {
            if (index === 0) {
                return `Gold   1. ${player.name} - ${player.scores} pts`;
            } else if (index === 1) {
                return `Silver 2. ${player.name} - ${player.scores} pts`;
            } else if (index === 2) {
                return `Bronze 3. ${player.name} - ${player.scores} pts`;
            } else {
                return `       ${index + 1}. ${player.name} - ${player.scores} pts`;
            }
        })
    return formattedList.join('\n');
}

// Create array
const players = [
    { name: 'Mario', scores: 500 },
    { name: 'Redem', scores: 1000 },
    { name: 'Vag', scores: 700 },
    { name: 'Alex', scores: 800 },
    { name: 'Pinton', scores: 750 },
    { name: 'John', scores: 900 },
    { name: 'May', scores: 850 },
    { name: 'Lane', scores: 650 },
    { name: 'Hin', scores: 790 },
];

console.log('Bài 2');
console.log(printLeaderboard(players));

//---------------------------------------------------------------------------------------
//Another solution
function printLeaderboard2(pl) {
    pl.sort(function (a, b) { return b.scores - a.scores });
        pl.forEach((player, index, arr) => {
            if (index === 0) {
                arr[index] = `Gold   1. ${player.name} - ${player.scores} pts`;
            } else if (index === 1) {
                arr[index] = `Silver 2. ${player.name} - ${player.scores} pts`;
            } else if (index === 2) {
                arr[index] = `Bronze 3. ${player.name} - ${player.scores} pts`;
            } else {
                arr[index] = `       ${index + 1}. ${player.name} - ${player.scores} pts`;
            }
        })
    return pl;
}

console.log(printLeaderboard2(players));
//--------------------------------------------------------------------------------------