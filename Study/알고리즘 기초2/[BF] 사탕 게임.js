function solution(input) {

    let answer = 1;
    let side = Number(input[0]);
    let squre = input.slice(1).map((dr) => {
        return [...dr]
    });

    for (let i = 0; i < side; i++) {

        let row = 1;
        let col = 1;

        for (let j = 0; j < side - 1; j++) {

            if (squre[i][j] !== squre[i][j + 1]) {
                [squre[i][j], squre[i][j + 1]] = [squre[i][j + 1], squre[i][j]]; // 인접 행 2개 데이터 바꾸고
                row = getMax(side, squre);
                [squre[i][j], squre[i][j + 1]] = [squre[i][j + 1], squre[i][j]]; //원상 복귀 
            }

            if (squre[j][i] !== squre[j + 1][i]) {
                [squre[j][i], squre[j + 1][i]] = [squre[j + 1][i], squre[j][i]]; // 인접 열 2개 데이터 바꾸고
                col = getMax(side, squre);
                [squre[j][i], squre[j + 1][i]] = [squre[j + 1][i], squre[j][i]]; // 원상 복귀
            }

            answer = Math.max(answer, row, col);
        }
    }

    return answer
}

// 현재 배열에서 연속된 수가 최대 몇번인지 카운트 (행, 열 만)
function getMax(side, squre) {

    let maxNum = 1;

    for (let i = 0; i < side; i++) {

        let checkNum = 1;

        for (let j = 0; j < side - 1; j++) {
            if (squre[i][j] == squre[i][j + 1]) {
                checkNum += 1;
            } else {
                maxNum = Math.max(maxNum, checkNum); // 색이 바뀌어 checkNum을 초기화 할 때도 검사 필요
                checkNum = 1;
            }
        }
        maxNum = Math.max(maxNum, checkNum);

        checkNum = 1;
        for (let j = 0; j < side - 1; j++) {
            if (squre[j][i] == squre[j + 1][i]) {
                checkNum += 1;
            } else {
                maxNum = Math.max(maxNum, checkNum); // 색이 바뀌어 checkNum을 초기화 할 때도 검사 필요
                checkNum = 1;
            }
        }
        maxNum = Math.max(maxNum, checkNum);

    }

    return maxNum;
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));