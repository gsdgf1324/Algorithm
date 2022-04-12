function solution(board, moves) {
    let answer = 0;
    let insert = [];

    moves.forEach((move) => {
        let idx = move - 1;
        for (let i = 0; i < board.length; i++) {
            if (board[i][idx] != 0) {
                insert.push(board[i][idx])
                board[i][idx] = 0;
                break;
            }
        }
        
        function delBlock(insert, cnt) {
            if (insert.length >= 2 && insert[insert.length - 1] == insert[insert.length - 2]) {
                insert = insert.slice(0, insert.length - 2);
                return delBlock(insert, cnt + 1)
            }
            return [insert,cnt];
        }
        let results = delBlock(insert, 0);
        insert = results[0]
        delCnt = results[1]

        answer += 2 * delCnt
    });

    return answer;
}


let board = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1]
];
let moves = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(board, moves));