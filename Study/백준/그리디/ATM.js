function solution(input) {
    let answer = 0;

    input = input[1].split(' ').map((dr) => Number(dr)).sort((a, b) => a - b);
    input.forEach((dr, idx) => {
        let curSum = input.slice(0, idx + 1).reduce((acc, cur) => acc + cur, 0);
        answer += curSum;
    });

    return answer
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));