/*
배열에서 중복된 값을 찾을 때
=> 정렬해줌
=> 정렬된 데어티에서 중복값은 왼쪽 이나 오른쪽 데이터에 같은 데이터가 있음 
=> 단, 처음과 마지막 인덱스에서는 한쪽 값만 체크(처음일 땐 오른쪽값, 마지막일 땐 왼쪽 값)
=> 따라서 위 조건에 만족하지 않는 데이터가 중복되지 않은 데이터임.
 */

function solution(input) {
    let answer = [];
    let sNum = input[1].split(' ').map((dr) => Number(dr)).sort((a, b) => a - b);

    for (let i = 0; i < sNum.length; i++) {
        if ((i == 0 || sNum[i - 1] != sNum[i]) && (i == sNum.length - 1 || sNum[i + 1] != sNum[i])) {
            answer.push(sNum[i]);
        }
    }

    return answer
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input))