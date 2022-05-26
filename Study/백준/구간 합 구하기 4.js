/*
5 3
5 4 3 2 1
1 3
2 4
5 5

12
9
1
 */

function solution(input) {

    let answer = [];
    let [N, K] = input.shift().split(' ').map((dr) => Number(dr));
    let matrix = input.shift().split(' ').map((dr) => Number(dr));

    // 첫번째 원소는 0으로 => 인덱스로 접근하지 않고 순서로 접근하기 위해
    let prefixSum = Array.from({ length: N + 1 }).fill(0);

    // 누적합 구하기
    for (let i = 0; i < N; i++) {
        // 현재 인덱스 까지의 누적값 = 이전 인덱스의 누적값 + 현재 인덱스의 원소 값
        prefixSum[i + 1] = prefixSum[i] + matrix[i];
    }

    for (let i = 0; i < input.length; i++) {

        let [start, end] = input[i].split(' ').map((dr) => Number(dr));

        answer.push(
            // end까지 누적합에서 start-1까지 누적합을 빼주면 start ~ end 까지의 구간의 합과 같음
            prefixSum[end] - prefixSum[start - 1]
        );

    }

    return answer.join('\n')
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));
