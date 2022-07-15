function solution(input) {
    let arr = input[1].split(' ').map((dr) => Number(dr));
    arr.unshift(Number(input[0].split(' ')[1]));

    let filterData = [];

    for (let i = 0; i < arr.length - 1; i++) {
        filterData.push(Math.abs(arr[i] - arr[i + 1]));
    }

    let gcd = 0;
    let n1 = filterData[0];
    let n2 = 0;

    for (let i = 1; i < filterData.length; i++) {
        n2 = filterData[i];

        let maxNum = Math.max(n1, n2);
        let minNum = Math.min(n1, n2);

        gcd = getGCD(maxNum, minNum);
        n1 = gcd;
    }

    return n1
}

function getGCD(n1, n2) {
    return n1 % n2 == 0 ? n2 : getGCD(n2, n1 % n2);
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));