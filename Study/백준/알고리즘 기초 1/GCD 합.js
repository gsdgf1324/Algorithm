// 순열과 조합 공부하기 ! 

const { text } = require('stream/consumers');

function solution(input) {

    let answer = [];

    input = input.slice(1);

    input.forEach((dr) => {
        dr = dr.split(' ').map((dr) => Number(dr)).slice(1);

        let sum = 0;

        let combine = getCombination(dr, 2);

        combine.forEach((dt) => {
            let n1 = dt[0];
            let n2 = dt[1];
            let gcd = getGCD(Math.max(n1, n2), Math.min(n1, n2));
            sum += gcd;
        });

        answer.push(sum);
    });

    return answer.join('\n');
}

function getGCD(n1, n2) {
    return n1 % n2 == 0 ? n2 : getGCD(n2, n1 % n2);
}

// 조합
function getCombination(arr, combineNum) {

    let result = [];

    if (combineNum == 1) {
        return arr.map((dr) => [dr]);
    }

    arr.forEach((fixed, idx, origin) => {
        let rest = origin.slice(idx + 1);
        let combination = getCombination(rest, combineNum - 1);
        let attached = combination.map((dr) => [fixed, ...dr]);
        result.push(...attached);
    });

    return result;
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));