function solution(input) {
    console.log(input);
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n')[0];
console.log(solution(input));