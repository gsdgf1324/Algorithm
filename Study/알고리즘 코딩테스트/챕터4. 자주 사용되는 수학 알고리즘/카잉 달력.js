/*
10 12 3 9
=> 33
10 12 7 2
=> -1

*규칙성을 사용한 반복문 설계
1. M으로 나눈 나머지가 k이다.
for(let i=k; i<=N; i+=M)
2. P의 배수이다.(=P로 나눈 나머지가 0)
for(let i=p; i<=N; i+=p)
3. A의 멱수(제곱수)다.
for(let i=a; i<=N; i*=a)

시간날 때 한번 다시 듣기!
 */

function solution(input) {
    let [N, M, x, y] = input[0].split(' ').map((dr) => Number(dr));
    console.log(N, M, x, y)
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input))
