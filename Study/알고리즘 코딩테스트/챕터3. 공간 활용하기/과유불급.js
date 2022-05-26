/*
5 2
1 -1 5 2 3
2 4
1 3
=> 1 6

고차원적이고 복잡한 정보는 단순한 여러 정보들의 조합으로 표현될 수 있다.
 고 차원 정보 : 왼쪽 끝과 오른쪽 끝으로 표현된 범위
 저 차원 정보 : 오른쪽 끝으로만 표현된 범위. 왼쪽 끝은 항상 1

선형 공간에서 주어진 범위의 원소들에 대한 합을 계산하는 문제
=> 누적합으로 풀기!
=> 모든 구간에 대해서 계산하는 것이 아니라 시작점은 항상 첫번쨰 원소고 R번쨰 원소까지 합을 앞에서부터 쭉 더해오는 패턴.

ex) [1, -1, 5, 2, 3]
누적합 배열 : [1, 0, 5, 7, 10]

 */

function solution(input) {

    let maxSum = 0;
    let answer = 0;
    let N = Number(input[0].split(' ')[0]);
    let M = Number(input[0].split(' ')[1]);
    let cardArr = input[1].split(' ').map((dr) => Number(dr));
    let idxArr = input.slice(2);

    /* 일반적인 방법
    => sIdx ~ eIdx까지 구간을 반복하며 합을 구하는 방법 
    => 시간복잡도 O(N*M)

    for (let i = 0; i < idxArr.length; i++) {
        let temp = idxArr[i].split(' ')
        let sIdx = Number(temp[0]) - 1;
        let eIdx = Number(temp[1]) - 1;

        let sums = 0;
        for (let j = sIdx; j <= eIdx; j++) {
            sums += cardArr[j];
        }

        if (maxSum < sums) {
            answer = i + 1
            maxSum = sums;
        }

    }
    */


    /* 누적합 */
    let rangeSum = Array.from({ length: N + 1 }).fill(0) // 누적합 배열
    // rangeSum[0]=0; 0번째 idx는 0으로 두고 하느 것이 편함. fill(0)으로 다 0으로 채웠으므로 일단 주석쳐둠.

    // 누적합 구하기
    for (let i = 1; i <= N; i++) {
        rangeSum[i] = rangeSum[i - 1] + cardArr[i - 1]
    }

    for (let i = 0; i < idxArr.length; i++) {

        let sums = 0;
        let temp = idxArr[i].split(' ')
        let sIdx = Number(temp[0]);
        let eIdx = Number(temp[1]);

        sums = rangeSum[eIdx] - rangeSum[sIdx - 1];

        if (maxSum < sums) {
            answer = i + 1;
            maxSum = sums;
        }

    }

    return [answer, maxSum].join('\n')
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input))