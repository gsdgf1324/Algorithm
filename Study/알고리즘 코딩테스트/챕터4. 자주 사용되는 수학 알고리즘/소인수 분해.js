/*
3
24
28
21
=>
#1:
2 2 2 3
#2:
2 2 7
#3:
3 7

소수는 소인수 분해의 결과가 자기 자신임 (ex 7 => 7)
그러므로, 2 ~ sqrt(N) 범위에서 약수를 찾지 못하면 소수이므로, 더 이상 소인수 분해를 하지 않아도 됨!
따라서 N이 소수이면 sqrt(N)까지만 검사하고, 합성수이면 N이 점점 작아지다 답을 도출함.
 */

function solution(input) {

    let factors = [];
    input.shift();

    let N = Number(input[0]);
    for (let div = 2; div ** 2 <= N; div++) {
        while (N % div == 0) {
            factors.push(div);
            N /= div;
        }

        // 만약 남은 N이 소수라면? div<= sqrt(N)까지 탐색을 하다가 종료가 된다.
    }

    // N이 1이 아닌 다른수가 남아있는 경우 N은 소수임
    /*
    ex) 14를 예를 들면 
    div = 2 :: 2 * 7 (N=7)
    div = 3 :: N은 현재 7이므로 위 조건에 맞지 않아(div**2<=N) 빠져나옴 따라서 현재 N = 7
    이처럼 N이 1이 아닌 경우는 소수인 경우 뿐임.
     */
    if (N > 1) {
        factors.push(N);
    }


    /*
    위와 같이 코드를 구현하면 반환하는 리스트는 항상 오름차순이다.
     - div가 오름차순으로 검사하기 떄문이다.
     - 남은 N이 1보다 큰 경우 항상 기존 div들보다 크기떄문이다.
     - 시간복잡도 : O(sqrt(N))
     */
    return factors
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input))