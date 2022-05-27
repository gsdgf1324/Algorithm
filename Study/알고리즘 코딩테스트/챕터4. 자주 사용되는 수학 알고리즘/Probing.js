/*
5000 5
2878
15092880
1
18762879
77787879
=>
2878
2880
1
2879
2881
*/
function solution(input) {

    let answer = [];
    let [N, M] = input.shift().split(' ').map((dr) => Number(dr));
    let userId = input.map((dr) => Number(dr));
    let used = Array.from({ length: N }).fill(false);

    for (let i = 0; i < userId.length; i++) {
        let curId = userId[i];
        let idx = findEmptyIdx(used, curId, N);
        used[idx] = true;
        answer.push(idx);
    }


    return answer.join('\n')
}

function findEmptyIdx(used, userId, Nlen) {
    let idx = userId % Nlen; // 가장 처음 시도 할 티켓 번호

    while (used[idx]) { // 사용된 번호라면 건너뛰도록
        idx = (idx + 1) % Nlen; // 다음 번호 조사 : 이렇게 나머지로 처리하면 마지막 인덱스에서 다음 인덱스 검사 시 처음인덱스 0으로 넘어감
    }

    return idx
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input))