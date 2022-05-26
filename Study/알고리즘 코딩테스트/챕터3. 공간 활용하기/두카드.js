/*
5 3
1 9 2 7 3
6 7 8
=> 2

어떤 '조합'을 만드는 과정은 순차적인 선택의 반복으로 이루어진다.
=> 해당 문제는 특정 조건하에 선택을 반복함으로써, 뒤에 선택 될 원소들은 그 범위가 한정적임.
ex) 두 수의 합이 5 => 4를 고르면 나머지 하나의 숫자는 1이어야 5가 됨

이진 검색 알고리즘 (Binary Search) => 시간복잡도 log2의 N
- 조건 1. 정렬되어 있어야함.
 */

function solution(input) {

    let answer = 0;
    let [N, M] = input.shift().split(' ').map((dr) => Number(dr)); // N:카드 수, M:당첨 번호 수
    let cardArr = input.shift().split(' ').map((dr) => Number(dr)).sort((a, b) => a - b); // 카드 번호 리스트
    let winArr = input.shift().split(' ').map((dr) => Number(dr)); // 당첨 번호 리스트

    for (let i of winArr) {
        for (let j of cardArr) {
            let rest = i - j;
            if (binary(cardArr, 0, N - 1, rest) == 1) {
                answer += 1;
                break;
            }
        }
    }

    return answer
}

function binary(arr, sIdx, eIdx, findValue) {

    if (sIdx <= eIdx) {

        let mid = Math.floor((sIdx + eIdx) / 2);

        // 같다면 1 리턴
        if (arr[mid] == findValue) {
            return 1
        }
        // 범위의 중간 값이 더 크면 왼쪽데이터를 다시 탐색해야하므로 sIdx ~ mid-1
        else if (arr[mid] > findValue) {
            return binary(arr, sIdx, mid - 1, findValue);
        }
        // 범위의 중간 값이 더 작다면 오른쪽데이터를 다시 탐색해야하므로 mid+1 ~ eIdx
        else {
            return binary(arr, mid + 1, eIdx, findValue);
        }

    }

    // 찾지 못한 경우
    return 0
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input))