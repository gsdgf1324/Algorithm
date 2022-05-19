/*
전화번호 뒷자리는 0000~9999사이 중 하나
    - 모든 전화번호를 인덱스를 가지는 배열을 만들고
    - 주어진 전화번호 배열을 순회하며 전화번호, 즉 배열의 idx에 +1을 해줌
    - 최대 카운터를 구하고
    - 해당 카운터와 동일한 전화번호 추출
 */


function solution(input) {
    let answer = [];
    let maxNum = 0;
    let N = input[0].split(' ')[0];
    let numArr = input[0].split(' ').slice(1).map((dr) => Number(dr));
    let checkArr = Array.from({ length: 10000 }).fill(0);

    for (let i = 0; i < N; i++) {
        checkArr[numArr[i]] += 1;
    }

    maxNum = Math.max(...checkArr);

    for (let i = 0; i < checkArr.length; i++) {
        if (checkArr[i] == maxNum) {
            answer.push(String(i).padStart(4, '0'));
        }
    }

    return answer.join(' ');
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input))