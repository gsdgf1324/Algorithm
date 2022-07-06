/*
길이가 같은 배열 A, B 두개가 있습니다. 각 배열은 자연수로 이루어져 있습니다. ~

function solution(A, B) {
    let answer = 0;
    A.sort((a, b) => { return a - b });
    B.sort((a, b) => { return b - a });

    A.forEach((dr, idx) => {
        answer += (dr * B[idx]);
    })
    return answer;
}

let A = [1, 4, 2];
let B = [5, 4, 4];
console.log(solution(A, B));

 */

/*
1와 0로 채워진 표(board)가 있습니다. 표 1칸은 1 x 1 의 정사각형으로 이루어져 있습니다. ~

function solution(board) {
    let answer = 0;

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {

            if (board[i][j] == 1 && answer < (board.length - i + 1) ** 2) {
                answer = Math.max(answer, checkSquare(board, i, j));
            }

        }
    }
    return answer;
}

function checkSquare(board, i, j) {
    let checkI = i + 1;
    let checkJ = j + 1;
    let result = 1;

    while (checkI < board.length && checkJ < board[i].length) {

        for (let tempI = i; tempI <= checkI; tempI++) {
            for (let tempJ = j; tempJ <= checkJ; tempJ++) {
                if (board[tempI][tempJ] == 0) {
                    return result;
                }
            }
        }

        result = (checkI - i + 1) * (checkJ - j + 1);
        checkI++
        checkJ++
    }

    return result;
}

 */

function solution(board) {
    let answer = 0;

    if (board.length == 1 || board[0].length == 1) {
        return 1
    }

    for (let i = 1; i < board.length; i++) {
        for (let j = 1; j < board[i].length; j++) {

            if (board[i][j] != 0) {
                let minValue = Math.min(
                    board[i - 1][j - 1], //좌측 상단
                    board[i][j - 1], //좌측
                    board[i - 1][j], //위쪽
                );

                board[i][j] = minValue + 1;

                answer = Math.max(answer, board[i][j]);
            }

        }
    }

    return answer ** 2

}

let board = [[0, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [0, 0, 1, 0]];
console.log(solution(board));

// 0 1 1 1
// 1 1 1 1
// 1 1 1 1
// 0 0 1 0