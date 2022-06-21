/*
3
5
3
5
2
=>
1 1
2 1
2 2
2 2
3 1
 */
function solution(input) {

    let answer = [];
    let inputMap = new Map();
    input = input.map((dr) => Number(dr));

    for (let i = 0; i < input.length; i++) {
        let num = input[i];
        if (inputMap.has(num)) {
            inputMap.set(num, inputMap.get(num) + 1);
        } else {
            inputMap.set(num, 1);
        }

        answer.push(`${inputMap.size} ${inputMap.get(num)}`);
    }

    return answer.join('\n');
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input))