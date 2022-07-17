function solution(input) {
    input = Number(input[0]);

    const dpArr = Array.from({ length: input + 1 }).fill(0);

    // 3n+1
    // 2n+1
    // +1

    for (let i = 2; i <= input + 1; i++) {

        dpArr[i] = dpArr[i - 1] + 1; // 기본적으로 전 값의 +1 임

        if (i % 3 == 0) { // 3으로 나누어 떨어진다면 => i/3한 위치의 값의 +1 로도 만들어질 수 있으므로 비교하기
            dpArr[i] = Math.min(dpArr[i / 3] + 1, dpArr[i]);
        }
        if (i % 2 == 0) { // 2으로 나누어 떨어진다면 => i/2한 위치의 값의 +1 로도 만들어질 수 있으므로 비교하기
            dpArr[i] = Math.min(dpArr[i / 2] + 1, dpArr[i]);
        }

    }

    return dpArr[input];
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));