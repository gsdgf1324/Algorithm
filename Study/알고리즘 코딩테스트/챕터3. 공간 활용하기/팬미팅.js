/*
5 2
930503 930503 890412 670610 680525
=> 3 

*Tip 고정 크기를 가지는 범위들은 슬라이딩 윈도우 방식으로 순회 가능하다.
=> 즉 중복 정보는 활용하고 차이만을 갱싱할 수 있을 때 사용한다.


각 범위에 대해 우리가 필요로 하는 정보는 무엇일까?
- 모든 원소가 서로 다르다 => 빈도수가 1인 원소는 유일하다. 즉 측정하는 범위에서 원소의 갯수와 유나크한 원소의 수가 같아야함
- 빈도수가 변하는 것은 추가, 삭제된 원소에서만 이뤄진다.
=> 변화가 일어나는 시점에서만 계산을 수행하고 결과를 기억해두는 것이 효율적이다!
 */

function solution(input) {

    let answer = 0;
    let uniqueNum = 0; // 유일한 원소의 개수
    let [N, K] = input.shift().split(' ').map((dr) => Number(dr));
    let birthArr = input.shift().split(' ').map((dr) => Number(dr));
    let frequency = {};

    // 슬라이딩 윈도우 문제를 편하게 푸는 법 => 0번쨰 idx는 따로 구해줌
    for (let i = 0; i < K; i++) {
        [frequency, uniqueNum] = addBirth(frequency, birthArr[i], uniqueNum);
    }

    for (let i = 1; i + K - 1 < N; i++) {
        [frequency, uniqueNum] = removeBirth(frequency, birthArr[i - 1], uniqueNum);
        [frequency, uniqueNum] = addBirth(frequency, birthArr[i + K - 1], uniqueNum);
        if (uniqueNum == K) {
            answer += 1;
        }
    }

    return answer
}

function addBirth(frequency, birthDate, uniqueNum) {
    let cnt = frequency[birthDate] ? frequency[birthDate] : 0;

    // 추가할 데이터가 없던 값이면 유일한 값임.
    if (cnt == 0) {
        uniqueNum += 1;
    }
    // 추가할 데이터가 있던 값이면 하나가 더 추가됨으로 유일한 값이 아니게 됨
    else {
        uniqueNum -= 1;
    }

    frequency[birthDate] = (frequency[birthDate] ? frequency[birthDate] : 0) + 1;

    return [frequency, uniqueNum];
}

function removeBirth(frequency, birthDate, uniqueNum) {
    let cnt = frequency[birthDate];

    // 삭제할 데이터의 빈도수가 1이면 유일한 값이었기 때문에 삭제 시 유일한 값 -1
    if (cnt == 1) {
        uniqueNum -= 1;
    }
    // 삭제할 데이터의 빈도수가 2이면 삭제 시 한개만 남으므로 유일한 값이 됨
    else if (cnt == 2) {
        uniqueNum += 1;
    }

    frequency[birthDate] -= 1;

    return [frequency, uniqueNum];
}


// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input))