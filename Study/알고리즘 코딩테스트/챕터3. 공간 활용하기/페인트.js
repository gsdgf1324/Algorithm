/* 시뮬레이션 문제
각 과정별로 색칠한 좌석과 색상 정보가 주어지며,
순서 또한 명확히 주어진다.
즉, 주어진 순서대로 실제로 수행하다보면 최종 색칠 결과 또한 계산이 가능하다.

단, 좌석의 번호는 1과 N사이의 자연수이며. 색깔의 번호는 0이상 99이하의 정수이다.
=> 라는 말이 명시되어 있으므로, 전화번호 문제와 같이 배열 idx를 색의 번호라고 생각하고 cnt를 체크하면 됨
 */

function solution(input) {

    let colorTable = Array.from({ length: 100 }).fill(0);
    // 사용한 color cnt 를 체크해 줄 배열, 색(0~99)를 idx로 가진다고 생각하면 됨 => 전화번호 문제와 비슷!

    let N = Number(input[0].split(' ')[0]); // 좌석의 수 N
    let seats = Array.from({ length: N }).fill(0); // 좌석 배열 초기 좌석은 모두 흰색

    let paintings = input.slice(1); // 페인팅 정보 => "색칠할 가장 왼쪽 번호, 색칠할 가장 오른쪽 번호, 색 번호"

    for (let p of paintings) {

        p = p.split(' ');

        let pLeft = Number(p[0]);
        let pRight = Number(p[1]);
        let pColor = Number(p[2]);

        for (let i = pLeft; i <= pRight; i++) {
            seats[i] = pColor; // 좌석에 색을 칠해줌
        }
    }

    for (let i = 0; i < N; i++) {
        colorTable[seats[i]] += 1;
    }

    let minColor = -1;
    let maxColor = -1;

    for (let i = 0; i < colorTable.length; i++) {

        if (colorTable[i] != 0) {

            // 최소값 => 같은 최소값일 때 작은 색을 리턴
            if (minColor == -1 || colorTable[i] < colorTable[minColor]) {
                minColor = i;
            }

            // 최대값 => 같은 최대값일 때 큰 색을 리턴
            if (maxColor == -1 || colorTable[i] > colorTable[maxColor]) {
                maxColor = i;
            }

        }

    }

    return [maxColor, minColor].join('\n');
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));