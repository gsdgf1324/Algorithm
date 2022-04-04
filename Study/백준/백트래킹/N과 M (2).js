function solution(input) {
    let N = input[0], M = input[1];
    let nArr = Array.from({ length: N }, (dr, idx) => dr = idx + 1);

    getCombination(nArr, M).forEach((dr) => {
        console.log(dr.join(' '))
    })
}

function getCombination(arr, comNum) {
    let result = [];

    if (comNum == 1) return arr.map((dr) => [dr]);

    arr.forEach((fix, idx, origin) => {
        let rest = origin.slice(idx + 1);
        let combineArr = getCombination(rest, comNum - 1);
        let mergeArr = combineArr.map((dr) => [fix, ...dr]);
        result.push(...mergeArr);
    });

    return result
}

'/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n')[0].split(' ');
solution(input);

// 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
// 고른 수열은 오름차순이어야 한다.