/*
7 5
1 1 1 1 1 5 1
=> 9 2

5 2
1 4 2 5 1
=> 7 1

5 3
0 0 0 0 0
=> SAD
 */

function solution(input) {
    let N = Number(input[0].split(' ')[0])
    let X = Number(input[0].split(' ')[1])
    let numArr = input[1].split(' ').map((dr) => Number(dr));

    let curV = 0; // 현재 값
    let maxV = 0; // 최대 값
    let maxC = 0; // 최대 값의 카운트

    for (let i = 0; i < N - X + 1; i++) {

        // 처음 값은 디폴트로 구해줌 (defalut 값)
        if (i == 0) {
            for (let j = 0; j < X; j++) {
                curV += numArr[j];
            }
            maxV = curV;
            maxC = 1;
        }
        // 다음 값 부터 ~
        else {

            // 전체적으로 한칸씩 오른쪽으로 이동한다고 생각해보면
            // 한칸 이동한 맨 왼쪽 값은 빼고
            // 한칸 이동한 맨 오른쪽 값은 더해준다!
            curV = curV - numArr[i - 1] + numArr[i + X - 1];

            if (curV == maxV) {
                maxC += 1;
            } else if (curV > maxV) {
                maxV = curV;
                maxC = 1;
            }
        }
    }

    return maxV == 0 ? 'SAD' : [maxV, maxC].join('\n');
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));