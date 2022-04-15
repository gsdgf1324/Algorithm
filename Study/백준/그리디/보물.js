/*
1. 두 배열의 같은 인덱스 값을 곱한 값을 마지막 인덱스까지 더했을 때 최솟값을 구하는 문제.
2. 따라서 인덱스끼리 곱한 값이 최솟값이 나오려면 배열 하나는 오름차순 정렬, 하나는 내림차순 정렬하여 최솟값을 구해줌.
*/

function solution(input) {
    let answer = 0;

    let A = input[1].split(' ').sort((a, b) => Number(a) - Number(b));
    let B = input[2].split(' ').sort((a, b) => Number(b) - Number(a));

    answer = A.reduce((acc, cur, idx) => acc += (cur * B[idx]), 0);

    return answer
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input))