/*
5
3
5
3
2

OK
OK
DUPLICATED
DUPLICATED
OK

 */

function solution(input) {

    let answer = [];
    input = input.map((dr) => Number(dr));
    let treeSet = new Set();

    for (let i = 0; i < input.length; i++) {
        if (treeSet.has(input[i])) {
            answer.push('DUPLICATED');
        } else {
            treeSet.add(input[i]);
            answer.push('OK');
        }
    }

    return answer.join('\n');
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input))
