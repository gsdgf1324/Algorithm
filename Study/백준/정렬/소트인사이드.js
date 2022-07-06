function solution(input) {
    // 문자열 정렬만 조심!
    return String(input).split('').sort((a, b) => {
        if (a > b)
            return -1;
        else {
            return 1;
        }
    }).join('');
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));