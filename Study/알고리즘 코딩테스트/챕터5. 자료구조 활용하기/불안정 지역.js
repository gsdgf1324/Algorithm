/*
7 3
10 2 5 3 7 9 1
=> 8 

레이지 업데이트?
Lazy Propagation
- 지금 당장 꼭 필요한 업데이트가 아니라면 미루기
- 계산 결과에 꼭 필요한 업데이트만 지금 하는 것


 */

function solution(input) {
    let settings = input.shift();
    let N = settings[0];
    let K = settings[2];

    // 소득 가장 낮은 도시부터 pop되는 우선순위 큐
    let rangeMinmum = 0;

    // 소득 가장 높은 도시부터 pop되는 우선순위 큐
    let rangeMaxmum = 0;

    console.log(N, K)
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));