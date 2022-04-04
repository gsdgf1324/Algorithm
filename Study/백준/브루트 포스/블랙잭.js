function solution(input) {
    let parma1 = input[0].split(' ');
    let parma2 = input[1].split(' ');
    let N = Number(parma1[0]), M = Number(parma1[1]);

    let combineData = getCombination(parma2, 3);

    let answer = 0;
    combineData.forEach((dr) => {
        let sums = dr.reduce((acc, cur) => Number(acc) + Number(cur), 0);
        if (answer < sums && sums <= M) {
            answer = sums
        }
    });

    return answer
}

// 조합
function getCombination(arr, comNum) {
    let result = [];

    if (comNum == 1) {
        return arr.map((dr) => [dr]);
    }

    arr.forEach((fix, idx, origin) => {
        let rest = origin.slice(idx + 1);
        let combination = getCombination(rest, comNum - 1);
        let attach = combination.map((br) => [fix, ...br]);
        result.push(...attach);
    });

    return result
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));