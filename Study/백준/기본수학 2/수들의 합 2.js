/*

10 5
1 2 3 4 2 5 3 1 1 2

4 2
1 1 1 1

*/

function solution(input) {

    let answer = 0;

    let N = Number(input[0].split(' ')[0]); // 배열의 원소 수
    let M = Number(input[0].split(' ')[1]); // sums 값
    let numArr = input[1].split(' ').map((dr) => Number(dr)); // 주어진 숫자 배열

    let sIdx = -1; // 시작하는 지점의 idx
    let fIdx = -1; // 끝나는 지점의 idx
    let sums = 0; // 시작~끝 값의 합

    while (true) {

        // 끝 idx가 배열의 마지막 값까지 올때까지 => 시작, 끝 idx 둘 다 체크
        if (fIdx < N - 1) {
            /* 합이 결과(M)보다 작은 경우 끝 idx 한칸 이동 : 합이 작으므로 끝 idx 값 더한 후 한칸 이동 */
            if (sums < M) {
                sums += numArr[++fIdx];
            }
            /* 합이 결과(M)보다 같거나 큰 경우 시작 idx 한칸 이동 : 합이 크므로 시작 idx 값 뺸 후 한칸 이동 */
            else {
                sums -= numArr[++sIdx];
            }
        }
        // 끝 idx가 배열의 마지막에 오면 : 시작 idx만 옮겨주면 
        else {
            sums -= numArr[++sIdx];
        }

        if (sums == M) answer += 1;

        if (fIdx >= N - 1 && sIdx >= N - 1) break;
    }

    return answer
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));