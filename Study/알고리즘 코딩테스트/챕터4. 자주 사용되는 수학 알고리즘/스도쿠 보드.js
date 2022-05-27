/*
    5
    1
    2
    3
    4
    5
    =>
    Case #1:
    1 1 1
    Case #2:
    1 2 1
    Case #3:
    1 3 1
    Case #4:
    1 4 2
    Case #5:
    1 5 2

각 칸의 번호에 대해서 행번호와 열번호를 나열해보자.
- 행 번호는 규칙적인 일정한 마디가 생긴다. :: 몫과 관련
- 열 번호를 순환하는 일정한 주기가 생긴다. :: 나머지와 관련
- 번호 체계를 0부터 시작하면 :: 몫과 나머지에 대한 연관성이 명확

이 문제에서 행의 번호는 i / 9 (몫)
이 문제에서 열의 번호는 i mod 9 (나머지)
 */

function solution(input) {

    let answer = [];
    let N = Number(input[0]);
    let caseArr = input.slice(1).map((dr) => Number(dr));

    for (let i = 0; i < N; i++) {
        let num = caseArr[i];
        let row = getRowIdx(num);
        let col = getColIdx(num);
        let group = getGroupIdx(row, col);
        console.log(`Case #${i + 1}\n${row} ${col} ${group}`);
    }

}

// 행의 idx : idx이므로 +1
function getRowIdx(num) {
    let row = Math.floor((num - 1) / 9) + 1;
    return row
}

// 열의 idx : idx이므로 +1
function getColIdx(num) {
    let col = (num - 1) % 9 + 1;
    return col;
}

// 속한 그룹의 idx
function getGroupIdx(row, col) {

    // 행의 번호를 통해서 그 행의 가장 왼쪽 그룹 번호를 계산
    let left = Math.floor((row - 1) / 3) * 3 + 1;

    // 열의 번호를 통해서 그 열의 몇번째 그룹인지를 계산
    let offset = Math.floor((col - 1) / 3);

    let group = left + offset;

    return group
}

// 행번호, 열번호를 통한 칸의 번호 계산
function getPosition(row, col) {
    let left = 1 + (row - 1) * 9;
    let offset = col - 1;
    return left + offset;
}


// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input))