function solution(input) {

    let answer = 0;

    input.splice(0, 1)
    input.sort((a, b) => Number(a) - Number(b));

    if (input.length == 1) return input[0];

    answer = input.reduce((acc, cur, idx) => acc += (Number(cur) * (input.length - idx)), 0) - Number(input[0]);

    return answer
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input))