function solution(n) {

    let answer = Array.from({ length: n }, (dr, idx) => [...'0'.repeat(idx + 1)]); // 배열 초기화
    let curIdx = [0, 0]; // 탐색을 시작할 인덱스
    let inputNum = 1;

    for (let i = 1; i <= n; i++) {

        let mod = i % 3;
        /*
            mod 1 아래로 이동
            mod 2 오른쪽으로 이동
            mod 0 위로 이동 
         */

        let row = curIdx[0];
        let col = curIdx[1];

        if (mod == 1) {
            /* 아래로 이동 시 행++ 해주며 탐색함
            반복문을 나오는 경우는
            1. 배열의 길이를 초과
            2. 탐색한 위치에 값이 있는 경우
            이므로 최종 row -=1 을 해줘야함.
            그리고 다음 탐색 시 현재 위치의 다음 열부터 탐색해줘야하므로 col += 1
             */
            while (answer[row]) {
                if (answer[row][col] == '0') {
                    answer[row++][col] = inputNum++;
                } else {
                    break;
                }
            }
            row -= 1;
            col += 1;
        }
        else if (mod == 2) {
            /* 오른쪽으로 이동 시 열++ 해주며 탐색함
            반복문을 나오는 경우는
            1. 배열의 길이를 초과
            2. 탐색한 위치에 값이 있는 경우
            이므로 최종 col -=1 을 해줘야함.
            또한 다음 탐색의 시작 위치는 이전 배열의 마지막 인덱스이므로
            col-=1, row-=1을 해줘야함. (col은 최종적으로 col-=2)
             */
            while (answer[row][col]) {
                if (answer[row][col] == '0') {
                    answer[row][col++] = inputNum++;
                } else {
                    break;
                }
            }
            row -= 1;
            col -= 2;
        }
        else {
            /* 위 이동 시 행--,열-- 해주며 탐색함
            반복문을 나오는 경우는
            1. 탐색한 위치에 값이 있는 경우
            이므로 최종 row +=1, col +=1 을 해줘야함.
            또한 다음 탐색의 시작 위치는 다음 배열의 col에 해당하는 인덱스이므로
            row+=1을 해줘야함. (row는 최종적으로 row+=2)
            */
            while (answer[row]) {
                if (answer[row][col] == '0') {
                    answer[row--][col--] = inputNum++;
                } else {
                    break;
                }
            }
            row += 2;
            col += 1;
        }

        // 탐색을 시작할 인덱스 값을 바꿔줌
        curIdx = [row, col];
    }

    return answer.reduce((acc, cur) => [...acc, ...cur]);
}

let n = 6;
console.log(solution(n));