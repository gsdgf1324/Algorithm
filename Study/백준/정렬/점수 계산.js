function solution(input) {

    let sumResult = 0;
    let sumIdx = [];

    let rank5 = input.map((dr, idx) => [Number(dr), idx + 1]).sort((a, b) => {
        if (a[0] < b[0]) return 1
        else return -1
    }).slice(0, 5);

    sumResult = rank5.reduce((acc, cur) => acc += cur[0], 0);
    sumIdx = rank5.map((dr) => dr[1]).sort();

    return `${sumResult}\n${sumIdx.join(' ')}`;
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));