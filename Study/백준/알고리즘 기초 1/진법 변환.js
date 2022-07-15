function solution(input) {
    input = input[0].split(' ');

    let N = input[0];
    let B = Number(input[1]);

    return parseInt(N, B);
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));