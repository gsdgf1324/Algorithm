/*
ZSWDFCSHWV
BNWOTHOWMS
BNWOTHOWMS
BNWOTHOWMS
BNWOTHOWMS
OTNCCCTKGM
BNWOTHOWMS
BNWOTHOWMS
ZSWDFCSHWV
ZSWDFCSHWV
=>
6
BNWOTHOWMS
 */

const { off } = require('process');

function solution(input) {
    let inputMap = new Map();
    let inputArr = [];
    let maxScore = 1;

    for (let i = 0; i < input.length; i++) {
        let name = input[i];
        if (inputMap.has(name)) {
            let setValue = inputMap.get(name) + 1;
            inputMap.set(name, setValue);
            maxScore = Math.max(maxScore, setValue);
        } else {
            inputMap.set(name, 1);
        }
    }

    inputArr = [...inputMap].filter((dr) => dr[1] == maxScore).map((dr) => dr[0]).sort((a, b) => {
        if (a < b) return -1;
        else if (a == b) return 0;
        else return 1;
    });

    return maxScore + '\n' + inputArr.join(' ');
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));