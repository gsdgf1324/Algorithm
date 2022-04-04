function solution(input) {
    let N = Number(input[0].split(' ')[1]);
    let lines = input.slice(1).map((dr) => Number(dr)).sort((a, b) => a - b);

    let answer = 0;
    let sLen = 0;
    let eLen = lines[lines.length - 1];
    let mid = Math.floor((sLen + eLen) / 2);

    while (eLen - sLen >= 0) {
        let curCnt = lines.reduce((acc, cur) => acc + Math.floor(cur / mid), 0);

        if (curCnt >= N) {
            sLen = mid + 1;
            answer = Math.max(answer, mid);
        } else {
            eLen = mid - 1;
        }

        mid = Math.floor((sLen + eLen) / 2);
    }

    return answer
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));