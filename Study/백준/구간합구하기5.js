/*
4 3
1 2 3 4
2 3 4 5
3 4 5 6
4 5 6 7
2 2 3 4
3 4 3 4
1 1 4 4

27
6
64
 */

/*
function solution(input) {
    let answer = [];
    let set = input.shift().split(' ');
    let N = Number(set[0]); // 행렬의 크기
    let M = Number(set[1]); // 구간합 구해야할 구간
    let matrix = Array.from(Array(N), () => Array(N).fill(0)); // N*N 크기의 행렬 초기화

    // matrix 채워주기 - 누적합으로!
    for (let i = 0; i < N; i++) {
        let curRow = input.shift().split(' ').map((dr) => Number(dr));

        for (let j = 0; j < curRow.length; j++) {
            // 첫번쨰 행은 윗 행이 없으므로
            if (i == 0) {
                matrix[i][j] = (matrix[i][j - 1] ? matrix[i][j - 1] : 0) + curRow[j];
            }
            // 두번째 행부터 위 행의 값도 더해야줘야함
            else {
                matrix[i][j] =
                    (matrix[i - 1][j] || 0) + // 위쪽 부분
                    (matrix[i][j - 1] || 0) - // 왼쪽 부분 
                    (matrix[i - 1][j - 1] || 0) // 겹치는 부분 빼주고
                    + curRow[j]; // 자기 자신
            }
        }
    }

    for (let i = 0; i < input.length; i++) {
        let curRow = input[i].split(' ').map((dr) => Number(dr));

        // -1 하는 이유는 matrix에 idx로 접근하기 위해
        let p1 = [curRow[0] - 1, curRow[1] - 1];
        let p2 = [curRow[2] - 1, curRow[3] - 1];

        let m_p1 = [p1[0] - 1, p2[1]];
        let m_p2 = [p2[0], p1[1] - 1];
        let overap_p3 = [Math.min(m_p1[0], m_p2[0]), Math.min(m_p1[1], m_p2[1])];

        let s1 = m_p1[0] >= 0 && m_p1[1] >= 0 ? (matrix[m_p1[0]][m_p1[1]] || 0) : 0;
        let s2 = m_p2[0] >= 0 && m_p2[1] >= 0 ? (matrix[m_p2[0]][m_p2[1]] || 0) : 0;
        let s3 = overap_p3[0] >= 0 && overap_p3[1] >= 0 ? (matrix[overap_p3[0]][overap_p3[1]] || 0) : 0;

        answer.push(
            matrix[p2[0]][p2[1]] - s1 - s2 + s3
        );
    }

    return answer.join('\n')
}
*/

function solution(input) {
    let answer = [];
    let set = input.shift().split(' ');
    let N = Number(set[0]); // 행렬의 크기
    let M = Number(set[1]); // 구간합 구해야할 구간
    let matrix = Array.from(Array(N + 1), () => Array(N + 1).fill(0)); // N*N 크기의 행렬 초기화

    // matrix 채워주기 - 누적합으로!
    for (let i = 1; i <= N; i++) {
        let curRow = input.shift().split(' ').map((dr) => Number(dr));

        for (let j = 1; j <= curRow.length; j++) {
            matrix[i][j] =
                (matrix[i - 1][j] || 0)
                + (matrix[i][j - 1] || 0)
                - (matrix[i - 1][j - 1] || 0) // 겹치는 부분 빼주고
                + curRow[j - 1]; // 자기 자신 더해주고
        }
    }

    for (let i = 0; i < input.length; i++) {
        let curRow = input[i].split(' ').map((dr) => Number(dr));

        let p1 = [curRow[0], curRow[1]];
        let p2 = [curRow[2], curRow[3]];

        let m_p1 = [p1[0] - 1, p2[1]]; // 빼야할 위치의 좌표1
        let m_p2 = [p2[0], p1[1] - 1]; // 빼야할 위치의 좌표2
        let overap_p3 = [Math.min(m_p1[0], m_p2[0]), Math.min(m_p1[1], m_p2[1])]; // 겹치는 부분의 좌표

        answer.push(
            matrix[p2[0]][p2[1]]
            - matrix[m_p1[0]][m_p1[1]]
            - matrix[m_p2[0]][m_p2[1]]
            + matrix[overap_p3[0]][overap_p3[1]] // 겹치는 부분은 2번 빼줬으므로 한번 더해주기
        );
    }

    return answer.join('\n')
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));