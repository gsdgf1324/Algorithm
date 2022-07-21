function solution(input) {
    input = input.slice(1);

    let maxValue = Math.max(...input);
    let answerArr = Array.from({ length: maxValue + 1 }).fill(0);
    let answer = [];

    answerArr[1] = 1; // 1 
    answerArr[2] = 2; // 2
    answerArr[3] = 4; // 3

    for (let i = 4; i <= maxValue; i++) {
        answerArr[i] = answerArr[i - 3] + answerArr[i - 2] + answerArr[i - 1];
    }

    input.forEach((dr) => {
        answer.push(answerArr[Number(dr)]);
    });

    return answer.join('\n');

}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));