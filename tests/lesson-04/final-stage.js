function findPairsDivisibleBy17(startRange, endRange) {
    let count = 0;
    for (let i = startRange; i < endRange; i++) {
        for (let j = i + 1; j <= endRange; j++) {
            if ((i + j) % 17 === 0) {
                count++;
                console.log(`(${i} , ${j} ) = ${i + j}`);
            }

        }
    }

    console.log(`\nTổng cộng: ${count} cặp`);
}

console.log(`Các cặp số từ 1 đến 100 có tổng chia hết cho 17:`);
//Print pairs of numbers from 1 to 100 that have sum divided by 17
const total = findPairsDivisibleBy17(1, 100);