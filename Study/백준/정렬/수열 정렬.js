function solution(input) {
    let N = Number(input[0]);
    let arrayA = input[1].split(' ').map((dr, idx) => [Number(dr), idx]);
    arrayA = arrayA.sort((a, b) => { return a[0] - b[0] }).map((dr, idx) => [...dr, idx]);
    arrayA.sort((a, b) => { return a[1] - b[1] });
    return [...arrayA.map((dr) => dr[2])].join(' ');
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));

/*

// [2, 3, 1]
// p = [0,1,2];
// B[0] = 2;
// B[1] = 3;
// B[2] = 1;

// p = [0,1,2];
// B[2,0] = 1;
// B[0,1] = 2;
// B[1,2] = 3;

// p = [1,2,0];
// B[0,1] = 2;
// B[1,2] = 3;
// B[2,0] = 1;

*/