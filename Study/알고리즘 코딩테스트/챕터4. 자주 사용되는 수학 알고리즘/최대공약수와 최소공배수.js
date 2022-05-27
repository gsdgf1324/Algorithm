/*
3
75221805 105181189
549637764 122478642
456895740 642722400
=>
Case #1:
5879 1345793313255
Case #2:
24258 2775121070436
Case#3:
90780 3234821839200

[GCD] => 유클리드 호제법 알고리즘 :: A>B 일떄 A, B의 최대 공약수는 B와 (A%B)의 최대 공약수와 같다.
입력 : 두 정수
출력 : 최대 공약수
시간 복잡도 : O(log a)

[LCM] LCM = A*B/GCD
 */

function solution(input) {
    let N = Number(input.shift());

    for (let i = 0; i < N; i++) {
        let GCD = 0; // 최대공약수
        let LCM = 0; // 최소공배수
        let [A, B] = input[i].map((dr) => Number(dr));
    }
}

function getGCD(A, B) {
    // a가 b로 나누어 떨어지면 b가 최대 공약수
    // 그렇지 않다면? b와 (a%b)의 최대 공약수가 전채의 최대공약수가 된다.
    while (A % B != 0) {
        let C = A % B;
        A = B;
        B = C;
    }

    return B
}

function getGCD(A, B) {
    // a가 b로 나누어 떨어지면 b가 최대 공약수
    // 그렇지 않다면? b와 (a%b)의 최대 공약수가 전채의 최대공약수가 된다.
    while (A % B != 0) {
        let C = A % B;
        A = B;
        B = C;
    }

    return B
}


function getLCM(A, B) {
    return Math.floor(A * B / getGCD(A, B));
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input))