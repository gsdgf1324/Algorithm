function solution(input) {
    input = input[0].split(' ');
    let A = input[0], B = input[1], C = input[2]
    return C - B <= 0 ? -1 : Math.floor(A / (C - B)) + 1
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input))

// 이익이 없는 경우 -1 리턴
// 이익이 있는 경우 A 고정비용 값을 최초로 넘는 경우가 손익분기점