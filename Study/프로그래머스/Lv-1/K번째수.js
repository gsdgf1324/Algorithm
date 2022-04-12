function solution(array, commands) {
    var answer = [];

    commands.forEach((dr) => {
        answer.push(array.slice(dr[0] - 1, dr[1]).sort((a, b) => { return a - b })[dr[2] - 1]);
    });

    return answer;
}

let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];
console.log(solution(array, commands));