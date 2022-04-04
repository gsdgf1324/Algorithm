function solution(input) {
    input = Number(input);
    let inputArr = Array.from({ length: input }, (dr, idx) => dr = idx + 1);
    let answer = getCombination(inputArr, input);
    answer.forEach((dr) => {
        console.log(dr.join(' '))
    })
}

function getCombination(arr, comNum) {
    let result = [];

    if (comNum == 1) return arr.map((dr) => [dr]);

    arr.forEach((fix, idx, origin) => {
        let rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];

        // let rest = [...origin.slice(idx), ...origin.slice(idx + 1)];
        // 중복 포함 모든 순열

        // let rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
        // 중복X 모든 순열 

        // let rest = origin.slice(idx + 1);
        // 중복X 모든 조합

        let combineArr = getCombination(rest, comNum - 1);
        let mergeArr = combineArr.map((dr) => [fix, ...dr]);
        result.push(...mergeArr);
    });

    return result
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n')[0];
solution(input);