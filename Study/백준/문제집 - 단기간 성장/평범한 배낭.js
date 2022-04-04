function solution(input) {
    let answer = 0;
    let N = Number(input[0].split(' ')[0]);
    let K = Number(input[0].split(' ')[1]);
    input = input.slice(1);

    for (let i = 1; i <= N; i++) {
        let comArrs = getCombination(input, i);
        comArrs.forEach((dr) => {
            let sumsKey = dr.reduce((acc, cur) => acc + Number(cur.split(' ')[0]), 0);
            if (sumsKey <= K) {
                answer = Math.max(answer, dr.reduce((acc, cur) => acc + Number(cur.split(' ')[1]), 0))
            }
        })
    }

    return answer
}

function getCombination(arr, comNum) {
    let result = [];

    if (comNum == 1) return arr.map((dr) => [dr]);

    arr.forEach((fix, idx, origin) => {
        let rest = origin.slice(idx + 1);
        let conbineArr = getCombination(rest, comNum - 1);
        let mergeArr = conbineArr.map((dr) => [fix, ...dr]);
        result.push(...mergeArr);
    });

    return result
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));

//다시풀기