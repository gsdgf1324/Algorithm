/*
2
23
=>
7

일정한 주기를 두고 반복되는 일들은 동시에 만나는 지점이 항상 존재 (시계의 시분초, 주기적 발생 이벤트 등..)
=> 주기가 일정한 사건들의 발생 시험을 계산 할 때는 공배수의 성질을 잊지 말자! 

*/

function solution(input) {
    let answer = 0;

    input.shift();
    input = input[0].split(' ').map((dr) => Number(dr)).sort((a, b) => a - b);
    answer = getLCM(input) + 1;

    return answer
}

// 여러 숫자에 대한 공통 최소 공배수를 계산하는 함수
function getLCM(numArr) {
    if (numArr.length == 0) {
        return 0;
    }

    let gcd = (a, b) => a % b == 0 ? b : gcd(b, a % b);
    let lcm = numArr[0];

    for (let i = 1; i < numArr.length; i++) {
        lcm = lcm * numArr[i] / gcd(lcm, numArr[i]);
    }

    return lcm
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input))
