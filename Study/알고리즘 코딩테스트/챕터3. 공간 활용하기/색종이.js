/*
ex)
2
3
37
157
52
4
37
52
157
1314

- 문제 축소하기 
=> 다루어야 할 데이터에 제한되고 원하는 결과가 단순해질 수록 계산이 가능해진다.
=> 고려하지 않아도 될 불필요한 정보가 점점 많아지기 때문
=> 유한하고, 이산적이고, 평면적인 기하 정보는 상대적으로 다루기 쉬움

이 문제는!
=> 모든 사각형의 네 변은 좌표축과 수직/ 수평하다. (모든 교차 영역의 모양 또한 직사각형)
=> 모든 사각형의 네 점은 정수 좌표계에 존재.
=> 도화지의 크기가 100 * 100 으로 고정, 10 * 10정사각형을 그림
 */

function solution(input) {

    let result = [];
    let T = Number(input.splice(0, 1));

    while (input.length > 0) {

        let answer = 0;
        let N = input.splice(0, 1);
        let P = input.splice(0, N);
        let board = Array.from(Array(101), () => Array(101).fill(0));

        // 각 칸에 덮혀진 색종이를 카운트 하는 로직
        for (let i = 0; i < P.length; i++) {
            let [botX, botY] = P[i].split(' ').map((dr) => Number(dr));
            // 색종이 P가 덮고 있는 모든 칸의 좌표
            for (let j = botX; j < botX + 10; j++) {
                for (let k = botY; k < botY + 10; k++) {
                    board[j][k] += 1;
                }
            }

        }

        // 픽셀에 한번이라도 색이 칠해져있다면 +1 
        for (let i = 0; i <= 100; i++) {
            for (let j = 0; j <= 100; j++) {
                if (board[i][j] >= 1) {
                    answer += 1;
                }
            }
        }

        result.push(answer);

    }

    return result.join('\n')
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input))