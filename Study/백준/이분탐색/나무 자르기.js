function solution(input) {
    let M = Number(input[0].split(' ')[1]);
    let wood = input[1].split(' ').map((dr) => Number(dr)).sort((a, b) => a - b);

    let answer = 0;
    let sValue = 0;
    let mValue = wood[wood.length - 1];
    let mid = Math.floor((sValue + mValue) / 2)

    while (mValue - sValue >= 0) {
        let curWood = wood.reduce((acc, cur) => cur > mid ? acc + (cur - mid) : acc + 0, 0);

        // 더 많은 나무를 자른 경우
        if (curWood >= M) {
            sValue = mid + 1;
            answer = Math.max(answer, mid);
        }
        // 더 작은 나무를 자른 경우
        else {
            mValue = mid - 1;
        }

        mid = Math.floor((sValue + mValue) / 2);
    }

    return answer
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));