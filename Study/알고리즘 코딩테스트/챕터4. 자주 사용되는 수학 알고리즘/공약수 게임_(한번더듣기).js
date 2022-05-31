/*
3
4 4 1
=> 2
3
8 24 9
=> 12

대부분 문제에서 주어진 게임의 규칙을 사용해서 숫자를 변형해 나가는 방식은 어려움

최대공약수의 성질
- 여러 숫자의 최대 공약수는 각 소인수 P에 대해 가장 적게 존재하는 빈도수 만큼 곱해주면 된다.
- 결과적으로 최대 공약수를 최대화하기 위해서는 각 소인수를 최소 빈도로 가지고 있는 숫자의 빈도수를 높여 주어야한다.
=> 소인수를 N개의 카드에 최대한 고르게 배분하면 최대공약수는 최대가 된다.
 */
function solution(input) {

    /*
  전체 소인수에 대한 빈도수 계산
  각 소인수를 n개의 카드에 균등분할
  => 각 카드에 대한 소인수 p를 freqency[p]/n 만큼 곱해준다.
   */

    let frequency = Array.from({ length: 1000001 }).fill(0);

    let answer = 1;

    let N = Number(input[0]);
    input = input[1].split(' ').map((dr) => Number(dr));

    for (let i = 0; i < input.length; i++) {
        let factors = factorize(input[i]);
        for (let j = 0; j < factors.length; j++) {
            frequency[factors[j]] += 1;
        }
    }

    for (let i = 2; i <= 1000000; i++) {
        if (frequency[i] == 0) {
            continue;
        }
        let cnt = frequency[i] / N;
        answer *= Math.pow(i, cnt);
    }

    return answer
}

function factorize(N) {
    let result = [];
    for (let div = 2; div ** 2 <= N; div += 1) {
        while (N % div == 0) {
            N /= div;
            result.push(div);
        }
    }

    if (N > 1) {
        result.push(N);
    }

    return result
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input))