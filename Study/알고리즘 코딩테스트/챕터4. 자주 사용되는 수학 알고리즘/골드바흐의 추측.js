/*
20
=> 3+ 17
42
=> 5+ 37


4보다 큰 모든 짝수 자연수는 홀수인 두 소수의 합으로 표현될 수 있다.
=> 에라스토테네스의 체
*/

function solution(input) {
    let N = Number(input[0]);

    let fillArr = fillSieve(N);

    for (let p = 3; p <= N / 2; p += 2) {
        let q = N - p;
        if (fillArr[p] && fillArr[q]) {
            return [p, q]
        }
        // p && q 가 모두 소수이면 정답!
    }
}

function fillSieve(N) {
    let isPrime = Array.from({ length: N + 1 }).fill(true);

    isPrime[1] = false;

    for (let num = 2; num <= N; num++) {
        if (isPrime[num] == false) {
            continue;
        }

        for (let i = num * num; i <= N; i += num) {
            isPrime[i] = false;
        }
    }

    return isPrime;
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input))