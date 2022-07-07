function solution(input) {
    input = Number(input[0]);

    return getFibo(input);
}

function getFibo(cnt) {

    if (cnt == 0) return 0;
    if (cnt == 1) return 1;

    return getFibo(cnt - 1) + getFibo(cnt - 2);
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));