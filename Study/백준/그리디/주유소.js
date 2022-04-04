function solution(input) {
    let answer = 0;
    let distance = input[1].split(' ').map((dr) => BigInt(dr));
    let pay = input[2].split(' ').map((dr) => BigInt(dr)).slice(0, -1);

    let curPay = pay[0];
    answer = distance[0] * pay[0];

    for (let i = 1; i < distance.length; i++) {
        if (curPay> pay[i]) {
            curPay = pay[i];
        }

        answer += curPay * distance[i];
    }

    return String(answer)
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));

// 기존 기름값, 현재 기름값을 비교하면서 더 적은 기름값으로 주입
// BigInt 공부하기