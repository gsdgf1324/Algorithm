function solution(input) {
    let N = Number(input[0]), M = Number(input[1]);
    let numArr = Array.from({ length: N }, (dr, idx) => dr = idx + 1);
    getCombination(numArr, M).forEach((dr) => {
        console.log(dr.join(' '));
    })
}

function getCombination(arr, comNum) {
    let result = [];

    if (comNum == 1) return arr.map((dr) => [dr]);

    arr.forEach((fix, idx, origin) => {
        let rest = origin.slice(idx);
        let combineArr = getCombination(rest, comNum - 1);
        let mergeArr = combineArr.map((dr) => [fix, ...dr]);
        result.push(...mergeArr);
    });

    return result
}

'/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n')[0].split(' ');
solution(input);

// 1부터 N까지 자연수 중에서 M개를 고른 수열
// 같은 수를 여러 번 골라도 된다.
// 고른 수열은 비내림차순이어야 한다.
// 길이가 K인 수열 A가 A1 ≤ A2 ≤ ... ≤ AK-1 ≤ AK를 만족하면, 비내림차순이라고 한다.